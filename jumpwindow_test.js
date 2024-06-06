window.onload = function() {
    // 初始化隨機顏色
    var gridItems = document.getElementsByClassName('grid-item');
    for (var i = 0; i < gridItems.length; i++) {
      gridItems[i].style.backgroundColor = getRandomColor();
    }
  };
  
  function openModal(e) {
    document.getElementById('myModal').style.display = "block";
    document.getElementById('colorBox').style.backgroundColor = e.style.backgroundColor;
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }