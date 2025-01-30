# **Webpack Template Repository**

This repository is designed to be used as a **template for Webpack projects**. It includes a minimal Webpack setup. To customize the setup, refer to the guide below on how to add **CSS, image, and HTML loaders** as needed for your project.


## **1. Install Required Loaders**

### **CSS Loader**

To process CSS files, install the necessary loaders:

```bash
npm install --save-dev style-loader css-loader
```

### **Image Loader**

To handle images like PNG, JPG, SVG, and GIF files, install:

```bash
npm install --save-dev file-loader
```

### **HTML Loader**

To process HTML files and automatically inject bundled JavaScript, install:

```bash
npm install --save-dev html-loader
```

## **2. Updating Project Structure**

Ensure your project has an `index.html` file inside the `src/` directory:

```
my-project/
├── src/
│   ├── index.js
│   ├── index.html
│   ├── styles.css (if using CSS)
│   ├── assets/
│   │   ├── image.png (if using images)
├── dist/
├── package.json
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
```

## **3. Configure Webpack Loaders**

Modify `webpack.common.js` to include the following rules:

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
```

## **4. Available npm Scripts**

Modify your `package.json` file to include these scripts:

```json
"scripts": {
  "start": "webpack serve --open --config webpack.dev.js",
  "build": "webpack --config webpack.prod.js",
  "lint": "eslint .",
  "format": "prettier --write ."
}
```

### **Script Descriptions**

- **`start`** → Starts the Webpack development server with live reloading using the development config.
- **`build`** → Creates a production-ready bundle using the production config.
- **`lint`** → Runs ESLint to check for JavaScript syntax errors and warnings.
- **`format`** → Formats all JavaScript files using Prettier.

## **5. Running Webpack**

After installing the loaders, restart your development server:

```bash
npm run start
```

Or create a new production build:

```bash
npm run build
```

Your project is now configured to handle **CSS, images, and HTML** using Webpack, along with essential scripts for development and code quality.

