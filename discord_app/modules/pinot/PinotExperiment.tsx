// discord_app/modules/pinot/PinotExperiment.tsx
import c from "../../../_runtime/00576_c.js";
import ApexExperiment_mod from "../experiments/apex/index.tsx";
import "ReactCompilerGating";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let ApexExperiment = ApexExperiment_mod;
const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-10-pinot-admin",
  kind: "guild",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
let ApexExperiment = ApexExperiment_mod;
const apexExperiment1 = ApexExperiment.createApexExperiment({
  name: "2026-10-pinot-member",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
let ApexExperiment = ApexExperiment_mod;
const apexExperiment2 = ApexExperiment.createApexExperiment({
  name: "2026-10-pinot-member-notice",
  kind: "guild",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
let ReactCompilerGating = ReactCompilerGating_mod;
let obj = {
  name: "2026-10-pinot-admin",
  kind: "guild",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
};
let obj2 = {
  name: "2026-10-pinot-member",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
};
const obj3 = {
  name: "2026-10-pinot-member-notice",
  kind: "guild",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
};
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsPinotAdminEnabled(arg0, location) {
      const cResult = c.c(3);
      let str = arg0;
      if (arg0 == null) {
        str = "";
      }
      if (cResult[0] === location) {
        if (cResult[1] === str) {
          let tmp2 = cResult[2];
        }
        return null != arg0 && apexExperiment.useConfig(tmp2).enabled;
      }
      const obj2 = { guildId: str, location };
      cResult[0] = location;
      cResult[1] = str;
      cResult[2] = obj2;
      tmp2 = obj2;
    }
  : function useIsPinotAdminEnabled(arg0, location) {
      let str = arg0;
      if (arg0 == null) {
        str = "";
      }
      return null != arg0 && apexExperiment.useConfig({ guildId: str, location }).enabled;
    };
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsPinotMemberNoticeEnabled(arg0, location) {
      const cResult = c.c(3);
      let str = arg0;
      if (arg0 == null) {
        str = "";
      }
      if (cResult[0] === location) {
        if (cResult[1] === str) {
          let tmp2 = cResult[2];
        }
        return null != arg0 && apexExperiment2.useConfig(tmp2).enabled;
      }
      const obj2 = { guildId: str, location };
      cResult[0] = location;
      cResult[1] = str;
      cResult[2] = obj2;
      tmp2 = obj2;
    }
  : function useIsPinotMemberNoticeEnabled(arg0, location) {
      let str = arg0;
      if (arg0 == null) {
        str = "";
      }
      return null != arg0 && apexExperiment2.useConfig({ guildId: str, location }).enabled;
    };
const result = size.fileFinishedImporting("modules/pinot/PinotExperiment.tsx");

export const PinotAdminExperiment = apexExperiment;
export const PinotMemberExperiment = apexExperiment1;
export const PinotMemberNoticeExperiment = apexExperiment2;
export const useIsPinotAdminEnabled = tmp5;
export const isPinotAdminEnabled = function isPinotAdminEnabled(guildId, location) {
  let enabled = null != guildId;
  if (enabled) {
    const obj = { guildId, location };
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
};
export const useIsPinotMemberNoticeEnabled = tmp6;
export const useIsPinotMemberEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsPinotMemberEnabled(location) {
      const cResult = c.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp2 = obj2;
      } else {
        tmp2 = cResult[1];
      }
      return apexExperiment1.useConfig(tmp2).enabled;
    }
  : function useIsPinotMemberEnabled(location) {
      return apexExperiment1.useConfig({ location }).enabled;
    };
export const isPinotMemberEnabled = function isPinotMemberEnabled(location, arg1) {
  return apexExperiment1.getConfig({ location }, arg1).enabled;
};
