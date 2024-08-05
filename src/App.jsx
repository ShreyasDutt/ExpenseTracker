import { useState } from 'react'


function App() {
    const [name, setName] = useState("")
    const [amount, setamount] = useState("")
    const [expense, setExpense] = useState([])
    const addExp = () =>{
        if (!name || !amount) {

        }
        else{
            const newExpense = {
                id: expense.length+1,
                name: name,
                amount: amount,
            };
            setExpense([...expense,newExpense])
            setName("")
            setamount("")
        }
    }
    let Maptotal = 0;

    const mapTotal = () =>{
        {expense.map((item) => {
            const amt = Number(item.amount);
            Maptotal = Maptotal + amt;
        })}
    }

    const handledelete = (id) =>{
        setExpense(expense.filter((expense) => expense.id !== id))
        mapTotal()
    }
  return (
    <>
      <div className={"flex flex-col items-center justify-center my-10"}>
        <h1 className={"text-2xl font-bold text-white"}>Expense Tracker</h1>
        <div className={"flex flex-col items-center justify-center"}>
            <input type="text" className={"p-2 border-2 border-black my-6 text-white bg-slate-700"} placeholder={"Expense"} onChange={(e) => setName(e.target.value)} value={name}/>
            <input type="number" className={"p-2 border-2 border-black text-white bg-slate-700"} placeholder={"Amount"} onChange={(e) => setamount(e.target.value)} value={amount}/>
        </div>
          <button onClick={addExp} className={"bg-blue-500 text-white mt-5 py-1.5 px-20 rounded active:scale-[0.95] border-2 border-blue-500"}>Add</button>
      </div>

        <div className={"flex flex-col items-center justify-center"}>
            {expense.map((item, index) => (
                <>

                    <div key={index}
                         className={"text-white flex space-x-5 bg-slate-700 w-48 py-3 mb-3 items-center justify-center"}>
                        <p className={"font-bold text-lg"}>{item.name}:</p>
                        <p>${item.amount}</p>
                        <div className={"flex items-center justify-end"}>
                            <button onClick={() => handledelete(item.id)}
                                    className={"bg-slate-800 p-2 active:scale-90"}>🗑️
                            </button>
                        </div>
                    </div>


                </>
            ))}
        </div>
        {mapTotal()}
        <p className={"text-white text-3xl font-bold flex items-center justify-center"}>Total : ${Maptotal}</p>
    </>
  )
}

export default App
