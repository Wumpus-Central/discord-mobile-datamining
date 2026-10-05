// discord_app/modules/conversations/components/native/ConversationNavigatorUtils.tsx
import RootNavigationRef from "../../../main_tabs_v2/RootNavigationRef.native.tsx";
import transitionToChannel from "../../../routing/transitionToChannel.tsx";
import ConversationsActionCreators from "../../ConversationsActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(
  channelId,
  messageId,
  conversationId,
) {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  const tmpResult = ConversationsActionCreators;
  const result = tmpResult.setSelectedConversation(channelId, conversationId, { shouldJump: false });
  const tmpResult2 = transitionToChannel;
  tmpResult2.transitionToMessage(channelId, messageId, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
