// discord_app/modules/conversations/components/native/ConversationNavigatorUtils.tsx
const result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, id) {
  const rootNavigationRef = require("../../../main_tabs_v2/RootNavigationRef.native.tsx") /* getRootNavigationRef */.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  const obj = require("../../../main_tabs_v2/RootNavigationRef.native.tsx") /* getRootNavigationRef */;
  const tmp = require;
  require("../../../routing/transitionToChannel.tsx") /* transitionToChannel */.transitionToMessage(channelId, id, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };