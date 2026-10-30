// discord_app/intl/native/IntlLink.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import _modDef1944 from "../../../_runtime/metro/01944__.js";
import LinkingDefault from "../../lib/native/Linking.tsx";
import noop from "../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
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
      return obj.openURL(_modDef1944.sanitizeUrl(target));
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
  const tmp3 = closure_5(noop.useContext(target(5023).AccessibilityPreferencesContext).alwaysShowLinkDecorations);
  return jsx(tmp(1188).LegacyText, {
    accessible: true,
    accessibilityRole: str,
    onPress: fn,
    style: closure_5(noop.useContext(target(5023).AccessibilityPreferencesContext).alwaysShowLinkDecorations).link,
    children: children.children,
  });
}
