// discord_app/modules/in_app_notifications/native/hooks/usePreviewableMedia.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../../design/tokens/native/useToken.tsx";
import urlMatchesFileExtension from "../../../messages/MediaFormatTesters.tsx";
import inlineStyles from "../../../../../_runtime/08241_inlineStyles.js";
import inlineStylesDefault from "../../../../../_runtime/08241_inlineStyles.js";
import CirclePlayIcon from "../../../../design/components/Icon/native/redesign/generated/CirclePlayIcon.tsx";
import WaveformIcon from "../../../../design/components/Icon/native/redesign/generated/WaveformIcon.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function VoiceMessageIcon() {
  obj = map;
  const token = obj.useToken(ThemesDefault.colors.BACKGROUND_MOD_STRONG);
  obj1 = map;
  obj = { children: null };
  const token1 = obj1.useToken(ThemesDefault.colors.BACKGROUND_MOD_SUBTLE);
  obj = { width: "100%", height: "100%", viewBox: "0 0 64 61", fill: "none", children: null };
  const tmp = callback3();
  obj[4] = callback(inlineStyles.Path, { d: "M22.2188 59.8545C19.5607 61.6263 16.0003 59.7208 16 56.5264V48C7.16344 48 2.5772e-07 40.8366 0 32V16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V32C64 40.8366 56.8366 48 48 48H40L22.2188 59.8545Z", fill: token, stroke: token1 });
  const items = [callback(inlineStylesDefault, obj), ];
  obj1 = { style: tmp.voiceMessageIconOverlay, children: null };
  const items1 = [callback(CirclePlayIcon.CirclePlayIcon, { size: "md", color: "background-brand", secondaryColor: "white" }), callback(WaveformIcon.WaveformIcon, { size: "md", color: "background-brand" })];
  obj1[1] = items1;
  items[1] = callback2(closure_4, obj1);
  obj[0] = items;
  return callback2(closure_9, obj);
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
      obj[0] = "" + first.id + "-" + obj.VOICE_MESSAGE;
      obj[1] = obj.VOICE_MESSAGE;
      obj[2] = first;
      obj[3] = callback(VoiceMessageIcon, {});
      let str10 = null;
      if (isForward) {
        str10 = "forward";
      }
      obj[4] = str10;
      items.push(obj);
    } else {
      const iter = attachments[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp6 = nextResult;
        let filename = nextResult.filename;
        let tmp7 = filename;
        let tmp8 = require;
        let tmp9 = dependencyMap;
        obj = urlMatchesFileExtension;
        if (obj.isImageFile(filename)) {
          obj = { id: null, type: null, media: null, parentType: null };
          let tmp22 = nextResult;
          let tmp23 = obj;
          let _HermesInternal4 = HermesInternal;
          obj[0] = "" + tmp6.id + "-" + obj.IMAGE;
          obj[1] = obj.IMAGE;
          obj[2] = tmp6;
          let str7 = null;
          if (isForward) {
            str7 = "forward";
          }
          obj[3] = str7;
          let arr = items.push(obj);
        } else {
          let tmp8Result = tmp8(4671);
          let tmp10 = filename;
          if (tmp8Result.isVideoFile(tmp7)) {
            obj1 = { id: null, type: null, media: null, parentType: null };
            let tmp19 = nextResult;
            let tmp20 = obj;
            let _HermesInternal3 = HermesInternal;
            obj1[0] = "" + tmp6.id + "-" + obj.VIDEO;
            obj1[1] = obj.VIDEO;
            obj1[2] = tmp6;
            let str6 = null;
            if (isForward) {
              str6 = "forward";
            }
            obj1[3] = str6;
            let arr1 = items.push(obj1);
          } else {
            tmp8Result = tmp8(4671);
            let tmp11 = filename;
            let push = items.push;
            let obj2 = { id: null, type: null, media: null, icon: null, parentType: null };
            let tmp12 = nextResult;
            let id = tmp6.id;
            let tmp13 = obj;
            if (tmp8Result.isAudioFile(tmp7)) {
              let _HermesInternal2 = HermesInternal;
              obj2[0] = "" + id + "-" + tmp13.AUDIO;
              obj2[1] = tmp13.AUDIO;
              obj2[2] = tmp6;
              let tmp17 = callback;
              obj2[3] = callback(tmp8(10213).CirclePlayIcon, { size: "lg", color: "background-brand", secondaryColor: "white" });
              let str5 = null;
              if (isForward) {
                str5 = "forward";
              }
              obj2[4] = str5;
              let arr2 = push(obj2);
            } else {
              let _HermesInternal = HermesInternal;
              obj2[0] = "" + id + "-" + tmp13.FILE;
              obj2[1] = tmp13.FILE;
              obj2[2] = tmp6;
              let tmp14 = callback;
              let obj3 = { size: "lg", color: null };
              let tmp15 = importDefault;
              obj3[1] = ThemesDefault.colors.ICON_SUBTLE;
              obj2[3] = callback(tmp8(10218).FileIcon, obj3);
              let str4 = null;
              if (isForward) {
                str4 = "forward";
              }
              obj2[4] = str4;
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
    let tmp33 = constants;
    if (nextResult1.type === constants.GIFV) {
      let obj4 = { id: null, type: null, media: null, parentType: null };
      let tmp34 = nextResult1;
      let tmp35 = obj;
      let _HermesInternal6 = HermesInternal;
      obj4[0] = "" + tmp32.id + "-" + obj.GIF;
      obj4[1] = obj.GIF;
      obj4[2] = tmp32;
      let str11 = null;
      if (isForward) {
        str11 = "forward";
      }
      obj4[3] = str11;
      let arr4 = items.push(obj4);
    }
    continue;
  }
  if (message.stickerItems.length > 0) {
    const first1 = message.stickerItems[0];
    const obj5 = { id: null, type: null, media: null, parentType: null };
    const _HermesInternal7 = HermesInternal;
    obj5[0] = "" + first1.id + "-" + obj.STICKER;
    obj5[1] = obj.STICKER;
    obj5[2] = first1;
    let str12 = null;
    if (isForward) {
      str12 = "forward";
    }
    obj5[3] = str12;
    items.push(obj5);
  }
  return items;
}
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ MessageEmbedTypes: c5, MessageFlags: closure_6 } = ME);
({ jsx: error, jsxs: closure_8, Fragment: c9 } = jsxProd);
let obj = { IMAGE: "image", VIDEO: "video", AUDIO: "audio", FILE: "file", STICKER: "sticker", GIF: "gif", VOICE_MESSAGE: "voice_message" };
obj = { voiceMessageIconOverlay: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.flexDirection = "row";
obj.alignItems = "center";
obj.justifyContent = "center";
obj.paddingBottom = 13;
obj[0] = obj;
let closure_11 = createCacheKey.createStyles(obj);
const result = require("set").fileFinishedImporting("modules/in_app_notifications/native/hooks/usePreviewableMedia.tsx");

export const PreviewableMediaTypes = obj;
export const usePreviewableMedia = function usePreviewableMedia(message) {
  closure_0 = message;
  let items = [message];
  return React.useMemo(() => {
    const items = [];
    obj = { message: closure_0, isForward: false };
    const items1 = [...closure_1_13(obj)];
    items.push.apply(items1);
    if (closure_1_1(closure_1_2[12])(closure_0)) {
      if (tmp2.messageSnapshots.length > 0) {
        obj = { message: null, isForward: true };
        obj[0] = tmp2.messageSnapshots[0].message;
        const push = items.push;
        const items2 = [];
        HermesBuiltin.arraySpread(closure_1_13(obj), 0);
        HermesBuiltin.apply(items2, items);
      }
    }
    return items;
  }, items);
};