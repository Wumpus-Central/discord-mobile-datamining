// discord_app/modules/go_live/utils/getReportedStreamResolution.tsx
import set from "../../../../_runtime/00002_set.js";
import DesktopSources from "../../../../discord_common/js/packages/media-engine/Constants.tsx";
import getReportedPresetResolutionDefault from "getReportedPresetResolution.tsx";

const ResolutionTypes = DesktopSources.ResolutionTypes;
const result = set.fileFinishedImporting("modules/go_live/utils/getReportedStreamResolution.tsx");

export default function getReportedStreamResolution(arg0, arg1, type) {
  if (type.type !== ResolutionTypes.FIXED) {
    return type;
  } else {
    const tmp7 = getReportedPresetResolutionDefault(arg0, arg1, type.height, arg3);
    let tmp8 = type;
    if (tmp7 !== type.height) {
      const obj = {};
      const merged = Object.assign(type);
      const _Math = Math;
      obj.width = Math.round((type.width * tmp7) / type.height);
      obj.height = tmp7;
      tmp8 = obj;
    }
    return tmp8;
  }
}
