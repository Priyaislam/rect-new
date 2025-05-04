/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>i'm in h1 tag</h1>
 *          <h2>I'm in h2 tag</h2>
 *      </div>
 *    <div id="child2">
 *          <h1>i'm in h1 tag</h1>
 *          <h2>I'm in h2 tag</h2>
 *      </div>
 * </div>
 * reactElement(object) => HTML(Browser understand)
 * 
 */

const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement( "div",{ id: "child" }, [
        React.createElement("h1", {}, "I'm in h1 tag"),
        React.createElement("h2", {}, "I'm in h2 tag"),
     ]),
     React.createElement( "div",{ id: "child2" }, [
        React.createElement("h1", {}, "I'm in child 2 h1 tag"),
        React.createElement("h2", {}, "I'm in child 2 h2 tag"),
     ]),

    ]);






//const heading = React.createElement(
//   "h1",
//   {id: "heading", xyz: "abc"},
//   "Hello World from React!"
//);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
