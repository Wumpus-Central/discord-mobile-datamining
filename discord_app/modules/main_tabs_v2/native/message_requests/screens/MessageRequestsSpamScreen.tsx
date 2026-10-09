// === Module 17528: MessageRequestsSpamScreen ===

// Module 17528 (MessageRequestsSpamScreen)
import c from "c" /* 576 */;
import SpamMessageListDefault from "SpamMessageList" /* 17526 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsSpamScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MessageRequestsScreen(navigation) {
  const cResult = c.c(4);
  navigation = navigation.navigation;
  if (cResult[0] !== navigation) {
    const fn = function t(channelId) {
      return navigation.push("preview", { channelId });
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] !== tmp3) {
    const obj2 = { goToMessageRequestPreview: tmp3 };
    const tmp7 = jsx(SpamMessageListDefault, { goToMessageRequestPreview: tmp3 });
    cResult[2] = tmp3;
    cResult[3] = tmp7;
    let tmp4 = tmp7;
  } else {
    tmp4 = cResult[3];
  }
  return tmp4;
}) : (function MessageRequestsScreen(navigation) {
  navigation = navigation.navigation;
  const items = [navigation];
  const goToMessageRequestPreview = noop.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  return jsx(SpamMessageListDefault, { goToMessageRequestPreview });
});