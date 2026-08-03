// === Module 12440: getMediaViewerStateForScreen ===

// Module 12440 (getMediaViewerStateForScreen)
let result = require("set").fileFinishedImporting("modules/media_viewer/native/getMediaViewerStateForScreen.tsx");

export default function getMediaViewerStateForScreen(arg0, arg1, closure_1) {
  let obj = require(8452) /* isValidImageAttachment */;
  const size = obj.flattenSource(closure_1, true);
  if (null == size) {
    obj = { maximumZoomScale: 1, width: null, height: null };
    obj[1] = arg0;
    obj[2] = arg1;
    return obj;
  } else {
    const result = arg0 / arg1;
    const result1 = size.width / size.height;
    if (size.width < arg0) {
      if (size.height < arg1) {
        if (result1 > result) {
          let result2 = size.width / arg0;
        } else {
          result2 = size.height / arg1;
        }
        const _Math5 = Math;
        const bound = Math.min(0.5, result2 / 1.01);
        let num7 = 1;
        if (0 !== bound) {
          num7 = 1 / bound;
        }
        obj = { maximumZoomScale: null, width: null, height: null };
        obj[0] = num7;
        ({ width: obj4[1], height: obj4[2] } = size);
        return obj;
      }
    }
    if (result1 > result) {
      const result3 = arg0 / size.width;
      const obj1 = { maximumZoomScale: null, width: null, height: null };
      obj1[0] = 1 / result3 + 1;
      const _Math3 = Math;
      obj1[1] = Math.floor(arg0);
      const _Math4 = Math;
      obj1[2] = Math.floor(size.height * result3);
      return obj1;
    } else {
      const result4 = arg1 / size.height;
      const obj2 = { maximumZoomScale: null, width: null, height: null };
      obj2[0] = 1 / result4 + 1;
      const _Math = Math;
      obj2[1] = Math.floor(size.width * result4);
      const _Math2 = Math;
      obj2[2] = Math.floor(arg1);
      return obj2;
    }
  }
};