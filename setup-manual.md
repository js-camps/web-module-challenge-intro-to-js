# Building a Node.js project with Babel

## Step 1: Set Up Your Project

1. **Initialize Git pository and Node.js project:**

- `node-project`
```sh
mkdir my-node-project
cd my-node-project
npm init
```

- `Git pository`
```sh
git init
git branch -M main
npx gitignore node
```

**2. Install the necessary dependencies:**

```
npm install --save-dev @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/runtime nodemon @types/jest jest eslint
```

-   Add the following scripts to `package.json`
```
"start": "node index.js",
"test:watch": "jest --watchAll --verbose --forceExit --silent"
```    

**3. Create the project structure:**

```
touch babel.config.js index.js
mkdir src
touch src/main.js
```

## Step 2: Configure Babel

Create a babel.config.js file in the root of your project with the following content:

```js
module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current',
      },
    }],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
  ],
};
```

## Step 3: Write Your Code