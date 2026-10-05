// discord_app/modules/media_channel/MediaPostThumbnailUtils.tsx
import MediaFormatTesters from "../messages/MediaFormatTesters.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/media_channel/MediaPostThumbnailUtils.tsx");

export const MAX_THUMBNAIL_COUNT = 4;
export const getEmbedPreviewImageUrl = function getEmbedPreviewImageUrl(arg0) {
  let image;
  let thumbnail;
  if (null != arg0) {
    let tmp;
    ({ thumbnail, image } = arg0);
    if (null != thumbnail) {
      let url2 = thumbnail.proxy_url;
      if (url2 == null) {
        url2 = thumbnail.url;
      }
      tmp = url2;
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
  let combined;
  const obj = MediaFormatTesters;
  if (obj.isAnimatedImageUrl(coverImage)) {
    const _HermesInternal = HermesInternal;
    combined = "" + coverImage + "?format=webp";
  } else {
    MediaFormatTesters;
    combined = coverImage;
  }
  return combined;
};
export const getThumbnailImage = function getThumbnailImage(thumbnail) {
  let proxy_url;
  let url;
  if (null != thumbnail) {
    ({ url, proxy_url } = thumbnail);
    let tmp = url;
    if (null != url) {
      tmp = url;
      if (null != proxy_url) {
        let combined = proxy_url;
        const obj = MediaFormatTesters;
        if (obj.isVideoUrl(url)) {
          const _HermesInternal = HermesInternal;
          combined = "" + proxy_url + "?format=webp";
        }
        tmp = combined;
      }
    }
    return tmp;
  }
};
