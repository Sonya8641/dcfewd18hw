!function($) {
   $(document).ready(function(){
   // Passing jQuery through an invoked annonymous function!
       $("#submit-btn").click(function(event){
           event.preventDefault();

           var inputValue = $("#city-type").val();
           inputValue = inputValue.toLowerCase();
           
           var className = "";

           switch(inputValue) {
               case "new york":
               case "nyc":
               case "new york city":
                   className = "nyc";
                   break;
               case "san francisco":
               case "sf":
               case "bay area":
                   className = "sf";
                   break;
               case "los angeles":
               case "la":
               case "lax":
                   className = "la";
                   break;
               case "austin":
               case "atx":
                   className = "austin";
                   break;
               case "sydney":
               case "syd":
                   className = "sydney";
                   break
               default:
                   return;
           }

           $('body').removeClass().addClass(className);
       });

   });
}(jQuery);
