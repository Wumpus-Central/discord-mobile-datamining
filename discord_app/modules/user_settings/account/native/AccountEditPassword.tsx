// discord_app/modules/user_settings/account/native/AccountEditPassword.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import UserSettingsAccountEditPasswordDefault from "UserSettingsAccountEditPassword.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let StyleSheet;
let c3;
let obj2;
({ View: c3, StyleSheet } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2 };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_5 = createStyles(obj);
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        let tmp8;
        const obj = react2;
        const cResult = obj.c(3);
        const tmp3 = closure_5();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp7 = jsx(UserSettingsAccountEditPasswordDefault, {});
          cResult[0] = tmp7;
          first = tmp7;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== tmp3.container) {
          const tmp11 = <_false style={tmp3.container}>{first}</_false>;
          cResult[1] = tmp3.container;
          cResult[2] = tmp11;
          tmp8 = tmp11;
        } else {
          tmp8 = cResult[2];
        }
        return tmp8;
      }
    : () => <_false style={closure_5().container}>{jsx(UserSettingsAccountEditPasswordDefault, {})}</_false>,
);
const result = size.fileFinishedImporting("modules/user_settings/account/native/AccountEditPassword.tsx");

export default memoResult;
