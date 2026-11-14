// === Module 6360: MediaPostThumbnailUtils ===

// Module 6360 (MediaPostThumbnailUtils)
import MediaFormatTesters from "MediaFormatTesters" /* 6361 */;
import MediaFormatParamUtils from "MediaFormatParamUtils" /* 6363 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_channel/MediaPostThumbnailUtils.tsx");

export const MAX_THUMBNAIL_COUNT = 4;
export function getEmbedPreviewImageUrl(arg0) {
  if (null != arg0) {
    ({ thumbnail, image } = arg0);
    if (null != thumbnail) {
      let url2 = thumbnail.proxy_url;
      if (url2 == null) {
        url2 = thumbnail.url;
      }
      let tmp = url2;
    } else if (null != image) {
      let url = image.proxy_url;
      if (url == null) {
        url = image.url;
      }
      tmp = url;
    }
    return tmp;
  }
}
export function getBackgroundImageUrl(coverImage) {
  if (obj.isAnimatedImageUrl(coverImage)) {
    let withMediaFormatResult = MediaFormatParamUtils.withMediaFormat(coverImage, "webp");
    const tmpResult = MediaFormatParamUtils;
  } else {
    MediaFormatTesters;
    withMediaFormatResult = coverImage;
  }
  return withMediaFormatResult;
}
export function getThumbnailImage(thumbnail) {
  if (null != thumbnail) {
    ({ url, proxy_url } = thumbnail);
    let tmp = url;
    if (null != url) {
      tmp = url;
      if (null != proxy_url) {
        let withMediaFormatResult = proxy_url;
        if (obj.isVideoUrl(url)) {
          withMediaFormatResult = MediaFormatParamUtils.withMediaFormat(proxy_url, "webp");
          const tmp2Result = MediaFormatParamUtils;
        }
        tmp = withMediaFormatResult;
        obj = MediaFormatTesters;
      }
    }
    return tmp;
  }
}