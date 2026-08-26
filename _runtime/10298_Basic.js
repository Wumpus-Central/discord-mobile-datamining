// _runtime/10298_Basic.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import noopDefault from "00019_noop.js";
import jsxProd from "react/00021_jsxProd.js";

const View = get_ActivityIndicator.View;
noopDefault;
const jsx = jsxProd.jsx;

export const Basic = (data) => {
  ({ activeDotStyle: require, dotStyle } = data);
  ({ progress: View, horizontal } = data);
  closure_3 = tmp;
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
        obj[0] = items;
        obj[1] = data.map((arg0, index) => {
          closure_0 = index;
          const obj = {
            index,
            size,
            count: data.length,
            dotStyle,
            animValue: closure_2,
            horizontal: !closure_3,
            activeDotStyle: closure_0,
            onPress() {
              let tmpResult;
              if (closure_1_7 != null) {
                tmpResult = tmp(closure_0);
              }
              return tmpResult;
            },
            accessibilityLabel: "Slide " + index + 1 + " of " + data.length + " - " + closure_8,
            children: null
          };
          let tmp2Result;
          if (closure_6 != null) {
            tmp2Result = tmp2(arg0, index);
          }
          obj[9] = tmp2Result;
          return closure_3(closure_1_0(dotStyle[3]).PaginationItem, obj, index);
        });
        return closure_3(View, obj);
      }
    }
  }
  error = new Error("size/width/height must be a number");
  throw error;
};