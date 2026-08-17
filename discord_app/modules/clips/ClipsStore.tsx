// discord_app/modules/clips/ClipsStore.tsx
import _modDef38 from "module_38" /* 38 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import hasFlag from "hasFlag" /* 1403 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import isClipsEnabled from "isClipsEnabled" /* 4526 */;
import isStreamKey from "isStreamKey" /* 4531 */;
import apexExperimentDefault from "apexExperiment" /* 4534 */;
import apexExperiment from "apexExperiment" /* 4535 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "initialize" /* 4504 */;
import closure_5 from "fetchFingerprint" /* 1218 */;
import result from "result" /* 4523 */;
import { VoiceFlags } from "ME" /* 676 */;
import RESOLUTION_720 from "RESOLUTION_720" /* 4524 */;
import set from "set" /* 2 */;

require = arg1;
function _migrateDefaultStorage() {
  const self = this;
  const tmp = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let callback2 = tmp3;
            let callback = tmp7;
            callback = undefined;
            callback2 = undefined;
            if (closure_1_31.clipsSettings.storageLocation === closure_1_14) {
              if (null != closure_1_1(closure_1_2[6])) {
                if (null != closure_1_1(closure_1_2[6]).app) {
                  c3 = 1;
                  const app2 = closure_1_1(closure_1_2[6]).app;
                  c4 = 3;
                  c5 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = app2.getPath("videos");
                  return obj1;
                }
              }
            }
            c5 = 3;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          logger.error("Failed to resolve videos path for default storage migration", dependencyMap);
          const app = callback2(4004).app;
          c4 = 2;
          c5 = 1;
          const obj2 = { value: null, done: false };
          obj2[0] = app.getPath("documents");
          return obj2;
        } else {
          if (2 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              callback = arg1;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            callback2 = arg1;
            obj = callback(4525);
            callback = obj.pathJoin(callback2, closure_15);
            c3 = 0;
          }
          clipsSettings.clipsSettings.storageLocation = callback;
          closure_34.emitChange();
        }
        c5 = 3;
        const obj4 = { value: null, done: true };
        obj4[0] = arg1;
        return obj4;
      } catch (tmp36) {
        dependencyMap = tmp36;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp36;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  closure_32 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function trackSharedRemoteClipId(arg0, arg1, arg2) {
  if (obj.getConfig({ location: "trackSharedRemoteClipId" }).enableDistributedClips) {
    if (arg2 !== store.getId()) {
      return false;
    } else {
      let flag2 = false;
      const iter = arg1[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (null != nextResult.clip_remote_id) {
          let obj2 = map;
          let value = map.get(arg0);
          let obj3 = value;
          if (null == value) {
            let _Set = Set;
            let tmp8 = new.target;
            let tmp9 = new.target;
            set = new Set();
            let tmp11 = set;
            obj3 = set;
            let result = obj2.set(arg0, set);
          }
          let tmp13 = obj3;
          let tmp14 = nextResult;
          let addResult = obj3.add(tmp6.clip_remote_id);
          flag2 = true;
        }
        continue;
      }
      return flag2;
    }
  } else {
    return false;
  }
  obj = apexExperimentDefault;
}
({ CLIPS_HARDWARE_CLASSIFICATION_VERSION: closure_6, ClipSaveTypes: error, ClipsUserEducationType: closure_8, ClipsLogger: c9, MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS: c10, ClipsHardwareClassification: unpackModuleId, ClipsSaveNoOpReason: closure_12, ClipsLengthSettings, ClipsViewerConnectivitySettings, DEFAULT_CLIPS_BITRATE_PERCENT } = result);
let c14 = "default";
let c15 = "Discord Clips";
let closure_16 = {};
let closure_17 = {};
let closure_18 = {};
let closure_19 = [];
let c20 = 0;
let c21 = null;
let c22 = null;
let c23 = null;
let closure_24 = {};
let closure_25 = {};
let c26 = null;
({ ApplicationStreamFPS, ApplicationStreamResolutions } = RESOLUTION_720);
let set = new Set();
let c28 = false;
const map = new Map();
obj = { clipsEnabled: false, storageLocation: "default", clipsQuality: obj, clipsLength: ClipsLengthSettings.SECONDS_30, remindersEnabled: true, decoupledClipsEnabled: false, viewerClipsEnabled: true, viewerConnectivity: ClipsViewerConnectivitySettings.ALL, maxAutoClips: 20, clipSignals: { enableDistributedSignals: true, enableGameSignals: true }, debugTooltipsEnabled: false, enableAutoclipping: "ct", showPovClipsInGallery: true };
obj = { resolution: ApplicationStreamResolutions.RESOLUTION_1080, frameRate: ApplicationStreamFPS.FPS_30, bitratePercent: DEFAULT_CLIPS_BITRATE_PERCENT };
let closure_31 = { clipsSettings: obj, hardwareClassification: null, hardwareClassificationForDecoupled: null, hardwareClassificationVersion: 0, newClipIds: [], hasClips: false, hasTakenDecoupledClip: false, clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 } };
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class ClipsStoreClass extends DeviceSettingsStore {
}
const prototype = ClipsStoreClass.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    closure_31 = arg0;
  }
  (function migrateDefaultStorage() {
    const self = this;
    const apply = closure_32.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
  this.waitFor(closure_4);
};
prototype["getClips"] = function getClips() {
  return closure_16;
};
prototype["getClipById"] = function getClipById(arg0) {
  return dependencyMap[arg0];
};
prototype["getClipByRemoteId"] = function getClipByRemoteId(arg0) {
  if (null != table2[arg0]) {
    return dependencyMap[tmp];
  }
};
prototype["getClipCandidates"] = function getClipCandidates() {
  return closure_19;
};
prototype["getClipCandidateById"] = function getClipCandidateById(arg0) {
  return table[arg0];
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return closure_31;
};
prototype["getSettings"] = function getSettings() {
  return closure_31.clipsSettings;
};
prototype["getEnableAutoclipping"] = function getEnableAutoclipping() {
  let enabled = closure_31.clipsSettings.enableAutoclipping;
  if (enabled == null) {
    const AutoclippingDefaultOverrideExperiment = apexExperiment.AutoclippingDefaultOverrideExperiment;
    enabled = AutoclippingDefaultOverrideExperiment.getConfig({ location: "getAutoclippingDefault" }).enabled;
  }
  return enabled;
};
prototype["hasUserSetAutoclippingSettings"] = function hasUserSetAutoclippingSettings() {
  return null != closure_31.clipsSettings.enableAutoclipping;
};
prototype["getLastClipsSession"] = function getLastClipsSession() {
  return c22;
};
prototype["getCurrentClipsSession"] = function getCurrentClipsSession() {
  return c23;
};
prototype["getHistoricalClipsSessionById"] = function getHistoricalClipsSessionById(arg0) {
  return table3[arg0];
};
prototype["devSetLastClipsSession"] = function devSetLastClipsSession(arg0) {
  closure_22 = arg0;
  this.emitChange();
};
prototype["getClipsWarningShown"] = function getClipsWarningShown(channelId) {
  return c21 === channelId;
};
prototype["getHardwareClassification"] = function getHardwareClassification() {
  return closure_31.hardwareClassification;
};
prototype["getHardwareClassificationForDecoupled"] = function getHardwareClassificationForDecoupled() {
  return closure_31.hardwareClassificationForDecoupled;
};
prototype["getHardwareClassificationVersion"] = function getHardwareClassificationVersion() {
  return closure_31.hardwareClassificationVersion;
};
prototype["getIsAtMaxSaveClipOperations"] = function getIsAtMaxSaveClipOperations() {
  return c20 >= closure_10;
};
prototype["getLastClipsError"] = function getLastClipsError() {
  return c26;
};
prototype["isClipsEnabledForUser"] = function isClipsEnabledForUser(userId) {
  let flag;
  if (dependencyMap2[userId] != null) {
    flag = tmp.clipsEnabled;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["isVoiceRecordingAllowedForUser"] = function isVoiceRecordingAllowedForUser(id) {
  let flag;
  if (dependencyMap2[id] != null) {
    flag = tmp.allowVoiceRecording;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["isViewerClippingAllowedForUser"] = function isViewerClippingAllowedForUser(arg0) {
  let flag;
  if (dependencyMap2[arg0] != null) {
    flag = tmp.allowAnyViewerClips;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["hasClips"] = function hasClips() {
  return closure_31.hasClips;
};
prototype["hasTakenDecoupledClip"] = function hasTakenDecoupledClip() {
  return closure_31.hasTakenDecoupledClip;
};
prototype["canShowReminders"] = function canShowReminders() {
  return closure_31.clipsSettings.remindersEnabled;
};
prototype["getNewClipIds"] = function getNewClipIds() {
  return closure_31.newClipIds;
};
prototype["isClipExporting"] = function isClipExporting(arg0) {
  return set.has(arg0);
};
prototype["getExportingClipIds"] = function getExportingClipIds() {
  return set;
};
prototype["isAutoStashEnabled"] = function isAutoStashEnabled() {
  return c28;
};
prototype["wasClipSharedInChannel"] = function wasClipSharedInChannel(arg0, arg1) {
  const value = map.get(arg1);
  let flag;
  if (value != null) {
    flag = value.has(arg0);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
ClipsStoreClass.displayName = "ClipsStore";
ClipsStoreClass.persistKey = "ClipsStore";
let items = [
  (arg0) => {
    let clipsSettings = arg0;
    if (null == arg0) {
      clipsSettings = obj;
    }
    return { clipsSettings, newClipsCount: 0 };
  },
  (clipsSettings) => {
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj = {};
    const merged2 = Object.assign(clipsSettings);
    obj.clipsSettings = obj;
    return obj;
  },
  (newClipIds) => {
    obj = {};
    const merged = Object.assign(newClipIds);
    newClipIds = newClipIds.newClipIds;
    if (newClipIds == null) {
      newClipIds = [];
    }
    obj.newClipIds = newClipIds;
    return obj;
  },
  (hardwareClassification) => {
    obj = {};
    const merged = Object.assign(hardwareClassification);
    let prop = hardwareClassification.hardwareClassification;
    if (prop == null) {
      prop = null;
    }
    obj.hardwareClassification = prop;
    let num = hardwareClassification.hardwareClassificationVersion;
    if (num == null) {
      num = 0;
    }
    obj.hardwareClassificationVersion = num;
    return obj;
  },
  (hasClips) => {
    obj = {};
    const merged = Object.assign(hasClips);
    let flag = hasClips.hasClips;
    if (flag == null) {
      flag = false;
    }
    obj.hasClips = flag;
    return obj;
  },
  (clipsSettings) => {
    obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj.decoupledClipsEnabled = obj.decoupledClipsEnabled;
    obj.clipsSettings = obj;
    return obj;
  },
  (hardwareClassificationForDecoupled) => {
    obj = {};
    const merged = Object.assign(hardwareClassificationForDecoupled);
    let prop = hardwareClassificationForDecoupled.hardwareClassificationForDecoupled;
    if (prop == null) {
      prop = null;
    }
    obj.hardwareClassificationForDecoupled = prop;
    return obj;
  },
  (clipsSettings) => {
    const _default = _detectH265HardwareDecode.default;
    let hardwareEncoding;
    if (_default != null) {
      hardwareEncoding = _default.getHardwareEncoding();
    }
    obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj.clipsEnabled = hardwareEncoding && clipsSettings.clipsSettings.clipsEnabled;
    obj.decoupledClipsEnabled = hardwareEncoding && clipsSettings.clipsSettings.decoupledClipsEnabled;
    obj.clipsSettings = obj;
    return obj;
  },
  (newClipIds) => {
    obj = {};
    const merged = Object.assign(newClipIds);
    newClipIds = newClipIds.newClipIds;
    if (newClipIds == null) {
      newClipIds = [];
    }
    obj.newClipIds = newClipIds;
    obj.newClipIDs = undefined;
    return obj;
  },
  (clipsSettings) => {
    obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    if (typeof clipsSettings.clipsSettings.clipsQuality !== "number") {
      if (null != clipsSettings.clipsSettings.clipsQuality) {
        let clipsQuality = clipsSettings.clipsSettings.clipsQuality;
      }
      obj.clipsQuality = clipsQuality;
      obj.clipsSettings = obj;
      return obj;
    }
    clipsQuality = obj.clipsQuality;
  },
  (clipsSettings) => {
    obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    let remindersEnabled = clipsSettings.clipsSettings.remindersEnabled;
    if (remindersEnabled == null) {
      remindersEnabled = obj.remindersEnabled;
    }
    obj.remindersEnabled = remindersEnabled;
    obj.clipsSettings = obj;
    return obj;
  },
  (arg0) => {
    obj = {};
    const merged = Object.assign(arg0);
    obj.hasTakenDecoupledClip = false;
    obj.clipsEducationState = { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 };
    return obj;
  },
  (clipsSettings) => {
    obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    let maxAutoClips = clipsSettings.clipsSettings.maxAutoClips;
    if (maxAutoClips == null) {
      maxAutoClips = obj.maxAutoClips;
    }
    obj.maxAutoClips = maxAutoClips;
    let clipSignals = clipsSettings.clipsSettings.clipSignals;
    if (clipSignals == null) {
      clipSignals = obj.clipSignals;
    }
    obj.clipSignals = clipSignals;
    obj.clipsSettings = obj;
    return obj;
  },
  (clipsSettings) => {
    obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj.clipsSettings = obj;
    return obj;
  },
  (clipsSettings) => {
    obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    let enableAutoclipping = clipsSettings.clipsSettings.enableAutoclipping;
    if (enableAutoclipping == null) {
      enableAutoclipping = obj.enableAutoclipping;
    }
    obj.enableAutoclipping = enableAutoclipping;
    obj.clipsSettings = obj;
    return obj;
  },
  (clipsSettings) => {
    obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    let showPovClipsInGallery = clipsSettings.clipsSettings.showPovClipsInGallery;
    if (showPovClipsInGallery == null) {
      showPovClipsInGallery = obj.showPovClipsInGallery;
    }
    obj.showPovClipsInGallery = showPovClipsInGallery;
    obj.clipsSettings = obj;
    return obj;
  },
  (clipsSettings) => {
    obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj = {};
    const merged2 = Object.assign(clipsSettings.clipsSettings.clipsQuality);
    let bitratePercent = clipsSettings.clipsSettings.clipsQuality.bitratePercent;
    if (bitratePercent == null) {
      bitratePercent = obj.clipsQuality.bitratePercent;
    }
    obj.bitratePercent = bitratePercent;
    obj.clipsQuality = obj;
    obj.clipsSettings = obj;
    return obj;
  }
];
ClipsStoreClass.migrations = items;
obj = {
  CLIPS_SETTINGS_UPDATE: function handleSettingsUpdate(settings) {
    obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(obj.clipsSettings);
    const merged2 = Object.assign(settings.settings);
    obj.clipsSettings = obj;
  },
  CLIPS_SAVE_CLIP: function handleSaveClip(clip) {
    clip = clip.clip;
    closure_20 = Math.max(closure_20 - 1, 0);
    if (clip.isCandidate) {
      const items = [clip];
      HermesBuiltin.arraySpread(items, 1);
      closure_17[clip.id] = clip;
    }
    if (null != obj) {
      obj = {};
      const merged = Object.assign(obj);
      let num2 = 0;
      if ("manual" === clip.clipMethod) {
        num2 = 1;
      }
      obj.manualClipsSaved = obj.manualClipsSaved + num2;
      let num3 = 0;
      if (clip.isCandidate) {
        num3 = 1;
      }
      obj.candidateClipsSaved = obj.candidateClipsSaved + num3;
    }
    if (!clip.isCandidate) {
      obj = { applicationName: null, ended: false };
      obj[0] = clip.applicationName;
      const merged1 = Object.assign(obj);
      let newClipIds;
      if (obj != null) {
        newClipIds = obj.newClipIds;
      }
      if (newClipIds == null) {
        newClipIds = [];
      }
      const items1 = [];
      items1[HermesBuiltin.arraySpread(newClipIds, 0)] = clip.id;
      obj.newClipIds = items1;
      obj = {};
      const merged2 = Object.assign(obj);
      let newClipIds1 = obj.newClipIds;
      if (newClipIds1 == null) {
        newClipIds1 = [];
      }
      const items2 = [];
      items2[HermesBuiltin.arraySpread(newClipIds1, 0)] = clip.id;
      obj.newClipIds = items2;
      closure_16[clip.id] = clip;
      if (null != clip.remoteClipId) {
        closure_18[clip.remoteClipId] = clip.id;
      }
      obj.hasClips = true;
    }
  },
  CLIPS_PROMOTE_CLIP_CANDIDATE: function handlePromoteClipCandidate(clip) {
    clip = clip.clip;
    obj = { applicationName: clip.applicationName };
    const merged = Object.assign(obj);
    obj.ended = true;
    let newClipIds;
    if (obj != null) {
      newClipIds = obj.newClipIds;
    }
    if (newClipIds == null) {
      newClipIds = [];
    }
    const items = [];
    items[HermesBuiltin.arraySpread(newClipIds, 0)] = clip.id;
    obj.newClipIds = items;
    let tmp5 = null != obj;
    if (tmp5) {
      tmp5 = obj.id === clip.gameSessionId;
    }
    _modDef38(tmp5, "Promoting clip candidates that do not match current autoclip session");
    obj = {};
    const merged1 = Object.assign(obj);
    obj.candidateClipsPromoted = obj.candidateClipsPromoted + 1;
    obj = {};
    const merged2 = Object.assign(obj);
    let newClipIds1 = obj.newClipIds;
    if (newClipIds1 == null) {
      newClipIds1 = [];
    }
    const items1 = [];
    items1[HermesBuiltin.arraySpread(newClipIds1, 0)] = clip.id;
    obj.newClipIds = items1;
    const tmp4 = _modDef38;
    delete tmp2[tmp];
    closure_16[clip.id] = clip;
    obj.hasClips = true;
  },
  CLIPS_SAVE_CLIP_START: function handleSaveClipStart(arg0) {
    closure_20 = closure_20 + 1;
    let hasTakenDecoupledClip = closure_31.hasTakenDecoupledClip;
    if (!hasTakenDecoupledClip) {
      hasTakenDecoupledClip = tmp === constants.DECOUPLED;
    }
    closure_31.hasTakenDecoupledClip = hasTakenDecoupledClip;
  },
  CLIPS_SAVE_CLIP_ERROR: function handleSaveClipError() {
    closure_20 = Math.max(closure_20 - 1, 0);
  },
  CLIPS_SAVE_CLIP_NO_OP: function handleSaveClipNoOp(reason) {
    reason = reason.reason;
    if (!tmp) {
      const _Math = Math;
      closure_20 = Math.max(closure_20 - 1, 0);
    }
  },
  STREAM_START: function handleStreamStart(arg0) {
    ({ sourceName, pid } = arg0);
    obj = isClipsEnabled;
    if (obj.isClipsEnabled()) {
      let tmp2 = sourceName;
      if (null != pid) {
        gameForPID = gameForPID.getGameForPID(pid);
        let name;
        if (gameForPID != null) {
          name = gameForPID.name;
        }
        if (name == null) {
          name = sourceName;
        }
        tmp2 = name;
      }
      if (null != tmp2) {
        if ("" !== tmp2) {
          obj = { applicationName: null, newClipIds: null, ended: false };
          obj[0] = tmp2;
          obj[1] = [];
        }
      }
      return false;
    } else {
      return false;
    }
  },
  STREAM_STOP: function handleStreamStop(arg0) {
    let tmp2 = null != obj;
    if (tmp2) {
      obj = isStreamKey;
      const tmp6 = obj.decodeStreamKey(tmp).ownerId === store.getId();
      if (tmp6) {
        let tmp8 = null;
        if (0 !== obj.newClipIds.length) {
          obj = {};
          const merged = Object.assign(obj);
          obj.ended = true;
          tmp8 = obj;
        }
        obj = tmp8;
      }
      tmp2 = tmp6;
    }
    return tmp2;
  },
  CLIPS_CLEAR_LAST_CLIPS_SESSION: function handleClearLastClipsSession() {
    if (null == c22) {
      return false;
    } else {
      c22 = null;
    }
  },
  CLIPS_SESSION_START: function handleClipsSessionStart(arg0) {
    ({ sessionId, gameId } = arg0);
    if (null != _null) {
      closure_24[_null.id] = _null;
    }
    _null = { id: sessionId, gameId, manualClipsSaved: 0, candidateClipsSaved: 0, candidateClipsPromoted: 0 };
  },
  CLIPS_SESSION_STOP: function handleClipsSessionStop() {
    if (null == _null) {
      return false;
    } else {
      closure_24[_null.id] = _null;
      _null = null;
    }
  },
  CLIPS_CLEAR_NEW_CLIP_IDS: function clearNewClipIds() {
    closure_31.newClipIds = [];
  },
  CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function removeSingleNewClipId(clipId) {
    clipId = clipId.clipId;
    const newClipIds = closure_31.newClipIds;
    closure_31.newClipIds = newClipIds.filter((arg0) => arg0 !== clipId);
  },
  CLIPS_LOAD_DIRECTORY_SUCCESS: function handleClipsDirectoryLoaded(arg0) {
    closure_16 = {};
    let arr = [];
    const iter = arg0.clips[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if (nextResult.isCandidate) {
        let tmp7 = closure_17;
        let tmp8 = nextResult;
        closure_17[tmp2.id] = tmp2;
        let tmp9 = arr;
        arr = arr.push(tmp2);
      } else {
        let tmp3 = closure_16;
        let tmp4 = nextResult;
        closure_16[tmp2.id] = tmp2;
        if (null != tmp2.remoteClipId) {
          let tmp5 = closure_18;
          let tmp6 = nextResult;
          closure_18[tmp2.remoteClipId] = tmp2.id;
        }
      }
      continue;
    }
    closure_31.hasClips = Object.keys(closure_16).length > 0;
  },
  CLIPS_DELETE_CLIP: function handleClipsDelete(arg0) {
    closure_0 = arg0;
    delete tmp4[tmp3];
    delete tmp3[tmp2];
    let remoteClipId;
    if (dependencyMap[arg0.id] != null) {
      remoteClipId = tmp5.remoteClipId;
    }
    if (null != remoteClipId) {
      remoteClipId = tmp5.remoteClipId;
      delete tmp2[tmp];
    }
    closure_31.hasClips = Object.keys(dependencyMap).length > 0;
  },
  CLIPS_UPDATE_METADATA: function handleClipMetadataUpdate(clip) {
    clip = clip.clip;
    if (clip.isCandidate) {
      closure_17[clip.id] = clip;
    } else {
      closure_16[clip.id] = clip;
      if (null != clip.remoteClipId) {
        closure_18[clip.remoteClipId] = clip.id;
      }
    }
  },
  RTC_CONNECTION_FLAGS: function handleRTCConnectionFlagsUpdate(flags) {
    obj = { clipsEnabled: hasFlag.hasFlag(flags.flags, VoiceFlags.CLIPS_ENABLED), allowVoiceRecording: null, allowAnyViewerClips: null };
    const obj2 = hasFlag;
    obj[1] = hasFlag.hasFlag(flags.flags, VoiceFlags.ALLOW_VOICE_RECORDING);
    const obj3 = hasFlag;
    obj[2] = hasFlag.hasFlag(flags.flags, VoiceFlags.ALLOW_ANY_VIEWER_CLIPS);
    closure_25[flags.userId] = obj;
  },
  CLIPS_SHOW_CALL_WARNING: function handleShowCallWarning(channelId) {
    channelId = channelId.channelId;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    if (channelId.channelId !== c21) {
      c21 = null;
    }
  },
  CLIPS_CLASSIFY_HARDWARE: function handleClassifyHardware(classification) {
    classification = classification.classification;
    closure_31.hardwareClassificationVersion = closure_6;
    closure_31.hardwareClassification = classification;
    if (tmp3) {
      closure_31.clipsSettings.clipsEnabled = true;
    }
    closure_31.hardwareClassificationForDecoupled = classification;
    let clipsEnabled = closure_31.hardwareClassificationForDecoupled === tmp2.MEETS_AUTO_ENABLE && tmp5 !== tmp2.MEETS_AUTO_ENABLE;
    if (clipsEnabled) {
      clipsEnabled = closure_31.clipsSettings.clipsEnabled;
    }
    if (clipsEnabled) {
      closure_31.clipsSettings.decoupledClipsEnabled = true;
    }
  },
  CLIPS_INIT: function handleClipsInit(applicationName) {
    c26 = null;
    obj = isClipsEnabled;
    if (obj.isClipsEnabled()) {
      obj = { applicationName: null, newClipIds: null, ended: false };
      obj[0] = applicationName.applicationName;
      obj[1] = [];
    } else {
      return false;
    }
  },
  CLIPS_INIT_FAILURE: function handleClipsInitFailure(errMsg) {
    errMsg = errMsg.errMsg;
  },
  CLIPS_DISMISS_EDUCATION: function handleDismissClipsEducation(educationType) {
    educationType = educationType.educationType;
    if (_Error.Error === educationType) {
      c26 = null;
    } else if (tmp.Disabled === educationType) {
      const _Date = Date;
      closure_31.clipsEducationState.dismissedAt = Date.now();
      closure_31.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0;
      const clipsEducationState = closure_31.clipsEducationState;
      clipsEducationState.numberOfTimesDismissed = clipsEducationState.numberOfTimesDismissed + 1;
    }
  },
  RUNNING_GAMES_CHANGE: function handleRunningGamesChange(added) {
    if (added.added.length > 0) {
      const clipsEducationState = closure_31.clipsEducationState;
      clipsEducationState.numberOfGamesLaunchedSinceDismissal = clipsEducationState.numberOfGamesLaunchedSinceDismissal + 1;
    }
  },
  CLIPS_SET_EXPORTING: function handleSetExporting(clipIds) {
    clipIds = clipIds.clipIds;
    if (clipIds == null) {
      clipIds = [];
    }
    set = new Set(clipIds);
  },
  CLIPS_SET_AUTO_STASH_ENABLED: function handleSetAutoStashEnabled(enabled) {
    enabled = enabled.enabled;
  },
  MESSAGE_CREATE: function handleMessageCreate(message) {
    let attachments = message.message.attachments;
    if (attachments == null) {
      attachments = [];
    }
    const author = message.message.author;
    let id;
    if (author != null) {
      id = author.id;
    }
    return trackSharedRemoteClipId(message.channelId, attachments, id);
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(channelId) {
    let flag = false;
    const iter = channelId.messages[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let tmp4Result = flag;
      if (!flag) {
        let tmp5 = nextResult;
        let attachments = tmp2.attachments;
        let tmp4 = trackSharedRemoteClipId;
        if (attachments == null) {
          attachments = [];
        }
        let tmp6 = nextResult;
        let author = tmp2.author;
        let id;
        if (author != null) {
          id = author.id;
        }
        tmp4Result = tmp4(channelId.channelId, attachments, id);
      }
      flag = tmp4Result;
      continue;
    }
    return flag;
  },
  LOGOUT: function reset() {
    map.clear();
    c22 = null;
    c21 = null;
    closure_25 = {};
  }
};
const clipsStoreClass = new ClipsStoreClass(dispatcherDefault, obj);
result = set.fileFinishedImporting("modules/clips/ClipsStore.tsx");

export default clipsStoreClass;
export const DEFAULT_STORAGE_SENTINEL = "default";
export const DEFAULT_STORAGE_DIRECTORY = "Discord Clips";