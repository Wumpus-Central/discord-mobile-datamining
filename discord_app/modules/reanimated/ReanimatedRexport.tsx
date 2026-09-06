// discord_app/modules/reanimated/ReanimatedRexport.tsx
import cancelAnimationDefault from "../../../_runtime/01636_cancelAnimation.js";
import REAWorkaroundViewDefault from "native/REAWorkaroundView.tsx";
import PlatformUtils from "../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
