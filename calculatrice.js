



function del() {
    document.form.textview.value= '';
}
function insert(num) {
    var result = document.form.textview.value;
    var len = result[result.lenght-1];
    document.form.textview.value= result +num;
}
function equal() {
    var sum = document.form.textview.value;
    if (sum) {
        document.form.textview.value=eval(sum);
    }
}
function back() {
    let ex = document.form.textview.value;
    document.form.textview.value = ex.substring(0, 1);
    let ter = ex.lenght-1;
    console.log(ter);
}