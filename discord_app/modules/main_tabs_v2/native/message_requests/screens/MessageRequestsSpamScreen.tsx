// discord_app/modules/main_tabs_v2/native/message_requests/screens/MessageRequestsSpamScreen.tsx
import closure_2 from "../../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsSpamScreen.tsx");

export default function MessageRequestsScreen(navigation) {
  navigation = navigation.navigation;
  const items = [navigation];
  const goToMessageRequestPreview = React.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  return jsx(navigation(16107), { goToMessageRequestPreview });
};