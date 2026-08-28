// === Module 4636: MAX_THUMBNAIL_COUNT ===

// Module 4636 (MAX_THUMBNAIL_COUNT)
import set from "set" /* 2 */;
import urlMatchesFileExtension from "urlMatchesFileExtension" /* 4637 */;

const result = set.fileFinishedImporting("modules/media_channel/MediaPostThumbnailUtils.tsx");

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
    combined = coverImage;
    const tmpResult = urlMatchesFileExtension;
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
        obj = urlMatchesFileExtension;
      }
    }
    return tmp;
  }
};