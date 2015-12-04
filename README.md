# SumoLogi (UI Exercise) - This is a single page application and contains a basic implementation of select boxes for team and the employees working in that team.

## Getting Started

To get you started you can simply clone this project's repository and install the dependencies:

### Prerequisites

Here we have used a number of node.js tools to initialize and test the app. You must have node.js and its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone Spot app

Clone the project's repository using [git][git]:

```
git clone https://github.com/anshckr/SumoLogic.git
cd SumoLogic
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help us manage the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code and other dependencies via `bower`, a [client-side code package manager][bower].

Simply do:

```
npm install
```
Behind the scenes this will also call `bower install`.  You should find that you have two new folders in this project.

* `node_modules` - contains the npm packages for the tools we need to run this app
* `app/bower_components` - contains the angular framework files

* Note that the `bower_components` folder would normally be installed in the root folder but
we have changed this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

The project is preconfigured with a simple development web server.  The simplest way to start
this server is:

```
grunt server
```

Now browse to the app at `http://localhost:9000`.


## Directory Layout

```
app/                    --> all of the source files for the application
  bower_components/     --> all the frontend dependency modules
  css/                  --> css files used in the application
  js/                   --> all the javascript files
    controllers/          --> all the controller js files
    app.js              --> main application module
  index.html            --> app layout file (the main html template
```

## Additional Details

The single page app has grunt integrated in it for developers convinience. After starting the app using ```grunt server```, any changes made to js, css or html will reload the page on the browser


## Updating Angular

As the angular framework library code and tools are acquired through package managers (npm and
bower) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

## Contact

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org