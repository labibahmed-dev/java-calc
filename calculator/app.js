
var result = document.getElementById("result").value


function get_num(num)
{
 result = document.getElementById("result").value+=num
 console.log(num);
}

function clear_result(){
    result = document.getElementById("result").value=""
}

function getresult()
{
     document.getElementById("result").value= eval(result = document.getElementById("result").value)
}

function clear_num() {
    var res = document.getElementById("result").value
    document.getElementById('result').value = document.getElementById('result').value.slice(0, res.length - 1);
}
