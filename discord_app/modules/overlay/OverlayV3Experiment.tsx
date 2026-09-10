// discord_app/modules/overlay/OverlayV3Experiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-03-overlay-default-keybind",
  kind: "user",
  defaultConfig: { keybindOverride: "Array" },
  variations: null,
};
obj = { 1: null, 2: { keybindOverride: "ctrl+tab" }, 3: { keybindOverride: "alt+x" } };
obj[3] = { keybindOverride: "ctrl+l" };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const obj1 = {
  name: "2025-11-overlay-chat",
  kind: "user",
  defaultConfig: { hasChat: false, hasFriendList: false, showNowPlayingForDifferentGames: false },
  variations: null,
};
const obj2 = {
  1: null,
  2: { hasChat: true, hasFriendList: false, showNowPlayingForDifferentGames: false },
  3: { hasChat: true, hasFriendList: true, showNowPlayingForDifferentGames: false },
};
obj2[3] = { hasChat: true, hasFriendList: true, showNowPlayingForDifferentGames: true };
obj1.variations = obj2;
const apexExperiment1 = ApexExperiment.createApexExperiment(obj1);
const obj3 = {
  name: "2026-04-overlay-streamer-mode",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj4 = { 1: null };
obj4[1] = { enabled: true };
obj3.variations = obj4;
const apexExperiment2 = ApexExperiment.createApexExperiment(obj3);
const result = size.fileFinishedImporting("modules/overlay/OverlayV3Experiment.tsx");

export const OverlayDefaultKeybindOverrideExperiment = apexExperiment;
export const getOverlayDefaultKeybind = function getOverlayDefaultKeybind(location) {
  return apexExperiment.getConfig({ location });
};
export const OverlayChatExperiment = apexExperiment1;
export const getOverlayChatConfig = function getOverlayChatConfig(location) {
  return apexExperiment1.getConfig({ location });
};
export const useOverlayChat = function useOverlayChat(location) {
  return apexExperiment1.useConfig({ location });
};
export const OverlayStreamerModeExperiment = apexExperiment2;
export const getOverlayStreamerModeConfig = function getOverlayStreamerModeConfig(StreamerModeStore) {
  return apexExperiment2.getConfig({ location: StreamerModeStore });
};
export const useOverlayStreamerMode = function useOverlayStreamerMode(location) {
  return apexExperiment2.useConfig({ location }).enabled;
};
export const trackOverlayInitializedExperiments = function trackOverlayInitializedExperiments() {
  const config = apexExperiment1.getConfig({ location: "OVERLAY_INITIALIZED" });
  const config1 = apexExperiment2.getConfig({ location: "OVERLAY_INITIALIZED" });
};
