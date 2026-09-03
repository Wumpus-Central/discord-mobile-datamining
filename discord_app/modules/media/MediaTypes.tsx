// === Module 4745: messageAttachmentToUnfurledMediaItem ===

// Module 4745 (messageAttachmentToUnfurledMediaItem)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import hasFlag from "hasFlag" /* 1398 */;
import isDiscordProxiedAssetUrlDefault from "isDiscordProxiedAssetUrl" /* 1485 */;
import urlMatchesFileExtension from "urlMatchesFileExtension" /* 4671 */;

function messageAttachmentToUnfurledMediaItem(flags) {
  obj = hasFlag;
  let num = flags.flags;
  if (num == null) {
    num = 0;
  }
  let num2 = 0;
  if (obj.hasFlag(num, MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA)) {
    num2 = obj.EXPLICIT | 0;
  }
  let num3 = flags.flags;
  if (num3 == null) {
    num3 = 0;
  }
  let num4 = 0;
  if (tmpResult.hasFlag(num3, MessageAttachmentFlags.IS_ANIMATED)) {
    num4 = obj.IS_ANIMATED | 0;
  }
  obj = { url: flags.url, proxyUrl: flags.proxy_url, height: flags.height, width: flags.width, contentType: flags.content_type, originalContentType: flags.original_content_type, placeholder: flags.placeholder, placeholderVersion: flags.placeholder_version, loadingState: tmp(1954).UnfurledMediaLoadingState.LOADED_SUCCESS, contentScanMetadata: null, flags: null };
  let tmp6;
  if (null != flags.content_scan_version) {
    obj = { version: null, flags: null };
    obj[0] = flags.content_scan_version;
    obj[1] = num2;
    tmp6 = obj;
  }
  obj[9] = tmp6;
  obj[10] = num4;
  return obj;
}
const MessageAttachmentFlags = ME.MessageAttachmentFlags;
let obj = { EXPLICIT: 1, [1]: "EXPLICIT", GORE: 2, [2]: "GORE", SELF_HARM: 4, [4]: "SELF_HARM" };
obj = { IS_ANIMATED: 1, [1]: "IS_ANIMATED" };
const result = set.fileFinishedImporting("modules/media/MediaTypes.tsx");

export const ContentScanFlags = obj;
export const ImageEncoder = { NATIVE: "native", JPEGLI: "jpegli", JPEG_IOS: "jpeg_ios", PASSTHROUGH: "passthrough" };
export const toContentScanMetadata = function toContentScanMetadata(version) {
  return { version: version.version, flags: version.flags };
};
export const UnfurledMediaItemFlags = obj;
export const toUnfurledMediaItem = function toUnfurledMediaItem(media) {
  obj = { url: media.url, proxyUrl: media.proxy_url, height: media.height, width: media.width, placeholder: media.placeholder, placeholderVersion: media.placeholder_version, contentType: media.content_type, originalContentType: media.original_content_type, loadingState: media.loading_state, contentScanMetadata: null, flags: null };
  let tmp;
  if (null != media.content_scan_metadata) {
    obj = { version: null, flags: null };
    ({ version: obj2[0], flags: obj2[1] } = media.content_scan_metadata);
    tmp = obj;
  }
  obj[9] = tmp;
  let num = media.flags;
  if (num == null) {
    num = 0;
  }
  obj[10] = num;
  return obj;
};
export { messageAttachmentToUnfurledMediaItem };
export const getUnfurledMediaItemType = function getUnfurledMediaItemType(contentType) {
  let str = "IMAGE";
  if (!obj.isImageContentType(contentType.contentType)) {
    let str3 = "INVALID";
    if (tmpResult.isVideoContentType(contentType.contentType)) {
      str3 = "INVALID";
      if (null != contentType.proxyUrl) {
        str3 = "INVALID";
        if (null != obj3.toURLSafe(contentType.proxyUrl)) {
          str3 = "VIDEO";
        }
        obj3 = isDiscordProxiedAssetUrlDefault;
      }
    }
    str = str3;
    tmpResult = urlMatchesFileExtension;
  }
  return str;
};
export const messageAttachmentToMediaItem = function messageAttachmentToMediaItem(found2, tmp2Result) {
  obj = {};
  const merged = Object.assign(messageAttachmentToUnfurledMediaItem(found2));
  let str = "IMAGE";
  if (!obj2.isImageFile(found2.filename)) {
    let str2 = "INVALID";
    if (tmp2Result.isVideoFile(found2.filename)) {
      str2 = "VIDEO";
    }
    str = str2;
    tmp2Result = urlMatchesFileExtension;
  }
  obj.type = str;
  obj.alt = found2.description;
  obj = { message: tmp2Result, identifier: obj };
  obj = { type: "attachment", attachmentId: found2.id, filename: found2.filename, title: found2.title, size: found2.size };
  obj.sourceMetadata = obj;
  return obj;
};
export const embedMediaToMediaItem = function embedMediaToMediaItem(thumbnail, sourceMetadata, IMAGE) {
  return { type: IMAGE, url: thumbnail.url, proxyUrl: thumbnail.proxyURL, width: thumbnail.width, height: thumbnail.height, placeholder: thumbnail.placeholder, placeholderVersion: thumbnail.placeholderVersion, sourceMetadata, contentType: thumbnail.contentType };
};
export const isVisualUnfurledMediaItem = function isVisualUnfurledMediaItem(width) {
  let tmp = null != width.width;
  if (tmp) {
    tmp = width.width > 0;
  }
  if (tmp) {
    tmp = null != width.height;
  }
  if (tmp) {
    tmp = width.height > 0;
  }
  return tmp;
};
export const getMediaItemDisplayUrl = function getMediaItemDisplayUrl(type) {
  if (null == type) {
    return null;
  } else {
    if ("VIDEO" === type.type) {
      if (null != type.proxyUrl) {
        let str = isDiscordProxiedAssetUrlDefault.toURLSafe(type.proxyUrl);
        str = null;
        if (null != str) {
          const searchParams = str.searchParams;
          searchParams.append("format", "webp");
          str = str.toString();
        }
        return str;
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