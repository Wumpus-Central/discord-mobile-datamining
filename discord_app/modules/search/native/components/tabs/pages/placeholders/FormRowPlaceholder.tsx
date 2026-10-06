// === Module 16868: FormRowPlaceholder ===

// Module 16868 (FormRowPlaceholder)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4618 */;
import SearchConstants from "SearchConstants" /* 7524 */;
import usePlaceholderStyles from "usePlaceholderStyles" /* 16837 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let style;

let closure_4;
let hasOwnProperty;
let size;
let size1;
let size2;
let View = react_native.View;
const SEARCH_ROW_TAP_STATE_PADDING = SearchConstants.SEARCH_ROW_TAP_STATE_PADDING;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { itemContainer: { flexDirection: "row", paddingHorizontal: 16, overflow: "hidden", height: 64, paddingVertical: SEARCH_ROW_TAP_STATE_PADDING, alignItems: "center" }, avatar: size, innerContainer: { justifyContent: "center", flex: 1 }, upperText: size1, lowerText: size2 };
size = { height: 48, width: 48, borderRadius: nativeDefault.radii.xl, marginRight: 16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
size1 = { width: "50%", borderRadius: nativeDefault.radii.md, height: 16, marginBottom: 8, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
size2 = { justifyContent: "center", width: "100%", borderRadius: nativeDefault.radii.md, height: 16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let items;
  let items1;
  const obj = react2;
  const cResult = obj.c(18);
  style = style.style;
  const tmp3 = closure_6();
  const obj2 = usePlaceholderStyles;
  const placeholderAnimatedStyle = obj2.usePlaceholderAnimatedStyle(true);
  if (cResult[0] === placeholderAnimatedStyle) {
    if (cResult[1] === style) {
      let tmp5;
      let tmp6;
      let tmp10;
      let tmp14;
      if (cResult[2] === tmp3.itemContainer) {
        tmp5 = cResult[3];
      }
      if (cResult[4] !== tmp3.avatar) {
        const obj3 = { style: tmp3.avatar };
        const tmp9 = React3(View, obj3);
        cResult[4] = tmp3.avatar;
        cResult[5] = tmp9;
        tmp6 = tmp9;
      } else {
        tmp6 = cResult[5];
      }
      if (cResult[6] !== tmp3.upperText) {
        const obj4 = { style: tmp3.upperText };
        const tmp13 = React3(View, obj4);
        cResult[6] = tmp3.upperText;
        cResult[7] = tmp13;
        tmp10 = tmp13;
      } else {
        tmp10 = cResult[7];
      }
      if (cResult[8] !== tmp3.lowerText) {
        const obj5 = { style: tmp3.lowerText };
        const tmp17 = React3(View, obj5);
        cResult[8] = tmp3.lowerText;
        cResult[9] = tmp17;
        tmp14 = tmp17;
      } else {
        tmp14 = cResult[9];
      }
      if (cResult[10] === tmp3.innerContainer) {
        if (cResult[11] === tmp10) {
          let tmp18;
          if (cResult[12] === tmp14) {
            tmp18 = cResult[13];
          }
          if (cResult[14] === tmp5) {
            if (cResult[15] === tmp6) {
              let tmp22;
              if (cResult[16] === tmp18) {
                tmp22 = cResult[17];
              }
              return tmp22;
            }
          }
          const obj6 = { style: tmp5, pointerEvents: "none", children: items };
          items = [tmp6, tmp18];
          const tmp25 = hasOwnProperty(ReanimatedRexportDefault.View, obj6);
          cResult[14] = tmp5;
          cResult[15] = tmp6;
          cResult[16] = tmp18;
          cResult[17] = tmp25;
          tmp22 = tmp25;
        }
      }
      const obj7 = { style: tmp3.innerContainer, children: items1 };
      items1 = [tmp10, tmp14];
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
}) : ((style) => {
  let items;
  let items1;
  let items2;
  style = style.style;
  const tmp = closure_6();
  const obj = usePlaceholderStyles;
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  const obj2 = { style: items, pointerEvents: "none", children: items1 };
  items = [placeholderAnimatedStyle, tmp.itemContainer, style];
  const obj3 = { style: tmp.avatar };
  View = ReanimatedRexportDefault.View;
  items1 = [React3(View, obj3), ];
  const obj4 = { style: tmp.innerContainer, children: items2 };
  items2 = [, ];
  const obj5 = { style: tmp.upperText };
  items2[0] = React3(View, obj5);
  const obj6 = { style: tmp.lowerText };
  items2[1] = React3(View, obj6);
  items1[1] = hasOwnProperty(View, obj4);
  return hasOwnProperty(View, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FormRowPlaceholder.tsx");

export default tmp5;