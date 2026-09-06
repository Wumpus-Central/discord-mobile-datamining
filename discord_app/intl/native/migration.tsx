// === Module 14184: migration ===

// Module 14184 (migration)
import nativeDefault from "native" /* 576 */;
import LinkingDefault from "Linking" /* 4255 */;
import _modDef4257 from "module_4257" /* 4257 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles((arg0) => {
  const link = { color: nativeDefault.colors.TEXT_LINK, textDecorationLine: null };
  let str = "none";
  if (arg0) {
    str = "underline";
  }
  link.textDecorationLine = str;
  return { link };
});
const size = fn(2);
const result = size.fileFinishedImporting("intl/native/migration.tsx");

export const IntlLink = function IntlLink(children) {
  const target = children.target;
  if (typeof target === "string") {
    let fn = () => {
      const obj = LinkingDefault;
      return obj.openURL(_modDef4257.sanitizeUrl(target));
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
  const tmp3 = closure_5(noop.useContext(target(4279).AccessibilityPreferencesContext).alwaysShowLinkDecorations);
  return jsx(tmp(1178).LegacyText, { accessible: true, accessibilityRole: "link", onPress: fn, style: closure_5(noop.useContext(target(4279).AccessibilityPreferencesContext).alwaysShowLinkDecorations).link, children: children.children });
};