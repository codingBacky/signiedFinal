$(function () {
    $('.sertchClick > a').click(function (e) {
        e.preventDefault();
        $('.sertchWrap').stop().slideToggle();
    });

    $('.date_anchor').click(function (e) {
        e.preventDefault();
        var dateInput = $('.dateInput');
        if (dateInput.css('top') === '80px' && dateInput.css('opacity') === '1') {
            // 현재 상태가 top: 80px이고 opacity: 1인 경우
            dateInput.animate({ top: 40, opacity: 0 }, 600);
        } else {
            // 현재 상태가 top: 50px이고 opacity: 0인 경우
            dateInput.animate({ top: 80, opacity: 1 }, 600);
        };
    });

    var input = document.getElementById('input-id');
    var datepicker = new HotelDatepicker(input, {
        inline: true,
        moveBothMonths: true,
        minNights: 1,
        startOfWeek: 'sunday',
        selectForward: true,
        showTopbar: false,
        format: 'YYYY-MM-DD',
        i18n: {
            selected: '선택한 기간:',
            night: '박',
            nights: '박',
            button: '닫기',
            clearButton: '취소',
            submitButton: '확인',
            'checkin-disabled': '체크인 비활성화',
            'checkout-disabled': '체크아웃 비활성화',
            'day-names-short': ['일', '월', '화', '수', '목', '금', '토'],
            'day-names': ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
            'month-names-short': ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            'month-names': ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            'error-more': '1박 이상으로 설정해주세요',
            'error-more-plural': '%d박 이상으로 설정해주세요',
            'error-less': '1박 이상으로 설정해주세요',
            'error-less-plural': '%d박 이상으로 설정해주세요',
            'info-more': '1박 이상으로 설정해주세요',
            'info-more-plural': '%d박 이상으로 설정해주세요',
            'info-range': '%d부터 %d박까지의 기간을 선택하세요',
            'info-range-equal': '%d박을 선택하세요',
            'info-default': '날짜 범위를 선택하세요',
            'aria-application': '달력',
            'aria-selected-checkin': '체크인일로 선택된 날짜, %s',
            'aria-selected-checkout': '체크아웃일로 선택된 날짜, %s',
            'aria-selected': '선택된 날짜, %s',
            'aria-disabled': '사용 불가능한 날짜, %s',
            'aria-choose-checkin': '%s를 체크인 날짜로 선택하세요',
            'aria-choose-checkout': '%s를 체크아웃 날짜로 선택하세요',
            'aria-prev-month': '이전 달을 보려면 이전으로 이동하세요',
            'aria-next-month': '다음 달을 보려면 다음으로 이동하세요',
            'aria-close-button': '달력 닫기',
            'aria-clear-button': '선택된 날짜 지우기',
            'aria-submit-button': '확인 버튼'
        }
    });
});