// discord_app/modules/experiments/apex/ApexLaunchLatch.tsx
import Storage2 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import MurmurHashV3Default from "../../../../_runtime/01251_MurmurHashV3.js";
import ApexLaunchLatchFlags from "ApexLaunchLatchFlags.tsx";
import ApexUnitUtils from "ApexUnitUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
function copy(arg0) {
  return JSON.parse(JSON.stringify(arg0));
}
function getReceiptKey(nextResult) {
  items = [, ,];
  ({ kind: arr[0], unitId: arr[1], experimentName: arr[2] } = nextResult);
  return JSON.stringify(items);
}
function mergeReceipt(receipt, applied2) {
  let flag = false;
  if (tmp) {
    receipt.applied = true;
    flag = true;
  }
  for (const item10012 of tmp2) {
    let locations = arg0.locations;
    if (!locations.includes(item10012)) {
      let locations1 = arg0.locations;
      let arr = locations1.push(item10012);
      flag = true;
    }
    continue;
  }
  return flag;
}
const WebAnalyticsEvents = fn(1083).WebAnalyticsEvents;
const apexLaunchLatch = "apexLaunchLatch";
const logger = new fn(4).Logger("ApexLaunchLatch");
class StorageLaunchLatchBackend {
  constructor() {
    merged = Object.assign({ receipts: null, recordedReceipts: null });
    merged[0] = [];
    map = new Map();
    merged[1] = map;
    return merged;
  }
}
const prototype = StorageLaunchLatchBackend.prototype;
prototype["load"] = function load() {
  try {
    const Storage = Storage2.Storage;
    value = Storage.get(apexLaunchLatch);
    let schemaVersion;
    if (value != null) {
      schemaVersion = value.schemaVersion;
    }
    if (1 === schemaVersion) {
      const units = tmp5.units;
      let user;
      if (units != null) {
        user = units.user;
      }
      if (null != user) {
        const units2 = tmp5.units;
        let installation;
        if (units2 != null) {
          installation = units2.installation;
        }
        if (null != installation) {
          return value;
        }
      }
    }
  } catch (tmp12) {
    logger.error("Unable to load launch latch", tmp12);
  }
};
prototype["save"] = function save(arg0) {
  try {
    const Storage = Storage2.Storage;
    const result = Storage.set(apexLaunchLatch, arg0);
  } catch (tmp6) {
    logger.error("Unable to save launch latch", tmp6);
  }
};
prototype["recordReceipt"] = function recordReceipt(value) {
  const self = this;
  items = [, ,];
  ({ kind: arr[0], unitId: arr[1], experimentName: arr[2] } = value);
  const json = JSON.stringify(items);
  const recordedReceipts = this.recordedReceipts;
  value = recordedReceipts.get(json);
  if (null == value) {
    const _JSON = JSON;
    const _JSON2 = JSON;
    const parsed = JSON.parse(JSON.stringify(value));
    const recordedReceipts2 = self.recordedReceipts;
    const result = recordedReceipts2.set(json, parsed);
    value = parsed;
  }
  const receipts = self.receipts;
  if (!receipts.includes(value)) {
    const receipts1 = self.receipts;
    receipts1.push(value);
  }
};
prototype["drainReceipts"] = function drainReceipts(arg0) {
  closure_0 = arg0;
  ({ receipts, receipts: receipts2 } = this);
  const found = receipts.filter((kind) => kind.kind === closure_0);
  this.receipts = receipts2.filter((kind) => kind.kind !== closure_0);
  return found;
};
class ApexLaunchLatch {
  constructor() {
    obj = global;
    if (global === undefined) {
      tmp = new.target;
      if (typeof StorageLaunchLatchBackend === "function") {
        merged = Object.assign({ receipts: null, recordedReceipts: null });
        merged[0] = [];
        tmp3 = globalThis;
        _Map = Map;
        tmp4 = new.target;
        tmp5 = new.target;
        map = new Map();
        tmp7 = map;
        merged[1] = map;
        obj = merged;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    merged1 = Object.assign({ frozen: null });
    map1 = new Map();
    merged1[0] = map1;
    merged1.backend = obj;
    loadResult = obj.load();
    if (loadResult == null) {
      obj1 = { schemaVersion: 1, activeUserId: null, units: null };
      obj4 = { user: null, installation: null };
      obj4.user = {};
      obj4.installation = {};
      obj1.units = obj4;
      loadResult = obj1;
    }
    merged1.pending = JSON.parse(JSON.stringify(loadResult));
    merged1.active = JSON.parse(JSON.stringify(merged1.pending));
    merged1.launchUserId = merged1.active.activeUserId;
    tmp11 = undefined;
    if (null != merged1.launchUserId) {
      tmp11 = merged1.active.units.user[merged1.launchUserId];
    }
    parsed = undefined;
    if (null != tmp11) {
      _JSON = JSON;
      _JSON2 = JSON;
      parsed = JSON.parse(JSON.stringify(tmp11));
    }
    merged1.launchUserEvaluation = parsed;
    return merged1;
  }
}
const prototype2 = ApexLaunchLatch.prototype;
prototype2["write"] = function write(arg0, arg1, assignments, activeUserId) {
  if ("user" !== arg0) {
    const _Object = Object;
    const _Object2 = Object;
    const entries = Object.entries(assignments.assignments);
    let evaluationId;
    const fromEntriesResult = Object.fromEntries(
      entries.filter((item) => {
        [, tmp] = item;
        return tmp.isAppLaunch;
      }),
    );
    const _Object3 = Object;
    const values = Object.values(fromEntriesResult);
    if (values.some((isOverride) => !isOverride.isOverride)) {
      evaluationId = assignments.evaluationId;
    }
    const self = this;
    const obj = {};
    const merged = Object.assign(this.pending);
    obj.activeUserId = activeUserId;
    const obj2 = {};
    const merged1 = Object.assign(this.pending.units);
    const obj3 = {};
    const merged2 = Object.assign(this.pending.units[arg0]);
    const obj4 = { evaluationId, assignments: fromEntriesResult };
    const _JSON = JSON;
    const _JSON2 = JSON;
    obj3[arg1] = JSON.parse(JSON.stringify(obj4));
    obj2[arg0] = obj3;
    obj.units = obj2;
    this.pending = obj;
    const backend = this.backend;
    const _JSON3 = JSON;
    const _JSON4 = JSON;
    backend.save(JSON.parse(JSON.stringify(this.pending)));
  }
};
prototype2["logout"] = function logout(arg0) {
  const self = this;
  let tmp3 = arg0;
  const merged = Object.assign(this.pending.units.user);
  if (!arg0) {
    tmp3 = null == self.pending.activeUserId;
  }
  if (!tmp3) {
    const activeUserId = self.pending.activeUserId;
    delete tmp2[tmp];
  }
  const obj2 = {};
  const merged1 = Object.assign(self.pending);
  obj2.activeUserId = null;
  const obj3 = {};
  const merged2 = Object.assign(self.pending.units);
  obj3.user = {};
  obj2.units = obj3;
  self.pending = obj2;
  const backend = self.backend;
  backend.save(JSON.parse(JSON.stringify(self.pending)));
};
prototype2["hasAssignment"] = function hasAssignment(kind, id, experimentName) {
  const self = this;
  if ("user" === kind) {
    let launchUserEvaluation = self.launchUserEvaluation;
  } else {
    launchUserEvaluation = self.active.units.installation[id];
  }
  const frozen = self.frozen;
  let hasItem = frozen.has("" + kind + ":" + experimentName);
  if (!hasItem) {
    let tmp4;
    if (launchUserEvaluation != null) {
      const obj = MurmurHashV3Default;
      tmp4 = launchUserEvaluation.assignments[obj.v3(obj, experimentName)];
    }
    hasItem = null != tmp4;
  }
  return hasItem;
};
prototype2["read"] = function read(kind, arg1, experimentName, arg3, arg4) {
  let tmp2 = tmp;
  if ("user" === kind) {
    let tmp4 = null == arg1;
    if (!tmp4) {
      tmp4 = "" === arg1;
    }
    tmp2 = tmp4;
  }
  const self = this;
  let tmp5 = arg3;
  const combined = "" + kind + ":" + experimentName;
  const frozen = this.frozen;
  value = frozen.get(combined);
  let flag = false;
  if (null == value) {
    let launchUserId = arg1;
    if (tmp) {
      launchUserId = self.launchUserId;
    }
    if (tmp) {
      let launchUserEvaluation = self.launchUserEvaluation;
    } else if (null != launchUserId) {
      launchUserEvaluation = self.active.units.installation[launchUserId];
    }
    if (launchUserEvaluation != null) {
      const obj = MurmurHashV3Default;
      const tmp8 = launchUserEvaluation.assignments[obj.v3(obj, experimentName)];
    }
    let str3 = "latch_no_unit";
    if (null != launchUserId) {
      str3 = "latch_no_unit";
      if ("" !== launchUserId) {
        let str4;
        if (null == tmp8) {
          str4 = "latch_no_record";
        }
        str3 = str4;
      }
    }
    const obj2 = {
      kind,
      unitId: launchUserId,
      experimentName,
      evaluationId: null,
      assignment: null,
      locations: null,
      applied: null,
      suppression: null,
    };
    let tmp12;
    if (null == str3) {
      let isOverride;
      if (tmp8 != null) {
        isOverride = tmp8.isOverride;
      }
      if (true !== isOverride) {
        let evaluationId;
        if (launchUserEvaluation != null) {
          evaluationId = launchUserEvaluation.evaluationId;
        }
        tmp12 = evaluationId;
      }
    }
    obj2.evaluationId = tmp12;
    let tmp15;
    if (null == str3) {
      tmp15 = tmp8;
    }
    obj2.assignment = tmp15;
    obj2.locations = [];
    let tmp16 = tmp5;
    if (tmp5) {
      let tmp17 = tmp2;
      if (!tmp2) {
        tmp17 = arg1 === launchUserId;
      }
      tmp16 = tmp17;
    }
    if (tmp16) {
      tmp16 = tmp11;
    }
    if (tmp16) {
      let isOverride1;
      if (tmp8 != null) {
        isOverride1 = tmp8.isOverride;
      }
      tmp16 = true !== isOverride1;
    }
    obj2.applied = tmp16;
    obj2.suppression = str3;
    const frozen2 = self.frozen;
    const result = frozen2.set(combined, obj2);
    flag = true;
    value = obj2;
  }
  if (!tmp2) {
    tmp2 = arg1 === value.unitId;
  }
  let tmp20 = null != arg4 && tmp2;
  if (tmp20) {
    const locations = value.locations;
    tmp20 = !locations.includes(arg4);
  }
  if (tmp20) {
    const locations1 = value.locations;
    locations1.push(arg4);
    flag = true;
  }
  if (tmp5) {
    tmp5 = tmp2;
  }
  if (tmp5) {
    tmp5 = !value.applied;
  }
  if (tmp5) {
    tmp5 = null != value.assignment;
  }
  if (tmp5) {
    tmp5 = !value.assignment.isOverride;
  }
  if (tmp5) {
    value.applied = true;
    flag = true;
  }
  if (flag) {
    const backend = self.backend;
    backend.recordReceipt(value);
  }
  return value;
};
prototype2["appliedUsers"] = function appliedUsers() {
  const frozen = this.frozen;
  items = [...frozen.values()];
  return items.filter((kind) => "user" === kind.kind && kind.applied);
};
prototype2["drainReceipts"] = function drainReceipts(arg0) {
  const backend = this.backend;
  return backend.drainReceipts(arg0);
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/experiments/apex/ApexLaunchLatch.tsx");
class ApexLaunchLatchController {
  constructor(arg0, arg1, arg2) {
    closure_0 = global;
    fn = importAll;
    if (importAll === undefined) {
      fn = function c() {
        return ApexLaunchLatchFlags.resolveLaunchLatchFlags(closure_0);
      };
    }
    merged = Object.assign({
      latchUserId: null,
      latchInstallationId: null,
      lastLatchUserId: null,
      appliedLatchUsers: null,
      authenticatedUsers: null,
      accountSwitchSuppressions: null,
      receiptStates: null,
    });
    map = new Map();
    merged[3] = map;
    set = new Set();
    merged[4] = set;
    set1 = new Set();
    merged[5] = set1;
    map1 = new Map();
    merged[6] = map1;
    merged.host = global;
    merged.track = fn;
    merged.getLaunchLatchFlags = fn;
    merged.latch = new ApexLaunchLatch(importDefault);
    return merged;
  }
}
const prototype3 = ApexLaunchLatchController.prototype;
prototype3["updateUnits"] = function updateUnits() {
  const unitId = ApexUnitUtils.getUnitId("installation", { location: "apex_launch_latch" });
  let id = null;
  if (AuthenticationStore.isAuthenticated()) {
    id = AuthenticationStore.getId();
  }
  let tmp3 = null;
  if ("" !== unitId) {
    tmp3 = unitId;
  }
  this.setUnits(id, tmp3);
};
prototype3["setUnits"] = function setUnits(id, unitId) {
  const self = this;
  if (null != id) {
    const authenticatedUsers = self.authenticatedUsers;
    authenticatedUsers.add(id);
  }
  if (null != id) {
    if (null != self.lastLatchUserId) {
      if (id !== self.lastLatchUserId) {
        const accountSwitchSuppressions = self.accountSwitchSuppressions;
        accountSwitchSuppressions.clear();
        if (self.getLaunchLatchFlags().suppressions) {
          const _Map = Map;
          const map = new Map(self.appliedLatchUsers);
          const latch = self.latch;
          const appliedUsersResult = latch.appliedUsers();
          for (const item10020 of appliedUsersResult) {
            let result = map.set(item10020.experimentName, item10020);
            continue;
          }
          const values = map.values();
          for (const item10031 of values) {
            let result1 = self.trackAccountSwitchSuppression(item10031.experimentName, item10031.unitId);
            continue;
          }
        }
      }
    }
  }
  if (null != id) {
    self.lastLatchUserId = id;
  }
  self.latchUserId = id;
  self.latchInstallationId = unitId;
};
prototype3["drainReceipts"] = function drainReceipts(arg0) {
  const self = this;
  if (null == arg0) {
    self.drainReceipts("user");
    self.drainReceipts("installation");
  } else if ("user" !== arg0) {
    const launchLatchFlags = self.getLaunchLatchFlags();
    const _Map = Map;
    const map = new Map();
    const latch = self.latch;
    const drainReceiptsResult2 = latch.drainReceipts(arg0);
    const iter = drainReceiptsResult2[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp11 = nextResult;
      let tmp13 = getReceiptKey(nextResult);
      let tmp14 = tmp13;
      let receiptStates = self.receiptStates;
      value = receiptStates.get(tmp13);
      let tmp16 = value;
      if (null == value) {
        let obj = { receipt: null, exposedLocations: null };
        obj.receipt = copy(tmp11);
        let _Set = Set;
        let tmp23 = new.target;
        let tmp24 = new.target;
        let set = new Set();
        obj.exposedLocations = set;
        tmp16 = obj;
        let receiptStates2 = self.receiptStates;
        let result = receiptStates2.set(tmp14, obj);
      } else {
        let tmp20 = mergeReceipt(tmp16.receipt, tmp11);
      }
      let result1 = map.set(tmp14, tmp16);
      continue;
    }
    const values = map.values();
    const iter2 = values[Symbol.iterator]();
    const nextResult1 = iter2.next();
    while (iter2 !== undefined) {
      let tmp37 = nextResult1;
      if ("suppressed" !== nextResult1.outcome) {
        if ("ignored" !== tmp37.outcome) {
          let receipt = tmp37.receipt;
          let tmp94 = receipt;
          let assignment2 = receipt.assignment;
          let isOverride;
          if (assignment2 != null) {
            isOverride = assignment2.isOverride;
          }
          if (isOverride) {
            tmp37.outcome = "ignored";
          } else {
            let tmp39 = "user" === arg0 ? self.latchUserId : self.latchInstallationId;
            let tmp40 = tmp39;
            let applied = "user" === tmp94.kind;
            if (applied) {
              applied = tmp94.applied;
            }
            if (applied) {
              let appliedLatchUsers = self.appliedLatchUsers;
              let result2 = appliedLatchUsers.set(tmp94.experimentName, tmp94);
            }
            let suppression = tmp94.suppression;
            if (suppression == null) {
              let str9 = "latch_no_unit";
              if (null != tmp40) {
                str9 = "latch_no_unit";
                if ("" !== tmp40) {
                  if (tmp94.unitId !== tmp40) {
                    let str11 = "latch_unit_mismatch";
                    if ("user" === tmp94.kind) {
                      str11 = "latch_unit_mismatch";
                      if (null != tmp94.unitId) {
                        let authenticatedUsers = self.authenticatedUsers;
                        str11 = "latch_unit_mismatch";
                        if (authenticatedUsers.has(tmp94.unitId)) {
                          str11 = "latch_account_switched";
                        }
                      }
                    }
                  } else if (null == tmp94.assignment) {
                    let str10 = "latch_no_record";
                  }
                }
              }
              suppression = str9;
            }
            let tmp54 = suppression;
            if (null == suppression) {
              if (tmp94.applied) {
                let assignment = tmp94.assignment;
                if (launchLatchFlags.exposures) {
                  if (null != tmp94.evaluationId) {
                    if (null != assignment) {
                      if (assignment.exposureTrackingEnabled) {
                        if (!assignment.useAsEligibility) {
                          if (null != assignment.revision) {
                            if (null != tmp40) {
                              tmp37.outcome = "exposed";
                              let _Set2 = Set;
                              items = ["app_launch"];
                              let arraySpreadResult = HermesBuiltin.arraySpread(tmp94.locations, 1);
                              let tmp103 = new.target;
                              let tmp104 = new.target;
                              let set1 = new Set(items);
                              for (const item10146 of set1) {
                                let exposedLocations = tmp37.exposedLocations;
                                if (!exposedLocations.has(item10146)) {
                                  let exposedLocations2 = tmp37.exposedLocations;
                                  let addResult = exposedLocations2.add(item10146);
                                  let host = self.host;
                                  ({ evaluationId, experimentName } = tmp94);
                                  ({ revision, trackedVariantId } = assignment);
                                  if (trackedVariantId == null) {
                                    trackedVariantId = assignment.variantId;
                                  }
                                  let result3 = host.trackExperimentExposure(
                                    evaluationId,
                                    experimentName,
                                    item10146,
                                    arg0,
                                    revision,
                                    trackedVariantId,
                                    tmp40,
                                  );
                                }
                                continue;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                if (tmp37.outcome == null) {
                  tmp37.outcome = "ignored";
                }
              }
            } else if ("exposed" === tmp37.outcome) {
              continue;
            } else {
              tmp37.outcome = "suppressed";
              if ("latch_account_switched" === tmp54) {
                let result4 = self.trackAccountSwitchSuppression(tmp94.experimentName, tmp94.unitId);
              } else if (launchLatchFlags.suppressions) {
                let result5 = self.trackExposureSuppression(tmp94.experimentName, tmp54, tmp94.kind, tmp40);
              }
            }
            continue;
          }
        }
      }
      continue;
    }
  }
};
prototype3["onAssignmentsIngested"] = function onAssignmentsIngested(arg0, arg1, assignments) {
  if ("guild" !== arg0) {
    const self = this;
    if (this.getLaunchLatchFlags().writer) {
      const obj = {};
      const merged = Object.assign(assignments.assignments);
      const _Object = Object;
      const host = self.host;
      const entries = Object.entries(host.getOverrides());
      const tmp7 = entries[Symbol.iterator]();
      while (tmp7 !== undefined) {
        let tmp13 = _slicedToArray(tmp10, 2);
        let tmp14 = tmp13[1];
        let host2 = self.host;
        let hash = host2.getHash(tmp13[0]);
        let tmp17 = obj[hash];
        let isAppLaunch;
        let tmp16 = hash;
        if (tmp17 != null) {
          isAppLaunch = tmp17.isAppLaunch;
        }
        if (isAppLaunch) {
          let obj2 = {};
          let merged1 = Object.assign(tmp14);
          obj2.isAppLaunch = true;
          obj[tmp16] = obj2;
        }
        continue;
      }
      const latch = self.latch;
      const obj3 = {};
      const merged2 = Object.assign(assignments);
      obj3.assignments = obj;
      latch.write(arg0, arg1, obj3, self.latchUserId);
    }
  }
};
prototype3["resolveConfigAssignment"] = function resolveConfigAssignment(kind, id, experimentName) {
  if ("guild" !== kind) {
    const self = this;
    const host = this.host;
    const serverAssignment = host.getServerAssignment(kind, id, experimentName);
    let isAppLaunch;
    if (serverAssignment != null) {
      isAppLaunch = serverAssignment.isAppLaunch;
    }
    if (isAppLaunch) {
      const launchLatchFlags = self.getLaunchLatchFlags();
      if (launchLatchFlags.writer) {
        const latch2 = self.latch;
        let tmp3 = null;
        if (null != id) {
          tmp3 = null;
          if ("" !== id) {
            tmp3 = id;
          }
        }
        const readResult = latch2.read(kind, tmp3, experimentName, false);
        self.drainReceipts(kind);
        if (launchLatchFlags.reads) {
          let tmp10 = readResult.unitId === id;
          if (tmp10) {
            tmp10 = "user" !== kind || id === self.latchUserId;
            const tmp11 = "user" !== kind || id === self.latchUserId;
          }
          let tmp12 =
            "user" !== kind ||
            tmp10 ||
            null == readResult.assignment ||
            readResult.assignment.isOverride ||
            null == readResult.unitId ||
            null == self.latchUserId ||
            self.latchUserId === readResult.unitId;
          if (!tmp12) {
            const authenticatedUsers = self.authenticatedUsers;
            tmp12 = !authenticatedUsers.has(readResult.unitId);
          }
          if (!tmp12) {
            const result = self.trackAccountSwitchSuppression(experimentName, readResult.unitId);
          }
          let evaluationId;
          if (tmp10) {
            evaluationId = readResult.evaluationId;
          }
          const obj = { evaluationId, assignment: readResult.assignment };
          return obj;
        }
      }
    } else {
      const latch = self.latch;
    }
  }
};
prototype3["onConfigApplied"] = function onConfigApplied(kind, id, name) {
  if ("guild" !== kind) {
    const self = this;
    if (this.getLaunchLatchFlags().reads) {
      const latch = self.latch;
      if (latch.hasAssignment(kind, id, name)) {
        if ("user" === kind) {
          if (null != self.latchUserId) {
            const latch2 = self.latch;
            if (null != id) {
            }
          }
        }
        const latch3 = self.latch;
        let tmp13 = null;
        if (null != id) {
          tmp13 = null;
          if ("" !== id) {
            tmp13 = id;
          }
        }
        latch3.read(kind, tmp13, name, true);
        self.drainReceipts(kind);
      } else {
        const host = self.host;
        const serverAssignment = host.getServerAssignment(kind, id, name);
        let isAppLaunch;
        if (serverAssignment != null) {
          isAppLaunch = serverAssignment.isAppLaunch;
        }
      }
    }
  }
};
prototype3["logout"] = function logout(arg0) {
  const latch = this.latch;
  latch.logout(arg0);
  this.latchUserId = null;
};
prototype3["trackAccountSwitchSuppression"] = function trackAccountSwitchSuppression(experimentName, unitId) {
  const self = this;
  let suppressions = this.getLaunchLatchFlags().suppressions;
  if (suppressions) {
    const accountSwitchSuppressions = self.accountSwitchSuppressions;
    suppressions = !accountSwitchSuppressions.has(experimentName);
  }
  if (suppressions) {
    const result = self.trackExposureSuppression(experimentName, "latch_account_switched", "user", unitId);
    const accountSwitchSuppressions2 = self.accountSwitchSuppressions;
    accountSwitchSuppressions2.add(experimentName);
  }
};
prototype3["trackExposureSuppression"] = function trackExposureSuppression(
  experiment,
  suppression_source,
  unit_type,
  arg3,
) {
  const self = this;
  if ("user" === unit_type) {
    const obj2 = { experiment, unit_type, suppression_source };
    self.track(WebAnalyticsEvents.EXPERIMENT_USER_EXPOSURE_SUPPRESSED, obj2, { flush: true });
  } else {
    let first = arg3;
    if (arg3 == null) {
      const _Object = Object;
      const host = self.host;
      first = Object.keys(host.getState().evaluatedExperiments.installation)[0];
    }
    const obj = { experiment, unit_type, suppression_source, installation_id: first };
    self.track(WebAnalyticsEvents.EXPERIMENT_INSTALLATION_EXPOSURE_SUPPRESSED, obj, { flush: true });
  }
};

export const SHADOW_LATCH_FLAGS = fn(1252).SHADOW_LATCH_FLAGS;
export { StorageLaunchLatchBackend };
export { ApexLaunchLatch };
export { ApexLaunchLatchController };
