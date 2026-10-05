// === Module 2005: ClipsStore ===

// Module 2005 (ClipsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import DiscordNativeDefault from "DiscordNative" /* 4490 */;
import clipPOVOverlap from "clipPOVOverlap" /* 13809 */;
import DistributedClipsExperimentDefault from "DistributedClipsExperiment" /* 13811 */;
import AutoclippingDefaultOverrideExperiment2 from "AutoclippingDefaultOverrideExperiment" /* 13812 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import RunningGameStore from "RunningGameStore" /* 2006 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ClipsConstants from "ClipsConstants" /* 7231 */;
import Constants from "Constants" /* 1085 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 4937 */;
import size from "module_2" /* 2 */;

let _null, c4, c5, closure_18, closure_2;

let ApplicationStreamFPS;
let ApplicationStreamResolutions;
let ClipsLengthSettings;
let DEFAULT_CLIPS_BITRATE_PERCENT;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let obj = function _migrateDefaultStorage() {
  let clipsSettings;
  obj = _asyncToGenerator(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let storageLocation;
        let closure_1;
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
            storageLocation = undefined;
            closure_1 = undefined;
            if (clipsSettings.clipsSettings.storageLocation === closure_2_16) {
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
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_129_9.error("Failed to resolve videos path for default storage migration", closure_2);
          const app = closure_129_1(closure_129_2[6]).app;
          c4 = 2;
          c5 = 1;
          const obj5 = { value: app.getPath("documents"), done: false };
          return obj5;
        } else {
          if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              storageLocation = value;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_1 = value;
            obj = closure_129_0(closure_129_2[7]);
            storageLocation = obj.pathJoin(closure_1, closure_129_17);
            c3 = 0;
          }
          closure_129_35.clipsSettings.storageLocation = storageLocation;
          closure_129_40.emitChange();
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp33) {
        closure_2 = tmp33;
        if (0 === c3) {
          c5 = 3;
          throw tmp33;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function getKnownSessions() {
  const items = [];
  if (null != session) {
    items.push(session);
  }
  const tmp3 = null != c24 && c24 !== session;
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
    let tmp3 = nextResult;
    let iter2 = value4[Symbol.iterator]();
    let nextResult1 = iter2.next();
    while (iter2 !== undefined) {
      let tmp8 = nextResult1;
      obj = clipPOVOverlap;
      if (null != obj.getClipPOVOverlapMilliseconds(tmp3, nextResult1)) {
        set = map.set;
        let attachmentId = tmp3.attachmentId;
        items1 = map.get(tmp3.attachmentId);
        if (items1 == null) {
          items1 = [];
        }
        let items = [];
        items[HermesBuiltin.arraySpread(items, items1, 0)] = tmp8;
        let result = set(attachmentId, items);
        flag = true;
      }
      continue;
    }
    continue;
  }
  return flag;
}
function trackClipMessage(message) {
  function getClipPOVReferences(message, found) {
    const items = [];
    const iter = found[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      obj = clipPOVOverlap;
      let clipAttachmentPOVWindow = obj.getClipAttachmentPOVWindow(nextResult);
      if (null != clipAttachmentPOVWindow) {
        let obj3 = { attachmentId: tmp2.id };
        let push = items.push;
        let merged = Object.assign(tmp6);
        ({ id: obj2.messageId, channel_id: obj2.channelId } = message);
        let arr = push(obj3);
      }
      continue;
    }
    return items;
  }
  obj = DistributedClipsExperimentDefault;
  if (obj.getConfig({ location: "trackClipMessage" }).enableDistributedClips) {
    let tmp2 = message;
    const attachments = message.attachments;
    let found;
    if (attachments != null) {
      found = attachments.filter((flags) => {
        let num = flags.flags;
        const hasFlag = FlagUtils.hasFlag;
        FlagUtils;
        if (num == null) {
          num = 0;
        }
        return hasFlag(num, constants.IS_CLIP);
      });
    }
    if (found == null) {
      found = [];
    }
    let num = 0;
    if (0 === found.length) {
      return false;
    } else if (map1.has(message.id)) {
      return false;
    } else {
      const tmp4 = getClipPOVReferences(message, found);
      const result = map1.set(message.id, tmp4);
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
        set = map2.set;
        const tmp14Result = recordPOVMatches(items1, tmp4);
        let value3 = map2.get(message_id1);
        if (value3 == null) {
          value3 = [];
        }
        let items = [];
        HermesBuiltin.arraySpread(items, tmp4, HermesBuiltin.arraySpread(items, value3, 0));
        const result1 = set(message_id1, items);
        flag3 = tmp14Result;
      }
      let value4 = map2.get(message.id);
      if (value4 == null) {
        value4 = [];
      }
      const tmp25 = recordPOVMatches(tmp4, value4) || flag3 || flag2;
      return tmp25;
    }
  } else {
    return false;
  }
}
({ CLIPS_HARDWARE_CLASSIFICATION_VERSION: metroRequire, ClipSaveTypes: metroImportDefault, ClipsUserEducationType: metroImportAll, ClipsLogger: c9, MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS: c10, ClipsHardwareClassification: unpackModuleId, ClipsSaveNoOpReason: closure_12, ClipsLengthSettings, DEFAULT_CLIPS_BITRATE_PERCENT } = ClipsConstants);
({ MessageAttachmentFlags: map1, MessageReferenceTypes: closure_14, VoiceFlags: closure_15 } = Constants);
let c16 = "default";
let c17 = "Discord Clips";
const authStore4 = {};
let closure_19 = {};
let closure_20 = [];
let closure_21 = 0;
let c22 = null;
let session = null;
let c24 = null;
let closure_25 = {};
let c26 = null;
({ ApplicationStreamFPS, ApplicationStreamResolutions } = StreamSettingsConstants);
let set = new Set();
let _Set1 = set;
let enabled = false;
const set1 = new Set();
const map = new Map();
map1 = new Map();
const map2 = new Map();
let closure_33 = [];
obj = { clipsEnabled: false, storageLocation: "default", clipsQuality: { resolution: ApplicationStreamResolutions.RESOLUTION_1080, frameRate: ApplicationStreamFPS.FPS_30, bitratePercent: DEFAULT_CLIPS_BITRATE_PERCENT }, clipsLength: ClipsLengthSettings.SECONDS_30, remindersEnabled: true, decoupledClipsEnabled: false, maxAutoClips: 20, clipSignals: { enableDistributedSignals: true, enableGameSignals: true }, debugTooltipsEnabled: false, enableAutoclipping: "Set", showPovClipsInGallery: true };
obj = { clipsSettings: obj, hardwareClassification: null, hardwareClassificationForDecoupled: null, hardwareClassificationVersion: 0, newClipIds: [], hasClips: false, hasTakenDecoupledClip: false, clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 } };
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class ClipsStoreClass extends DeviceSettingsStore {
  initialize(arg0) {
    function migrateDefaultStorage() {
      return obj(...arguments);
    }
    if (null != arg0) {
      obj = arg0;
    }
    migrateDefaultStorage();
    this.waitFor(RunningGameStore);
  }
  getClips() {
    return closure_18;
  }
  getClipById(arg0) {
    return closure_18[arg0];
  }
  getClipByRemoteId(arg0) {
    if (null != closure_19[arg0]) {
      return closure_18[closure_19[arg0]];
    }
  }
  getClipCandidates() {
    const items = [];
    if (null != session) {
      items.push(session);
    }
    const tmp3 = null != c24 && c24 !== session;
    if (tmp3) {
      items.push(c24);
    }
    return items.flatMap((candidates) => candidates.candidates);
  }
  getPendingMontageClips() {
    return closure_20;
  }
  getUserAgnosticState() {
    return obj;
  }
  getSettings() {
    return obj.clipsSettings;
  }
  getEnableAutoclipping() {
    enabled = obj.clipsSettings.enableAutoclipping;
    if (enabled == null) {
      const AutoclippingDefaultOverrideExperiment = AutoclippingDefaultOverrideExperiment2.AutoclippingDefaultOverrideExperiment;
      enabled = AutoclippingDefaultOverrideExperiment.getConfig({ location: "getAutoclippingDefault" }).enabled;
    }
    return enabled;
  }
  hasUserSetAutoclippingSettings() {
    return null != obj.clipsSettings.enableAutoclipping;
  }
  getLastClipsSession() {
    return c24;
  }
  getActiveClipsSession() {
    return session;
  }
  devSetLastClipsSession(arg0) {
    let c24 = arg0;
    this.emitChange();
  }
  getClipsWarningShown(channelId) {
    return c22 === channelId;
  }
  getHardwareClassification() {
    return obj.hardwareClassification;
  }
  getHardwareClassificationForDecoupled() {
    return obj.hardwareClassificationForDecoupled;
  }
  getHardwareClassificationVersion() {
    return obj.hardwareClassificationVersion;
  }
  getIsAtMaxSaveClipOperations() {
    return closure_21 >= authStore;
  }
  getLastClipsError() {
    return c26;
  }
  isClipsEnabledForUser(userId) {
    let flag;
    if (closure_25[userId] != null) {
      flag = tmp.clipsEnabled;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  isVoiceRecordingAllowedForUser(id) {
    let flag;
    if (closure_25[id] != null) {
      flag = tmp.allowVoiceRecording;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  hasClips() {
    return obj.hasClips;
  }
  hasTakenDecoupledClip() {
    return obj.hasTakenDecoupledClip;
  }
  canShowReminders() {
    return obj.clipsSettings.remindersEnabled;
  }
  getNewClipIds() {
    return obj.newClipIds;
  }
  isClipExporting(arg0) {
    return _Set1.has(arg0);
  }
  getExportingClipIds() {
    return _Set1;
  }
  isAutoStashEnabled() {
    return enabled;
  }
  hasRepliedWithClip(arg0) {
    return set1.has(arg0);
  }
  getMatchingPOVReferences(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = closure_33;
    }
    return value;
  }
}
const prototype = ClipsStoreClass.prototype;
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
    const obj2 = { clipsSettings: obj };
    const merged2 = Object.assign(clipsSettings);
    return obj2;
  },
  (newClipIds) => {
    obj = { newClipIds };
    const merged = Object.assign(newClipIds);
    newClipIds = newClipIds.newClipIds;
    if (newClipIds == null) {
      newClipIds = [];
    }
    return obj;
  },
  (hardwareClassification) => {
    let num;
    let prop;
    obj = { hardwareClassification: prop, hardwareClassificationVersion: num };
    const merged = Object.assign(hardwareClassification);
    prop = hardwareClassification.hardwareClassification;
    if (prop == null) {
      prop = null;
    }
    num = hardwareClassification.hardwareClassificationVersion;
    if (num == null) {
      num = 0;
    }
    return obj;
  },
  (hasClips) => {
    let flag;
    obj = { hasClips: flag };
    const merged = Object.assign(hasClips);
    flag = hasClips.hasClips;
    if (flag == null) {
      flag = false;
    }
    return obj;
  },
  (clipsSettings) => {
    let obj2;
    obj = { clipsSettings: obj2 };
    const merged = Object.assign(clipsSettings);
    obj2 = { decoupledClipsEnabled: obj.decoupledClipsEnabled };
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    return obj;
  },
  (hardwareClassificationForDecoupled) => {
    let prop;
    obj = { hardwareClassificationForDecoupled: prop };
    const merged = Object.assign(hardwareClassificationForDecoupled);
    prop = hardwareClassificationForDecoupled.hardwareClassificationForDecoupled;
    if (prop == null) {
      prop = null;
    }
    return obj;
  },
  (clipsSettings) => {
    let obj2;
    const _default = MediaEngineStore.default;
    let hardwareEncoding;
    if (_default != null) {
      hardwareEncoding = _default.getHardwareEncoding();
    }
    obj = { clipsSettings: obj2 };
    const merged = Object.assign(clipsSettings);
    obj2 = { clipsEnabled: hardwareEncoding && clipsSettings.clipsSettings.clipsEnabled, decoupledClipsEnabled: hardwareEncoding && clipsSettings.clipsSettings.decoupledClipsEnabled };
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    return obj;
  },
  (newClipIds) => {
    obj = { newClipIds, newClipIDs: undefined };
    const merged = Object.assign(newClipIds);
    newClipIds = newClipIds.newClipIds;
    if (newClipIds == null) {
      newClipIds = [];
    }
    return obj;
  },
  (clipsSettings) => {
    obj = {};
    const merged = Object.assign(clipsSettings);
    const obj2 = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    if (typeof clipsSettings.clipsSettings.clipsQuality !== "number") {
      let clipsQuality;
      if (null != clipsSettings.clipsSettings.clipsQuality) {
        clipsQuality = clipsSettings.clipsSettings.clipsQuality;
      }
      obj2.clipsQuality = clipsQuality;
      obj.clipsSettings = obj2;
      return obj;
    }
    clipsQuality = obj.clipsQuality;
  },
  (clipsSettings) => {
    let obj2;
    let remindersEnabled;
    obj = { clipsSettings: obj2 };
    const merged = Object.assign(clipsSettings);
    obj2 = { remindersEnabled };
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    remindersEnabled = clipsSettings.clipsSettings.remindersEnabled;
    if (remindersEnabled == null) {
      remindersEnabled = obj.remindersEnabled;
    }
    return obj;
  },
  (arg0) => {
    obj = { hasTakenDecoupledClip: false, clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 } };
    const merged = Object.assign(arg0);
    return obj;
  },
  (clipsSettings) => {
    let clipSignals;
    let maxAutoClips;
    let obj2;
    obj = { clipsSettings: obj2 };
    const merged = Object.assign(clipsSettings);
    obj2 = { maxAutoClips, clipSignals };
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    maxAutoClips = clipsSettings.clipsSettings.maxAutoClips;
    if (maxAutoClips == null) {
      maxAutoClips = obj.maxAutoClips;
    }
    clipSignals = clipsSettings.clipsSettings.clipSignals;
    if (clipSignals == null) {
      clipSignals = obj.clipSignals;
    }
    return obj;
  },
  (clipsSettings) => {
    let obj2;
    obj = { clipsSettings: obj2 };
    const merged = Object.assign(clipsSettings);
    obj2 = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    return obj;
  },
  (clipsSettings) => {
    let enableAutoclipping;
    let obj2;
    obj = { clipsSettings: obj2 };
    const merged = Object.assign(clipsSettings);
    obj2 = { enableAutoclipping };
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    enableAutoclipping = clipsSettings.clipsSettings.enableAutoclipping;
    if (enableAutoclipping == null) {
      enableAutoclipping = obj.enableAutoclipping;
    }
    return obj;
  },
  (clipsSettings) => {
    let obj2;
    let showPovClipsInGallery;
    obj = { clipsSettings: obj2 };
    const merged = Object.assign(clipsSettings);
    obj2 = { showPovClipsInGallery };
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    showPovClipsInGallery = clipsSettings.clipsSettings.showPovClipsInGallery;
    if (showPovClipsInGallery == null) {
      showPovClipsInGallery = obj.showPovClipsInGallery;
    }
    return obj;
  },
  (clipsSettings) => {
    let bitratePercent;
    let obj2;
    let obj3;
    obj = { clipsSettings: obj2 };
    const merged = Object.assign(clipsSettings);
    obj2 = { clipsQuality: obj3 };
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj3 = { bitratePercent };
    const merged2 = Object.assign(clipsSettings.clipsSettings.clipsQuality);
    bitratePercent = clipsSettings.clipsSettings.clipsQuality.bitratePercent;
    if (bitratePercent == null) {
      bitratePercent = obj.clipsQuality.bitratePercent;
    }
    return obj;
  },
  (clipsSettings) => {
    let obj2;
    obj = { clipsSettings: obj2 };
    const merged = Object.assign(clipsSettings);
    obj2 = { clipsEnabled: clipsSettings.clipsSettings.clipsEnabled && clipsSettings.clipsSettings.decoupledClipsEnabled, decoupledClipsEnabled: clipsSettings.clipsSettings.clipsEnabled && clipsSettings.clipsSettings.decoupledClipsEnabled };
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    return obj;
  }
];
ClipsStoreClass.migrations = items;
let obj2 = {
  CLIPS_SETTINGS_UPDATE: function handleSettingsUpdate(settings) {
    let obj2;
    settings = settings.settings;
    obj = { clipsSettings: obj2 };
    const merged = Object.assign(obj);
    obj2 = {};
    const merged1 = Object.assign(obj.clipsSettings);
    const merged2 = Object.assign(settings);
  },
  CLIPS_SAVE_CLIP: function handleSaveClip(arg0) {
    let clip;
    let items;
    ({ clip, session } = arg0);
    closure_21 = Math.max(closure_21 - 1, 0);
    if (null != session) {
      session.recordSavedClip(clip);
      let hasClips = session.hasClips;
      if (hasClips) {
        hasClips = null == _null || _null.startedAt <= session.startedAt;
        const tmp4 = null == _null || _null.startedAt <= session.startedAt;
      }
      if (hasClips) {
        _null = session;
      }
    }
    if (!clip.isCandidate) {
      obj = { newClipIds: items, hasClips: true };
      const merged = Object.assign(obj);
      let newClipIds = obj.newClipIds;
      if (newClipIds == null) {
        newClipIds = [];
      }
      items = [];
      items[HermesBuiltin.arraySpread(items, newClipIds, 0)] = clip.id;
      closure_18[clip.id] = clip;
      if (null != clip.remoteClipId) {
        closure_19[clip.remoteClipId] = clip.id;
      }
    }
  },
  CLIPS_PROMOTE_CLIP_CANDIDATE: function handlePromoteClipCandidate(arg0) {
    let clip;
    let items;
    ({ clip, session } = arg0);
    if (null != session) {
      session.recordPromotedClip(clip);
      let hasClips = session.hasClips;
      if (hasClips) {
        hasClips = null == _null || _null.startedAt <= session.startedAt;
        const tmp4 = null == _null || _null.startedAt <= session.startedAt;
      }
      if (hasClips) {
        _null = session;
      }
    }
    obj = { newClipIds: items, hasClips: true };
    const merged = Object.assign(obj);
    let newClipIds = obj.newClipIds;
    if (newClipIds == null) {
      newClipIds = [];
    }
    items = [];
    items[HermesBuiltin.arraySpread(items, newClipIds, 0)] = clip.id;
    closure_18[clip.id] = clip;
  },
  CLIPS_SAVE_CLIP_START: function handleSaveClipStart(arg0) {
    closure_21 = closure_21 + 1;
    const hasTakenDecoupledClip = obj.hasTakenDecoupledClip || tmp === metroImportDefault.DECOUPLED;
    obj.hasTakenDecoupledClip = hasTakenDecoupledClip;
  },
  CLIPS_SAVE_CLIP_ERROR: function handleSaveClipError() {
    closure_21 = Math.max(closure_21 - 1, 0);
  },
  CLIPS_SAVE_CLIP_NO_OP: function handleSaveClipNoOp(reason) {
    reason = reason.reason;
    const tmp = reason !== constants3.BUFFER_WARMING_UP && reason !== constants3.BRIDGE_SHUTDOWN;
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
    obj = session;
    session = session.session;
    if (session != null) {
      obj.end();
    }
  },
  CLIPS_SESSION_STOP: function handleClipsSessionStop() {
    if (null == session) {
      return false;
    } else {
      session.end();
      session = null;
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
    const tmp2 = getKnownSessions();
    for (const item10011 of tmp2) {
      let removeCandidateResult = item10011.removeCandidate(id.id);
      continue;
    }
    delete closure_18[id.id];
    let remoteClipId;
    if (closure_18[id.id] != null) {
      remoteClipId = tmp.remoteClipId;
    }
    if (null != remoteClipId) {
      delete closure_19[closure_18[id.id].remoteClipId];
    }
    obj.hasClips = Object.keys(closure_18).length > 0;
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
  RTC_CONNECTION_FLAGS: function handleRTCConnectionFlagsUpdate(userId) {
    let obj2;
    let obj3;
    obj = { clipsEnabled: obj2.hasFlag(userId.flags, constants5.CLIPS_ENABLED), allowVoiceRecording: obj3.hasFlag(userId.flags, constants5.ALLOW_VOICE_RECORDING) };
    userId = userId.userId;
    obj2 = FlagUtils;
    closure_25[userId] = obj;
    obj3 = FlagUtils;
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
    obj.hardwareClassificationVersion = metroRequire;
    obj.hardwareClassification = classification;
    const tmp2 = obj.hardwareClassification === unpackModuleId.MEETS_AUTO_ENABLE && tmp !== unpackModuleId.MEETS_AUTO_ENABLE;
    if (tmp2) {
      obj.clipsSettings.clipsEnabled = true;
    }
    obj.hardwareClassificationForDecoupled = classification;
  },
  CLIPS_INIT: function handleClipsInit() {
    c26 = null;
  },
  CLIPS_INIT_FAILURE: function handleClipsInitFailure(errMsg) {
    errMsg = errMsg.errMsg;
  },
  CLIPS_DISMISS_EDUCATION: function handleDismissClipsEducation(educationType) {
    educationType = educationType.educationType;
    if (metroImportAll.Error === educationType) {
      c26 = null;
    } else if (metroImportAll.Disabled === educationType) {
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
    const _Set = Set;
    if (clipIds == null) {
      clipIds = [];
    }
    _Set1 = new _Set(clipIds);
  },
  CLIPS_MONTAGE_RENDER_START: function handleMontageRenderStart(clip) {
    clip = clip.clip;
    const items = [clip, ...closure_20.filter((id) => id.id !== clip.id)];
    closure_20 = items;
  },
  CLIPS_MONTAGE_RENDER_DONE: function handleMontageRenderDone(clip) {
    let items;
    clip = clip.clip;
    session = clip.session;
    closure_20 = closure_20.filter((id) => id.id !== clip.id);
    closure_18[clip.id] = clip;
    if (null != session) {
      session.recordMontageClip(clip);
      let hasClips = session.hasClips;
      if (hasClips) {
        hasClips = null == _null || _null.startedAt <= session.startedAt;
        const tmp4 = null == _null || _null.startedAt <= session.startedAt;
      }
      if (hasClips) {
        _null = session;
      }
    }
    obj = { newClipIds: items, hasClips: true };
    const merged = Object.assign(obj);
    let newClipIds = obj.newClipIds;
    if (newClipIds == null) {
      newClipIds = [];
    }
    items = [];
    items[HermesBuiltin.arraySpread(items, newClipIds, 0)] = clip.id;
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
    const tmp = arg0.messages[Symbol.iterator]();
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
    session = null;
    let c24 = null;
    c22 = null;
    closure_25 = {};
  }
};
const clipsStoreClass = new ClipsStoreClass(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/clips/ClipsStore.tsx");

export default clipsStoreClass;
export const DEFAULT_STORAGE_SENTINEL = "default";
export const DEFAULT_STORAGE_DIRECTORY = "Discord Clips";