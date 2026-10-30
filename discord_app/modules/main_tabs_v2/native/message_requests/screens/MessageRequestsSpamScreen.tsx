// discord_app/modules/main_tabs_v2/native/message_requests/screens/MessageRequestsSpamScreen.tsx
import SpamMessageListDefault from "../../../../message_request/native/spam/SpamMessageList.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/message_requests/screens/MessageRequestsSpamScreen.tsx",
);

export default function MessageRequestsScreen(navigation) {
  navigation = navigation.navigation;
  const items = [navigation];
  const goToMessageRequestPreview = noop.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  return jsx(SpamMessageListDefault, { goToMessageRequestPreview });
}
