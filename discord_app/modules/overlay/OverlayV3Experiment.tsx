// === Module 4324: apexExperiment ===

// Module 4324 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

let obj = { 1: null, 2: { keybindOverride: "ctrl+tab" }, 3: { keybindOverride: "alt+x" } };
obj[3] = { keybindOverride: "ctrl+l" };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-overlay-default-keybind", kind: "user", defaultConfig: { keybindOverride: "r" }, variations: obj });
obj = { 1: null, 2: { hasChat: true, hasFriendList: false, showNowPlayingForDifferentGames: false }, 3: { hasChat: true, hasFriendList: true, showNowPlayingForDifferentGames: false } };
obj[3] = { hasChat: true, hasFriendList: true, showNowPlayingForDifferentGames: true };
const apexExperiment1 = ApexExperiment.createApexExperiment({ name: "2025-11-overlay-chat", kind: "user", defaultConfig: { hasChat: false, hasFriendList: false, showNowPlayingForDifferentGames: false }, variations: obj });
const obj1 = { 1: null };
obj1[1] = { enabled: true };
const apexExperiment2 = ApexExperiment.createApexExperiment({ name: "2026-04-overlay-streamer-mode", kind: "user", defaultConfig: { enabled: false }, variations: obj1 });
const result = set.fileFinishedImporting("modules/overlay/OverlayV3Experiment.tsx");

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