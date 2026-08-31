// _runtime/10526_Custom.js
import noopDefault from "00019_noop.js";
import { View } from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

const require = arg1;
noopDefault;

export const Custom = (activeDotStyle) => {
  activeDotStyle = activeDotStyle.activeDotStyle;
  const dotStyle = activeDotStyle.dotStyle;
  ({ progress: View, horizontal } = activeDotStyle);
  closure_3 = tmp;
  const data = activeDotStyle.data;
  let num = activeDotStyle.size;
  ({ renderItem: closure_6, onPress: closure_7, customReanimatedStyle: closure_8, carouselName: closure_9 } = activeDotStyle);
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
            const bound = Math.max(num2, num3, num4);
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
            let obj = { justifyContent: "space-between", alignSelf: "center", minWidth: null, minHeight: null };
            obj[2] = bound;
            obj[3] = Math.max(num, num5, num6);
            const items = [obj, , ];
            obj = { style: null, children: null };
            items[1] = tmp ? { flexDirection: "row" } : { flexDirection: "column" };
            items[2] = tmp2;
            obj[0] = items;
            obj[1] = data.map((arg0, index) => {
              closure_0 = index;
              const obj = {
                index,
                size: num,
                count: data.length,
                dotStyle,
                animValue: closure_2,
                horizontal: !closure_3,
                activeDotStyle: closure_0,
                customReanimatedStyle: closure_8,
                onPress() {
                  let tmpResult;
                  if (closure_1_7 != null) {
                    tmpResult = tmp(closure_0);
                  }
                  return tmpResult;
                },
                accessibilityLabel: "Slide " + index + 1 + " of " + data.length + " - " + closure_9,
                children: null
              };
              let tmp2Result;
              if (closure_6 != null) {
                tmp2Result = tmp2(arg0, index);
              }
              obj[10] = tmp2Result;
              return closure_3(activeDotStyle(dotStyle[3]).PaginationItem, obj, index);
            });
            return closure_3(View, obj);
          }
        }
      }
    }
  }
  error = new Error("size/width/height must be a number");
  throw error;
};