// === Module 16283: InvitesDisabledBadge ===

// Module 16283 (InvitesDisabledBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import AssetRegistryDefault from "AssetRegistry" /* 12407 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let style;

let size;
let size1;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { pause: { alignContent: "center", justifyContent: "center", width: 10, height: 10 }, pauseBackground: size, pauseRing: size1 };
size = { borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, padding: native.BADGE_PADDING, height: 16, width: 16, alignContent: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
size1 = { borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, position: "absolute", bottom: -native.BADGE_PADDING, right: -native.BADGE_PADDING, padding: native.BADGE_PADDING, height: 22, width: 22, alignContent: "center", justifyContent: "center" };
let closure_5 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const obj = react2;
  const cResult = obj.c(11);
  style = style.style;
  const tmp4 = closure_5();
  if (cResult[0] === style) {
    let tmp5;
    let tmp6;
    if (cResult[1] === tmp4.pauseRing) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== tmp4.pause) {
      const ThemedIcon = native.ThemedIcon;
      const tmp9 = <ThemedIcon style={tmp4.pause} themedColor={nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE} source={AssetRegistryDefault} />;
      cResult[3] = tmp4.pause;
      cResult[4] = tmp9;
      tmp6 = tmp9;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] === tmp4.pauseBackground) {
      let tmp10;
      if (cResult[6] === tmp6) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === tmp5) {
        let tmp14;
        if (cResult[9] === tmp10) {
          tmp14 = cResult[10];
        }
        return tmp14;
      }
      const tmp17 = <View style={tmp5}>{tmp10}</View>;
      cResult[8] = tmp5;
      cResult[9] = tmp10;
      cResult[10] = tmp17;
      tmp14 = tmp17;
    }
    const tmp13 = <View style={tmp4.pauseBackground}>{tmp6}</View>;
    cResult[5] = tmp4.pauseBackground;
    cResult[6] = tmp6;
    cResult[7] = tmp13;
    tmp10 = tmp13;
  }
  const items = [tmp4.pauseRing, style];
  cResult[0] = style;
  cResult[1] = tmp4.pauseRing;
  cResult[2] = items;
  tmp5 = items;
}) : ((style) => {
  style = style.style;
  const tmp = closure_5();
  const items = [tmp.pauseRing, style];
  ({ style: tmp.pause, themedColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, source: AssetRegistryDefault });
  const ThemedIcon = native.ThemedIcon;
  return <View style={items}>{null}</View>;
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/guild/native/InvitesDisabledBadge.tsx");

export default memoResult;