// === Module 1896: getDevicePixelRatio ===

// Module 1896 (getDevicePixelRatio)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const PixelRatio = get_ActivityIndicator.PixelRatio;
const result = obj132.fileFinishedImporting("utils/getDevicePixelRatio.native.tsx");

export default function getDevicePixelRatio() {
  let num = PixelRatio.get();
  if (num == null) {
    num = 1;
  }
  return num;
};