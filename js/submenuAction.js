/* submenus  */

const url_string = window.location;
let url = new URL(url_string);
let option = url.searchParams.get("opt");
document.getElementById(option).click();
