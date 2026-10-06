// === Module 5032: getReportedStreamResolution ===

// Module 5032 (getReportedStreamResolution)
import Constants from "Constants" /* 4921 */;
import getReportedPresetResolutionDefault from "getReportedPresetResolution" /* 5033 */;
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
      const obj = { width: Math.round(type.width * tmp7 / type.height), height: tmp7 };
      const merged = Object.assign(type);
      const _Math = Math;
      tmp8 = obj;
    }
    return tmp8;
  }
};