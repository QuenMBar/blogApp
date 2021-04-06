import React, { Component, Fragment } from "react";

export default class CustomBar extends Component {
    // Colors taken from material ui docs for consistency of random colors
    arrayOfColors = [
        "#EF5350",
        "#EC407A",
        "#AB47BC",
        "#673AB7",
        "#3F51B5",
        "#2196F3",
        "#29B6F6",
        "#26C6DA",
        "#26A69A",
        "#66BB6A",
        "#9CCC65",
        "#D4E157",
        "#FFEE58",
        "#FFCA28",
        "#FFA726",
        "#FF8A65",
        "#A1887F",
        "#E0E0E0",
        "#90A4AE",
        "#000000",
        "#C62828",
        "#AD1457",
        "#6A1B9A",
        "#4527A0",
        "#283593",
        "#1565C0",
        "#0277BD",
        "#00838F",
        "#00695C",
        "#2E7D32",
        "#558B2F",
        "#9E9D24",
        "#F9A825",
        "#FF8F00",
        "#EF6C00",
        "#D84315",
        "#4E342E",
        "#424242",
        "#37474F",
    ];

    // Style for the div that contains all the objects
    containerStyles = {
        height: 20,
        width: "80%",
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        marginTop: 40,
        marginLeft: "10%",
        marginRight: "10%",
        position: "relative",
    };

    // State for the
    state = { objArr: [] };

    componentDidMount() {
        this.updateBarElements();
    }

    /** Takes in the percent along the bar it should be and returns the correct css along with a random color for the object
     */
    createFillerStyle = (percent) => {
        return {
            height: 20,
            width: 20,
            marginLeft: `${percent}%`,
            backgroundColor: this.arrayOfColors[Math.floor(Math.random() * this.arrayOfColors.length)],
            borderRadius: "inherit",
            textAlign: "right",
            position: "absolute",
        };
    };

    /** Updates the bar based on the props passed
     */
    updateBarElements = () => {
        let reducedArray = [];
        // Loop through the percents, grabbing the correct css and making an object of the relevant data
        this.props.percents.forEach((percent, i) => {
            reducedArray.push({
                id: i,
                style: this.createFillerStyle(percent),
            });
        });
        this.setState({ objArr: reducedArray });
    };

    render() {
        return (
            <Fragment>
                <div style={this.containerStyles}>
                    {this.state.objArr.map((obj) => (
                        <div key={obj.id} style={obj.style}></div>
                    ))}
                </div>
            </Fragment>
        );
    }
}

CustomBar.defaultProps = {
    percents: [12, 23, 30, 55, 72, 80, 93],
};
