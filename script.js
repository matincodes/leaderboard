
fetch('script.json').then(function (response){
    return response.json();
}).then(function (array){
 
  function build (data){
      var table = document.querySelector(".mytable");
      table.innerHTML = "";
      for(var i = 0; i < data.length; i++){
          var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].username}</td>
                        <td>${data[i].email}</td>
                        <td>${data[i].score}</td>
                    </tr>`
            table.innerHTML += row;
      
      }
 }
 build(array);
       var points = document.querySelector("#points");
    //    var button = documnet.querySelector("button")
       points.addEventListener("click", function(){
        var button = document.querySelector("button");
        var first = document.querySelector(".first")
        var second = document.querySelector(".second")
        var third = document.querySelector(".third")
          var column = $(this).data('column')
          var order = $(this).data('order')
        var fp = document.querySelector("#first")
        var sp = document.querySelector("#second")
        var tp = document.querySelector("#third")
           if (order == "asc") {
              $(this).data('order', 'desc')
               array = array.sort((a,b) => a[column] < b[column] ? 1 : -1);
               button.innerHTML = "&#9650";
               first.innerHTML = array[0].name
               second.innerHTML = array[1].name
               third.innerHTML = array[2].name
                fp.innerHTML = array[0].score
                sp.innerHTML = array[1].score
                tp.innerHTML = array[1].score
            }else{
               $(this).data('order', 'asc')
               array = array.sort((a,b) => a[column] > b[column] ? 1 : -1);
               button.innerHTML = "&#9660";
         }
         build(array);
    })
})
