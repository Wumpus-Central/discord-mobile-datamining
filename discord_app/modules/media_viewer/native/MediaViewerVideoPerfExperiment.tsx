// discord_app/modules/media_viewer/native/MediaViewerVideoPerfExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-10-media-viewer-video-perf-android",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_viewer/native/MediaViewerVideoPerfExperiment.tsx");

export const useIsMediaViewerVideoPerfEnabled = PlatformUtils.isAndroid()
  ? function useIsMediaViewerVideoPerfEnabledOnAndroid() {
      return closure_0.useConfig({ location: "mediaViewerVideoPerf" }).enabled;
    }
  : () => false;
