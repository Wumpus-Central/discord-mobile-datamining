// discord_app/modules/checkpoint/native/components/CheckpointGlobeAnimation.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../../_runtime/00576_c.js";
import CheckpointApngPlayerDefault from "CheckpointApngPlayer.tsx";
import _modDef13443 from "../../../../../discord_assets/assets/checkpoint/voice-globe.png.js";
import _modDef13444 from "../../../../../discord_assets/assets/checkpoint/voice-globe-static.png.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGlobeAnimation.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointGlobeAnimation(style) {
      const cResult = c.c(2);
      style = style.style;
      if (cResult[0] !== style) {
        const obj2 = { animatedUri: _modDef13443, staticUri: _modDef13444, style };
        const tmp7 = jsx(CheckpointApngPlayerDefault, { animatedUri: _modDef13443, staticUri: _modDef13444, style });
        cResult[0] = style;
        cResult[1] = tmp7;
        let tmp3 = tmp7;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : function CheckpointGlobeAnimation(style) {
      const obj = { animatedUri: _modDef13443, staticUri: _modDef13444, style: style.style };
      return jsx(CheckpointApngPlayerDefault, {
        animatedUri: _modDef13443,
        staticUri: _modDef13444,
        style: style.style,
      });
    };
