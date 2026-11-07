// discord_app/modules/media_engine/ScreenShareDtxExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const config = ApexExperiment.createApexExperiment({
  name: "2026-11-screen-share-dtx",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/media_engine/ScreenShareDtxExperiment.tsx");

export function getIsScreenShareDtxEnabled(RTCConnection) {
  return config.getConfig({ location: RTCConnection }).enabled;
}
