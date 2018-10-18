/**
 * Created by zhangpengfei on 2018/10/17.
 */
function down() {
    downMove();
    downAdd();
}

function downMove() {
    for (var li = 1; li <= 4; li++) {
        for (var i = 16; i >= 1; i--) {
            if (i % 4 == li % 4) {
                var currEmpty = document.getElementById(String(i));
                if (currEmpty.innerHTML == '') {
                    for (var j = i - 4; j >= 1; j--) {
                        if (j % 4 == li % 4) {
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
    }
}

function downAdd() {
    for (var li = 1; li <= 4; li++) {
        for (var k = 5; k <= 16; k++) {
            if (k % 4 == li % 4) {
                var currKV = document.getElementById(String(k));
                if (currKV.innerHTML != '') {
                    add(document.getElementById(String(k)), document.getElementById(String(k - 4)));
                    downMove();
                }
            }
        }
    }
}
