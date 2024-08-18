function greet(){
    alert("hello")
}
// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

// <!-- 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser. -->

var counter = 0;
function increase() {
  document.getElementById("result").innerText = counter++;
}
function decrease() {
  if (counter < 0) {
    counter = 0;
  }
  document,(getElementById("result").innerText = counter--);
}
 
  function expendedContractedText() {
    var contractedText =
      "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Magni ess dolore, tempora molestiae hic quisquam fuga delectus repellendus dolor fugit quo laudantium incidunt dolorum quae nesciunt sint, a ea suscipit.";
    var expentdedText =
      "oremLorem ipsum dolor sit amet consectetur adipisicing elit. Magni ess dolore, tempora molestiae hic quisquam fuga delectus repellendus dolor fugit quo laudantium incidunt dolorum quae nesciunt sint, a ea suscipit. oremLorem ipsum dolor sit amet consectetur adipisicing elit. Magni ess dolore, tempora molestiae hic quisquam fuga delectus repellendusoremLorem ipsum dolor sit amet consectetur adipisicing elit. Magni ess dolore, tempora molestiae hic quisquam fuga delectus repellendusoremLorem ipsum dolor sit amet consectetur adipisicing elit. Magni ess dolore, tempora molestiae hic quisquam fuga delectus repellendusoremLorem ipsum dolor sit amet consectetur adipisicing elit. Magni ess dolore, tempora molestiae hic quisquam fuga delectus repellendusoremLorem ipsum dolor sit amet consectetur adipisicing elit. Magni ess dolore, tempora molestiae hic quisquam fuga delectus repellendus";
    var text = document.getElementById("para1");
    var anchore = document.getElementById("anc");
    if (text.innerText == contractedText) {
      text.innerText = expentdedText;
      anchore.innerText = "read less";
    } else {
      text.innerText = contractedText;
      anchore.innerText = "read more";
    }
  }
  function a(){
    var divi = document.getElementById("d")
    divi.className="div"
  }
  
  
  function table (){
   var row = document.getElementsById("table-Row")
   row.remove()
  
  }

  