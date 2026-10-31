// === Module 8847: MediaViewerVideoPerfExperiment ===

// Module 8847 (MediaViewerVideoPerfExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-10-media-viewer-video-perf-android", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_viewer/native/MediaViewerVideoPerfExperiment.tsx");

export const useIsMediaViewerVideoPerfEnabled = PlatformUtils.isAndroid() ? (function useIsMediaViewerVideoPerfEnabledOnAndroid() {
  return closure_0.useConfig({ location: "mediaViewerVideoPerf" }).enabled;
}) : (() => false);