// discord_app/modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../../Constants.tsx";
import MessageManagerDefault from "../../../../messages/MessageManager.tsx";
import ChatViewDefault from "../../../../chat/native/ChatView.tsx";
import RestrictedMessageRequestPreviewDefault from "../../../../message_request/native/RestrictedMessageRequestPreview.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReadStateStore from "../../../../../stores/ReadStateStore.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const ME = Constants.ME;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (route) => {
      let channelId;
      let tmp10Result;
      let tmp6;
      let tmp7;
      let obj = channelId(576);
      const cResult = obj.c(9);
      const tmp = channelId;
      channelId = route.route.params.channelId;
      const ref = react.useRef(null);
      const obj3 = channelId(12083);
      const isMessageRequestRestrictedViewer = obj3.useIsMessageRequestRestrictedViewer();
      if (cResult[0] !== channelId) {
        const fn = function u() {
          const obj = MessageManagerDefault;
          const obj2 = { channelId, messageId: ReadStateStore.lastMessageId(channelId) };
          const messages = obj.fetchMessages(obj2);
        };
        const items = [channelId];
        cResult[0] = channelId;
        cResult[1] = fn;
        cResult[2] = items;
        tmp7 = items;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
      }
      const effect = react.useEffect(tmp6, tmp7);
      if (cResult[3] === channelId) {
        let tmp9;
        if (cResult[4] === isMessageRequestRestrictedViewer) {
          tmp9 = cResult[5];
        }
        if (cResult[6] === channelId) {
          let tmp14;
          if (cResult[7] === tmp9) {
            tmp14 = cResult[8];
          }
          return tmp14;
        }
        const tmp17 = jsx(tmp(12463).ChannelContainer, { guildId: ME, channelId, children: tmp9 });
        cResult[6] = channelId;
        cResult[7] = tmp9;
        cResult[8] = tmp17;
        tmp14 = tmp17;
      }
      if (isMessageRequestRestrictedViewer) {
        tmp10Result = jsx(RestrictedMessageRequestPreviewDefault, { channelId });
      } else {
        tmp10Result = jsx(ChatViewDefault, {
          guildId: ME,
          channelId,
          chatInputRef: ref,
          HACK_fixModalInteraction: true,
          screenIndex: "message-request",
        });
      }
      cResult[3] = channelId;
      cResult[4] = isMessageRequestRestrictedViewer;
      cResult[5] = tmp10Result;
      tmp9 = tmp10Result;
    }
  : (route) => {
      let tmp5Result;
      const channelId = route.route.params.channelId;
      const ref = react.useRef(null);
      let obj = channelId(12083);
      const items = [channelId];
      const isMessageRequestRestrictedViewer = obj.useIsMessageRequestRestrictedViewer();
      const effect = react.useEffect(() => {
        const obj = MessageManagerDefault;
        const obj2 = { channelId, messageId: ReadStateStore.lastMessageId(channelId) };
        const messages = obj.fetchMessages(obj2);
      }, items);
      const ChannelContainer = channelId(12463).ChannelContainer;
      if (isMessageRequestRestrictedViewer) {
        tmp5Result = jsx(RestrictedMessageRequestPreviewDefault, { channelId });
      } else {
        tmp5Result = jsx(ChatViewDefault, {
          guildId: tmp6,
          channelId,
          chatInputRef: ref,
          HACK_fixModalInteraction: true,
          screenIndex: "message-request",
        });
      }
      return (
        <ChannelContainer guildId={ME} channelId={channelId}>
          {tmp5Result}
        </ChannelContainer>
      );
    };
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx",
);

export default tmp2;
