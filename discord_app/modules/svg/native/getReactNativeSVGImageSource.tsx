// === Module 12128: getReactNativeSVGImageSource ===

// Module 12128 (getReactNativeSVGImageSource)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/svg/native/getReactNativeSVGImageSource.tsx");

export default function getReactNativeSVGImageSource(arg0) {
  let first = arg0;
  if (obj.isAndroid()) {
    const _Array = Array;
    first = arg0;
    if (Array.isArray(arg0)) {
      first = arg0[0];
    }
  }
  return first;
};