// discord_app/modules/voice_panel/VoicePanelUtils.native.tsx
import useStateFromStores from "../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import react from "../../../_runtime/00576_react.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import VoicePanelStore from "VoicePanelStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let channel;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let channelId;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore, RTCConnectionStore];
        const fn = function o() {
          channel = channel.getChannel(channelId.getChannelId());
          const tmp = null != channel && !channel.isGuildStageVoice();
          return tmp;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = useStateFromStores;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      let channelId;
      const items = [ChannelStore, RTCConnectionStore];
      const obj = useStateFromStores;
      return obj.useStateFromStores(items, () => {
        channel = channel.getChannel(channelId.getChannelId());
        const tmp = null != channel && !channel.isGuildStageVoice();
        return tmp;
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n(isVoicePanelFullscreen) {
          return isVoicePanelFullscreen.isVoicePanelFullscreen();
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      return VoicePanelStore(first);
    }
  : () => VoicePanelStore((isVoicePanelFullscreen) => isVoicePanelFullscreen.isVoicePanelFullscreen());
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp2;
      let closure_0 = arg0;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] !== arg0) {
        const fn = function t(isChannelOpen) {
          return isChannelOpen.isChannelOpen(closure_0);
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      return VoicePanelStore(tmp2);
    }
  : (arg0) => {
      let closure_0 = arg0;
      return VoicePanelStore((isChannelOpen) => isChannelOpen.isChannelOpen(closure_0));
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n(isAnyVoicePanelOpen) {
          return isAnyVoicePanelOpen.isAnyVoicePanelOpen();
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      return VoicePanelStore(first);
    }
  : () => VoicePanelStore((isAnyVoicePanelOpen) => isAnyVoicePanelOpen.isAnyVoicePanelOpen());
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp2;
      let closure_0 = arg0;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] !== arg0) {
        const fn = function t(isMounted) {
          return isMounted.isMounted(closure_0);
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      return VoicePanelStore(tmp2);
    }
  : (arg0) => {
      let closure_0 = arg0;
      return VoicePanelStore((isMounted) => isMounted.isMounted(closure_0));
    };
const result = size.fileFinishedImporting("modules/voice_panel/VoicePanelUtils.native.tsx");

export const useIsVoicePanelShowing = tmp2;
export const useIsVoicePanelFullscreen = tmp3;
export const useIsVoicePanelOpen = tmp4;
export const useIsAnyVoicePanelOpen = tmp5;
export const useIsVoicePanelMounted = tmp6;
