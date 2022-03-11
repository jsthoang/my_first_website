document.getElementById("mini").addEventListener("mouseover", select1);
document.getElementById("medi").addEventListener("mouseover", select2);
document.getElementById("maxi").addEventListener("mouseover", select3);
document.getElementById("ba-soc").addEventListener("click",sidebar);
document.getElementById("nav__overlay").addEventListener("click",overlay);

function select1(){
        var x = document.getElementById("content");
        var y = document.getElementById("product")
        x.innerHTML= 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque illo, ea quaerat ducimus blanditiis incidunt sunt rerum adipisci cum facilis omnis in labore eligendi error laudantium molestiae quidem enim recusandae.<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repellendus ab nesciunt laudantium dolorum explicabo dolores minus eligend. ';
        y.src= 'curo_spil.jpg';
}
function select2(){
        var x = document.getElementById("content");
        var y = document.getElementById('product')
        x.innerHTML= 'Minima nesciunt eos tempor Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente minima nesciunt eos tempora. Praesentium officiis excepturi, standard dummy text ever since the 1500s, when an unknown printer took a galley of type eius molestiae nulla quam <br> <br> Consectetur adipisicing elit.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It was popularised in the 1960s with the release of Letraset sheets. ';
        y.src="product-1.jpg"
}
function select3(){
        var x = document.getElementById("content");
        var y = document.getElementById('product');
        x.innerHTML= 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum';
        y.src= 'slide1.jpg';
}
function sidebar() {
        var x = document.getElementById("nav__overlay");
        var y = document.getElementById("sb-container");
        x.style.display = 'block';
        y.style.display = 'flex';
}
function overlay()
{
        var x = document.getElementById("nav__overlay");
        var y = document.getElementById("sb-container");
        x.style.display = 'none';
        y.style.display = 'none';
}

