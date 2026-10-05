// discord_app/modules/guild_themes/native/GuildThemeNuxPreviewGraphic.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GuildThemePreviewArtDefault from "GuildThemePreviewArt.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = {
  width: "100%",
  aspectRatio: 1.7777777777777777,
  alignItems: "center",
  justifyContent: "center",
  marginBottom: nativeDefault.space.PX_24,
};
let closure_5 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
      const tmp10 = (
        <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={tmp3.container}>
          {tmp5}
        </View>
      );
      cResult[2] = tmp3.container;
      cResult[3] = tmp5;
      cResult[4] = tmp10;
      tmp9 = tmp10;
    }
  : (arg0) => {
      let isPersonal;
      let themeSettings;
      ({ themeSettings, isPersonal } = arg0);
      GuildThemePreviewArtDefault;
      return (
        <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={closure_5().container}>
          {null}
        </View>
      );
    };
const result = size.fileFinishedImporting("modules/guild_themes/native/GuildThemeNuxPreviewGraphic.tsx");

export default tmp3;
