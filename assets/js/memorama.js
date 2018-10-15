frstCard = null;
completedPairs = 0;

function showCard(cardId)
{
	switch(cardId)
	{
		case "cardA1":
		case "cardB1":
			document.getElementById(cardId).innerHTML = "<img src='assets/img/memorama/F.png'>";
		break;

		case "cardA2":
		case "cardB2":
			document.getElementById(cardId).innerHTML = "<img src='assets/img/memorama/O.png'>";
		break;

		case "cardA3":
		case "cardB3":
			document.getElementById(cardId).innerHTML = "<img src='assets/img/memorama/D.png'>";
		break;

		case "cardA4":
		case "cardB4":
			document.getElementById(cardId).innerHTML = "<img src='assets/img/memorama/A.png'>";
		break;
	}
	if (frstCard != null)
	{
		checkPair(frstCard, cardId);
		frstCard = null;
	}
	else
	{
		frstCard = cardId;
	}
}

function checkPair(card1, card2)
{
	if (card1 == "cardA1" && card2 == "cardB1" || card1 == "cardB1" && card2 == "cardA1" || card1 == "cardA2" && card2 == "cardB2" || card1 == "cardB2" && card2 == "cardA2" || card1 == "cardA3" && card2 == "cardB3" || card1 == "cardB3" && card2 == "cardA3" || card1 == "cardA4" && card2 == "cardB4" || card1 == "cardB4" && card2 == "cardA4")
	{
		completedPairs++;
		if (completedPairs >= 4)
		{
			alert("Felicidades");
		}
	}
	else
	{
		setTimeout(function()
			{
				document.getElementById(card1).innerHTML = "<img src='assets/img/memorama/back.png'>";
				document.getElementById(card2).innerHTML = "<img src='assets/img/memorama/back.png'>";
			}, 1000);
	}
}