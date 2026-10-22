// === Module 13808: ImagePreload ===

// Module 13808 (ImagePreload)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
const result = size.fileFinishedImporting("modules/image/ImagePreload.native.tsx");

export const preloadImage = function preloadImage(avatarURL, arg1) {
  closure_0 = avatarURL;
  closure_1 = arg1;
  const prefetchResult = Image.prefetch(avatarURL);
  Image.prefetch(avatarURL).then(() => {
    let tmpResult;
    if (closure_1 != null) {
      tmpResult = tmp(closure_0);
    }
    return tmpResult;
  }).catch(() => {

  });
};