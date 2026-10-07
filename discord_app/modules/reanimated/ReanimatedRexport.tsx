// === Module 4618: ReanimatedRexport ===

// Module 4618 (ReanimatedRexport)
import cancelAnimationDefault from "cancelAnimation" /* 1643 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 4619 */;
import PlatformUtils from "utils/PlatformUtils" /* 1370 */;
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