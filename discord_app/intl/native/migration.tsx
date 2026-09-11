// === Module 14237: migration ===

// Module 14237 (migration)
import nativeDefault from "native" /* 576 */;
import LinkingDefault from "Linking" /* 4301 */;
import _modDef4303 from "module_4303" /* 4303 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4606);
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
    let fn = function k() {
      const obj = LinkingDefault;
      return obj.openURL(_modDef4303.sanitizeUrl(target));
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
  const tmp3 = closure_5(noop.useContext(target(4327).AccessibilityPreferencesContext).alwaysShowLinkDecorations);
  return jsx(tmp(1178).LegacyText, { accessible: true, accessibilityRole: str, onPress: fn, style: closure_5(noop.useContext(target(4327).AccessibilityPreferencesContext).alwaysShowLinkDecorations).link, children: children.children });
};