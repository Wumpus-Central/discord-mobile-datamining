// discord_app/modules/media_viewer/native/MediaViewerImprovementsExperiment.tsx
import c from "../../../../_runtime/00576_c.js";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-10-media-viewer-improvements",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_viewer/native/MediaViewerImprovementsExperiment.tsx");

export const useIsMediaViewerImprovementsEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsMediaViewerImprovementsEnabled() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "mediaViewerImprovements" };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      return closure_2.useConfig(first).enabled;
    }
  : function useIsMediaViewerImprovementsEnabled() {
      return closure_2.useConfig({ location: "mediaViewerImprovements" }).enabled;
    };
