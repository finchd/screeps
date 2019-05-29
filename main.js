var roleHarvester = require('role.harvester');

Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1' );
var numCreeps = 1;

module.exports.loop = function () {

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        roleHarvester.run(creep);
    }
    
    if(Game.spawns['Spawn1'].energy > 200) { //we can make a creep
       Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester' + numCreeps);
       numCreeps = numCreeps + 1;
    }
}
