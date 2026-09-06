// === Module 1914: ClipsStore ===

// Module 1914 (ClipsStore)
import _modDef38 from "module_38" /* 38 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import FlagUtils from "FlagUtils" /* 1384 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import DiscordNativeDefault from "DiscordNative" /* 4182 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4612 */;
import isClipsEnabled from "isClipsEnabled" /* 13674 */;
import clipPOVOverlap from "clipPOVOverlap" /* 13991 */;
import DistributedClipsExperimentDefault from "DistributedClipsExperiment" /* 13993 */;
import AutoclippingDefaultOverrideExperiment2 from "AutoclippingDefaultOverrideExperiment" /* 13994 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import RunningGameStore from "RunningGameStore" /* 1915 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
let closure_39 = async function _migrateDefaultStorage(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          if (clipsSettings.clipsSettings.storageLocation === value2) {
            if (null != DiscordNativeDefault) {
              if (null != DiscordNativeDefault.app) {
                c3 = 1;
                const app2 = DiscordNativeDefault.app;
                c4 = 3;
                c5 = 1;
                const obj1 = { value: app2.getPath("videos"), done: false };
                return obj1;
              }
            }
          }
          c5 = 3;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_2 = closure_2;
        closure_129_9.error("Failed to resolve videos path for default storage migration", closure_128_2);
        const app = closure_129_1(closure_129_2[6]).app;
        c4 = 2;
        c5 = 1;
        const obj2 = { value: app.getPath("documents"), done: false };
        return obj2;
      } else {
        if (2 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_0 = value;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_128_1 = value;
          obj = closure_129_0(closure_129_2[7]);
          closure_128_0 = obj.pathJoin(closure_128_1, closure_129_17);
          c3 = 0;
        }
        closure_129_38.clipsSettings.storageLocation = closure_128_0;
        closure_129_42.emitChange();
      }
      c5 = 3;
      const obj4 = { value, done: true };
      return obj4;
    } catch (tmp36) {
      closure_2 = tmp36;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp36;
      } else {
        c4 = tmp;
      }
    }
  }
};
function recordPOVMatches(arg0, arg1) {
  let flag = false;
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    obj = clipPOVOverlap;
    let clipAttachmentPOVWindow = obj.getClipAttachmentPOVWindow(nextResult);
    if (null != clipAttachmentPOVWindow) {
      let iter2 = arg1[Symbol.iterator]();
      let nextResult1 = iter2.next();
      while (iter2 !== undefined) {
        let tmp12 = nextResult1;
        let tmp14 = require;
        let obj2 = clipPOVOverlap;
        let clipAttachmentPOVWindow1 = obj2.getClipAttachmentPOVWindow(nextResult1);
        if (null != clipAttachmentPOVWindow1) {
          let tmp14Result = tmp14(13991);
          if (null != tmp14Result.getClipPOVOverlapMilliseconds(tmp8, tmp18)) {
            let items = map.get(tmp2.id);
            if (items == null) {
              items = [];
            }
            items = [];
            items[HermesBuiltin.arraySpread(items, 0)] = tmp12;
            let result = map.set(tmp2.id, items);
            flag = true;
          }
        }
        continue;
      }
    }
    continue;
  }
  return flag;
}
function trackClipMessage(message) {
  if (obj.getConfig({ location: "trackClipMessage" }).enableDistributedClips) {
    const attachments = message.attachments;
    let found;
    if (attachments != null) {
      found = attachments.filter((flags) => {
        let num = flags.flags;
        if (num == null) {
          num = 0;
        }
        return FlagUtils.hasFlag(num, constants.IS_CLIP);
      });
    }
    if (found == null) {
      found = [];
    }
    if (0 === found.length) {
      return false;
    } else if (map1.has(message.id)) {
      return false;
    } else {
      const result = obj2.set(message.id, found);
      const message_reference = message.message_reference;
      let message_id;
      if (message_reference != null) {
        message_id = message_reference.message_id;
      }
      let message_id1;
      if (null != message_id) {
        if (null == message_reference.type) {
          message_id1 = message_reference.message_id;
        }
      }
      let flag2 = null != message_id1;
      if (flag2) {
        const author = message.author;
        let id;
        if (author != null) {
          id = author.id;
        }
        flag2 = id === AuthenticationStore.getId();
      }
      if (flag2) {
        flag2 = !set1.has(message_id1);
      }
      if (flag2) {
        set1.add(message_id1);
        flag2 = true;
      }
      let flag3 = false;
      if (null != message_id1) {
        let items = obj2.get(message_id1);
        if (items == null) {
          items = [];
        }
        value = map2.get(message_id1);
        if (value == null) {
          value = [];
        }
        items = [];
        HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(value, 0));
        const result1 = map2.set(message_id1, items);
        flag3 = recordPOVMatches(items, found);
        const tmp12Result = recordPOVMatches(items, found);
      }
      let value1 = map2.get(message.id);
      if (value1 == null) {
        value1 = [];
      }
      return recordPOVMatches(found, value1) || flag3 || flag2;
    }
  } else {
    return false;
  }
  obj = DistributedClipsExperimentDefault;
}
const ClipsConstants = fn(5132);
({ CLIPS_HARDWARE_CLASSIFICATION_VERSION: metroRequire, ClipSaveTypes: closure_7, ClipsUserEducationType: closure_8, ClipsLogger: closure_9, MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS: c10, ClipsHardwareClassification: closure_11, ClipsSaveNoOpReason: closure_12, ClipsLengthSettings, DEFAULT_CLIPS_BITRATE_PERCENT } = ClipsConstants);
const Constants = fn(1074);
({ MessageAttachmentFlags: map1, MessageReferenceTypes: closure_14, VoiceFlags: closure_15 } = Constants);
const StreamSettingsConstants = fn(4607);
let c16 = "default";
let c17 = "Discord Clips";
const dependencyMap = {};
let closure_19 = {};
let closure_20 = {};
let closure_21 = [];
let closure_22 = [];
let closure_23 = 0;
let c24 = null;
let c25 = null;
let c26 = null;
let closure_27 = {};
const dependencyMap2 = {};
let c29 = null;
({ ApplicationStreamFPS, ApplicationStreamResolutions } = StreamSettingsConstants);
let set = new Set();
let enabled = false;
const set1 = new Set();
const map = new Map();
map1 = new Map();
const map2 = new Map();
let closure_36 = [];
let obj = { clipsEnabled: false, storageLocation: "default", clipsQuality: { resolution: ApplicationStreamResolutions.RESOLUTION_1080, frameRate: ApplicationStreamFPS.FPS_30, bitratePercent: DEFAULT_CLIPS_BITRATE_PERCENT }, clipsLength: ClipsLengthSettings.SECONDS_30, remindersEnabled: true, decoupledClipsEnabled: false, maxAutoClips: 20, clipSignals: { enableDistributedSignals: true, enableGameSignals: true }, debugTooltipsEnabled: false, enableAutoclipping: "PX_16", showPovClipsInGallery: true };
obj = { clipsSettings: obj, hardwareClassification: null, hardwareClassificationForDecoupled: null, hardwareClassificationVersion: 0, newClipIds: [], hasClips: false, hasTakenDecoupledClip: false, clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 } };
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class ClipsStoreClass extends DeviceSettingsStore {
}
const prototype = ClipsStoreClass.prototype;
prototype["initialize"] = function initialize(arg0) {
  (function migrateDefaultStorage() {
    const self = this;
    const apply = closure_1_39.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
  this.waitFor(RunningGameStore);
};
prototype["getClips"] = function getClips() {
  return closure_18;
};
prototype["getClipById"] = function getClipById(arg0) {
  return dependencyMap[arg0];
};
prototype["getClipByRemoteId"] = function getClipByRemoteId(arg0) {
  if (null != closure_20[arg0]) {
    return dependencyMap[tmp];
  }
};
prototype["getClipCandidates"] = function getClipCandidates() {
  return closure_21;
};
prototype["getPendingMontageClips"] = function getPendingMontageClips() {
  return closure_22;
};
prototype["getClipCandidateById"] = function getClipCandidateById(arg0) {
  return closure_19[arg0];
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return obj;
};
prototype["getSettings"] = function getSettings() {
  return obj.clipsSettings;
};
prototype["getEnableAutoclipping"] = function getEnableAutoclipping() {
  enabled = obj.clipsSettings.enableAutoclipping;
  if (enabled == null) {
    const AutoclippingDefaultOverrideExperiment = AutoclippingDefaultOverrideExperiment2.AutoclippingDefaultOverrideExperiment;
    enabled = AutoclippingDefaultOverrideExperiment.getConfig({ location: "getAutoclippingDefault" }).enabled;
  }
  return enabled;
};
prototype["hasUserSetAutoclippingSettings"] = function hasUserSetAutoclippingSettings() {
  return null != obj.clipsSettings.enableAutoclipping;
};
prototype["getLastClipsSession"] = function getLastClipsSession() {
  return c25;
};
prototype["getCurrentClipsSession"] = function getCurrentClipsSession() {
  return c26;
};
prototype["getHistoricalClipsSessionById"] = function getHistoricalClipsSessionById(arg0) {
  return closure_27[arg0];
};
prototype["devSetLastClipsSession"] = function devSetLastClipsSession(arg0) {
  c25 = arg0;
  this.emitChange();
};
prototype["getClipsWarningShown"] = function getClipsWarningShown(channelId) {
  return c24 === channelId;
};
prototype["getHardwareClassification"] = function getHardwareClassification() {
  return obj.hardwareClassification;
};
prototype["getHardwareClassificationForDecoupled"] = function getHardwareClassificationForDecoupled() {
  return obj.hardwareClassificationForDecoupled;
};
prototype["getHardwareClassificationVersion"] = function getHardwareClassificationVersion() {
  return obj.hardwareClassificationVersion;
};
prototype["getIsAtMaxSaveClipOperations"] = function getIsAtMaxSaveClipOperations() {
  return closure_23 >= closure_1_10;
};
prototype["getLastClipsError"] = function getLastClipsError() {
  return c29;
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
prototype["hasClips"] = function hasClips() {
  return obj.hasClips;
};
prototype["hasTakenDecoupledClip"] = function hasTakenDecoupledClip() {
  return obj.hasTakenDecoupledClip;
};
prototype["canShowReminders"] = function canShowReminders() {
  return obj.clipsSettings.remindersEnabled;
};
prototype["getNewClipIds"] = function getNewClipIds() {
  return obj.newClipIds;
};
prototype["isClipExporting"] = function isClipExporting(arg0) {
  return set.has(arg0);
};
prototype["getExportingClipIds"] = function getExportingClipIds() {
  return set;
};
prototype["isAutoStashEnabled"] = function isAutoStashEnabled() {
  return enabled;
};
prototype["hasRepliedWithClip"] = function hasRepliedWithClip(arg0) {
  return set1.has(arg0);
};
prototype["getMatchingPOVAttachments"] = function getMatchingPOVAttachments(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = closure_36;
  }
  return value;
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
    const _default = MediaEngineStore.default;
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
  },
  (clipsSettings) => {
    obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj.clipsEnabled = clipsSettings.clipsSettings.clipsEnabled && clipsSettings.clipsSettings.decoupledClipsEnabled;
    obj.decoupledClipsEnabled = clipsSettings.clipsSettings.clipsEnabled && clipsSettings.clipsSettings.decoupledClipsEnabled;
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
    closure_23 = Math.max(closure_23 - 1, 0);
    if (clip.isCandidate) {
      const items = [clip];
      HermesBuiltin.arraySpread(closure_21, 1);
      closure_21 = items;
      closure_19[clip.id] = clip;
    }
    if (null != _null2) {
      obj = {};
      const merged = Object.assign(_null2);
      let num2 = 0;
      if ("manual" === clip.clipMethod) {
        num2 = 1;
      }
      obj.manualClipsSaved = _null2.manualClipsSaved + num2;
      let num3 = 0;
      if (clip.isCandidate) {
        num3 = 1;
      }
      obj.candidateClipsSaved = _null2.candidateClipsSaved + num3;
      _null2 = obj;
    }
    if (!clip.isCandidate) {
      obj = { applicationName: clip.applicationName, ended: false };
      const merged1 = Object.assign(_null);
      let newClipIds;
      if (_null != null) {
        newClipIds = _null.newClipIds;
      }
      if (newClipIds == null) {
        newClipIds = [];
      }
      const items1 = [];
      items1[HermesBuiltin.arraySpread(newClipIds, 0)] = clip.id;
      obj.newClipIds = items1;
      _null = obj;
      obj = {};
      const merged2 = Object.assign(obj);
      let newClipIds1 = obj.newClipIds;
      if (newClipIds1 == null) {
        newClipIds1 = [];
      }
      const items2 = [];
      items2[HermesBuiltin.arraySpread(newClipIds1, 0)] = clip.id;
      obj.newClipIds = items2;
      closure_18[clip.id] = clip;
      if (null != clip.remoteClipId) {
        closure_20[clip.remoteClipId] = clip.id;
      }
      obj.hasClips = true;
    }
  },
  CLIPS_PROMOTE_CLIP_CANDIDATE: function handlePromoteClipCandidate(clip) {
    clip = clip.clip;
    obj = { applicationName: clip.applicationName };
    const merged = Object.assign(_null);
    obj.ended = true;
    let newClipIds;
    if (_null != null) {
      newClipIds = _null.newClipIds;
    }
    if (newClipIds == null) {
      newClipIds = [];
    }
    const items = [];
    items[HermesBuiltin.arraySpread(newClipIds, 0)] = clip.id;
    obj.newClipIds = items;
    _null = obj;
    let tmp5 = null != _null2;
    if (tmp5) {
      tmp5 = _null2.id === clip.gameSessionId;
    }
    _modDef38(tmp5, "Promoting clip candidates that do not match current autoclip session");
    obj = {};
    const merged1 = Object.assign(_null2);
    obj.candidateClipsPromoted = _null2.candidateClipsPromoted + 1;
    _null2 = obj;
    obj = {};
    const merged2 = Object.assign(obj);
    let newClipIds1 = obj.newClipIds;
    if (newClipIds1 == null) {
      newClipIds1 = [];
    }
    const items1 = [];
    items1[HermesBuiltin.arraySpread(newClipIds1, 0)] = clip.id;
    obj.newClipIds = items1;
    closure_21 = closure_21.filter((id) => id.id !== clip.id);
    delete tmp2[tmp];
    closure_18[clip.id] = clip;
    obj.hasClips = true;
  },
  CLIPS_SAVE_CLIP_START: function handleSaveClipStart(arg0) {
    closure_23 = closure_23 + 1;
    let hasTakenDecoupledClip = obj.hasTakenDecoupledClip;
    if (!hasTakenDecoupledClip) {
      hasTakenDecoupledClip = tmp === constants.DECOUPLED;
    }
    obj.hasTakenDecoupledClip = hasTakenDecoupledClip;
  },
  CLIPS_SAVE_CLIP_ERROR: function handleSaveClipError() {
    closure_23 = Math.max(closure_23 - 1, 0);
  },
  CLIPS_SAVE_CLIP_NO_OP: function handleSaveClipNoOp(reason) {
    reason = reason.reason;
    if (!tmp) {
      const _Math = Math;
      closure_23 = Math.max(closure_23 - 1, 0);
    }
  },
  STREAM_START: function handleStreamStart(arg0) {
    ({ sourceName, pid } = arg0);
    obj = isClipsEnabled;
    if (obj.isClipsEnabled()) {
      let tmp2 = sourceName;
      if (null != pid) {
        const gameForPID = RunningGameStore.getGameForPID(pid);
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
          obj = { applicationName: tmp2, newClipIds: [], ended: false };
          c25 = obj;
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
      obj = StreamKeyUtils;
      const tmp6 = obj.decodeStreamKey(tmp).ownerId === AuthenticationStore.getId();
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
    if (null == c25) {
      return false;
    } else {
      c25 = null;
    }
  },
  CLIPS_SESSION_START: function handleClipsSessionStart(arg0) {
    ({ sessionId, gameId } = arg0);
    if (null != _null2) {
      closure_27[_null2.id] = _null2;
    }
    _null2 = { id: sessionId, gameId, manualClipsSaved: 0, candidateClipsSaved: 0, candidateClipsPromoted: 0 };
  },
  CLIPS_SESSION_STOP: function handleClipsSessionStop() {
    if (null == _null2) {
      return false;
    } else {
      closure_27[_null2.id] = _null2;
      _null2 = null;
    }
  },
  CLIPS_CLEAR_NEW_CLIP_IDS: function clearNewClipIds() {
    obj.newClipIds = [];
  },
  CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function removeSingleNewClipId(clipId) {
    clipId = clipId.clipId;
    const newClipIds = obj.newClipIds;
    obj.newClipIds = newClipIds.filter((item) => item !== clipId);
  },
  CLIPS_LOAD_DIRECTORY_SUCCESS: function handleClipsDirectoryLoaded(arg0) {
    closure_18 = {};
    closure_21 = [];
    const iter = arg0.clips[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if (nextResult.isCandidate) {
        closure_19[tmp2.id] = tmp2;
        let arr = closure_21.push(tmp2);
      } else {
        closure_18[tmp2.id] = tmp2;
        if (null != tmp2.remoteClipId) {
          closure_20[tmp2.remoteClipId] = tmp2.id;
        }
      }
      continue;
    }
    obj.hasClips = Object.keys(closure_18).length > 0;
  },
  CLIPS_DELETE_CLIP: function handleClipsDelete(arg0) {
    const id = arg0;
    closure_21 = closure_21.filter((id) => id.id !== id.id);
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
    obj.hasClips = Object.keys(dependencyMap).length > 0;
  },
  CLIPS_UPDATE_METADATA: function handleClipMetadataUpdate(clip) {
    clip = clip.clip;
    if (clip.isCandidate) {
      closure_19[clip.id] = clip;
    } else {
      closure_18[clip.id] = clip;
      if (null != clip.remoteClipId) {
        closure_20[clip.remoteClipId] = clip.id;
      }
    }
  },
  RTC_CONNECTION_FLAGS: function handleRTCConnectionFlagsUpdate(flags) {
    obj = { clipsEnabled: FlagUtils.hasFlag(flags.flags, constants5.CLIPS_ENABLED), allowVoiceRecording: null };
    obj.allowVoiceRecording = FlagUtils.hasFlag(flags.flags, constants5.ALLOW_VOICE_RECORDING);
    closure_28[flags.userId] = obj;
  },
  CLIPS_SHOW_CALL_WARNING: function handleShowCallWarning(channelId) {
    channelId = channelId.channelId;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    if (channelId.channelId !== c24) {
      c24 = null;
    }
  },
  CLIPS_CLASSIFY_HARDWARE: function handleClassifyHardware(classification) {
    classification = classification.classification;
    obj.hardwareClassificationVersion = hardwareClassificationVersion;
    obj.hardwareClassification = classification;
    if (tmp2) {
      obj.clipsSettings.clipsEnabled = true;
    }
    obj.hardwareClassificationForDecoupled = classification;
  },
  CLIPS_INIT: function handleClipsInit(applicationName) {
    c29 = null;
    obj = isClipsEnabled;
    if (obj.isClipsEnabled()) {
      obj = { applicationName: applicationName.applicationName, newClipIds: [], ended: false };
      c25 = obj;
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
      c29 = null;
    } else if (tmp.Disabled === educationType) {
      const _Date = Date;
      obj.clipsEducationState.dismissedAt = Date.now();
      obj.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0;
      const clipsEducationState = obj.clipsEducationState;
      clipsEducationState.numberOfTimesDismissed = clipsEducationState.numberOfTimesDismissed + 1;
    }
  },
  RUNNING_GAMES_CHANGE: function handleRunningGamesChange(added) {
    if (added.added.length > 0) {
      const clipsEducationState = obj.clipsEducationState;
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
  CLIPS_MONTAGE_RENDER_START: function handleMontageRenderStart(clip) {
    clip = clip.clip;
    const items = [clip, ...closure_22.filter((id) => id.id !== clip.id)];
    closure_22 = items;
  },
  CLIPS_MONTAGE_RENDER_DONE: function handleMontageRenderDone(clip) {
    clip = clip.clip;
    closure_22 = closure_22.filter((id) => id.id !== clip.id);
    closure_18[clip.id] = clip;
    let tmp = null != _null;
    if (tmp) {
      tmp = _null.applicationName !== clip.applicationName;
    }
    if (!tmp) {
      obj = { applicationName: clip.applicationName };
      const merged = Object.assign(_null);
      obj.ended = true;
      let newClipIds;
      if (_null != null) {
        newClipIds = _null.newClipIds;
      }
      if (newClipIds == null) {
        newClipIds = [];
      }
      const items = [];
      items[HermesBuiltin.arraySpread(newClipIds, 0)] = clip.id;
      obj.newClipIds = items;
      _null = obj;
    }
    obj = {};
    const merged1 = Object.assign(obj);
    let newClipIds1 = obj.newClipIds;
    if (newClipIds1 == null) {
      newClipIds1 = [];
    }
    const items1 = [];
    items1[HermesBuiltin.arraySpread(newClipIds1, 0)] = clip.id;
    obj.newClipIds = items1;
    obj.hasClips = true;
  },
  CLIPS_MONTAGE_RENDER_ERROR: function handleMontageRenderError(clipId) {
    clipId = clipId.clipId;
    closure_22 = closure_22.filter((id) => id.id !== clipId);
  },
  CLIPS_SET_AUTO_STASH_ENABLED: function handleSetAutoStashEnabled(enabled) {
    enabled = enabled.enabled;
  },
  MESSAGE_CREATE: function handleMessageCreate(message) {
    return trackClipMessage(message.message);
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(arg0) {
    let flag = false;
    while (tmp !== undefined) {
      let tmp4 = trackClipMessage(tmp2) || flag;
      flag = tmp4;
      continue;
    }
    return flag;
  },
  LOGOUT: function reset() {
    set1.clear();
    map.clear();
    map1.clear();
    map2.clear();
    c25 = null;
    c24 = null;
    closure_28 = {};
  }
};
const clipsStoreClass = new ClipsStoreClass(DispatcherDefault, obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/clips/ClipsStore.tsx");

export default clipsStoreClass;
export const DEFAULT_STORAGE_SENTINEL = "default";
export const DEFAULT_STORAGE_DIRECTORY = "Discord Clips";