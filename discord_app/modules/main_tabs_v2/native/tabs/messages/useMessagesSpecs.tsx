// discord_app/modules/main_tabs_v2/native/tabs/messages/useMessagesSpecs.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import MessagesHeader from "MessagesHeader.tsx";
import MessagesItemChannel from "items/MessagesItemChannel.tsx";
import MessagesItemSuggestedFriend from "items/MessagesItemSuggestedFriend.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["height"];
const DM_WIDTH = fn(1074).DM_WIDTH;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesSpecs.tsx");

export default function useMessagesSpecs() {
  fontScale = fontScale(5194).useFontScale();
  top = top(1612)().top;
  const items = [fontScale, top];
  return noop.useMemo(() => {
    const messagesHeaderHeight = MessagesHeader.getMessagesHeaderHeight(fontScale);
    const messagesItemChannelSizes = MessagesItemChannel.getMessagesItemChannelSizes(fontScale);
    const obj3 = {
      headerSize: messagesHeaderHeight,
      listTop: top + messagesHeaderHeight,
      listLeft: DM_WIDTH,
      listItemHeight: messagesItemChannelSizes.height,
      listItemSizes: _objectWithoutProperties(messagesItemChannelSizes, closure_3),
      listItemSuggestedFriendHeight: null,
      scrollIndicatorInsetEnd: null,
    };
    obj3.listItemSuggestedFriendHeight = MessagesItemSuggestedFriend.getMessagesItemSuggestedFriendHeight(fontScale);
    obj3.scrollIndicatorInsetEnd = nativeDefault.space.PX_4;
    return obj3;
  }, items);
}
