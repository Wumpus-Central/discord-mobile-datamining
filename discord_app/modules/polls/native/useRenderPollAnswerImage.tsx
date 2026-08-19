// === Module 11387: useRenderPollAnswerImage ===

// Module 11387 (useRenderPollAnswerImage)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { ActivityIndicator } from "get ActivityIndicator" /* 17 */;
import { DraftType } from "handleChanged" /* 4825 */;
import map from "map" /* 4824 */;
import { EMOJI_URL_BASE_SIZE } from "set" /* 1925 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/polls/native/useRenderPollAnswerImage.tsx");

export default function useRenderPollAnswerImage(arg0, arg1, mediaAttachmentState) {
  const _require = arg0;
  closure_1 = arg1;
  dependencyMap = mediaAttachmentState;
  const callback = arg3;
  const React = arg4;
  let obj = _require(589);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => upload.getUpload(closure_0, closure_1, first.Poll));
  const tmp4 = callback(React.useState(), 2);
  const first = tmp4[0];
  let status;
  if (mediaAttachmentState != null) {
    mediaAttachmentState = mediaAttachmentState.mediaAttachmentState;
    if (mediaAttachmentState != null) {
      status = mediaAttachmentState.status;
    }
  }
  const tmp7 = status === _require(11381).PollMediaUploadAttachmentStatus.PREPARING;
  closure_7 = tmp7;
  obj = {
    renderImage: React.useMemo(() => {
      if (closure_7) {
        return <stateFromStores />;
      } else if (null != stateFromStores) {
        let tmp14 = closure_3;
        if (closure_3 == null) {
          tmp14 = first;
        }
        let obj = { width: null, height: null };
        obj[0] = tmp14;
        obj[1] = tmp14;
        obj[0] = obj;
        obj1 = { uri: null };
        obj1[0] = stateFromStores.item.uri;
        obj[1] = obj1;
        return jsx(callback2(mediaAttachmentState[9]), { width: null, height: null });
      } else {
        let emoji;
        if (mediaAttachmentState != null) {
          emoji = mediaAttachmentState.emoji;
        }
        if (null != emoji) {
          emoji = mediaAttachmentState.emoji;
          obj = { fastImageStyle: null, textEmojiStyle: null, name: null, src: null };
          const obj2 = { width: null, height: null };
          obj2[0] = closure_4;
          obj2[1] = closure_4;
          obj[0] = obj2;
          let obj3 = { fontSize: null };
          obj3[0] = closure_4;
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
            obj4[2] = EMOJI_URL_BASE_SIZE;
            emojiURL = obj3.getEmojiURL(obj4);
          }
          obj[3] = emojiURL;
          return jsx(callback2(mediaAttachmentState[10]), { fastImageStyle: null, textEmojiStyle: null, name: null, src: null });
        }
      }
    }, items1),
    upload: stateFromStores,
    setUploadSize: tmp4[1]
  };
  items1 = [mediaAttachmentState, arg4, arg3, stateFromStores, tmp7, first];
  return obj;
};