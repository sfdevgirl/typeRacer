$(document).ready(function() {
       
       var stimestamp, etimestamp;
       var booboos = 0;


       var txtToType = $('#text-to-type');
       var txt = $('#user-input');

       
       var wordSpans = [];
       var str = "There is a place in the heart that will never be filled, a space, and even during the best moments and the greatest times we will know it, we will know it more than ever. There is a place in the heart that will never be filled, and we will wait, and wait, in that space.";
       var words = str.split(" ");


       for(var i = 0; i < words.length; i++) {


wordSpans.push('<span>' + words[i] + '</span>');
       }
       
       var joinedWordSpans = wordSpans.join(" ");
       $('#text-to-type').html(joinedWordSpans);  
       

       function displayStatistics() {
               //DO STUFF
       }


       txt.on("keydown", function(ext){ 
               if(!stimestamp)
                       stimestamp=new Date().getTime();

               var inputTxt = this.value;
               
               for(var i=0; i<inputTxt.length; i++) {
                       if(txtToType[i] != inputTxt[i]) {


                                booboos++;
                              false;
                       }
               }
               
                       
               if(txtToType.length == inputTxt.length) {
                       txtToType.css("disabled", true);
                       etimestamp = new Date().getTime();
                       console.log("disabled")

                       displayStatistics();
               }
               //console.log( booboos );
       });
});