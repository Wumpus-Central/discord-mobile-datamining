// === Module 10787: Basic ===

// Module 10787 (Basic)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import noop from "module_19" /* 19 */;

const View = _mod17.View;
let jsx = jsxProd.jsx;

export const Basic = (data) => {
  ({ activeDotStyle: require, dotStyle } = data);
  ({ progress: View, horizontal } = data);
  jsx = tmp;
  data = data.data;
  const size = data.size;
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
        const items = [{ justifyContent: "space-between", alignSelf: "center" }, , ];
        let obj = { style: null, children: null };
        items[1] = tmp ? { flexDirection: "row" } : { flexDirection: "column" };
        items[2] = tmp2;
        obj.style = items;
        obj.children = data.map((item, index) => {
          activeDotStyle = index;
          const obj = {
            index,
            size,
            count: data.length,
            dotStyle,
            animValue,
            horizontal: !closure_3,
            activeDotStyle,
            onPress() {
              let tmpResult;
              if (closure_2_7 != null) {
                tmpResult = tmp(closure_0);
              }
              return tmpResult;
            },
            accessibilityLabel: "Slide " + index + 1 + " of " + data.length + " - " + closure_8,
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
  const error = new Error("size/width/height must be a number");
  throw error;
};