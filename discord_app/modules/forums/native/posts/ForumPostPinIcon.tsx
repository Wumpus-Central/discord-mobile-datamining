// === Module 11617: ForumPostPinIcon ===

// Module 11617 (ForumPostPinIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import AssetRegistryDefault from "AssetRegistry" /* 11618 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let containerStyle;

let size;
let size1;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { pin: size, pinIcon: size1 };
size = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, width: 23, height: 23, marginEnd: 4, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
size1 = { height: 14, width: 14, tintColor: nativeDefault.colors.WHITE };
let closure_5 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((containerStyle) => {
  const obj = react2;
  const cResult = obj.c(8);
  containerStyle = containerStyle.containerStyle;
  const tmp4 = closure_5();
  if (cResult[0] === containerStyle) {
    let tmp5;
    let tmp6;
    if (cResult[1] === tmp4.pin) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== tmp4.pinIcon) {
      const Icon = native.Icon;
      const tmp9 = <Icon source={AssetRegistryDefault} style={tmp4.pinIcon} />;
      cResult[3] = tmp4.pinIcon;
      cResult[4] = tmp9;
      tmp6 = tmp9;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      let tmp10;
      if (cResult[6] === tmp6) {
        tmp10 = cResult[7];
      }
      return tmp10;
    }
    const tmp13 = <View style={tmp5}>{tmp6}</View>;
    cResult[5] = tmp5;
    cResult[6] = tmp6;
    cResult[7] = tmp13;
    tmp10 = tmp13;
  }
  const items = [tmp4.pin, containerStyle];
  cResult[0] = containerStyle;
  cResult[1] = tmp4.pin;
  cResult[2] = items;
  tmp5 = items;
}) : ((containerStyle) => {
  containerStyle = containerStyle.containerStyle;
  const tmp = closure_5();
  const items = [tmp.pin, containerStyle];
  ({ source: AssetRegistryDefault, style: tmp.pinIcon });
  const Icon = native.Icon;
  return <View style={items}>{null}</View>;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostPinIcon.tsx");

export default tmp4;