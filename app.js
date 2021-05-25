var head, info, date;
var eklenen;

function ekle()
{
    head = document.getElementById("head").value;
    info = document.getElementById("info").value;
    date = document.getElementById("date").value;
    

    if(head != "")
    {
        eklenen=document.createElement("div");
        eklenen.setAttribute("class", "draggable");
        document.getElementById("listeYapilacaklar").appendChild(eklenen);
        eklenen.innerHTML = head + "<br>" + info + "<br>" + date;


    }
    else alert("Boş bırakalamaz!");
   
}

function sil()
{
    document.getElementById("listeYapilacaklar").innerHTML = "";

}

$( function() {
    $( ".draggable" ).draggable();
    $( ".droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );

