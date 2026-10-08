// === Module 17381: MessageRequestsPreviewScreen ===

// Module 17381 (MessageRequestsPreviewScreen)
import MessageManagerDefault from "MessageManager" /* 9251 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6040 */;

const ChatViewDefault = tmp11(10342);
const RestrictedMessageRequestPreviewDefault = tmp11(17382);
const require = fn;
const ME = fn(1085).ME;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MessageRequestsScreen(route) {
  const cResult = channelId(576).c(9);
  channelId = route.route.params.channelId;
  let obj = channelId(576);
  const tmp = channelId;
  const ref = noop.useRef(null);
  const isMessageRequestRestrictedViewer = channelId(12176).useIsMessageRequestRestrictedViewer();
  if (cResult[0] !== channelId) {
    const fn = function l() {
      const obj = MessageManagerDefault;
      const messages = obj.fetchMessages({ channelId, messageId: ReadStateStore.lastMessageId(channelId) });
    };
    const items = [channelId];
    cResult[0] = channelId;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp7 = items;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = noop.useEffect(tmp6, tmp7);
  if (cResult[3] === channelId) {
    if (cResult[4] === isMessageRequestRestrictedViewer) {
      if (cResult[6] === channelId) {
        if (cResult[7] === tmp9) {
          let tmp14 = cResult[8];
        }
        return tmp14;
      }
      const obj4 = { guildId: ME, channelId, children: cResult[5] };
      const tmp17 = jsx(tmp(12574).ChannelContainer, { guildId: ME, channelId, children: cResult[5] });
      cResult[6] = channelId;
      cResult[7] = cResult[5];
      cResult[8] = tmp17;
      tmp14 = tmp17;
    }
  }
  if (isMessageRequestRestrictedViewer) {
    const obj5 = { channelId };
    let tmp10Result = <tmp11 channelId={channelId} />;
  } else {
    const obj6 = { guildId: ME, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    tmp10Result = jsx(ChatViewDefault, { guildId: ME, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" });
  }
  cResult[3] = channelId;
  cResult[4] = isMessageRequestRestrictedViewer;
  cResult[5] = tmp10Result;
  const obj3 = channelId(12176);
}) : (function MessageRequestsScreen(route) {
  const channelId = route.route.params.channelId;
  const ref = noop.useRef(null);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = channelId(12176).useIsMessageRequestRestrictedViewer();
  const effect = noop.useEffect(() => {
    const obj = MessageManagerDefault;
    const messages = obj.fetchMessages({ channelId, messageId: ReadStateStore.lastMessageId(channelId) });
  }, items);
  const obj2 = { guildId: ME, channelId, children: null };
  if (isMessageRequestRestrictedViewer) {
    const obj3 = { channelId };
    let tmp5Result = jsx(RestrictedMessageRequestPreviewDefault, { channelId });
  } else {
    const obj4 = { guildId: tmp6, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    tmp5Result = jsx(ChatViewDefault, { guildId: tmp6, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" });
  }
  obj2.children = tmp5Result;
  return jsx(channelId(12574).ChannelContainer, { guildId: ME, channelId, children: null });
});