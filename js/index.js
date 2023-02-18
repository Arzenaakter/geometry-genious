// blog button
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html' ;
});






let count = 0;

// calculation button triangle

document.getElementById('triangle-btn').addEventListener('click',function(){
   

    const triangleName = document.getElementById('traiangle').innerText;

    const triangleinput_1 = document.getElementById('triangle-input-1').value;

    if(triangleinput_1<0){
        alert('please give a positive number');

        return triangleinput_1;
    }
    const triangleinput_2= document.getElementById('triangle-input-2').value;

    if(triangleinput_2<0){
        alert('please give a positive number');
        return triangleinput_2
    }

    const area = 0.5 * parseFloat(triangleinput_1) * parseFloat(triangleinput_2) ;
    if(isNaN(area) ){
        alert('Inputs are not valid');
        return area;
    }

    count+=1;
   displayResult(count, triangleName, area);
   
})


// rectangle 
document.getElementById('rectangle-btn').addEventListener('click', function(){
    
  
    const rectangleName = document.getElementById('rectangle').innerText;

    const rectangleInput_1 = document.getElementById('rectangle-input-1').value;

    if(rectangleInput_1<0){
        alert('please give a positive number');
        return rectangleInput_1;

    }
    const rectangleInput_2= document.getElementById('rectangle-input-2').value;

    if(rectangleInput_2<0){
        alert('please give a positive number');
        return rectangleInput_2;
    }

    const areaOfrectangle = parseFloat(rectangleInput_1) * parseFloat(rectangleInput_2) ;

    if(isNaN(areaOfrectangle)){
        alert('Inputs are not valid');
        return areaOfrectangle;
    }

    count+=1;
   displayResult(count, rectangleName, areaOfrectangle);



})
// Parallelogram
document.getElementById('parallelogram-btn').addEventListener('click', function(){
   
  
    const parallelogramName = document.getElementById('parallelogram').innerText;

    const parallelogramInput_1 = document.getElementById('parallelogramInput_1').value;
    if(parallelogramInput_1<0){
        alert('please give a positive number');
        return parallelogramInput_1;

    }
    const parallelogramInput_2= document.getElementById('parallelogramInput_2').value;
    if(parallelogramInput_2<0){
        alert('please give a positive number');
        return parallelogramInput_2;

    }
    

    const areaOfparallelogram = parseFloat(parallelogramInput_1) * parseFloat(parallelogramInput_1) ;

    if(isNaN(areaOfparallelogram)){
        alert('Inputs are not valid');
        return areaOfparallelogram;
    }

    count+=1;
   displayResult(count, parallelogramName, areaOfparallelogram);



})
// Rhombus
document.getElementById('rhombus-btn').addEventListener('click', function(){
   
  
    const rhombusamName = document.getElementById('rhombus').innerText;

    const rhombusInput_1 = document.getElementById('rhombusInput_1').value;
    if( rhombusInput_1<0){
        alert('please give a positive number');
        return  rhombusInput_1;

    }
    const rhombusInput_2= document.getElementById('rhombusInput_2').value;
    if( rhombusInput_2<0){
        alert('please give a positive number');
        return  rhombusInput_2;

    }

    const areaOfrhombus = 0.5 * parseFloat(rhombusInput_1) * parseFloat(rhombusInput_2) ;

    if(isNaN(areaOfrhombus)){
        alert('Inputs are not valid');
        return areaOfrhombus;
    }

    count+=1;
   displayResult(count, rhombusamName, areaOfrhombus);



})
// Pentagon
document.getElementById('pentagon-btn').addEventListener('click', function(){

  
    const rhombusamName = document.getElementById('pentagon').innerText;

    const PentagonInput_1 = document.getElementById('PentagonInput_1').value;
    if( PentagonInput_1<0){
        alert('please give a positive number');
        return  PentagonInput_1;

    }
    const PentagonInput_2= document.getElementById('PentagonInput_2').value;
    if( PentagonInput_2<0){
        alert('please give a positive number');
        return  PentagonInput_2;

    }

    const areaOfPentagon = 0.5 * parseFloat(PentagonInput_1) * parseFloat(PentagonInput_2) ;

    if(isNaN(areaOfPentagon)){
        alert('Inputs are not valid');
        return areaOfPentagon;
    }

    count+=1;
   displayResult(count, rhombusamName, areaOfPentagon);



})
// Ellipse
document.getElementById('ellipse-btn').addEventListener('click', function(){

  
    const EllipseName = document.getElementById('ellipse').innerText;

    const ellipseInput_1 = document.getElementById('ellipseInput_1').value;
    if( ellipseInput_1<0){
        alert('please give a positive number');
        return  ellipseInput_1;

    }
    const ellipseInput_2= document.getElementById('ellipseInput_2').value;
    if( ellipseInput_2<0){
        alert('please give a positive number');
        return  ellipseInput_2;

    }
    const pi = 3.14;

    const areaOfEllipse = (pi * parseFloat(ellipseInput_1) * parseFloat(ellipseInput_2)).toFixed(2) ;

    if(isNaN(areaOfEllipse)){
        alert('Inputs are not valid');
        return areaOfEllipse;
    }
    count+=1;
  
   displayResult(count, EllipseName, areaOfEllipse);



})





