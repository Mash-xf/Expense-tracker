import {useState} from 'react'

function incomForm({addIncome}){
    const [income, setIncome] = useState({
        title: '',
        amount: 0,
        date: ''
    })

    const handleChange = (e) => {
        setIncome({
            ...income,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!income.title || !income.amount || !income.date){
            alert('Please fill in all fields')
            return
        }
        const incomeData = {
            title: income.title,
            amount: parseFloat(income.amount),
            date: new Date(income.date)
        }

        addIncome(income)
        setIncome({
            title: '',
            amount: 0,
            date: ''
        })
    };
    return (
     <div className='income-form'>
       <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" placeholder='Title' value={income.title} onChange={handleChange} />
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" placeholder='Amount' value={income.amount} onChange={handleChange} />
        <label htmlFor="date">Date</label>
       </form>  

        <button type='submit' className = "button">Add Income</button>

    </div>
    )

}
export default incomeForm;