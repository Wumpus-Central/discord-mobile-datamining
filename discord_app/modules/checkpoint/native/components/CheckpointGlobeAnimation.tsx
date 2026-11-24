// discord_app/modules/checkpoint/native/components/CheckpointGlobeAnimation.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import CheckpointApngPlayerDefault from "CheckpointApngPlayer.tsx";
import _modDef12643 from "../../../../../discord_assets/assets/checkpoint/voice-globe.png.js";
import _modDef12644 from "../../../../../discord_assets/assets/checkpoint/voice-globe-static.png.js";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGlobeAnimation.tsx");

export default function CheckpointGlobeAnimation(style) {
  const obj = { animatedUri: _modDef12643, staticUri: _modDef12644, style: style.style };
  return jsx(CheckpointApngPlayerDefault, { animatedUri: _modDef12643, staticUri: _modDef12644, style: style.style });
}
