import react from 'react'

function header() {
    return (
        <header className='header'>
            <h1>Expense Tracker</h1>
            <span className='tagline'>Track your expenses and income</span>
            <nav className='nav'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/expenses">Expenses</NavLink>
            <NavLink to="/income">Income</NavLink>
            </nav>      
        </header>
    )
}
export default header