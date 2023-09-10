
  
  function modelLoaded() {
    console.log('Model Loaded !');
  }
  
  function draw() {
    image(video , 0 ,0,300,300);
    classifier.classify(video , gotResult);
  }
  
  var previous_result = '';
  
  function gotResult(error , results) 
{
  if(error)
  {
    console.error(error);
  }

  else 
  {
    if((results[0].confidence >0.5) && (previous_result != results[0].label))
    {
       console.log(results);
       previous_result = results[0].label ;
       var synth = window.speechSynthesis;
       spak_data = 'Object detected is - '+ results[0].label;
       var utterThis = new SpeechSynthesisUtterance(speak_data);
       synth.speak(utterThis);

       document.getElementById("object1").innerHTML = results[0].label;
       document.getElementById("mini_result1").innerHTML = results[0].confidence.toFixed(3);   
    }
  }
  if(error)
  {
    console.error(error);
  }

  else 
  {
    if((results[0].confidence >0.5) && (previous_result != results[0].label))
    {
       console.log(results);
       previous_result = results[0].label ;
       var synth = window.speechSynthesis;
       spak_data = 'Object detected is - '+ results[0].label;
       var utterThis = new SpeechSynthesisUtterance(speak_data);
       synth.speak(utterThis);

       document.getElementById("object2").innerHTML = results[0].label;
       document.getElementById("mini_result2").innerHTML = results[0].confidence.toFixed(3);   
    }
  }
  if(error)
  {
    console.error(error);
  }

  else 
  {
    if((results[0].confidence >0.5) && (previous_result != results[0].label))
    {
       console.log(results);
       previous_result = results[0].label ;
       var synth = window.speechSynthesis;
       spak_data = 'Object detected is - '+ results[0].label;
       var utterThis = new SpeechSynthesisUtterance(speak_data);
       synth.speak(utterThis);

       document.getElementById("object3").innerHTML = results[0].label;
       document.getElementById("mini_result3").innerHTML = results[0].confidence.toFixed(3);   
    }
  }
  if(error)
  {
    console.error(error);
  }

  else 
  {
    if((results[0].confidence >0.5) && (previous_result != results[0].label))
    {
       console.log(results);
       previous_result = results[0].label ;
       var synth = window.speechSynthesis;
       spak_data = 'Object detected is - '+ results[0].label;
       var utterThis = new SpeechSynthesisUtterance(speak_data);
       synth.speak(utterThis);

       document.getElementById("object4").innerHTML = results[0].label;
       document.getElementById("mini_result4").innerHTML = results[0].confidence.toFixed(3);   
    }
  }
  if(error)
  {
    console.error(error);
  }

  else 
  {
    if((results[0].confidence >0.5) && (previous_result != results[0].label))
    {
       console.log(results);
       previous_result = results[0].label ;
       var synth = window.speechSynthesis;
       spak_data = 'Object detected is - '+ results[0].label;
       var utterThis = new SpeechSynthesisUtterance(speak_data);
       synth.speak(utterThis);

       document.getElementById("object5").innerHTML = results[0].label;
       document.getElementById("mini_result5").innerHTML = results[0].confidence.toFixed(3);   
    }
  }
}
