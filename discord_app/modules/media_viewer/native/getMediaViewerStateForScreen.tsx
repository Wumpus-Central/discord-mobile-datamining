// === Module 12784: getMediaViewerStateForScreen ===

// Module 12784 (getMediaViewerStateForScreen)
import MediaSourceUtil from "MediaSourceUtil" /* 7939 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
let result = size.fileFinishedImporting("modules/media_viewer/native/getMediaViewerStateForScreen.tsx");

export default function getMediaViewerStateForScreen(width, height, cResult) {
  const obj = MediaSourceUtil;
  size = obj.flattenSource(cResult, true);
  if (null == size) {
    const size1 = { maximumZoomScale: 1, width, height };
    return size1;
  } else {
    const result = width / height;
    const result1 = size.width / size.height;
    if (size.width < width) {
      if (size.height < height) {
        let result2;
        if (result1 > result) {
          result2 = size.width / width;
        } else {
          result2 = size.height / height;
        }
        const _Math5 = Math;
        const bound = Math.min(0.5, result2 / 1.01);
        let num7 = 1;
        if (0 !== bound) {
          num7 = 1 / bound;
        }
        const size2 = { maximumZoomScale: num7, width: null, height: null };
        ({ width: obj4.width, height: obj4.height } = size);
        return size2;
      }
    }
    if (result1 > result) {
      const result3 = width / size.width;
      const size3 = { maximumZoomScale: 1 / result3 + 1, width: Math.floor(width), height: Math.floor(size.height * result3) };
      const _Math3 = Math;
      const _Math4 = Math;
      return size3;
    } else {
      const result4 = height / size.height;
      const size4 = { maximumZoomScale: 1 / result4 + 1, width: Math.floor(size.width * result4), height: Math.floor(height) };
      const _Math = Math;
      const _Math2 = Math;
      return size4;
    }
  }
};