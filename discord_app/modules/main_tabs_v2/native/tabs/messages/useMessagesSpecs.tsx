// === Module 16020: useMessagesSpecs ===

// Module 16020 (useMessagesSpecs)
import nativeDefault from "native" /* 576 */;
import MessagesHeader from "MessagesHeader" /* 16021 */;
import MessagesItemChannel from "MessagesItemChannel" /* 16030 */;
import MessagesItemSuggestedFriend from "MessagesItemSuggestedFriend" /* 16042 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["height"];
const DM_WIDTH = fn(1074).DM_WIDTH;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesSpecs.tsx");

export default function useMessagesSpecs() {
  fontScale = fontScale(4982).useFontScale();
  top = top(1611)().top;
  const items = [fontScale, top];
  return noop.useMemo(() => {
    let obj = MessagesHeader;
    const messagesHeaderHeight = obj.getMessagesHeaderHeight(fontScale);
    const messagesItemChannelSizes = MessagesItemChannel.getMessagesItemChannelSizes(fontScale);
    obj = { headerSize: messagesHeaderHeight, listTop: top + messagesHeaderHeight, listLeft: DM_WIDTH, listItemHeight: messagesItemChannelSizes.height, listItemSizes: _objectWithoutProperties(messagesItemChannelSizes, closure_3), listItemSuggestedFriendHeight: null, scrollIndicatorInsetEnd: null };
    obj.listItemSuggestedFriendHeight = MessagesItemSuggestedFriend.getMessagesItemSuggestedFriendHeight(fontScale);
    obj.scrollIndicatorInsetEnd = nativeDefault.space.PX_4;
    return obj;
  }, items);
};