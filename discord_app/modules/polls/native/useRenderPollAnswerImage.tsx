// discord_app/modules/polls/native/useRenderPollAnswerImage.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { ActivityIndicator } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { DraftType } from "../../../stores/DraftStore.tsx";
import closure_7 from "../../../stores/UploadAttachmentStore.tsx";
import { EMOJI_URL_BASE_SIZE } from "../../emojis/EmojiConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/polls/native/useRenderPollAnswerImage.tsx");

export default function useRenderPollAnswerImage(arg0, arg1, mediaAttachmentState) {
  const _require = arg0;
  closure_1 = arg1;
  dependencyMap = mediaAttachmentState;
  const callback = arg3;
  const React = arg4;
  let obj = initialize;
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
  const tmp7 = status === require("../PollTypes.tsx").PollMediaUploadAttachmentStatus.PREPARING;
  closure_7 = tmp7;
  obj = {
    renderImage: React.useMemo(() => {
      if (closure_7) {
        return closure_1_9(stateFromStores, {});
      } else if (null != stateFromStores) {
        let tmp14 = closure_3;
        if (closure_3 == null) {
          tmp14 = first;
        }
        let obj = { style: null, source: null };
        obj = { width: null, height: null };
        obj[0] = tmp14;
        obj[1] = tmp14;
        obj[0] = obj;
        obj1 = { uri: null };
        obj1[0] = stateFromStores.item.uri;
        obj[1] = obj1;
        return closure_1_9(callback2(mediaAttachmentState[9]), obj);
      } else {
        let emoji;
        if (mediaAttachmentState != null) {
          emoji = tmp20.emoji;
        }
        if (null != emoji) {
          emoji = tmp20.emoji;
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
            obj4[2] = closure_1_8;
            emojiURL = obj3.getEmojiURL(obj4);
          }
          obj[3] = emojiURL;
          return closure_1_9(callback2(mediaAttachmentState[10]), obj);
        }
      }
    }, items1),
    upload: stateFromStores,
    setUploadSize: tmp4[1]
  };
  items1 = [mediaAttachmentState, arg4, arg3, stateFromStores, tmp7, first];
  return obj;
};