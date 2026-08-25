// === Module 4120: ? ===

// Module 4120
import set from "set" /* 2 */;
import cancelAnimationDefault from "cancelAnimation" /* 1654 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 4121 */;
import PlatformTypes from "PlatformTypes" /* 501 */;

if (PlatformTypes.isAndroid()) {
  const _Object = Object;
  const obj = { View: null };
  obj[0] = REAWorkaroundViewDefault;
  const merged = Object.assign(cancelAnimationDefault, obj);
  const importDefaultResult = cancelAnimationDefault;
}
const result = set.fileFinishedImporting("modules/reanimated/ReanimatedRexport.tsx");
for (const key10033 in require("cancelAnimation")) {
  let tmp5 = key10033;
  arg5[key10033] = require("cancelAnimation")[key10033];
  continue;
}

export default cancelAnimationDefault;