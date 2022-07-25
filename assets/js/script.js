var text_Hour = 9;
var text_Suffix = ":00am";
var storedBlocks = [];
var storedBlocks_NAME = "Stored Blocks";

function setBGColor($div, currentTime, textTime)
{
    var iTime_CUR = currentTime.split("");
    var iTime_TXT = textTime.split("");

    if(iTime_CUR[iTime_CUR.length - 2] !== iTime_TXT[iTime_TXT.length - 2])
    {
        if(iTime_CUR[iTime_CUR.length - 2] > iTime_TXT[iTime_TXT.length - 2])
        {
            console.log("p > a");
            $div.addClass("bg-secondary");
        }
        else
        {
            console.log("p < a");
            $div.addClass("bg-secondary");
        }
    }
    else
    {
        console.log("same time of day");

        var t_CUR = parseHour(iTime_CUR);
        var t_TXT = parseHour(iTime_TXT);

        if(parseInt(t_CUR) > parseInt(t_TXT))
        {
            console.log("current greater");
            $div.addClass("bg-secondary");
        }
        else if(parseInt(t_CUR) < parseInt(t_TXT))
        {
            if(parseInt(t_TXT) === 12)
            {
                console.log("current greater");
                $div.addClass("bg-secondary");
            }
            else
            {
                console.log("current less");
                $div.addClass("bg-secondary");
            }
        }
        else
        {
            $div.addClass("bg-warning");
        }
    }
}

