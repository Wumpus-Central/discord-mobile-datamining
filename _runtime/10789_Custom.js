// === Module 10789: Custom ===

// Module 10789 (Custom)
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
let jsx = fn(21).jsx;

export const Custom = (activeDotStyle) => {
  activeDotStyle = activeDotStyle.activeDotStyle;
  const dotStyle = activeDotStyle.dotStyle;
  ({ progress: View, horizontal } = activeDotStyle);
  jsx = tmp;
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
            let obj = { justifyContent: "space-between", alignSelf: "center", minWidth: bound, minHeight: Math.max(num, num5, num6) };
            const items = [obj, , ];
            obj = { style: null, children: null };
            items[1] = tmp ? { flexDirection: "row" } : { flexDirection: "column" };
            items[2] = tmp2;
            obj.style = items;
            obj.children = data.map((item, index) => {
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
                  if (closure_2_7 != null) {
                    tmpResult = tmp(closure_0);
                  }
                  return tmpResult;
                },
                accessibilityLabel: "Slide " + index + 1 + " of " + data.length + " - " + closure_9,
                children: null
              };
              let tmp2Result;
              if (closure_6 != null) {
                tmp2Result = tmp2(item, index);
              }
              obj.children = tmp2Result;
              return closure_3(activeDotStyle(dotStyle[3]).PaginationItem, obj, index);
            });
            return jsx(View, obj);
          }
        }
      }
    }
  }
  const error = new Error("size/width/height must be a number");
  throw error;
};