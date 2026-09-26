// === Module 9790: MessageEmojiActionSheet ===

// Module 9790 (MessageEmojiActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import StandardEmojiContentDefault from "StandardEmojiContent" /* 9791 */;
import CustomEmojiContentDefault from "CustomEmojiContent" /* 9799 */;
import noop from "module_19" /* 19 */;

const require = fn;
function MessageStandardEmojiActionSheet(emojiNode) {
  _require = undefined;
  const tmp = closure_6();
  const v4Result = require("v1").v4();
  _require = v4Result;
  const obj2 = {
    startExpanded: true,
    onDismiss() {
      AnalyticsUtilsDefault.track(AnalyticEvents.CLOSE_POPOUT, { nonce });
    },
    children: null
  };
  const obj = require("v1");
  obj2.children = <View style={tmp.contentWrapper}>{jsx(StandardEmojiContentDefault, { emojiNode: emojiNode.emojiNode, nonce: v4Result })}</View>;
  return jsx(require("Sheet/BottomSheet").BottomSheet, {
    startExpanded: true,
    onDismiss() {
      AnalyticsUtilsDefault.track(AnalyticEvents.CLOSE_POPOUT, { nonce });
    },
    children: null
  });
}
function MessageCustomEmojiActionSheet(emojiNode) {
  emojiNode = emojiNode.emojiNode;
  _require = undefined;
  const tmp = closure_6();
  const emojiAndSource = require("useEmojiAndSource").useEmojiAndSource({ emojiId: emojiNode.id });
  if (emojiAndSource.isFetching) {
    return null;
  } else {
    const v4Result = tmp2(1255).v4();
    _require = v4Result;
    const obj3 = {
      startExpanded: true,
      onDismiss() {
          AnalyticsUtilsDefault.track(AnalyticEvents.CLOSE_POPOUT, { nonce });
        },
      children: null
    };
    const obj4 = { style: tmp.contentWrapper, children: null };
    const obj5 = { emojiNode, sourceType: tmp5, expressionSourceApplication: tmp7, expressionSourceGuild: tmp6, customEmojiFromJoinedGuild: tmp9, hasJoinedEmojiSourceGuild: tmp8, nonce: v4Result };
    obj4.children = jsx(CustomEmojiContentDefault, { emojiNode, sourceType: tmp5, expressionSourceApplication: tmp7, expressionSourceGuild: tmp6, customEmojiFromJoinedGuild: tmp9, hasJoinedEmojiSourceGuild: tmp8, nonce: v4Result });
    obj3.children = <View style={tmp.contentWrapper}>{null}</View>;
    return jsx(tmp2(6571).BottomSheet, {
      startExpanded: true,
      onDismiss() {
          AnalyticsUtilsDefault.track(AnalyticEvents.CLOSE_POPOUT, { nonce });
        },
      children: null
    });
  }
  const obj = require("useEmojiAndSource");
  const obj2 = { emojiId: emojiNode.id };
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
const PlatformUtils = fn(1364);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
let closure_6 = createStyles.createStyles({ contentWrapper: { paddingHorizontal: 16, paddingBottom: num } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/emoji/MessageEmojiActionSheet.tsx");

export default function MessageEmojiActionSheet(emojiNode) {
  emojiNode = emojiNode.emojiNode;
  if ("surrogate" in emojiNode) {
    const obj2 = { emojiNode };
    let tmpResult = <MessageStandardEmojiActionSheet emojiNode={emojiNode} />;
  } else {
    const obj = { emojiNode };
    tmpResult = <MessageCustomEmojiActionSheet emojiNode={emojiNode} />;
  }
  return tmpResult;
};