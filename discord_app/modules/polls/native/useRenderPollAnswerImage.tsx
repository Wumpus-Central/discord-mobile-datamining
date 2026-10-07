// === Module 11869: useRenderPollAnswerImage ===

// Module 11869 (useRenderPollAnswerImage)
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import EmojiTypes from "EmojiTypes" /* 4532 */;
import FastImageDefault from "FastImage" /* 5981 */;
import EmojiDefault from "Emoji" /* 6632 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7280 */;

const require = globalThis.__r;

require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
const DraftType = fn(7044).DraftType;
const EMOJI_URL_BASE_SIZE = fn(1380).EMOJI_URL_BASE_SIZE;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/polls/native/useRenderPollAnswerImage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, mediaAttachmentState, arg3, width) => {
  _require = arg0;
  importDefault = arg1;
  const cResult = require("c").c(26);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UploadAttachmentStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp6 = cResult[3];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp6);
    const tmpResult = tmp(504);
    let status;
    [tmp12, tmp13] = noop.useState();
    if (mediaAttachmentState != null) {
      mediaAttachmentState = mediaAttachmentState.mediaAttachmentState;
      if (mediaAttachmentState != null) {
        status = mediaAttachmentState.status;
      }
    }
    if (status === tmp(11849).PollMediaUploadAttachmentStatus.PREPARING) {
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp38 = <ActivityIndicator />;
        cResult[4] = tmp38;
      }
    } else {
      if (null == stateFromStores) {
        let emoji1;
        if (mediaAttachmentState != null) {
          emoji1 = mediaAttachmentState.emoji;
        }
        if (null != emoji1) {
          const emoji = mediaAttachmentState.emoji;
          if (cResult[12] !== width) {
            const size = { width, height: width };
            const obj2 = { fontSize: width };
            cResult[12] = width;
            cResult[13] = size;
            cResult[14] = obj2;
            let tmp26 = obj2;
            let tmp25 = size;
          } else {
            tmp25 = cResult[13];
            tmp26 = cResult[14];
          }
          let str = emoji.type === tmp(4532).EmojiTypes.UNICODE ? emoji.surrogates : emoji.name;
          if (str == null) {
            str = "";
          }
          if (cResult[15] === emoji.animated) {
            if (cResult[16] === emoji.id) {
              let tmp27 = cResult[17];
            }
            if (cResult[18] === tmp25) {
              if (cResult[19] === tmp26) {
                if (cResult[20] === str) {
                  if (cResult[21] === tmp27) {
                    let tmp31 = cResult[22];
                  }
                  let tmp19 = tmp31;
                }
              }
            }
            const obj3 = { fastImageStyle: tmp25, textEmojiStyle: tmp26, name: str, src: tmp27 };
            const tmp34 = jsx(EmojiDefault, { fastImageStyle: tmp25, textEmojiStyle: tmp26, name: str, src: tmp27 });
            cResult[18] = tmp25;
            cResult[19] = tmp26;
            cResult[20] = str;
            class E {
              constructor() {
                return closure_7.getUpload(closure_0, closure_1, DraftType.Poll);
              }
            }
            cResult[21] = tmp27;
            cResult[22] = tmp34;
            tmp31 = tmp34;
          }
          let emojiURL;
          if (null != emoji.id) {
            const obj4 = { id: null, animated: null, size: null };
            ({ id: obj9.id, animated: obj9.animated } = emoji);
            obj4.size = EMOJI_URL_BASE_SIZE;
            emojiURL = AvatarUtilsDefault.getEmojiURL(obj4);
          }
          cResult[15] = emoji.animated;
          cResult[16] = emoji.id;
          cResult[17] = emojiURL;
          tmp27 = emojiURL;
        }
      } else {
        let tmp16 = arg3;
        const item = stateFromStores.item;
        if (arg3 == null) {
          tmp16 = tmp12;
        }
        if (cResult[5] !== tmp16) {
          const size1 = { width: tmp16, height: tmp16 };
          cResult[5] = tmp16;
          cResult[6] = size1;
          let tmp17 = size1;
        } else {
          tmp17 = cResult[6];
        }
        if (cResult[7] !== item.uri) {
          const obj5 = { uri: item.uri };
          cResult[7] = item.uri;
          cResult[8] = obj5;
          let tmp18 = obj5;
        } else {
          tmp18 = cResult[8];
        }
        if (cResult[9] === tmp17) {
          if (cResult[10] === tmp18) {
            tmp19 = cResult[11];
          }
        }
        const obj6 = { style: tmp17, source: tmp18 };
        const tmp22 = jsx(FastImageDefault, { style: tmp17, source: tmp18 });
        cResult[9] = tmp17;
        cResult[10] = tmp18;
        class E {
          constructor() {
            return closure_7.getUpload(closure_0, closure_1, DraftType.Poll);
          }
        }
        cResult[11] = tmp22;
        tmp19 = tmp22;
      }
      if (cResult[23] === tmp19) {
        if (cResult[24] === stateFromStores) {
          let tmp40 = cResult[25];
        }
        return tmp40;
      }
      const obj7 = { renderImage: tmp19, upload: stateFromStores, setUploadSize: tmp13 };
      cResult[23] = tmp19;
      cResult[24] = stateFromStores;
      cResult[25] = obj7;
      tmp40 = obj7;
    }
    const tmp11 = _slicedToArray(noop.useState(), 2);
  }
  class E {
    constructor() {
      return closure_7.getUpload(closure_0, closure_1, DraftType.Poll);
    }
  }
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = E;
  tmp6 = E;
  const obj = require("c");
}) : ((arg0, arg1, mediaAttachmentState, arg3, arg4) => {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = mediaAttachmentState;
  _slicedToArray = arg3;
  noop = arg4;
  const items = [closure_7];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UploadAttachmentStore.getUpload(closure_0, closure_1, DraftType.Poll));
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
  let obj3 = { renderImage: null, upload: stateFromStores, setUploadSize: tmp4[1] };
  const items1 = [mediaAttachmentState, arg4, arg3, stateFromStores, tmp7, first];
  obj3.renderImage = noop.useMemo(() => {
    if (closure_7) {
      return <ActivityIndicator />;
    } else if (null != stateFromStores) {
      let tmp14 = closure_3;
      if (closure_3 == null) {
        tmp14 = first;
      }
      const obj2 = { style: null, source: null };
      const size = { width: tmp14, height: tmp14 };
      obj2.style = size;
      const obj3 = { uri: stateFromStores.item.uri };
      obj2.source = obj3;
      return jsx(FastImageDefault, { style: null, source: null });
    } else {
      let emoji1;
      if (mediaAttachmentState != null) {
        emoji1 = mediaAttachmentState.emoji;
      }
      if (null != emoji1) {
        const emoji = mediaAttachmentState.emoji;
        const obj = { fastImageStyle: null, textEmojiStyle: null, name: null, src: null };
        const size1 = { width: fontSize, height: fontSize };
        obj.fastImageStyle = size1;
        const obj6 = { fontSize };
        obj.textEmojiStyle = obj6;
        let str = emoji.type === EmojiTypes.EmojiTypes.UNICODE ? emoji.surrogates : emoji.name;
        if (str == null) {
          str = "";
        }
        obj.name = str;
        let emojiURL;
        if (null != emoji.id) {
          const obj7 = { id: null, animated: null, size: null };
          ({ id: obj5.id, animated: obj5.animated } = emoji);
          obj7.size = EMOJI_URL_BASE_SIZE;
          emojiURL = AvatarUtilsDefault.getEmojiURL(obj7);
        }
        obj.src = emojiURL;
        return jsx(EmojiDefault, { fastImageStyle: null, textEmojiStyle: null, name: null, src: null });
      }
    }
  }, items1);
  return obj3;
});