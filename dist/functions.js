const addTwo = (a, b) => {
    return a + b;
};
function invokeInFourSeconds(callback) {
    setTimeout(callback, 4000);
}
function handleMainEvent(elem, handler) { }
handleMainEvent(document.querySelector("form"), (data) => {
    console.log(data);
});
