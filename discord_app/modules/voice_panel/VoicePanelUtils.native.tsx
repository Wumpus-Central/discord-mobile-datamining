// === Module 11950: VoicePanelUtils ===

// Module 11950 (VoicePanelUtils)
import useStateFromStores from "useStateFromStores" /* 563 */;
import StageChannelUnifiedCallExperiment from "StageChannelUnifiedCallExperiment" /* 11951 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6071 */;
import VoicePanelStore from "VoicePanelStore" /* 6901 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/VoicePanelUtils.native.tsx");

export function useIsVoicePanelShowing() {
  items = [ChannelStore, RTCConnectionStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => channel.getChannel(channelId.getChannelId()));
  StageChannelUnifiedCallExperiment;
  let tmp3 = null != stateFromStores;
  if (tmp3) {
    const isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
    let tmp5 = !isGuildStageVoiceResult;
    if (isGuildStageVoiceResult) {
      tmp5 = tmp2;
    }
    tmp3 = tmp5;
  }
  return tmp3;
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