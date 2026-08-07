// discord_app/modules/messages/MosaicMediaType.tsx
import { MessageAttachmentFlags } from "ME";
import { urlMatchesFileExtension } from "MediaFormatTesters.tsx";
import { set } from "PlaintextFilePreviewHelpers.tsx";

const re3 = /\.(mp3|m4a|ogg|opus|wav|flac)$/i;
const result = require("hasFlag").fileFinishedImporting("modules/messages/MosaicMediaType.tsx");

export function isVisualMedia(arg0) {
  let tmp = "IMAGE" === arg0;
  if (!tmp) {
    tmp = "VIDEO" === arg0;
  }
  if (!tmp) {
    tmp = "CLIP" === arg0;
  }
  if (!tmp) {
    tmp = "VISUAL_PLACEHOLDER" === arg0;
  }
  return tmp;
}
export const getMosaicMediaTypeForAttachment = function getMosaicMediaTypeForAttachment(proxy_url, arg1) {
  let filename;
  let height;
  let width;
  ({ filename, width, height } = proxy_url);
  if (arg1) {
    if (null != width) {
      if (width > 0) {
        if (null != height) {
          if (height > 0) {
            let str3 = "IMAGE";
            if (!obj2.isImageFile(filename)) {
              let tmp5Result = tmp5(4489);
              let str5 = "INVALID";
              if (tmp5Result.isVideoFile(filename)) {
                str5 = "INVALID";
                if (null != proxy_url.proxy_url) {
                  tmp5Result = tmp5(1384);
                  let num2 = proxy_url.flags;
                  if (num2 == null) {
                    num2 = 0;
                  }
                  let str6 = "VIDEO";
                  if (tmp5Result.hasFlag(num2, MessageAttachmentFlags.IS_CLIP)) {
                    str6 = "CLIP";
                  }
                  str5 = str6;
                }
              }
              str3 = str5;
            }
            let str = str3;
            obj2 = urlMatchesFileExtension;
          }
          return str;
        }
      }
    }
  }
  if (null != arg1) {
    if (regex.test(filename)) {
      str = "AUDIO";
    }
  }
  let str2 = "OTHER";
  if (null != proxy_url.url) {
    str2 = "OTHER";
    if (obj.isPlaintextPreviewableFile(filename)) {
      str2 = "PLAINTEXT_PREVIEW";
    }
    obj = set;
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
          if (obj.isImageContentType(contentType)) {
            return "IMAGE";
          } else {
            if (tmpResult.isVideoContentType(contentType)) {
              return "VIDEO";
            }
            tmpResult = tmp(4489);
          }
          obj = urlMatchesFileExtension;
          tmp = require;
        }
      }
    }
  }
  return "VISUAL_PLACEHOLDER";
};