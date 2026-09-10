// discord_app/modules/vibegrations/actions/VibegrationsAppChannelActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import VibegrationsAppChannelsStore from "../stores/VibegrationsAppChannelsStore.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/actions/VibegrationsAppChannelActionCreators.tsx");

export const setAppChannelChatOpen = function setAppChannelChatOpen(id, open) {
  if (VibegrationsAppChannelsStore.isChatOpen(id) !== open) {
    const obj = { type: "VIBEGRATIONS_APP_CHANNEL_CHAT_SET", channelId: id, open };
    obj.dispatch(obj);
  }
};
