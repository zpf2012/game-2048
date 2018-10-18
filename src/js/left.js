/**
 * Created by zhangpengfei on 2018/10/17.
 */
// 向左
function left() {
    leftMove();
    leftAdd();
}

function leftMove() {
    for (var li = 1; li <= 4; li++) {
        for (var i = li * 4 - 3; i <= li*4; i++) {
            var currEmpty = document.getElementById(String(i));
            if (currEmpty.innerHTML == '') {
                for (var j = i + 1; j <= li*4; j++) {
                    var currNotEmpty = document.getElementById(String(j));
                    if (currNotEmpty.innerHTML != '') {
                        changeContent(currEmpty, currNotEmpty);
                        break;
                    }
                }
            }
        }
    }
}

function leftAdd() {
    for (var li = 1; li <= 4; li++) {
        for (var k = li * 4 - 2; k <= li * 4; k++) {
            var currKV = document.getElementById(String(k));
            if (currKV.innerHTML != '') {
                add(document.getElementById(String(k - 1)), document.getElementById(String(k)));
                leftMove();
            }
        }
    }

}
