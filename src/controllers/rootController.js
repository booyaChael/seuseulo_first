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
for (let i = calendarTodayDay-1; i >= 0; i--) {
    weekDayBef--;
    if(weekDayBef <= 0){
        weekDayBef = preCalendarMonthDays;
    }
    arWeek[i] = weekDayBef;
};

export const getHome = async(req, res) =>{
    try {
        const todos = await Todo.find({});
        return res.render("home", {
            pageTitle: "home", 
            calendar_month: calendarMonth, //h1
            arWeek,
            todos, //날짜
        })
    } catch (error) {
        return res.render("server-error");
    }};
    

   
import Todo from "../../models/Todo.js";
import User from "../../models/User.js";

export const postHome = async(req, res) => {
    const {subject, name, content, due_date, due_time,} = req.body;
    try{
        await Todo.create({
            subject,
            name,
            content,
            due_date,
            due_time,
        })} catch(error){
        return res.render("model create error");
        }
    return res.redirect("/");
};
export const getJoin = async(req, res) => {
    try{
        return res.render("join", {
            pageTitle: "Join",
        })
    } catch(error){
        return res.render("error");
    }
};
export const postJoin = async(req, res) => {
    const {name, user_id, user_password, user_password_confirm, school, grade, className, classNumber} = req.body;
    const pageTitle = "Join";
    if(user_password !== user_password_confirm){
        return res.status(400).render("join",{
            pageTitle,
            errorMessage: "비밀번호와 비밀번호 확인이 일치하지 않습니다",
        });
    }
    const user_id_exists = await User.exists({user_id});
    if(user_id_exists){
        return res.render("join", {pageTitle: "Join", errorMessage:"이미 존재하는 아이디 입니다. 다른 아이디를 입력해주세요",});
    };
    try{
        await User.create({
            name,
            user_id,
            user_password,
            school,
            grade,
            className,
            classNumber
        })
        return res.redirect("/");
    } catch(error){
        return res.send("model create error");
        }; 
};


