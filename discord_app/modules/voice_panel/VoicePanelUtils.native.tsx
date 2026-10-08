// discord_app/modules/voice_panel/VoicePanelUtils.native.tsx
import useStateFromStores from "../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import c from "../../../_runtime/00576_c.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import VoicePanelStore from "VoicePanelStore.tsx";

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsVoicePanelShowing() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore, RTCConnectionStore];
        const fn = function s() {
          channel = channel.getChannel(channelId.getChannelId());
          return null != channel && !channel.isGuildStageVoice();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return useStateFromStores.useStateFromStores(tmp4, tmp5);
    }
  : function useIsVoicePanelShowing() {
      const items = [ChannelStore, RTCConnectionStore];
      return useStateFromStores.useStateFromStores(items, () => {
        channel = channel.getChannel(channelId.getChannelId());
        return null != channel && !channel.isGuildStageVoice();
      });
    };
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsVoicePanelFullscreen() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n(isVoicePanelFullscreen) {
          return isVoicePanelFullscreen.isVoicePanelFullscreen();
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      return VoicePanelStore(first);
    }
  : function useIsVoicePanelFullscreen() {
      return VoicePanelStore((isVoicePanelFullscreen) => isVoicePanelFullscreen.isVoicePanelFullscreen());
    };
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsVoicePanelOpen(arg0) {
      closure_0 = arg0;
      const cResult = c.c(2);
      if (cResult[0] !== arg0) {
        const fn = function l(isChannelOpen) {
          return isChannelOpen.isChannelOpen(closure_0);
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      return VoicePanelStore(tmp2);
    }
  : function useIsVoicePanelOpen(arg0) {
      closure_0 = arg0;
      return VoicePanelStore((isChannelOpen) => isChannelOpen.isChannelOpen(closure_0));
    };
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsAnyVoicePanelOpen() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n(isAnyVoicePanelOpen) {
          return isAnyVoicePanelOpen.isAnyVoicePanelOpen();
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      return VoicePanelStore(first);
    }
  : function useIsAnyVoicePanelOpen() {
      return VoicePanelStore((isAnyVoicePanelOpen) => isAnyVoicePanelOpen.isAnyVoicePanelOpen());
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/VoicePanelUtils.native.tsx");

export const useIsVoicePanelShowing = tmp2;
export const useIsVoicePanelFullscreen = tmp3;
export const useIsVoicePanelOpen = tmp4;
export const useIsAnyVoicePanelOpen = tmp5;
export const useIsVoicePanelMounted = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsVoicePanelMounted(arg0) {
      closure_0 = arg0;
      const cResult = c.c(2);
      if (cResult[0] !== arg0) {
        const fn = function l(isMounted) {
          return isMounted.isMounted(closure_0);
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      return VoicePanelStore(tmp2);
    }
  : function useIsVoicePanelMounted(arg0) {
      closure_0 = arg0;
      return VoicePanelStore((isMounted) => isMounted.isMounted(closure_0));
    };
