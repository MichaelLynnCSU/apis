    <script type=text/javascript>
    
    $(document).ready(function() {
        $('img').click(function() {
            var picId = $(this).attr('id');
            $.get("https://anapioficeandfire.com/api/houses/"+picId+"/", function(res) {
                var name = res.name;
                var words = res.words;
                var titles = '';
                for (var i = 0; i < res.titles.length; i++) {
                    titles += res.titles[i];
                }
                var output = "<div class='details'><p>Name: "+name+"</p><p>Words: "+words+"</p><p>Titles: "+titles+"</p></div>";
                $('#houseDetails').html(output);
            }, "json")
        })
    });    
    </script>
