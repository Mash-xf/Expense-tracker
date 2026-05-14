import {usedtate} from 'react'

function expensesForm({addExpense}){
    const [expense, setExpense] = useState({
        title: '',
        amount: 0,
        date: ''
    })

    const handleChange = (e) => {
        setExpense({
            ...expense,
            [e.target.name]: e.target.value
        })  
    }
    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!expense.title || !expense.amount || !expense.date){
            alert('Please fill in all fields')
            return
        }
        const expenseData = {
            title: expense.title,
            amount: parseFloat(expense.amount),
            date: new Date(expense.date)
        }

        addExpense(expense)
        setExpense({
            title: '',
            amount: 0,
            date: ''
        })
    };
    return (
     <div className='expense-form'>
       <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" placeholder='Title' value={expense.title} onChange={handleChange} />
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" placeholder='Amount' value={expense.amount} onChange={handleChange} />
        <label htmlFor="date">Date</label>
       </form>  
       
        <button type='submit' className = "button">Add Expense</button>

    </div>
    )

}

export default expensesForm;