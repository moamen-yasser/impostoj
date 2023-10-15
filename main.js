var btn=document.getElementById("btn");
btn.addEventListener('click', function () {
    int ();
});
function impostoj(){
    let x;
    let y;
    let z;
    let g;
    let f;
    let tc;
    let t;
    let m;
    x = document.getElementById("number").value;
        if (x >= 50 && x <= 250){
        y = ((x - 50) * 0.012);
        z = (y * 3);
        g = (x * 0.14 * 20 / 100);
        tc = (y + z + f);
        m = tc+g;
        t = x - m;
        document.getElementById("normal").innerHTML=y;
        document.getElementById("extra").innerHTML=z;
        document.getElementById("etxtrait").innerHTML=g;
        document.getElementById("rich").innerHTML="none";
        document.getElementById("totalof").innerHTML=tc;
        document.getElementById("must").innerHTML=t;
        document.getElementById("total").innerHTML=m;
        }
        if (x >= 251&& x <= 300){
            y = ((x - 50) * 0.013)
            z = (y * 3)
            g = (x * 0.14 * 20 / 100)
            f = (x * 0.03)
            tc = y + z + f
            m = tc+g;
            t = x - m;
            document.getElementById("normal").innerHTML=y;
            document.getElementById("extra").innerHTML=z;
            document.getElementById("etxtrait").innerHTML=g;
            document.getElementById("rich").innerHTML="none";
            document.getElementById("totalof").innerHTML=tc;
            document.getElementById("must").innerHTML=t;
            document.getElementById("total").innerHTML=m;        }
        else if(x >= 251 && x <= 500){
            y = ((x - 50) * 0.013)
            z = (y * 3)
            g = (x * 0.14 * 20 / 100)
            f = (x * 0.03)
            tc = y + z + f
            m = tc+g;
            t = x - m;
            document.getElementById("normal").innerHTML=y;
            document.getElementById("extra").innerHTML=z;
            document.getElementById("etxtrait").innerHTML=g;
            document.getElementById("rich").innerHTML=f;
            document.getElementById("totalof").innerHTML=tc;
            document.getElementById("must").innerHTML=t;
            document.getElementById("total").innerHTML=m;
        }
        else if(x >= 501 && x <= 1000){
            y = ((x - 50) * 0.014);
            z = (y * 3);
            g = (x * 0.14 * 20 / 100);
            f = (x * 0.03);
            tc = y + z + f;
            m = tc+g;
            t = x - m;
            document.getElementById("normal").innerHTML=y;
            document.getElementById("extra").innerHTML=z;
            document.getElementById("etxtrait").innerHTML=g;
            document.getElementById("rich").innerHTML=f;
            document.getElementById("totalof").innerHTML=tc;
            document.getElementById("must").innerHTML=t;
            document.getElementById("total").innerHTML=m;
        }
        else if(x >= 1001 && x <= 5000){
            y = ((x - 50) * 0.015)
            z = (y * 3)
            g = (x * 0.14 * 20 / 100)
            f = (x * 0.03)
            tc = y + z + f
            m = tc+g;
            t = x - m;
            document.getElementById("normal").innerHTML=y;
            document.getElementById("extra").innerHTML=z;
            document.getElementById("etxtrait").innerHTML=g;
            document.getElementById("rich").innerHTML=f;
            document.getElementById("totalof").innerHTML=tc;
            document.getElementById("must").innerHTML=t;
            document.getElementById("total").innerHTML=m;
        }
        else if(x >= 5001 && x <= 10000){
            y = ((x - 50) * 0.012)
            z = (y * 3)
            g = (x * 0.14 * 20 / 100)
            f = (x * 0.03)
            tc = y + z + f
            m = tc+g;
            t = x - m;
            document.getElementById("normal").innerHTML=y;
            document.getElementById("extra").innerHTML=z;
            document.getElementById("etxtrait").innerHTML=g;
            document.getElementById("rich").innerHTML=f;
            document.getElementById("totalof").innerHTML=tc;
            document.getElementById("must").innerHTML=t;
            document.getElementById("total").innerHTML=m;
        }
        else if(x > 10000){
            y = ((x - 10050) * 0.006 + 160)
            z = (y * 3)
            g = (x * 0.14 * 20 / 100)
            f = (x * 0.03)
            tc = y + z + f
            m = tc+g;
            t = x - m;
            document.getElementById("normal").innerHTML=y;
            document.getElementById("extra").innerHTML=z;
            document.getElementById("etxtrait").innerHTML=g;
            document.getElementById("rich").innerHTML=f;
            document.getElementById("totalof").innerHTML=tc;
            document.getElementById("must").innerHTML=t;
            document.getElementById("total").innerHTML=m;
        }
        else{
            document.getElementById("error").innerHTML=text;
        }
    }
