# Node and React App

## Set up

After you clone the project you will need to run `npm i` to get all the dependencies for the project.

## Running the project

- Once the install of all the files have finished you will need to start running both your react app and your node server, meaning you will need to have two terminals open, one for each.
- To start your react app you can just run `npm start` as usual.
- To start your node server you can just run `nodemon`. If you look at the `package.json` file you will notice there is a line for `"main": "/server/index.js"`. What this does is when you run nodemon you don't need to specify the file specifically you want nodemon to run, it will just assume that file.

## React App

You will notice that the axios calls in react use a short version of the url. This is because we have a `proxy` set up in the `package.json`. Because of that line every time we make an axios request with that shortened URL react will automatically add the base URL to request. This is necessary for the app to work.

