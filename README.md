### JS Base Boilerplate

#### Scripts
* `dev` Launches the app in watch mode with babel/webpack/nodemon for reloading on file changes
* `build` Compiles the app in production mode, output in `dist` folder 
* `start` Runs the compiled app

#### Features
* `webpack` Houses the `build` and `dev` process workflows integrating babel, dotenv, nodemon etc
* `babel` Transpiles js to the `@babel/preset-env` preset
* `dotenv` Allows variable injection for sensitive data
* `nodemon` Reload on file changes

#### Environmental Variables
All env variables are injected via a webpack plugin which is based on the current mode e.g. `.env.production` & `.env.development`
