angular-lazy-load-seed
======================

A seed to create an AngularJS project that lazy-loads modules with ocLazyLoad and ui.router

Folders
=======

There is just one main folder called 'js' where there are all folders you need to run the project.
    
vendor
------
------------------------
Here we have all third party libraries that we maybe would need for our project

- [angularJS]
- [requireJS]

And I set here also [bootstrap3] and [jQuery]. These are not necessary, but I use to need them in my projects.

angular3party
-------------
------------------------
Here we have all angular third party libraries we need to start a lazy load project

- [ocLazyLoad]
- [ui.router]
    
app
---
------------------------

The entrypoint is main.js file as you can see in the index.html file. This file has the requireJS config and the bootstrap file route.

The bootstrap.js file just contains the application bootstrap. If you don't want to use jQuery please edit this file. [$(document).ready stuff.]

In the index.html file you can see two containers, but you can set there as muchs or as less as you want.
We are going to load our lazy content in the "lazyView" container, and we are going to set the navigation in the "mainView" container.

In app.js we set all the routes and we config the LazyLoaderProvider to set Require as default loader but you can use $scriptjs if you want.

Inside the modules folder we have our test module. "testModule.js" file has all the dependencies of the module. So here you should set all your
controllers, services or directives you are going to use. Also you should config this module as a lazyLoad module, so you should config the lazyLoadProvider.

How it works
---
------------------------

When you define a state in state.js file, in the lazyView object (inside state, and then inside view) you should define a template.
This template only has div that inclues a partial. You can use the template that is in the customLazyLoader.js file or you can create yourself.

Then you should create a controller and call the call the load function of the customLazyLoader. This function is going to load the new module
and the partial. You should pass as parameter the scope of the controller, the ocLazyLoader, the name of the module, an array of files you need to create the module (usally one)
and finally the template for your module.

I read a lot of documentation about how to do it, but this way works best for me. It is maybe not the optimal because it uses a controller to create another controller.
I hope people help me to build a best seed for this kind of projects.


TO DO LIST
----
-------

* remove thridparty files and use a package manager to load them
* create tests for the app
* find the optimal way to load a lazy module



[angularJS]:http://angularjs.org/
[requireJS]:http://requirejs.org/
[ocLazyLoad]:https://github.com/ocombe/ocLazyLoad
[ui.router]:https://github.com/angular-ui/ui-router
[bootstrap3]:http://getbootstrap.com/
[jQuery]:http://jquery.com/

