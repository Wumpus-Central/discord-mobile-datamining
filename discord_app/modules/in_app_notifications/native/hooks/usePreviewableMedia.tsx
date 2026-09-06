// discord_app/modules/in_app_notifications/native/hooks/usePreviewableMedia.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import MediaFormatTesters from "../../../messages/MediaFormatTesters.tsx";
import isForwardMessageDefault from "../../../forwarding/isForwardMessage.tsx";
import inlineStyles from "../../../../../_runtime/08453_inlineStyles.js";
import CirclePlayIcon from "../../../../design/components/Icon/native/redesign/generated/CirclePlayIcon.tsx";
import WaveformIcon from "../../../../design/components/Icon/native/redesign/generated/WaveformIcon.tsx";
import FileIcon from "../../../../design/components/Icon/native/redesign/generated/FileIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const inlineStylesDefault = inlineStyles;

require = fn;
function VoiceMessageIcon() {
  obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_MOD_STRONG);
  const tmp = closure_11();
  obj = { children: null };
  const token1 = useToken.useToken(nativeDefault.colors.BACKGROUND_MOD_SUBTLE);
  const size = { width: "100%", height: "100%", viewBox: "0 0 64 61", fill: "none", children: null };
  size.children = React5(inlineStyles.Path, {
    d: "M22.2188 59.8545C19.5607 61.6263 16.0003 59.7208 16 56.5264V48C7.16344 48 2.5772e-07 40.8366 0 32V16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V32C64 40.8366 56.8366 48 48 48H40L22.2188 59.8545Z",
    fill: token,
    stroke: token1,
  });
  const items = [React5(inlineStylesDefault, size)];
  obj = { style: tmp.voiceMessageIconOverlay, children: null };
  const items1 = [
    React5(CirclePlayIcon.CirclePlayIcon, { size: "md", color: "background-brand", secondaryColor: "white" }),
    React5(WaveformIcon.WaveformIcon, { size: "md", color: "background-brand" }),
  ];
  obj.children = items1;
  items[1] = React6(React4, obj);
  obj.children = items;
  return React6(React7, obj);
}
function getBasePreviewableMedia(arg0) {
  ({ message, isForward } = arg0);
  const items = [];
  if (message.attachments.length > 0) {
    const attachments = message.attachments;
    if (message.hasFlag(constants2.IS_VOICE_MESSAGE)) {
      const first = attachments[0];
      obj = { id: null, type: null, media: null, icon: null, parentType: null };
      const _HermesInternal5 = HermesInternal;
      obj.id = "" + first.id + "-" + obj.VOICE_MESSAGE;
      obj.type = obj.VOICE_MESSAGE;
      obj.media = first;
      obj.icon = React5(VoiceMessageIcon, {});
      let str10 = null;
      if (isForward) {
        str10 = "forward";
      }
      obj.parentType = str10;
      items.push(obj);
    } else {
      const iter = attachments[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp6 = nextResult;
        let filename = nextResult.filename;
        let tmp7 = filename;
        obj = MediaFormatTesters;
        if (obj.isImageFile(filename)) {
          obj = { id: null, type: null, media: null, parentType: null };
          let _HermesInternal4 = HermesInternal;
          obj.id = "" + tmp6.id + "-" + obj.IMAGE;
          obj.type = obj.IMAGE;
          obj.media = tmp6;
          let str7 = null;
          if (isForward) {
            str7 = "forward";
          }
          obj.parentType = str7;
          let arr = items.push(obj);
        } else {
          let tmp8Result = MediaFormatTesters;
          if (tmp8Result.isVideoFile(tmp7)) {
            let obj1 = { id: null, type: null, media: null, parentType: null };
            let _HermesInternal3 = HermesInternal;
            obj1.id = "" + tmp6.id + "-" + obj.VIDEO;
            obj1.type = obj.VIDEO;
            obj1.media = tmp6;
            let str6 = null;
            if (isForward) {
              str6 = "forward";
            }
            obj1.parentType = str6;
            let arr1 = items.push(obj1);
          } else {
            tmp8Result = MediaFormatTesters;
            let push = items.push;
            let obj2 = { id: null, type: null, media: null, icon: null, parentType: null };
            let id = tmp6.id;
            let tmp13 = obj;
            if (tmp8Result.isAudioFile(tmp7)) {
              let _HermesInternal2 = HermesInternal;
              obj2.id = "" + id + "-" + tmp13.AUDIO;
              obj2.type = tmp13.AUDIO;
              obj2.media = tmp6;
              obj2.icon = React5(CirclePlayIcon.CirclePlayIcon, {
                size: "lg",
                color: "background-brand",
                secondaryColor: "white",
              });
              let str5 = null;
              if (isForward) {
                str5 = "forward";
              }
              obj2.parentType = str5;
              let arr2 = push(obj2);
            } else {
              let _HermesInternal = HermesInternal;
              obj2.id = "" + id + "-" + tmp13.FILE;
              obj2.type = tmp13.FILE;
              obj2.media = tmp6;
              let obj3 = { size: "lg", color: nativeDefault.colors.ICON_SUBTLE };
              obj2.icon = React5(FileIcon.FileIcon, obj3);
              let str4 = null;
              if (isForward) {
                str4 = "forward";
              }
              obj2.parentType = str4;
              let arr3 = push(obj2);
            }
          }
        }
        continue;
      }
    }
  }
  const iter2 = message.embeds[Symbol.iterator]();
  const nextResult1 = iter2.next();
  while (iter2 !== undefined) {
    let tmp32 = nextResult1;
    if (nextResult1.type === constants.GIFV) {
      let obj4 = { id: null, type: null, media: null, parentType: null };
      let _HermesInternal6 = HermesInternal;
      obj4.id = "" + tmp32.id + "-" + obj.GIF;
      obj4.type = obj.GIF;
      obj4.media = tmp32;
      let str11 = null;
      if (isForward) {
        str11 = "forward";
      }
      obj4.parentType = str11;
      let arr4 = items.push(obj4);
    }
    continue;
  }
  if (message.stickerItems.length > 0) {
    const first1 = message.stickerItems[0];
    const obj5 = { id: null, type: null, media: null, parentType: null };
    const _HermesInternal7 = HermesInternal;
    obj5.id = "" + first1.id + "-" + obj.STICKER;
    obj5.type = obj.STICKER;
    obj5.media = first1;
    let str12 = null;
    if (isForward) {
      str12 = "forward";
    }
    obj5.parentType = str12;
    items.push(obj5);
  }
  return items;
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1074);
({ MessageEmbedTypes: hasOwnProperty, MessageFlags: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let PreviewableMediaTypes = {
  IMAGE: "image",
  VIDEO: "video",
  AUDIO: "audio",
  FILE: "file",
  STICKER: "sticker",
  GIF: "gif",
  VOICE_MESSAGE: "voice_message",
};
const createStyles = fn(4560);
PreviewableMediaTypes = { voiceMessageIconOverlay: null };
PreviewableMediaTypes = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
PreviewableMediaTypes.flexDirection = "row";
PreviewableMediaTypes.alignItems = "center";
PreviewableMediaTypes.justifyContent = "center";
PreviewableMediaTypes.paddingBottom = 13;
PreviewableMediaTypes.voiceMessageIconOverlay = PreviewableMediaTypes;
let closure_11 = createStyles.createStyles(PreviewableMediaTypes);
let size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/hooks/usePreviewableMedia.tsx");

export { PreviewableMediaTypes };
export const usePreviewableMedia = function usePreviewableMedia(message) {
  let items = [message];
  return noop.useMemo(() => {
    const items = [];
    obj = { message, isForward: false };
    const items1 = [...getBasePreviewableMedia(obj)];
    items.push.apply(items1);
    if (isForwardMessageDefault(message)) {
      if (message.messageSnapshots.length > 0) {
        obj = { message: message.messageSnapshots[0].message, isForward: true };
        const push = items.push;
        const items2 = [];
        HermesBuiltin.arraySpread(getBasePreviewableMedia(obj), 0);
        HermesBuiltin.apply(items2, items);
      }
    }
    return items;
  }, items);
};
