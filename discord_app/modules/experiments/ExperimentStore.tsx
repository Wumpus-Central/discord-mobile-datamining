// === Module 4359: getHash ===

// Module 4359 (getHash)
import timestampDefault from "timestamp" /* 3 */;
import applyDefault from "apply" /* 12 */;
import Storage5 from "Storage" /* 595 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcher from "dispatcher" /* 709 */;
import MurmurHashV3Default from "MurmurHashV3" /* 1217 */;
import clearAllDefault from "clearAll" /* 1220 */;
import Version from "Version" /* 4361 */;
import isInRange from "isInRange" /* 4364 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "fetchFingerprint" /* 1218 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4360 */;
import ME from "ME" /* 676 */;

require = arg1;
function getHash(arg0) {
  if (undefined === dependencyMap8[arg0]) {
    const v3Result = MurmurHashV3Default.v3(arg0);
    tmp[arg0] = v3Result;
    return v3Result;
  } else {
    return tmp2;
  }
}
function getTrackExposureExperimentKey(experimentId, descriptor, _location, Object) {
  const combined = "" + descriptor.type + "|" + experimentId;
  let triggerDebuggingEnabled = descriptor.triggerDebuggingEnabled;
  if (triggerDebuggingEnabled) {
    triggerDebuggingEnabled = undefined !== _location;
  }
  if (triggerDebuggingEnabled) {
    triggerDebuggingEnabled = _location.length > 0;
  }
  const type = descriptor.type;
  if (constants2.USER === type) {
    let tmp11 = combined;
    if (triggerDebuggingEnabled) {
      const _HermesInternal4 = HermesInternal;
      const sum = combined + "|" + _location;
      let text = sum;
      if (Object) {
        text = `${tmp12}|triggerDebugging`;
      }
      tmp11 = text;
    }
    return tmp11;
  } else if (tmp2.GUILD === type) {
    const _HermesInternal2 = HermesInternal;
    const sum1 = combined + "|" + descriptor.guildId;
    let tmp8 = sum1;
    if (triggerDebuggingEnabled) {
      const _HermesInternal3 = HermesInternal;
      const sum2 = sum1 + "|" + _location;
      let text1 = sum2;
      if (Object) {
        text1 = `${tmp9}|triggerDebugging`;
      }
      tmp8 = text1;
    }
    return tmp8;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("Unknown experiment type: " + descriptor);
    throw error;
  }
}
function getTrackExposureExperimentHash(descriptor) {
  const type = descriptor.type;
  if (constants2.USER === type) {
    const _HermesInternal3 = HermesInternal;
    const combined = "" + descriptor.bucket + "|" + descriptor.revision;
    let tmp17 = dependencyMap8[combined];
    if (undefined === tmp17) {
      const v3Result = MurmurHashV3Default.v3(combined);
      tmp16[combined] = v3Result;
      tmp17 = v3Result;
      const obj2 = MurmurHashV3Default;
    }
    return tmp17;
  } else if (tmp.GUILD === type) {
    const _HermesInternal2 = HermesInternal;
    const combined1 = "" + descriptor.bucket + "|" + descriptor.revision + "|" + descriptor.guildId;
    let tmp10 = dependencyMap8[combined1];
    if (undefined === tmp10) {
      const v3Result1 = MurmurHashV3Default.v3(combined1);
      tmp9[combined1] = v3Result1;
      tmp10 = v3Result1;
      const obj = MurmurHashV3Default;
    }
    return tmp10;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("Unknown experiment type: " + descriptor);
    throw error;
  }
}
function trackExposure(arg0) {
  ({ experimentId, descriptor, location: _location, location_stack, context, fingerprint, excluded, exposureType } = arg0);
  const assignmentSource = descriptor.assignmentSource;
  if ("override" === assignmentSource) {
    return false;
  } else {
    if ("ready_payload" === assignmentSource) {
      let flag = false;
      if (descriptor.sessionId !== store.getSessionId()) {
        flag = true;
      }
    } else {
      flag = true;
      if ("logged_out_api" === assignmentSource) {
        flag = false;
        if (descriptor.fingerprint !== store.getFingerprint()) {
          flag = true;
        }
      }
    }
    if (descriptor.override) {
      return false;
    } else {
      const tmp10 = getTrackExposureExperimentKey(experimentId, descriptor, _location, exposureType === constants3.AUTO_FALLBACK && descriptor.triggerDebuggingEnabled);
      const tmp12 = getTrackExposureExperimentHash(descriptor);
      let tmp13 = flag;
      if (flag) {
        tmp13 = map.get(tmp10) === tmp12;
      }
      if (tmp13) {
        return false;
      } else {
        let tmp18 = null != tmp16;
        if (tmp18) {
          const _Date = Date;
          tmp18 = Date.now() - tmp16.time <= c29 && tmp16.hash === tmp12;
          const tmp21 = Date.now() - tmp16.time <= c29 && tmp16.hash === tmp12;
        }
        if (tmp18) {
          return false;
        } else {
          const type = descriptor.type;
          if (constants2.USER === type) {
            let obj = { name: null, revision: null, population: null, bucket: null, location: null, location_stack: null, hash_result: null, excluded: null, exposure_type: null, assignment_source: null, assignment_session_id: null, assignment_loaded_from_cache: null, holdout_name: null, holdout_revision: null, holdout_bucket: null };
            obj[0] = experimentId;
            ({ revision: obj7[1], population: obj7[2], bucket: obj7[3] } = descriptor);
            obj[4] = _location;
            obj[5] = location_stack;
            obj[6] = descriptor.hashResult;
            obj[7] = excluded;
            obj[8] = exposureType;
            ({ assignmentSource: obj7[9], sessionId: obj7[10], loadedFromCache: obj7[11], holdoutName: obj7[12], holdoutRevision: obj7[13], holdoutBucket: obj7[14] } = descriptor);
            if (null != context) {
              obj.context_guild_id = context.guildId;
            }
            if (tmp4) {
              let EXPERIMENT_USER_TRIGGERED = tmp35.EXPERIMENT_USER_TRIGGERED_FALLBACK;
              let tmp36 = tmp35;
            } else {
              EXPERIMENT_USER_TRIGGERED = tmp35.EXPERIMENT_USER_TRIGGERED;
              tmp36 = tmp35;
            }
            if (flag) {
              obj = {};
              const merged = Object.assign(obj);
              obj.assignment_fingerprint = descriptor.fingerprint;
              obj.current_session_id = store.getSessionId();
              obj.current_fingerprint = store.getFingerprint();
              obj.current_source = closure_20.source;
              obj1 = { flush: false, fingerprint: null };
              obj1[1] = fingerprint;
              expandEventPropertiesDefault.track(tmp36.EXPERIMENT_USER_TRIGGERED_IGNORED, obj, obj1);
              const obj11 = expandEventPropertiesDefault;
            } else {
              const obj2 = { flush: true, fingerprint: null };
              obj2[1] = fingerprint;
              expandEventPropertiesDefault.track(EXPERIMENT_USER_TRIGGERED, obj, obj2);
              const obj8 = expandEventPropertiesDefault;
            }
          } else if (tmp22.GUILD === type) {
            if (tmp4) {
              let EXPERIMENT_GUILD_TRIGGERED = tmp60.EXPERIMENT_GUILD_TRIGGERED_FALLBACK;
              let tmp23 = tmp60;
            } else {
              EXPERIMENT_GUILD_TRIGGERED = tmp60.EXPERIMENT_GUILD_TRIGGERED;
              tmp23 = tmp60;
            }
            obj = { name: null, revision: null, bucket: null, guild_id: null, location: null, location_stack: null, hash_result: null, excluded: null, exposure_type: null, assignment_source: null, assignment_session_id: null, assignment_loaded_from_cache: null, holdout_name: null, holdout_revision: null, holdout_bucket: null };
            obj[0] = experimentId;
            ({ revision: obj[1], bucket: obj[2], guildId: obj[3] } = descriptor);
            obj[4] = _location;
            obj[5] = location_stack;
            obj[6] = descriptor.hashResult;
            obj[7] = excluded;
            obj[8] = exposureType;
            ({ assignmentSource: obj[9], sessionId: obj[10], loadedFromCache: obj[11], holdoutName: obj[12], holdoutRevision: obj[13], holdoutBucket: obj[14] } = descriptor);
            if (flag) {
              const obj3 = {};
              const merged1 = Object.assign(obj);
              obj3.assignment_fingerprint = descriptor.fingerprint;
              obj3.current_session_id = store.getSessionId();
              obj3.current_fingerprint = store.getFingerprint();
              obj3.current_source = closure_20.source;
              let obj4 = expandEventPropertiesDefault;
              obj4 = { flush: false, fingerprint: null };
              obj4[1] = fingerprint;
              obj4.track(tmp23.EXPERIMENT_GUILD_TRIGGERED_IGNORED, obj3, obj4);
            } else {
              obj1 = expandEventPropertiesDefault;
              const obj5 = { flush: true, fingerprint: null };
              obj5[1] = fingerprint;
              obj1.track(EXPERIMENT_GUILD_TRIGGERED, obj, obj5);
            }
          }
          if (flag) {
            const result = map.set(tmp10, tmp12);
          } else {
            const obj6 = { time: null, hash: null };
            const _Date2 = Date;
            obj6[0] = Date.now();
            obj6[1] = tmp11(descriptor);
            dependencyMap[tmp5(experimentId, descriptor, _location, tmp4)] = obj6;
            saveTrackedExposureExperiments(dependencyMap);
            const tmp5Result = tmp5(experimentId, descriptor, _location, tmp4);
          }
        }
      }
      tmp11 = getTrackExposureExperimentHash;
      tmp5 = getTrackExposureExperimentKey;
    }
  }
}
function _loadGuildFilter(arg0) {
  [tmp, tmp2] = arg0;
  let tmp5 = null;
  if (null != isInRange.GUILD_FILTERS[tmp]) {
    const GUILD_FILTERS = isInRange.GUILD_FILTERS;
    tmp5 = GUILD_FILTERS[tmp](tmp2);
  }
  return tmp5;
}
function _loadOverrides(arg0) {
  const obj = {};
  if (null == arg0) {
    return obj;
  } else {
    const iter = arg0[Symbol.iterator]();
    while (iter !== undefined) {
      ({ b, k } = nextResult);
      let tmp5 = k;
      let tmp6 = k;
      for (const item10015 of k) {
        let tmp7 = b;
        obj[item10015] = b;
        continue;
      }
      continue;
    }
    return obj;
  }
}
function _loadPopulation(arg0) {
  [arr, arr2] = callback(arg0, 2);
  const tmp = callback(arg0, 2);
  return {
    buckets: arr.map((arg0) => {
      [tmp, arr] = arg0;
      return { bucket: tmp, positions: arr.map((s) => ({ start: s.s, end: s.e })) };
    }),
    filters: arr2.map(_loadGuildFilter),
    rawFilterData: arr2
  };
}
function handleLoadedExperiments(type) {
  let tmp = !c26;
  if (!c26) {
    tmp = "CONNECTION_OPEN" === type.type;
  }
  if (tmp) {
    const user = type.user;
    let num = user.flags;
    if (num == null) {
      num = 0;
    }
    tmp = (num & constants5.STAFF) === constants5.STAFF || null != user.personal_connection_id;
    const tmp4 = (num & constants5.STAFF) === constants5.STAFF || null != user.personal_connection_id;
  }
  if (tmp) {
    c26 = true;
  }
  let tmp5 = "EXPERIMENTS_FETCH_SUCCESS" === type.type && c16;
  if (tmp5) {
    tmp5 = "ready_payload" === obj.source;
  }
  if (tmp5) {
    obj = str4(fingerprint[8]);
    obj = { fingerprint: null, current_snapshot_source: null, current_snapshot_session_id: null, current_snapshot_fingerprint: null };
    obj[0] = type.fingerprint;
    obj[1] = obj.source;
    obj[2] = obj.sessionId;
    obj[3] = obj.fingerprint;
    obj.track(constants4.EXPERIMENT_FETCH_IGNORED, obj);
  }
  closure_21 = {};
  closure_22 = {};
  closure_23 = {};
  let tmp14 = "CONNECTION_OPEN" === type.type;
  if (!tmp14) {
    tmp14 = null == type.fingerprint;
  }
  if (!tmp14) {
    tmp14 = type.fingerprint === store.getFingerprint();
  }
  ({ experiments, guildExperiments } = type);
  let str3 = "logged_out_api";
  if ("CONNECTION_OPEN" === type.type) {
    str3 = "ready_payload";
  }
  if ("sessionId" in type) {
    str4 = type.sessionId;
  } else {
    str4 = store.getSessionId();
    if (str4 == null) {
      str4 = "";
    }
  }
  fingerprint = store.getFingerprint();
  if (tmp14) {
    if (guildExperiments == null) {
      guildExperiments = [];
    }
    c3 = false;
    obj = { rawUserExperiments: null, rawGuildExperiments: null, source: null, sessionId: null, fingerprint: null };
    obj[0] = experiments;
    let items = guildExperiments;
    if (guildExperiments == null) {
      items = [];
    }
    obj[1] = items;
    obj[2] = str3;
    obj[3] = str4;
    obj[4] = fingerprint;
    const item = experiments.forEach((arg0) => {
      [tmp, tmp2, tmp3, tmp4, tmp5, num, tmp6, tmp7, tmp8, tmp9, tmp10] = arg0;
      obj = { type: "user", revision: tmp2, population: tmp5, bucket: tmp3, override: 0 === tmp4, hashResult: num, aaMode: 1 === tmp6, triggerDebuggingEnabled: 1 === tmp7, assignmentSource: source, sessionId, loadedFromCache: c3, fingerprint, holdoutName: tmp8, holdoutRevision: tmp9, holdoutBucket: tmp10 };
      loadedUserExperiments[tmp] = obj;
    });
    if (null != guildExperiments) {
      const item1 = guildExperiments.forEach((arg0) => {
        [tmp, tmp2, tmp3, arr, tmp4, arr2, tmp5, tmp6, tmp7, tmp8] = arg0;
        obj = { hashKey: tmp2, revision: tmp3, populations: arr.map(closure_1_35), overrides: closure_1_34(tmp4), overridesFormatted: null, holdoutName: null, holdoutControlBucket: null, aaMode: null, triggerDebuggingEnabled: null, assignmentSource: null, sessionId: null, loadedFromCache: null, fingerprint: null };
        if (items == null) {
          items = [];
        }
        obj[4] = items.map((arr) => arr.map(closure_35));
        obj[5] = tmp5;
        obj[6] = tmp6;
        obj[7] = 1 === tmp7;
        obj[8] = 1 === tmp8;
        obj[9] = source;
        obj[10] = sessionId;
        obj[11] = c3;
        obj[12] = fingerprint;
        closure_22[tmp] = obj;
      });
    }
  }
  c16 = true;
}
function computeGuildExperimentBucketFromPopulationsOrNull(guildId, item10027, result) {
  closure_0 = result;
  const iter = item10027[Symbol.iterator]();
  while (iter !== undefined) {
    ({ buckets, filters } = nextResult);
    let flag = true;
    if (null != filters) {
      let tmp3 = tmp2;
      let tmp4 = filters;
      for (const item10023 of filters) {
        if (null != item10023) {
          let tmp6 = item10023;
          if (!tmp5(arg0)) {
            flag = false;
            let tmp7 = obj;
            obj.return();
            break;
          }
          break;
        }
        continue;
      }
    }
    let tmp8 = flag;
    if (flag) {
      let tmp9 = buckets;
      let found = buckets.find((positions) => {
        positions = positions.positions;
        return positions.some((start) => closure_0 >= start.start && closure_0 < start.end);
      });
      let tmp11 = found;
      if (null != found) {
        let CONTROL = found.bucket;
      } else {
        let tmp12 = constants;
        CONTROL = constants.CONTROL;
      }
      let tmp13 = CONTROL;
      let tmp14 = constants;
      let tmp15 = null;
      if (CONTROL !== constants.NOT_ELIGIBLE) {
        tmp15 = CONTROL;
      }
      let tmp16 = iter;
      iter.return();
      return tmp15;
    }
  }
  return null;
}
function computeGuildExperimentDescriptor(guildId, holdoutName) {
  const tmp2 = dependencyMap4["" + getHash(0, holdoutName)];
  if (null == tmp2) {
    return null;
  } else {
    const triggerDebuggingEnabled = tmp2.triggerDebuggingEnabled;
    if (null != tmp2.overrides[guildId]) {
      let tmp29 = null;
      if (tmp34 !== constants.NOT_ELIGIBLE) {
        let obj = { type: null, guildId: null, revision: null, bucket: null, override: true, hashResult: -1, triggerDebuggingEnabled: null };
        obj[0] = constants2.GUILD;
        obj[1] = guildId;
        obj[2] = tmp32;
        obj[3] = tmp34;
        obj[6] = triggerDebuggingEnabled;
        tmp29 = obj;
      }
      return tmp29;
    } else {
      let hashKey = tmp2.hashKey;
      if (hashKey == null) {
        hashKey = holdoutName;
      }
      const _HermesInternal = HermesInternal;
      const result = getHash("" + hashKey + ":" + guildId) % 10000;
      let overridesFormatted = tmp2.overridesFormatted;
      if (overridesFormatted == null) {
        overridesFormatted = [];
      }
      for (const item10027 of overridesFormatted) {
        let tmp7 = computeGuildExperimentBucketFromPopulationsOrNull;
        let tmp8 = computeGuildExperimentBucketFromPopulationsOrNull(arg0, item10027, result);
        if (null !== tmp8) {
          obj = { type: null, guildId: null, revision: null, bucket: null, override: true, hashResult: null, triggerDebuggingEnabled: null, assignmentSource: null, sessionId: null, loadedFromCache: null };
          let tmp10 = constants2;
          obj[0] = constants2.GUILD;
          obj[1] = arg0;
          obj[2] = tmp2.revision;
          let tmp11 = tmp8;
          obj[3] = tmp9;
          obj[5] = result;
          obj[6] = triggerDebuggingEnabled;
          ({ assignmentSource: obj2[7], sessionId: obj2[8], loadedFromCache: obj2[9] } = tmp2);
          let tmp12 = obj;
          obj.return();
          return obj;
        }
      }
      const tmp14 = computeGuildExperimentBucketFromPopulationsOrNull(guildId, tmp2.populations, result);
      if (null == tmp14) {
        return null;
      } else {
        let tmp16 = null;
        if (null != tmp2.holdoutName) {
          tmp16 = null;
          if (null != tmp2.holdoutControlBucket) {
            tmp16 = null;
            if (tmp2.holdoutName !== holdoutName) {
              const tmp18 = computeGuildExperimentDescriptor(guildId, tmp2.holdoutName);
              let bucket;
              if (tmp18 != null) {
                bucket = tmp18.bucket;
              }
              tmp16 = tmp18;
              if (null != bucket) {
                if (true !== tmp18.override) {
                  obj1 = { experimentId: null, descriptor: null };
                  obj1[0] = tmp2.holdoutName;
                  obj1[1] = tmp18;
                  trackExposure(obj1);
                }
                let bucket1;
                if (tmp18 != null) {
                  bucket1 = tmp18.bucket;
                }
                tmp16 = tmp18;
                let tmp23 = null;
              }
              return tmp23;
            }
          }
        }
        const obj2 = { type: null, guildId: null, revision: null, bucket: null, hashResult: null, aaMode: null, triggerDebuggingEnabled: null, assignmentSource: null, sessionId: null, loadedFromCache: null, holdoutName: null, holdoutRevision: null, holdoutBucket: null };
        obj2[0] = constants2.GUILD;
        obj2[1] = guildId;
        obj2[2] = tmp2.revision;
        obj2[3] = tmp14;
        obj2[4] = result;
        obj2[5] = tmp33;
        obj2[6] = triggerDebuggingEnabled;
        ({ assignmentSource: obj4[7], sessionId: obj4[8], loadedFromCache: obj4[9] } = tmp2);
        holdoutName = null;
        if (null != tmp16) {
          holdoutName = tmp2.holdoutName;
        }
        obj2[10] = holdoutName;
        let revision;
        if (tmp16 != null) {
          revision = tmp16.revision;
        }
        obj2[11] = revision;
        let bucket2;
        if (tmp16 != null) {
          bucket2 = tmp16.bucket;
        }
        obj2[12] = bucket2;
        tmp23 = obj2;
      }
    }
  }
}
function processGuildExperimentPopulationFromCache(loadedGuildExperiments) {
  let obj = {};
  for (const key10006 in arg0) {
    let tmp8 = key10006;
    obj = {};
    let tmp9 = obj;
    let merged = Object.assign(arg0[key10006]);
    obj[key10006] = obj;
    let populations = obj[key10006].populations;
    let tmp11 = populations;
    let tmp = populations;
    for (const item10008 of populations) {
      let rawFilterData = item10008.rawFilterData;
      let tmp2 = _loadGuildFilter;
      item10008.filters = rawFilterData.map(_loadGuildFilter);
      continue;
    }
    let overridesFormatted = obj[key10006].overridesFormatted;
    if (overridesFormatted == null) {
      overridesFormatted = [];
    }
    let tmp3 = overridesFormatted;
    let tmp4 = overridesFormatted;
    for (const item10020 of overridesFormatted) {
      let tmp5 = item10020;
      let tmp6 = item10020;
      for (const item10025 of item10020) {
        let rawFilterData1 = item10025.rawFilterData;
        let tmp7 = _loadGuildFilter;
        item10025.filters = rawFilterData1.map(_loadGuildFilter);
        continue;
      }
      continue;
    }
  }
  return obj;
}
function handleOverlayInitialize(arg0) {
  ({ serializedExperimentStore, user } = arg0);
  let tmp = !c26;
  if (!c26) {
    let num = user.flags;
    if (num == null) {
      num = 0;
    }
    tmp = (num & constants5.STAFF) === constants5.STAFF || null != user.personal_connection_id;
    const tmp4 = (num & constants5.STAFF) === constants5.STAFF || null != user.personal_connection_id;
  }
  if (tmp) {
    c26 = true;
  }
  ({ hasLoadedExperiments: c16, trackedExposureExperiments: closure_17, loadedUserExperiments: closure_21, userExperimentOverrides: closure_24, guildExperimentOverrides: closure_25 } = serializedExperimentStore);
  const obj = {};
  const merged = Object.assign(obj);
  ({ assignmentSource: obj.source, assignmentSessionId: obj.sessionId, assignmentFingerprint: obj.fingerprint } = serializedExperimentStore);
  closure_22 = processGuildExperimentPopulationFromCache(serializedExperimentStore.loadedGuildExperiments);
  closure_23 = {};
}
function handleFetchFailure() {
  c16 = true;
}
function handleLogout(isSwitchingAccount) {
  const Storage = Storage5.Storage;
  Storage.remove(c11);
  if (!isSwitchingAccount.isSwitchingAccount) {
    const Storage2 = tmp(595).Storage;
    Storage2.remove(exerimentOverrides);
    const Storage3 = tmp(595).Storage;
    Storage3.remove(userExperimentOverrides);
    const Storage4 = tmp(595).Storage;
    Storage4.remove(guildExperimentOverrides);
    closure_24 = {};
    closure_25 = {};
  }
  closure_21 = {};
  const obj = {};
  const merged = Object.assign(obj);
  obj.rawUserExperiments = [];
  closure_17 = {};
  c16 = false;
}
function handleLogin() {
  c16 = false;
  closure_17 = {};
  closure_22 = {};
  const Storage = Storage5.Storage;
  Storage.remove(c11);
}
function loadLocalOverrides() {
  const Storage = Storage5.Storage;
  let obj = Storage.get(exerimentOverrides);
  if (obj == null) {
    obj = {};
  }
  const items = [obj, , ];
  const Storage2 = tmp3(595).Storage;
  let value = Storage2.get(userExperimentOverrides);
  if (value == null) {
    value = {};
  }
  items[1] = value;
  const Storage3 = tmp3(595).Storage;
  let value1 = Storage3.get(guildExperimentOverrides);
  if (value1 == null) {
    value1 = {};
  }
  items[2] = value1;
  closure_24 = {};
  closure_25 = {};
  let flag = !applyDefault.isEmpty(items[0]);
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp7 = nextResult;
    for (const key10045 in nextResult) {
      let tmp25 = key10045;
      let tmp26 = key10045;
      let tmp27 = nextResult;
      let tmp28 = tmp6[key10045];
      let tmp29 = tmp28;
      if (null != tmp28) {
        let tmp30 = tmp28;
        if (null != tmp29.bucket) {
          let tmp8 = tmp28;
          if (true === tmp29.override) {
            let tmp9 = tmp28;
            if (!tmp29.fromCookie) {
              let tmp10 = tmp28;
              let type = tmp29.type;
              if (constants2.USER === type) {
                let tmp17 = closure_24;
                let tmp18 = tmp25;
                let tmp19 = tmp28;
                closure_24[tmp26] = tmp29;
                continue;
              } else {
                if (tmp11.GUILD === type) {
                  let tmp14 = closure_25;
                  let tmp15 = tmp25;
                  let tmp16 = tmp28;
                  closure_25[tmp26] = tmp29;
                  continue;
                } else {
                  let tmp12 = nextResult;
                  let tmp13 = tmp25;
                  delete tmp2[tmp];
                  flag = true;
                  continue;
                }
                continue;
              }
              continue;
            }
            continue;
          }
        }
      }
      let tmp20 = nextResult;
      let tmp21 = tmp25;
      delete tmp2[tmp];
      flag = true;
      continue;
    }
    continue;
  }
  const obj4 = applyDefault;
  if (tmp22) {
    saveExperimentOverrides();
  }
}
function saveExperimentOverrides() {
  try {
    let tmp4 = dependencyMap;
    const Storage = Storage5.Storage;
    const result = Storage.set(userExperimentOverrides, closure_24);
    try {
      const Storage2 = Storage5.Storage;
      const result1 = Storage2.set(guildExperimentOverrides, closure_25);
    } catch (tmp20) {
      logger.error("Error saving guild experiment overrides, unsaved data will be lost", tmp20);
      importDefault(tmp[8]).track(constants4.EXPERIMENT_SAVE_EXPOSURE_FAILED, { module: "discord_app", call: "ExperimentStore.saveExperimentOverrides" });
      const obj2 = importDefault(tmp[8]);
    }
  } catch (tmp8) {
    logger.error("Error saving user experiment overrides, unsaved data will be lost", tmp8);
    tmp4 = dependencyMap;
    expandEventPropertiesDefault.track(constants4.EXPERIMENT_SAVE_EXPOSURE_FAILED, { module: "discord_app", call: "ExperimentStore.saveExperimentOverrides" });
    const obj = expandEventPropertiesDefault;
  }
}
function saveTrackedExposureExperiments(closure_17) {
  try {
    const Storage = Storage5.Storage;
    const obj = { v: 1, e: null };
    obj[1] = closure_17;
    const result = Storage.set(c11, obj);
  } catch (tmp6) {
    logger.error("Error saving tracked exposure experiments, unsaved data will be lost", tmp6);
    expandEventPropertiesDefault.track(constants4.EXPERIMENT_SAVE_EXPOSURE_FAILED, { module: "discord_app", call: "ExperimentStore.saveTrackedExposureExperiments" });
    const obj2 = expandEventPropertiesDefault;
  }
}
function handleExperimentOverrideBucket(skipCleanup) {
  ({ experimentId, experimentBucket, experimentType } = skipCleanup);
  if (experimentType == null) {
    let type;
    if (dependencyMap2[experimentId] != null) {
      type = tmp6.type;
    }
    experimentType = type;
  }
  if (null == experimentType) {
    return false;
  } else {
    if (null == experimentBucket) {
      let obj = {};
      const merged = Object.assign(obj1);
      obj1 = obj;
      delete tmp[tmp2];
      obj = {};
      const merged1 = Object.assign(obj);
      delete tmp[tmp2];
    } else if ("user" === experimentType) {
      obj1 = {};
      const merged2 = Object.assign(obj1);
      const obj2 = { type: null, revision: 1, population: 0, bucket: null, override: true };
      obj2[0] = experimentType;
      obj2[3] = experimentBucket;
      obj1[experimentId] = obj2;
    } else {
      obj = {};
      const merged3 = Object.assign(obj);
      const obj3 = { type: null, revision: 1, bucket: null, override: true };
      obj3[0] = experimentType;
      obj3[2] = experimentBucket;
      obj[experimentId] = obj3;
    }
    if (!skipCleanup.skipCleanup) {
      const items = [obj1, obj];
      for (const item10037 of items) {
        let tmp24 = item10037;
        for (const key10041 in item10037) {
          let tmp30 = key10041;
          let tmp31 = dependencyMap2;
          if (null != dependencyMap2[key10041]) {
            continue;
          } else {
            let tmp25 = obj1;
            let tmp26 = tmp29;
            delete tmp4[tmp3];
            continue;
          }
          continue;
        }
        continue;
      }
    }
    saveExperimentOverrides();
  }
}
function handleGuildChange(arg0) {
  for (const key10007 in closure_23) {
    let tmp5 = key10007;
    let tmp6 = callback;
    if (tmp3.id !== callback(key10007.split(":"), 1)[0]) {
      continue;
    } else {
      let tmp4 = closure_23;
      delete tmp[tmp2];
      continue;
    }
    continue;
  }
}
clearAllDefault;
({ ExperimentBuckets: c5, ExperimentTypes: closure_6, ExposureTypes: error } = ExperimentBuckets);
({ AnalyticEvents: closure_8, EMPTY_STRING_SNOWFLAKE_ID: c9, UserFlags: c10 } = ME);
let c11 = "scientist:triggered";
const exerimentOverrides = "exerimentOverrides";
const userExperimentOverrides = "userExperimentOverrides";
const guildExperimentOverrides = "guildExperimentOverrides";
let closure_15 = new timestampDefault("ExperimentStore");
let c16 = false;
let closure_17 = {};
const map = new Map();
let closure_19 = {};
let closure_20 = { rawUserExperiments: [], rawGuildExperiments: [] };
let closure_21 = {};
let closure_22 = {};
let closure_23 = {};
let closure_24 = {};
let closure_25 = {};
let closure_26 = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL || true;
let closure_27 = {};
let c29 = 604800000;
let timestamp = Date.now();
let ExperimentStore;
class ExperimentStore extends tmp3 {
  constructor() {
    obj = { LOGOUT: handleLogout, LOGIN_SUCCESS: handleLogin, CONNECTION_OPEN: handleLoadedExperiments, EXPERIMENTS_FETCH_SUCCESS: handleLoadedExperiments, OVERLAY_INITIALIZE: handleOverlayInitialize, EXPERIMENTS_FETCH_FAILURE: handleFetchFailure, EXPERIMENT_OVERRIDE_BUCKET: handleExperimentOverrideBucket, GUILD_CREATE: handleGuildChange, GUILD_UPDATE: handleGuildChange };
    tmp = new tmp(obj, require("dispatcher").DispatchBand.Early, new.target, tmp, obj);
    // ThrowIfThisInitialized (0x7c)
    tmp.trackExposure = trackExposure;
    return tmp;
  }
}
const prototype = ExperimentStore.prototype;
prototype["initialize"] = function initialize() {
  const Storage = Storage5.Storage;
  const value = Storage.get(c11);
  if (null != value) {
    if (1 === value.v) {
      const e = value.e;
      const _Date = Date;
      let flag = false;
      let flag2 = false;
      const timestamp = Date.now();
      const keys = Object.keys();
      if (keys !== undefined) {
        flag2 = flag;
        while (keys[tmp] !== undefined) {
          let tmp19 = tmp10;
          let tmp20 = c29;
          if (timestamp - e[tmp10].time <= c29) {
            continue;
          } else {
            delete tmp2[tmp3];
            flag = true;
            continue;
          }
          continue;
        }
      }
      if (flag2) {
        saveTrackedExposureExperiments(e);
      }
    }
    const self = this;
    closure_17 = {};
    loadLocalOverrides();
    this.waitFor(closure_4);
    const cache = this.loadCache();
  }
};
prototype["loadCache"] = function loadCache() {
  const snapshot = this.readSnapshot(ExperimentStore.LATEST_SNAPSHOT_VERSION);
  if (null != snapshot) {
    if ("loadedUserExperiments" in snapshot) {
      const loadedUserExperiments = snapshot.loadedUserExperiments;
      closure_22 = processGuildExperimentPopulationFromCache(snapshot.loadedGuildExperiments);
      const _Object = Object;
      let values = Object.values(loadedUserExperiments);
      const item = values.forEach((arg0) => {
        arg0.loadedFromCache = true;
        return true;
      });
      const _Object2 = Object;
      values = Object.values(closure_22);
      const item1 = values.forEach((arg0) => {
        arg0.loadedFromCache = true;
        return true;
      });
    } else {
      ({ rawUserExperiments, rawGuildExperiments, source } = snapshot);
      const sessionId = snapshot.sessionId;
      const fingerprint = snapshot.fingerprint;
      c3 = true;
      let obj = { rawUserExperiments: null, rawGuildExperiments: null, source: null, sessionId: null, fingerprint: null };
      obj[0] = rawUserExperiments;
      let items = rawGuildExperiments;
      if (rawGuildExperiments == null) {
        items = [];
      }
      obj[1] = items;
      obj[2] = source;
      obj[3] = sessionId;
      obj[4] = fingerprint;
      const item2 = rawUserExperiments.forEach((arg0) => {
        [tmp, tmp2, tmp3, tmp4, tmp5, num, tmp6, tmp7, tmp8, tmp9, tmp10] = arg0;
        obj = { type: "user", revision: tmp2, population: tmp5, bucket: tmp3, override: 0 === tmp4, hashResult: num, aaMode: 1 === tmp6, triggerDebuggingEnabled: 1 === tmp7, assignmentSource: source, sessionId, loadedFromCache: c3, fingerprint, holdoutName: tmp8, holdoutRevision: tmp9, holdoutBucket: tmp10 };
        loadedUserExperiments[tmp] = obj;
      });
      if (null != rawGuildExperiments) {
        const item3 = rawGuildExperiments.forEach((arg0) => {
          [tmp, tmp2, tmp3, arr, tmp4, arr2, tmp5, tmp6, tmp7, tmp8] = arg0;
          obj = { hashKey: tmp2, revision: tmp3, populations: arr.map(closure_1_35), overrides: closure_1_34(tmp4), overridesFormatted: null, holdoutName: null, holdoutControlBucket: null, aaMode: null, triggerDebuggingEnabled: null, assignmentSource: null, sessionId: null, loadedFromCache: null, fingerprint: null };
          if (items == null) {
            items = [];
          }
          obj[4] = items.map((arr) => arr.map(closure_35));
          obj[5] = tmp5;
          obj[6] = tmp6;
          obj[7] = 1 === tmp7;
          obj[8] = 1 === tmp8;
          obj[9] = source;
          obj[10] = sessionId;
          obj[11] = c3;
          obj[12] = fingerprint;
          closure_22[tmp] = obj;
        });
      }
    }
  }
};
prototype["takeSnapshot"] = function takeSnapshot() {
  let obj = { version: ExperimentStore.LATEST_SNAPSHOT_VERSION, data: null };
  obj = {};
  const merged = Object.assign(closure_20);
  obj[1] = obj;
  return obj;
};
Object.defineProperty(prototype, "hasLoadedExperiments", {
  get: function hasLoadedExperiments() {
    return c16;
  },
  set: undefined
});
prototype["hasRegisteredExperiment"] = function hasRegisteredExperiment(arg0) {
  return null != dependencyMap2[arg0];
};
prototype["getUserExperimentDescriptor"] = function getUserExperimentDescriptor(id) {
  if (closure_26) {
    if (null != dependencyMap6[id]) {
      return tmp2;
    }
  }
  let tmp5 = dependencyMap8[id];
  if (undefined === tmp5) {
    const v3Result = MurmurHashV3Default.v3(id);
    tmp4[id] = v3Result;
    tmp5 = v3Result;
    const obj = MurmurHashV3Default;
  }
  return dependencyMap3["" + tmp5];
};
prototype["getGuildExperimentDescriptor"] = function getGuildExperimentDescriptor(id, guildId) {
  let tmp = guildId;
  if (guildId == null) {
    tmp = closure_9;
  }
  if (closure_26) {
    if (null != tmp2) {
      return tmp2;
    }
  }
  const combined = "" + tmp + ":" + id;
  if (combined in dependencyMap5) {
    return dependencyMap5[combined];
  } else {
    const tmp5 = computeGuildExperimentDescriptor(tmp, id);
    dependencyMap5[combined] = tmp5;
    return tmp5;
  }
};
prototype["getUserExperimentBucket"] = function getUserExperimentBucket(id) {
  const userExperimentDescriptor = this.getUserExperimentDescriptor(id);
  if (null != userExperimentDescriptor) {
    let NOT_ELIGIBLE = userExperimentDescriptor.bucket;
  } else {
    NOT_ELIGIBLE = constants.NOT_ELIGIBLE;
  }
  return NOT_ELIGIBLE;
};
prototype["getGuildExperimentBucket"] = function getGuildExperimentBucket(id, guildId) {
  const guildExperimentDescriptor = this.getGuildExperimentDescriptor(id, guildId);
  if (null != guildExperimentDescriptor) {
    let NOT_ELIGIBLE = guildExperimentDescriptor.bucket;
  } else {
    NOT_ELIGIBLE = constants.NOT_ELIGIBLE;
  }
  return NOT_ELIGIBLE;
};
prototype["getAllUserExperimentDescriptors"] = function getAllUserExperimentDescriptors() {
  return closure_21;
};
prototype["getGuildExperiments"] = function getGuildExperiments() {
  return closure_22;
};
prototype["getLoadedUserExperiment"] = function getLoadedUserExperiment(name) {
  let tmp3 = dependencyMap8[name];
  if (undefined === tmp3) {
    const v3Result = MurmurHashV3Default.v3(name);
    tmp2[name] = v3Result;
    tmp3 = v3Result;
    const obj = MurmurHashV3Default;
  }
  return closure_21[tmp3];
};
prototype["getLoadedGuildExperiment"] = function getLoadedGuildExperiment(id) {
  let tmp3 = dependencyMap8[id];
  if (undefined === tmp3) {
    const v3Result = MurmurHashV3Default.v3(id);
    tmp2[id] = v3Result;
    tmp3 = v3Result;
    const obj = MurmurHashV3Default;
  }
  return closure_22[tmp3];
};
prototype["getRecentExposures"] = function getRecentExposures(GUILD, id) {
  closure_0 = "" + GUILD + "|" + id + "|";
  const entries = Object.entries(closure_17);
  const found = entries.filter((arg0) => {
    [obj] = arg0;
    return obj.startsWith(closure_0);
  });
  return found.map((arg0) => {
    [str, ] = arg0;
    const items = [str.replace(closure_0, ""), tmp];
    return items;
  });
};
prototype["getRegisteredExperiments"] = function getRegisteredExperiments() {
  return closure_19;
};
prototype["getAllExperimentOverrideDescriptors"] = function getAllExperimentOverrideDescriptors() {
  const obj = {};
  if (closure_26) {
    const merged = Object.assign(closure_24);
    const merged1 = Object.assign(closure_25);
    let tmp = obj;
  } else {
    tmp = obj;
  }
  return tmp;
};
prototype["getExperimentOverrideDescriptor"] = function getExperimentOverrideDescriptor(arg0) {
  let tmp = null;
  if (closure_26) {
    let tmp4 = dependencyMap6[arg0];
    if (tmp4 == null) {
      tmp4 = dependencyMap7[arg0];
    }
    tmp = tmp4;
  }
  return tmp;
};
prototype["getAllExperimentAssignments"] = function getAllExperimentAssignments() {
  let obj = {};
  obj = {};
  const keys = Object.keys(closure_19);
  const item = keys.forEach((arg0) => {
    const combined = "" + arg0;
    let tmp4 = closure_1_27[combined];
    if (undefined === tmp4) {
      obj = closure_1_1(closure_1_2[7]);
      const v3Result = obj.v3(combined);
      tmp3[combined] = v3Result;
      tmp4 = v3Result;
    }
    obj[tmp4] = arg0;
  });
  for (const key10013 in closure_21) {
    let tmp3 = key10013;
    let tmp4 = obj[key10013];
    if (null == tmp4) {
      continue;
    } else {
      let tmp2 = dependencyMap3;
      obj[tmp4] = dependencyMap3[key10013].bucket;
      continue;
    }
    continue;
  }
  for (const key10019 in closure_23) {
    let tmp5 = key10019;
    let tmp6 = dependencyMap5;
    let tmp7 = dependencyMap5[key10019];
    if (null == tmp7) {
      continue;
    } else {
      obj[key10019] = tmp7.bucket;
      continue;
    }
    continue;
  }
  return obj;
};
prototype["getSerializedState"] = function getSerializedState() {
  let obj = {};
  for (const key10005 in closure_22) {
    let tmp2 = key10005;
    let _JSON = JSON;
    let _JSON2 = JSON;
    let tmp3 = dependencyMap4;
    obj[key10005] = JSON.parse(JSON.stringify(dependencyMap4[key10005]));
    let populations = obj[key10005].populations;
    let tmp4 = populations;
    let tmp = populations;
    for (const item10007 of populations) {
      item10007.filters = [];
      continue;
    }
  }
  obj = { hasLoadedExperiments: c16, trackedExposureExperiments: closure_17, loadedUserExperiments: closure_21, loadedGuildExperiments: obj, userExperimentOverrides: closure_24, guildExperimentOverrides: closure_25, cookieOverrides: Version.getBuildOverrideExperiments(), assignmentSource: closure_20.source, assignmentSessionId: closure_20.sessionId, assignmentFingerprint: closure_20.fingerprint };
  return obj;
};
function hasExperimentTrackedExposure(experimentId, Early, _location, Object, prototype, hasExperimentTrackedExposure, handleLogout, handleLogin, handleLoadedExperiments, handleOverlayInitialize, handleFetchFailure, ExperimentStore) {
  const tmp3 = dependencyMap[getTrackExposureExperimentKey(experimentId, Early, _location, Object)];
  let tmp4 = null != tmp3;
  if (tmp4) {
    const _Date = Date;
    tmp4 = Date.now() - tmp3.time <= c29 && tmp3.hash === tmp2;
    const tmp7 = Date.now() - tmp3.time <= c29 && tmp3.hash === tmp2;
  }
  return tmp4;
}
prototype["hasExperimentTrackedExposure"] = hasExperimentTrackedExposure;
ExperimentStore.displayName = "ExperimentStore";
ExperimentStore.LATEST_SNAPSHOT_VERSION = 1;
hasExperimentTrackedExposure = new hasExperimentTrackedExposure({ LOGOUT: handleLogout, LOGIN_SUCCESS: handleLogin, CONNECTION_OPEN: handleLoadedExperiments, EXPERIMENTS_FETCH_SUCCESS: handleLoadedExperiments, OVERLAY_INITIALIZE: handleOverlayInitialize, EXPERIMENTS_FETCH_FAILURE: handleFetchFailure, EXPERIMENT_OVERRIDE_BUCKET: handleExperimentOverrideBucket, GUILD_CREATE: handleGuildChange, GUILD_UPDATE: handleGuildChange }, require("dispatcher").DispatchBand.Early, tmp, Object, prototype, "hasExperimentTrackedExposure", handleLogout, handleLogin, handleLoadedExperiments, handleOverlayInitialize, handleFetchFailure, ExperimentStore);
// ThrowIfThisInitialized (0x7c)
hasExperimentTrackedExposure.trackExposure = trackExposure;
let obj = { LOGOUT: handleLogout, LOGIN_SUCCESS: handleLogin, CONNECTION_OPEN: handleLoadedExperiments, EXPERIMENTS_FETCH_SUCCESS: handleLoadedExperiments, OVERLAY_INITIALIZE: handleOverlayInitialize, EXPERIMENTS_FETCH_FAILURE: handleFetchFailure, EXPERIMENT_OVERRIDE_BUCKET: handleExperimentOverrideBucket, GUILD_CREATE: handleGuildChange, GUILD_UPDATE: handleGuildChange };
let tmp6 = new timestampDefault("ExperimentStore");
let result = require("set").fileFinishedImporting("modules/experiments/ExperimentStore.tsx");

export default hasExperimentTrackedExposure;
export const registerExperiment = function registerExperiment(experimentId) {
  closure_19[experimentId.experimentId] = { type: experimentId.experimentType, title: experimentId.title, description: experimentId.description, buckets: experimentId.buckets, commonTriggerPoint: experimentId.commonTriggerPoint };
};