import AWN from "awesome-notifications"

import messageError from '../store/reportingErrors'

const globalOptions =  {position: "top-right"};
const notifier = new AWN(globalOptions);

const getMessage = ( messageError, error ) => {
    let result = messageError.find( item => item.error === error.message);
    return result ? result.message : 'Что то пошло не так!!!';  
}

export const showNotifications = ( error ) => {

    if (!error) return
    if (error.message === 'Unauthorized') {
        updateToken ();
        return 
    }
    
    const massege = getMessage( messageError, error );
    notifier.alert(massege)
}

let updateToken = () => {
    console.log('updateToken');
}