// === Module 16458: UserProfileWidgetsEmptyState ===

// Module 16458 (UserProfileWidgetsEmptyState)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import Text_Text from "Text/Text" /* 5271 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5005);
let obj2 = { container: { paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24, alignItems: "center" }, textContainer: null, centeredText: null };
let obj3 = { paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24, alignItems: "center" };
obj2.textContainer = { alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
obj2.centeredText = { textAlign: "center" };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsEmptyState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileWidgetsEmptyState() {
  const cResult = c.c(14);
  const tmp4 = closure_5();
  ({ container, textContainer, centeredText } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["oqalC+"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.centeredText) {
    const obj2 = { variant: "heading-md/semibold", color: "text-strong", style: centeredText, children: first };
    const tmp9 = React3(Text_Text.Heading, obj2);
    cResult[1] = tmp4.centeredText;
    cResult[2] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.O9SQ1c);
    cResult[3] = stringResult1;
    let tmp10 = stringResult1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== tmp4.centeredText) {
    const obj3 = { variant: "text-sm/normal", color: "text-default", style: tmp4.centeredText, children: tmp10 };
    const tmp14 = React3(Text_Text.Text, obj3);
    cResult[4] = tmp4.centeredText;
    cResult[5] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === tmp4.textContainer) {
    if (cResult[7] === tmp7) {
      if (cResult[8] === tmp12) {
        let tmp15 = cResult[9];
      }
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { variant: "secondary", text: null, onPress: null };
        const intl3 = util.intl;
        obj4.text = intl3.string(util.t["/NKLK5"]);
        obj4.onPress = function onPress() {

        };
        const tmp19 = React3(components_Button_Button.Button, obj4);
        cResult[10] = tmp19;
        let tmp17 = tmp19;
      } else {
        tmp17 = cResult[10];
      }
      if (cResult[11] === tmp4.container) {
        if (cResult[12] === tmp15) {
          let tmp20 = cResult[13];
        }
        return tmp20;
      }
      const obj5 = { style: container, children: null };
      const items = [tmp15, tmp17];
      obj5.children = items;
      const tmp23 = React4(View, obj5);
      cResult[11] = tmp4.container;
      cResult[12] = tmp15;
      cResult[13] = tmp23;
      tmp20 = tmp23;
    }
  }
  const obj6 = { style: textContainer, children: null };
  const items1 = [tmp7, tmp12];
  obj6.children = items1;
  const tmp16 = React4(View, obj6);
  cResult[6] = tmp4.textContainer;
  cResult[7] = tmp7;
  cResult[8] = tmp12;
  cResult[9] = tmp16;
  tmp15 = tmp16;
}) : (function UserProfileWidgetsEmptyState() {
  const tmp = closure_5();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.textContainer, children: null };
  const obj3 = { variant: "heading-md/semibold", color: "text-strong", style: tmp.centeredText, children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["oqalC+"]);
  const items = [React3(Text_Text.Heading, obj3), ];
  const obj4 = { variant: "text-sm/normal", color: "text-default", style: tmp.centeredText, children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.O9SQ1c);
  items[1] = React3(Text_Text.Text, obj4);
  obj2.children = items;
  const items1 = [React4(View, obj2), ];
  const obj5 = { variant: "secondary", text: null, onPress: null };
  const intl3 = util.intl;
  obj5.text = intl3.string(util.t["/NKLK5"]);
  obj5.onPress = function onPress() {

  };
  items1[1] = React3(components_Button_Button.Button, obj5);
  obj.children = items1;
  return React4(View, obj);
});