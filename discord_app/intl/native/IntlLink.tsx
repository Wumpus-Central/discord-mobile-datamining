// === Module 9963: IntlLink ===

// Module 9963 (IntlLink)
import nativeDefault from "native" /* 575 */;
import _modDef2068 from "module_2068" /* 2068 */;
import LinkingDefault from "Linking" /* 5691 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5012);
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
const result = size.fileFinishedImporting("intl/native/IntlLink.tsx");

export function IntlLink(children) {
  const target = children.target;
  if (typeof target === "string") {
    let fn = function y() {
      const obj = LinkingDefault;
      return obj.openURL(_modDef2068.sanitizeUrl(target));
    };
    let str = "link";
  } else {
    str = "link";
    fn = target;
    if (typeof target === "object") {
      str = "link";
      fn = target;
      if (null != target.onClick) {
        ({ accessibilityRole, onClick } = target);
        if (accessibilityRole == null) {
          accessibilityRole = "link";
        }
        str = accessibilityRole;
        fn = onClick;
      }
    }
  }
  const tmp = target;
  const tmp3 = closure_5(noop.useContext(target(5026).AccessibilityPreferencesContext).alwaysShowLinkDecorations);
  return jsx(tmp(1186).LegacyText, { accessible: true, accessibilityRole: str, onPress: fn, style: closure_5(noop.useContext(target(5026).AccessibilityPreferencesContext).alwaysShowLinkDecorations).link, children: children.children });
}