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

