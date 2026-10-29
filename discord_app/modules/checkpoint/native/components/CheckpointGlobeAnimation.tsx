// === Module 13441: CheckpointGlobeAnimation ===

// Module 13441 (CheckpointGlobeAnimation)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 13442 */;
import _modDef13443 from "module_13443" /* 13443 */;
import _modDef13444 from "module_13444" /* 13444 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGlobeAnimation.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointGlobeAnimation(style) {
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
}) : (function CheckpointGlobeAnimation(style) {
  const obj = { animatedUri: _modDef13443, staticUri: _modDef13444, style: style.style };
  return jsx(CheckpointApngPlayerDefault, { animatedUri: _modDef13443, staticUri: _modDef13444, style: style.style });
});