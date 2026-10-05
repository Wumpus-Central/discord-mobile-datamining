// discord_app/modules/messages/MosaicMediaType.tsx
import Constants from "../../Constants.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import MediaFormatTesters from "MediaFormatTesters.tsx";
import PlaintextFilePreviewHelpers from "PlaintextFilePreviewHelpers.tsx";
import size from "../../../_runtime/metro/00002__.js";

const MessageAttachmentFlags = Constants.MessageAttachmentFlags;
const re3 = /\.(mp3|m4a|ogg|opus|wav|flac)$/i;
const result = size.fileFinishedImporting("modules/messages/MosaicMediaType.tsx");

export function isVisualMedia(arg0) {
  return "IMAGE" === arg0 || "VIDEO" === arg0 || "CLIP" === arg0 || "VISUAL_PLACEHOLDER" === arg0;
}
export const getMosaicMediaTypeForAttachment = function getMosaicMediaTypeForAttachment(proxy_url, arg1) {
  let filename;
  let height;
  let str;
  let width;
  ({ filename, width, height } = proxy_url);
  if (arg1) {
    if (null != width) {
      if (width > 0) {
        if (null != height) {
          if (height > 0) {
            let str3 = "IMAGE";
            const obj2 = MediaFormatTesters;
            if (!obj2.isImageFile(filename)) {
              let str5 = "INVALID";
              const tmp5Result = MediaFormatTesters;
              if (tmp5Result.isVideoFile(filename)) {
                str5 = "INVALID";
                if (null != proxy_url.proxy_url) {
                  let num2 = proxy_url.flags;
                  const hasFlag = FlagUtils.hasFlag;
                  FlagUtils;
                  if (num2 == null) {
                    num2 = 0;
                  }
                  let str6 = "VIDEO";
                  if (hasFlag(num2, MessageAttachmentFlags.IS_CLIP)) {
                    str6 = "CLIP";
                  }
                  str5 = str6;
                }
              }
              str3 = str5;
            }
            str = str3;
          }
          return str;
        }
      }
    }
  }
  if (null != arg1) {
    if (re3.test(filename)) {
      str = "AUDIO";
    }
  }
  let str2 = "OTHER";
  if (null != proxy_url.url) {
    str2 = "OTHER";
    const obj = PlaintextFilePreviewHelpers;
    if (obj.isPlaintextPreviewableFile(filename)) {
      str2 = "PLAINTEXT_PREVIEW";
    }
  }
  str = str2;
};
export const getMosaicMediaTypeForUnfurledMediaItem = function getMosaicMediaTypeForUnfurledMediaItem(arg0) {
  let contentType;
  let height;
  let width;
  ({ contentType, width, height } = arg0);
  if (null != width) {
    if (width > 0) {
      if (null != height) {
        if (height > 0) {
          const obj = MediaFormatTesters;
          if (obj.isImageContentType(contentType)) {
            return "IMAGE";
          } else {
            const tmpResult = MediaFormatTesters;
            if (tmpResult.isVideoContentType(contentType)) {
              return "VIDEO";
            }
          }
        }
      }
    }
  }
  return "VISUAL_PLACEHOLDER";
};
