// discord_app/modules/app_launcher/native/base_components/AppLauncherOptionIcon.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { iconWrapper: obj2 };
obj2 = {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
};
const styles = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let icon;
      let tmp3;
      let wrapperSize;
      let wrapperStyle;
      const obj = react2;
      const cResult = obj.c(9);
      ({ wrapperStyle, wrapperSize, icon } = arg0);
      let num = 32;
      if (undefined !== wrapperSize) {
        num = wrapperSize;
      }
      const tmp2 = styles();
      if (cResult[0] !== num) {
        size = { height: num, width: num };
        cResult[0] = num;
        cResult[1] = size;
        tmp3 = size;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === tmp2.iconWrapper) {
        if (cResult[3] === tmp3) {
          let tmp4;
          if (cResult[4] === wrapperStyle) {
            tmp4 = cResult[5];
          }
          if (cResult[6] === icon) {
            let tmp5;
            if (cResult[7] === tmp4) {
              tmp5 = cResult[8];
            }
            return tmp5;
          }
          const tmp8 = <View style={tmp4}>{icon}</View>;
          cResult[6] = icon;
          cResult[7] = tmp4;
          cResult[8] = tmp8;
          tmp5 = tmp8;
        }
      }
      const items = [tmp2.iconWrapper, wrapperStyle, tmp3];
      cResult[2] = tmp2.iconWrapper;
      cResult[3] = tmp3;
      cResult[4] = wrapperStyle;
      cResult[5] = items;
      tmp4 = items;
    }
  : (wrapperSize) => {
      let num = wrapperSize.wrapperSize;
      const wrapperStyle = wrapperSize.wrapperStyle;
      if (num === undefined) {
        num = 32;
      }
      const icon = wrapperSize.icon;
      const items = [styles().iconWrapper, wrapperStyle, { height: num, width: num }];
      return <View style={items}>{icon}</View>;
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherOptionIcon.tsx");

export default tmp4;
export const useAppLauncherOptionIconStyles = styles;
