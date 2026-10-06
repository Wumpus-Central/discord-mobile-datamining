// === Module 16126: GuildThemeNuxPreviewGraphic ===

// Module 16126 (GuildThemeNuxPreviewGraphic)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import GuildThemePreviewArtDefault from "GuildThemePreviewArt" /* 16127 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { width: "100%", aspectRatio: 1.7777777777777777, alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_24 };
let closure_5 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isPersonal;
  let themeSettings;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  ({ themeSettings, isPersonal } = arg0);
  const tmp3 = closure_5();
  let tmp4 = null;
  if (!isPersonal) {
    tmp4 = themeSettings;
  }
  if (cResult[0] !== tmp4) {
    const tmp8 = jsx(GuildThemePreviewArtDefault, { themeSettings: tmp4 });
    cResult[0] = tmp4;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp3.container) {
    let tmp9;
    if (cResult[3] === tmp5) {
      tmp9 = cResult[4];
    }
    return tmp9;
  }
  const tmp10 = <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={tmp3.container}>{tmp5}</View>;
  cResult[2] = tmp3.container;
  cResult[3] = tmp5;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  let isPersonal;
  let themeSettings;
  ({ themeSettings, isPersonal } = arg0);
  GuildThemePreviewArtDefault;
  return <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={closure_5().container}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/guild_themes/native/GuildThemeNuxPreviewGraphic.tsx");

export default tmp3;