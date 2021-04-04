const nginx = new window.Nginx(8080);
window.nginx = nginx;

document.addEventListener('click', () => {
  const submitButton = document.getElementById('submitButton')
  submitButton.onclick = async (e) => {
    const ip = document.getElementById('ip');

    const firstValue = document.getElementById('firstValue').value;
    const secondValue = document.getElementById('secondValue').value;

    const operationAdd = document.getElementById('operationAdd');
    const operationDivide = document.getElementById('operationDivide');
    const operationMultiply = document.getElementById('operationMultiply');

    let operation = '';
    if (operationAdd.checked) {
      operation = 'add';
    } else {
      operationDivide.checked ? operation = 'divide' : operation = 'multiply'
    }

    const requestData = {
      operation,
      firstValue,
      secondValue
    }

     const res = await nginx.get(ip, requestData);
     document.getElementById('result').innerHTML = res.toString();
  }
})
