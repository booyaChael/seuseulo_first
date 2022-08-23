import Todo from "/Users/imchaeeul/seuseulo_first/models/Todo.js";

export const getTodo = async(req,res) => {
    const {id} = req.params;
    const todo = await Todo.findById(id);
    return res.render("todo", {pageTitle: "할 일", todo},);
};
export const postTodo = (req, res) => res.send("postTodo");





export const getLogin = (req, res) => res.render("login",)