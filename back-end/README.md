# Paths
http://localhost:3003
- Starting Page

http://localhost:3003/songs

- Will show all songs in the database

http://localhost:3003/songs/:index

- Will show one song with the proper id

## If you search for order with these values "asc" or "desc", it will sort the songs by name
http://localhost:3003/songs?order=asc

## If you search for is_favorite with a boolean value, it will only display songs which were favorites or not 

http://localhost:3003/songs?is_favorite=false


# tuner-api-solution

- `touch .env`

**.env**
```
PORT=3345
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=tuner
PG_USER=postgres
```
## Scripts
- `npm i`
- `npm run dbinit`
- `npm run seed`
