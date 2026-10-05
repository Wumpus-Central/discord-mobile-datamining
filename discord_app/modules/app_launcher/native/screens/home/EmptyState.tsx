// discord_app/modules/app_launcher/native/screens/home/EmptyState.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import AppLauncherTypes from "../../../AppLauncherTypes.tsx";
import AppLauncherNativeUtils from "../../AppLauncherNativeUtils.tsx";
import HomeEmptyStateDefault from "../../images/HomeEmptyState.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, textContainer: { textAlign: "center" } };
obj2 = {
  padding: 16,
  gap: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.lg,
  alignItems: "center",
  justifyContent: "center",
};
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let items;
      let tmp10;
      let tmp12;
      const obj = react2;
      const cResult = obj.c(7);
      const tmp4 = closure_6();
      const obj2 = AppLauncherNativeUtils;
      const logAppLauncherEmptyStateView = obj2.useLogAppLauncherEmptyStateView(
        AppLauncherTypes.AppLauncherEmptyStateType.HOME_EMPTY,
      );
      const container = tmp4.container;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp9 = React3(HomeEmptyStateDefault, {});
        cResult[0] = tmp9;
        first = tmp9;
      } else {
        first = cResult[0];
      }
      const textContainer = tmp4.textContainer;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t["V7+xhH"]);
        cResult[1] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[1];
      }
      if (cResult[2] !== tmp4.textContainer) {
        const obj3 = { style: textContainer, variant: "text-md/semibold", color: "text-default", children: tmp10 };
        const tmp14 = React3(Text_Text.Text, obj3);
        cResult[2] = tmp4.textContainer;
        cResult[3] = tmp14;
        tmp12 = tmp14;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] === tmp4.container) {
        let tmp15;
        if (cResult[5] === tmp12) {
          tmp15 = cResult[6];
        }
        return tmp15;
      }
      const obj4 = { style: container, children: items };
      items = [first, tmp12];
      const tmp16 = hasOwnProperty(View, obj4);
      cResult[4] = tmp4.container;
      cResult[5] = tmp12;
      cResult[6] = tmp16;
      tmp15 = tmp16;
    }
  : () => {
      let intl;
      let items;
      const tmp = closure_6();
      const obj = AppLauncherNativeUtils;
      const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(
        AppLauncherTypes.AppLauncherEmptyStateType.HOME_EMPTY,
      );
      const obj2 = { style: tmp.container, children: items };
      items = [React3(HomeEmptyStateDefault, {})];
      const obj3 = {
        style: tmp.textContainer,
        variant: "text-md/semibold",
        color: "text-default",
        children: intl.string(intl2.t["V7+xhH"]),
      };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items[1] = React3(Text, obj3);
      return hasOwnProperty(View, obj2);
    };
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/EmptyState.tsx");

export default tmp4;
