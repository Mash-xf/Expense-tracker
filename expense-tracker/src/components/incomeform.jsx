import { useState } from 'react'

function incomForm({ addIncome }) {
    const [income, setIncome] = useState({
        title: '',
        amount: 0,
        date: new Date()
    })

    const handleChange = (e) => {
        setIncome({
            ...income,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!income.title || !income.amount || !income.date) {
            alert('Please fill in all fields')
            return
        }
        const incomeData = {
            title: income.title,
            amount: parseFloat(income.amount),
            date: new Date(income.date)
        }
        try {
            const response = await fetch("http://localhost:3500/income", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(incomeData),
            }); c

            if (!response.ok) {
                throw new Error("Failed to add project");
            }

            const data = await response.json();


            addIncome(income)
            setIncome({
                title: '',
                amount: 0,
                date: ''
            })
        } catch (error) {
            console.error("Error adding project:", error);
            alert("Failed to add the project. Please try again.");
        }
    }
    return (
        <div className='income-form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" placeholder='Title' value={income.title} onChange={handleChange} />
                <label htmlFor="amount">Amount</label>
                <input type="number" name="amount" placeholder='Amount' value={income.amount} onChange={handleChange} />
                <label htmlFor="date">Date</label>
            </form>

            <button type='submit' className="button">Add Income</button>

        </div>
    )

}
export default incomeForm;