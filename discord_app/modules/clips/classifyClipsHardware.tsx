// === Module 20648: classifyClipsHardware ===

// Module 20648 (classifyClipsHardware)
import ClipsConstants from "ClipsConstants" /* 8779 */;
import size from "module_2" /* 2 */;

function isHardwareH264Encoder(arr) {
  let hasItem = arr.includes("H.264");
  if (hasItem) {
    hasItem = arr.endsWith("(HW)");
  }
  return hasItem;
}
let closure_0 = ClipsConstants.ClipsHardwareClassification;
let closure_1 = { "10de": "Nvidia/NVENC", 1002: "AMD/AMF", 8086: "Intel/QSV" };
const items = ["1002", "8086"];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/clips/classifyClipsHardware.tsx");

export function classifyClipsHardware(arr, arr2) {
  const found = arr.filter(isHardwareH264Encoder);
  if (null != arr2) {
    if (0 !== arr2.length) {
      if (arr2.some((is_hybrid_integrated) => {
        is_hybrid_integrated = is_hybrid_integrated.is_hybrid_integrated;
        let tmp = !is_hybrid_integrated;
        if (!is_hybrid_integrated) {
          tmp = is_hybrid_integrated.memory >= 6000000000;
        }
        if (tmp) {
          closure_0 = tmp3;
          tmp = null != dependencyMap[is_hybrid_integrated.vendor_id] && found.some((item) => item.startsWith(closure_0));
          const tmp5 = null != dependencyMap[is_hybrid_integrated.vendor_id] && found.some((item) => item.startsWith(closure_0));
        }
        return tmp;
      })) {
        let MEETS_AUTO_ENABLE = found.MEETS_AUTO_ENABLE;
      } else {
        MEETS_AUTO_ENABLE = arr2.some((vendor_id) => {
          closure_0 = tmp;
          let tmp2 = null != tmp && found.some((item) => item.startsWith(closure_0));
          if (!tmp2) {
            let hasItem = set.has(vendor_id.vendor_id);
            if (hasItem) {
              hasItem = found.some((item) => item.startsWith("MediaFoundation"));
            }
            tmp2 = hasItem;
          }
          return tmp2;
        }) ? tmp.MEETS_MINIMUM : tmp.BELOW_MINIMUM;
      }
      return MEETS_AUTO_ENABLE;
    }
  }
  if (found.length > 0) {
    let BELOW_MINIMUM = found.MEETS_MINIMUM;
  } else {
    BELOW_MINIMUM = found.BELOW_MINIMUM;
  }
}