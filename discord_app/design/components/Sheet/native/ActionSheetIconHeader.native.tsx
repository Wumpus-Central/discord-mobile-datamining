// === Module 10446: ActionSheetIconHeader ===

// Module 10446 (ActionSheetIconHeader)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5086 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5090);
let closure_5 = createStyles.createStyles({ container: { paddingVertical: 0, flexDirection: "row", alignItems: "center", gap: 12 }, titles: { justifyContent: "center", flex: 1 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetIconHeader.native.tsx");

export const ActionSheetIconHeader = ReactCompilerGating.isReactCompilerEnabled() ? (function ActionSheetIconHeader(arg0) {
  const cResult = c.c(14);
  ({ title, subtitle, icon } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] !== icon) {
    const obj2 = { children: icon };
    const tmp8 = React3(View, obj2);
    cResult[0] = icon;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== title) {
    const obj3 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", lineClamp: 2, children: title };
    const tmp11 = React3(Text_Text.Text, obj3);
    cResult[2] = title;
    cResult[3] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== subtitle) {
    let tmp13 = null;
    if (null != subtitle) {
      const obj4 = { variant: "text-xs/medium", color: "text-default", children: subtitle };
      tmp13 = React3(Text_Text.Text, obj4);
    }
    cResult[4] = subtitle;
    cResult[5] = tmp13;
    let tmp12 = tmp13;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === tmp4.titles) {
    if (cResult[7] === tmp9) {
      if (cResult[8] === tmp12) {
        let tmp15 = cResult[9];
      }
      if (cResult[10] === tmp4.container) {
        if (cResult[11] === tmp5) {
          if (cResult[12] === tmp15) {
            let tmp17 = cResult[13];
          }
          return tmp17;
        }
      }
      const obj5 = { style: tmp4.container, children: null };
      const items = [tmp5, tmp15];
      obj5.children = items;
      const tmp20 = React4(View, obj5);
      cResult[10] = tmp4.container;
      cResult[11] = tmp5;
      cResult[12] = tmp15;
      cResult[13] = tmp20;
      tmp17 = tmp20;
    }
  }
  const obj6 = { style: tmp4.titles, children: null };
  const items1 = [tmp9, tmp12];
  obj6.children = items1;
  const tmp16 = React4(View, obj6);
  cResult[6] = tmp4.titles;
  cResult[7] = tmp9;
  cResult[8] = tmp12;
  cResult[9] = tmp16;
  tmp15 = tmp16;
}) : (function ActionSheetIconHeader(subtitle) {
  subtitle = subtitle.subtitle;
  ({ title, icon } = subtitle);
  const tmp = closure_5();
  const obj = { style: tmp.container, children: null };
  const items = [React3(View, { children: icon }), ];
  const obj2 = { style: tmp.titles, children: null };
  const items1 = [React3(Text_Text.Text, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", lineClamp: 2, children: title }), ];
  let tmp4Result = null;
  if (null != subtitle) {
    const obj3 = { variant: "text-xs/medium", color: "text-default", children: subtitle };
    tmp4Result = React3(Text_Text.Text, obj3);
  }
  items1[1] = tmp4Result;
  obj2.children = items1;
  items[1] = React4(View, obj2);
  obj.children = items;
  return React4(View, obj);
});