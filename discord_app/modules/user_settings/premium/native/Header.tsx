// === Module 15496: premium/Header ===

// Module 15496 (premium/Header)
import util from "util" /* 1113 */;
import useThemeDefault from "useTheme" /* 5376 */;
import Text_Text from "Text/Text" /* 5747 */;
import FastImageDefault from "FastImage" /* 5837 */;
import _modDef15497 from "module_15497" /* 15497 */;
import _modDef15498 from "module_15498" /* 15498 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5141);
let closure_6 = createStyles.createStyles({ container: { flexDirection: "column", alignItems: "center" }, headerText: { marginTop: 16, marginBottom: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/Header.tsx");

export default function Header(style) {
  const tmp = closure_6();
  const obj = { style: null, children: null };
  items = [tmp.container, style.style];
  obj.style = items;
  const obj2 = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", source: null };
  const tmp4 = useThemeDefault();
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t.lpNrPu);
  const tmp8 = FastImageDefault;
  if (obj3.isThemeDark(tmp4)) {
    let tmp2Result = _modDef15497;
  } else {
    tmp2Result = _modDef15498;
  }
  obj2.source = tmp2Result;
  const items1 = [React4(tmp8, obj2), ];
  const obj4 = { style: tmp.headerText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.SD5MJW);
  items1[1] = React4(Text_Text.Text, obj4);
  obj.children = items1;
  return hasOwnProperty(View, obj);
};