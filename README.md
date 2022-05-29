# ROMAN-NUMERAL-CONVERTER-SSE
Welcome to the roman numeral converter SSE back-end module!

This module aims to:

* provide a server that helps to convert a number to roman numerals
 
# INSTALL
To install this module and its dependencies, use this set of commands : 

```sh
git clone git@github.com:thotino/roman-numeral-converter-sse.git
cd roman-numeral-converter-sse
yarn install
```

# USAGE
This project is to be used with this [app](https://github.com/thotino/roman-numeral-converter-sse-app).

## EXECUTION PROCEDURE
```
yarn install
yarn run serverstart
```
This server will use the port 3000.

## EXECUTION PROCEDURE WITH DOCKER
```
docker build -t sse-server .
docker run -p 3000:3000 sse-server
```

