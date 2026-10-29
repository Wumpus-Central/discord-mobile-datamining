// === Module 11070: PinotExperiment ===

// Module 11070 (PinotExperiment)
import c from "c" /* 576 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1258 */;

const require = globalThis.__r;

require = fn;
let ApexExperiment = fn(1453);
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-10-pinot-admin", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
ApexExperiment = fn(1453);
const apexExperiment1 = ApexExperiment.createApexExperiment({ name: "2026-10-pinot-member", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
ApexExperiment = fn(1453);
const apexExperiment2 = ApexExperiment.createApexExperiment({ name: "2026-10-pinot-member-notice", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
fn(558);
let ReactCompilerGating = fn(558);
let obj2 = { name: "2026-10-pinot-admin", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const obj4 = { name: "2026-10-pinot-member", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const obj6 = { name: "2026-10-pinot-member-notice", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsPinotAdminEnabled(arg0, location) {
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
}) : (function useIsPinotAdminEnabled(arg0, location) {
  let str = arg0;
  if (arg0 == null) {
    str = "";
  }
  return null != arg0 && apexExperiment.useConfig({ guildId: str, location }).enabled;
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsPinotMemberNoticeEnabled(arg0, location) {
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
}) : (function useIsPinotMemberNoticeEnabled(arg0, location) {
  let str = arg0;
  if (arg0 == null) {
    str = "";
  }
  return null != arg0 && apexExperiment2.useConfig({ guildId: str, location }).enabled;
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsPinotMemberEnabled(location) {
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
}) : (function useIsPinotMemberEnabled(location) {
  return apexExperiment1.useConfig({ location }).enabled;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/PinotExperiment.tsx");

export const PinotAdminExperiment = apexExperiment;
export const PinotMemberExperiment = apexExperiment1;
export const PinotMemberNoticeExperiment = apexExperiment2;
export const useIsPinotAdminEnabled = tmp5;
export function isPinotAdminEnabled(guildId, location) {
  let enabled = null != guildId;
  if (enabled) {
    const obj = { guildId, location };
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
}
export const useIsPinotMemberNoticeEnabled = tmp6;
export const useIsPinotMemberEnabled = tmp7;
export function isPinotMemberEnabled(location, arg1) {
  return apexExperiment1.getConfig({ location }, arg1).enabled;
}
export const useIsPinotMemberEnabledWithoutExposure = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsPinotMemberEnabledWithoutExposure(_location) {
  _require = _location;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApexExperimentStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== _location) {
    const fn = function u() {
      return apexExperiment1.getConfig({ location: _location }, { autoTrackExposure: false }).enabled;
    };
    const items1 = [_location];
    cResult[1] = _location;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : (function useIsPinotMemberEnabledWithoutExposure(_location) {
  _require = _location;
  const items = [ApexExperimentStore];
  const items1 = [_location];
  return require("initialize").useStateFromStores(items, () => apexExperiment1.getConfig({ location: _location }, { autoTrackExposure: false }).enabled, items1);
});