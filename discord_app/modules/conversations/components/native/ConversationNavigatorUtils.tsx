// === Module 9820: ConversationNavigatorUtils ===

// Module 9820 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 5188 */;
import transitionToChannel from "transitionToChannel" /* 5745 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export function closeConversationsAndJumpToMessage(channelId, messageId) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  transitionToChannel.transitionToMessage(channelId, messageId, { navigationReplace: true });
  const tmpResult = transitionToChannel;
}
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };