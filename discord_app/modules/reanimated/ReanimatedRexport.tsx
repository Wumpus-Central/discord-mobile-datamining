// === Module 4115: ? ===

// Module 4115
import cancelAnimationDefault from "cancelAnimation" /* 1654 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 4116 */;
import PlatformTypes from "PlatformTypes" /* 501 */;
import obj132 from "obj132" /* 2 */;

if (PlatformTypes.isAndroid()) {
  const _Object = Object;
  const obj = { View: null };
  obj[0] = REAWorkaroundViewDefault;
  const merged = Object.assign(cancelAnimationDefault, obj);
  const importDefaultResult = cancelAnimationDefault;
}
const result = obj132.fileFinishedImporting("modules/reanimated/ReanimatedRexport.tsx");
for (const key10033 in require("cancelAnimation")) {
  arg5[key10033] = require("cancelAnimation")[key10033];
  continue;
}

export default cancelAnimationDefault;