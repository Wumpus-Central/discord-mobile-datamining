// discord_app/modules/image/ImagePreload.native.tsx
import _mod17 from "../../../_runtime/metro/00017__.js";
import size from "../../../_runtime/metro/00002__.js";

const Image = _mod17.Image;
const result = size.fileFinishedImporting("modules/image/ImagePreload.native.tsx");

export const preloadImage = function preloadImage(avatarURL, arg1) {
  closure_0 = avatarURL;
  closure_1 = arg1;
  const prefetchResult = Image.prefetch(avatarURL);
  Image.prefetch(avatarURL)
    .then(() => {
      let tmpResult;
      if (closure_1 != null) {
        tmpResult = tmp(closure_0);
      }
      return tmpResult;
    })
    .catch(() => {});
};
