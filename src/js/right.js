/**
 * Created by zhangpengfei on 2018/10/17.
 */
// 向左
function right() {
    rightMove();
    rightAdd();
}

function rightMove() {
    for (var li = 1; li <= 4; li++) {
        for (var i = li * 4; i >= (li - 1) * 4 + 1; i--) {
            var currEmpty = document.getElementById(String(i));
            if (currEmpty.innerHTML == '') {
                for (var j = i - 1; j >= (li - 1) * 4 + 1; j--) {
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

function rightAdd() {
    for (var li = 1; li <= 4; li++) {
        for (var k = li * 4; k >= (li - 1) * 4 + 1 ; k--) {
            var currKV = document.getElementById(String(k));
            if (currKV.innerHTML != '') {
                add(document.getElementById(String(k-1)), document.getElementById(String(k)));
                rightMove();
            }
        }
    }

}
