// === Module 11510: useRenderPollAnswerImage ===

// Module 11510 (useRenderPollAnswerImage)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { ActivityIndicator } from "get ActivityIndicator";
import { DraftType } from "handleChanged";
import map from "map";
import { EMOJI_URL_BASE_SIZE } from "set";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("get ActivityIndicator").fileFinishedImporting("modules/polls/native/useRenderPollAnswerImage.tsx");

export default function useRenderPollAnswerImage(arg0, arg1, mediaAttachmentState) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = mediaAttachmentState;
  const callback = arg3;
  const React = arg4;
  let obj = _require(589);
  const items = [map];
  const stateFromStores = obj.useStateFromStores(items, () => tmp7.getUpload(closure_0, closure_1, first.Poll));
  const tmp4 = callback(React.useState(), 2);
  const first = tmp4[0];
  let status;
  if (mediaAttachmentState != null) {
    mediaAttachmentState = mediaAttachmentState.mediaAttachmentState;
    if (mediaAttachmentState != null) {
      status = mediaAttachmentState.status;
    }
  }
  const tmp7 = status === _require(11504).PollMediaUploadAttachmentStatus.PREPARING;
  map = tmp7;
  obj = {
    renderImage: React.useMemo(() => {
      if (map) {
        return outer1_9(stateFromStores, {});
      } else if (null != stateFromStores) {
        let tmp14 = _slicedToArray;
        if (_slicedToArray == null) {
          tmp14 = first;
        }
        let obj = { style: null, source: null };
        obj = { width: null, height: null };
        obj[0] = tmp14;
        obj[1] = tmp14;
        obj[0] = obj;
        const obj1 = { uri: null };
        obj1[0] = stateFromStores.item.uri;
        obj[1] = obj1;
        return outer1_9(callback2(mediaAttachmentState[9]), obj);
      } else {
        let emoji;
        if (mediaAttachmentState != null) {
          emoji = tmp20.emoji;
        }
        if (null != emoji) {
          emoji = tmp20.emoji;
          obj = { fastImageStyle: null, textEmojiStyle: null, name: null, src: null };
          const obj2 = { width: null, height: null };
          obj2[0] = noop;
          obj2[1] = noop;
          obj[0] = obj2;
          let obj3 = { fontSize: null };
          obj3[0] = noop;
          obj[1] = obj3;
          let str = emoji.type === callback(mediaAttachmentState[11]).EmojiTypes.UNICODE ? emoji.surrogates : emoji.name;
          if (str == null) {
            str = "";
          }
          obj[2] = str;
          let emojiURL;
          if (null != emoji.id) {
            obj3 = callback2(mediaAttachmentState[12]);
            const obj4 = { id: null, animated: null, size: null };
            ({ id: obj5[0], animated: obj5[1] } = emoji);
            obj4[2] = outer1_8;
            emojiURL = obj3.getEmojiURL(obj4);
          }
          obj[3] = emojiURL;
          return outer1_9(callback2(mediaAttachmentState[10]), obj);
        }
      }
    }, items1),
    upload: stateFromStores,
    setUploadSize: tmp4[1]
  };
  items1 = [mediaAttachmentState, arg4, arg3, stateFromStores, tmp7, first];
  return obj;
};