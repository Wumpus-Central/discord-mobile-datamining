// === Module 7927: GifTag ===

// Module 7927 (GifTag)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import createStyles_mod from "createStyles" /* 4890 */;
import module_683 from "module_683" /* 683 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let style;

let alphaResult;
let obj2;
let obj3;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { gifTag: obj2, gifTagText: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2, borderRadius: nativeDefault.radii.xs, backgroundColor: alphaResult.css() };
createStyles = createStyles.createStyles;
const importDefaultResultResult = module_683(nativeDefault.unsafe_rawColors.WHITE);
alphaResult = importDefaultResultResult.alpha(0.9);
obj3 = { color: nativeDefault.unsafe_rawColors.PRIMARY_800 };
let closure_4 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const obj = react;
  const cResult = obj.c(9);
  style = style.style;
  const tmp4 = closure_4();
  if (cResult[0] === style) {
    let tmp5;
    let tmp7;
    let tmp9;
    if (cResult[1] === tmp4.gifTag) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    const gifTagText = tmp4.gifTagText;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl2.intl;
      const stringResult = intl.string(intl2.t.I5gL2H);
      cResult[3] = stringResult;
      tmp7 = stringResult;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp4.gifTagText) {
      const tmp11 = jsx(Text_Text.Text, { variant: "text-sm/bold", color: "none", style: gifTagText, children: tmp7 });
      cResult[4] = tmp4.gifTagText;
      cResult[5] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === tmp5) {
      let tmp12;
      if (cResult[7] === tmp9) {
        tmp12 = cResult[8];
      }
      return tmp12;
    }
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
  let intl;
  style = style.style;
  const tmp = closure_4();
  const items = [tmp.gifTag, style];
  ({ variant: "text-sm/bold", color: "none", style: tmp.gifTagText, children: intl.string(intl2.t.I5gL2H) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <View style={items} pointerEvents="none">{null}</View>;
});
const result = size.fileFinishedImporting("modules/user_profile/native/GifTag.tsx");

export default tmp4;