* Installation

Clone the repository

```sh
$ git clone https://github.com/Svanaks/Projet-webpack.git
```

Install the dependencies and devDependencies.

```sh
$ cd Projet-webpack
$ npm install
```

Edit server.js and set your mail and MySql informations
```js
	// MySql informations
	var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'blog'
    });
    
	// Mail informations
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'YourGmailAddress',
			pass: 'yourPassword'
		}
	});
```

You need to import the blog.sql file and set the date column to null by default.

If you are using GMAIL, you have to activate this option.
https://myaccount.google.com/lesssecureapps

Start the server.
```sh
$ node server.js
```

Build the application.

```sh
$ npm run dev
```
