// discord_app/modules/overlay/OverlayV3Experiment.tsx
import react from "../../../_runtime/00576_react.js";
import ApexExperiment_mod from "../experiments/apex/index.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
let obj4;
let obj6;
let ApexExperiment = ApexExperiment_mod;
let obj = {
  name: "2026-03-overlay-default-keybind",
  kind: "user",
  defaultConfig: { keybindOverride: "r" },
  variations: obj2,
};
obj2 = { 1: null, 2: { keybindOverride: "ctrl+tab" }, 3: { keybindOverride: "alt+x" } };
obj2[3] = { keybindOverride: "ctrl+l" };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
const obj3 = {
  name: "2025-11-overlay-chat",
  kind: "user",
  defaultConfig: { hasChat: false, hasFriendList: false, showNowPlayingForDifferentGames: false },
  variations: obj4,
};
obj4 = {
  1: null,
  2: { hasChat: true, hasFriendList: false, showNowPlayingForDifferentGames: false },
  3: { hasChat: true, hasFriendList: true, showNowPlayingForDifferentGames: false },
};
obj4[3] = { hasChat: true, hasFriendList: true, showNowPlayingForDifferentGames: true };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      let tmp2;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return apexExperiment1.useConfig(tmp2);
    }
  : (location) => {
      const obj = { location };
      return apexExperiment1.useConfig(obj);
    };
ApexExperiment = ApexExperiment_mod;
const obj5 = {
  name: "2026-04-overlay-streamer-mode",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj6,
};
obj6 = { 1: null };
obj6[1] = { enabled: true };
const apexExperiment2 = ApexExperiment.createApexExperiment(obj5);
ReactCompilerGating = ReactCompilerGating_mod;
function getOverlayChatConfig(location) {
  const obj = { location };
  return apexExperiment1.getConfig(obj);
}
function getOverlayStreamerModeConfig(StreamerModeStore) {
  const obj = { location: StreamerModeStore };
  return apexExperiment2.getConfig(obj);
}
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      let tmp2;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return apexExperiment2.useConfig(tmp2).enabled;
    }
  : (location) => {
      const obj = { location };
      return apexExperiment2.useConfig(obj).enabled;
    };
const result = size.fileFinishedImporting("modules/overlay/OverlayV3Experiment.tsx");

export const OverlayDefaultKeybindOverrideExperiment = apexExperiment;
export const getOverlayDefaultKeybind = function getOverlayDefaultKeybind(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj);
};
export const OverlayChatExperiment = apexExperiment1;
export { getOverlayChatConfig };
export const useOverlayChat = tmp4;
export const OverlayStreamerModeExperiment = apexExperiment2;
export { getOverlayStreamerModeConfig };
export const useOverlayStreamerMode = tmp6;
export const trackOverlayInitializedExperiments = function trackOverlayInitializedExperiments() {
  const config = apexExperiment1.getConfig({ location: "OVERLAY_INITIALIZED" });
  const config1 = apexExperiment2.getConfig({ location: "OVERLAY_INITIALIZED" });
};
