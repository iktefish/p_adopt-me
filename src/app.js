const Pet = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h2", {}, "Yuna"),
            React.createElement("h3", {}, "Dog"),
            React.createElement("h3", {}, "Pariah"),
        ]
    );
};

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adope Me"),
            ...[1, 2, 3, 4].map((i) => React.createElement("h1", {}, i)),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
