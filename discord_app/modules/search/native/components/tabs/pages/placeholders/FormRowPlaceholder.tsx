// discord_app/modules/search/native/components/tabs/pages/placeholders/FormRowPlaceholder.tsx
import c from "../../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../../../../../reanimated/ReanimatedRexport.tsx";
import usePlaceholderStyles from "../../../../hooks/usePlaceholderStyles.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  itemContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    overflow: "hidden",
    height: 64,
    paddingVertical: fn(7524).SEARCH_ROW_TAP_STATE_PADDING,
    alignItems: "center",
  },
  avatar: null,
  innerContainer: null,
  upperText: null,
  lowerText: null,
};
let size = {
  height: 48,
  width: 48,
  borderRadius: nativeDefault.radii.xl,
  marginRight: 16,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.avatar = size;
obj2.innerContainer = { justifyContent: "center", flex: 1 };
const size1 = {
  width: "50%",
  borderRadius: nativeDefault.radii.md,
  height: 16,
  marginBottom: 8,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.upperText = size1;
const size2 = {
  justifyContent: "center",
  width: "100%",
  borderRadius: nativeDefault.radii.md,
  height: 16,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.lowerText = size2;
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/search/native/components/tabs/pages/placeholders/FormRowPlaceholder.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (style) => {
      const cResult = c.c(18);
      style = style.style;
      const tmp3 = closure_6();
      const placeholderAnimatedStyle = usePlaceholderStyles.usePlaceholderAnimatedStyle(true);
      if (cResult[0] === placeholderAnimatedStyle) {
        if (cResult[1] === style) {
          if (cResult[2] === tmp3.itemContainer) {
            let tmp5 = cResult[3];
          }
          if (cResult[4] !== tmp3.avatar) {
            const obj3 = { style: tmp3.avatar };
            const tmp9 = React4(View, obj3);
            cResult[4] = tmp3.avatar;
            cResult[5] = tmp9;
            let tmp6 = tmp9;
          } else {
            tmp6 = cResult[5];
          }
          if (cResult[6] !== tmp3.upperText) {
            const obj4 = { style: tmp3.upperText };
            const tmp13 = React4(View, obj4);
            cResult[6] = tmp3.upperText;
            cResult[7] = tmp13;
            let tmp10 = tmp13;
          } else {
            tmp10 = cResult[7];
          }
          if (cResult[8] !== tmp3.lowerText) {
            const obj5 = { style: tmp3.lowerText };
            const tmp17 = React4(View, obj5);
            cResult[8] = tmp3.lowerText;
            cResult[9] = tmp17;
            let tmp14 = tmp17;
          } else {
            tmp14 = cResult[9];
          }
          if (cResult[10] === tmp3.innerContainer) {
            if (cResult[11] === tmp10) {
              if (cResult[12] === tmp14) {
                let tmp18 = cResult[13];
              }
              if (cResult[14] === tmp5) {
                if (cResult[15] === tmp6) {
                  if (cResult[16] === tmp18) {
                    let tmp22 = cResult[17];
                  }
                  return tmp22;
                }
              }
              const obj6 = { style: tmp5, pointerEvents: "none", children: null };
              const items = [tmp6, tmp18];
              obj6.children = items;
              const tmp25 = hasOwnProperty(ReanimatedRexportDefault.View, obj6);
              cResult[14] = tmp5;
              cResult[15] = tmp6;
              cResult[16] = tmp18;
              cResult[17] = tmp25;
              tmp22 = tmp25;
            }
          }
          const obj7 = { style: tmp3.innerContainer, children: null };
          const items1 = [tmp10, tmp14];
          obj7.children = items1;
          const tmp21 = hasOwnProperty(View, obj7);
          cResult[10] = tmp3.innerContainer;
          cResult[11] = tmp10;
          cResult[12] = tmp14;
          cResult[13] = tmp21;
          tmp18 = tmp21;
        }
      }
      const items2 = [placeholderAnimatedStyle, tmp3.itemContainer, style];
      cResult[0] = placeholderAnimatedStyle;
      cResult[1] = style;
      cResult[2] = tmp3.itemContainer;
      cResult[3] = items2;
      tmp5 = items2;
    }
  : (style) => {
      const tmp = closure_6();
      const placeholderAnimatedStyle = usePlaceholderStyles.usePlaceholderAnimatedStyle(true);
      const obj2 = { style: null, pointerEvents: "none", children: null };
      const items = [placeholderAnimatedStyle, tmp.itemContainer, style.style];
      obj2.style = items;
      const items1 = [React4(View, { style: tmp.avatar })];
      const obj4 = { style: tmp.innerContainer, children: null };
      const items2 = [React4(View, { style: tmp.upperText }), React4(View, { style: tmp.lowerText })];
      obj4.children = items2;
      items1[1] = hasOwnProperty(View, obj4);
      obj2.children = items1;
      return hasOwnProperty(ReanimatedRexportDefault.View, obj2);
    };
