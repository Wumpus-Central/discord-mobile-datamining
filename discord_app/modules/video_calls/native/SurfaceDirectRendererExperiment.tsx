// === Module 9850: SurfaceDirectRendererExperiment ===

// Module 9850 (SurfaceDirectRendererExperiment)
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

const require = fn;
const ApexExperiment = fn(1434);
const obj2 = { kind: "user", name: "2026-03-surface-direct-renderer", defaultConfig: { enableSurfaceDirectRenderer: false }, variations: null };
const obj3 = { 1: null };
obj3[1] = { enableSurfaceDirectRenderer: true };
obj2.variations = obj3;
let closure_3 = ApexExperiment.createApexExperiment(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/SurfaceDirectRendererExperiment.tsx");

export const ANDROID_SURFACE_DIRECT_RENDERER_EXPERIMENT = "2026-03-surface-direct-renderer";
export const isSurfaceDirectRendererExperimentEnabled = function isSurfaceDirectRendererExperimentEnabled() {
  return closure_3.getConfig({ location: "RTCConnection_media_engine_connect" }).enableSurfaceDirectRenderer;
};
export const useSurfaceDirectRendererExperiment = function useSurfaceDirectRendererExperiment(userId, location) {
  _require = userId;
  const items = [AuthenticationStore];
  const items1 = [userId];
  const obj = require("initialize");
  return null != userId && !require("initialize").useStateFromStores(items, () => closure_0 === AuthenticationStore.getId(), items1) && closure_3.useConfig(location).enableSurfaceDirectRenderer;
};