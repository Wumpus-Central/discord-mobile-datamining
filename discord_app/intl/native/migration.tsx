// discord_app/intl/native/migration.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import _modDef1936 from "../../../_runtime/metro/01936__.js";
import LinkingDefault from "../../lib/native/Linking.tsx";
import react from "../../../_runtime/00019_react.js";
import createStyles from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let target;

const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((arg0) => {
  let str;
  const link = { color: nativeDefault.colors.TEXT_LINK, textDecorationLine: str };
  str = "none";
  const tmp = arg0;
  if (tmp) {
    str = "underline";
  }
  return { link };
});
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (target) => {
      let accessibilityRole;
      let onClick;
      let str;
      let tmp5;
      const tmp = target;
      let obj = target(576);
      const cResult = obj.c(7);
      target = target.target;
      const children = target.children;
      const tmp4 = closure_5(react.useContext(target(4596).AccessibilityPreferencesContext).alwaysShowLinkDecorations);
      if (typeof target === "string") {
        let tmp6;
        if (cResult[0] !== target) {
          const fn = function s() {
            const openURL = LinkingDefault.openURL;
            LinkingDefault;
            const obj = _modDef1936;
            return openURL(obj.sanitizeUrl(target));
          };
          cResult[0] = target;
          cResult[1] = fn;
          tmp6 = fn;
        } else {
          tmp6 = cResult[1];
        }
        str = "link";
        tmp5 = tmp6;
      } else {
        str = "link";
        tmp5 = target;
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
      }
      if (cResult[2] === str) {
        if (cResult[3] === children) {
          if (cResult[4] === tmp5) {
            let tmp7;
            if (cResult[5] === tmp4.link) {
              tmp7 = cResult[6];
            }
            return tmp7;
          }
        }
      }
      const tmp8 = jsx(tmp(1188).LegacyText, {
        accessible: true,
        accessibilityRole: str,
        onPress: tmp5,
        style: tmp4.link,
        children,
      });
      cResult[2] = str;
      cResult[3] = children;
      cResult[4] = tmp5;
      cResult[5] = tmp4.link;
      cResult[6] = tmp8;
      tmp7 = tmp8;
    }
  : (target) => {
      let accessibilityRole;
      let fn;
      let onClick;
      let str;
      target = target.target;
      const children = target.children;
      const tmp = target;
      const tmp3 = closure_5(react.useContext(target(4596).AccessibilityPreferencesContext).alwaysShowLinkDecorations);
      if (typeof target === "string") {
        fn = function k() {
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj = _modDef1936;
          return openURL(obj.sanitizeUrl(target));
        };
        str = "link";
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
      return jsx(tmp(1188).LegacyText, {
        accessible: true,
        accessibilityRole: str,
        onPress: fn,
        style: tmp3.link,
        children,
      });
    };
const result = size.fileFinishedImporting("intl/native/migration.tsx");

export const IntlLink = tmp2;
