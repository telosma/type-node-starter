import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

async function main() {
  // const quotes = [
  //   {
  //     quote: "Toto, I've got a feeling we're not in Kansas anymore.",
  //     saidBy: 'Dorothy Gale',
  //     movie: 'The Wizard of Oz',
  //   },
  //   {
  //     quote: "You're gonna need a bigger boat.",
  //     saidBy: 'Martin Brody',
  //     movie: 'Jaws',
  //   },
  //   {
  //     quote: 'May the Force be with you.',
  //     saidBy: 'Han Solo',
  //     movie: 'Star Wars',
  //   },
  //   {
  //     quote: 'I have always depended on the kindness of strangers.',
  //     saidBy: 'Blanche DuBois',
  //     movie: 'A Streetcar Named Desire',
  //   },
  // ]
  const movie = await prisma.movie.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Black And White',
      quotes: {
        create: {
          quote: 'This is good movie!',
          saidBy: 'Duyhihi'
        }
      }
    }
  })

  console.log({movie})
  
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