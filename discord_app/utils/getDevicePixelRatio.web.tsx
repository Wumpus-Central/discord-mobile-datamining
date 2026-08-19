// === Module 9514: getDevicePixelRatio ===

// Module 9514 (getDevicePixelRatio)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};