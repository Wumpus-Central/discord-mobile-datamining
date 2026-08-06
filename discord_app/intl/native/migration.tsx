// discord_app/intl/native/migration.tsx
import noop from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../discord_common/js/packages/tokens/native.tsx";

const require = arg1;
let closure_5 = createCacheKey.createStyles((arg0) => {
  const link = { color: Themes.colors.TEXT_LINK, textDecorationLine: null };
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
  if (typeof target === "string") {
    let fn = () => {
      const obj = outer1_1(outer1_2[5]);
      return obj.openURL(outer1_1(outer1_2[6]).sanitizeUrl(target));
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
  const tmp3 = callback(React.useContext(target(4003).AccessibilityPreferencesContext).alwaysShowLinkDecorations);
  return jsx(tmp(1297).LegacyText, { accessible: true, accessibilityRole: "link", onPress: fn, style: callback(React.useContext(target(4003).AccessibilityPreferencesContext).alwaysShowLinkDecorations).link, children: children.children });
};