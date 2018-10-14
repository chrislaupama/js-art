$("#btnloop").click(function(){
    var player = $("#player")[0];
    if (player.loop == false) {player.loop = true}
    else {player.loop = false};
});
