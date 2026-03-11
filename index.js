// import express from 'express'
// const app = express();

// function checkRout(req, resp, next) {
//     console.log("user is accessing " + req.url + " page");
//     next();
// }

// app.use(checkRout)

// app.get('/', (req, resp) => {
//     resp.send("home page")
// })

// app.get('/users', (req, resp) => {
//     resp.send("users page")
// })

// app.get('/productes', (req, resp) => {
//     resp.send("productes page")
// })
// app.listen(3200)

//   =====Examples of Middleware=====   //   //   =====Examples of Middleware=====   //

// import express from 'express'

// const app = express()

// function ageChechk(req, resp, next) {
//     if (!req.query.age || req.query.age < 18) {
//         resp.send("You can not access this page")
//     } else {
//         next()
//     }
// }

//  app.use(ageChechk)

// function ipChechk(req, resp, next) {
//     if (!req.query.age || req.query.age < 18) {
//         resp.send("You can not access this page")
//     } else {
//         next()
//     }
// }

// app.use(ipChechk)

// app.get('/', (req, resp) => {
//     resp.send("home page")
// })
// app.get('/login', (req, resp) => {
//     resp.send("login page")
// })
// app.get('/admin', (req, resp) => {
//     resp.send("admin page")
// })

// app.listen(3200)

//====== Route Middleware ========//
// import express from 'express'

// const app = express();

// function checkAgeRouteMiddleware(req, resp, next) {
//     if (!req.query.age || req.query.age < 18) {
//         resp.send('your are not allowed to use this wesite')
//     } else {
//         next()
//     }
// }

// app.get('', (req, resp) => {
//     resp.send('<h1>Home Page</h1>')
// })
// app.get('/login', (req, resp) => {
//     resp.send('<h1>Login Page</h1>')
// })
// app.get('/user', checkAgeRouteMiddleware, (req, resp) => {
//     resp.send('<h1>user Page</h1>')
// })
// app.get('/product', (req, resp) => {
//     resp.send('<h1>Product Page</h1>')
// })

// app.listen(3200)


//====== Build-in Middleware ========//
// import express from 'express'
// const app = express();
// import path from 'path'

// app.get('', (req, resp) => {
//     const filePath=path.resole("view/home.html")
//     resp.sendFile(filePath)
// })

// app.use(express.urlencoded({ extended: false }))

// app.get('/login', (req, resp) => {
//     resp.send(`<form action="/submit" method="post">
//         <input type="text" placeholder='Enter your email' name="email" />
//         <input type="text" placeholder='Enter your password' name="password"/>
//         <button>Login</button>
//     </form>`)
// })
// app.post('/submit', (req, resp) => {
//     console.log("Usere information is ", req.body);

//     resp.send('<h1>submit Page</h1>')
// })
// app.get('/users', (req, resp) => {
//     resp.send('<h1>Users Page</h1>')
// })

// app.listen(3200)



//====== External Middleware ========//
// import express from 'express'
// import morgan from 'morgan'
// const app = express()

// app.use(morgan('dev'))

// app.get('/', (req, resp) => {
//     resp.send("Home Page")
// })

// app.get('/users', (req, resp) => {
//     resp.send("USers Page")
// })

// app.get('/wait', (req, resp) => {
//     setTimeout(() => {
//         resp.send("resulte after i sec")
//     }, 1000);
// })

// app.listen(3200)



//====== Error Handling Middleware ========//
import express from 'express'
const app = express()

app.get('', (req, resp) => {
    resp.send('Home Page')
})
app.get('/users', (req, resp) => {
    resp.send1('Users Page')
})

app.get('/error', (req, resp) => {
    resp.send('Error Page')
})

function errorHandling(error, req, resp, next) {
    resp.status(error.status || 500).sendFile('try after sometime')
}
app.use(errorHandling)

app.listen(3200)