
//ロール
var timers,
    nums,
    stopCount,
    flag = 0;

const wadai0 = document.getElementById('wadai0');


const wadai = [
    '好きな食べ物の話',
    '地元や出身地の話',
    '可愛い動物の動画',
    '天気の話',
    '黒歴史',
    'テレビやドラマの話',
    '共通の友達の話',
    'スーパーマリオゲーム',
    '初恋のお話',
    '最近面白かった話',
    'お互いの第一印象の話',
    '学生時代や幼少期の話',
    '「もしも〇〇だったら」の話',
    'ウンコ味のカレーVSカレー味のウンコ',
    'Wordウルフ',
    '人狼ゲーム',


];





//ストップ押したとき

document.getElementById('stop0').onclick = function () {
    var end = Date.now() + (900);

    // go Buckeyes!
    var colors = ['#bb0000', '#ffffff'];

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 50,
            spread: 30,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 30,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
    stopSlot(0);


};



//スタート押したとき
document.getElementById('start').onclick = function () {

    if (flag != 2) {
        flag = 1;
        startSlot();
    }
};

function startSlot() {
    timers = [];
    nums = [];
    stopCount = 0;

    runSlot(0);
}

function stopSlot(n) {

    if (typeof nums[n] !== 'undefined') {
        return;
    }
    clearTimeout(timers[n]);
    stopCount++;

    if (stopCount == 3) {
        checkSlot();
    }
}


function checkSlot() {
    nums.sort();
    flag = 0;
}

function runSlot(n) {
    wadai0.textContent = wadai[Math.floor(Math.random() * wadai.length)];
    timers[n] = setTimeout(function () {
        runSlot(n);
    }, 30,);

}


