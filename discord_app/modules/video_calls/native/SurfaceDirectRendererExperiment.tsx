// discord_app/modules/video_calls/native/SurfaceDirectRendererExperiment.tsx
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

const require = fn;
fn(1433);
let ApexExperiment = {
  kind: "user",
  name: "2026-03-surface-direct-renderer",
  defaultConfig: { enableSurfaceDirectRenderer: false },
  variations: null,
};
ApexExperiment = { 1: null };
ApexExperiment[1] = { enableSurfaceDirectRenderer: true };
ApexExperiment.variations = ApexExperiment;
let closure_3 = ApexExperiment.createApexExperiment(ApexExperiment);
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
  return (
    null != userId &&
    !require("initialize").useStateFromStores(items, () => closure_0 === AuthenticationStore.getId(), items1) &&
    closure_3.useConfig(location).enableSurfaceDirectRenderer
  );
};
