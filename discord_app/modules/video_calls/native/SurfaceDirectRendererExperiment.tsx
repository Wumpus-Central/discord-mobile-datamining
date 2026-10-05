// discord_app/modules/video_calls/native/SurfaceDirectRendererExperiment.tsx
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let obj2;
let obj = {
  kind: "user",
  name: "2026-03-surface-direct-renderer",
  defaultConfig: { enableSurfaceDirectRenderer: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { enableSurfaceDirectRenderer: true };
let closure_3 = ApexExperiment.createApexExperiment(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, cResult) => {
      let closure_0;
      let first;
      let tmp6;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      cResult = obj.c(4);
      const enableSurfaceDirectRenderer = closure_3.useConfig(cResult).enableSurfaceDirectRenderer;
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        cResult[0] = items;
        first = items;
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
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      const tmp8 = null != arg0 && !tmpResult.useStateFromStores(first, tmp6, tmp7) && enableSurfaceDirectRenderer;
      return tmp8;
    }
  : (arg0, cResult) => {
      let closure_0;
      _require = arg0;
      const enableSurfaceDirectRenderer = closure_3.useConfig(cResult).enableSurfaceDirectRenderer;
      const items = [AuthenticationStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      const tmp =
        null != arg0 &&
        !obj.useStateFromStores(items, () => closure_0 === AuthenticationStore.getId(), items1) &&
        enableSurfaceDirectRenderer;
      return tmp;
    };
const result = size.fileFinishedImporting("modules/video_calls/native/SurfaceDirectRendererExperiment.tsx");

export const ANDROID_SURFACE_DIRECT_RENDERER_EXPERIMENT = "2026-03-surface-direct-renderer";
export const isSurfaceDirectRendererExperimentEnabled = function isSurfaceDirectRendererExperimentEnabled() {
  return closure_3.getConfig({ location: "RTCConnection_media_engine_connect" }).enableSurfaceDirectRenderer;
};
export const useSurfaceDirectRendererExperiment = tmp2;
