// === Module 4696: getReportedStreamResolution ===

// Module 4696 (getReportedStreamResolution)
import Constants from "Constants" /* 4585 */;
import getReportedPresetResolutionDefault from "getReportedPresetResolution" /* 4697 */;
import size from "module_2" /* 2 */;

const ResolutionTypes = Constants.ResolutionTypes;
const result = size.fileFinishedImporting("modules/go_live/utils/getReportedStreamResolution.tsx");

export default function getReportedStreamResolution(arg0, arg1, type, arg3) {
  if (type.type !== ResolutionTypes.FIXED) {
    return type;
  } else {
    const tmp7 = getReportedPresetResolutionDefault(arg0, arg1, type.height, arg3);
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