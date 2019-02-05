case (gameSpaces[0].innerHTML+gameSpaces[1].innerHTML+gameSpaces[2].innerHTML):
alert(" X is the winner.");
break;
case gameSpaces[3].innerHTML+ gameSpaces[4].innerHTML+gameSpaces[5].innerHTML:
alert("X is the winner.");
break;
case gameSpaces[6].innerHTML+ gameSpaces[7].innerHTML+gameSpaces[8].innerHTML:
alert(" X is the winner.");
break;
case gameSpaces[0].innerHTML+ gameSpaces[3].innerHTML+gameSpaces[6].innerHTML:
alert("X is the winner.");
break;
case gameSpaces[1].innerHTML+ gameSpaces[4].innerHTML+gameSpaces[7].innerHTML:
alert("X is the winner.");
break;
case gameSpaces[2].innerHTML+ gameSpaces[5].innerHTML+gameSpaces[8].innerHTML:
alert("X is the winner.");
break;
case gameSpaces[0].innerHTML+ gameSpaces[4].innerHTML+gameSpaces[8].innerHTML:
alert(" X is the winner.");
break;
case gameSpaces[2]+ gameSpaces[4]+gameSpaces[6]:
alert("X is the winner.");
break;
default:
switch("OOO")
{
    case (gameSpaces[0].innerHTML+gameSpaces[1].innerHTML+gameSpaces[2].innerHTML):
        alert("O is the winner.");
        break;
    case gameSpaces[3].innerHTML+ gameSpaces[4].innerHTML+gameSpaces[5].innerHTML:
        alert("O is the winner.");
        break;
    case gameSpaces[6].innerHTML+ gameSpaces[7].innerHTML+gameSpaces[8].innerHTML:
        alert("O is the winner.");
        break;
    case gameSpaces[0].innerHTML+ gameSpaces[3].innerHTML+gameSpaces[6].innerHTML:
        alert("O is the winner.");
        break;
    case gameSpaces[1].innerHTML+ gameSpaces[4].innerHTML+gameSpaces[7].innerHTML:
        alert("O is the winner.");
        break;
    case gameSpaces[2].innerHTML+ gameSpaces[5].innerHTML+gameSpaces[8].innerHTML:
        alert("O is the winner.");
        break;
    case gameSpaces[0].innerHTML+ gameSpaces[4].innerHTML+gameSpaces[8].innerHTML:
        alert(" O is the winner.");
        break;
    case gameSpaces[2]+ gameSpaces[4]+gameSpaces[6]:
        alert("O is the winner.");
        break;

}
}