// discord_app/modules/checkpoint/native/components/CheckpointGlobeAnimation.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import CheckpointApngPlayerDefault from "CheckpointApngPlayer.tsx";
import _modDef13785 from "../../../../../discord_assets/assets/checkpoint/voice-globe.png.js";
import _modDef13786 from "../../../../../discord_assets/assets/checkpoint/voice-globe-static.png.js";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGlobeAnimation.tsx");

export default function CheckpointGlobeAnimation(style) {
  const obj = { animatedUri: _modDef13785, staticUri: _modDef13786, style: style.style };
  return jsx(CheckpointApngPlayerDefault, { animatedUri: _modDef13785, staticUri: _modDef13786, style: style.style });
}
