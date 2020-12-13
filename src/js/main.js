import { getСategory, searchData, getUser } from '../servis'

let showNotificationSpecific = document.querySelector('.show-notification-specific');
let showNotificationFind = document.querySelector('.show-notification-find');
let showNotificationUser = document.querySelector('.show-notification-user');

showNotificationSpecific.addEventListener('click', async () => {
    let result = await getСategory();
    console.log(result);
})

showNotificationFind.addEventListener('click', async () => {
    let result = await searchData('Red111');
    console.log(result);
})

showNotificationUser.addEventListener('click', async () => {
    let result = await getUser();
    console.log(result);
})