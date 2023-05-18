
- [EJS tutorial](#ejs-tutorial)
  - [What is EJS ?](#what-is-ejs-)
  - [app.use('view engine', 'ejs');](#appuseview-engine-ejs)
  - [\< %= EJS%\>](#--ejs)
  - [app.set('view engine', 'ejs');](#appsetview-engine-ejs)
  - [res.render('index', {foo: 'FOO'});](#resrenderindex-foo-foo)
  - [\<% 'Scriptlet' tag, for control-flow](#-scriptlet-tag-for-control-flow)
  - [Layouts in EJS](#layouts-in-ejs)
  - [understanding the parts of the code](#understanding-the-parts-of-the-code)
  - [toLocaleDateString](#tolocaledatestring)
  - [module.export](#moduleexport)


-----------------------------------------------------
# EJS tutorial

*************************************** **[refrence site for ejs](https://ejs.co/)** *************************************************

## What is EJS ?

- EJS (Embedded JavaScript Templating) is one of the most popular template engines for JavaScript. As the name suggests, it lets us embed JavaScript code in a template language that is then used to generate HTML.

## app.use('view engine', 'ejs');

- app refers to the Express application object.
- app.use() is a method in Express used for middleware functions.
- 'view engine' is a built-in property in Express used to set the view engine to be used for rendering templates.
- 'ejs' is the value passed to the 'view engine' property to indicate that EJS is the view engine to be used.
- EJS (Embedded JavaScript) is a template engine used in Node.js applications to generate HTML markup with JavaScript.
- By setting the view engine to EJS, we can use EJS syntax in our HTML files to dynamically generate content.
- app.use('view engine', 'ejs'); sets the view engine for our application to EJS, so any files with a .ejs extension in our views directory will be rendered by EJS.
- Once we've set the view engine to EJS, we can use methods like res.render() in our route handlers to render EJS templates and pass data to them.
- render helps basically to render the page.

---------------------------------------------------------

**<h3>NOTE:</h3><strong>in order to use ejs or any other view engine then we have to creae and use a new folder called as views(always in lower case) , and here the render engine will bydefault go and look for the files that we are trying to render*
*in the folder views we create a new folder (for example here we called it as list.ejs) we write all the HTML code </strong>**     

---------------------------------------------------------
## < %= EJS%>
- It is called as Marker
- IT basically replaces the value that is present <%= %> in this with the specified value of the variable.

## app.set('view engine', 'ejs');
- app.set() is a method provided by Express.js that is used to set various configurations for your application.
- view engine is one of the configurations that can be set using app.set(). It is used to specify the template engine that you want to use for rendering views.
- 'ejs' is the value that is passed as the second argument to app.set('view engine', 'ejs'). This specifies that you want to use the EJS template engine.
- EJS is a popular template engine for Node.js applications that allows you to embed JavaScript code directly into HTML templates.
- By setting the view engine configuration to 'ejs', you can tell Express.js to automatically look for .ejs files when rendering views.
- When you call res.render() to render a view, you can omit the file extension and just specify the name of the view file (e.g. res.render('index')). Express.js will automatically look for an EJS file with that name and render it using the EJS engine.
- You must install the ejs package using npm in order to use EJS with Express.js. You can do this by running npm install ejs in your project directory.
- Once you have installed the EJS package and set the view engine configuration to 'ejs', you can start creating EJS templates in your project's views directory and using them to render views in your Express.js application.

## res.render('index', {foo: 'FOO'});

- res.render() is a method in the Express.js web application framework that is used to render a view (i.e., an EJS template) and send the HTML response to the client.
- 'index' is the name of the EJS file that will be rendered. It should be located in the views directory of the Express.js application.
- {foo: 'FOO'} is an object that contains data that will be passed to the EJS template. In this case, it includes a property foo with a value of 'FOO' (basically put the value 'FOO' in foo).
- When the index.ejs file is rendered, the foo variable will be available within the template, and its value will be 'FOO'.
- The EJS template can then use the foo variable to dynamically generate HTML content based on the data passed in.

## <% 'Scriptlet' tag, for control-flow
    allows to write javascript code into the HTML code.
<h3>Note:</h3>the 'Scriplet' tag will work on line by line basis , so on every <strong>single line</strong>  of javascript code we have to use this tag.

--------------------------------------
**Note:**
It is recommended to use "let" keyword insted of "var" keyword,for the reason of the scope of the variable
var has a global scope in all the cases ,
let has a local scope on conditionla statments and globla in all other cases.

-----------------------------------------

*Express does not automatically serves up all te files in the project , it ony serves the main access point (example : app.js) and views folder,but every other thing it chooses to ignore*

*In order to access the css we have to explicitly tell the express to serve up the css files with the given code,by creating a "public" folder.*
```.css
app.use(Folder name(public));
```

-----------------------------------------------

## Layouts in EJS

views/layouts/layout. ejs. This Embedded JavaScript file acts as the default layout for all server side views rendered by your app. Before one of your custom views is sent to the client, it is injected into this file. It is this file that is actually sent to the client.

EJS does not specifically support blocks, but layouts can be implemented by including headers and footers, like so:

*The main body will contain:*
    <%- include('header'); -%> // This stays consistent in all the pages
    
        // Below is the body which can be changed.
        <h1>
        Title
        </h1>
        <p>
        My page
        </p>
        // Above is the body which can be changed.

    <%- include('footer'); -%> // This stays consistent in all the pages

*The above body can be changed as man times without affecting the header and footer.*

*The header.ejs will contain*
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do List</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
```

*The footer will contain*

```
</body>

<footer>
    Copyright 2023 made by BK
</footer>

</html>
```
------------------------------------------------

## understanding the parts of the code 
```
const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
```

## toLocaleDateString

 can be used to create standard locale-specific renderings. The locale and options arguments let applications specify the language whose formatting conventions should be used, and allow some customization of the rendering.

**Options key examples:**

1. day:

    The representation of the day.
    Possible values are "numeric", "2-digit".

2. weekday:

   The representation of the weekday.
    Possible values are "narrow", "short", "long".  

3. year:

    The representation of the year.
    Possible values are "numeric", "2-digit".

4. month:

    The representation of the month.
    Possible values are "numeric", "2-digit", "narrow", "short", "long".

5. hour:

    The representation of the hour.
    Possible values are "numeric", "2-digit".

6. minute: The representation of the minute.
    Possible values are "numeric", "2-digit".
7. second:
    The representation of the second.
    Possible values are "numeric", 2-digit".

All these keys are optional. You can change the number of options values based on your requirements, and this will also reflect the presence of each date time term.

Note: If you would only like to configure the content options, but still use the current locale, passing null for the first parameter will cause an error. Use undefined instead.

For different languages:

- "en-US": For American English
- "en-GB": For British English
- "hi-IN": For Hindi
- "ja-JP": For Japanese
  
You can use more language options.

```
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();

console.log(today.toLocaleDateString("en-US")); // 9/17/2016
console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
console.log(today.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर 2016
```

or

```
const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
```

## module.export

The module.exports in Node.js is used to export any literal, function or object as a module. It is used to include JavaScript file into node.js applications. The module is similar to variable that is used to represent the current module and exports is an object that is exposed as a module

    module.exports = literal | function | object
*Explanation*: Here the assigned value (literal | function | object) is directly exposed as a module and can be used directly.

    module.exports.variable = literal | function | object   
*Explanation*: Here the assigned value (literal | function | object) is indirectly exposed as a module and can be consumed using the variable.

-----------------------------------------------------------------------------------------

## Sample of the Project

![Home Page](https://github.com/BhaskarKulshrestha/Intro-to-EJS-Embedded-JavaScript-Templating-/blob/main/images/Screenshot%202023-04-01%20222736.png)
