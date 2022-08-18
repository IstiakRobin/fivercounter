const fiverr = document.getElementById('fiverr');
const counter = document.querySelector('#counter');
const alarm_tone = document.querySelector('#alarmtone')

fiverr.onsubmit = (e)=>{
e.preventDefault()
const formdata= new FormData(e.target)
const {date,time}= Object.fromEntries(formdata.entries());


let count = setInterval(

    function(){
        let startTime = Date.now();
        let endDate = new Date(date+' '+time);
        let orderTime = Math.floor(Math.abs(endDate.getTime() - startTime));

        let totalsec = Math.floor(orderTime/1000);
        let totalmin = Math.floor(totalsec/60);
        let totalhour = Math.floor(totalmin/60);
        let totalday = Math.floor(totalhour/24);

        if(totalsec <= 0)
        {
            clearInterval(count);
            alarm_tone.play();


        }

        let hour = totalhour - (totalday * 24)
        let min = totalmin - (totalday * 24 * 60 ) - (hour  * 60)
        let sec = totalsec - (totalday * 24 * 60  * 60) - (hour * 60 * 60) - (min *60)

        counter.innerHTML = `<h4> ${totalday} Days : ${hour} Hours : ${min} Minutes : ${sec} Seconds </h4>`;

    },1000)}
