// discord_app/modules/reanimated/ReanimatedRexport.tsx
import cancelAnimationDefault from "../../../_runtime/01654_cancelAnimation.js";
import REAWorkaroundViewDefault from "native/REAWorkaroundView.tsx";
import PlatformTypes from "../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import obj132 from "../../../_runtime/00002_obj132.js";

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