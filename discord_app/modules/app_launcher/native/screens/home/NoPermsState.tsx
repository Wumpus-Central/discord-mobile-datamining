// === Module 11737: NoPermsState ===

// Module 11737 (NoPermsState)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import shared from "shared" /* 4729 */;
import useThemeDefault from "useTheme" /* 4791 */;
import Text_Text from "Text/Text" /* 4886 */;
import AppLauncherTypes from "AppLauncherTypes" /* 8932 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 11665 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { paddingVertical: 16, paddingHorizontal: 24, gap: 12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "flex-start", display: "flex", flexDirection: "row" }, textContainer: { flexShrink: 1 }, image: { width: 64, height: 64 } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingVertical: 16, paddingHorizontal: 24, gap: 12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "flex-start", display: "flex", flexDirection: "row" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/NoPermsState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(10);
  const tmp4 = closure_7();
  const tmp5Result = importDefault(shared.isThemeLight(useThemeDefault()) ? 11738 : 11739);
  const logAppLauncherEmptyStateView = AppLauncherNativeUtils.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.HOME_NO_PERMISSIONS);
  if (cResult[0] === tmp5Result) {
    if (cResult[1] === tmp4.image) {
      let tmp9 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.uDnXXj);
      cResult[3] = stringResult;
      let tmp12 = stringResult;
    } else {
      tmp12 = cResult[3];
    }
    if (cResult[4] !== tmp4.textContainer) {
      const obj3 = { style: tmp4.textContainer, variant: "text-sm/medium", color: "text-muted", children: tmp12 };
      const tmp16 = hasOwnProperty(Text_Text.Text, obj3);
      cResult[4] = tmp4.textContainer;
      cResult[5] = tmp16;
      let tmp14 = tmp16;
    } else {
      tmp14 = cResult[5];
    }
    if (cResult[6] === tmp4.container) {
      if (cResult[7] === tmp9) {
        if (cResult[8] === tmp14) {
          let tmp17 = cResult[9];
        }
        return tmp17;
      }
    }
    const obj4 = { style: tmp8, children: null };
    const items = [tmp9, tmp14];
    obj4.children = items;
    const tmp20 = timestampProducer(React3, obj4);
    cResult[6] = tmp4.container;
    cResult[7] = tmp9;
    cResult[8] = tmp14;
    cResult[9] = tmp20;
    tmp17 = tmp20;
  }
  const tmp10 = hasOwnProperty(React4, { style: tmp4.image, resizeMode: "contain", source: tmp5Result });
  cResult[0] = tmp5Result;
  cResult[1] = tmp4.image;
  cResult[2] = tmp10;
  tmp9 = tmp10;
  const obj5 = { style: tmp4.image, resizeMode: "contain", source: tmp5Result };
  const tmpResult = AppLauncherNativeUtils;
}) : (() => {
  const tmp = closure_7();
  const tmp4Result = importDefault(shared.isThemeLight(useThemeDefault()) ? 11738 : 11739);
  const logAppLauncherEmptyStateView = AppLauncherNativeUtils.useLogAppLauncherEmptyStateView(AppLauncherTypes.AppLauncherEmptyStateType.HOME_NO_PERMISSIONS);
  const obj2 = { style: tmp.container, children: null };
  const items = [hasOwnProperty(React4, { style: tmp.image, resizeMode: "contain", source: tmp4Result }), ];
  const obj4 = { style: tmp.textContainer, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.uDnXXj);
  items[1] = hasOwnProperty(Text_Text.Text, obj4);
  obj2.children = items;
  return timestampProducer(React3, obj2);
});