// discord_app/modules/messages/native/emoji/MessageEmojiActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import EmojiDefault from "StandardEmojiContent.tsx";
import CustomEmojiContentDefault from "CustomEmojiContent.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { AnalyticEvents } from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import set from "../../../../utils/PlatformUtils.tsx";
import { v1 } from "../../../../../_runtime/00514_v1.js";
import { useEmojiAndSource } from "../../../emojis/hooks/useEmojiAndSource.tsx";

const require = arg1;
function MessageStandardEmojiActionSheet(emojiNode) {
  let _require;
  let obj = v1;
  const v4Result = obj.v4();
  _require = v4Result;
  obj = {
    startExpanded: true,
    onDismiss() {
      let obj = closure_1_1(closure_1_2[8]);
      obj = { nonce: c0 };
      obj.track(closure_1_4.CLOSE_POPOUT, obj);
    },
    children: null
  };
  obj = { style: callback().contentWrapper, children: jsx(EmojiDefault, { emojiNode: emojiNode.emojiNode, nonce: v4Result }) };
  obj[2] = <View style={callback().contentWrapper}>{jsx(EmojiDefault, { emojiNode: arg0.emojiNode, nonce: v4Result })}</View>;
  return jsx(require("../../../../design/components/Sheet/native/BottomSheet.native.tsx").BottomSheet, { style: callback().contentWrapper, children: jsx(EmojiDefault, { emojiNode: emojiNode.emojiNode, nonce: v4Result }) });
}
function MessageCustomEmojiActionSheet(emojiNode) {
  emojiNode = emojiNode.emojiNode;
  let _require;
  let obj = useEmojiAndSource;
  obj = { emojiId: emojiNode.id };
  const emojiAndSource = obj.useEmojiAndSource(obj);
  if (emojiAndSource.isFetching) {
    return null;
  } else {
    const v4Result = tmp2(514).v4();
    _require = v4Result;
    obj = { startExpanded: true, onDismiss: null, children: null };
    obj[1] = function onDismiss() {
      let obj = closure_1_1(closure_1_2[8]);
      obj = { nonce: c0 };
      obj.track(closure_1_4.CLOSE_POPOUT, obj);
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
    return jsx(tmp2(5569).BottomSheet, { startExpanded: true, onDismiss: null, children: null });
  }
  tmp = callback();
}
noopAll;
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