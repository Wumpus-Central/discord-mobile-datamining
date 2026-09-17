// === Module 9832: VoicePanelUtils ===

// Module 9832 (VoicePanelUtils)
import useStateFromStores from "useStateFromStores" /* 563 */;
import StageVoicePanelExperiment from "StageVoicePanelExperiment" /* 4849 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4663 */;
import VoicePanelStore from "VoicePanelStore" /* 4848 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/VoicePanelUtils.native.tsx");

export const isVoicePanelEnabled = function isVoicePanelEnabled(channel2) {
  const result = StageVoicePanelExperiment.isStageVoicePanelEnabled("voice_panel_utils");
  let tmp2 = !result;
  if (!result) {
    let isGuildStageVoiceResult;
    if (channel2 != null) {
      isGuildStageVoiceResult = channel2.isGuildStageVoice();
    }
    tmp2 = isGuildStageVoiceResult;
  }
  return !tmp2;
};
export const useIsVoicePanelShowing = function useIsVoicePanelShowing() {
  const items = [ChannelStore, RTCConnectionStore];
  return useStateFromStores.useStateFromStores(items, () => {
    channel = channel.getChannel(channelId.getChannelId());
    let tmp = null != channel;
    if (tmp) {
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      let result = !isGuildStageVoiceResult;
      if (isGuildStageVoiceResult) {
        result = StageVoicePanelExperiment.isStageVoicePanelEnabled("voice_panel_utils");
      }
      tmp = result;
    }
    return tmp;
  });
};
export const useIsVoicePanelFullscreen = function useIsVoicePanelFullscreen() {
  return VoicePanelStore((isVoicePanelFullscreen) => isVoicePanelFullscreen.isVoicePanelFullscreen());
};
export const useIsVoicePanelOpen = function useIsVoicePanelOpen(channelId) {
  closure_0 = channelId;
  return VoicePanelStore((isChannelOpen) => isChannelOpen.isChannelOpen(closure_0));
};
export const useIsAnyVoicePanelOpen = function useIsAnyVoicePanelOpen() {
  return VoicePanelStore((isAnyVoicePanelOpen) => isAnyVoicePanelOpen.isAnyVoicePanelOpen());
};
export const useIsVoicePanelMounted = function useIsVoicePanelMounted(channelId) {
  closure_0 = channelId;
  return VoicePanelStore((isMounted) => isMounted.isMounted(closure_0));
};