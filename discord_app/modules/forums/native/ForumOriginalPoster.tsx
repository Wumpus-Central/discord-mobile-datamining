// === Module 11484: ForumOriginalPoster ===

// Module 11484 (ForumOriginalPoster)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import LegacyTokens from "LegacyTokens" /* 5620 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, opIcon: obj2, opIconBackground: obj3 };
obj2 = { borderRadius: nativeDefault.radii.sm, marginEnd: 8, paddingHorizontal: 4 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: LegacyTokens.DARK_BRAND_260_LIGHT_BRAND_200 };
let closure_5 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let intl;
  let intl2;
  let items;
  const obj = react2;
  const cResult = obj.c(10);
  const tmp4 = closure_5();
  if (cResult[0] === tmp4.opIcon) {
    let tmp5;
    let tmp7;
    let tmp10;
    let tmp14;
    if (cResult[1] === tmp4.opIconBackground) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant: "text-xs/semibold", color: "text-brand", children: intl.string(intl3.t.fyE8sH) };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      const tmp9 = _false(Text, obj2);
      cResult[3] = tmp9;
      tmp7 = tmp9;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp5) {
      const obj3 = { style: tmp5, children: tmp7 };
      const tmp13 = _false(View, obj3);
      cResult[4] = tmp5;
      cResult[5] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.string(intl3.t.uN6Emt) };
      const Text2 = Text_Text.Text;
      intl2 = intl3.intl;
      const tmp16 = _false(Text2, obj4);
      cResult[6] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[6];
    }
    if (cResult[7] === tmp4.container) {
      let tmp17;
      if (cResult[8] === tmp10) {
        tmp17 = cResult[9];
      }
      return tmp17;
    }
    const obj5 = { style: tmp4.container, children: items };
    items = [tmp10, tmp14];
    const tmp20 = React3(View, obj5);
    cResult[7] = tmp4.container;
    cResult[8] = tmp10;
    cResult[9] = tmp20;
    tmp17 = tmp20;
  }
  const items1 = [, ];
  ({ opIcon: arr[0], opIconBackground: arr[1] } = tmp4);
  cResult[0] = tmp4.opIcon;
  cResult[1] = tmp4.opIconBackground;
  cResult[2] = items1;
  tmp5 = items1;
}) : (() => {
  let Text;
  let intl;
  let intl2;
  let items;
  let items1;
  let obj3;
  const tmp = closure_5();
  const obj = { style: tmp.container, children: items1 };
  const obj2 = { style: items, children: _false(Text, obj3) };
  items = [, ];
  ({ opIcon: arr[0], opIconBackground: arr[1] } = tmp);
  obj3 = { variant: "text-xs/semibold", color: "text-brand", children: intl.string(intl3.t.fyE8sH) };
  Text = Text_Text.Text;
  intl = intl3.intl;
  items1 = [_false(View, obj2), ];
  const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.string(intl3.t.uN6Emt) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items1[1] = _false(Text2, obj4);
  return React3(View, obj);
});
let closure_6 = tmp5;
const result = size.fileFinishedImporting("modules/forums/native/ForumOriginalPoster.tsx");

export default tmp5;
export const getForumOriginalPoster = function getForumOriginalPoster() {
  return _false(closure_6, {});
};