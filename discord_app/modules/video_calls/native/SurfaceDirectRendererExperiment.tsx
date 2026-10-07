// discord_app/modules/video_calls/native/SurfaceDirectRendererExperiment.tsx
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

const require = globalThis.__r;

const require = fn;
const ApexExperiment = fn(1440);
const obj2 = {
  kind: "user",
  name: "2026-03-surface-direct-renderer",
  defaultConfig: { enableSurfaceDirectRenderer: false },
  variations: null,
};
const obj3 = { 1: null };
obj3[1] = { enableSurfaceDirectRenderer: true };
obj2.variations = obj3;
let closure_3 = ApexExperiment.createApexExperiment(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/SurfaceDirectRendererExperiment.tsx");

export const ANDROID_SURFACE_DIRECT_RENDERER_EXPERIMENT = "2026-03-surface-direct-renderer";
export const isSurfaceDirectRendererExperimentEnabled = function isSurfaceDirectRendererExperimentEnabled() {
  return closure_3.getConfig({ location: "RTCConnection_media_engine_connect" }).enableSurfaceDirectRenderer;
};
export const useSurfaceDirectRendererExperiment = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, cResult) => {
      _require = arg0;
      cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          return closure_0 === AuthenticationStore.getId();
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = require("c");
      const tmpResult = require("initialize");
      return (
        null != arg0 &&
        !require("initialize").useStateFromStores(first, tmp6, tmp7) &&
        closure_3.useConfig(cResult).enableSurfaceDirectRenderer
      );
    }
  : (arg0, cResult) => {
      _require = arg0;
      const items = [AuthenticationStore];
      const items1 = [arg0];
      const obj = require("initialize");
      return (
        null != arg0 &&
        !require("initialize").useStateFromStores(items, () => closure_0 === AuthenticationStore.getId(), items1) &&
        closure_3.useConfig(cResult).enableSurfaceDirectRenderer
      );
    };
