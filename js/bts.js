var bts = ['RM', 'V', 'Sugar', 'Jin', 'Jungkook', 'Hobbi', 'Jimin']

  var ul = document.getElementById('bts')
         

    function listaBTS(){

        ul.innerHTML = ''

        bts.forEach(function(m){
              
            var li = document.createElement('li')
            var text = document.createTextNode(m)
             li.appendChild(text)
            ul.appendChild(li)

         })
     }