// discord_app/modules/reanimated/ReanimatedRexport.tsx
import _mod1643 from "../../../_runtime/metro/01643__.js";
import REAWorkaroundViewDefault from "native/REAWorkaroundView.tsx";
import PlatformUtils from "../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const _modDef1643 = _mod1643;

if (PlatformUtils.isAndroid()) {
  const _Object = Object;
  const obj = { View: REAWorkaroundViewDefault };
  const importDefaultResult = _modDef1643;
  assign(importDefaultResult, obj);
}
const result = size.fileFinishedImporting("modules/reanimated/ReanimatedRexport.tsx");
for (const key10033 in _mod1643) {
  exports[key10033] = _mod1643[key10033];
  continue;
}

export default _modDef1643;
