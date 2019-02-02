<script>
var searchinput = document.querySelector("#id");
searchinput.addEventListener('keyup', function(e) {
    var searchchar = e.target.value.toUpperCase();
    var notes = ul.getElementsByTagName("li");
    //start searching words in already exist columns

    Array.from(notes).forEach(function(note)){
        var parText = note.firstelementChild.textContent;

        if(parText.toUpperCase().indexOf(searchchar) !== -1){
            note.style.display="block";
        } else {
            note.style.display = "none";
        }
    });
    
})
</script>