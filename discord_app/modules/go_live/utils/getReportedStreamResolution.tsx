// === Module 4742: getReportedStreamResolution ===

// Module 4742 (getReportedStreamResolution)
import Constants from "Constants" /* 4631 */;
import getReportedPresetResolutionDefault from "getReportedPresetResolution" /* 4743 */;
import size from "module_2" /* 2 */;

const ResolutionTypes = Constants.ResolutionTypes;
const result = size.fileFinishedImporting("modules/go_live/utils/getReportedStreamResolution.tsx");

export default function getReportedStreamResolution(useMaxQuality, stateFromStores1, type, fps) {
  if (type.type !== ResolutionTypes.FIXED) {
    return type;
  } else {
    const tmp7 = getReportedPresetResolutionDefault(useMaxQuality, stateFromStores1, type.height, fps);
    let tmp8 = type;
    if (tmp7 !== type.height) {
      const obj = {};
      const merged = Object.assign(type);
      const _Math = Math;
      obj.width = Math.round(type.width * tmp7 / type.height);
      obj.height = tmp7;
      tmp8 = obj;
    }
    return tmp8;
  }
};