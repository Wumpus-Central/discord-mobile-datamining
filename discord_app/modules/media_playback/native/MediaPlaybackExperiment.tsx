// === Module 8866: MediaPlaybackExperiment ===

// Module 8866 (MediaPlaybackExperiment)
import NativeMediaPlaybackModuleDefault from "NativeMediaPlaybackModule" /* 8867 */;
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-10-mobile-media-playback", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let result = size.fileFinishedImporting("modules/media_playback/native/MediaPlaybackExperiment.tsx");

export function initializeMediaPlaybackExperiment() {
  const result = NativeMediaPlaybackModuleDefault.setEnabledForNextLaunch(config.getConfig({ location: "loaded" }).enabled);
}
export function isNativeMediaPlaybackEnabled() {
  if (closure_2 == null) {
    closure_2 = NativeMediaPlaybackModuleDefault.isEnabled();
  }
  return closure_2;
}