// discord_app/modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../../stores/ReadStateStore.tsx";
import { ME } from "../../../../../Constants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx",
);

export default function MessageRequestsScreen(route) {
  const channelId = route.route.params.channelId;
  let obj = channelId(12004);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = obj.useIsMessageRequestRestrictedViewer("MessageRequestsPreviewScreen");
  const effect = React.useEffect(() => {
    let obj = closure_1_1(closure_1_2[5]);
    obj = { channelId, messageId: closure_1_4.lastMessageId(channelId) };
    const messages = obj.fetchMessages(obj);
  }, items);
  obj = { guildId: ME, channelId, children: null };
  if (isMessageRequestRestrictedViewer) {
    obj = { channelId: null };
    obj[0] = channelId;
    let tmp5Result = tmp5(tmp7(16475), obj);
  } else {
    obj1 = {
      guildId: null,
      channelId: null,
      chatInputRef: null,
      HACK_fixModalInteraction: true,
      screenIndex: "message-request",
    };
    obj1[0] = tmp6;
    obj1[1] = channelId;
    obj1[2] = ref;
    tmp5Result = tmp5(tmp7(10977), obj1);
  }
  obj[2] = tmp5Result;
  return jsx(channelId(10160).ChannelContainer, { guildId: ME, channelId, children: null });
}
