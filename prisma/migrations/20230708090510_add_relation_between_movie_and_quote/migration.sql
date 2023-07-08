-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_quotes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quote" TEXT NOT NULL,
    "saidBy" TEXT NOT NULL,
    "movie_id" INTEGER NOT NULL,
    "created_datetime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "quotes_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_quotes" ("created_datetime", "id", "movie_id", "quote", "saidBy") SELECT "created_datetime", "id", "movie_id", "quote", "saidBy" FROM "quotes";
DROP TABLE "quotes";
ALTER TABLE "new_quotes" RENAME TO "quotes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
