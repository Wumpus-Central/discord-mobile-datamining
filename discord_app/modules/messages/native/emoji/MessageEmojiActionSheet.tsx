// discord_app/modules/messages/native/emoji/MessageEmojiActionSheet.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import StandardEmojiContentDefault from "StandardEmojiContent.tsx";
import CustomEmojiContentDefault from "CustomEmojiContent.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
function MessageStandardEmojiActionSheet(emojiNode) {
  _require = undefined;
  let obj = require("v1");
  const v4Result = obj.v4();
  _require = v4Result;
  obj = {
    startExpanded: true,
    onDismiss() {
      const obj = { nonce };
      obj.track(AnalyticEvents.CLOSE_POPOUT, obj);
    },
    children: null,
  };
  obj = {
    style: closure_6().contentWrapper,
    children: jsx(StandardEmojiContentDefault, { emojiNode: emojiNode.emojiNode, nonce: v4Result }),
  };
  obj.children = (
    <View style={closure_6().contentWrapper}>
      {jsx(StandardEmojiContentDefault, { emojiNode: emojiNode.emojiNode, nonce: v4Result })}
    </View>
  );
  return jsx(require("Sheet/BottomSheet").BottomSheet, {
    style: closure_6().contentWrapper,
    children: jsx(StandardEmojiContentDefault, { emojiNode: emojiNode.emojiNode, nonce: v4Result }),
  });
}
function MessageCustomEmojiActionSheet(emojiNode) {
  emojiNode = emojiNode.emojiNode;
  _require = undefined;
  require("useEmojiAndSource");
  let obj = { emojiId: emojiNode.id };
  const emojiAndSource = obj.useEmojiAndSource(obj);
  if (emojiAndSource.isFetching) {
    return null;
  } else {
    const v4Result = tmp2(1256).v4();
    _require = v4Result;
    obj = {
      startExpanded: true,
      onDismiss() {
        const obj = { nonce };
        obj.track(AnalyticEvents.CLOSE_POPOUT, obj);
      },
      children: null,
    };
    const obj1 = { style: tmp.contentWrapper, children: null };
    const obj2 = {
      emojiNode,
      sourceType: tmp5,
      expressionSourceApplication: tmp7,
      expressionSourceGuild: tmp6,
      customEmojiFromJoinedGuild: tmp9,
      hasJoinedEmojiSourceGuild: tmp8,
      nonce: v4Result,
    };
    obj1.children = jsx(CustomEmojiContentDefault, {
      emojiNode,
      sourceType: tmp5,
      expressionSourceApplication: tmp7,
      expressionSourceGuild: tmp6,
      customEmojiFromJoinedGuild: tmp9,
      hasJoinedEmojiSourceGuild: tmp8,
      nonce: v4Result,
    });
    obj.children = <View style={tmp.contentWrapper}>{null}</View>;
    return jsx(tmp2(7150).BottomSheet, {
      startExpanded: true,
      onDismiss() {
        const obj = { nonce };
        obj.track(AnalyticEvents.CLOSE_POPOUT, obj);
      },
      children: null,
    });
  }
  tmp = closure_6();
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
let createStyles = fn(4560);
const PlatformUtils = fn(1115);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
createStyles = { contentWrapper: { paddingHorizontal: 16, paddingBottom: num } };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/emoji/MessageEmojiActionSheet.tsx");

export default function MessageEmojiActionSheet(emojiNode) {
  emojiNode = emojiNode.emojiNode;
  if ("surrogate" in emojiNode) {
    let obj = { emojiNode };
    let tmpResult = <MessageStandardEmojiActionSheet emojiNode={emojiNode} />;
  } else {
    obj = { emojiNode };
    tmpResult = <MessageCustomEmojiActionSheet emojiNode={emojiNode} />;
  }
  return tmpResult;
}
