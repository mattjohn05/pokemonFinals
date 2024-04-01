var playerHP = 100;
var opponentHP = 100;
var opponentAttacks = [earthquake, dragonClaw, fireFang, crunch];
var playerMove = 0;

function surf() {
    if (playerMove == 0 && playerHP != 0) {
        var miss = Math.floor((Math.random() * 10) + 1);
        if (miss == 1) {
            document.getElementById('message').innerHTML = " Milotic's attack missed! ";
        } else {
            document.getElementById('message').innerHTML = " Milotic used Surf ";
            var critical = Math.floor((Math.random() * 10) + 1);
            if (critical == 4) {
                for (var x = 0; x < 2; x++) {
                    opponentHP = opponentHP - 30;
                }
            } else {
                opponentHP = opponentHP - 30;
            }
            if (opponentHP < 0) {
                opponentHP = 0
            }
            document.getElementById('opponentHP').innerHTML = opponentHP;
            if (opponentHP == 0) {
                document.getElementById('message').innerHTML = " Garchomp fainted! "
            }
        }
        playerMove = 1;
        compPokemon();
    }
}

function iceBeam() {
    if (playerMove == 0 && playerHP != 0) {
        var miss = Math.floor((Math.random() * 10) + 1);
        if (miss == 1) {
            document.getElementById('message').innerHTML = " Milotic's attack missed! "
        } else {
            document.getElementById('message').innerHTML = " Milotic used Ice Beam ";
            var critical = Math.floor((Math.random() * 10) + 1);
            if (critical == 4) {
                for (var x = 0; x < 2; x++) {
                    opponentHP = opponentHP - 20;
                }
            } else {
                opponentHP = opponentHP - 20;
            }
            if (opponentHP < 0) {
                opponentHP = 0
            }
            document.getElementById('opponentHP').innerHTML = opponentHP;
            if (opponentHP == 0) {
                document.getElementById('message').innerHTML = " Garchomp fainted! "
            }
        }
        playerMove = 1;
        compPokemon();
    }
}

function hydroPump() {
    if (playerMove == 0 && playerHP != 0) {
        var miss = Math.floor((Math.random() * 10) + 1);
        if (miss == 1) {
            document.getElementById('message').innerHTML = " Milotic's attack missed! "
        } else {
            document.getElementById('message').innerHTML = " Milotic used Hydro Pump ";
            var critical = Math.floor((Math.random() * 10) + 1);
            if (critical == 4) {
                for (var x = 0; x < 2; x++) {
                    opponentHP = opponentHP - 25;
                }
            } else {
                opponentHP = opponentHP - 25;
            }
            if (opponentHP < 0) {
                opponentHP = 0
            }
            document.getElementById('opponentHP').innerHTML = opponentHP;
            if (opponentHP == 0) {
                document.getElementById('message').innerHTML = " Garchomp fainted! "
            }
        }
        playerMove = 1;
        compPokemon();
    }
}

function recover() {
    if (playerMove == 0 && playerHP != 0) {
        document.getElementById('message').innerHTML = " Milotic used Recover ";
        playerHP += 30;
        if (playerHP > 100) {
            playerHP = 100; 
        }
        document.getElementById('playerHP').innerHTML = playerHP;
        playerMove = 1;
        compPokemon();
    }
}

function compPokemon() {
    if (playerMove == 1 && opponentHP != 0) {
        var move = Math.floor((Math.random() * 4));
        opponentAttacks[move]();
        playerMove = 0;
    }
}

function earthquake() {
    var miss = Math.floor((Math.random() * 10) + 1);
    if (miss == 1) {
        document.getElementById('message').innerHTML = " Garchomp's attack missed! "
    } else {
        document.getElementById('message').innerHTML = " Garchomp used Earthquake "
        var critical = Math.floor((Math.random() * 10) + 1);
        if (critical == 4) {
            for (var x = 0; x < 2; x++) {
                playerHP = playerHP - 25;
            }
        } else {
            playerHP = playerHP - 25;
        }
        if (playerHP < 0) {
            playerHP = 0
        }
        document.getElementById('playerHP').innerHTML = playerHP;
        if (playerHP == 0) {
            document.getElementById('message').innerHTML = " Milotic fainted! "
        }
    }
}

function dragonClaw() {
    var miss = Math.floor((Math.random() * 10) + 1);
    if (miss == 1) {
        document.getElementById('message').innerHTML = " Garchomp's attack missed! "
    } else {
        document.getElementById('message').innerHTML = " Garchomp used Dragon Claw "
        var critical = Math.floor((Math.random() * 10) + 1);
        if (critical == 4) {
            for (var x = 0; x < 2; x++) {
                playerHP = playerHP - 20;
            }
        } else {
            playerHP = playerHP - 20;
        }
        if (playerHP < 0) {
            playerHP = 0
        }
        document.getElementById('playerHP').innerHTML = playerHP;
        if (playerHP == 0) {
            document.getElementById('message').innerHTML = " Milotic fainted! "
        }
    }
}

function fireFang() {
    var miss = Math.floor((Math.random() * 10) + 1);
    if (miss == 1) {
        document.getElementById('message').innerHTML = " Garchomp's attack missed! "
    } else {
        document.getElementById('message').innerHTML = " Garchomp used Fire Fang "
        var critical = Math.floor((Math.random() * 10) + 1);
        if (critical == 4) {
            for (var x = 0; x < 2; x++) {
                playerHP = playerHP - 15;
            }
        } else {
            playerHP = playerHP - 15;
        }
        if (playerHP < 0) {
            playerHP = 0
        }
        document.getElementById('playerHP').innerHTML = playerHP;
        if (playerHP == 0) {
            document.getElementById('message').innerHTML = " Milotic fainted! "
        }
    }
}

function crunch() {
    var miss = Math.floor((Math.random() * 10) + 1);
    if (miss == 1) {
        document.getElementById('message').innerHTML = " Garchomp's attack missed! "
    } else {
        document.getElementById('message').innerHTML = " Garchomp used Crunch "
        var critical = Math.floor((Math.random() * 10) + 1);
        if (critical == 4) {
            for (var x = 0; x < 2; x++) {
                playerHP = playerHP - 10;
            }
        } else {
            playerHP = playerHP - 10;
        }
        if (playerHP < 0) {
            playerHP = 0
        }
        document.getElementById('playerHP').innerHTML = playerHP;
        if (playerHP == 0) {
            document.getElementById('message').innerHTML = " Milotic fainted! "
        }
    }
}
