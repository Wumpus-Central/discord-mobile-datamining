// discord_app/modules/premium/powerups/native/GuildPowerupsBoostGem.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import BoostGemDefault from "images/BoostGem.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let size;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { boostGemContainer: size };
size = {
  width: 100,
  height: 100,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT,
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "center",
};
let closure_5 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let gemHeight;
      let gemWidth;
      let style;
      const obj = react;
      const cResult = obj.c(9);
      ({ style, gemWidth, gemHeight } = arg0);
      const tmp3 = closure_5();
      if (cResult[0] === style) {
        let tmp4;
        if (cResult[1] === tmp3.boostGemContainer) {
          tmp4 = cResult[2];
        }
        if (cResult[3] === gemHeight) {
          let tmp5;
          if (cResult[4] === gemWidth) {
            tmp5 = cResult[5];
          }
          if (cResult[6] === tmp4) {
            let tmp9;
            if (cResult[7] === tmp5) {
              tmp9 = cResult[8];
            }
            return tmp9;
          }
          const tmp12 = <View style={tmp4}>{tmp5}</View>;
          cResult[6] = tmp4;
          cResult[7] = tmp5;
          cResult[8] = tmp12;
          tmp9 = tmp12;
        }
        const tmp8 = jsx(BoostGemDefault, { width: gemWidth, height: gemHeight });
        cResult[3] = gemHeight;
        cResult[4] = gemWidth;
        cResult[5] = tmp8;
        tmp5 = tmp8;
      }
      const items = [tmp3.boostGemContainer, style];
      cResult[0] = style;
      cResult[1] = tmp3.boostGemContainer;
      cResult[2] = items;
      tmp4 = items;
    }
  : (arg0) => {
      let gemHeight;
      let gemWidth;
      let style;
      ({ style, gemWidth, gemHeight } = arg0);
      const items = [closure_5().boostGemContainer, style];
      return <View style={items}>{null}</View>;
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostGem.tsx");

export default tmp2;
