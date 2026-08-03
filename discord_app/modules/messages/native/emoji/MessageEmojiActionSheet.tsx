// === Module 9420: MessageStandardEmojiActionSheet ===

// Module 9420 (MessageStandardEmojiActionSheet)
import "noop";
import { View } from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "ME";

const require = arg1;
function MessageStandardEmojiActionSheet(emojiNode) {
  let _require;
  let obj = _require(514);
  const v4Result = obj.v4();
  _require = v4Result;
  obj = {
    startExpanded: true,
    onDismiss() {
      let obj = outer1_1(outer1_2[8]);
      obj = { nonce: c0 };
      obj.track(outer1_4.CLOSE_POPOUT, obj);
    },
    children: null
  };
  obj = { style: callback().contentWrapper, children: null };
  obj[1] = jsx(importDefault(9421), { emojiNode: emojiNode.emojiNode, nonce: v4Result });
  obj[2] = <View style={callback().contentWrapper}>{null}</View>;
  return jsx(_require(5247).BottomSheet, { style: callback().contentWrapper, children: null });
}
function MessageCustomEmojiActionSheet(emojiNode) {
  emojiNode = emojiNode.emojiNode;
  let _require;
  let obj = _require(9427);
  obj = { emojiId: emojiNode.id };
  const emojiAndSource = obj.useEmojiAndSource(obj);
  if (emojiAndSource.isFetching) {
    return null;
  } else {
    const v4Result = tmp2(514).v4();
    _require = v4Result;
    obj = { startExpanded: true, onDismiss: null, children: null };
    obj[1] = function onDismiss() {
      let obj = outer1_1(outer1_2[8]);
      obj = { nonce: c0 };
      obj.track(outer1_4.CLOSE_POPOUT, obj);
    };
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.contentWrapper;
    const obj2 = { emojiNode: null, sourceType: null, expressionSourceApplication: null, expressionSourceGuild: null, customEmojiFromJoinedGuild: null, hasJoinedEmojiSourceGuild: null, nonce: null };
    obj2[0] = emojiNode;
    obj2[1] = tmp5;
    obj2[2] = tmp7;
    obj2[3] = tmp6;
    obj2[4] = tmp9;
    obj2[5] = tmp8;
    obj2[6] = v4Result;
    obj1[1] = jsx(importDefault(9428), { emojiNode: null, sourceType: null, expressionSourceApplication: null, expressionSourceGuild: null, customEmojiFromJoinedGuild: null, hasJoinedEmojiSourceGuild: null, nonce: null });
    obj[2] = <View style={null}>{null}</View>;
    return jsx(tmp2(5247).BottomSheet, { startExpanded: true, onDismiss: null, children: null });
  }
  tmp = callback();
}
let num = 0;
if (set.isAndroid()) {
  num = 16;
}
let closure_6 = createCacheKey.createStyles({ contentWrapper: { paddingHorizontal: 16, paddingBottom: num } });
const result = set.fileFinishedImporting("modules/messages/native/emoji/MessageEmojiActionSheet.tsx");

export default function MessageEmojiActionSheet(emojiNode) {
  emojiNode = emojiNode.emojiNode;
  if ("surrogate" in emojiNode) {
    let obj = { emojiNode: null };
    obj[0] = emojiNode;
    let tmpResult = tmp(MessageStandardEmojiActionSheet, obj);
  } else {
    obj = { emojiNode: null };
    obj[0] = emojiNode;
    tmpResult = tmp(MessageCustomEmojiActionSheet, obj);
  }
  return tmpResult;
};