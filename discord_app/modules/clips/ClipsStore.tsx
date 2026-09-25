// discord_app/modules/clips/ClipsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import DiscordNativeDefault from "../../lib/DiscordNative.tsx";
import clipPOVOverlap from "clipPOVOverlap.tsx";
import DistributedClipsExperimentDefault from "DistributedClipsExperiment.tsx";
import AutoclippingDefaultOverrideExperiment2 from "AutoclippingDefaultOverrideExperiment.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import RunningGameStore from "../game_detection/RunningGameStore.native.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

require = fn;
let closure_36 = async function _migrateDefaultStorage() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
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
                const obj4 = { value: app2.getPath("videos"), done: false };
                return obj4;
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
        const obj5 = { value: app.getPath("documents"), done: false };
        return obj5;
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
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_128_1 = value;
          closure_128_0 = closure_129_0(closure_129_2[7]).pathJoin(closure_128_1, closure_129_17);
          c3 = 0;
          obj = closure_129_0(closure_129_2[7]);
        }
        closure_129_35.clipsSettings.storageLocation = closure_128_0;
        closure_129_40.emitChange();
      }
      c5 = 3;
      const obj7 = { value, done: true };
      return obj7;
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
function getKnownSessions() {
  const items = [];
  if (null != c23) {
    items.push(c23);
  }
  let tmp3 = null != c24;
  if (tmp3) {
    tmp3 = c24 !== c23;
  }
  if (tmp3) {
    items.push(c24);
  }
  return items;
}
function recordPOVMatches(items1, value4) {
  let flag = false;
  const iter = items1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let iter2 = value4[Symbol.iterator]();
    let nextResult1 = iter2.next();
    while (iter2 !== undefined) {
      let tmp7 = nextResult1;
      obj = clipPOVOverlap;
      if (null != obj.getClipPOVOverlapMilliseconds(tmp2, nextResult1)) {
        items1 = map.get(tmp2.attachmentId);
        if (items1 == null) {
          items1 = [];
        }
        let items = [];
        items[HermesBuiltin.arraySpread(items1, 0)] = tmp7;
        let result = map.set(tmp2.attachmentId, items);
        flag = true;
      }
      continue;
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
      const tmp3 = (function getClipPOVReferences(message, found) {
        const items = [];
        const iter = found[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          obj = clipPOVOverlap;
          let clipAttachmentPOVWindow = obj.getClipAttachmentPOVWindow(nextResult);
          if (null != clipAttachmentPOVWindow) {
            let obj3 = {};
            let merged = Object.assign(tmp6);
            ({ id: obj2.messageId, channel_id: obj2.channelId } = message);
            obj3.attachmentId = tmp2.id;
            let arr = items.push(obj3);
          }
          continue;
        }
        return items;
      })(message, found);
      const result = map1.set(message.id, tmp3);
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
        let items1 = map1.get(message_id1);
        if (items1 == null) {
          items1 = [];
        }
        let value3 = map2.get(message_id1);
        if (value3 == null) {
          value3 = [];
        }
        let items = [];
        HermesBuiltin.arraySpread(tmp3, HermesBuiltin.arraySpread(value3, 0));
        const result1 = map2.set(message_id1, items);
        flag3 = recordPOVMatches(items1, tmp3);
        const tmp13Result = recordPOVMatches(items1, tmp3);
      }
      let value4 = map2.get(message.id);
      if (value4 == null) {
        value4 = [];
      }
      return recordPOVMatches(tmp3, value4) || flag3 || flag2;
    }
  } else {
    return false;
  }
  obj = DistributedClipsExperimentDefault;
}
const ClipsConstants = fn(5437);
({
  CLIPS_HARDWARE_CLASSIFICATION_VERSION: metroRequire,
  ClipSaveTypes: closure_7,
  ClipsUserEducationType: closure_8,
  ClipsLogger: closure_9,
  MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS: c10,
  ClipsHardwareClassification: closure_11,
  ClipsSaveNoOpReason: closure_12,
  ClipsLengthSettings,
  DEFAULT_CLIPS_BITRATE_PERCENT,
} = ClipsConstants);
const Constants = fn(1074);
({ MessageAttachmentFlags: map1, MessageReferenceTypes: closure_14, VoiceFlags: closure_15 } = Constants);
const StreamSettingsConstants = fn(4876);
let c16 = "default";
let c17 = "Discord Clips";
const dependencyMap = {};
let closure_19 = {};
let closure_20 = [];
let closure_21 = 0;
let c22 = null;
let c23 = null;
let c24 = null;
const dependencyMap2 = {};
let c26 = null;
({ ApplicationStreamFPS, ApplicationStreamResolutions } = StreamSettingsConstants);
let set = new Set();
let enabled = false;
const set1 = new Set();
const map = new Map();
map1 = new Map();
const map2 = new Map();
let closure_33 = [];
let obj = {
  clipsEnabled: false,
  storageLocation: "default",
  clipsQuality: {
    resolution: ApplicationStreamResolutions.RESOLUTION_1080,
    frameRate: ApplicationStreamFPS.FPS_30,
    bitratePercent: DEFAULT_CLIPS_BITRATE_PERCENT,
  },
  clipsLength: ClipsLengthSettings.SECONDS_30,
  remindersEnabled: true,
  decoupledClipsEnabled: false,
  maxAutoClips: 20,
  clipSignals: { enableDistributedSignals: true, enableGameSignals: true },
  debugTooltipsEnabled: false,
  enableAutoclipping: "flex",
  showPovClipsInGallery: true,
};
obj = {
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
  (function migrateDefaultStorage() {
    const self = this;
    const apply = closure_1_36.apply;
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
  if (null != closure_19[arg0]) {
    return dependencyMap[tmp];
  }
};
prototype["getClipCandidates"] = function getClipCandidates() {
  const items = [];
  if (null != c23) {
    items.push(c23);
  }
  let tmp3 = null != c24;
  if (tmp3) {
    tmp3 = c24 !== c23;
  }
  if (tmp3) {
    items.push(c24);
  }
  return items.flatMap((candidates) => candidates.candidates);
};
prototype["getPendingMontageClips"] = function getPendingMontageClips() {
  return closure_20;
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
    const AutoclippingDefaultOverrideExperiment =
      AutoclippingDefaultOverrideExperiment2.AutoclippingDefaultOverrideExperiment;
    enabled = AutoclippingDefaultOverrideExperiment.getConfig({ location: "getAutoclippingDefault" }).enabled;
  }
  return enabled;
};
prototype["hasUserSetAutoclippingSettings"] = function hasUserSetAutoclippingSettings() {
  return null != obj.clipsSettings.enableAutoclipping;
};
prototype["getLastClipsSession"] = function getLastClipsSession() {
  return c24;
};
prototype["getActiveClipsSession"] = function getActiveClipsSession() {
  return c23;
};
prototype["devSetLastClipsSession"] = function devSetLastClipsSession(arg0) {
  c24 = arg0;
  this.emitChange();
};
prototype["getClipsWarningShown"] = function getClipsWarningShown(channelId) {
  return c22 === channelId;
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
  return closure_21 >= closure_1_10;
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
prototype["getMatchingPOVReferences"] = function getMatchingPOVReferences(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = closure_33;
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
    const obj2 = {};
    const merged2 = Object.assign(clipsSettings);
    obj2.clipsSettings = obj;
    return obj2;
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
    const obj2 = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj2.decoupledClipsEnabled = obj.decoupledClipsEnabled;
    obj.clipsSettings = obj2;
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
    const obj2 = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj2.clipsEnabled = hardwareEncoding && clipsSettings.clipsSettings.clipsEnabled;
    obj2.decoupledClipsEnabled = hardwareEncoding && clipsSettings.clipsSettings.decoupledClipsEnabled;
    obj.clipsSettings = obj2;
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
    const obj2 = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    if (typeof clipsSettings.clipsSettings.clipsQuality !== "number") {
      if (null != clipsSettings.clipsSettings.clipsQuality) {
        let clipsQuality = clipsSettings.clipsSettings.clipsQuality;
      }
      obj2.clipsQuality = clipsQuality;
      obj.clipsSettings = obj2;
      return obj;
    }
    clipsQuality = obj.clipsQuality;
  },
  (clipsSettings) => {
    obj = {};
    const merged = Object.assign(clipsSettings);
    const obj2 = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    let remindersEnabled = clipsSettings.clipsSettings.remindersEnabled;
    if (remindersEnabled == null) {
      remindersEnabled = obj.remindersEnabled;
    }
    obj2.remindersEnabled = remindersEnabled;
    obj.clipsSettings = obj2;
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
    const obj2 = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    let maxAutoClips = clipsSettings.clipsSettings.maxAutoClips;
    if (maxAutoClips == null) {
      maxAutoClips = obj.maxAutoClips;
    }
    obj2.maxAutoClips = maxAutoClips;
    let clipSignals = clipsSettings.clipsSettings.clipSignals;
    if (clipSignals == null) {
      clipSignals = obj.clipSignals;
    }
    obj2.clipSignals = clipSignals;
    obj.clipsSettings = obj2;
    return obj;
  },
  (clipsSettings) => {
    obj = {};
    const merged = Object.assign(clipsSettings);
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj.clipsSettings = {};
    return obj;
  },
  (clipsSettings) => {
    obj = {};
    const merged = Object.assign(clipsSettings);
    const obj2 = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    let enableAutoclipping = clipsSettings.clipsSettings.enableAutoclipping;
    if (enableAutoclipping == null) {
      enableAutoclipping = obj.enableAutoclipping;
    }
    obj2.enableAutoclipping = enableAutoclipping;
    obj.clipsSettings = obj2;
    return obj;
  },
  (clipsSettings) => {
    obj = {};
    const merged = Object.assign(clipsSettings);
    const obj2 = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    let showPovClipsInGallery = clipsSettings.clipsSettings.showPovClipsInGallery;
    if (showPovClipsInGallery == null) {
      showPovClipsInGallery = obj.showPovClipsInGallery;
    }
    obj2.showPovClipsInGallery = showPovClipsInGallery;
    obj.clipsSettings = obj2;
    return obj;
  },
  (clipsSettings) => {
    obj = {};
    const merged = Object.assign(clipsSettings);
    const obj2 = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    const obj3 = {};
    const merged2 = Object.assign(clipsSettings.clipsSettings.clipsQuality);
    let bitratePercent = clipsSettings.clipsSettings.clipsQuality.bitratePercent;
    if (bitratePercent == null) {
      bitratePercent = obj.clipsQuality.bitratePercent;
    }
    obj3.bitratePercent = bitratePercent;
    obj2.clipsQuality = obj3;
    obj.clipsSettings = obj2;
    return obj;
  },
  (clipsSettings) => {
    obj = {};
    const merged = Object.assign(clipsSettings);
    const obj2 = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj2.clipsEnabled = clipsSettings.clipsSettings.clipsEnabled && clipsSettings.clipsSettings.decoupledClipsEnabled;
    obj2.decoupledClipsEnabled =
      clipsSettings.clipsSettings.clipsEnabled && clipsSettings.clipsSettings.decoupledClipsEnabled;
    obj.clipsSettings = obj2;
    return obj;
  },
];
ClipsStoreClass.migrations = items;
const clipsStoreClass = new ClipsStoreClass(DispatcherDefault, {
  CLIPS_SETTINGS_UPDATE: function handleSettingsUpdate(settings) {
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(obj.clipsSettings);
    const merged2 = Object.assign(settings.settings);
    obj.clipsSettings = {};
  },
  CLIPS_SAVE_CLIP: function handleSaveClip(arg0) {
    ({ clip, session } = arg0);
    closure_21 = Math.max(closure_21 - 1, 0);
    if (null != session) {
      session.recordSavedClip(clip);
      let hasClips = session.hasClips;
      if (hasClips) {
        let tmp3 = null == _null2;
        if (!tmp3) {
          tmp3 = _null2.startedAt <= session.startedAt;
        }
        hasClips = tmp3;
      }
      if (hasClips) {
        _null2 = session;
      }
    }
    if (!clip.isCandidate) {
      obj = {};
      const merged = Object.assign(obj);
      let newClipIds = obj.newClipIds;
      if (newClipIds == null) {
        newClipIds = [];
      }
      const items = [];
      items[HermesBuiltin.arraySpread(newClipIds, 0)] = clip.id;
      obj.newClipIds = items;
      closure_18[clip.id] = clip;
      if (null != clip.remoteClipId) {
        closure_19[clip.remoteClipId] = clip.id;
      }
      obj.hasClips = true;
    }
  },
  CLIPS_PROMOTE_CLIP_CANDIDATE: function handlePromoteClipCandidate(arg0) {
    ({ clip, session } = arg0);
    if (null != session) {
      session.recordPromotedClip(clip);
      let hasClips = session.hasClips;
      if (hasClips) {
        let tmp3 = null == _null2;
        if (!tmp3) {
          tmp3 = _null2.startedAt <= session.startedAt;
        }
        hasClips = tmp3;
      }
      if (hasClips) {
        _null2 = session;
      }
    }
    obj = {};
    const merged = Object.assign(obj);
    let newClipIds = obj.newClipIds;
    if (newClipIds == null) {
      newClipIds = [];
    }
    const items = [];
    items[HermesBuiltin.arraySpread(newClipIds, 0)] = clip.id;
    obj.newClipIds = items;
    closure_18[clip.id] = clip;
    obj.hasClips = true;
  },
  CLIPS_SAVE_CLIP_START: function handleSaveClipStart(arg0) {
    closure_21 = closure_21 + 1;
    let hasTakenDecoupledClip = obj.hasTakenDecoupledClip;
    if (!hasTakenDecoupledClip) {
      hasTakenDecoupledClip = tmp === constants.DECOUPLED;
    }
    obj.hasTakenDecoupledClip = hasTakenDecoupledClip;
  },
  CLIPS_SAVE_CLIP_ERROR: function handleSaveClipError() {
    closure_21 = Math.max(closure_21 - 1, 0);
  },
  CLIPS_SAVE_CLIP_NO_OP: function handleSaveClipNoOp(reason) {
    reason = reason.reason;
    if (!tmp) {
      const _Math = Math;
      closure_21 = Math.max(closure_21 - 1, 0);
    }
  },
  CLIPS_CLEAR_LAST_CLIPS_SESSION: function handleClearLastClipsSession() {
    if (null == c24) {
      return false;
    } else {
      c24 = null;
    }
  },
  CLIPS_SESSION_START: function handleClipsSessionStart(session) {
    if (session != null) {
      session.end();
    }
    session = session.session;
  },
  CLIPS_SESSION_STOP: function handleClipsSessionStop() {
    if (null == _null) {
      return false;
    } else {
      _null.end();
      _null = null;
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
    const iter = arg0.clips[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if (nextResult.isCandidate) {
        iter.return();
      } else {
        closure_18[tmp2.id] = tmp2;
        if (null != tmp2.remoteClipId) {
          closure_19[tmp2.remoteClipId] = tmp2.id;
        }
        continue;
      }
    }
    obj.hasClips = Object.keys(closure_18).length > 0;
  },
  CLIPS_DELETE_CLIP: function handleClipsDelete(id) {
    for (const item10011 of tmp5) {
      let removeCandidateResult = item10011.removeCandidate(arg0.id);
      continue;
    }
    delete tmp3[tmp2];
    let remoteClipId1;
    if (dependencyMap[id.id] != null) {
      remoteClipId1 = tmp4.remoteClipId;
    }
    if (null != remoteClipId1) {
      const remoteClipId = tmp4.remoteClipId;
      delete tmp2[tmp];
    }
    obj.hasClips = Object.keys(dependencyMap).length > 0;
    const tmp5 = getKnownSessions();
  },
  CLIPS_UPDATE_METADATA: function handleClipMetadataUpdate(clip) {
    clip = clip.clip;
    if (clip.isCandidate) {
      return false;
    } else {
      closure_18[clip.id] = clip;
      if (null != clip.remoteClipId) {
        closure_19[clip.remoteClipId] = clip.id;
      }
    }
  },
  RTC_CONNECTION_FLAGS: function handleRTCConnectionFlagsUpdate(flags) {
    obj = { clipsEnabled: FlagUtils.hasFlag(flags.flags, constants5.CLIPS_ENABLED), allowVoiceRecording: null };
    obj.allowVoiceRecording = FlagUtils.hasFlag(flags.flags, constants5.ALLOW_VOICE_RECORDING);
    closure_25[flags.userId] = obj;
  },
  CLIPS_SHOW_CALL_WARNING: function handleShowCallWarning(channelId) {
    channelId = channelId.channelId;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    if (channelId.channelId !== c22) {
      c22 = null;
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
    tmp2 = obj.hardwareClassification === constants2.MEETS_AUTO_ENABLE && tmp !== constants2.MEETS_AUTO_ENABLE;
  },
  CLIPS_INIT: function handleClipsInit() {
    c26 = null;
  },
  CLIPS_INIT_FAILURE: function handleClipsInitFailure(errMsg) {
    errMsg = errMsg.errMsg;
  },
  CLIPS_DISMISS_EDUCATION: function handleDismissClipsEducation(educationType) {
    educationType = educationType.educationType;
    if (_Error.Error === educationType) {
      c26 = null;
    } else if (_Error.Disabled === educationType) {
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
    const items = [clip, ...closure_20.filter((id) => id.id !== clip.id)];
    closure_20 = items;
  },
  CLIPS_MONTAGE_RENDER_DONE: function handleMontageRenderDone(clip) {
    clip = clip.clip;
    const session = clip.session;
    closure_20 = closure_20.filter((id) => id.id !== clip.id);
    closure_18[clip.id] = clip;
    if (null != session) {
      session.recordMontageClip(clip);
      let hasClips = session.hasClips;
      if (hasClips) {
        let tmp3 = null == _null2;
        if (!tmp3) {
          tmp3 = _null2.startedAt <= session.startedAt;
        }
        hasClips = tmp3;
      }
      if (hasClips) {
        _null2 = session;
      }
    }
    obj = {};
    const merged = Object.assign(obj);
    let newClipIds = obj.newClipIds;
    if (newClipIds == null) {
      newClipIds = [];
    }
    const items = [];
    items[HermesBuiltin.arraySpread(newClipIds, 0)] = clip.id;
    obj.newClipIds = items;
    obj.hasClips = true;
  },
  CLIPS_MONTAGE_RENDER_ERROR: function handleMontageRenderError(clipId) {
    clipId = clipId.clipId;
    closure_20 = closure_20.filter((id) => id.id !== clipId);
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
    c23 = null;
    c24 = null;
    c22 = null;
    closure_25 = {};
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/clips/ClipsStore.tsx");

export default clipsStoreClass;
export const DEFAULT_STORAGE_SENTINEL = "default";
export const DEFAULT_STORAGE_DIRECTORY = "Discord Clips";
