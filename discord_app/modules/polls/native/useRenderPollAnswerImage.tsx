// === Module 11869: useRenderPollAnswerImage ===

// Module 11869 (useRenderPollAnswerImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import EmojiTypes from "EmojiTypes" /* 4532 */;
import FastImageDefault from "FastImage" /* 5981 */;
import EmojiDefault from "Emoji" /* 6632 */;
import DraftStore from "DraftStore" /* 7044 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7280 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_7, dependencyMap, importDefault;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const ActivityIndicator = react_native.ActivityIndicator;
const DraftType = DraftStore.DraftType;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, mediaAttachmentState, arg3, width) => {
  let closure_0;
  let closure_1;
  let first;
  let tmp12;
  let tmp13;
  _require = arg0;
  importDefault = arg1;
  const obj = require("react");
  const cResult = obj.c(26);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UploadAttachmentStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp6;
    let tmp19;
    if (cResult[2] === arg1) {
      tmp6 = cResult[3];
    }
    const tmpResult = require("get initialized");
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
    let status;
    [tmp12, tmp13] = react.useState();
    _slicedToArray(react.useState(), 2);
    if (mediaAttachmentState != null) {
      mediaAttachmentState = mediaAttachmentState.mediaAttachmentState;
      if (mediaAttachmentState != null) {
        status = mediaAttachmentState.status;
      }
    }
    if (status === require("PollTypes").PollMediaUploadAttachmentStatus.PREPARING) {
      let tmp35;
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp38 = <ActivityIndicator />;
        cResult[4] = tmp38;
        tmp35 = tmp38;
      } else {
        tmp35 = cResult[4];
      }
      tmp19 = tmp35;
    } else if (null == stateFromStores) {
      let emoji1;
      if (mediaAttachmentState != null) {
        emoji1 = mediaAttachmentState.emoji;
      }
      if (null != emoji1) {
        let tmp26;
        let tmp25;
        const emoji = mediaAttachmentState.emoji;
        if (cResult[12] !== width) {
          size = { width, height: width };
          const obj2 = { fontSize: width };
          cResult[12] = width;
          cResult[13] = size;
          cResult[14] = obj2;
          tmp26 = obj2;
          tmp25 = size;
        } else {
          tmp25 = cResult[13];
          tmp26 = cResult[14];
        }
        let str = emoji.type === tmp(4532).EmojiTypes.UNICODE ? emoji.surrogates : emoji.name;
        if (str == null) {
          str = "";
        }
        if (cResult[15] === emoji.animated) {
          let tmp27;
          if (cResult[16] === emoji.id) {
            tmp27 = cResult[17];
          }
          if (cResult[18] === tmp25) {
            if (cResult[19] === tmp26) {
              if (cResult[20] === str) {
                let tmp31;
                if (cResult[21] === tmp27) {
                  tmp31 = cResult[22];
                }
                tmp19 = tmp31;
              }
            }
          }
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
          const obj4 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
          ({ id: obj9.id, animated: obj9.animated } = emoji);
          const obj8 = AvatarUtilsDefault;
          emojiURL = obj8.getEmojiURL(obj4);
        }
        cResult[15] = emoji.animated;
        cResult[16] = emoji.id;
        cResult[17] = emojiURL;
        tmp27 = emojiURL;
      }
    } else {
      let tmp17;
      let tmp18;
      let tmp16 = arg3;
      const item = stateFromStores.item;
      if (arg3 == null) {
        tmp16 = tmp12;
      }
      if (cResult[5] !== tmp16) {
        const size1 = { width: tmp16, height: tmp16 };
        cResult[5] = tmp16;
        cResult[6] = size1;
        tmp17 = size1;
      } else {
        tmp17 = cResult[6];
      }
      if (cResult[7] !== item.uri) {
        const obj5 = { uri: item.uri };
        cResult[7] = item.uri;
        cResult[8] = obj5;
        tmp18 = obj5;
      } else {
        tmp18 = cResult[8];
      }
      if (cResult[9] === tmp17) {
        if (cResult[10] === tmp18) {
          tmp19 = cResult[11];
        }
      }
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
      let tmp39;
      if (cResult[24] === stateFromStores) {
        tmp39 = cResult[25];
      }
      return tmp39;
    }
    const obj7 = { renderImage: null, upload: stateFromStores, setUploadSize: tmp13 };
    class E {
      constructor() {
        return closure_7.getUpload(closure_0, closure_1, DraftType.Poll);
      }
    }
    cResult[23] = tmp19;
    cResult[24] = stateFromStores;
    cResult[25] = obj7;
    tmp39 = obj7;
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
}) : ((arg0, arg1, mediaAttachmentState, arg3, arg4) => {
  let closure_0;
  let closure_3;
  let closure_4;
  let first;
  let items1;
  let tmp6;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = mediaAttachmentState;
  _slicedToArray = arg3;
  react = arg4;
  const items = [closure_7];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => UploadAttachmentStore.getUpload(closure_0, closure_1, DraftType.Poll));
  [first, tmp6] = react.useState();
  let status;
  const obj2 = react;
  const tmp = _require;
  if (mediaAttachmentState != null) {
    mediaAttachmentState = mediaAttachmentState.mediaAttachmentState;
    if (mediaAttachmentState != null) {
      status = mediaAttachmentState.status;
    }
  }
  const tmp8 = status === tmp(11849).PollMediaUploadAttachmentStatus.PREPARING;
  closure_7 = tmp8;
  let obj3 = {
    renderImage: obj2.useMemo(() => {
      if (closure_7) {
        return <ActivityIndicator />;
      } else if (null != stateFromStores) {
        let tmp15 = closure_3;
        const item = stateFromStores.item;
        if (closure_3 == null) {
          tmp15 = first;
        }
        size = { width: tmp15, height: tmp15 };
        const obj3 = { uri: item.uri };
        return jsx(FastImageDefault, { style: size, source: obj3 });
      } else {
        let emoji1;
        if (mediaAttachmentState != null) {
          emoji1 = mediaAttachmentState.emoji;
        }
        if (null != emoji1) {
          const emoji = mediaAttachmentState.emoji;
          const size1 = { width: fontSize, height: fontSize };
          const obj6 = { fontSize };
          EmojiDefault;
          let str = emoji.type === EmojiTypes.EmojiTypes.UNICODE ? emoji.surrogates : emoji.name;
          if (str == null) {
            str = "";
          }
          let emojiURL;
          if (null != emoji.id) {
            const obj7 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
            ({ id: obj5.id, animated: obj5.animated } = emoji);
            const obj4 = AvatarUtilsDefault;
            emojiURL = obj4.getEmojiURL(obj7);
          }
          return <tmp7 fastImageStyle={size1} textEmojiStyle={obj6} name={str} src={emojiURL} />;
        }
      }
    }, items1),
    upload: stateFromStores,
    setUploadSize: tmp6
  };
  items1 = [mediaAttachmentState, arg4, arg3, stateFromStores, tmp8, first];
  return obj3;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/polls/native/useRenderPollAnswerImage.tsx");

export default tmp2;