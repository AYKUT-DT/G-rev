var head, info, date;
var eklenen;

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
var itemIndex = 0;
function ekle()
{
    head = document.getElementById("head").value;
    info = document.getElementById("info").value;
    date = document.getElementById("date").value;
    
    if(head != "")
    {
        eklenen=document.createElement("div");
        eklenen.setAttribute("class", "item");
        eklenen.innerHTML = head + "<br>" + info + "<br>" + date;
        eklenen.setAttribute("draggable", "true");
        eklenen.id = itemIndex++;
        eklenen.ondragstart=drag;
        document.getElementById("listeYapilacaklar").appendChild(eklenen);   
    }
    else {
      alert("Boş bırakalamaz!");
    }   
}

function sil()
{
    document.getElementById("listeYapilacaklar").innerHTML = "";
  document.getElementById("listeYapilacaklar1").innerHTML = "";
  document.getElementById("listeYapilacaklar2").innerHTML = "";
}


