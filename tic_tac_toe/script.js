$(function(){
  var cuurentPlayer, gameOver, cp_old, board,count;
  var win= [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]];
  var playerOne = "o";
  var playerTwo = "x";
  function start(){
    currentPlayer = playerOne;
    count=0;
    board =["","","","","","","","",""];
  }
  function render(){
    var id = 0;
    for(var i=0; i<3; i++){
      for(var j=0; j<3; j++){
        $("<div/>",{
          name : id,
          class : 'tile'
        }).appendTo("#board");
        id++;
      }
    }
  }
  function reset(){
    $("div").removeClass("circle_bg").removeClass("ex_bg");
    start();
    alert("Start Over");
  }
  function checkstate(){
    $.each(win, function(index, value){
      console.log("board" + board);
      console.log("count second" + count);
      if(board[win[index][0]] === board[win[index][1]] && 
        board[win[index][0]] === board[win[index][2]] && 
        board[win[index][0]] !== ""){
        alert("player " + cp_old + " won!!!");
        reset();
      }
      if(count === 9){
        alert("Game is Over!!!")
        reset();
      }
    });
  }
  function init(n){
    count++;
    console.log("count is " + count);
    board[n] = cp_old;
    checkstate();
  }
  render();
  start();
  $('#board').on('click', 'div', function(){
    n = Number($(this).attr("name"));
    console.log("n is" + n);
    if(board[n] === ""){
      if(currentPlayer === "o"){
        $(this).addClass("circle_bg");
        console.log("add circle");
        cp_old = playerOne;
        currentPlayer = playerTwo;
      } else {
        $(this).addClass("ex_bg");
        console.log("add x");
        cp_old = playerTwo;
        currentPlayer = playerOne;
      }
      init(n);
    }
  });
});
 