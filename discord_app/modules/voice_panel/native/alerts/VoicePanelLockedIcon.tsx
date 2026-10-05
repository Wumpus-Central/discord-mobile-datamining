// discord_app/modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import AssetRegistryDefault from "../../../../../_runtime/17332_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let size;
const jsx = Fragment.jsx;
let obj = { container: size, icon: {} };
size = {
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "center",
  width: 64,
  height: 64,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.round,
};
let closure_4 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
    }
  : () => {
      const tmp = closure_4();
      ({ style: tmp.icon, source: AssetRegistryDefault, size: native.IconSizes.LARGE });
      NativeViewDefault;
      const Icon = native.Icon;
      return <tmp2 style={tmp.container}>{null}</tmp2>;
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx");

export default tmp3;
