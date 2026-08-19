// === Module 9400: MessageStandardEmojiActionSheet ===

// Module 9400 (MessageStandardEmojiActionSheet)
import noopAll from "noop" /* 19 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import EmojiDefault from "Emoji" /* 9401 */;
import CustomEmojiContentDefault from "CustomEmojiContent" /* 9408 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import obj132 from "obj132" /* 500 */;

const require = fn;
function MessageStandardEmojiActionSheet(emojiNode) {
  let _require;
  let obj = _require(514);
  const v4Result = obj.v4();
  _require = v4Result;
  obj = { style: callback().contentWrapper, children: jsx(EmojiDefault, { emojiNode: emojiNode.emojiNode, nonce: v4Result }) };
  obj[2] = <View style={callback().contentWrapper}>{jsx(EmojiDefault, { emojiNode: emojiNode.emojiNode, nonce: v4Result })}</View>;
  return jsx(_require(6950).BottomSheet, { style: callback().contentWrapper, children: jsx(EmojiDefault, { emojiNode: emojiNode.emojiNode, nonce: v4Result }) });
}
function MessageCustomEmojiActionSheet(emojiNode) {
  emojiNode = emojiNode.emojiNode;
  let _require;
  _require(9407);
  let obj = { emojiId: emojiNode.id };
  const emojiAndSource = obj.useEmojiAndSource(obj);
  if (emojiAndSource.isFetching) {
    return null;
  } else {
    const v4Result = tmp2(514).v4();
    _require = v4Result;
    obj = { startExpanded: true, onDismiss: null, children: null };
    obj[1] = function onDismiss() {
      const obj = { nonce: c0 };
      obj.track(AnalyticEvents.CLOSE_POPOUT, obj);
    };
    obj1 = { style: null, children: null };
    obj1[0] = tmp.contentWrapper;
    const obj2 = { emojiNode: null, sourceType: null, expressionSourceApplication: null, expressionSourceGuild: null, customEmojiFromJoinedGuild: null, hasJoinedEmojiSourceGuild: null, nonce: null };
    obj2[0] = emojiNode;
    obj2[1] = tmp5;
    obj2[2] = tmp7;
    obj2[3] = tmp6;
    obj2[4] = tmp9;
    obj2[5] = tmp8;
    obj2[6] = v4Result;
    obj1[1] = jsx(CustomEmojiContentDefault, { emojiNode: null, sourceType: null, expressionSourceApplication: null, expressionSourceGuild: null, customEmojiFromJoinedGuild: null, hasJoinedEmojiSourceGuild: null, nonce: null });
    obj[2] = <View style={null}>{null}</View>;
    return jsx(tmp2(6950).BottomSheet, { startExpanded: true, onDismiss: null, children: null });
  }
  tmp = callback();
}
noopAll;
let num = 0;
if (obj132.isAndroid()) {
  num = 16;
}
let closure_6 = createCacheKey.createStyles({ contentWrapper: { paddingHorizontal: 16, paddingBottom: num } });
const result = obj132.fileFinishedImporting("modules/messages/native/emoji/MessageEmojiActionSheet.tsx");

export default function MessageEmojiActionSheet(emojiNode) {
  emojiNode = emojiNode.emojiNode;
  if ("surrogate" in emojiNode) {
    let obj = { emojiNode: null };
    obj[0] = emojiNode;
    let tmpResult = <MessageStandardEmojiActionSheet emojiNode={null} />;
  } else {
    obj = { emojiNode: null };
    obj[0] = emojiNode;
    tmpResult = <MessageCustomEmojiActionSheet emojiNode={null} />;
  }
  return tmpResult;
};