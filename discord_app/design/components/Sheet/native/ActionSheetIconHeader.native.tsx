// === Module 10737: ActionSheetIconHeader ===

// Module 10737 (ActionSheetIconHeader)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4886 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ container: { paddingVertical: 0, flexDirection: "row", alignItems: "center", gap: 12 }, titles: { justifyContent: "center", flex: 1 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let icon;
  let items;
  let items1;
  let subtitle;
  let title;
  let tmp12;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(14);
  ({ title, subtitle, icon } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] !== icon) {
    const obj2 = { children: icon };
    const tmp8 = _false(View, obj2);
    cResult[0] = icon;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== title) {
    const obj3 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", lineClamp: 2, children: title };
    const tmp11 = _false(Text_Text.Text, obj3);
    cResult[2] = title;
    cResult[3] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== subtitle) {
    let tmp13 = null;
    if (null != subtitle) {
      const obj4 = { variant: "text-xs/medium", color: "text-default", children: subtitle };
      tmp13 = _false(Text_Text.Text, obj4);
    }
    cResult[4] = subtitle;
    cResult[5] = tmp13;
    tmp12 = tmp13;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === tmp4.titles) {
    if (cResult[7] === tmp9) {
      let tmp15;
      if (cResult[8] === tmp12) {
        tmp15 = cResult[9];
      }
      if (cResult[10] === tmp4.container) {
        if (cResult[11] === tmp5) {
          let tmp17;
          if (cResult[12] === tmp15) {
            tmp17 = cResult[13];
          }
          return tmp17;
        }
      }
      const obj5 = { style: tmp4.container, children: items };
      items = [tmp5, tmp15];
      const tmp20 = React3(View, obj5);
      cResult[10] = tmp4.container;
      cResult[11] = tmp5;
      cResult[12] = tmp15;
      cResult[13] = tmp20;
      tmp17 = tmp20;
    }
  }
  const obj6 = { style: tmp4.titles, children: items1 };
  items1 = [tmp9, tmp12];
  const tmp16 = React3(View, obj6);
  cResult[6] = tmp4.titles;
  cResult[7] = tmp9;
  cResult[8] = tmp12;
  cResult[9] = tmp16;
  tmp15 = tmp16;
}) : ((subtitle) => {
  let icon;
  let items;
  let items1;
  let title;
  subtitle = subtitle.subtitle;
  ({ title, icon } = subtitle);
  const tmp = closure_5();
  const obj = { style: tmp.container, children: items };
  items = [_false(View, { children: icon }), ];
  const obj2 = { style: tmp.titles, children: items1 };
  items1 = [_false(Text_Text.Text, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", lineClamp: 2, children: title }), ];
  let tmp4Result = null;
  if (null != subtitle) {
    const obj3 = { variant: "text-xs/medium", color: "text-default", children: subtitle };
    tmp4Result = _false(Text_Text.Text, obj3);
  }
  items1[1] = tmp4Result;
  items[1] = React3(View, obj2);
  return React3(View, obj);
});
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetIconHeader.native.tsx");

export const ActionSheetIconHeader = tmp4;