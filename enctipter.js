/**
- - -  KERBEROS INTELLIGENCE SERVICES  - - -
- - -    Codificador/Decodificador     - - -
**/



function cojertext() {
    var hash = document.getElementById("hashinput").value;
    if (hash.length !== 4){alert("ERROR:Hash incorrecto!\n Debe contener 4 caracteres\n en vez de " + hash.length+"...");}
    
    var lvl0 = hash.charAt(0) + hash.charAt(1);
    var lvl1 = hash.charAt(2) + hash.charAt(3);
    
    var e = document.getElementById("metodotxt");
    var metodo = e.options[e.selectedIndex].value;
    
    var notrtext = document.getElementById("cajainput").value;
    var sitrtext="";
    
    if (metodo === "cod") { 
        for (var pp = 0; pp < lvl0; pp++) {
            sitrtext=codif1(notrtext,"");
            notrtext=sitrtext;
        }
        for (var pp = 0; pp < lvl1; pp++) {
            sitrtext=codif2(notrtext,"");
            notrtext=sitrtext;
        }
        sitrtext = sitrtext.replace(/\n/g,"<br />");
        document.getElementById("cajaoutput").innerHTML = "TEXTO ENCRIPTADO  :<br/><br/>" + sitrtext;
    }
    
    if (metodo === "des"){
        for (var pp = 0; pp < lvl1; pp++) {
            sitrtext=desco2(notrtext,"");
            notrtext=sitrtext;
        }
        for (var pp = 0; pp < lvl0; pp++) {
            sitrtext=desco1(notrtext,"");
            notrtext=sitrtext;
        }
        sitrtext = sitrtext.replace(/\n/g,"<br />");
        document.getElementById("cajaoutput").innerHTML = "TEXTO DESENCRIPTADO  :<br/><br/>" + sitrtext;
    }    

    
}

function codif1(ntxt, stxt){
    for (var rr = 0; rr < ntxt.length; rr++) {
            var caracter = ntxt.charAt(rr);
            if( caracter === "a") {stxt += "l";}
            if( caracter === "A") {stxt += "L";} //A -> L
            if( caracter === "b") {stxt += "k";}
            if( caracter === "B") {stxt += "K";}//B -> K
            if( caracter === "c") {stxt += "j";}
            if( caracter === "C") {stxt += "J";} //C -> J
            if( caracter === "d") {stxt += "h";}
            if( caracter === "D") {stxt += "H";} //D -> H
            if( caracter === "e") {stxt += "g";}
            if( caracter === "E") {stxt += "G";} //E -> G
            if( caracter === "f") {stxt += "d";}
            if( caracter === "F") {stxt += "D";} //F -> D
            if( caracter === "g") {stxt += "f";}
            if( caracter === "G") {stxt += "F";} //G -> F
            if( caracter === "h") {stxt += "s";}
            if( caracter === "H") {stxt += "S";} //H -> S
            if( caracter === "i") {stxt += "a";}
            if( caracter === "I") {stxt += "A";} //I -> A
            if( caracter === "j") {stxt += "p";}
            if( caracter === "J") {stxt += "P";} //J -> P
            if( caracter === "k") {stxt += "o";}
            if( caracter === "K") {stxt += "O";} //K -> O
            if( caracter === "l") {stxt += "i";}
            if( caracter === "L") {stxt += "I";} //L -> I
            if( caracter === "m") {stxt += "u";}
            if( caracter === "M") {stxt += "U";} //M -> U
            if( caracter === "n") {stxt += "y";}
            if( caracter === "N") {stxt += "Y";} //N -> Y
            if( caracter === "o") {stxt += "t";}
            if( caracter === "O") {stxt += "T";} //O -> T
            if( caracter === "p") {stxt += "r";}
            if( caracter === "P") {stxt += "R";} //P -> R
            if( caracter === "q") {stxt += "e";}
            if( caracter === "Q") {stxt += "E";} //Q -> E
            if( caracter === "r") {stxt += "w";}
            if( caracter === "R") {stxt += "W";} //R -> W
            if( caracter === "s") {stxt += "q";}
            if( caracter === "S") {stxt += "Q";} //S -> Q
            if( caracter === "t") {stxt += "m";}
            if( caracter === "T") {stxt += "M";} //T -> M
            if( caracter === "u") {stxt += "n";}
            if( caracter === "U") {stxt += "N";} //U -> N
            if( caracter === "v") {stxt += "b";}
            if( caracter === "V") {stxt += "B";} //V -> B
            if( caracter === "w") {stxt += "v";}
            if( caracter === "W") {stxt += "V";} //W -> V
            if( caracter === "x") {stxt += "c";}
            if( caracter === "X") {stxt += "C";} //X -> C
            if( caracter === "y") {stxt += "z";}
            if( caracter === "Y") {stxt += "Z";} //Y -> Z
            if( caracter === "z") {stxt += "x";}
            if( caracter === "Z") {stxt += "X";} //Z -> X
            if( caracter === "0") {stxt += "5";} //0 -> 5
            if( caracter === "1") {stxt += "4";} //1 -> 4
            if( caracter === "2") {stxt += "6";} //2 -> 6
            if( caracter === "3") {stxt += "1";} //3 -> 1
            if( caracter === "4") {stxt += "8";} //4 -> 8
            if( caracter === "5") {stxt += "0";} //5 -> 0
            if( caracter === "6") {stxt += "7";} //6 -> 7
            if( caracter === "7") {stxt += "2";} //7 -> 2
            if( caracter === "8") {stxt += "9";} //8 -> 9
            if( caracter === "9") {stxt += "3";} //9 -> 3
            if( caracter === "á") {stxt += "&aacute;";}
            if( caracter === "é") {stxt += "&eacute;";}
            if( caracter === "í") {stxt += "&iacute;";}
            if( caracter === "ó") {stxt += "&oacute;";}
            if( caracter === "ú") {stxt += "&uacute;";}
            if( caracter === "ñ") {stxt += ntxt.charAt(rr);}
            if( caracter === "Ñ") {stxt += ntxt.charAt(rr);}
            if( caracter === " ") {stxt += ntxt.charAt(rr);}
            if( caracter === "\n") {stxt += "\n";}
        }
        return stxt;
}

function codif2(ntxt, stxt){
    for (var rr = 0; rr < ntxt.length; rr++) {
            var caracter = ntxt.charAt(rr);
            if( caracter === "a") {stxt += "b";}
            if( caracter === "A") {stxt += "B";} 
            if( caracter === "b") {stxt += "c";}
            if( caracter === "B") {stxt += "C";}
            if( caracter === "c") {stxt += "d";}
            if( caracter === "C") {stxt += "D";}
            if( caracter === "d") {stxt += "e";}
            if( caracter === "D") {stxt += "E";}
            if( caracter === "e") {stxt += "f";}
            if( caracter === "E") {stxt += "F";}
            if( caracter === "f") {stxt += "g";}
            if( caracter === "F") {stxt += "G";}
            if( caracter === "g") {stxt += "h";}
            if( caracter === "G") {stxt += "H";}
            if( caracter === "h") {stxt += "i";}
            if( caracter === "H") {stxt += "I";} 
            if( caracter === "i") {stxt += "j";}
            if( caracter === "I") {stxt += "J";} 
            if( caracter === "j") {stxt += "k";}
            if( caracter === "J") {stxt += "K";} 
            if( caracter === "k") {stxt += "l";}
            if( caracter === "K") {stxt += "L";} 
            if( caracter === "l") {stxt += "m";}
            if( caracter === "L") {stxt += "M";}
            if( caracter === "m") {stxt += "n";}
            if( caracter === "M") {stxt += "N";} 
            if( caracter === "n") {stxt += "o";}
            if( caracter === "N") {stxt += "O";} 
            if( caracter === "o") {stxt += "p";}
            if( caracter === "O") {stxt += "P";} 
            if( caracter === "p") {stxt += "q";}
            if( caracter === "P") {stxt += "Q";} 
            if( caracter === "q") {stxt += "r";}
            if( caracter === "Q") {stxt += "R";} 
            if( caracter === "r") {stxt += "s";}
            if( caracter === "R") {stxt += "S";} 
            if( caracter === "s") {stxt += "t";}
            if( caracter === "S") {stxt += "T";} 
            if( caracter === "t") {stxt += "u";}
            if( caracter === "T") {stxt += "U";} 
            if( caracter === "u") {stxt += "v";}
            if( caracter === "U") {stxt += "V";} 
            if( caracter === "v") {stxt += "w";}
            if( caracter === "V") {stxt += "W";} 
            if( caracter === "w") {stxt += "x";}
            if( caracter === "W") {stxt += "X";} 
            if( caracter === "x") {stxt += "y";}
            if( caracter === "X") {stxt += "Y";} 
            if( caracter === "y") {stxt += "z";}
            if( caracter === "Y") {stxt += "Z";} 
            if( caracter === "z") {stxt += "a";}
            if( caracter === "Z") {stxt += "A";} 
            if( caracter === "0") {stxt += "9";} 
            if( caracter === "1") {stxt += "8";} 
            if( caracter === "2") {stxt += "7";} 
            if( caracter === "3") {stxt += "6";} 
            if( caracter === "4") {stxt += "5";} 
            if( caracter === "5") {stxt += "4";} 
            if( caracter === "6") {stxt += "3";} 
            if( caracter === "7") {stxt += "2";} 
            if( caracter === "8") {stxt += "1";} 
            if( caracter === "9") {stxt += "0";} 
            if( caracter === "á") {stxt += "&iacute;";}
            if( caracter === "é") {stxt += "&oacute;";}
            if( caracter === "í") {stxt += "&uacute;";}
            if( caracter === "ó") {stxt += "&eacute;";}
            if( caracter === "ú") {stxt += "&aacute;";}
            if( caracter === "ñ") {stxt += ntxt.charAt(rr);}
            if( caracter === "Ñ") {stxt += ntxt.charAt(rr);}
            if( caracter === " ") {stxt += ntxt.charAt(rr);}
            if( caracter === "\n") {stxt += "\n";}
        }
        return stxt;
}

function desco1(ntxt, stxt){
    for (var rr = 0; rr < ntxt.length; rr++) {
            var caracter = ntxt.charAt(rr);
            if( caracter === "l") {stxt += "a";}
            if( caracter === "L") {stxt += "A";} //A -> L
            if( caracter === "k") {stxt += "b";}
            if( caracter === "K") {stxt += "B";}//B -> K
            if( caracter === "j") {stxt += "c";}
            if( caracter === "J") {stxt += "C";} //C -> J
            if( caracter === "h") {stxt += "d";}
            if( caracter === "H") {stxt += "D";} //D -> H
            if( caracter === "g") {stxt += "e";}
            if( caracter === "G") {stxt += "E";} //E -> G
            if( caracter === "d") {stxt += "f";}
            if( caracter === "D") {stxt += "f";} //F -> D
            if( caracter === "f") {stxt += "g";}
            if( caracter === "F") {stxt += "G";} //G -> F
            if( caracter === "s") {stxt += "h";}
            if( caracter === "S") {stxt += "H";} //H -> S
            if( caracter === "a") {stxt += "i";}
            if( caracter === "A") {stxt += "I";} //I -> A
            if( caracter === "p") {stxt += "j";}
            if( caracter === "P") {stxt += "J";} //J -> P
            if( caracter === "o") {stxt += "k";}
            if( caracter === "O") {stxt += "K";} //K -> O
            if( caracter === "i") {stxt += "l";}
            if( caracter === "I") {stxt += "L";} //L -> I
            if( caracter === "u") {stxt += "m";}
            if( caracter === "U") {stxt += "M";} //M -> U
            if( caracter === "y") {stxt += "n";}
            if( caracter === "Y") {stxt += "N";} //N -> Y
            if( caracter === "t") {stxt += "o";}
            if( caracter === "T") {stxt += "O";} //O -> T
            if( caracter === "r") {stxt += "p";}
            if( caracter === "R") {stxt += "P";} //P -> R
            if( caracter === "e") {stxt += "q";}
            if( caracter === "E") {stxt += "Q";} //Q -> E
            if( caracter === "w") {stxt += "r";}
            if( caracter === "W") {stxt += "R";} //R -> W
            if( caracter === "q") {stxt += "s";}
            if( caracter === "Q") {stxt += "S";} //S -> Q
            if( caracter === "m") {stxt += "t";}
            if( caracter === "M") {stxt += "T";} //T -> M
            if( caracter === "n") {stxt += "u";}
            if( caracter === "N") {stxt += "U";} //U -> N
            if( caracter === "b") {stxt += "v";}
            if( caracter === "B") {stxt += "V";} //V -> B
            if( caracter === "v") {stxt += "w";}
            if( caracter === "V") {stxt += "W";} //W -> V
            if( caracter === "c") {stxt += "x";}
            if( caracter === "C") {stxt += "X";} //X -> C
            if( caracter === "z") {stxt += "y";}
            if( caracter === "Z") {stxt += "Y";} //Y -> Z
            if( caracter === "x") {stxt += "z";}
            if( caracter === "X") {stxt += "Z";} //Z -> X
            if( caracter === "5") {stxt += "0";} //0 -> 5
            if( caracter === "4") {stxt += "1";} //1 -> 4
            if( caracter === "6") {stxt += "2";} //2 -> 6
            if( caracter === "1") {stxt += "3";} //3 -> 1
            if( caracter === "8") {stxt += "4";} //4 -> 8
            if( caracter === "0") {stxt += "5";} //5 -> 0
            if( caracter === "7") {stxt += "6";} //6 -> 7
            if( caracter === "2") {stxt += "7";} //7 -> 2
            if( caracter === "9") {stxt += "8";} //8 -> 9
            if( caracter === "3") {stxt += "9";} //9 -> 3
            if( caracter === "á") {stxt += "&aacute;";}
            if( caracter === "é") {stxt += "&eacute;";}
            if( caracter === "í") {stxt += "&iacute;";}
            if( caracter === "ó") {stxt += "&oacute;";}
            if( caracter === "ú") {stxt += "&uacute;";}
            if( caracter === "ñ") {stxt += ntxt.charAt(rr);}
            if( caracter === "Ñ") {stxt += ntxt.charAt(rr);}
            if( caracter === " ") {stxt += ntxt.charAt(rr);}
            if( caracter === "\n") {stxt += "\n";}
        }
        return stxt;
}

function desco2(ntxt, stxt){
    for (var rr = 0; rr < ntxt.length; rr++) {
            var caracter = ntxt.charAt(rr);
            if( caracter === "b") {stxt += "a";}
            if( caracter === "B") {stxt += "A";}
            if( caracter === "c") {stxt += "b";}
            if( caracter === "C") {stxt += "B";}
            if( caracter === "d") {stxt += "c";}
            if( caracter === "D") {stxt += "C";}
            if( caracter === "e") {stxt += "d";}
            if( caracter === "E") {stxt += "D";}
            if( caracter === "f") {stxt += "e";}
            if( caracter === "F") {stxt += "E";}
            if( caracter === "g") {stxt += "f";}
            if( caracter === "G") {stxt += "f";}
            if( caracter === "h") {stxt += "g";}
            if( caracter === "H") {stxt += "G";}
            if( caracter === "i") {stxt += "h";}
            if( caracter === "I") {stxt += "H";}
            if( caracter === "j") {stxt += "i";}
            if( caracter === "J") {stxt += "I";}
            if( caracter === "k") {stxt += "j";}
            if( caracter === "K") {stxt += "J";}
            if( caracter === "l") {stxt += "k";}
            if( caracter === "L") {stxt += "K";}
            if( caracter === "m") {stxt += "l";}
            if( caracter === "M") {stxt += "L";}
            if( caracter === "n") {stxt += "m";}
            if( caracter === "N") {stxt += "M";}
            if( caracter === "o") {stxt += "n";}
            if( caracter === "O") {stxt += "N";}
            if( caracter === "p") {stxt += "o";}
            if( caracter === "P") {stxt += "O";}
            if( caracter === "q") {stxt += "p";}
            if( caracter === "Q") {stxt += "P";}
            if( caracter === "r") {stxt += "q";}
            if( caracter === "R") {stxt += "Q";}
            if( caracter === "s") {stxt += "r";}
            if( caracter === "S") {stxt += "R";}
            if( caracter === "t") {stxt += "s";}
            if( caracter === "T") {stxt += "S";}
            if( caracter === "u") {stxt += "t";}
            if( caracter === "U") {stxt += "T";}
            if( caracter === "v") {stxt += "u";}
            if( caracter === "V") {stxt += "U";}
            if( caracter === "w") {stxt += "v";}
            if( caracter === "W") {stxt += "V";}
            if( caracter === "x") {stxt += "w";}
            if( caracter === "X") {stxt += "W";}
            if( caracter === "y") {stxt += "x";}
            if( caracter === "Y") {stxt += "X";}
            if( caracter === "z") {stxt += "y";}
            if( caracter === "Z") {stxt += "Y";}
            if( caracter === "a") {stxt += "z";}
            if( caracter === "A") {stxt += "Z";}
            if( caracter === "9") {stxt += "0";}
            if( caracter === "8") {stxt += "1";}
            if( caracter === "7") {stxt += "2";}
            if( caracter === "6") {stxt += "3";}
            if( caracter === "5") {stxt += "4";}
            if( caracter === "4") {stxt += "5";}
            if( caracter === "3") {stxt += "6";}
            if( caracter === "2") {stxt += "7";}
            if( caracter === "1") {stxt += "8";}
            if( caracter === "0") {stxt += "9";}
            if( caracter === "í") {stxt += "&aacute;";}
            if( caracter === "ó") {stxt += "&eacute;";}
            if( caracter === "ú") {stxt += "&iacute;";}
            if( caracter === "é") {stxt += "&oacute;";}
            if( caracter === "á") {stxt += "&uacute;";}
            if( caracter === "ñ") {stxt += ntxt.charAt(rr);}
            if( caracter === "Ñ") {stxt += ntxt.charAt(rr);}
            if( caracter === " ") {stxt += ntxt.charAt(rr);}
            if( caracter === "\n") {stxt += "\n";}
        }
        return stxt;
}