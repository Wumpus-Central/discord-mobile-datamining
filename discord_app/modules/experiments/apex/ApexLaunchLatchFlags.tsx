// === Module 1252: ApexLaunchLatchFlags ===

// Module 1252 (ApexLaunchLatchFlags)
import ApexUnitUtils from "ApexUnitUtils" /* 1253 */;
import size from "module_2" /* 2 */;

let obj = { writer: true, reads: false, exposures: false, suppressions: false };
const obj2 = { kind: "installation", name: "2026-11-apex-launch-latch", defaultConfig: obj, variations: null };
const obj3 = { 0: obj, 1: null, 2: null, 3: null, 4: null, 5: null };
const obj4 = {};
const merged = Object.assign(obj);
obj4.writer = false;
obj3[1] = obj4;
const obj5 = {};
const merged1 = Object.assign(obj);
obj5.reads = true;
obj3[2] = obj5;
const obj6 = {};
const merged2 = Object.assign(obj);
obj6.reads = true;
obj6.exposures = true;
obj3[3] = obj6;
const obj7 = {};
const merged3 = Object.assign(obj);
obj7.reads = true;
obj7.exposures = true;
obj7.suppressions = true;
obj3[4] = obj7;
const obj8 = {};
const merged4 = Object.assign(obj);
obj8.suppressions = true;
obj3[5] = obj8;
obj2.variations = obj3;
const result = size.fileFinishedImporting("modules/experiments/apex/ApexLaunchLatchFlags.tsx");

export const SHADOW_LATCH_FLAGS = obj;
export const ApexLaunchLatchFlags = obj2;
export function resolveLaunchLatchFlags(getAssignment) {
  const unitId = ApexUnitUtils.getUnitId("installation", { location: "apex_launch_latch_flags" });
  if ("" === unitId) {
    return obj2.defaultConfig;
  } else {
    const assignment = getAssignment.getAssignment("installation", unitId, obj2.name);
    let defaultConfig;
    if (null != assignment) {
      defaultConfig = obj2.variations[assignment.variantId];
    }
    if (null == defaultConfig) {
      defaultConfig = obj2.defaultConfig;
    }
    return defaultConfig;
  }
}