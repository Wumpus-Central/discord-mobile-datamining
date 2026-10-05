// _runtime/10523_Custom.js
import react_native from "00017_react-native.js";
import Fragment from "react/00021_Fragment.js";
import react from "00019_react.js";

const View = react_native.View;
let jsx = Fragment.jsx;

export const Custom = (activeDotStyle) => {
  let animValue;
  let closure_3;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let customReanimatedStyle;
  let horizontal;
  activeDotStyle = activeDotStyle.activeDotStyle;
  const dotStyle = activeDotStyle.dotStyle;
  ({ progress: View, horizontal } = activeDotStyle);
  const tmp = undefined === horizontal || horizontal;
  jsx = tmp;
  const data = activeDotStyle.data;
  let num = activeDotStyle.size;
  ({
    renderItem: closure_6,
    onPress: closure_7,
    customReanimatedStyle: closure_8,
    carouselName: closure_9,
  } = activeDotStyle);
  if (typeof num !== "string") {
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
        let width1;
        if (activeDotStyle != null) {
          width1 = activeDotStyle.width;
        }
        if (typeof width1 !== "string") {
          let height1;
          if (activeDotStyle != null) {
            height1 = activeDotStyle.height;
          }
          if (typeof height1 !== "string") {
            let num2 = num;
            const _Math2 = Math;
            const max2 = Math.max;
            if (num == null) {
              num2 = 0;
            }
            let num3;
            if (dotStyle != null) {
              num3 = dotStyle.width;
            }
            if (num3 == null) {
              num3 = 0;
            }
            let num4;
            if (activeDotStyle != null) {
              num4 = activeDotStyle.width;
            }
            if (num4 == null) {
              num4 = 0;
            }
            const _Math = Math;
            const max2Result = max2(num2, num3, num4);
            if (num == null) {
              num = 0;
            }
            let num5;
            if (dotStyle != null) {
              num5 = dotStyle.height;
            }
            if (num5 == null) {
              num5 = 0;
            }
            let num6;
            if (activeDotStyle != null) {
              num6 = activeDotStyle.height;
            }
            if (num6 == null) {
              num6 = 0;
            }
            let obj = {
              justifyContent: "space-between",
              alignSelf: "center",
              minWidth: max2Result,
              minHeight: max(num, num5, num6),
            };
            const items = [obj, ,];
            items[1] = tmp ? { flexDirection: "row" } : { flexDirection: "column" };
            items[2] = tmp2;
            const obj2 = {
              style: items,
              children: data.map((item, index) => {
                let tmp2Result;
                activeDotStyle = index;
                const obj = {
                  index,
                  size: num,
                  count: data.length,
                  dotStyle,
                  animValue,
                  horizontal: !closure_3,
                  activeDotStyle,
                  customReanimatedStyle,
                  onPress() {
                    let tmpResult;
                    if (closure_7 != null) {
                      tmpResult = tmp(index);
                    }
                    return tmpResult;
                  },
                  accessibilityLabel: "Slide " + index + 1 + " of " + data.length + " - " + closure_9,
                  children: tmp2Result,
                };
                const PaginationItem = activeDotStyle(dotStyle[3]).PaginationItem;
                tmp2Result = undefined;
                if (closure_6 != null) {
                  tmp2Result = tmp2(item, index);
                }
                return closure_3(PaginationItem, obj, index);
              }),
            };
            return jsx(View, obj2);
          }
        }
      }
    }
  }
  const error = new Error("size/width/height must be a number");
  throw error;
};
