// === Module 12983: getMediaViewerStateForScreen ===

// Module 12983 (getMediaViewerStateForScreen)
import MediaSourceUtil from "MediaSourceUtil" /* 8263 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/media_viewer/native/getMediaViewerStateForScreen.tsx");

export default function getMediaViewerStateForScreen(width, height, arr) {
  let size = MediaSourceUtil.flattenSource(arr, true);
  if (null == size) {
    size = { maximumZoomScale: 1, width, height };
    return size;
  } else {
    const result = width / height;
    const result1 = size.width / size.height;
    if (size.width < width) {
      if (size.height < height) {
        if (result1 > result) {
          let result2 = size.width / width;
        } else {
          result2 = size.height / height;
        }
        const _Math5 = Math;
        const bound = Math.min(0.5, result2 / 1.01);
        let num7 = 1;
        if (0 !== bound) {
          num7 = 1 / bound;
        }
        const size1 = { maximumZoomScale: num7, width: null, height: null };
        ({ width: obj4.width, height: obj4.height } = size);
        return size1;
      }
    }
    if (result1 > result) {
      const result3 = width / size.width;
      const size2 = { maximumZoomScale: 1 / result3 + 1, width: null, height: null };
      const _Math3 = Math;
      size2.width = Math.floor(width);
      const _Math4 = Math;
      size2.height = Math.floor(size.height * result3);
      return size2;
    } else {
      const result4 = height / size.height;
      const size3 = { maximumZoomScale: 1 / result4 + 1, width: null, height: null };
      const _Math = Math;
      size3.width = Math.floor(size.width * result4);
      const _Math2 = Math;
      size3.height = Math.floor(height);
      return size3;
    }
  }
};