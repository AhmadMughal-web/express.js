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



import express from 'express'

const app = express();

function checkAgeRouteMiddleware(req, resp, next) {
    if (!req.query.age || req.query.age < 18) {
        resp.send('your are not allowed to use this wesite')
    } else {
        next()
    }
}

app.get('', (req, resp) => {
    resp.send('<h1>Home Page</h1>')
})
app.get('/login', (req, resp) => {
    resp.send('<h1>Login Page</h1>')
})
app.get('/user', checkAgeRouteMiddleware, (req, resp) => {
    resp.send('<h1>user Page</h1>')
})
app.get('/product', (req, resp) => {
    resp.send('<h1>Product Page</h1>')
})

app.listen(3200)