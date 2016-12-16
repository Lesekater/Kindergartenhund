import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "hund": {
        "width": 150,
        "float": "right"
    },
    "body": {
        "paddingTop": 0,
        "paddingRight": "5%",
        "paddingBottom": 0,
        "paddingLeft": "5%",
        "backgroundColor": "#7e7",
        "fontFamily": "helvetica, sans-serif"
    },
    "divtext p": {
        "display": "block",
        "width": "70%"
    }
});