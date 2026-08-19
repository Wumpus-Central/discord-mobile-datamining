// === Module 6781: QuarantineModeInfoAlert ===

// Module 6781 (QuarantineModeInfoAlert)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4734 */;
import componentDidMountDefault from "componentDidMount" /* 4763 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import importDefaultResult from "createTextStyle" /* 6782 */;

require = fn;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const createCacheKey = {};
const merged = Object.assign(importDefaultResult(require("ME").Fonts.PRIMARY_BOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
createCacheKey.textAlign = "center";
createCacheKey.marginVertical = 12;
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginVertical: 8 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/quarantine/native/QuarantineModeInfoAlert.tsx");

export default function QuarantineModeInfoAlert(onClose) {
  const tmp = callback3();
  let obj = { style: tmp.header, children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.EouHwv);
  const items = [callback(Button.LegacyText, obj), ];
  obj = { style: tmp.text, variant: "text-md/medium", children: null };
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t.zNPBMA);
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(componentDidMountDefault, obj);
};