let count = 0, maxCount = 3;
let counts = 0, maxCounts = 2;
let time = 0, maxTime = 1;

function findAddress(){
    new daum.Postcode({
        oncomplete: function (data) {
            let addr = '';
            let extraAddr = '';

            // 도로명 주소 선택 시
            if (data.userSelectedType === 'R') {
                addr = data.roadAddress;
            } else {    // 지번 주소
                addr = data.jibunAddress;
            }

            document.getElementById('zone_no').value = data.zonecode;
            document.getElementById('adres').value = addr;
            document.getElementById('adres_det').focus();
        }
    }).open();
}

function CountCheck(data){
    if (data.checked) {
        count += 1;
    } else {
        count -= 1;
    }

    if (count > maxCount) {
        alert("희망 운동은 최대 3개까지 선택이 가능합니다.");
        data.checked = false;
        count -= 1;
    }
}

function CountChecks(data) {
    if (data.checked) {
        counts += 1;
    } else {
        counts -= 1;
    }

    if (counts > maxCounts) {
        alert("운동 목적은 최대 2개까지 선택이 가능합니다.");
        data.checked = false;
        counts -= 1;
    }
}

function timeCheck(data) {
    if (data.checked) {
        time += 1;
    } else {
        time -= 1;
    }

    if (time > maxTime) {
        alert("시간은 다중선택이 불가능합니다.");
        data.checked = false;
        time -= 1;
    }
}

// 이메일 형식이 맞는지 체크
function emailCheck() {
    let email = $('#email').val();
    let emailCk = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;


    if (emailCk.test(email) === false) {
        alert("이메일 형식에 맞게 입력해 주세요.");
        $('#email').val("");
        document.getElementById("email").focus();
        return false;
    }else {
        return true;
    }
}

function numCk() {
   if (event.keyCode < 48 || event.keyCode > 57) {
       event.returnValue = false;
   }
}