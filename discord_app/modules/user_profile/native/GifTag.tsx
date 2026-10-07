// === Module 7938: GifTag ===

// Module 7938 (GifTag)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import createStyles from "createStyles" /* 4896 */;
import n from "module_683" /* 683 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = { gifTag: null, gifTagText: null };
let obj2 = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2, borderRadius: nativeDefault.radii.xs, backgroundColor: null };
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.WHITE);
obj2.backgroundColor = n(nativeDefault.unsafe_rawColors.WHITE).alpha(0.9).css();
obj.gifTag = obj2;
const alphaResult = n(nativeDefault.unsafe_rawColors.WHITE).alpha(0.9);
obj.gifTagText = { color: nativeDefault.unsafe_rawColors.PRIMARY_800 };
let closure_4 = createStyles.createStyles(obj);
let obj3 = { color: nativeDefault.unsafe_rawColors.PRIMARY_800 };
const result = size.fileFinishedImporting("modules/user_profile/native/GifTag.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const cResult = c.c(9);
  style = style.style;
  const tmp4 = closure_4();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.gifTag) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.I5gL2H);
      cResult[3] = stringResult;
      let tmp7 = stringResult;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp4.gifTagText) {
      const obj2 = { variant: "text-sm/bold", color: "none", style: tmp4.gifTagText, children: tmp7 };
      const tmp11 = jsx(Text_Text.Text, { variant: "text-sm/bold", color: "none", style: tmp4.gifTagText, children: tmp7 });
      cResult[4] = tmp4.gifTagText;
      cResult[5] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === tmp5) {
      if (cResult[7] === tmp9) {
        let tmp12 = cResult[8];
      }
      return tmp12;
    }
    const obj3 = { style: tmp5, pointerEvents: "none", children: tmp9 };
    const tmp15 = <View style={tmp5} pointerEvents="none">{tmp9}</View>;
    cResult[6] = tmp5;
    cResult[7] = tmp9;
    cResult[8] = tmp15;
    tmp12 = tmp15;
  }
  const items = [tmp4.gifTag, style];
  cResult[0] = style;
  cResult[1] = tmp4.gifTag;
  cResult[2] = items;
  tmp5 = items;
}) : ((style) => {
  const tmp = closure_4();
  const obj = { style: null, pointerEvents: "none", children: null };
  const items = [tmp.gifTag, style.style];
  obj.style = items;
  const obj2 = { variant: "text-sm/bold", color: "none", style: tmp.gifTagText, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.I5gL2H);
  obj.children = jsx(Text_Text.Text, { variant: "text-sm/bold", color: "none", style: tmp.gifTagText, children: null });
  return <View style={null} pointerEvents="none">{null}</View>;
});