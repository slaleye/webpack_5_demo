import Emails from './data/emails.csv';
import Options from './data/optionList.json'

export default function printMe(){
    console.log('Hi from print.js')
    console.log(Emails)
}

export function getOptionList(){
    return Options?.data
}