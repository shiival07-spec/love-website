let currentBox=1;

function nextBox(){
    
 document.querySelector(".box"+ currentBox)
    .style.display="none";

    currentBox++;

 document.querySelector(".box"+ currentBox)
    .style.display="block";

}

function moveNo(){
    const box=document.querySelector(".box4");
    const noBtn=document.querySelector(".no-btn");
    const yesBtn=document.querySelector(".yes-btn");

    const maxX=box.clientWidth-noBtn.offsetWidth;
    const maxY=box.clientHeight-noBtn.offsetHeight;

    noBtn.style.left=Math.random()*maxX + "px";
    noBtn.style.top=Math.random()*maxY + "px";

    yesScale +=0.2;
    yesBtn.style.transform=`scale(${yesScale})`;
}

function sayYes(){
    const box=document.querySelector(".box4");

    box.innerHTML=`
    <h1>YAASSS!!!</h1>
    <h2>i'd question myself if you said no,as if you had a choice though.</h2>
    <p>I always believed in you.</p>
    <h1>^..^</h1>
    `;

    box.classList.add("celebration");

    for(let i=0; i<25; i++){
        const heart=document.createElement("span");

        heart.className="heart";
        heart.innerHTML="^..^";

        heart.style.left=Math.random()*100 + "%";
        heart.style.animationDelay= Math.random()*3 + "s";

        box.appealChild(heart);

    }
     
}

console.log("Next Button clicked!");


/* BACKGROUND FLOATING HEARTS */
for (let i = 0; i < 20; i++) {
  const heart = document.createElement("span");

  heart.className = "bg-heart";
  heart.innerHTML = "♥";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDelay = Math.random() * 8 + "s";
  heart.style.animationDuration =
    6 + Math.random() * 6 + "s";

  document.body.appendChild(heart);
}
