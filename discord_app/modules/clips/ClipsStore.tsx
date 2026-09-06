// discord_app/modules/clips/ClipsStore.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import hasFlag from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import _detectH265HardwareDecode from "../../stores/MediaEngineStore.tsx";
import isStreamKey from "../go_live/utils/StreamKeyUtils.tsx";
import isClipsEnabled from "isClipsEnabled.tsx";
import getClipPOVWindow from "clipPOVOverlap.tsx";
import apexExperimentDefault from "DistributedClipsExperiment.tsx";
import apexExperiment from "AutoclippingDefaultOverrideExperiment.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../game_detection/RunningGameStore.native.tsx";
import closure_5 from "../../stores/AuthenticationStore.tsx";
import result from "ClipsConstants.tsx";
import ME from "../../Constants.tsx";
import RESOLUTION_720 from "../go_live/StreamSettingsConstants.tsx";
import set from "../../../_runtime/00002_set.js";

require = arg1;
function _migrateDefaultStorage() {
  const self = this;
  const tmp = callback(function* () {
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
            if (closure_1_38.clipsSettings.storageLocation === closure_1_16) {
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
          const app = callback2(4182).app;
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
            obj = callback(13990);
            callback = obj.pathJoin(callback2, closure_17);
            c3 = 0;
          }
          clipsSettings.clipsSettings.storageLocation = callback;
          closure_42.emitChange();
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
  closure_39 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function recordPOVMatches(arg0, arg1) {
  let flag = false;
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = require;
    let tmp4 = require;
    let tmp5 = dependencyMap;
    let tmp6 = dependencyMap;
    obj = getClipPOVWindow;
    let clipAttachmentPOVWindow = obj.getClipAttachmentPOVWindow(nextResult);
    if (null != clipAttachmentPOVWindow) {
      let tmp29 = arg1;
      let iter2 = arg1[Symbol.iterator]();
      let tmp9 = arg1;
      let nextResult1 = iter2.next();
      let tmp11 = iter2;
      while (iter2 !== undefined) {
        let tmp12 = nextResult1;
        let tmp13 = require;
        let tmp14 = require;
        let tmp15 = dependencyMap;
        let tmp16 = dependencyMap;
        let obj2 = getClipPOVWindow;
        let clipAttachmentPOVWindow1 = obj2.getClipAttachmentPOVWindow(nextResult1);
        if (null != clipAttachmentPOVWindow1) {
          let tmp19 = tmp13;
          let tmp20 = tmp15;
          let tmp14Result = tmp14(13991);
          let tmp21 = clipAttachmentPOVWindow;
          let tmp22 = clipAttachmentPOVWindow1;
          if (null != tmp14Result.getClipPOVOverlapMilliseconds(tmp8, tmp18)) {
            let tmp24 = nextResult;
            let tmp23 = map;
            let items = map.get(tmp2.id);
            if (items == null) {
              items = [];
            }
            items = [];
            let tmp25 = items;
            let tmp26 = items;
            let num = 0;
            let tmp27 = nextResult1;
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
        return callback(table[11]).hasFlag(num, constants.IS_CLIP);
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
        flag2 = id === store.getId();
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
        let value = map2.get(message_id1);
        if (value == null) {
          value = [];
        }
        items = [];
        HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(value, 0));
        const result1 = map2.set(message_id1, items);
        flag3 = recordPOVMatches(items, found);
        const tmp12 = recordPOVMatches;
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
  obj = apexExperimentDefault;
}
({
  CLIPS_HARDWARE_CLASSIFICATION_VERSION: closure_6,
  ClipSaveTypes: error,
  ClipsUserEducationType: closure_8,
  ClipsLogger: c9,
  MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS: c10,
  ClipsHardwareClassification: unpackModuleId,
  ClipsSaveNoOpReason: closure_12,
  ClipsLengthSettings,
  DEFAULT_CLIPS_BITRATE_PERCENT,
} = result);
({ MessageAttachmentFlags: map1, MessageReferenceTypes: closure_14, VoiceFlags: closure_15 } = ME);
let c16 = "default";
let c17 = "Discord Clips";
let closure_18 = {};
let closure_19 = {};
let closure_20 = {};
let closure_21 = [];
let closure_22 = [];
let c23 = 0;
let c24 = null;
let c25 = null;
let c26 = null;
let closure_27 = {};
let closure_28 = {};
let c29 = null;
({ ApplicationStreamFPS, ApplicationStreamResolutions } = RESOLUTION_720);
let set = new Set();
let c31 = false;
const set1 = new Set();
const map = new Map();
map1 = new Map();
const map2 = new Map();
let closure_36 = [];
obj = {
  clipsEnabled: false,
  storageLocation: "default",
  clipsQuality: obj,
  clipsLength: ClipsLengthSettings.SECONDS_30,
  remindersEnabled: true,
  decoupledClipsEnabled: false,
  maxAutoClips: 20,
  clipSignals: { enableDistributedSignals: true, enableGameSignals: true },
  debugTooltipsEnabled: false,
  enableAutoclipping: "PX_16",
  showPovClipsInGallery: true,
};
obj = {
  resolution: ApplicationStreamResolutions.RESOLUTION_1080,
  frameRate: ApplicationStreamFPS.FPS_30,
  bitratePercent: DEFAULT_CLIPS_BITRATE_PERCENT,
};
let closure_38 = {
  clipsSettings: obj,
  hardwareClassification: null,
  hardwareClassificationForDecoupled: null,
  hardwareClassificationVersion: 0,
  newClipIds: [],
  hasClips: false,
  hasTakenDecoupledClip: false,
  clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
};
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class ClipsStoreClass extends DeviceSettingsStore {}
const prototype = ClipsStoreClass.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    closure_38 = arg0;
  }
  (function migrateDefaultStorage() {
    const self = this;
    const apply = closure_39.apply;
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
  return closure_18;
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
  return closure_21;
};
prototype["getPendingMontageClips"] = function getPendingMontageClips() {
  return closure_22;
};
prototype["getClipCandidateById"] = function getClipCandidateById(arg0) {
  return table[arg0];
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return closure_38;
};
prototype["getSettings"] = function getSettings() {
  return closure_38.clipsSettings;
};
prototype["getEnableAutoclipping"] = function getEnableAutoclipping() {
  let enabled = closure_38.clipsSettings.enableAutoclipping;
  if (enabled == null) {
    const AutoclippingDefaultOverrideExperiment = apexExperiment.AutoclippingDefaultOverrideExperiment;
    enabled = AutoclippingDefaultOverrideExperiment.getConfig({ location: "getAutoclippingDefault" }).enabled;
  }
  return enabled;
};
prototype["hasUserSetAutoclippingSettings"] = function hasUserSetAutoclippingSettings() {
  return null != closure_38.clipsSettings.enableAutoclipping;
};
prototype["getLastClipsSession"] = function getLastClipsSession() {
  return c25;
};
prototype["getCurrentClipsSession"] = function getCurrentClipsSession() {
  return c26;
};
prototype["getHistoricalClipsSessionById"] = function getHistoricalClipsSessionById(arg0) {
  return table3[arg0];
};
prototype["devSetLastClipsSession"] = function devSetLastClipsSession(arg0) {
  closure_25 = arg0;
  this.emitChange();
};
prototype["getClipsWarningShown"] = function getClipsWarningShown(channelId) {
  return c24 === channelId;
};
prototype["getHardwareClassification"] = function getHardwareClassification() {
  return closure_38.hardwareClassification;
};
prototype["getHardwareClassificationForDecoupled"] = function getHardwareClassificationForDecoupled() {
  return closure_38.hardwareClassificationForDecoupled;
};
prototype["getHardwareClassificationVersion"] = function getHardwareClassificationVersion() {
  return closure_38.hardwareClassificationVersion;
};
prototype["getIsAtMaxSaveClipOperations"] = function getIsAtMaxSaveClipOperations() {
  return c23 >= closure_10;
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
  return closure_38.hasClips;
};
prototype["hasTakenDecoupledClip"] = function hasTakenDecoupledClip() {
  return closure_38.hasTakenDecoupledClip;
};
prototype["canShowReminders"] = function canShowReminders() {
  return closure_38.clipsSettings.remindersEnabled;
};
prototype["getNewClipIds"] = function getNewClipIds() {
  return closure_38.newClipIds;
};
prototype["isClipExporting"] = function isClipExporting(arg0) {
  return set.has(arg0);
};
prototype["getExportingClipIds"] = function getExportingClipIds() {
  return set;
};
prototype["isAutoStashEnabled"] = function isAutoStashEnabled() {
  return c31;
};
prototype["hasRepliedWithClip"] = function hasRepliedWithClip(arg0) {
  return set1.has(arg0);
};
prototype["getMatchingPOVAttachments"] = function getMatchingPOVAttachments(arg0) {
  let value = map.get(arg0);
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
  },
  (clipsSettings) => {
    obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj.clipsEnabled = clipsSettings.clipsSettings.clipsEnabled && clipsSettings.clipsSettings.decoupledClipsEnabled;
    obj.decoupledClipsEnabled =
      clipsSettings.clipsSettings.clipsEnabled && clipsSettings.clipsSettings.decoupledClipsEnabled;
    obj.clipsSettings = obj;
    return obj;
  },
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
      HermesBuiltin.arraySpread(items, 1);
      closure_19[clip.id] = clip;
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
    closure_18[clip.id] = clip;
    obj.hasClips = true;
  },
  CLIPS_SAVE_CLIP_START: function handleSaveClipStart(arg0) {
    closure_23 = closure_23 + 1;
    let hasTakenDecoupledClip = closure_38.hasTakenDecoupledClip;
    if (!hasTakenDecoupledClip) {
      hasTakenDecoupledClip = tmp === constants.DECOUPLED;
    }
    closure_38.hasTakenDecoupledClip = hasTakenDecoupledClip;
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
    if (null == c25) {
      return false;
    } else {
      c25 = null;
    }
  },
  CLIPS_SESSION_START: function handleClipsSessionStart(arg0) {
    ({ sessionId, gameId } = arg0);
    if (null != _null) {
      closure_27[_null.id] = _null;
    }
    _null = { id: sessionId, gameId, manualClipsSaved: 0, candidateClipsSaved: 0, candidateClipsPromoted: 0 };
  },
  CLIPS_SESSION_STOP: function handleClipsSessionStop() {
    if (null == _null) {
      return false;
    } else {
      closure_27[_null.id] = _null;
      _null = null;
    }
  },
  CLIPS_CLEAR_NEW_CLIP_IDS: function clearNewClipIds() {
    closure_38.newClipIds = [];
  },
  CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function removeSingleNewClipId(clipId) {
    clipId = clipId.clipId;
    const newClipIds = closure_38.newClipIds;
    closure_38.newClipIds = newClipIds.filter((arg0) => arg0 !== clipId);
  },
  CLIPS_LOAD_DIRECTORY_SUCCESS: function handleClipsDirectoryLoaded(arg0) {
    closure_18 = {};
    let arr = [];
    const iter = arg0.clips[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if (nextResult.isCandidate) {
        let tmp7 = closure_19;
        let tmp8 = nextResult;
        closure_19[tmp2.id] = tmp2;
        let tmp9 = arr;
        arr = arr.push(tmp2);
      } else {
        let tmp3 = closure_18;
        let tmp4 = nextResult;
        closure_18[tmp2.id] = tmp2;
        if (null != tmp2.remoteClipId) {
          let tmp5 = closure_20;
          let tmp6 = nextResult;
          closure_20[tmp2.remoteClipId] = tmp2.id;
        }
      }
      continue;
    }
    closure_38.hasClips = Object.keys(closure_18).length > 0;
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
    closure_38.hasClips = Object.keys(dependencyMap).length > 0;
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
    obj = { clipsEnabled: hasFlag.hasFlag(flags.flags, constants5.CLIPS_ENABLED), allowVoiceRecording: null };
    const obj2 = hasFlag;
    obj[1] = hasFlag.hasFlag(flags.flags, constants5.ALLOW_VOICE_RECORDING);
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
    closure_38.hardwareClassificationVersion = closure_6;
    closure_38.hardwareClassification = classification;
    if (tmp2) {
      closure_38.clipsSettings.clipsEnabled = true;
    }
    closure_38.hardwareClassificationForDecoupled = classification;
  },
  CLIPS_INIT: function handleClipsInit(applicationName) {
    c29 = null;
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
      c29 = null;
    } else if (tmp.Disabled === educationType) {
      const _Date = Date;
      closure_38.clipsEducationState.dismissedAt = Date.now();
      closure_38.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0;
      const clipsEducationState = closure_38.clipsEducationState;
      clipsEducationState.numberOfTimesDismissed = clipsEducationState.numberOfTimesDismissed + 1;
    }
  },
  RUNNING_GAMES_CHANGE: function handleRunningGamesChange(added) {
    if (added.added.length > 0) {
      const clipsEducationState = closure_38.clipsEducationState;
      clipsEducationState.numberOfGamesLaunchedSinceDismissal =
        clipsEducationState.numberOfGamesLaunchedSinceDismissal + 1;
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
    items = [clip, ...items.filter((id) => id.id !== clip.id)];
  },
  CLIPS_MONTAGE_RENDER_DONE: function handleMontageRenderDone(clip) {
    clip = clip.clip;
    closure_22 = closure_22.filter((id) => id.id !== clip.id);
    closure_18[clip.id] = clip;
    let tmp = null != obj;
    if (tmp) {
      tmp = obj.applicationName !== clip.applicationName;
    }
    if (!tmp) {
      obj = { applicationName: null };
      obj[0] = clip.applicationName;
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
      let tmp3 = trackClipMessage;
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
  },
};
const clipsStoreClass = new ClipsStoreClass(dispatcherDefault, obj);
result = set.fileFinishedImporting("modules/clips/ClipsStore.tsx");

export default clipsStoreClass;
export const DEFAULT_STORAGE_SENTINEL = "default";
export const DEFAULT_STORAGE_DIRECTORY = "Discord Clips";
