// === Module 5128: MediaTypes ===

// Module 5128 (MediaTypes)
import Constants from "Constants" /* 1085 */;
import URLUtilsDefault from "URLUtils" /* 1371 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import Server from "Server" /* 1985 */;
import MediaFormatTesters from "MediaFormatTesters" /* 5046 */;
import size_mod from "module_2" /* 2 */;

function messageAttachmentToUnfurledMediaItem(flags) {
  let obj;
  let tmp8;
  let num = flags.flags;
  const hasFlag = FlagUtils.hasFlag;
  FlagUtils;
  if (num == null) {
    num = 0;
  }
  let num2 = 0;
  if (hasFlag(num, MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA)) {
    num2 = obj.EXPLICIT | 0;
  }
  let num3 = flags.flags;
  const hasFlag2 = FlagUtils.hasFlag;
  FlagUtils;
  if (num3 == null) {
    num3 = 0;
  }
  let num4 = 0;
  if (hasFlag2(num3, MessageAttachmentFlags.IS_ANIMATED)) {
    num4 = obj2.IS_ANIMATED | 0;
  }
  size = { url: flags.url, proxyUrl: flags.proxy_url, height: flags.height, width: flags.width, contentType: flags.content_type, originalContentType: flags.original_content_type, placeholder: flags.placeholder, placeholderVersion: flags.placeholder_version, loadingState: Server.UnfurledMediaLoadingState.LOADED_SUCCESS, contentScanMetadata: tmp8, flags: num4 };
  tmp8 = undefined;
  if (null != flags.content_scan_version) {
    obj = { version: flags.content_scan_version, flags: num2 };
    tmp8 = obj;
  }
  return size;
}
const MessageAttachmentFlags = Constants.MessageAttachmentFlags;
const ContentScanFlags = { EXPLICIT: 1, [1]: "EXPLICIT", GORE: 2, [2]: "GORE", SELF_HARM: 4, [4]: "SELF_HARM" };
let obj2 = { IS_ANIMATED: 1, [1]: "IS_ANIMATED" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/media/MediaTypes.tsx");

export { ContentScanFlags };
export const ImageEncoder = { NATIVE: "native", JPEGLI: "jpegli", JPEG_IOS: "jpeg_ios", PASSTHROUGH: "passthrough", WIC: "wic", IMAGEIO: "imageio", SYSIMG_STUB: "sysimg_stub", SYSIMG_UNKNOWN: "sysimg_unknown" };
export const toContentScanMetadata = function toContentScanMetadata(version) {
  return { version: version.version, flags: version.flags };
};
export const UnfurledMediaItemFlags = obj2;
export const toUnfurledMediaItem = function toUnfurledMediaItem(media) {
  let num;
  let tmp;
  size = { url: media.url, proxyUrl: media.proxy_url, height: media.height, width: media.width, placeholder: media.placeholder, placeholderVersion: media.placeholder_version, contentType: media.content_type, originalContentType: media.original_content_type, loadingState: media.loading_state, contentScanMetadata: tmp, flags: num };
  tmp = undefined;
  if (null != media.content_scan_metadata) {
    const obj = { version: null, flags: null };
    ({ version: obj2.version, flags: obj2.flags } = media.content_scan_metadata);
    tmp = obj;
  }
  num = media.flags;
  if (num == null) {
    num = 0;
  }
  return size;
};
export { messageAttachmentToUnfurledMediaItem };
export const getUnfurledMediaItemType = function getUnfurledMediaItemType(contentType) {
  let str = "IMAGE";
  const obj = MediaFormatTesters;
  if (!obj.isImageContentType(contentType.contentType)) {
    let str3 = "INVALID";
    const tmpResult = MediaFormatTesters;
    if (tmpResult.isVideoContentType(contentType.contentType)) {
      str3 = "INVALID";
      if (null != contentType.proxyUrl) {
        str3 = "INVALID";
        const obj3 = URLUtilsDefault;
        if (null != obj3.toURLSafe(contentType.proxyUrl)) {
          str3 = "VIDEO";
        }
      }
    }
    str = str3;
  }
  return str;
};
export const messageAttachmentToMediaItem = function messageAttachmentToMediaItem(found2, tmp2Result) {
  let str;
  const obj = { type: str, alt: found2.description, sourceMetadata: obj3 };
  const merged = Object.assign(messageAttachmentToUnfurledMediaItem(found2));
  str = "IMAGE";
  obj2 = MediaFormatTesters;
  if (!obj2.isImageFile(found2.filename)) {
    tmp2Result = MediaFormatTesters;
    let str2 = "INVALID";
    if (tmp2Result.isVideoFile(found2.filename)) {
      str2 = "VIDEO";
    }
    str = str2;
  }
  return obj;
};
export const embedMediaToMediaItem = function embedMediaToMediaItem(thumbnail, sourceMetadata, IMAGE) {
  size = { type: IMAGE, url: thumbnail.url, proxyUrl: thumbnail.proxyURL, width: thumbnail.width, height: thumbnail.height, placeholder: thumbnail.placeholder, placeholderVersion: thumbnail.placeholderVersion, sourceMetadata, contentType: thumbnail.contentType };
  return size;
};
export const isVisualUnfurledMediaItem = function isVisualUnfurledMediaItem(width) {
  return null != width.width && width.width > 0 && null != width.height && width.height > 0;
};
export const getMediaItemDisplayUrl = function getMediaItemDisplayUrl(type) {
  if (null == type) {
    return null;
  } else {
    if ("VIDEO" === type.type) {
      if (null != type.proxyUrl) {
        const obj = URLUtilsDefault;
        const str = obj.toURLSafe(type.proxyUrl);
        let str1 = null;
        if (null != str) {
          const searchParams = str.searchParams;
          searchParams.append("format", "webp");
          str1 = str.toString();
        }
        return str1;
      }
    }
    let proxyUrl = type.proxyUrl;
    if (proxyUrl == null) {
      proxyUrl = type.url;
    }
    if (proxyUrl == null) {
      proxyUrl = null;
    }
    return proxyUrl;
  }
};