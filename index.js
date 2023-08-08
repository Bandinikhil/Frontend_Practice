 const heading2 = React.createElement("h3",{id:"addon",class:"add"},"This isthe add")


const heading = React.createElement("div",{id : "parent"},
[heading2,React.createElement("div",{id : "child", color: "blue"},[React.createElement("h1",{},"I'm in h1"),
React.createElement("h2",{},"I'm in h2")]),
React.createElement("div",{id : "child"},[React.createElement("h1",{},"I'm in h1"),
React.createElement("h2",{},"I'm in h2")])]
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading)

