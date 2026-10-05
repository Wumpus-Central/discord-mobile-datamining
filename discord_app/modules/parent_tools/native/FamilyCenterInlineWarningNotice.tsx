// === Module 14682: FamilyCenterInlineWarningNotice ===

// Module 14682 (FamilyCenterInlineWarningNotice)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import WarningIcon2 from "WarningIcon" /* 4803 */;
import Text_Text from "Text/Text" /* 4886 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, text: obj3 };
obj2 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_WARNING, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, paddingRight: nativeDefault.space.PX_8 };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let style;
  let text;
  const obj = react2;
  const cResult = obj.c(10);
  ({ text, style } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === style) {
    let tmp5;
    let tmp7;
    if (cResult[1] === tmp4.container) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
      const WarningIcon = WarningIcon2.WarningIcon;
      const tmp10 = React3(WarningIcon, obj2);
      cResult[3] = tmp10;
      tmp7 = tmp10;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] === tmp4.text) {
      let tmp11;
      if (cResult[5] === text) {
        tmp11 = cResult[6];
      }
      if (cResult[7] === tmp5) {
        let tmp14;
        if (cResult[8] === tmp11) {
          tmp14 = cResult[9];
        }
        return tmp14;
      }
      const obj3 = { style: tmp5, children: items };
      items = [tmp7, tmp11];
      const tmp17 = hasOwnProperty(View, obj3);
      cResult[7] = tmp5;
      cResult[8] = tmp11;
      cResult[9] = tmp17;
      tmp14 = tmp17;
    }
    const obj4 = { variant: "text-sm/medium", color: "text-strong", style: tmp4.text, children: text };
    const tmp13 = React3(Text_Text.Text, obj4);
    cResult[4] = tmp4.text;
    cResult[5] = text;
    cResult[6] = tmp13;
    tmp11 = tmp13;
  }
  const items1 = [tmp4.container, style];
  cResult[0] = style;
  cResult[1] = tmp4.container;
  cResult[2] = items1;
  tmp5 = items1;
}) : ((arg0) => {
  let items;
  let items1;
  let style;
  let text;
  ({ text, style } = arg0);
  const tmp = closure_6();
  const obj = { style: items, children: items1 };
  items = [tmp.container, style];
  const obj2 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
  const WarningIcon = WarningIcon2.WarningIcon;
  items1 = [React3(WarningIcon, obj2), ];
  const obj3 = { variant: "text-sm/medium", color: "text-strong", style: tmp.text, children: text };
  items1[1] = React3(Text_Text.Text, obj3);
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterInlineWarningNotice.tsx");

export default tmp5;