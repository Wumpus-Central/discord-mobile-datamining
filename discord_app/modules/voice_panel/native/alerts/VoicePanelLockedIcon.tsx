// === Module 17331: VoicePanelLockedIcon ===

// Module 17331 (VoicePanelLockedIcon)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import NativeViewDefault from "NativeView" /* 5976 */;
import AssetRegistryDefault from "AssetRegistry" /* 17332 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let size;
const jsx = Fragment.jsx;
let obj = { container: size, icon: {} };
size = { alignItems: "center", justifyContent: "center", alignSelf: "center", width: 64, height: 64, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
let closure_4 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp4 = closure_4();
  if (cResult[0] !== tmp4.icon) {
    const Icon = native.Icon;
    const tmp8 = <Icon style={tmp4.icon} source={AssetRegistryDefault} size={native.IconSizes.LARGE} />;
    cResult[0] = tmp4.icon;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.container) {
    let tmp9;
    if (cResult[3] === tmp5) {
      tmp9 = cResult[4];
    }
    return tmp9;
  }
  const tmp10 = jsx(NativeViewDefault, { style: tmp4.container, children: tmp5 });
  cResult[2] = tmp4.container;
  cResult[3] = tmp5;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : (() => {
  const tmp = closure_4();
  ({ style: tmp.icon, source: AssetRegistryDefault, size: native.IconSizes.LARGE });
  NativeViewDefault;
  const Icon = native.Icon;
  return <tmp2 style={tmp.container}>{null}</tmp2>;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx");

export default tmp3;