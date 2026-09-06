// === Module 4709: MediaPostThumbnailUtils ===

// Module 4709 (MediaPostThumbnailUtils)
import MediaFormatTesters from "MediaFormatTesters" /* 4710 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_channel/MediaPostThumbnailUtils.tsx");

export const MAX_THUMBNAIL_COUNT = 4;
export const getEmbedPreviewImageUrl = function getEmbedPreviewImageUrl(arg0) {
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
};
export const getBackgroundImageUrl = function getBackgroundImageUrl(coverImage) {
  if (obj.isAnimatedImageUrl(coverImage)) {
    const _HermesInternal = HermesInternal;
    let combined = "" + coverImage + "?format=webp";
  } else {
    MediaFormatTesters;
    combined = coverImage;
  }
  return combined;
};
export const getThumbnailImage = function getThumbnailImage(thumbnail) {
  if (null != thumbnail) {
    ({ url, proxy_url } = thumbnail);
    let tmp = url;
    if (null != url) {
      tmp = url;
      if (null != proxy_url) {
        let combined = proxy_url;
        if (obj.isVideoUrl(url)) {
          const _HermesInternal = HermesInternal;
          combined = "" + proxy_url + "?format=webp";
        }
        tmp = combined;
        obj = MediaFormatTesters;
      }
    }
    return tmp;
  }
};