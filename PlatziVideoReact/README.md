# cursos
# Paso 1 npm init -y     (Y siginifica que va a crear por default pack .json)

# Paso 2, estructura

# 2.1 => src/
# 2.1.2 => index.js
# 2.1.1 => components/


# 2.2 => public/
# 2.2.1 =>  index.html

# Paso 3. npm install react react-dom


# Paso 4
# hacemos nuestro primer ejemplo:
# 4.1 en components HelloWorld.jsx

<!--
import React from 'react';
const HelloWorld = () => {
    <h1>Hola Mundo</h1>
};
export default HelloWorld;
-->

# 4.2 en index.js 

<!-- 
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';


ReactDOM.render(<HelloWorld/>,document.getElementById(app))
-->
# 4.3 en index.html
<!--
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Platzi Video</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
-->

# Paso 5

# Instalaremos babel para retrocompatibilidad
# npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save -dev


# creamos nuestro archivo babelrc

# .babelrc

<!--
{
    "presets":[
        "@babel/preset-env", //ecma escript 5 y6 
        "@babel/preset-react"  // reat y jsx
    ]
}
-->

# Paso 6

# npm install webpack webpack-cli html-webpack-plugin html-loader  --save-dev

# Paso 7

# se crea el archivo en la raiz webpack.config.js

# luego se agrega al package.json el script   "build":"webpack --mode production"

# y finalmente npm run build


# paso 8 probar  instalamos un server de webpack

# npm install --save-dev webpack-dev-server

# agregamos en package.json en scripts "start" : "webpack-dev-server --open --mode development"



# npm run start



# ahora a instalar sass
# npm install --save-dev mini-css-extract-plugin css-loader node-sass sass-loader
# luego hago la congifuracion en el webpack.config.js

# creo una carpeta assets -> styles -> App.scss




# instalar eslint
# npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y

# creamos el archivo .eslintrc
# creamos el archivo .gitignore


#
#
#
#
#
#
#