// === Module 11820: AppLauncherOptionIcon ===

// Module 11820 (AppLauncherOptionIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { iconWrapper: obj2 };
obj2 = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round };
const styles = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
}) : ((wrapperSize) => {
  let num = wrapperSize.wrapperSize;
  const wrapperStyle = wrapperSize.wrapperStyle;
  if (num === undefined) {
    num = 32;
  }
  const icon = wrapperSize.icon;
  const items = [styles().iconWrapper, wrapperStyle, { height: num, width: num }];
  return <View style={items}>{icon}</View>;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherOptionIcon.tsx");

export default tmp4;
export const useAppLauncherOptionIconStyles = styles;