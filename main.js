//date 변수 생성
const date = new Date();
//현재 연도
const calendarYear = date.getFullYear();
//현재 월
const calendarMonth = date.getMonth() + 1;
//현재 일
const calendarToday = date.getDate() + 1;
//현재 요일
const calendarTodayDay = date.getDay();
//현월 마지막 날짜
const calendarLastDate = new Date(calendarYear, calendarMonth, 0);
//전월 마지막 날짜
const preCalendarLastDate = new Date(calendarYear-1, calendarMonth-1, 0);
//현월의 일 수
const calendarMonthDays = calendarLastDate.getDate();
//전월의 일 수
const preCalendarMonthDays = preCalendarLastDate.getDate();
//주간 배열
let arWeek = [0, 0, 0, 0, 0, 0, 0];

//주간 배열 현일 기준 뒷부분 채우기
let weekDayAf = calendarToday;
for (let i = calendarTodayDay; i < 7; i++){
    arWeek[i] = weekDayAf++;
    if(weekDayAf > calendarLastDate) {
        weekDayAf = 1;
    }
}
//주간 배열 현일 기준 앞부분 채우기
let weekDayBef = calendarToday;
console.log(weekDayBef);
for (let i = calendarTodayDay-1; i >= 0; i--) {
    weekDayBef--;
    if(weekDayBef <= 0){
        weekDayBef = preCalendarMonthDays;
    }
    arWeek[i] = weekDayBef;
}
console.log(arWeek);

//주간 배열 html의 table로 연결짓기//
var calendarTableDate = "<tr>";
arWeek.forEach((value, i) => {
    calendarTableDate += `<td>${value}</td>`;
});
calendarTableDate += "</tr>";
document.getElementById("calendar_table_date").innerHTML = calendarTableDate;

//h1에 현월 표시//
document.getElementById("calendar_month").innerText = `${calendarMonth}월`;