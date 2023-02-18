// blog button
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html' ;
});

let count = 0;
// calculation button



document.getElementById('triangle-btn').addEventListener('click',function(){
    count+=1;

    const triangleName = document.getElementById('traiangle').innerText;

    const triangleinput_1 = document.getElementById('triangle-input-1').value;
    const triangleinput_2= document.getElementById('triangle-input-2').value;

    const area = 0.5 * parseFloat(triangleinput_1) * parseFloat(triangleinput_2) ;
    if(isNaN(area)){
        alert('Inputs are not valid');
        return area;
    }

  
   displayResult(count, triangleName, area);
   
})


// rectangle 
document.getElementById('rectangle-btn').addEventListener('click', function(){
    count+=1;
  
    const rectangleName = document.getElementById('rectangle').innerText;

    const rectangleInput_1 = document.getElementById('rectangle-input-1').value;
    const rectangleInput_2= document.getElementById('rectangle-input-2').value;

    const areaOfrectangle = parseFloat(rectangleInput_1) * parseFloat(rectangleInput_2) ;

    if(isNaN(areaOfrectangle)){
        alert('Inputs are not valid');
        return areaOfrectangle;
    }

  
   displayResult(count, rectangleName, areaOfrectangle);



})
// Parallelogram
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    count+=1;
  
    const parallelogramName = document.getElementById('parallelogram').innerText;

    const parallelogramInput_1 = document.getElementById('parallelogramInput_1').value;
    const parallelogramInput_2= document.getElementById('parallelogramInput_2').value;

    const areaOfparallelogram = parseFloat(parallelogramInput_1) * parseFloat(parallelogramInput_1) ;

    if(isNaN(areaOfparallelogram)){
        alert('Inputs are not valid');
        return areaOfparallelogram;
    }

  
   displayResult(count, parallelogramName, areaOfparallelogram);



})
// Rhombus
document.getElementById('rhombus-btn').addEventListener('click', function(){
    count+=1;
  
    const rhombusamName = document.getElementById('rhombus').innerText;

    const rhombusInput_1 = document.getElementById('rhombusInput_1').value;
    const rhombusInput_2= document.getElementById('rhombusInput_2').value;

    const areaOfrhombus = 0.5 * parseFloat(rhombusInput_1) * parseFloat(rhombusInput_2) ;

    if(isNaN(areaOfrhombus)){
        alert('Inputs are not valid');
        return areaOfrhombus;
    }

  
   displayResult(count, rhombusamName, areaOfrhombus);



})





