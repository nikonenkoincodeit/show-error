import { showNotifications } from '../js/notifications'

export const responseAnalysis = (response) => {
    if (Array.isArray(response)) {
        if ( response.length === 0 ) {
         showNotifications({message:'Не найдено'})
        } else {
         return response;
        }
    } else {
     showNotifications(response);
    } 
}