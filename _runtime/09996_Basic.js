// _runtime/09996_Basic.js
import { View } from "get ActivityIndicator";
import "noop";
import { jsx } from "jsxProd";


export const Basic = (data) => {
  let View;
  let closure_6;
  let closure_7;
  let closure_8;
  let dotStyle;
  let horizontal;
  let require;
  ({ activeDotStyle: require, dotStyle } = data);
  ({ progress: View, horizontal } = data);
  const jsx = tmp;
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
          let closure_0 = index;
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
              if (outer1_7 != null) {
                tmpResult = tmp(closure_0);
              }
              return tmpResult;
            },
            accessibilityLabel: null,
            children: null
          };
          obj[8] = "Slide " + index + 1 + " of " + data.length + " - " + closure_8;
          let tmp2Result;
          if (closure_6 != null) {
            tmp2Result = tmp2(arg0, index);
          }
          obj[9] = tmp2Result;
          return closure_3(outer1_0(dotStyle[3]).PaginationItem, obj, index);
        });
        return <View style={null}>{null}</View>;
      }
    }
  }
  const error = new Error("size/width/height must be a number");
  throw error;
};