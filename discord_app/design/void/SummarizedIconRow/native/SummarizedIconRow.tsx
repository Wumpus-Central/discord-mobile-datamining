// discord_app/design/void/SummarizedIconRow/native/SummarizedIconRow.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function OverflowSquircle(arg0) {
  let overflow;
  let style;
  ({ overflow, style } = arg0);
  const tmp = createCacheKey();
  let obj = { style: items, children: null };
  items = [tmp.overflowSquircleWrap, style];
  obj = { style: tmp.overflowSquircle, children: null };
  obj = { variant: "text-xs/medium", children: null };
  obj[1] = "+" + overflow;
  obj[1] = jsx(require("../../../components/Text/native/Text.tsx") /* Text */.Text, { variant: "text-xs/medium", children: null });
  obj[1] = <View variant="text-xs/medium">{null}</View>;
  return <View variant="text-xs/medium">{null}</View>;
}
createCacheKey = { container: { flexDirection: "row", alignItems: "center" }, iconWrapper: { alignItems: "center", justifyContent: "center" }, overflowSquircleWrap: null, overflowSquircle: null, overflowTextOnly: null, overflowCircleWrap: null, overflowCircle: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderRadius: require("Themes").radii.md };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, margin: 3, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 10 };
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, margin: 3, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 10 };
createCacheKey[4] = { margin: 2, paddingHorizontal: 8, height: 32, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
let obj2 = { margin: 2, paddingHorizontal: 8, height: 32, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[5] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderRadius: 17 };
const obj3 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderRadius: 17 };
createCacheKey[6] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, margin: 2, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 15 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj4 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, margin: 2, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 15 };
const result = require("jsxProd").fileFinishedImporting("design/void/SummarizedIconRow/native/SummarizedIconRow.tsx");

export default function SummarizedIconRow(items) {
  let OverflowSquircle;
  let View;
  let createCacheKey;
  let jsx;
  let overflowComponent;
  let style;
  items = items.items;
  let num = items.max;
  if (num === undefined) {
    num = 8;
  }
  ({ renderItem: View, offsetAmount: jsx, iconWrapperStyle: createCacheKey, overflowStyle: OverflowSquircle, overflowComponent, style } = items);
  if (overflowComponent === undefined) {
    overflowComponent = OverflowSquircle;
  }
  let c7;
  let closure_8;
  const tmp = createCacheKey();
  c7 = tmp;
  closure_8 = Math.max(items.length - num, 0);
  let items1 = [tmp.container, style];
  return <View style={items1}>{items.map((arg0, arg1) => {
    if (arg1 < num) {
      if (arg1 === num - 1) {
        if (closure_8 > 0) {
          let obj = { style: null, overflow: null };
          obj = { marginLeft: null };
          obj[0] = closure_3;
          const items = [obj, closure_5];
          obj[0] = items;
          obj[1] = tmp2 + 1;
          let tmp7 = outer1_3(overflowComponent, obj, arg1);
        }
        return tmp7;
      }
      const _Math = Math;
      tmp7 = null;
      if (arg0) {
        let items1 = [_undefined.iconWrapper, closure_4, ];
        if (0 !== arg1) {
          const obj1 = { marginLeft: null };
          obj1[0] = closure_3;
          obj = obj1;
        } else {
          obj = {};
        }
        const obj2 = { style: null, children: null };
        items1[2] = obj;
        obj2[0] = items1;
        items1 = callback(arg0, arg1 === tmp6);
        obj2[1] = items1;
        outer1_3(outer1_2, obj2, arg1);
        const tmp8 = outer1_3;
        const tmp9 = outer1_2;
      }
    }
  })}</View>;
};
export const OverflowText = function OverflowText(arg0) {
  let overflow;
  let style;
  ({ overflow, style } = arg0);
  let obj = { style: null, children: null };
  const items = [createCacheKey().overflowTextOnly, style];
  obj[0] = items;
  obj = { variant: "text-xs/medium", children: null };
  obj[1] = "+" + overflow;
  obj[1] = jsx(require("../../../components/Text/native/Text.tsx") /* Text */.Text, { variant: "text-xs/medium", children: null });
  return <View variant="text-xs/medium">{null}</View>;
};
export const OverflowTextSmall = function OverflowTextSmall(arg0) {
  let overflow;
  let style;
  ({ overflow, style } = arg0);
  let obj = { style: null, children: null };
  const items = [createCacheKey().overflowTextOnly, style];
  obj[0] = items;
  obj = { variant: "text-xxs/medium", children: null };
  obj[1] = "+" + overflow;
  obj[1] = jsx(require("../../../components/Text/native/Text.tsx") /* Text */.Text, { variant: "text-xxs/medium", children: null });
  return <View variant="text-xxs/medium">{null}</View>;
};
export const OverflowCircle = function OverflowCircle(arg0) {
  let overflow;
  let style;
  ({ overflow, style } = arg0);
  const tmp = createCacheKey();
  let obj = { style: items, children: null };
  items = [tmp.overflowCircleWrap, style];
  obj = { style: tmp.overflowCircle, children: null };
  obj = { variant: "text-xs/medium", children: null };
  obj[1] = "+" + overflow;
  obj[1] = jsx(require("../../../components/Text/native/Text.tsx") /* Text */.Text, { variant: "text-xs/medium", children: null });
  obj[1] = <View variant="text-xs/medium">{null}</View>;
  return <View variant="text-xs/medium">{null}</View>;
};