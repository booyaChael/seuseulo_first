import Todo from "../../models/Todo.js";

export const getTodo = async(req,res) => {
    const {id} = req.params;
    const todo = await Todo.findById(id);
    return res.render("todo", {pageTitle: "할 일", todo,},);
};

export const postTodo = async(req, res) => {
    const {id} = req.params;
    const todo = await Todo.findById(id);
    try{const {assignment} = req.body;
        await todo.updateOne({assignment});
        return res.redirect(`/user/todo/${todo.id}`);
        } catch(error){
            return res.render("error");
        }
    };

export const deleteTodo = async(req, res) => {
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        return res.redirect("/");
        } catch(error){
            return res.render("error");
        }
    };



export const getLogin = (req, res) => res.render("login",)