// === Module 13292: premium/Header ===

// Module 13292 (premium/Header)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import shared from "shared" /* 4735 */;
import useThemeDefault from "useTheme" /* 4797 */;
import Text_Text from "Text/Text" /* 4892 */;
import FastImageDefault from "FastImage" /* 5981 */;
import _modDef13293 from "module_13293" /* 13293 */;
import _modDef13294 from "module_13294" /* 13294 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let closure_6 = createStyles.createStyles({ container: { flexDirection: "column", alignItems: "center" }, headerText: { marginTop: 16, marginBottom: 24 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/Header.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const cResult = c.c(13);
  style = style.style;
  const tmp4 = closure_6();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.container) {
      let tmp7 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.lpNrPu);
      cResult[3] = stringResult;
      let tmp9 = stringResult;
    } else {
      tmp9 = cResult[3];
    }
    if (tmpResult.isThemeDark(tmp6)) {
      let tmp5Result = _modDef13293;
    } else {
      tmp5Result = _modDef13294;
    }
    if (cResult[4] !== tmp5Result) {
      const obj2 = { accessible: true, accessibilityLabel: tmp9, accessibilityRole: "header", source: tmp5Result };
      const tmp14 = React4(FastImageDefault, obj2);
      cResult[4] = tmp5Result;
      cResult[5] = tmp14;
      let tmp12 = tmp14;
    } else {
      tmp12 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      const stringResult1 = intl2.string(util.t.SD5MJW);
      cResult[6] = stringResult1;
      let tmp15 = stringResult1;
    } else {
      tmp15 = cResult[6];
    }
    if (cResult[7] !== tmp4.headerText) {
      const obj3 = { style: tmp4.headerText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: tmp15 };
      const tmp19 = React4(Text_Text.Text, obj3);
      cResult[7] = tmp4.headerText;
      cResult[8] = tmp19;
      let tmp17 = tmp19;
    } else {
      tmp17 = cResult[8];
    }
    if (cResult[9] === tmp7) {
      if (cResult[10] === tmp12) {
        if (cResult[11] === tmp17) {
          let tmp20 = cResult[12];
        }
        return tmp20;
      }
    }
    const obj4 = { style: tmp7, children: null };
    const items = [tmp12, tmp17];
    obj4.children = items;
    const tmp23 = hasOwnProperty(View, obj4);
    cResult[9] = tmp7;
    cResult[10] = tmp12;
    cResult[11] = tmp17;
    cResult[12] = tmp23;
    tmp20 = tmp23;
    tmpResult = shared;
  }
  const items1 = [tmp4.container, style];
  cResult[0] = style;
  cResult[1] = tmp4.container;
  cResult[2] = items1;
  tmp7 = items1;
}) : ((style) => {
  const tmp = closure_6();
  const obj = { style: null, children: null };
  const items = [tmp.container, style.style];
  obj.style = items;
  const obj2 = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", source: null };
  const tmp4 = useThemeDefault();
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t.lpNrPu);
  const tmp8 = FastImageDefault;
  if (obj3.isThemeDark(tmp4)) {
    let tmp2Result = _modDef13293;
  } else {
    tmp2Result = _modDef13294;
  }
  obj2.source = tmp2Result;
  const items1 = [React4(tmp8, obj2), ];
  const obj4 = { style: tmp.headerText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.SD5MJW);
  items1[1] = React4(Text_Text.Text, obj4);
  obj.children = items1;
  return hasOwnProperty(View, obj);
});