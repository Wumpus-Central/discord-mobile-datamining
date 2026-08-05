// discord_app/modules/voice_panel/VoicePanelUtils.native.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import withEqualityFn from "withEqualityFn";

const require = arg1;
let result = require("withEqualityFn").fileFinishedImporting("modules/voice_panel/VoicePanelUtils.native.tsx");

export const isVoicePanelEnabled = function isVoicePanelEnabled(channel2) {
  const result = require(4496) /* useIsStageVoicePanelEnabled */.isStageVoicePanelEnabled("voice_panel_utils");
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
  const items = [ensureGuildLoaded, createRTCConnection];
  return require(647) /* defaultAreStatesEqual */.useStateFromStores(items, () => {
    channel = channel.getChannel(channelId.getChannelId());
    let tmp = null != channel;
    if (tmp) {
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      let result = !isGuildStageVoiceResult;
      if (isGuildStageVoiceResult) {
        result = callback(table[3]).isStageVoicePanelEnabled("voice_panel_utils");
        const obj2 = callback(table[3]);
      }
      tmp = result;
    }
    return tmp;
  });
};
export const useIsVoicePanelFullscreen = function useIsVoicePanelFullscreen() {
  return callback((isVoicePanelFullscreen) => isVoicePanelFullscreen.isVoicePanelFullscreen());
};
export const useIsVoicePanelOpen = function useIsVoicePanelOpen(channelId) {
  let closure_0 = channelId;
  return callback((isChannelOpen) => isChannelOpen.isChannelOpen(closure_0));
};
export const useIsAnyVoicePanelOpen = function useIsAnyVoicePanelOpen() {
  return callback((isAnyVoicePanelOpen) => isAnyVoicePanelOpen.isAnyVoicePanelOpen());
};
export const useIsVoicePanelMounted = function useIsVoicePanelMounted(channelId) {
  let closure_0 = channelId;
  return callback((isMounted) => isMounted.isMounted(closure_0));
};