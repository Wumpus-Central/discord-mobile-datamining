// === Module 9591: ANDROID_SURFACE_DIRECT_RENDERER_EXPERIMENT ===

// Module 9591 (ANDROID_SURFACE_DIRECT_RENDERER_EXPERIMENT)
import closure_2 from "fetchFingerprint" /* 1215 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const require = arg1;
ApexExperiment = { 1: null };
ApexExperiment[1] = { enableSurfaceDirectRenderer: true };
let closure_3 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-surface-direct-renderer", defaultConfig: { enableSurfaceDirectRenderer: false }, variations: ApexExperiment });
const result = require("set").fileFinishedImporting("modules/video_calls/native/SurfaceDirectRendererExperiment.tsx");

export const ANDROID_SURFACE_DIRECT_RENDERER_EXPERIMENT = "2026-03-surface-direct-renderer";
export const isSurfaceDirectRendererExperimentEnabled = function isSurfaceDirectRendererExperimentEnabled() {
  return closure_3.getConfig({ location: "RTCConnection_media_engine_connect" }).enableSurfaceDirectRenderer;
};
export const useSurfaceDirectRendererExperiment = function useSurfaceDirectRendererExperiment(userId, location) {
  const _require = userId;
  const items = [closure_2];
  const items1 = [userId];
  const obj = _require(586);
  return null != userId && !_require(586).useStateFromStores(items, () => closure_0 === closure_1_2.getId(), items1) && closure_3.useConfig(location).enableSurfaceDirectRenderer;
};