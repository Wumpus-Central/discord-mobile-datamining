// === Module 12226: useRenderPollAnswerImage ===

// Module 12226 (useRenderPollAnswerImage)
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import EmojiTypes from "EmojiTypes" /* 4216 */;
import FastImageDefault from "FastImage" /* 5587 */;
import EmojiDefault from "Emoji" /* 7130 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 4900 */;

require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
const DraftType = fn(4901).DraftType;
const EMOJI_URL_BASE_SIZE = fn(1374).EMOJI_URL_BASE_SIZE;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/polls/native/useRenderPollAnswerImage.tsx");

export default function useRenderPollAnswerImage(arg0, arg1, mediaAttachmentState, arg3, arg4) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = mediaAttachmentState;
  _slicedToArray = arg3;
  noop = arg4;
  let obj = require("initialize");
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => UploadAttachmentStore.getUpload(closure_0, closure_1, DraftType.Poll));
  const tmp4 = _slicedToArray(noop.useState(), 2);
  const first = tmp4[0];
  let status;
  if (mediaAttachmentState != null) {
    mediaAttachmentState = mediaAttachmentState.mediaAttachmentState;
    if (mediaAttachmentState != null) {
      status = mediaAttachmentState.status;
    }
  }
  const tmp7 = status === require("PollTypes").PollMediaUploadAttachmentStatus.PREPARING;
  closure_7 = tmp7;
  obj = { renderImage: null, upload: stateFromStores, setUploadSize: tmp4[1] };
  const items1 = [mediaAttachmentState, arg4, arg3, stateFromStores, tmp7, first];
  obj.renderImage = noop.useMemo(() => {
    if (closure_7) {
      return <ActivityIndicator />;
    } else if (null != stateFromStores) {
      let tmp14 = closure_3;
      if (closure_3 == null) {
        tmp14 = first;
      }
      let obj = { style: null, source: null };
      const size = { width: tmp14, height: tmp14 };
      obj.style = size;
      obj = { uri: stateFromStores.item.uri };
      obj.source = obj;
      return jsx(FastImageDefault, { uri: stateFromStores.item.uri });
    } else {
      let emoji;
      if (closure_2 != null) {
        emoji = tmp20.emoji;
      }
      if (null != emoji) {
        emoji = tmp20.emoji;
        obj = { fastImageStyle: null, textEmojiStyle: null, name: null, src: null };
        const size1 = { width: fontSize, height: fontSize };
        obj.fastImageStyle = size1;
        const obj1 = { fontSize };
        obj.textEmojiStyle = obj1;
        let str = emoji.type === EmojiTypes.EmojiTypes.UNICODE ? emoji.surrogates : emoji.name;
        if (str == null) {
          str = "";
        }
        obj.name = str;
        let emojiURL;
        if (null != emoji.id) {
          const obj2 = { id: null, animated: null, size: null };
          ({ id: obj5.id, animated: obj5.animated } = emoji);
          obj2.size = EMOJI_URL_BASE_SIZE;
          emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
        }
        obj.src = emojiURL;
        return jsx(EmojiDefault, { fastImageStyle: null, textEmojiStyle: null, name: null, src: null });
      }
    }
  }, items1);
  return obj;
};