// === Module 14765: MediaViewerImprovementsExperiment ===

// Module 14765 (MediaViewerImprovementsExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-10-media-viewer-improvements", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_viewer/native/MediaViewerImprovementsExperiment.tsx");

export function useIsMediaViewerImprovementsEnabled() {
  return closure_0.useConfig({ location: "mediaViewerImprovements" }).enabled;
}