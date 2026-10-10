// === Module 11886: AppLauncherOptionIcon ===

// Module 11886 (AppLauncherOptionIcon)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { iconWrapper: { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round } };
const styles = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round };
let size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherOptionIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherOptionIcon(arg0) {
  const cResult = c.c(9);
  ({ wrapperStyle, wrapperSize, icon } = arg0);
  let num = 32;
  if (undefined !== wrapperSize) {
    num = wrapperSize;
  }
  const tmp2 = styles();
  if (cResult[0] !== num) {
    const size = { height: num, width: num };
    cResult[0] = num;
    cResult[1] = size;
    let tmp3 = size;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === tmp2.iconWrapper) {
    if (cResult[3] === tmp3) {
      if (cResult[4] === wrapperStyle) {
        let tmp4 = cResult[5];
      }
      if (cResult[6] === icon) {
        if (cResult[7] === tmp4) {
          let tmp5 = cResult[8];
        }
        return tmp5;
      }
      const obj2 = { style: tmp4, children: icon };
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
}) : (function AppLauncherOptionIcon(wrapperSize) {
  let num = wrapperSize.wrapperSize;
  if (num === undefined) {
    num = 32;
  }
  const obj = { style: null, children: null };
  const items = [styles().iconWrapper, wrapperSize.wrapperStyle, { height: num, width: num }];
  obj.style = items;
  obj.children = wrapperSize.icon;
  return <View style={null}>{null}</View>;
});
export const useAppLauncherOptionIconStyles = styles;