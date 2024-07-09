
let slide=document.getElementById("slide")
let left=document.getElementById("left")
let right=document.getElementById("right")
slide.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    slide.scrollLeft += evt.deltaY;
})
right.addEventListener("click",()=>{
    slide.style.scrollBehavior = "smooth";
    slide.scrollLeft +=420;
})

left.addEventListener("click",()=>{
    slide.style.scrollBehavior = "smooth";
    slide.scrollLeft -=420;
})
const sel1=document.getElementById("itmone")
const sel2=document.getElementById("itmtow")
const sel3=document.getElementById("item-3")
const sel4=document.getElementById("item-4")
const sel5=document.getElementById("item-5")
const sel6=document.getElementById("item-6")
const sel7=document.getElementById("item-7")
const on=document.getElementById("one")
const to=document.getElementById("tow")
const cat=document.getElementById("category")

let icon1=document.getElementById("h1")
let icon2=document.getElementById("h2")
let icon3=document.getElementById("h3")
let icon4=document.getElementById("h4")
let icon5=document.getElementById("h5")
let icon6=document.getElementById("h6")
let h7=document.getElementById("h7")

let a1=document.getElementById("a1")
let a2=document.getElementById("a2")
let a3=document.getElementById("a3")
let a4=document.getElementById("a4")
let a5=document.getElementById("a5")
let a6=document.getElementById("a6")
let a7=document.getElementById("a7")

let b1=document.getElementById("b1")
let b2=document.getElementById("b2")
let b3=document.getElementById("b3")
let b4=document.getElementById("b4")
let b5=document.getElementById("b5")
let b6=document.getElementById("b6")
let b7=document.getElementById("b7")


let c1=document.getElementById("c1")
let c2=document.getElementById("c2")
let c3=document.getElementById("c3")
let c4=document.getElementById("c4")
let c5=document.getElementById("c5")
let c6=document.getElementById("c6")
let c7=document.getElementById("c7")

let d1=document.getElementById("d1")
let d2=document.getElementById("d2")
let d3=document.getElementById("d3")
let d4=document.getElementById("d4")
let d5=document.getElementById("d5")
let d6=document.getElementById("d6")
let d7=document.getElementById("d7")


let e1=document.getElementById("e1")
let e2=document.getElementById("e2")
let e3=document.getElementById("e3")
let e4=document.getElementById("e4")
let e5=document.getElementById("e5")
let e6=document.getElementById("e6")
let e7=document.getElementById("e7")


let f1=document.getElementById("f1")
let f2=document.getElementById("f2")
let f3=document.getElementById("f3")
let f4=document.getElementById("f4")
let f5=document.getElementById("f5")
let f6=document.getElementById("f6")
let f7=document.getElementById("f7")

let di=document.getElementById("mnb")
a1.onclick=()=>{
    sel1.classList.remove("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}
b1.onclick=()=>{
    sel1.classList.remove("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}

c1.onclick=()=>{
    sel1.classList.remove("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}

d1.onclick=()=>{
    sel1.classList.remove("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}


e1.onclick=()=>{
    sel1.classList.remove("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}

f1.onclick=()=>{
    sel1.classList.remove("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}


icon1.onclick=()=>{
    sel1.classList.remove("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}


















a2.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.remove("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}
b2.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.remove("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}

c2.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.remove("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}

d2.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.remove("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}


e2.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.remove("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}

f2.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.remove("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}


icon2.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.remove("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}


















a3.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.remove("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}
b3.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.remove("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}

c3.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.remove("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}

d3.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.remove("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}


e3.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.remove("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}

f3.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.remove("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}


icon3.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.remove("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}











a4.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.remove("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}
b4.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.remove("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}

c4.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.remove("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}

d4.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.remove("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}


e4.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.remove("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}

f4.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.remove("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}


icon4.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.remove("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}











a5.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.remove("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}
b5.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.remove("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}

c5.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.remove("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}

d5.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.remove("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}


e5.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.remove("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}

f5.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.remove("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}


icon5.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.remove("hide")
    sel6.classList.add("hide")
    sel7.classList.add("hide")

}


















a6.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.remove("hide")
    sel7.classList.add("hide")

}
b6.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.remove("hide")
    sel7.classList.add("hide")

}

c6.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.remove("hide")
    sel7.classList.add("hide")

}

d6.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.remove("hide")
    sel7.classList.add("hide")

}


e6.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.remove("hide")
    sel7.classList.add("hide")

}

f6.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.remove("hide")
    sel7.classList.add("hide")

}


icon6.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.remove("hide")
    sel7.classList.add("hide")

}







a7.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.remove("hide")

}
b7.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.remove("hide")

}

c7.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.remove("hide")

}

d7.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.remove("hide")

}


e7.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.remove("hide")

}

f7.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.remove("hide")

}


h7.onclick=()=>{
    sel1.classList.add("hide")
    sel2.classList.add("hide")
    sel3.classList.add("hide")
    sel4.classList.add("hide")
    sel5.classList.add("hide")
    sel6.classList.add("hide")
    sel7.classList.remove("hide")


}
