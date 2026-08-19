// === Module 13548: IntlLink ===

// Module 13548 (IntlLink)
import ThemesDefault from "Themes" /* 712 */;
import _modDef4090 from "module_4090" /* 4090 */;
import tDefault from "t" /* 4092 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let closure_5 = createCacheKey.createStyles((arg0) => {
  const link = { color: ThemesDefault.colors.TEXT_LINK, textDecorationLine: null };
  let str = "none";
  if (arg0) {
    str = "underline";
  }
  link[1] = str;
  return { link };
});
const result = require("obj132").fileFinishedImporting("intl/native/migration.tsx");

export const IntlLink = function IntlLink(children) {
  const target = children.target;
  if (typeof target === "string") {
    let fn = () => {
      const obj = _modDef4090;
      return obj.openURL(tDefault.sanitizeUrl(target));
    };
  } else {
    fn = target;
    if (typeof target === "object") {
      fn = target;
      if (null != target.onClick) {
        fn = target.onClick;
      }
    }
  }
  const tmp = target;
  const tmp3 = callback(React.useContext(target(1356).AccessibilityPreferencesContext).alwaysShowLinkDecorations);
  return jsx(tmp(1297).LegacyText, { accessible: true, accessibilityRole: "link", onPress: fn, style: callback(React.useContext(target(1356).AccessibilityPreferencesContext).alwaysShowLinkDecorations).link, children: children.children });
};