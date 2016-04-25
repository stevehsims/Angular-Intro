app.controller('MainController', function(){
    
    var mc = this;
    
    mc.roster = [];
    
    mc.addplayer = function(newPlayer){
        mc.roster.push(newPlayer)
        mc.newPlayer = {};
    }
})
