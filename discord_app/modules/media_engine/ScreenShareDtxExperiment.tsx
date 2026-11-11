// === Module 6155: ScreenShareDtxExperiment ===

// Module 6155 (ScreenShareDtxExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ name: "2026-11-screen-share-dtx", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/media_engine/ScreenShareDtxExperiment.tsx");

export function getIsScreenShareDtxEnabled(RTCConnection) {
  return config.getConfig({ location: RTCConnection }).enabled;
}