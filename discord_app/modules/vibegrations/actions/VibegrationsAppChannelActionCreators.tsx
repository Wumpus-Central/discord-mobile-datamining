// === Module 13329: VibegrationsAppChannelActionCreators ===

// Module 13329 (VibegrationsAppChannelActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import VibegrationsAppChannelsStore from "VibegrationsAppChannelsStore" /* 7927 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/actions/VibegrationsAppChannelActionCreators.tsx");

export const setAppChannelChatOpen = function setAppChannelChatOpen(id, open) {
  if (VibegrationsAppChannelsStore.isChatOpen(id) !== open) {
    const obj = { type: "VIBEGRATIONS_APP_CHANNEL_CHAT_SET", channelId: id, open };
    obj.dispatch(obj);
  }
};