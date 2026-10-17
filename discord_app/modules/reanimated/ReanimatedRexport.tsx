// === Module 4945: ReanimatedRexport ===

// Module 4945 (ReanimatedRexport)
import cancelAnimationDefault from "cancelAnimation" /* 1658 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 4946 */;
import PlatformUtils from "utils/PlatformUtils" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

if (PlatformUtils.isAndroid()) {
  const _Object = Object;
  const obj = { View: REAWorkaroundViewDefault };
  const merged = Object.assign(cancelAnimationDefault, obj);
  const importDefaultResult = cancelAnimationDefault;
}
const result = size.fileFinishedImporting("modules/reanimated/ReanimatedRexport.tsx");
for (const key10033 in require("cancelAnimation")) {
  arg5[key10033] = require("cancelAnimation")[key10033];
  continue;
}

export default cancelAnimationDefault;