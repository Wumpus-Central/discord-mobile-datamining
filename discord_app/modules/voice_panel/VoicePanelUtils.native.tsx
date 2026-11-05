// === Module 12067: VoicePanelUtils ===

// Module 12067 (VoicePanelUtils)
import useStateFromStores from "useStateFromStores" /* 563 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5901 */;
import VoicePanelStore from "VoicePanelStore" /* 7013 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/VoicePanelUtils.native.tsx");

export function useIsVoicePanelShowing() {
  items = [ChannelStore, RTCConnectionStore];
  return useStateFromStores.useStateFromStores(items, () => {
    channel = channel.getChannel(channelId.getChannelId());
    return null != channel && !channel.isGuildStageVoice();
  });
}
export function useIsVoicePanelFullscreen() {
  return VoicePanelStore((isVoicePanelFullscreen) => isVoicePanelFullscreen.isVoicePanelFullscreen());
}
export function useIsVoicePanelOpen(channelId) {
  closure_0 = channelId;
  return VoicePanelStore((isChannelOpen) => isChannelOpen.isChannelOpen(closure_0));
}
export function useIsAnyVoicePanelOpen() {
  return VoicePanelStore((isAnyVoicePanelOpen) => isAnyVoicePanelOpen.isAnyVoicePanelOpen());
}
export function useIsVoicePanelMounted(channelId) {
  closure_0 = channelId;
  return VoicePanelStore((isMounted) => isMounted.isMounted(closure_0));
}