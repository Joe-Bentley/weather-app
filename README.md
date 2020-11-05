* Steps taken to structure the folders / files *

-mkdir weather-app (Create new directory)
-cd weather-app (Changed into that directory)
-npm init -y (initialised)
-npm i express (installed express)
-created an index.js

* Nodemon *

-npm install -g nodemon (updates files and reruns the server + -g installs nodemon globally)
-"start": "nodemon index.js" added to package.json so you can start server with 'npm start'

* Handlesbars *

-npm i express-handlebars --save (installs handlebars dependency)

* Handlesbars folder setup *

-added a new folder called views
-added a new folder inside views called layouts, and a file in layouts called main.hbs to hold html templates
-added a new file in views called index.hbs which holds additional information
-added lib folder into directory for custome modules
-added public folder which holds CSS files thats renders on client server + link to main.hbs
-added partials folder inside views which holds separate hbs folder component