// discord_app/modules/overlay/OverlayV3Experiment.tsx
import c from "../../../_runtime/00576_c.js";
import ApexExperiment_mod from "../experiments/apex/index.tsx";
import "ReactCompilerGating";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let ApexExperiment = ApexExperiment_mod;
const obj = {
  name: "2026-03-overlay-default-keybind",
  kind: "user",
  defaultConfig: { keybindOverride: "r" },
  variations: null,
};
let obj2 = { 1: null, 2: { keybindOverride: "ctrl+tab" }, 3: { keybindOverride: "alt+x" } };
obj2[3] = { keybindOverride: "ctrl+l" };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
let ApexExperiment = ApexExperiment_mod;
const obj3 = {
  name: "2025-11-overlay-chat",
  kind: "user",
  defaultConfig: { hasChat: false, hasFriendList: false, showNowPlayingForDifferentGames: false },
  variations: null,
};
const obj4 = {
  1: null,
  2: { hasChat: true, hasFriendList: false, showNowPlayingForDifferentGames: false },
  3: { hasChat: true, hasFriendList: true, showNowPlayingForDifferentGames: false },
};
obj4[3] = { hasChat: true, hasFriendList: true, showNowPlayingForDifferentGames: true };
obj3.variations = obj4;
const apexExperiment1 = ApexExperiment.createApexExperiment(obj3);
let ApexExperiment = ApexExperiment_mod;
const obj5 = {
  name: "2026-04-overlay-streamer-mode",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj6 = { 1: null };
obj6[1] = { enabled: true };
obj5.variations = obj6;
const apexExperiment2 = ApexExperiment.createApexExperiment(obj5);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useOverlayChat(location) {
      const cResult = c.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return apexExperiment1.useConfig(tmp2);
    }
  : function useOverlayChat(location) {
      return apexExperiment1.useConfig({ location });
    };
function getOverlayChatConfig(location) {
  return apexExperiment1.getConfig({ location });
}
function getOverlayStreamerModeConfig(StreamerModeStore) {
  return apexExperiment2.getConfig({ location: StreamerModeStore });
}
const result = size.fileFinishedImporting("modules/overlay/OverlayV3Experiment.tsx");

export const OverlayDefaultKeybindOverrideExperiment = apexExperiment;
export const getOverlayDefaultKeybind = function getOverlayDefaultKeybind(location) {
  return apexExperiment.getConfig({ location });
};
export const OverlayChatExperiment = apexExperiment1;
export { getOverlayChatConfig };
export const useOverlayChat = tmp4;
export const OverlayStreamerModeExperiment = apexExperiment2;
export { getOverlayStreamerModeConfig };
export const useOverlayStreamerMode = ReactCompilerGating.isReactCompilerEnabled()
  ? function useOverlayStreamerMode(location) {
      const cResult = c.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return apexExperiment2.useConfig(tmp2).enabled;
    }
  : function useOverlayStreamerMode(location) {
      return apexExperiment2.useConfig({ location }).enabled;
    };
export const trackOverlayInitializedExperiments = function trackOverlayInitializedExperiments() {
  const config = apexExperiment1.getConfig({ location: "OVERLAY_INITIALIZED" });
  const config1 = apexExperiment2.getConfig({ location: "OVERLAY_INITIALIZED" });
};
