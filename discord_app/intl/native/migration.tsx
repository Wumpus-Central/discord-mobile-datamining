// discord_app/intl/native/migration.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import LinkingDefault from "../../lib/native/Linking.tsx";
import _modDef4333 from "../../../_runtime/metro/04333__.js";
import noop from "../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
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
      return obj.openURL(_modDef4333.sanitizeUrl(target));
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
  const tmp3 = closure_5(noop.useContext(target(4357).AccessibilityPreferencesContext).alwaysShowLinkDecorations);
  return jsx(tmp(1178).LegacyText, {
    accessible: true,
    accessibilityRole: str,
    onPress: fn,
    style: closure_5(noop.useContext(target(4357).AccessibilityPreferencesContext).alwaysShowLinkDecorations).link,
    children: children.children,
  });
};
