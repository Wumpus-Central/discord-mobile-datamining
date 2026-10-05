// === Module 4776: ExperimentStore ===

// Module 4776 (ExperimentStore)
import LoggerDefault from "Logger" /* 3 */;
import _modDef12 from "module_12" /* 12 */;
import Storage5 from "Storage" /* 510 */;
import Dispatcher from "Dispatcher" /* 584 */;
import _modDef1251 from "module_1251" /* 1251 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import BuildOverrideUtils from "BuildOverrideUtils" /* 1366 */;
import GuildFilters from "GuildFilters" /* 4778 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MobileCacheSnapshotStore from "MobileCacheSnapshotStore" /* 1084 */;
import ExperimentConstants from "ExperimentConstants" /* 4777 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_22, positions;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
function getHash(arg0) {
  if (undefined === closure_27[arg0]) {
    obj = _modDef1251;
    const v3Result = obj.v3(arg0);
    tmp[arg0] = v3Result;
    return v3Result;
  } else {
    return closure_27[arg0];
  }
}
function getTrackExposureExperimentKey(experimentId, descriptor, _location, _Object) {
  const combined = "" + descriptor.type + "|" + experimentId;
  const triggerDebuggingEnabled = descriptor.triggerDebuggingEnabled && undefined !== _location && _location.length > 0;
  const type = descriptor.type;
  if (metroRequire.USER === type) {
    let tmp9 = combined;
    if (triggerDebuggingEnabled) {
      const _HermesInternal4 = HermesInternal;
      const sum = combined + "|" + _location;
      let text = sum;
      if (_Object) {
        text = `${tmp10}|triggerDebugging`;
      }
      tmp9 = text;
    }
    return tmp9;
  } else if (tmp2.GUILD === type) {
    const _HermesInternal2 = HermesInternal;
    const sum1 = combined + "|" + descriptor.guildId;
    let tmp6 = sum1;
    if (triggerDebuggingEnabled) {
      const _HermesInternal3 = HermesInternal;
      const sum2 = sum1 + "|" + _location;
      let text1 = sum2;
      if (_Object) {
        text1 = `${tmp7}|triggerDebugging`;
      }
      tmp6 = text1;
    }
    return tmp6;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Unknown experiment type: " + descriptor);
    throw error;
  }
}
function getTrackExposureExperimentHash(descriptor) {
  const type = descriptor.type;
  if (metroRequire.USER === type) {
    const _HermesInternal3 = HermesInternal;
    const combined = "" + descriptor.bucket + "|" + descriptor.revision;
    let tmp15 = closure_27[combined];
    if (undefined === tmp15) {
      const obj2 = _modDef1251;
      const v3Result = obj2.v3(combined);
      tmp14[combined] = v3Result;
      tmp15 = v3Result;
    }
    return tmp15;
  } else if (tmp.GUILD === type) {
    const _HermesInternal2 = HermesInternal;
    const combined1 = "" + descriptor.bucket + "|" + descriptor.revision + "|" + descriptor.guildId;
    let tmp8 = closure_27[combined1];
    if (undefined === tmp8) {
      obj = _modDef1251;
      const v3Result1 = obj.v3(combined1);
      tmp7[combined1] = v3Result1;
      tmp8 = v3Result1;
    }
    return tmp8;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Unknown experiment type: " + descriptor);
    throw error;
  }
}
function trackExposure(arg0) {
  let _location;
  let context;
  let descriptor;
  let excluded;
  let experimentId;
  let exposureType;
  let fingerprint;
  let location_stack;
  ({ experimentId, descriptor, location: _location, location_stack, context, fingerprint, excluded, exposureType } = arg0);
  const assignmentSource = descriptor.assignmentSource;
  if ("override" === assignmentSource) {
    return false;
  } else {
    let flag;
    if ("ready_payload" === assignmentSource) {
      flag = false;
      if (descriptor.sessionId !== AuthenticationStore.getSessionId()) {
        flag = true;
      }
    } else {
      flag = true;
      if ("logged_out_api" === assignmentSource) {
        flag = false;
        if (descriptor.fingerprint !== AuthenticationStore.getFingerprint()) {
          flag = true;
        }
      }
    }
    if (descriptor.override) {
      return false;
    } else {
      const tmp10 = getTrackExposureExperimentKey(experimentId, descriptor, _location, exposureType === metroImportDefault.AUTO_FALLBACK && descriptor.triggerDebuggingEnabled);
      const tmp12 = getTrackExposureExperimentHash(descriptor);
      const tmp13 = flag && map.get(tmp10) === tmp12;
      if (tmp13) {
        return false;
      } else {
        let tmp18 = null != tmp16;
        if (tmp18) {
          const _Date = Date;
          tmp18 = Date.now() - trackedExposureExperiments[tmp10].time <= c29 && trackedExposureExperiments[tmp10].hash === tmp12;
          Date.now() - trackedExposureExperiments[tmp10].time <= c29 && trackedExposureExperiments[tmp10].hash === tmp12;
        }
        if (tmp18) {
          return false;
        } else {
          const type = descriptor.type;
          if (metroRequire.USER === type) {
            let EXPERIMENT_USER_TRIGGERED;
            let tmp36;
            const obj3 = { name: experimentId, revision: null, population: null, bucket: null, location: _location, location_stack, hash_result: descriptor.hashResult, excluded, exposure_type: exposureType, assignment_source: null, assignment_session_id: null, assignment_loaded_from_cache: null, holdout_name: null, holdout_revision: null, holdout_bucket: null };
            ({ revision: obj7.revision, population: obj7.population, bucket: obj7.bucket } = descriptor);
            ({ assignmentSource: obj7.assignment_source, sessionId: obj7.assignment_session_id, loadedFromCache: obj7.assignment_loaded_from_cache, holdoutName: obj7.holdout_name, holdoutRevision: obj7.holdout_revision, holdoutBucket: obj7.holdout_bucket } = descriptor);
            if (null != context) {
              obj3.context_guild_id = context.guildId;
            }
            if (exposureType === metroImportDefault.AUTO_FALLBACK && descriptor.triggerDebuggingEnabled) {
              EXPERIMENT_USER_TRIGGERED = metroImportAll.EXPERIMENT_USER_TRIGGERED_FALLBACK;
              tmp36 = metroImportAll;
            } else {
              EXPERIMENT_USER_TRIGGERED = metroImportAll.EXPERIMENT_USER_TRIGGERED;
              tmp36 = metroImportAll;
            }
            if (flag) {
              obj4 = { assignment_fingerprint: descriptor.fingerprint, current_session_id: AuthenticationStore.getSessionId(), current_fingerprint: AuthenticationStore.getFingerprint(), current_source: obj.source };
              const merged = Object.assign(obj3);
              const obj6 = { flush: false, fingerprint };
              const obj11 = AnalyticsUtilsDefault;
              obj11.track(tmp36.EXPERIMENT_USER_TRIGGERED_IGNORED, obj4, obj6);
            } else {
              const obj9 = { flush: true, fingerprint };
              const obj8 = AnalyticsUtilsDefault;
              obj8.track(EXPERIMENT_USER_TRIGGERED, obj3, obj9);
            }
          } else if (tmp22.GUILD === type) {
            let EXPERIMENT_GUILD_TRIGGERED;
            let tmp23;
            if (exposureType === metroImportDefault.AUTO_FALLBACK && descriptor.triggerDebuggingEnabled) {
              EXPERIMENT_GUILD_TRIGGERED = metroImportAll.EXPERIMENT_GUILD_TRIGGERED_FALLBACK;
              tmp23 = metroImportAll;
            } else {
              EXPERIMENT_GUILD_TRIGGERED = metroImportAll.EXPERIMENT_GUILD_TRIGGERED;
              tmp23 = metroImportAll;
            }
            obj = { name: experimentId, revision: null, bucket: null, guild_id: null, location: _location, location_stack, hash_result: descriptor.hashResult, excluded, exposure_type: exposureType, assignment_source: null, assignment_session_id: null, assignment_loaded_from_cache: null, holdout_name: null, holdout_revision: null, holdout_bucket: null };
            ({ revision: obj.revision, bucket: obj.bucket, guildId: obj.guild_id } = descriptor);
            ({ assignmentSource: obj.assignment_source, sessionId: obj.assignment_session_id, loadedFromCache: obj.assignment_loaded_from_cache, holdoutName: obj.holdout_name, holdoutRevision: obj.holdout_revision, holdoutBucket: obj.holdout_bucket } = descriptor);
            if (flag) {
              const obj10 = { assignment_fingerprint: descriptor.fingerprint, current_session_id: AuthenticationStore.getSessionId(), current_fingerprint: AuthenticationStore.getFingerprint(), current_source: obj.source };
              const merged1 = Object.assign(obj);
              const obj12 = { flush: false, fingerprint };
              const obj5 = AnalyticsUtilsDefault;
              obj5.track(tmp23.EXPERIMENT_GUILD_TRIGGERED_IGNORED, obj10, obj12);
            } else {
              const obj13 = { flush: true, fingerprint };
              const obj2 = AnalyticsUtilsDefault;
              obj2.track(EXPERIMENT_GUILD_TRIGGERED, obj, obj13);
            }
          }
          if (flag) {
            const result = map.set(tmp10, tmp12);
          } else {
            const _Date2 = Date;
            const obj21 = { time: Date.now(), hash: getTrackExposureExperimentHash(descriptor) };
            trackedExposureExperiments[getTrackExposureExperimentKey(experimentId, descriptor, _location, exposureType === metroImportDefault.AUTO_FALLBACK && descriptor.triggerDebuggingEnabled)] = obj21;
            const tmp5Result = getTrackExposureExperimentKey(experimentId, descriptor, _location, exposureType === metroImportDefault.AUTO_FALLBACK && descriptor.triggerDebuggingEnabled);
            saveTrackedExposureExperiments(trackedExposureExperiments);
          }
        }
      }
    }
  }
}
function _loadGuildFilter(arg0) {
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg0;
  let tmp5 = null;
  if (null != GuildFilters.GUILD_FILTERS[tmp]) {
    const GUILD_FILTERS = GuildFilters.GUILD_FILTERS;
    tmp5 = GUILD_FILTERS[tmp](tmp2);
  }
  return tmp5;
}
function _loadOverrides(arg0) {
  let b;
  let k;
  obj = {};
  if (null == arg0) {
    return obj;
  } else {
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      ({ b, k } = nextResult);
      for (const item10015 of k) {
        obj[item10015] = b;
        continue;
      }
      continue;
    }
    return obj;
  }
}
function _loadPopulation(arg0) {
  let arr;
  let arr2;
  const tmp = _slicedToArray(arg0, 2);
  [arr, arr2] = tmp;
  obj = {
    buckets: arr.map((item) => {
      let arr;
      let tmp;
      [tmp, arr] = item;
      obj = { bucket: tmp, positions: arr.map((s) => ({ start: s.s, end: s.e })) };
      return obj;
    }),
    filters: arr2.map(_loadGuildFilter),
    rawFilterData: arr2
  };
  return obj;
}
function handleLoadedExperiments(type) {
  let experiments;
  let fingerprint;
  let guildExperiments;
  let items;
  let obj3;
  let str4;
  let tmp = !c26 && "CONNECTION_OPEN" === type.type;
  if (tmp) {
    const user = type.user;
    let num = user.flags;
    if (num == null) {
      num = 0;
    }
    tmp = (num & constants5.STAFF) === constants5.STAFF || null != user.personal_connection_id;
  }
  if (tmp) {
    c26 = true;
  }
  const tmp5 = "EXPERIMENTS_FETCH_SUCCESS" === type.type && c16 && "ready_payload" === obj3.source;
  if (tmp5) {
    const obj2 = { fingerprint: type.fingerprint, current_snapshot_source: obj3.source, current_snapshot_session_id: obj3.sessionId, current_snapshot_fingerprint: obj3.fingerprint };
    obj = str4(fingerprint[8]);
    obj.track(constants4.EXPERIMENT_FETCH_IGNORED, obj2);
  }
  let closure_21 = {};
  closure_22 = {};
  closure_23 = {};
  ({ experiments, guildExperiments } = type);
  let str3 = "logged_out_api";
  const tmp14 = "CONNECTION_OPEN" === type.type || null == type.fingerprint || type.fingerprint === AuthenticationStore.getFingerprint();
  if ("CONNECTION_OPEN" === type.type) {
    str3 = "ready_payload";
  }
  if ("sessionId" in type) {
    str4 = type.sessionId;
  } else {
    str4 = AuthenticationStore.getSessionId();
    if (str4 == null) {
      str4 = "";
    }
  }
  fingerprint = AuthenticationStore.getFingerprint();
  if (tmp14) {
    if (guildExperiments == null) {
      guildExperiments = [];
    }
    let c3 = false;
    obj3 = { rawUserExperiments: experiments, rawGuildExperiments: items, source: str3, sessionId: str4, fingerprint };
    items = guildExperiments;
    if (guildExperiments == null) {
      items = [];
    }
    const item = experiments.forEach((item) => {
      let num;
      let tmp;
      let tmp10;
      let tmp2;
      let tmp3;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      [tmp, tmp2, tmp3, tmp4, tmp5, num, tmp6, tmp7, tmp8, tmp9, tmp10] = item;
      obj = { type: "user", revision: tmp2, population: tmp5, bucket: tmp3, override: 0 === tmp4, hashResult: num, aaMode: 1 === tmp6, triggerDebuggingEnabled: 1 === tmp7, assignmentSource: source, sessionId, loadedFromCache, fingerprint, holdoutName: tmp8, holdoutRevision: tmp9, holdoutBucket: tmp10 };
      loadedUserExperiments[tmp] = obj;
    });
    if (null != guildExperiments) {
      const item1 = guildExperiments.forEach((item) => {
        let arr;
        let arr2;
        let items;
        let tmp;
        let tmp2;
        let tmp3;
        let tmp4;
        let tmp5;
        let tmp6;
        let tmp7;
        let tmp8;
        [tmp, tmp2, tmp3, arr, tmp4, arr2, tmp5, tmp6, tmp7, tmp8] = item;
        obj = { hashKey: tmp2, revision: tmp3, populations: arr.map(_loadPopulation), overrides: _loadOverrides(tmp4), overridesFormatted: items.map((arr) => arr.map(closure_1_35)), holdoutName: tmp5, holdoutControlBucket: tmp6, aaMode: 1 === tmp7, triggerDebuggingEnabled: 1 === tmp8, assignmentSource: source, sessionId, loadedFromCache, fingerprint };
        if (items == null) {
          items = [];
        }
        closure_22[tmp] = obj;
      });
    }
  }
  c16 = true;
}
function computeGuildExperimentBucketFromPopulationsOrNull(guildId, item10027, result) {
  let buckets;
  let filters;
  let closure_0 = result;
  const iter = item10027[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    ({ buckets, filters } = nextResult);
    let flag = true;
    if (null != filters) {
      for (const item10023 of filters) {
        if (null != item10023) {
          if (!tmp5(guildId)) {
            flag = false;
            obj.return();
            break;
          }
          break;
        }
        continue;
      }
    }
    let tmp8 = flag;
    if (tmp8) {
      let CONTROL;
      let found = buckets.find((positions) => {
        positions = positions.positions;
        return positions.some((start) => closure_1_0 >= start.start && closure_1_0 < start.end);
      });
      if (null != found) {
        CONTROL = found.bucket;
      } else {
        CONTROL = hasOwnProperty.CONTROL;
      }
      let tmp15 = null;
      if (CONTROL !== hasOwnProperty.NOT_ELIGIBLE) {
        tmp15 = CONTROL;
      }
      iter.return();
      return tmp15;
    }
  }
  return null;
}
function computeGuildExperimentDescriptor(guildId, holdoutName) {
  let bucket2;
  let revision;
  const tmp2 = closure_22["" + getHash(0, holdoutName)];
  if (null == tmp2) {
    return null;
  } else {
    const triggerDebuggingEnabled = tmp2.triggerDebuggingEnabled;
    if (null != tmp2.overrides[guildId]) {
      let tmp29 = null;
      if (tmp2.overrides[guildId] !== hasOwnProperty.NOT_ELIGIBLE) {
        tmp29 = { type: metroRequire.GUILD, guildId, revision: tmp32, bucket: tmp2.overrides[guildId], override: true, hashResult: -1, triggerDebuggingEnabled };
        const obj3 = { type: metroRequire.GUILD, guildId, revision: tmp32, bucket: tmp2.overrides[guildId], override: true, hashResult: -1, triggerDebuggingEnabled };
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
        let tmp8 = computeGuildExperimentBucketFromPopulationsOrNull(guildId, item10027, result);
        if (null !== tmp8) {
          let obj5 = { type: metroRequire.GUILD, guildId, revision: tmp2.revision, bucket: tmp9, override: true, hashResult: result, triggerDebuggingEnabled, assignmentSource: null, sessionId: null, loadedFromCache: null };
          ({ assignmentSource: obj2.assignmentSource, sessionId: obj2.sessionId, loadedFromCache: obj2.loadedFromCache } = tmp2);
          obj.return();
          return obj5;
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
              let tmp23;
              const tmp18 = computeGuildExperimentDescriptor(guildId, tmp2.holdoutName);
              let bucket;
              if (tmp18 != null) {
                bucket = tmp18.bucket;
              }
              tmp16 = tmp18;
              if (null != bucket) {
                if (true !== tmp18.override) {
                  const obj9 = { experimentId: tmp2.holdoutName, descriptor: tmp18 };
                  trackExposure(obj9);
                }
                let bucket1;
                if (tmp18 != null) {
                  bucket1 = tmp18.bucket;
                }
                tmp16 = tmp18;
                tmp23 = null;
              }
              return tmp23;
            }
          }
        }
        const obj10 = { type: metroRequire.GUILD, guildId, revision: tmp2.revision, bucket: tmp14, hashResult: result, aaMode: tmp33, triggerDebuggingEnabled, assignmentSource: null, sessionId: null, loadedFromCache: null, holdoutName, holdoutRevision: revision, holdoutBucket: bucket2 };
        ({ assignmentSource: obj4.assignmentSource, sessionId: obj4.sessionId, loadedFromCache: obj4.loadedFromCache } = tmp2);
        holdoutName = null;
        if (null != tmp16) {
          holdoutName = tmp2.holdoutName;
        }
        revision = undefined;
        if (tmp16 != null) {
          revision = tmp16.revision;
        }
        bucket2 = undefined;
        if (tmp16 != null) {
          bucket2 = tmp16.bucket;
        }
        tmp23 = obj10;
      }
    }
  }
}
function processGuildExperimentPopulationFromCache(loadedGuildExperiments) {
  obj = {};
  for (const key10006 in loadedGuildExperiments) {
    let obj2 = {};
    let merged = Object.assign(loadedGuildExperiments[key10006]);
    obj[key10006] = obj2;
    let populations = obj[key10006].populations;
    for (const item10008 of populations) {
      let rawFilterData = item10008.rawFilterData;
      item10008.filters = rawFilterData.map(_loadGuildFilter);
      continue;
    }
    let overridesFormatted = obj[key10006].overridesFormatted ?? [];
    for (const item10020 of overridesFormatted) {
      for (const item10025 of item10020) {
        let rawFilterData1 = item10025.rawFilterData;
        item10025.filters = rawFilterData1.map(_loadGuildFilter);
        continue;
      }
      continue;
    }
  }
  return obj;
}
function handleOverlayInitialize(arg0) {
  let c16;
  let closure_17;
  let closure_21;
  let serializedExperimentStore;
  let user;
  ({ serializedExperimentStore, user } = arg0);
  let tmp = !c26;
  if (tmp) {
    let num = user.flags;
    if (num == null) {
      num = 0;
    }
    tmp = (num & constants5.STAFF) === constants5.STAFF || null != user.personal_connection_id;
  }
  if (tmp) {
    c26 = true;
  }
  ({ hasLoadedExperiments: c16, trackedExposureExperiments: closure_17, loadedUserExperiments: closure_21, userExperimentOverrides: obj4, guildExperimentOverrides: obj } = serializedExperimentStore);
  obj = {};
  const merged = Object.assign(obj);
  ({ assignmentSource: obj.source, assignmentSessionId: obj.sessionId, assignmentFingerprint: obj.fingerprint } = serializedExperimentStore);
  closure_22 = processGuildExperimentPopulationFromCache(serializedExperimentStore.loadedGuildExperiments);
  closure_23 = {};
}
function handleFetchFailure() {
  let c16 = true;
}
function handleLogout(isSwitchingAccount) {
  isSwitchingAccount = isSwitchingAccount.isSwitchingAccount;
  const Storage = Storage5.Storage;
  Storage.remove(c11);
  if (!isSwitchingAccount) {
    const Storage2 = Storage5.Storage;
    Storage2.remove(exerimentOverrides);
    const Storage3 = Storage5.Storage;
    Storage3.remove(userExperimentOverrides);
    const Storage4 = Storage5.Storage;
    Storage4.remove(guildExperimentOverrides);
    obj = {};
  }
  let closure_21 = {};
  obj = { rawUserExperiments: [] };
  const merged = Object.assign(obj);
  let closure_17 = {};
  let c16 = false;
}
function handleLogin() {
  let c16 = false;
  let closure_17 = {};
  closure_22 = {};
  const Storage = Storage5.Storage;
  Storage.remove(c11);
}
function loadLocalOverrides() {
  function loadCookieOverrides() {
    obj = BuildOverrideUtils;
    const buildOverrideExperiments = obj.getBuildOverrideExperiments();
    let flag = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        let obj2 = { type: constants.USER, revision: 1, population: 0, override: true, fromCookie: true, assignmentSource: "override", bucket: buildOverrideExperiments[tmp4] };
        obj4[tmp4] = obj2;
        let obj3 = { type: constants.GUILD, revision: 1, override: true, fromCookie: true, assignmentSource: "override", bucket: buildOverrideExperiments[tmp4] };
        closure_1_25[tmp4] = obj3;
        flag = true;
        continue;
      }
    }
    return flag2;
  }
  const Storage = Storage5.Storage;
  obj = Storage.get(exerimentOverrides);
  if (obj == null) {
    obj = {};
  }
  const items = [obj, , ];
  const Storage2 = Storage5.Storage;
  let value3 = Storage2.get(userExperimentOverrides);
  if (value3 == null) {
    value3 = {};
  }
  items[1] = value3;
  const Storage3 = Storage5.Storage;
  let value4 = Storage3.get(guildExperimentOverrides);
  if (value4 == null) {
    value4 = {};
  }
  items[2] = value4;
  obj4 = {};
  obj = {};
  obj4 = _modDef12;
  let flag = !obj4.isEmpty(items[0]);
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    for (const key10045 in nextResult) {
      let tmp22 = tmp4[key10045];
      let tmp23 = tmp22;
      if (null != tmp22) {
        if (null != tmp23.bucket) {
          if (true === tmp23.override) {
            if (!tmp23.fromCookie) {
              let type = tmp23.type;
              if (metroRequire.USER === type) {
                obj4[key10045] = tmp23;
                continue;
              } else {
                if (tmp9.GUILD === type) {
                  obj[key10045] = tmp23;
                  continue;
                } else {
                  delete tmp3[key10045];
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
      delete tmp3[key10045];
      flag = true;
      continue;
    }
    continue;
  }
  const tmp16 = loadCookieOverrides() || flag;
  if (tmp16) {
    saveExperimentOverrides();
  }
}
function saveExperimentOverrides() {
  try {
    const Storage = Storage5.Storage;
    const result = Storage.set(userExperimentOverrides, obj4);
  } catch (tmp7) {
    logger.error("Error saving user experiment overrides, unsaved data will be lost", tmp7);
    obj = AnalyticsUtilsDefault;
    obj.track(metroImportAll.EXPERIMENT_SAVE_EXPOSURE_FAILED, { module: "discord_app", call: "ExperimentStore.saveExperimentOverrides" });
  }
  try {
    const Storage2 = Storage5.Storage;
    const result1 = Storage2.set(guildExperimentOverrides, obj);
  } catch (tmp19) {
    logger.error("Error saving guild experiment overrides, unsaved data will be lost", tmp19);
    const obj2 = AnalyticsUtilsDefault;
    obj2.track(metroImportAll.EXPERIMENT_SAVE_EXPOSURE_FAILED, { module: "discord_app", call: "ExperimentStore.saveExperimentOverrides" });
  }
}
function saveTrackedExposureExperiments(value) {
  try {
    const Storage = Storage5.Storage;
    obj = { v: 1, e: value };
    const result = Storage.set(c11, obj);
  } catch (tmp6) {
    logger.error("Error saving tracked exposure experiments, unsaved data will be lost", tmp6);
    const obj2 = AnalyticsUtilsDefault;
    obj2.track(metroImportAll.EXPERIMENT_SAVE_EXPOSURE_FAILED, { module: "discord_app", call: "ExperimentStore.saveTrackedExposureExperiments" });
  }
}
function handleExperimentOverrideBucket(skipCleanup) {
  let experimentBucket;
  let experimentId;
  let experimentType;
  ({ experimentId, experimentBucket, experimentType } = skipCleanup);
  skipCleanup = skipCleanup.skipCleanup;
  if (experimentType == null) {
    let type;
    if (closure_19[experimentId] != null) {
      type = tmp2.type;
    }
    experimentType = type;
  }
  if (null == experimentType) {
    return false;
  } else {
    if (null == experimentBucket) {
      const obj2 = {};
      const merged = Object.assign(obj4);
      obj4 = obj2;
      delete obj5[experimentId];
      const obj3 = {};
      const merged1 = Object.assign(obj);
      obj = obj3;
      delete obj6[experimentId];
    } else if ("user" === experimentType) {
      obj4 = {};
      const merged2 = Object.assign(obj4);
      const obj11 = { type: experimentType, revision: 1, population: 0, bucket: experimentBucket, override: true };
      obj4[experimentId] = obj11;
    } else {
      obj = {};
      const merged3 = Object.assign(obj);
      const obj12 = { type: experimentType, revision: 1, bucket: experimentBucket, override: true };
      obj[experimentId] = obj12;
    }
    if (!skipCleanup) {
      const items = [obj4, obj];
      for (const item10037 of items) {
        for (const key10041 in item10037) {
          if (null != closure_19[key10041]) {
            continue;
          } else {
            delete obj4[tmp23];
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
    if (tmp.id !== _slicedToArray(key10007.split(":"), 1)[0]) {
      continue;
    } else {
      delete closure_23[key10007];
      continue;
    }
    continue;
  }
}
let _Object = Object;
({ ExperimentBuckets: hasOwnProperty, ExperimentTypes: metroRequire, ExposureTypes: metroImportDefault } = ExperimentConstants);
({ AnalyticEvents: metroImportAll, EMPTY_STRING_SNOWFLAKE_ID: c9, UserFlags: c10 } = Constants);
let c11 = "scientist:triggered";
const exerimentOverrides = "exerimentOverrides";
const userExperimentOverrides = "userExperimentOverrides";
const guildExperimentOverrides = "guildExperimentOverrides";
let tmp6 = new LoggerDefault("ExperimentStore");
const logger = tmp6;
const authStore3 = false;
const trackedExposureExperiments = {};
const map = new Map();
let closure_19 = {};
let obj = { rawUserExperiments: [], rawGuildExperiments: [] };
let loadedUserExperiments = {};
const afk = {};
let closure_23 = {};
let obj4 = {};
obj = {};
let c26 = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL || true;
let closure_27 = {};
let c29 = 604800000;
let timestamp = Date.now();
class ExperimentStore extends MobileCacheSnapshotStore {
  constructor() {
    obj = { LOGOUT: handleLogout, LOGIN_SUCCESS: handleLogin, CONNECTION_OPEN: handleLoadedExperiments, EXPERIMENTS_FETCH_SUCCESS: handleLoadedExperiments, OVERLAY_INITIALIZE: handleOverlayInitialize, EXPERIMENTS_FETCH_FAILURE: handleFetchFailure, EXPERIMENT_OVERRIDE_BUCKET: handleExperimentOverrideBucket, GUILD_CREATE: handleGuildChange, GUILD_UPDATE: handleGuildChange };
    const tmp2 = new tmp(obj, Dispatcher.DispatchBand.Early, new.target, tmp, obj);
    tmp2.trackExposure = trackExposure;
    return tmp2;
  }
  initialize() {
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
            if (timestamp - e[tmp8].time <= c29) {
              continue;
            } else {
              delete e[tmp17];
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
      let closure_17 = {};
      loadLocalOverrides();
      this.waitFor(AuthenticationStore);
      const cache = this.loadCache();
    }
  }
  loadCache() {
    let items;
    let loadedFromCache;
    let rawGuildExperiments;
    let rawUserExperiments;
    let source;
    const snapshot = this.readSnapshot(ExperimentStore.LATEST_SNAPSHOT_VERSION);
    if (null != snapshot) {
      if ("loadedUserExperiments" in snapshot) {
        loadedUserExperiments = snapshot.loadedUserExperiments;
        const num = 0;
        closure_22 = processGuildExperimentPopulationFromCache(snapshot.loadedGuildExperiments);
        const tmp4 = globalThis;
        const _Object = Object;
        const tmp5 = loadedUserExperiments;
        const values = Object.values(loadedUserExperiments);
        const item = values.forEach((item) => {
          item.loadedFromCache = true;
          return true;
        });
        const _Object2 = Object;
        const tmp7 = closure_22;
        const values2 = Object.values(closure_22);
        const item1 = values2.forEach((item) => {
          item.loadedFromCache = true;
          return true;
        });
      } else {
        ({ rawUserExperiments, rawGuildExperiments, source } = snapshot);
        const sessionId = snapshot.sessionId;
        const fingerprint = snapshot.fingerprint;
        let c3 = true;
        obj = { rawUserExperiments, rawGuildExperiments: items, source, sessionId, fingerprint };
        items = rawGuildExperiments;
        if (rawGuildExperiments == null) {
          items = [];
        }
        const item2 = rawUserExperiments.forEach((item) => {
          let num;
          let tmp;
          let tmp10;
          let tmp2;
          let tmp3;
          let tmp4;
          let tmp5;
          let tmp6;
          let tmp7;
          let tmp8;
          let tmp9;
          [tmp, tmp2, tmp3, tmp4, tmp5, num, tmp6, tmp7, tmp8, tmp9, tmp10] = item;
          obj = { type: "user", revision: tmp2, population: tmp5, bucket: tmp3, override: 0 === tmp4, hashResult: num, aaMode: 1 === tmp6, triggerDebuggingEnabled: 1 === tmp7, assignmentSource: source, sessionId, loadedFromCache, fingerprint, holdoutName: tmp8, holdoutRevision: tmp9, holdoutBucket: tmp10 };
          loadedUserExperiments[tmp] = obj;
        });
        if (null != rawGuildExperiments) {
          const item3 = rawGuildExperiments.forEach((item) => {
            let arr;
            let arr2;
            let items;
            let tmp;
            let tmp2;
            let tmp3;
            let tmp4;
            let tmp5;
            let tmp6;
            let tmp7;
            let tmp8;
            [tmp, tmp2, tmp3, arr, tmp4, arr2, tmp5, tmp6, tmp7, tmp8] = item;
            obj = { hashKey: tmp2, revision: tmp3, populations: arr.map(_loadPopulation), overrides: _loadOverrides(tmp4), overridesFormatted: items.map((arr) => arr.map(closure_1_35)), holdoutName: tmp5, holdoutControlBucket: tmp6, aaMode: 1 === tmp7, triggerDebuggingEnabled: 1 === tmp8, assignmentSource: source, sessionId, loadedFromCache, fingerprint };
            if (items == null) {
              items = [];
            }
            closure_22[tmp] = obj;
          });
        }
      }
    }
  }
  takeSnapshot() {
    let obj2;
    obj = { version: ExperimentStore.LATEST_SNAPSHOT_VERSION, data: obj2 };
    obj2 = {};
    const merged = Object.assign(obj);
    return obj;
  }
  hasRegisteredExperiment(arg0) {
    return null != closure_19[arg0];
  }
  getUserExperimentDescriptor(id) {
    if (c26) {
      if (null != obj4[id]) {
        return obj4[id];
      }
    }
    let tmp6 = closure_27[id];
    if (undefined === tmp6) {
      obj = _modDef1251;
      const v3Result = obj.v3(id);
      tmp5[id] = v3Result;
      tmp6 = v3Result;
    }
    return loadedUserExperiments["" + tmp6];
  }
  getGuildExperimentDescriptor(id, guildId) {
    let tmp = guildId;
    if (guildId == null) {
      tmp = React4;
    }
    if (c26) {
      if (null != obj[id]) {
        return obj[id];
      }
    }
    const combined = "" + tmp + ":" + id;
    if (combined in closure_23) {
      return closure_23[combined];
    } else {
      const tmp6 = computeGuildExperimentDescriptor(tmp, id);
      closure_23[combined] = tmp6;
      return tmp6;
    }
  }
  getUserExperimentBucket(id) {
    let NOT_ELIGIBLE;
    const userExperimentDescriptor = this.getUserExperimentDescriptor(id);
    if (null != userExperimentDescriptor) {
      NOT_ELIGIBLE = userExperimentDescriptor.bucket;
    } else {
      NOT_ELIGIBLE = hasOwnProperty.NOT_ELIGIBLE;
    }
    return NOT_ELIGIBLE;
  }
  getGuildExperimentBucket(id, guildId) {
    let NOT_ELIGIBLE;
    const guildExperimentDescriptor = this.getGuildExperimentDescriptor(id, guildId);
    if (null != guildExperimentDescriptor) {
      NOT_ELIGIBLE = guildExperimentDescriptor.bucket;
    } else {
      NOT_ELIGIBLE = hasOwnProperty.NOT_ELIGIBLE;
    }
    return NOT_ELIGIBLE;
  }
  getAllUserExperimentDescriptors() {
    return loadedUserExperiments;
  }
  getGuildExperiments() {
    return closure_22;
  }
  getLoadedUserExperiment(name) {
    let tmp3 = closure_27[name];
    if (undefined === tmp3) {
      obj = _modDef1251;
      const v3Result = obj.v3(name);
      tmp2[name] = v3Result;
      tmp3 = v3Result;
    }
    return loadedUserExperiments[tmp3];
  }
  getLoadedGuildExperiment(id) {
    let tmp3 = closure_27[id];
    if (undefined === tmp3) {
      obj = _modDef1251;
      const v3Result = obj.v3(id);
      tmp2[id] = v3Result;
      tmp3 = v3Result;
    }
    return closure_22[tmp3];
  }
  getRecentExposures(GUILD, id) {
    let closure_0 = "" + GUILD + "|" + id + "|";
    const entries = Object.entries(trackedExposureExperiments);
    const found = entries.filter((item) => {
      [obj] = item;
      return obj.startsWith(closure_0);
    });
    return found.map((item) => {
      let str;
      [str, ] = item;
      const items = [str.replace(closure_0, ""), tmp];
      return items;
    });
  }
  getRegisteredExperiments() {
    return closure_19;
  }
  getAllExperimentOverrideDescriptors() {
    let tmp;
    obj = {};
    if (c26) {
      const merged = Object.assign(obj4);
      const merged1 = Object.assign(obj);
      tmp = obj;
    } else {
      tmp = obj;
    }
    return tmp;
  }
  getExperimentOverrideDescriptor(arg0) {
    let tmp = null;
    if (c26) {
      let tmp4 = obj4[arg0];
      if (tmp4 == null) {
        tmp4 = obj[arg0];
      }
      tmp = tmp4;
    }
    return tmp;
  }
  getAllExperimentAssignments() {
    obj = {};
    const obj2 = {};
    const keys = Object.keys(closure_19);
    const item = keys.forEach((item) => {
      const combined = "" + item;
      let tmp4 = closure_27[combined];
      if (undefined === tmp4) {
        obj = _modDef1251;
        const v3Result = obj.v3(combined);
        tmp3[combined] = v3Result;
        tmp4 = v3Result;
      }
      obj2[tmp4] = item;
    });
    for (const key10013 in loadedUserExperiments) {
      let tmp4 = obj2[key10013];
      if (null == tmp4) {
        continue;
      } else {
        obj[tmp4] = loadedUserExperiments[key10013].bucket;
        continue;
      }
      continue;
    }
    for (const key10019 in closure_23) {
      let tmp7 = closure_23[key10019];
      if (null == tmp7) {
        continue;
      } else {
        obj[key10019] = tmp7.bucket;
        continue;
      }
      continue;
    }
    return obj;
  }
  getSerializedState() {
    let obj3;
    obj = {};
    for (const key10005 in closure_22) {
      let _JSON = JSON;
      let _JSON2 = JSON;
      obj[key10005] = JSON.parse(JSON.stringify(closure_22[key10005]));
      let populations = obj[key10005].populations;
      for (const item10007 of populations) {
        item10007.filters = [];
        continue;
      }
    }
    const obj2 = { hasLoadedExperiments, trackedExposureExperiments, loadedUserExperiments, loadedGuildExperiments: obj, userExperimentOverrides: obj4, guildExperimentOverrides: obj, cookieOverrides: obj3.getBuildOverrideExperiments(), assignmentSource: obj.source, assignmentSessionId: obj.sessionId, assignmentFingerprint: obj.fingerprint };
    obj3 = BuildOverrideUtils;
    return obj2;
  }
}
const prototype = ExperimentStore.prototype;
Object.defineProperty(prototype, "hasLoadedExperiments", {
  get: function hasLoadedExperiments() {
    return c16;
  },
  set: undefined
});
function hasExperimentTrackedExposure(experimentId, Early, _location, _Object) {
  const tmp3 = trackedExposureExperiments[getTrackExposureExperimentKey(experimentId, Early, _location, _Object)];
  let tmp4 = null != tmp3;
  if (tmp4) {
    const _Date = Date;
    tmp4 = Date.now() - tmp3.time <= c29 && tmp3.hash === tmp2;
    Date.now() - tmp3.time <= c29 && tmp3.hash === tmp2;
  }
  return tmp4;
}
prototype["hasExperimentTrackedExposure"] = hasExperimentTrackedExposure;
ExperimentStore.displayName = "ExperimentStore";
ExperimentStore.LATEST_SNAPSHOT_VERSION = 1;
obj = { LOGOUT: handleLogout, LOGIN_SUCCESS: handleLogin, CONNECTION_OPEN: handleLoadedExperiments, EXPERIMENTS_FETCH_SUCCESS: handleLoadedExperiments, OVERLAY_INITIALIZE: handleOverlayInitialize, EXPERIMENTS_FETCH_FAILURE: handleFetchFailure, EXPERIMENT_OVERRIDE_BUCKET: handleExperimentOverrideBucket, GUILD_CREATE: handleGuildChange, GUILD_UPDATE: handleGuildChange };
const hasExperimentTrackedExposure1 = new hasExperimentTrackedExposure(obj, Dispatcher.DispatchBand.Early, tmp, _Object, prototype, "hasExperimentTrackedExposure", handleLogout, handleLogin, handleLoadedExperiments, handleOverlayInitialize, handleFetchFailure, ExperimentStore);
hasExperimentTrackedExposure1.trackExposure = trackExposure;
let result = size.fileFinishedImporting("modules/experiments/ExperimentStore.tsx");

export default hasExperimentTrackedExposure1;
export const registerExperiment = function registerExperiment(experimentId) {
  closure_19[experimentId.experimentId] = { type: experimentId.experimentType, title: experimentId.title, description: experimentId.description, buckets: experimentId.buckets, commonTriggerPoint: experimentId.commonTriggerPoint };
};