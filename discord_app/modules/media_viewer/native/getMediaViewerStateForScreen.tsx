// === Module 13372: getMediaViewerStateForScreen ===

// Module 13372 (getMediaViewerStateForScreen)
import MediaSourceUtil from "MediaSourceUtil" /* 8615 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/media_viewer/native/getMediaViewerStateForScreen.tsx");

export default function getMediaViewerStateForScreen(width, height, arr) {
  const size = MediaSourceUtil.flattenSource(arr, true);
  if (null == size) {
    const size1 = { maximumZoomScale: 1, width, height };
    return size1;
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
        const size2 = { maximumZoomScale: num7, width: null, height: null };
        ({ width: obj4.width, height: obj4.height } = size);
        return size2;
      }
    }
    if (result1 > result) {
      const result3 = width / size.width;
      const size3 = { maximumZoomScale: 1 / result3 + 1, width: null, height: null };
      const _Math3 = Math;
      size3.width = Math.floor(width);
      const _Math4 = Math;
      size3.height = Math.floor(size.height * result3);
      return size3;
    } else {
      const result4 = height / size.height;
      const size4 = { maximumZoomScale: 1 / result4 + 1, width: null, height: null };
      const _Math = Math;
      size4.width = Math.floor(size.width * result4);
      const _Math2 = Math;
      size4.height = Math.floor(height);
      return size4;
    }
  }
};