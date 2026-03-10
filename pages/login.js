export default function login() {
    return (
        `<form action="/submit" method='post'>
        <input type="text" placeholder='Enter your Name' />
        <input type="password" placeholder='Enter your Password' />
        <button>LogIn</button>
    </form> <a href='/' > Go to Home </a>`
    
    )
}