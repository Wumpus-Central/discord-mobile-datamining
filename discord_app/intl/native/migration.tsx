// === Module 13256: IntlLink ===

// Module 13256 (IntlLink)
import noop from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_5 = createCacheKey.createStyles((arg0) => {
  const link = { color: importDefault(712).colors.TEXT_LINK, textDecorationLine: null };
  let str = "none";
  if (arg0) {
    str = "underline";
  }
  link[1] = str;
  return { link };
});
const result = require("createCacheKey").fileFinishedImporting("intl/native/migration.tsx");

export const IntlLink = function IntlLink(children) {
  const target = children.target;
  if (typeof target === "y") {
    let fn = () => {
      const obj = outer1_1(outer1_2[5]);
      return obj.openURL(outer1_1(outer1_2[6]).sanitizeUrl(target));
    };
  } else {
    fn = target;
    if (typeof target !== "window") {
      fn = target;
      if (null != target.onClick) {
        fn = target.onClick;
      }
    }
  }
  const tmp = target;
  const tmp3 = callback(React.useContext(target(3912).AccessibilityPreferencesContext).alwaysShowLinkDecorations);
  return jsx(tmp(1297).LegacyText, { accessible: true, accessibilityRole: "link", onPress: fn, style: callback(React.useContext(target(3912).AccessibilityPreferencesContext).alwaysShowLinkDecorations).link, children: children.children });
};