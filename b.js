function submit()
{
    const mood = document.getElementById("mood").value.toLowerCase();

    const moodAction ={
        happy:"Smile",
        sad:"Cry",
        angry:"Frown"
    }

    const action = moodAction[mood] || "No specific action";


    const responseElement = document.getElementById("response");
    const imageContainer1 = document.getElementById("imageContainer");

    document.getElementById("response").innerHTML=`The agent suggests: ${action}`;


imageContainer.innerHTML='';
if(mood==='happy')
{
    const img = document.createElement('img');
    img.src='happy.gif';
    img.alt='Smile';
    img.style.width='450px';
    img.style.height='250px';
    imageContainer.appendChild(img);

}

else if(mood==='sad')
{
    const img = document.createElement('img');
    img.src='crying.gif';
    img.alt='Cry';
    img.style.width='450px';
    img.style.height='250px';
    imageContainer.appendChild(img);

}

else if (mood==='angry')
{
    const img = document.createElement('img');
    img.src='angry.gif';
    img.alt='Frown';
    img.style.width='450px';
    img.style.height='250px';
    imageContainer.appendChild(img);
}

else 
    {
        const img = document.createElement('img');
        img.src='question.png';
        img.alt='No action';
        img.style.width='450px';
        img.style.height='250px';
        imageContainer.appendChild(img);
    }

    
}