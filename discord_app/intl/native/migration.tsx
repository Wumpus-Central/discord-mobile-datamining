// discord_app/intl/native/migration.tsx
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4090 from "../../lib/native/Linking.tsx";
import tDefault from "../../../_runtime/04092_t.js";
import noop from "../../../_runtime/00019_noop.js";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../design/components/Styles/native/createStyles.tsx";

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