let divineNum = () => guessNum = parseInt(prompt("Nhập số dự đoán từ 0 đến 9"));
onload = () => document.getElementById("YesOrNo").style.display = 'none';

function play()
{
    divineNum();
    compare();
}

function compare()
{
    if (guessNum !== randomNum)
    {
        document.getElementById("demo").innerHTML = "Chúc bạn may mắn kiếp sau!"
        document.getElementById("YesOrNo").style.display = 'block';
        document.getElementById("btn").style.display = 'none';
        count++;
    }
    else
    {
        onload();
        document.getElementById("demo").innerHTML = "Bớt khôn đi để cho người khác còn sống nhé!";
    }
}

function yes()
{
    play();
}

function no()
{
    onload();
    document.getElementById("demo").innerHTML = "Trí thông minh tỉ lệ nghịch với sự quyến rũ của bạn (^_^)";
}

function reset()
{
    if (count === MAXRESET)
    {
        onload();
        document.getElementById("demo").innerHTML = "Bạn đã hết cơ hội! Sự đen đủi của bạn thật đáng ngưỡng mộ =)))";
    }
}