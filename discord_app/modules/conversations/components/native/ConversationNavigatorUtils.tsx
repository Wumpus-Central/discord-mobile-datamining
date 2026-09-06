// discord_app/modules/conversations/components/native/ConversationNavigatorUtils.tsx
import RootNavigationRef from "../../../main_tabs_v2/RootNavigationRef.native.tsx";
import transitionToChannel from "../../../routing/transitionToChannel.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, id) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  transitionToChannel.transitionToMessage(channelId, id, { navigationReplace: true });
  const tmpResult = transitionToChannel;
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
