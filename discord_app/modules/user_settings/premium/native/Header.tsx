// === Module 13499: premium/Header ===

// Module 13499 (premium/Header)
import util from "util" /* 1114 */;
import useThemeDefault from "useTheme" /* 4509 */;
import Text_Text from "Text/Text" /* 4570 */;
import FastImageDefault from "FastImage" /* 5601 */;
import _modDef13424 from "module_13424" /* 13424 */;
import _modDef13500 from "module_13500" /* 13500 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4574);
let closure_6 = createStyles.createStyles({ container: { flexDirection: "column", alignItems: "center" }, headerText: { marginTop: 16, marginBottom: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/Header.tsx");

export default function Header(style) {
  const tmp = closure_6();
  let obj = { style: null, children: null };
  const items = [tmp.container, style.style];
  obj.style = items;
  obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", source: null };
  const tmp4 = useThemeDefault();
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.lpNrPu);
  const tmp8 = FastImageDefault;
  if (obj3.isThemeDark(tmp4)) {
    let tmp2Result = _modDef13424;
  } else {
    tmp2Result = _modDef13500;
  }
  obj.source = tmp2Result;
  const items1 = [React4(tmp8, obj), ];
  obj = { style: tmp.headerText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl2 = util.intl;
  obj.children = intl2.string(util.t.SD5MJW);
  items1[1] = React4(Text_Text.Text, obj);
  obj.children = items1;
  return hasOwnProperty(View, obj);
};