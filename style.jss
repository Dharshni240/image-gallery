/* ==========================
   GOOGLE FONT & RESET
========================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    background:linear-gradient(135deg,#0f172a,#1e293b,#334155);
    min-height:100vh;
    color:#fff;
    padding:40px 5%;
}

/* ==========================
        HEADER
========================== */

header{
    text-align:center;
    margin-bottom:40px;
}

header h1{
    font-size:3rem;
    font-weight:700;
    margin-bottom:10px;
    letter-spacing:1px;
}

header h1 i{
    color:#38bdf8;
    margin-right:10px;
}

header p{
    color:#cbd5e1;
    font-size:1rem;
}

/* ==========================
      FILTER BUTTONS
========================== */

.filters{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:15px;
    margin-bottom:40px;
}

.filter-btn{

    padding:12px 28px;
    border:none;
    border-radius:30px;
    cursor:pointer;

    background:rgba(255,255,255,0.08);
    color:white;

    backdrop-filter:blur(10px);

    transition:.4s;

    font-size:15px;
}

.filter-btn:hover{
    background:#38bdf8;
    transform:translateY(-3px);
}

.filter-btn.active{
    background:#0ea5e9;
}

/* ==========================
        GALLERY
========================== */

.gallery{

    display:grid;

    grid-template-columns:
    repeat(auto-fit,minmax(280px,1fr));

    gap:25px;

}

/* ==========================
      IMAGE CARD
========================== */

.gallery-item{

    position:relative;

    overflow:hidden;

    border-radius:20px;

    cursor:pointer;

    background:rgba(255,255,255,.05);

    backdrop-filter:blur(12px);

    box-shadow:0 10px 30px rgba(0,0,0,.35);

    transition:.4s;

}

.gallery-item:hover{

    transform:translateY(-10px);

    box-shadow:0 20px 40px rgba(0,0,0,.45);

}

.gallery-item img{

    width:100%;

    height:280px;

    object-fit:cover;

    transition:.6s;

}

.gallery-item:hover img{

    transform:scale(1.12);

}

/* ==========================
        OVERLAY
========================== */

.overlay{

    position:absolute;

    inset:0;

    background:rgba(0,0,0,.55);

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    opacity:0;

    transition:.5s;

}

.gallery-item:hover .overlay{

    opacity:1;

}

.overlay h3{

    margin-bottom:15px;

    font-size:22px;

}

.view-btn{

    padding:10px 22px;

    border:none;

    border-radius:30px;

    cursor:pointer;

    background:#38bdf8;

    color:white;

    font-weight:600;

    transition:.3s;

}

.view-btn:hover{

    background:white;

    color:#0f172a;

}

/* ==========================
      LIGHTBOX
========================== */

.lightbox{

    position:fixed;

    top:0;

    left:0;

    width:100%;

    height:100%;

    background:rgba(0,0,0,.94);

    display:none;

    justify-content:center;

    align-items:center;

    flex-direction:column;

    z-index:999;

}

.lightbox img{

    width:80%;

    max-width:900px;

    border-radius:15px;

    box-shadow:0 0 40px black;

}

/* ==========================
       CLOSE BUTTON
========================== */

.close{

    position:absolute;

    top:30px;

    right:45px;

    font-size:45px;

    cursor:pointer;

    transition:.3s;

}

.close:hover{

    color:#38bdf8;

}

/* ==========================
      PREV & NEXT
========================== */

.prev,
.next{

    position:absolute;

    top:50%;

    transform:translateY(-50%);

    width:60px;

    height:60px;

    border:none;

    border-radius:50%;

    cursor:pointer;

    background:rgba(255,255,255,.15);

    color:white;

    font-size:22px;

    transition:.3s;

}

.prev:hover,
.next:hover{

    background:#38bdf8;

}

.prev{

    left:40px;

}

.next{

    right:40px;

}

/* ==========================
      CAPTION
========================== */

.caption{

    margin-top:20px;

    font-size:24px;

    font-weight:600;

}

.counter{

    margin-top:10px;

    color:#94a3b8;

}

/* ==========================
      ANIMATION
========================== */

.gallery-item{

    animation:fadeUp .8s ease;

}

@keyframes fadeUp{

    from{

        opacity:0;

        transform:translateY(40px);

    }

    to{

        opacity:1;

        transform:translateY(0);

    }

}

/* ==========================
      RESPONSIVE
========================== */

@media(max-width:768px){

header h1{

font-size:2rem;

}

.gallery{

grid-template-columns:1fr;

}

.lightbox img{

width:92%;

}

.prev{

left:10px;

}

.next{

right:10px;

}

.close{

right:20px;

}

}
