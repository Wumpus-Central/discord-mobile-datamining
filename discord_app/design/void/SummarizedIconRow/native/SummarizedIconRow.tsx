// discord_app/design/void/SummarizedIconRow/native/SummarizedIconRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function OverflowSquircle(arg0) {
  ({ overflow, style } = arg0);
  const tmp = closure_4();
  const obj = { style: null, children: null };
  const items = [tmp.overflowSquircleWrap, style];
  obj.style = items;
  const obj2 = {
    style: tmp.overflowSquircle,
    children: jsx(Text_Text.Text, { variant: "text-xs/medium", children: "+" + overflow }),
  };
  obj.children = (
    <View style={tmp.overflowSquircle}>
      {jsx(Text_Text.Text, { variant: "text-xs/medium", children: "+" + overflow })}
    </View>
  );
  return <View style={null}>{null}</View>;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let obj2 = {
  container: { flexDirection: "row", alignItems: "center" },
  iconWrapper: { alignItems: "center", justifyContent: "center" },
  overflowSquircleWrap: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderRadius: nativeDefault.radii.md,
  },
  overflowSquircle: null,
  overflowTextOnly: null,
  overflowCircleWrap: null,
  overflowCircle: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md };
obj2.overflowSquircle = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  margin: 3,
  paddingHorizontal: 8,
  height: 30,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
};
let obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  margin: 3,
  paddingHorizontal: 8,
  height: 30,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
};
obj2.overflowTextOnly = {
  margin: 2,
  paddingHorizontal: 8,
  height: 32,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
let obj5 = {
  margin: 2,
  paddingHorizontal: 8,
  height: 32,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj2.overflowCircleWrap = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: 17 };
const obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: 17 };
obj2.overflowCircle = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  margin: 2,
  paddingHorizontal: 8,
  height: 30,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 15,
};
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/SummarizedIconRow/native/SummarizedIconRow.tsx");

export default function SummarizedIconRow(max) {
  let items = max.items;
  let num = max.max;
  if (num === undefined) {
    num = 8;
  }
  ({
    renderItem: View,
    offsetAmount: jsx,
    iconWrapperStyle: closure_4,
    overflowStyle: OverflowSquircle,
    overflowComponent,
    style,
  } = max);
  if (overflowComponent === undefined) {
    overflowComponent = OverflowSquircle;
  }
  let tmp = closure_4();
  closure_8 = Math.max(items.length - num, 0);
  let obj = {
    style: null,
    children: items.map((item, index) => {
      if (index < num) {
        if (index === tmp - 1) {
          if (closure_8 > 0) {
            const obj2 = { style: null, overflow: null };
            const obj3 = { marginLeft };
            items = [obj3, OverflowSquircle];
            obj2.style = items;
            obj2.overflow = tmp2 + 1;
            let tmp7 = <overflowComponent key={index} style={null} overflow={null} />;
          }
          return tmp7;
        }
        const _Math = Math;
        tmp7 = null;
        if (item) {
          let items1 = [iconWrapper.iconWrapper, closure_1_4];
          if (0 !== index) {
            const obj4 = { marginLeft };
            let obj = obj4;
          } else {
            obj = {};
          }
          const obj5 = { style: null, children: null };
          items1[2] = obj;
          obj5.style = items1;
          items1 = View(item, index === tmp6);
          obj5.children = items1;
          <View key={index} style={null}>
            {null}
          </View>;
        }
      }
      tmp = num;
    }),
  };
  let items1 = [tmp.container, style];
  obj.style = items1;
  return (
    <View style={null}>
      {items.map((item, index) => {
        if (index < num) {
          if (index === tmp - 1) {
            if (closure_8 > 0) {
              const obj2 = { style: null, overflow: null };
              const obj3 = { marginLeft };
              items = [obj3, OverflowSquircle];
              obj2.style = items;
              obj2.overflow = tmp2 + 1;
              let tmp7 = <overflowComponent key={index} style={null} overflow={null} />;
            }
            return tmp7;
          }
          const _Math = Math;
          tmp7 = null;
          if (item) {
            let items1 = [iconWrapper.iconWrapper, closure_1_4];
            if (0 !== index) {
              const obj4 = { marginLeft };
              let obj = obj4;
            } else {
              obj = {};
            }
            const obj5 = { style: null, children: null };
            items1[2] = obj;
            obj5.style = items1;
            items1 = View(item, index === tmp6);
            obj5.children = items1;
            <View key={index} style={null}>
              {null}
            </View>;
          }
        }
        tmp = num;
      })}
    </View>
  );
}
export const OverflowText = function OverflowText(arg0) {
  ({ overflow, style } = arg0);
  const obj = { style: null, children: null };
  const items = [closure_4().overflowTextOnly, style];
  obj.style = items;
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/medium", children: "+" + overflow });
  return <View style={null}>{null}</View>;
};
export const OverflowTextSmall = function OverflowTextSmall(arg0) {
  ({ overflow, style } = arg0);
  const obj = { style: null, children: null };
  const items = [closure_4().overflowTextOnly, style];
  obj.style = items;
  obj.children = jsx(Text_Text.Text, { variant: "text-xxs/medium", children: "+" + overflow });
  return <View style={null}>{null}</View>;
};
export const OverflowCircle = function OverflowCircle(arg0) {
  ({ overflow, style } = arg0);
  const tmp = closure_4();
  const obj = { style: null, children: null };
  const items = [tmp.overflowCircleWrap, style];
  obj.style = items;
  const obj2 = {
    style: tmp.overflowCircle,
    children: jsx(Text_Text.Text, { variant: "text-xs/medium", children: "+" + overflow }),
  };
  obj.children = (
    <View style={tmp.overflowCircle}>
      {jsx(Text_Text.Text, { variant: "text-xs/medium", children: "+" + overflow })}
    </View>
  );
  return <View style={null}>{null}</View>;
};
