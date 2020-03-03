# AngularWebTemplate
## Angular 
    is an app-design framework and development platform for creating efficient and sophisticated single-page apps.

## Basic Knowledge Required
* [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML)
* [Java Script](https://developer.mozilla.org/en-US/docs/Web/JavaScript) / [Type Script](https://www.typescriptlang.org/docs/home.html)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Documents for reference 
* [node](https://nodejs.org/en/docs/)
* [angular.io](https://angular.io/docs)

## Setting up environment for development 
1. Install [Node](https://nodejs.org/en/download/) specific to your operating system 
2. If there is already Node installed in your system check the node and npm version with the following command

   *    node -v ( version should be v10.X or greater ) 
   *    npm -v ( version should be v6.X or greater )
  
    Note : If there versions are below the specified then update Node
3. Install Angular CLI ( Command Line Interface ) : **npm install -g @angular/cli**
   [ **Note :** command - **ng v** can be used to check angular version if it is already installed ]

## Creating an Angular Application 
     To create an Angular application : **ng new app-name** 
[ **Note :** this repo app name is **AngularDashBoard** ]

## Running the Application

    1. Go to the application folder created by angular cli - cd AngularDashBoard
    2. use the commang ng serve / npm start 
    3. the application will be started on  http://localhost:4200 and can be viewd on any browser in your system.
   [ **Note :** Initially default angular pages will be coded and viewed ]

## Removing the default code 
    1. Go to AngularDashboard\src\app\app.component.html 
    2. Delete the whole code and you are good to create new components.

## Project Structure
1. [**.editorconfig**](https://github.com/anilsagart/AngularWebTemplate/blob/master/AngularDashboard/.editorconfig) - Configuration for code editors. See [EditorConfig](https://editorconfig.org/).
2. [**.gitignore**](https://github.com/anilsagart/AngularWebTemplate/blob/master/AngularDashboard/.gitignore) - Specifies intentionally untracked files that [Git](https://git-scm.com/) should ignore.
3. [**README.md**](https://github.com/anilsagart/AngularWebTemplate/blob/master/AngularDashboard/README.md) - Introductory documentation for the root app.
4. [**angular.json**](https://github.com/anilsagart/AngularWebTemplate/blob/master/AngularDashboard/angular.json) - CLI configuration defaults for all projects in the workspace, including configuration options for build, serve, and test tools that the CLI uses, such as [TSLint](https://palantir.github.io/tslint/), [Karma](https://karma-runner.github.io/latest/index.html), and [Protractor](http://www.protractortest.org/). For details, see Angular Workspace Configuration.
5. [**package.json**](https://github.com/anilsagart/AngularWebTemplate/blob/master/AngularDashboard/package.json) - Configures npm package dependencies that are available to all projects in the workspace. See npm documentation for the specific format and contents of this file.
6. [**package-lock.json**](https://github.com/anilsagart/AngularWebTemplate/blob/master/AngularDashboard/package-lock.json) - Provides version information for all packages installed into node_modules by the npm client. See npm documentation for details. If you use the yarn client, this file will be yarn.lock instead.
7. [**src/**](https://github.com/anilsagart/AngularWebTemplate/tree/master/AngularDashboard/src) - Source files for the root-level application project.
8. **node_modules/** - Provides npm packages to the entire workspace. Workspace-wide node_modules dependencies are visible to all projects.
9. [**tsconfig.json**](https://github.com/anilsagart/AngularWebTemplate/blob/master/AngularDashboard/tsconfig.json) - Default TypeScript configuration for projects in the workspace.
10. [**tslint.json**](https://github.com/anilsagart/AngularWebTemplate/blob/master/AngularDashboard/tslint.json) - Default TSLint configuration for projects in the workspace.

## Installing Bootstrap
1. Type the following command in Angular CLI : **npm install --save bootstrap**
2. Link Bootstrap in [angular.json](https://github.com/anilsagart/AngularWebTemplate/blob/master/AngularDashboard/angular.json) in 
  
    projects->architect->build->styles  
    projects->architect->build->scripts 

   so bootstrap can be added during the build. 

    "styles": [  "./node_modules/bootstrap/dist/css/bootstrap.css",
              "src/styles.css"],             
    "scripts": [
              "./node_modules/bootstrap/dist/js/bootstrap.js"
            ]
3. Learn more about [Bootstrap.](https://getbootstrap.com/docs/4.4/getting-started/introduction/)

## Creating a Component 
1. Go to the particular directory path where the component has to be created in my case it is **AngularDashboard\src\app\**
2. Type the following command in Angular CLI : **ng generate component component_name** in this case it is **ng generate component login**
3. The above command creates 
    * A folder with name **login**
    * and inside the folder it creates 4 template files 
      * **login.component.css** - template for adding styles
      * **login.component.html** - template for adding html elements
      * **login.component.spec.ts** - template for writing test cases 
      * **login.component.ts** - template for writing scripts
4. After creating the template it can be configured/coded based on the requirements.


## Adding HTML elements into the component 
1. Add the relavant HTML elements in [**login.component.html**](https://github.com/anilsagart/AngularWebTemplate/blob/master/AngularDashboard/src/app/login/login.component.html)
2. Now go to [**app.component.html**]() and add < app-login ></ app-login >
3. The login component html will now be show in http://localhost:4200/

## Adding CSS styling to HTML elements into the component 
1. Add the relavant CSS to the HTML elements in [**login.component.html**](https://github.com/anilsagart/AngularWebTemplate/blob/master/AngularDashboard/src/app/login/login.component.html) in [login.component.css](https://github.com/anilsagart/AngularWebTemplate/blob/master/AngularDashboard/src/app/app.component.css)
2. The login component with CSS changes will now be show in http://localhost:4200/


## Adding Jquery since Bootstrap requires it 
1. Type the following command in Angular CLI : **npm install --save jquery**
2. Link Bootstrap in [angular.json](https://github.com/anilsagart/AngularWebTemplate/blob/master/AngularDashboard/angular.json) in 
  
    projects->architect->build->scripts 

   so bootstrap can be added during the build. 

    "scripts": [
 
        "./node_modules/jquery/dist/jquery.js",
        "./node_modules/bootstrap/dist/js/bootstrap.js"
    ]

## Linking HTML Template with Functional Script - Data and Event Binding 
1. Data binding is the term used to communicate with the html template of a component from the functional script of the same component.
2. Data Binding is the process where the data variable can be used in the following format below to display the data in the HTML template. It has 2 format associated 
   1. String Interpolation - **( {{ data }} )**
   2. Property Binding - **( [ property ] = "data" )**
3. Event Binding is the process where the function is linked to the events that occurs in HTML template. 
    This can be achieved from the following syntax -  **( (event) = "function()" )**.
4. We can combine both the types and use it in our scripts with **ngModel** and it is called **Two-Way Data Binding**. It can be achieved by the following syntax - **[ ( ngModel ) ] = "data"**
5. This Data and Event Binding is in login component's html and script template.
   1.  [**login.component.html**](https://github.com/anilsagart/AngularWebTemplate/blob/master/AngularDashboard/src/app/login/login.component.html)
   2.   [**login.component.ts**](https://github.com/anilsagart/AngularWebTemplate/blob/master/AngularDashboard/src/app/login/login.component.ts)


## Creating the Dashboard Component

1. Go to the particular directory path where the component has to be created in my case it is **AngularDashboard\src\app**
2. Type the following command in Angular CLI : **ng generate component component_name** in this case it is **ng generate component dashboard**
3. The above command creates 
    * A folder with name **dashboard**
    * and inside the folder it creates 4 template files 
      * **dashboard.component.css** - template for adding styles
      * **dashboard.component.html** - template for adding html elements
      * **dashboard.component.spec.ts** - template for writing test cases 
      * **dashboard.component.ts** - template for writing scripts
