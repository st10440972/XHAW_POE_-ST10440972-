function calculateFee(){
  const courses = parseInt(document.getElementById('courses').value,10) || 0;
  const discount = parseFloat(document.getElementById('discount').value) || 0;
  const feePerCourse = 500;
  if(courses < 1){
    document.getElementById('result').innerText = 'Please enter at least 1 course.';
    return;
  }
  const subtotal = courses * feePerCourse;
  const total = Math.round(subtotal * (1 - discount/100));
  document.getElementById('result').innerText = `Total fee: R${total} (including any discount)`;
}
