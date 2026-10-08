// discord_app/modules/billing/experiments/BlockedPaymentsCountryExperiment.tsx
import c from "../../../../_runtime/00576_c.js";
import ApexExperiment from "../../experiments/apex/index.tsx";
import "ReactCompilerGating";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = { name: "2026-03-block-purchases", kind: "user", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_3 = ApexExperiment.createApexExperiment(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useBlockedPaymentsConfig() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "c519a9_1" };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      let enabled = closure_3.useConfig(first).enabled;
      if (!enabled) {
        enabled = "RU" === tmp3;
      }
      return enabled;
    }
  : function useBlockedPaymentsConfig() {
      let enabled = closure_3.useConfig({ location: "c519a9_1" }).enabled;
      if (!enabled) {
        enabled = "RU" === tmp;
      }
      return enabled;
    };
const result = size.fileFinishedImporting("modules/billing/experiments/BlockedPaymentsCountryExperiment.tsx");

export const useBlockedPaymentsConfig = tmp2;
export const useIsPaymentsBlocked = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsPaymentsBlocked() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "dc120b_3" };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      return closure_3.useConfig(first).enabled;
    }
  : function useIsPaymentsBlocked() {
      return closure_3.useConfig({ location: "dc120b_3" }).enabled;
    };
export const getIsPaymentsBlocked = function getIsPaymentsBlocked() {
  return closure_3.getConfig({ location: "1ee357_1" }).enabled;
};
