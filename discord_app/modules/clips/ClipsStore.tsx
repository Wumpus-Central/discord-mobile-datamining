// === Module 4308: _migrateDefaultStorage ===

// Module 4308 (_migrateDefaultStorage)
import closure_3 from "RESOLUTION_720";
import initialize from "initialize";
import fetchFingerprint from "fetchFingerprint";
import result from "result";
import { VoiceFlags } from "ME";
import RESOLUTION_720 from "RESOLUTION_720";
import { DeviceSettingsStore } from "initialize";
import set from "fetchFingerprint";

let ApplicationStreamFPS;
let ApplicationStreamResolutions;
let ClipsLengthSettings;
let ClipsViewerConnectivitySettings;
let DEFAULT_CLIPS_BITRATE_PERCENT;
let DEFAULT_MAX_AUTO_CLIPS;
let c10;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
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
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            if (outer1_29.clipsSettings.storageLocation === outer1_12) {
              if (null != outer1_1(outer1_2[6])) {
                if (null != outer1_1(outer1_2[6]).app) {
                  let c3 = 1;
                  const app2 = outer1_1(outer1_2[6]).app;
                  c4 = 3;
                  c5 = 1;
                  const obj1 = { value: null, done: false };
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
          const app = callback2(3866).app;
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
            obj = callback(4311);
            callback = obj.pathJoin(callback2, closure_13);
            c3 = 0;
          }
          clipsSettings.clipsSettings.storageLocation = callback;
          closure_32.emitChange();
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
  const _migrateDefaultStorage = tmp;
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
            let set = new Set();
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
  obj = importDefault(4322);
}
({ CLIPS_HARDWARE_CLASSIFICATION_VERSION: closure_6, ClipSaveTypes: error, ClipsUserEducationType: metroImportAll, ClipsLogger: c9, MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS: c10, ClipsLengthSettings, ClipsViewerConnectivitySettings, DEFAULT_MAX_AUTO_CLIPS, DEFAULT_CLIPS_BITRATE_PERCENT } = result);
let c12 = "default";
let c13 = "Discord Clips";
let closure_14 = {};
let closure_15 = {};
let closure_16 = {};
let closure_17 = [];
let c18 = 0;
let c19 = null;
let c20 = null;
let c21 = null;
let closure_22 = {};
let closure_23 = {};
let c24 = null;
({ ApplicationStreamFPS, ApplicationStreamResolutions } = RESOLUTION_720);
let set = new Set();
let c26 = false;
const map = new Map();
obj = { clipsEnabled: false, storageLocation: "default", clipsQuality: obj, clipsLength: ClipsLengthSettings.SECONDS_30, remindersEnabled: true, decoupledClipsEnabled: false, viewerClipsEnabled: true, viewerConnectivity: ClipsViewerConnectivitySettings.ALL, maxAutoClips: DEFAULT_MAX_AUTO_CLIPS, clipSignals: { enableDistributedSignals: true, enableGameSignals: true }, debugTooltipsEnabled: false, enableAutoclipping: "ct", showPovClipsInGallery: "Array" };
obj = { resolution: ApplicationStreamResolutions.RESOLUTION_1080, frameRate: ApplicationStreamFPS.FPS_30, bitratePercent: DEFAULT_CLIPS_BITRATE_PERCENT };
let closure_29 = { clipsSettings: obj, hardwareClassification: null, hardwareClassificationForDecoupled: null, hardwareClassificationVersion: 0, newClipIds: [], hasClips: false, hasTakenDecoupledClip: false, clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 } };
class ClipsStoreClass extends DeviceSettingsStore {
}
const prototype = ClipsStoreClass.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    let closure_29 = arg0;
  }
  (function migrateDefaultStorage() {
    const self = this;
    const apply = closure_30.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
  this.waitFor(initialize);
};
prototype["getClips"] = function getClips() {
  return closure_14;
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
  return closure_17;
};
prototype["getClipCandidateById"] = function getClipCandidateById(arg0) {
  return table[arg0];
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return closure_29;
};
prototype["getSettings"] = function getSettings() {
  return closure_29.clipsSettings;
};
prototype["getEnableAutoclipping"] = function getEnableAutoclipping() {
  let enabled = closure_29.clipsSettings.enableAutoclipping;
  if (enabled == null) {
    const AutoclippingDefaultOverrideExperiment = require(4323) /* apexExperiment */.AutoclippingDefaultOverrideExperiment;
    enabled = AutoclippingDefaultOverrideExperiment.getConfig({ location: "getAutoclippingDefault" }).enabled;
  }
  return enabled;
};
prototype["hasUserSetAutoclippingSettings"] = function hasUserSetAutoclippingSettings() {
  return null != closure_29.clipsSettings.enableAutoclipping;
};
prototype["getLastClipsSession"] = function getLastClipsSession() {
  return c20;
};
prototype["getCurrentClipsSession"] = function getCurrentClipsSession() {
  return c21;
};
prototype["getHistoricalClipsSessionById"] = function getHistoricalClipsSessionById(arg0) {
  return table3[arg0];
};
prototype["devSetLastClipsSession"] = function devSetLastClipsSession(arg0) {
  let closure_20 = arg0;
  this.emitChange();
};
prototype["getClipsWarningShown"] = function getClipsWarningShown(channelId) {
  return c19 === channelId;
};
prototype["getHardwareClassification"] = function getHardwareClassification() {
  return closure_29.hardwareClassification;
};
prototype["getHardwareClassificationForDecoupled"] = function getHardwareClassificationForDecoupled() {
  return closure_29.hardwareClassificationForDecoupled;
};
prototype["getHardwareClassificationVersion"] = function getHardwareClassificationVersion() {
  return closure_29.hardwareClassificationVersion;
};
prototype["getIsAtMaxSaveClipOperations"] = function getIsAtMaxSaveClipOperations() {
  return c18 >= closure_10;
};
prototype["getLastClipsError"] = function getLastClipsError() {
  return c24;
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
  return closure_29.hasClips;
};
prototype["hasTakenDecoupledClip"] = function hasTakenDecoupledClip() {
  return closure_29.hasTakenDecoupledClip;
};
prototype["canShowReminders"] = function canShowReminders() {
  return closure_29.clipsSettings.remindersEnabled;
};
prototype["getNewClipIds"] = function getNewClipIds() {
  return closure_29.newClipIds;
};
prototype["isClipExporting"] = function isClipExporting(arg0) {
  return set.has(arg0);
};
prototype["getExportingClipIds"] = function getExportingClipIds() {
  return set;
};
prototype["isAutoStashEnabled"] = function isAutoStashEnabled() {
  return c26;
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
    let obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj = {};
    const merged2 = Object.assign(clipsSettings);
    obj.clipsSettings = obj;
    return obj;
  },
  (newClipIds) => {
    const obj = {};
    const merged = Object.assign(newClipIds);
    newClipIds = newClipIds.newClipIds;
    if (newClipIds == null) {
      newClipIds = [];
    }
    obj.newClipIds = newClipIds;
    return obj;
  },
  (hardwareClassification) => {
    const obj = {};
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
    const obj = {};
    const merged = Object.assign(hasClips);
    let flag = hasClips.hasClips;
    if (flag == null) {
      flag = false;
    }
    obj.hasClips = flag;
    return obj;
  },
  (clipsSettings) => {
    let obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj.decoupledClipsEnabled = obj.decoupledClipsEnabled;
    obj.clipsSettings = obj;
    return obj;
  },
  (hardwareClassificationForDecoupled) => {
    const obj = {};
    const merged = Object.assign(hardwareClassificationForDecoupled);
    let prop = hardwareClassificationForDecoupled.hardwareClassificationForDecoupled;
    if (prop == null) {
      prop = null;
    }
    obj.hardwareClassificationForDecoupled = prop;
    return obj;
  },
  (clipsSettings) => {
    const _default = require(4302) /* _detectH265HardwareDecode */.default;
    let hardwareEncoding;
    if (_default != null) {
      hardwareEncoding = _default.getHardwareEncoding();
    }
    let obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj.clipsEnabled = hardwareEncoding && clipsSettings.clipsSettings.clipsEnabled;
    obj.decoupledClipsEnabled = hardwareEncoding && clipsSettings.clipsSettings.decoupledClipsEnabled;
    obj.clipsSettings = obj;
    return obj;
  },
  (newClipIds) => {
    const obj = {};
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
    let obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    if (typeof clipsSettings.clipsSettings.clipsQuality !== "Object") {
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
    let obj = {};
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
    const obj = {};
    const merged = Object.assign(arg0);
    obj.hasTakenDecoupledClip = false;
    obj.clipsEducationState = { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 };
    return obj;
  },
  (clipsSettings) => {
    let obj = {};
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
    let obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj.clipsSettings = obj;
    return obj;
  },
  (clipsSettings) => {
    let obj = {};
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
    let obj = {};
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
    let obj = {};
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
    let obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(obj.clipsSettings);
    const merged2 = Object.assign(settings.settings);
    obj.clipsSettings = obj;
  },
  CLIPS_SAVE_CLIP: function handleSaveClip(clip) {
    clip = clip.clip;
    closure_18 = Math.max(closure_18 - 1, 0);
    if (clip.isCandidate) {
      const items = [clip];
      HermesBuiltin.arraySpread(items, 1);
      closure_15[clip.id] = clip;
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
      closure_14[clip.id] = clip;
      if (null != clip.remoteClipId) {
        closure_16[clip.remoteClipId] = clip.id;
      }
      obj.hasClips = true;
    }
  },
  CLIPS_PROMOTE_CLIP_CANDIDATE: function handlePromoteClipCandidate(clip) {
    clip = clip.clip;
    let obj = { applicationName: clip.applicationName };
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
    importDefault(38)(tmp5, "Promoting clip candidates that do not match current autoclip session");
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
    const tmp4 = importDefault(38);
    delete tmp2[tmp];
    closure_14[clip.id] = clip;
    obj.hasClips = true;
  },
  CLIPS_SAVE_CLIP_START: function handleSaveClipStart(arg0) {
    closure_18 = closure_18 + 1;
    let hasTakenDecoupledClip = closure_29.hasTakenDecoupledClip;
    if (!hasTakenDecoupledClip) {
      hasTakenDecoupledClip = tmp === constants.DECOUPLED;
    }
    closure_29.hasTakenDecoupledClip = hasTakenDecoupledClip;
  },
  CLIPS_SAVE_CLIP_ERROR: function handleSaveClipError() {
    closure_18 = Math.max(closure_18 - 1, 0);
  },
  CLIPS_SAVE_CLIP_NO_OP: function handleSaveClipNoOp(reason) {
    reason = reason.reason;
    if (!tmp3) {
      const _Math = Math;
      closure_18 = Math.max(closure_18 - 1, 0);
    }
  },
  STREAM_START: function handleStreamStart(arg0) {
    let pid;
    let sourceName;
    ({ sourceName, pid } = arg0);
    let obj = require(4313) /* isClipsEnabled */;
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
    let tmp2 = null != _null;
    if (tmp2) {
      let obj = require(4319) /* isStreamKey */;
      const tmp6 = obj.decodeStreamKey(tmp).ownerId === store.getId();
      if (tmp6) {
        let tmp8 = null;
        if (0 !== _null.newClipIds.length) {
          obj = {};
          const merged = Object.assign(_null);
          obj.ended = true;
          tmp8 = obj;
        }
        _null = tmp8;
      }
      tmp2 = tmp6;
    }
    return tmp2;
  },
  CLIPS_CLEAR_LAST_CLIPS_SESSION: function handleClearLastClipsSession() {
    if (null == c20) {
      return false;
    } else {
      c20 = null;
    }
  },
  CLIPS_SESSION_START: function handleClipsSessionStart(arg0) {
    let gameId;
    let sessionId;
    ({ sessionId, gameId } = arg0);
    if (null != _null2) {
      closure_22[_null2.id] = _null2;
    }
    _null2 = { id: sessionId, gameId, manualClipsSaved: 0, candidateClipsSaved: 0, candidateClipsPromoted: 0 };
  },
  CLIPS_SESSION_STOP: function handleClipsSessionStop() {
    if (null == _null2) {
      return false;
    } else {
      closure_22[_null2.id] = _null2;
      _null2 = null;
    }
  },
  CLIPS_CLEAR_NEW_CLIP_IDS: function clearNewClipIds() {
    closure_29.newClipIds = [];
  },
  CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function removeSingleNewClipId(clipId) {
    clipId = clipId.clipId;
    const newClipIds = closure_29.newClipIds;
    closure_29.newClipIds = newClipIds.filter((arg0) => arg0 !== clipId);
  },
  CLIPS_LOAD_DIRECTORY_SUCCESS: function handleClipsDirectoryLoaded(arg0) {
    let closure_14 = {};
    let arr = [];
    const iter = arg0.clips[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if (nextResult.isCandidate) {
        let tmp7 = closure_15;
        let tmp8 = nextResult;
        closure_15[tmp2.id] = tmp2;
        let tmp9 = arr;
        arr = arr.push(tmp2);
      } else {
        let tmp3 = closure_14;
        let tmp4 = nextResult;
        closure_14[tmp2.id] = tmp2;
        if (null != tmp2.remoteClipId) {
          let tmp5 = closure_16;
          let tmp6 = nextResult;
          closure_16[tmp2.remoteClipId] = tmp2.id;
        }
      }
      continue;
    }
    closure_29.hasClips = Object.keys(closure_14).length > 0;
  },
  CLIPS_DELETE_CLIP: function handleClipsDelete(arg0) {
    let closure_0 = arg0;
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
    closure_29.hasClips = Object.keys(dependencyMap).length > 0;
  },
  CLIPS_UPDATE_METADATA: function handleClipMetadataUpdate(clip) {
    clip = clip.clip;
    if (clip.isCandidate) {
      closure_15[clip.id] = clip;
    } else {
      closure_14[clip.id] = clip;
      if (null != clip.remoteClipId) {
        closure_16[clip.remoteClipId] = clip.id;
      }
    }
  },
  RTC_CONNECTION_FLAGS: function handleRTCConnectionFlagsUpdate(flags) {
    const obj = { clipsEnabled: null, allowVoiceRecording: null, allowAnyViewerClips: null };
    obj[0] = require(1384) /* hasFlag */.hasFlag(flags.flags, VoiceFlags.CLIPS_ENABLED);
    const obj2 = require(1384) /* hasFlag */;
    obj[1] = require(1384) /* hasFlag */.hasFlag(flags.flags, VoiceFlags.ALLOW_VOICE_RECORDING);
    const obj3 = require(1384) /* hasFlag */;
    obj[2] = require(1384) /* hasFlag */.hasFlag(flags.flags, VoiceFlags.ALLOW_ANY_VIEWER_CLIPS);
    closure_23[flags.userId] = obj;
  },
  CLIPS_SHOW_CALL_WARNING: function handleShowCallWarning(channelId) {
    channelId = channelId.channelId;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    if (channelId.channelId !== c19) {
      c19 = null;
    }
  },
  CLIPS_CLASSIFY_HARDWARE: function handleClassifyHardware(classification) {
    let hardwareClassification;
    let hardwareClassification2;
    let hardwareClassificationForDecoupled;
    let hardwareClassificationForDecoupled2;
    classification = classification.classification;
    closure_29.hardwareClassificationVersion = closure_6;
    closure_29.hardwareClassification = classification;
    ({ hardwareClassification, hardwareClassification: hardwareClassification2 } = closure_29);
    if (tmp3) {
      closure_29.clipsSettings.clipsEnabled = true;
    }
    closure_29.hardwareClassificationForDecoupled = classification;
    ({ hardwareClassificationForDecoupled, hardwareClassificationForDecoupled: hardwareClassificationForDecoupled2 } = closure_29);
    let clipsEnabled = hardwareClassificationForDecoupled2 === tmp(4312).ClipsHardwareClassification.MEETS_AUTO_ENABLE && hardwareClassificationForDecoupled !== tmp(4312).ClipsHardwareClassification.MEETS_AUTO_ENABLE;
    if (clipsEnabled) {
      clipsEnabled = closure_29.clipsSettings.clipsEnabled;
    }
    if (clipsEnabled) {
      closure_29.clipsSettings.decoupledClipsEnabled = true;
    }
  },
  CLIPS_INIT: function handleClipsInit(applicationName) {
    let c24 = null;
    let obj = require(4313) /* isClipsEnabled */;
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
      let c24 = null;
    } else if (tmp.Disabled === educationType) {
      const _Date = Date;
      closure_29.clipsEducationState.dismissedAt = Date.now();
      closure_29.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0;
      const clipsEducationState = closure_29.clipsEducationState;
      clipsEducationState.numberOfTimesDismissed = clipsEducationState.numberOfTimesDismissed + 1;
    }
  },
  RUNNING_GAMES_CHANGE: function handleRunningGamesChange(added) {
    if (added.added.length > 0) {
      const clipsEducationState = closure_29.clipsEducationState;
      clipsEducationState.numberOfGamesLaunchedSinceDismissal = clipsEducationState.numberOfGamesLaunchedSinceDismissal + 1;
    }
  },
  CLIPS_SET_EXPORTING: function handleSetExporting(clipIds) {
    clipIds = clipIds.clipIds;
    if (clipIds == null) {
      clipIds = [];
    }
    const set = new Set(clipIds);
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
    let c20 = null;
    let c19 = null;
    let closure_23 = {};
  }
};
const clipsStoreClass = new ClipsStoreClass(require("dispatcher"), obj);
result = set.fileFinishedImporting("modules/clips/ClipsStore.tsx");

export default clipsStoreClass;
export const DEFAULT_STORAGE_SENTINEL = "default";
export const DEFAULT_STORAGE_DIRECTORY = "Discord Clips";