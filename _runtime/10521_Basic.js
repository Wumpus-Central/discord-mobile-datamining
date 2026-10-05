// _runtime/10521_Basic.js
import react_native from "00017_react-native.js";
import Fragment from "react/00021_Fragment.js";
import react from "00019_react.js";

let size;

const View = react_native.View;
let jsx = Fragment.jsx;

export const Basic = (data) => {
  let activeDotStyle;
  let animValue;
  let closure_3;
  let closure_6;
  let closure_7;
  let closure_8;
  let dotStyle;
  let horizontal;
  ({ activeDotStyle: require, dotStyle } = data);
  ({ progress: View, horizontal } = data);
  const tmp = undefined === horizontal || horizontal;
  jsx = tmp;
  data = data.data;
  size = data.size;
  ({ renderItem: closure_6, onPress: closure_7, carouselName: closure_8 } = data);
  if (typeof size !== "string") {
    let width;
    if (dotStyle != null) {
      width = dotStyle.width;
    }
    if (typeof width !== "string") {
      let height;
      if (dotStyle != null) {
        height = dotStyle.height;
      }
      if (typeof height !== "string") {
        const items = [{ justifyContent: "space-between", alignSelf: "center" }, ,];
        let obj = {
          style: items,
          children: data.map((item, index) => {
            let tmp2Result;
            require = index;
            const obj = {
              index,
              size,
              count: data.length,
              dotStyle,
              animValue,
              horizontal: !closure_3,
              activeDotStyle: require,
              onPress() {
                let tmpResult;
                if (closure_7 != null) {
                  tmpResult = tmp(index);
                }
                return tmpResult;
              },
              accessibilityLabel: "Slide " + index + 1 + " of " + data.length + " - " + closure_8,
              children: tmp2Result,
            };
            const PaginationItem = require("PaginationItem").PaginationItem;
            tmp2Result = undefined;
            if (closure_6 != null) {
              tmp2Result = tmp2(item, index);
            }
            return closure_3(PaginationItem, obj, index);
          }),
        };
        items[1] = tmp ? { flexDirection: "row" } : { flexDirection: "column" };
        items[2] = tmp2;
        return jsx(View, obj);
      }
    }
  }
  const error = new Error("size/width/height must be a number");
  throw error;
};
