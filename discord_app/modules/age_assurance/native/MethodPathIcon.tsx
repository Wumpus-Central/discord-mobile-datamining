// === Module 8168: MethodPathIcon ===

// Module 8168 (MethodPathIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import inlineStyles from "inlineStyles" /* 8169 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;
let _require, icon;

let size;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { container: size };
size = { width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, height: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.lg };
let closure_5 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((icon) => {
  let tmp8;
  let token;
  const obj = token(576);
  const cResult = obj.c(10);
  icon = icon.icon;
  const tmp3 = closure_5();
  const obj2 = token(4586);
  token = obj2.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT);
  if (cResult[0] === icon.paths) {
    let tmp7;
    let tmp10;
    if (cResult[1] === token) {
      tmp7 = cResult[2];
    }
    if (cResult[5] !== tmp7) {
      const tmp12 = jsx(inlineStylesDefault, { width: 24, height: 24, viewBox: "0 0 24 24", children: tmp7 });
      cResult[5] = tmp7;
      cResult[6] = tmp12;
      tmp10 = tmp12;
    } else {
      tmp10 = cResult[6];
    }
    if (cResult[7] === tmp3.container) {
      let tmp13;
      if (cResult[8] === tmp10) {
        tmp13 = cResult[9];
      }
      return tmp13;
    }
    const tmp16 = <View style={tmp6}>{tmp10}</View>;
    cResult[7] = tmp3.container;
    cResult[8] = tmp10;
    cResult[9] = tmp16;
    tmp13 = tmp16;
  }
  if (cResult[3] !== token) {
    const fn = function c(d) {
      return jsx(inlineStyles.Path, { d: d.d, fill: token, fillRule: d.fillRule }, d.d);
    };
    cResult[3] = token;
    cResult[4] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[4];
  }
  const paths = icon.paths;
  const mapped = paths.map(tmp8);
  cResult[0] = icon.paths;
  cResult[1] = token;
  cResult[2] = mapped;
  tmp7 = mapped;
}) : ((icon) => {
  let fill;
  let paths;
  _require = undefined;
  icon = icon.icon;
  const tmp = closure_5();
  const obj = require("useToken");
  _require = obj.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT);
  size = { width: 24, height: 24, viewBox: "0 0 24 24", children: paths.map((d) => jsx(inlineStyles.Path, { d: d.d, fill, fillRule: d.fillRule }, d.d)) };
  paths = icon.paths;
  inlineStylesDefault;
  return <View style={tmp.container}>{null}</View>;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/age_assurance/native/MethodPathIcon.tsx");

export default tmp3;