// discord_app/modules/media_playback/native/MediaPlaybackExperiment.tsx
import NativeMediaPlaybackModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeMediaPlaybackModule.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const config = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-10-mobile-media-playback",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
let result = size.fileFinishedImporting("modules/media_playback/native/MediaPlaybackExperiment.tsx");

export function initializeMediaPlaybackExperiment() {
  const result = NativeMediaPlaybackModuleDefault.setEnabledForNextLaunch(
    config.getConfig({ location: "loaded" }).enabled,
  );
}
export function isNativeMediaPlaybackEnabled() {
  if (closure_2 == null) {
    closure_2 = NativeMediaPlaybackModuleDefault.isEnabled();
  }
  return closure_2;
}
