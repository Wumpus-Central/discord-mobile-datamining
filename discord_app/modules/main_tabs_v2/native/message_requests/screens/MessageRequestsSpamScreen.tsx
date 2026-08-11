// discord_app/modules/main_tabs_v2/native/message_requests/screens/MessageRequestsSpamScreen.tsx
import noop from "noop";
import { jsx } from "jsxProd";

const result = require("PendingSpamMessageRequestRow").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsSpamScreen.tsx");

export default function MessageRequestsScreen(navigation) {
  navigation = navigation.navigation;
  const items = [navigation];
  const goToMessageRequestPreview = React.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  return jsx(navigation(15981), { goToMessageRequestPreview });
};