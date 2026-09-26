// === Module 15661: useMessagesSpecs ===

// Module 15661 (useMessagesSpecs)
import nativeDefault from "native" /* 576 */;
import MessagesHeader from "MessagesHeader" /* 15662 */;
import MessagesItemChannel from "MessagesItemChannel" /* 15665 */;
import MessagesItemSuggestedFriend from "MessagesItemSuggestedFriend" /* 15677 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["height"];
const DM_WIDTH = fn(1074).DM_WIDTH;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesSpecs.tsx");

export default function useMessagesSpecs() {
  fontScale = fontScale(5288).useFontScale();
  top = top(1613)().top;
  const items = [fontScale, top];
  return noop.useMemo(() => {
    const messagesHeaderHeight = MessagesHeader.getMessagesHeaderHeight(fontScale);
    const messagesItemChannelSizes = MessagesItemChannel.getMessagesItemChannelSizes(fontScale);
    const obj3 = { headerSize: messagesHeaderHeight, listTop: top + messagesHeaderHeight, listLeft: DM_WIDTH, listItemHeight: messagesItemChannelSizes.height, listItemSizes: _objectWithoutProperties(messagesItemChannelSizes, closure_3), listItemSuggestedFriendHeight: null, scrollIndicatorInsetEnd: null };
    obj3.listItemSuggestedFriendHeight = MessagesItemSuggestedFriend.getMessagesItemSuggestedFriendHeight(fontScale);
    obj3.scrollIndicatorInsetEnd = nativeDefault.space.PX_4;
    return obj3;
  }, items);
};