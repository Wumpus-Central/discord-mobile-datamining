// === Module 14097: SummarizedIconRow ===

// Module 14097 (SummarizedIconRow)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;

require = fn;
function OverflowSquircle(arg0) {
  ({ overflow, style } = arg0);
  const tmp = closure_4();
  let obj = { style: null, children: null };
  const items = [tmp.overflowSquircleWrap, style];
  obj.style = items;
  obj = { style: tmp.overflowSquircle, children: null };
  obj = { variant: "text-xs/medium", children: "+" + overflow };
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/medium", children: "+" + overflow });
  obj.children = <View variant="text-xs/medium">{"+" + overflow}</View>;
  return <View variant="text-xs/medium">{"+" + overflow}</View>;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: { flexDirection: "row", alignItems: "center" }, iconWrapper: { alignItems: "center", justifyContent: "center" }, overflowSquircleWrap: null, overflowSquircle: null, overflowTextOnly: null, overflowCircleWrap: null, overflowCircle: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md };
createStyles.overflowSquircleWrap = createStyles;
createStyles.overflowSquircle = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, margin: 3, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 10 };
let obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, margin: 3, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 10 };
createStyles.overflowTextOnly = { margin: 2, paddingHorizontal: 8, height: 32, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let obj2 = { margin: 2, paddingHorizontal: 8, height: 32, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.overflowCircleWrap = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: 17 };
const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: 17 };
createStyles.overflowCircle = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, margin: 2, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 15 };
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/SummarizedIconRow/native/SummarizedIconRow.tsx");

export default function SummarizedIconRow(max) {
  let items = max.items;
  let num = max.max;
  if (num === undefined) {
    num = 8;
  }
  ({ renderItem: View, offsetAmount: jsx, iconWrapperStyle: closure_4, overflowStyle: OverflowSquircle, overflowComponent, style } = max);
  if (overflowComponent === undefined) {
    overflowComponent = OverflowSquircle;
  }
  const tmp = closure_4();
  closure_8 = Math.max(items.length - num, 0);
  let obj = {
    style: null,
    children: items.map((item, index) => {
      if (index < num) {
        if (index === num - 1) {
          if (closure_8 > 0) {
            let obj = { style: null, overflow: null };
            obj = { marginLeft };
            items = [obj, OverflowSquircle];
            obj.style = items;
            obj.overflow = tmp2 + 1;
            let tmp7 = <overflowComponent key={arg1} marginLeft={marginLeft} />;
          }
          return tmp7;
        }
        const _Math = Math;
        tmp7 = null;
        if (item) {
          let items1 = [iconWrapper.iconWrapper, closure_1_4, ];
          if (0 !== index) {
            const obj1 = { marginLeft };
            obj = obj1;
          } else {
            obj = {};
          }
          const obj2 = { style: null, children: null };
          items1[2] = obj;
          obj2.style = items1;
          items1 = closure_1_2(item, index === tmp6);
          obj2.children = items1;
          <View key={arg1} style={null}>{null}</View>;
        }
      }
    })
  };
  let items1 = [tmp.container, style];
  obj.style = items1;
  return <View style={null}>{items.map((item, index) => {
    if (index < num) {
      if (index === num - 1) {
        if (closure_8 > 0) {
          let obj = { style: null, overflow: null };
          obj = { marginLeft };
          items = [obj, OverflowSquircle];
          obj.style = items;
          obj.overflow = tmp2 + 1;
          let tmp7 = <overflowComponent key={arg1} marginLeft={marginLeft} />;
        }
        return tmp7;
      }
      const _Math = Math;
      tmp7 = null;
      if (item) {
        let items1 = [iconWrapper.iconWrapper, closure_1_4, ];
        if (0 !== index) {
          const obj1 = { marginLeft };
          obj = obj1;
        } else {
          obj = {};
        }
        const obj2 = { style: null, children: null };
        items1[2] = obj;
        obj2.style = items1;
        items1 = closure_1_2(item, index === tmp6);
        obj2.children = items1;
        <View key={arg1} style={null}>{null}</View>;
      }
    }
  })}</View>;
};
export const OverflowText = function OverflowText(arg0) {
  ({ overflow, style } = arg0);
  let obj = { style: null, children: null };
  const items = [closure_4().overflowTextOnly, style];
  obj.style = items;
  obj = { variant: "text-xs/medium", children: "+" + overflow };
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/medium", children: "+" + overflow });
  return <View variant="text-xs/medium">{"+" + overflow}</View>;
};
export const OverflowTextSmall = function OverflowTextSmall(arg0) {
  ({ overflow, style } = arg0);
  let obj = { style: null, children: null };
  const items = [closure_4().overflowTextOnly, style];
  obj.style = items;
  obj = { variant: "text-xxs/medium", children: "+" + overflow };
  obj.children = jsx(Text_Text.Text, { variant: "text-xxs/medium", children: "+" + overflow });
  return <View variant="text-xxs/medium">{"+" + overflow}</View>;
};
export const OverflowCircle = function OverflowCircle(arg0) {
  ({ overflow, style } = arg0);
  const tmp = closure_4();
  let obj = { style: null, children: null };
  const items = [tmp.overflowCircleWrap, style];
  obj.style = items;
  obj = { style: tmp.overflowCircle, children: null };
  obj = { variant: "text-xs/medium", children: "+" + overflow };
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/medium", children: "+" + overflow });
  obj.children = <View variant="text-xs/medium">{"+" + overflow}</View>;
  return <View variant="text-xs/medium">{"+" + overflow}</View>;
};