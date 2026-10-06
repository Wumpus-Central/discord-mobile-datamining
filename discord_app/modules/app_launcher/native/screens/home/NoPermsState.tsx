// discord_app/modules/app_launcher/native/screens/home/NoPermsState.tsx
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import shared from "../../../../../design/shared.tsx";
import useThemeDefault from "../../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import AppLauncherTypes from "../../../AppLauncherTypes.tsx";
import AppLauncherNativeUtils from "../../AppLauncherNativeUtils.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
({ View: c3, Image: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2, textContainer: { flexShrink: 1 }, image: { width: 64, height: 64 } };
obj2 = {
  paddingVertical: 16,
  paddingHorizontal: 24,
  gap: 12,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.lg,
  alignItems: "center",
  justifyContent: "flex-start",
  display: "flex",
  flexDirection: "row",
};
let closure_7 = createStyles.createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items;
      const obj = react2;
      const cResult = obj.c(10);
      const tmp4 = closure_7();
      const obj2 = shared;
      const tmp5Result = importDefault(obj2.isThemeLight(useThemeDefault()) ? 11752 : 11753);
      const tmpResult = AppLauncherNativeUtils;
      const logAppLauncherEmptyStateView = tmpResult.useLogAppLauncherEmptyStateView(
        AppLauncherTypes.AppLauncherEmptyStateType.HOME_NO_PERMISSIONS,
      );
      if (cResult[0] === tmp5Result) {
        let tmp9;
        let tmp12;
        let tmp14;
        if (cResult[1] === tmp4.image) {
          tmp9 = cResult[2];
        }
        const _Symbol = Symbol;
        const textContainer = tmp4.textContainer;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl2.intl;
          const stringResult = intl.string(intl2.t.uDnXXj);
          cResult[3] = stringResult;
          tmp12 = stringResult;
        } else {
          tmp12 = cResult[3];
        }
        if (cResult[4] !== tmp4.textContainer) {
          const obj3 = { style: textContainer, variant: "text-sm/medium", color: "text-muted", children: tmp12 };
          const tmp16 = hasOwnProperty(Text_Text.Text, obj3);
          cResult[4] = tmp4.textContainer;
          cResult[5] = tmp16;
          tmp14 = tmp16;
        } else {
          tmp14 = cResult[5];
        }
        if (cResult[6] === tmp4.container) {
          if (cResult[7] === tmp9) {
            let tmp17;
            if (cResult[8] === tmp14) {
              tmp17 = cResult[9];
            }
            return tmp17;
          }
        }
        const obj4 = { style: tmp8, children: items };
        items = [tmp9, tmp14];
        const tmp20 = metroRequire(_false, obj4);
        cResult[6] = tmp4.container;
        cResult[7] = tmp9;
        cResult[8] = tmp14;
        cResult[9] = tmp20;
        tmp17 = tmp20;
      }
      const obj5 = { style: tmp4.image, resizeMode: "contain", source: tmp5Result };
      const tmp10 = hasOwnProperty(React3, obj5);
      cResult[0] = tmp5Result;
      cResult[1] = tmp4.image;
      cResult[2] = tmp10;
      tmp9 = tmp10;
    }
  : () => {
      let intl;
      let items;
      const tmp = closure_7();
      const obj = shared;
      const tmp4Result = importDefault(obj.isThemeLight(useThemeDefault()) ? 11752 : 11753);
      const tmp2Result = AppLauncherNativeUtils;
      const logAppLauncherEmptyStateView = tmp2Result.useLogAppLauncherEmptyStateView(
        AppLauncherTypes.AppLauncherEmptyStateType.HOME_NO_PERMISSIONS,
      );
      const obj2 = { style: tmp.container, children: items };
      items = [,];
      const obj3 = { style: tmp.image, resizeMode: "contain", source: tmp4Result };
      items[0] = hasOwnProperty(React3, obj3);
      const obj4 = {
        style: tmp.textContainer,
        variant: "text-sm/medium",
        color: "text-muted",
        children: intl.string(intl2.t.uDnXXj),
      };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items[1] = hasOwnProperty(Text, obj4);
      return metroRequire(_false, obj2);
    };
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/NoPermsState.tsx");

export default tmp5;
