# Populate mongo database

populate mongo database with the documents provided in a file as json format 

## Technologies used

- node:fs
- mongodb

## Usage

- clone the repository
- install the dependencies
- run as

```
  populatedb --op collection [dataPath]
  // op is either import / delete
  // dataPath is for importing, and should be valid json
```
