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
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  const result = ConversationsActionCreators.setSelectedConversation(channelId, conversationId, { shouldJump: false });
  const tmpResult = ConversationsActionCreators;
  transitionToChannel.transitionToMessage(channelId, messageId, { navigationReplace: true });
  const tmpResult2 = transitionToChannel;
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
