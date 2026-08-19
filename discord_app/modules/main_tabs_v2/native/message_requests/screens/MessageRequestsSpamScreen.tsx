// === Module 16109: MessageRequestsScreen ===

// Module 16109 (MessageRequestsScreen)
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsSpamScreen.tsx");

export default function MessageRequestsScreen(navigation) {
  navigation = navigation.navigation;
  const items = [navigation];
  const goToMessageRequestPreview = React.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  return jsx(navigation(16107), { goToMessageRequestPreview });
};