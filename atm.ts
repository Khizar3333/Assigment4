import inquirer,{ Answers } from "inquirer";


// let num:string=
type accdet={
    accnum:string,
    pin:number,
    balance:number,
    transaction:string[]
}

let accDet:accdet={
    accnum: "dh456",
    pin: 123,
    balance:2000,
    transaction:[]
}


async function logindetail() {
    
let login=await inquirer.prompt([
    {
        name:"accnum",
        type:"string",
        message:"enter your account number"

    },
    {
        name:"pin",
        type:"password",
        message:"enter your pin"

    }
])

    async function islogin() {
    if (login.accnum==accDet.accnum&&login.pin==accDet.pin) {
        console.log("welcome to your account")
        let action:Answers=await inquirer.prompt([
            {
                name:'accountinfo',
                type:"list",
                message:'select option',
                choices:[
                    "withdraw money",
                    "previous transaction",
                    "check balance"
                ]
            },
            
        ])
        // .then ((action: Answers) => {
            // if (action.accountinfo === "check balance") {
            //   console.log(`YOUR account balance is ${accDet.balance}`);
            // }

            // else if()
             switch (action.accountinfo) {
            case "chech balance":
                console.log(`your account balance is ${accDet.balance}`)
                break;
                case "withdraw money":
                    let withdraw= await inquirer.prompt([
                        {
                            name:'amount',
                            type:"number",
                            message:'enter the amount to withdraw'
                        }
                    ])
                    console.log(withdraw)
                    break;

                case "previous transaction":
                console.log("Previous Transactions:");
          accDet.transaction.forEach((transaction) => {
            console.log(transaction);
          });
                
                break;

            default:
                break;
     } ;
        
      
        }
       
      
        
    
    else{
        console.log('incorrect info')
    }    
}

islogin()
}
logindetail()
