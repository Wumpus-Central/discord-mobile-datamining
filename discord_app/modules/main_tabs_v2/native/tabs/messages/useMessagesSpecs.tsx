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
  fontScale = fontScale(4982).useFontScale();
  top = top(1611)().top;
  const items = [fontScale, top];
  return noop.useMemo(() => {
    let obj = MessagesHeader;
    const messagesHeaderHeight = obj.getMessagesHeaderHeight(fontScale);
    const messagesItemChannelSizes = MessagesItemChannel.getMessagesItemChannelSizes(fontScale);
    obj = {
      headerSize: messagesHeaderHeight,
      listTop: top + messagesHeaderHeight,
      listLeft: DM_WIDTH,
      listItemHeight: messagesItemChannelSizes.height,
      listItemSizes: _objectWithoutProperties(messagesItemChannelSizes, closure_3),
      listItemSuggestedFriendHeight: null,
      scrollIndicatorInsetEnd: null,
    };
    obj.listItemSuggestedFriendHeight = MessagesItemSuggestedFriend.getMessagesItemSuggestedFriendHeight(fontScale);
    obj.scrollIndicatorInsetEnd = nativeDefault.space.PX_4;
    return obj;
  }, items);
}
