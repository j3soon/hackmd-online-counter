# HackMD Online Counter

This simple online user counter is like the right-upper visitor counter of the [HackMD](https://github.com/hackmdio/hackmd) project, but without the dropdown function.

The file [index.js](/index.js) is for the online user counter server.

The file [index.html](/index.js) is for the online user counter client.

## Screenshots

![online-hd](/docs/images/online-hd.png)

## Installation

Requires Node.js and npm.

Clone this repository and execute the following command.

```shell
$ npm install express --save
$ npm install socket.io --save
```

## Run Server

```shell
$ node index.js
```
## Run Client

Open [index.html](/index.html) in your web browser.

## Screenshots of different status

![offline](/docs/images/offline.png)
![connected](/docs/images/connected.png)
![online](/docs/images/online.png)