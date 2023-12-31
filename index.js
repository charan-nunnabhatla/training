const date = require("/mnt/15b56983-3609-478a-a82b-cd68c6ae5d33/Files/Coding/CSE/4th year training/date.js");

var items = []; // Variables serving as local database instead of an actual database
var workítems = [];

async function getTodoList (req, res) {
    const today = date.getDate();
    const pageData = {
        listTitle: today,
        newListItems: items
      };

  res.render("list", pageData); //render from the list of view folder
}

async function createTodoItem (req, res) {
    const item = req.body.newItem;
    if (req.body.list && req.body.list === "Work") {
        workítems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

}

async function getWorkList (req, res) {
    const pageData = {
        listTitle: "Work List",
        newListItems: workítems
    };

    res.render("list", pageData);
}

module.exports = {getTodoList, getWorkList, createTodoItem};