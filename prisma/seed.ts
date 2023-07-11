import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

async function main() {
  const quotes = [
    {
      quote: "Toto, I've got a feeling we're not in Kansas anymore.",
      saidBy: 'Dorothy Gale',
      movie: 'The Wizard of Oz',
      movieId: 1,
    },
    {
      quote: "You're gonna need a bigger boat.",
      saidBy: 'Martin Brody',
      movie: 'Jaws',
      movieId: 2,
    },
    {
      quote: 'May the Force be with you.',
      saidBy: 'Han Solo',
      movie: 'Star Wars',
      movieId: 3,
    },
    {
      quote: 'I have always depended on the kindness of strangers.',
      saidBy: 'Blanche DuBois',
      movie: 'A Streetcar Named Desire',
      movieId: 4,
    },
  ]

  for (const { movieId, quote, saidBy, movie: movieName } of quotes) {
    const movie = await prisma.movie.upsert({
      where: { id: movieId },
      update: {},
      create: {
        name: movieName,
        quotes: {
          create: {
            quote: quote,
            saidBy: saidBy,
          },
        },
      },
    });

    console.log('created movie: ', {movie})
  }  
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });