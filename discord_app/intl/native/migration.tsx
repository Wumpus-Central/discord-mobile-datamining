// === Module 9075: migration ===

// Module 9075 (migration)
import nativeDefault from "native" /* 587 */;
import _modDef1936 from "module_1936" /* 1936 */;
import LinkingDefault from "Linking" /* 4571 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_5 = createStyles.createStyles((arg0) => {
  const link = { color: nativeDefault.colors.TEXT_LINK, textDecorationLine: null };
  let str = "none";
  if (arg0) {
    str = "underline";
  }
  link.textDecorationLine = str;
  return { link };
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("intl/native/migration.tsx");

export const IntlLink = ReactCompilerGating.isReactCompilerEnabled() ? ((target) => {
  const cResult = target(576).c(7);
  target = target.target;
  const children = target.children;
  const tmp4 = closure_5(noop.useContext(target(4602).AccessibilityPreferencesContext).alwaysShowLinkDecorations);
  if (typeof target === "string") {
    if (cResult[0] !== target) {
      const fn = function s() {
        const obj = LinkingDefault;
        return obj.openURL(_modDef1936.sanitizeUrl(target));
      };
      cResult[0] = target;
      cResult[1] = fn;
    }
  } else {
    let str = "link";
    let tmp5 = target;
    if (typeof target === "object") {
      str = "link";
      tmp5 = target;
      if (null != target.onClick) {
        ({ accessibilityRole, onClick } = target);
        if (accessibilityRole == null) {
          accessibilityRole = "link";
        }
        str = accessibilityRole;
        tmp5 = onClick;
      }
    }
    if (cResult[2] === str) {
      if (cResult[3] === children) {
        if (cResult[4] === tmp5) {
          if (cResult[5] === tmp4.link) {
            let tmp8 = cResult[6];
          }
          return tmp8;
        }
      }
    }
    const obj2 = { accessible: true, accessibilityRole: str, onPress: tmp5, style: tmp4.link, children };
    const tmp10 = jsx(tmp(1188).LegacyText, { accessible: true, accessibilityRole: str, onPress: tmp5, style: tmp4.link, children });
    cResult[2] = str;
    cResult[3] = children;
    cResult[4] = tmp5;
    cResult[5] = tmp4.link;
    cResult[6] = tmp10;
    tmp8 = tmp10;
  }
  let obj = target(576);
  tmp = target;
}) : ((children) => {
  const target = children.target;
  if (typeof target === "string") {
    let fn = function k() {
      const obj = LinkingDefault;
      return obj.openURL(_modDef1936.sanitizeUrl(target));
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
  const tmp3 = closure_5(noop.useContext(target(4602).AccessibilityPreferencesContext).alwaysShowLinkDecorations);
  return jsx(tmp(1188).LegacyText, { accessible: true, accessibilityRole: str, onPress: fn, style: closure_5(noop.useContext(target(4602).AccessibilityPreferencesContext).alwaysShowLinkDecorations).link, children: children.children });
});