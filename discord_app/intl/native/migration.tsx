// === Module 14212: migration ===

// Module 14212 (migration)
import nativeDefault from "native" /* 576 */;
import LinkingDefault from "Linking" /* 4268 */;
import _modDef4270 from "module_4270" /* 4270 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4574);
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
      return obj.openURL(_modDef4270.sanitizeUrl(target));
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
  const tmp3 = closure_5(noop.useContext(target(4294).AccessibilityPreferencesContext).alwaysShowLinkDecorations);
  return jsx(tmp(1178).LegacyText, { accessible: true, accessibilityRole: "link", onPress: fn, style: closure_5(noop.useContext(target(4294).AccessibilityPreferencesContext).alwaysShowLinkDecorations).link, children: children.children });
};