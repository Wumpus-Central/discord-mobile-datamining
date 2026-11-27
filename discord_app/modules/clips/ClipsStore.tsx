// === Module 2139: ClipsStore ===

// Module 2139 (ClipsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import FlagUtils from "FlagUtils" /* 1405 */;
import DiscordNativeDefault from "DiscordNative" /* 4854 */;
import ClipsDefaultSettingsUtils from "ClipsDefaultSettingsUtils" /* 15491 */;
import clipPOVOverlap from "clipPOVOverlap" /* 15493 */;
import DistributedClipsExperimentDefault from "DistributedClipsExperiment" /* 15495 */;
import AutoclippingDefaultOverrideExperiment2 from "AutoclippingDefaultOverrideExperiment" /* 15496 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import RunningGameStore from "RunningGameStore" /* 2140 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
let closure_48 = async function _migrateDefaultStorage() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj2 = { value, done: true };
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
          if (clipsSettings.clipsSettings.storageLocation === closure_2_19) {
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
        closure_129_10.error("Failed to resolve videos path for default storage migration", closure_128_2);
        const app = closure_129_1(closure_129_2[8]).app;
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
          closure_128_0 = closure_129_0(closure_129_2[9]).pathJoin(closure_128_1, closure_129_20);
          c3 = 0;
          const obj = closure_129_0(closure_129_2[9]);
        }
        closure_129_47.clipsSettings.storageLocation = closure_128_0;
        closure_129_54.emitChange();
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
  items = [];
  if (null != c26) {
    items.push(c26);
  }
  let tmp3 = null != c35;
  if (tmp3) {
    tmp3 = c35 !== c26;
  }
  if (tmp3) {
    items.push(c35);
  }
  return items;
}
function getGameApplicationIds(game) {
  closure_0 = game;
  if (null != game.processGame) {
    items = [game.id, game.processGame.id];
    let items1 = items;
  } else {
    items1 = [game.id];
  }
  return items1.filter((item) => {
    let tmp = null != item;
    if (!tmp) {
      tmp = null == game.id;
    }
    return tmp;
  });
}
function getGameExitRevision(game) {
  closure_0 = game;
  if (null != game.processGame) {
    items = [game.id, game.processGame.id];
    let items1 = items;
  } else {
    items1 = [game.id];
  }
  const found = items1.filter((item) => {
    let tmp = null != item;
    if (!tmp) {
      tmp = null == game.id;
    }
    return tmp;
  });
  const items2 = [0];
  HermesBuiltin.arraySpread(found.map((item) => {
    let num = map1.get(item);
    if (num == null) {
      num = 0;
    }
    return num;
  }), 1);
  return Math.max.apply(items2);
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
      let obj = clipPOVOverlap;
      if (null != obj.getClipPOVOverlapMilliseconds(tmp2, nextResult1)) {
        items1 = map5.get(tmp2.attachmentId);
        if (items1 == null) {
          items1 = [];
        }
        items = [];
        items[HermesBuiltin.arraySpread(items1, 0)] = tmp7;
        let result = map5.set(tmp2.attachmentId, items);
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
    } else if (map6.has(message.id)) {
      return false;
    } else {
      const tmp3 = (function getClipPOVReferences(message, found) {
        items = [];
        const iter = found[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          let obj = clipPOVOverlap;
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
      const result = map6.set(message.id, tmp3);
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
        let items1 = map6.get(message_id1);
        if (items1 == null) {
          items1 = [];
        }
        let value3 = map7.get(message_id1);
        if (value3 == null) {
          value3 = [];
        }
        items = [];
        HermesBuiltin.arraySpread(tmp3, HermesBuiltin.arraySpread(value3, 0));
        const result1 = map7.set(message_id1, items);
        flag3 = recordPOVMatches(items1, tmp3);
        const tmp13Result = recordPOVMatches(items1, tmp3);
      }
      let value4 = map7.get(message.id);
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
const ClipsConstants = fn(8131);
({ CLIPS_HARDWARE_CLASSIFICATION_VERSION: metroImportDefault, ClipSaveTypes: closure_8, ClipsUserEducationType: closure_9, ClipsLogger: closure_10, MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS: closure_11, ClipsHardwareClassification: closure_12, ClipsSaveNoOpReason: map1, ClipsEnabledSettingsSource: closure_14, ClipsLengthSettings, DEFAULT_CLIPS_BITRATE_PERCENT } = ClipsConstants);
const Constants = fn(1071);
({ MessageAttachmentFlags: closure_15, MessageReferenceTypes: closure_16, VoiceFlags: closure_17 } = Constants);
const StreamSettingsConstants = fn(5943);
const ApplicationStreamFPS = StreamSettingsConstants.ApplicationStreamFPS;
let c19 = "default";
let c20 = "Discord Clips";
const dependencyMap = {};
let closure_22 = {};
let closure_23 = [];
let closure_24 = 0;
let c25 = null;
let c26 = null;
let sum = 0;
let weakMap = new WeakMap();
let map = new Map();
map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const map4 = new Map();
let closure_34 = [];
let c35 = null;
const dependencyMap2 = {};
let c37 = null;
let set = new Set();
let enabled = false;
let c40 = false;
const set1 = new Set();
const map5 = new Map();
const map6 = new Map();
const map7 = new Map();
let closure_45 = [];
let clipsSettings = { clipsEnabled: false, storageLocation: "default", clipsQuality: { resolution: StreamSettingsConstants.ApplicationStreamResolutions.RESOLUTION_1080, frameRate: ApplicationStreamFPS.FPS_60, bitratePercent: DEFAULT_CLIPS_BITRATE_PERCENT }, clipsLength: ClipsLengthSettings.SECONDS_30, remindersEnabled: true, decoupledClipsEnabled: false, maxAutoClips: 20, clipSignals: { enableDistributedSignals: true, enableGameSignals: true }, debugTooltipsEnabled: false, enableAutoclipping: "Path", showPovClipsInGallery: true };
let obj2 = { clipsSettings, hardwareClassification: null, hardwareClassificationVersion: 0, clipsDefaultSettingsState: fn(15491).INITIAL_CLIPS_DEFAULT_SETTINGS_STATE, hasAutoEnabledClipsForHardware: false, newClipIds: [], hasClips: false, hasTakenDecoupledClip: false, clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 } };
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class ClipsStoreClass extends DeviceSettingsStore {
}
const prototype = ClipsStoreClass.prototype;
prototype["initialize"] = function initialize(arg0) {
  (function migrateDefaultStorage() {
    const self = this;
    const apply = closure_1_48.apply;
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
  return closure_21;
};
prototype["getClipById"] = function getClipById(arg0) {
  return dependencyMap[arg0];
};
prototype["getClipByRemoteId"] = function getClipByRemoteId(arg0) {
  if (null != closure_22[arg0]) {
    return dependencyMap[tmp];
  }
};
prototype["getClipCandidates"] = function getClipCandidates() {
  items = [];
  if (null != c26) {
    items.push(c26);
  }
  let tmp3 = null != c35;
  if (tmp3) {
    tmp3 = c35 !== c26;
  }
  if (tmp3) {
    items.push(c35);
  }
  return items.flatMap((candidates) => candidates.candidates);
};
prototype["getPendingMontageClips"] = function getPendingMontageClips() {
  return closure_23;
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return obj2;
};
prototype["getSettings"] = function getSettings() {
  return obj2.clipsSettings;
};
prototype["getEnableAutoclipping"] = function getEnableAutoclipping() {
  enabled = obj2.clipsSettings.enableAutoclipping;
  if (enabled == null) {
    enabled = obj2.clipsDefaultSettingsState.enableAutoclipping;
  }
  if (enabled == null) {
    const AutoclippingDefaultOverrideExperiment = AutoclippingDefaultOverrideExperiment2.AutoclippingDefaultOverrideExperiment;
    enabled = AutoclippingDefaultOverrideExperiment.getConfig({ location: "getAutoclippingDefault" }).enabled;
  }
  return enabled;
};
prototype["hasUserSetAutoclippingSettings"] = function hasUserSetAutoclippingSettings() {
  return null != obj2.clipsSettings.enableAutoclipping;
};
prototype["getLastClipsSession"] = function getLastClipsSession() {
  return c35;
};
prototype["getActiveClipsSession"] = function getActiveClipsSession() {
  return c26;
};
prototype["devSetLastClipsSession"] = function devSetLastClipsSession(arg0) {
  c35 = arg0;
  this.emitChange();
};
prototype["getGameClipIds"] = function getGameClipIds(pid) {
  value = null;
  if (null != pid) {
    value = map2.get(pid.pid);
  }
  let game = value;
  if (null != value) {
    if (!value.dismissed) {
      const value2 = map3.get(value.game.pid);
      revision = undefined;
      if (value2 != null) {
        revision = value2.revision;
      }
      if (revision === revision) {
        return value2.clipIds;
      } else {
        game = value.game;
        if (null != game.processGame) {
          items = [game.id, game.processGame.id];
          let items1 = items;
        } else {
          items1 = [game.id];
        }
        closure_1 = items1.filter((item) => {
          let tmp = null != item;
          if (!tmp) {
            tmp = null == game.id;
          }
          return tmp;
        });
        const _Object = Object;
        const values = Object.values(closure_21);
        const found = values.filter((applicationId) => {
          let hasItem = closure_1.includes(applicationId.applicationId);
          if (hasItem) {
            let num = map.get(applicationId.id);
            if (num == null) {
              num = 0;
            }
            hasItem = num > game.after;
          }
          return hasItem;
        });
        const mapped = found.map((id) => id.id);
        obj2 = { revision, clipIds: mapped };
        const result = map3.set(value.game.pid, obj2);
        return mapped;
      }
    }
  }
  return closure_34;
};
prototype["devSetGameClips"] = function devSetGameClips(game, clips) {
  DispatcherDefault.dispatch({ type: "CLIPS_DEV_SET_GAME_CLIPS", game, clips });
};
prototype["getClipsWarningShown"] = function getClipsWarningShown(channelId) {
  return c25 === channelId;
};
prototype["getHardwareClassification"] = function getHardwareClassification() {
  return obj2.hardwareClassification;
};
prototype["getHardwareClassificationVersion"] = function getHardwareClassificationVersion() {
  return obj2.hardwareClassificationVersion;
};
prototype["getClipsDefaultSettingsState"] = function getClipsDefaultSettingsState() {
  return obj2.clipsDefaultSettingsState;
};
prototype["hasFinishedApplyingDefaultSettings"] = function hasFinishedApplyingDefaultSettings() {
  return c40;
};
prototype["getIsAtMaxSaveClipOperations"] = function getIsAtMaxSaveClipOperations() {
  return closure_24 >= closure_1_11;
};
prototype["getLastClipsError"] = function getLastClipsError() {
  return c37;
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
  return obj2.hasClips;
};
prototype["hasTakenDecoupledClip"] = function hasTakenDecoupledClip() {
  return obj2.hasTakenDecoupledClip;
};
prototype["canShowReminders"] = function canShowReminders() {
  return obj2.clipsSettings.remindersEnabled;
};
prototype["getNewClipIds"] = function getNewClipIds() {
  return obj2.newClipIds;
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
  value = map5.get(arg0);
  if (value == null) {
    value = closure_45;
  }
  return value;
};
ClipsStoreClass.displayName = "ClipsStore";
ClipsStoreClass.persistKey = "ClipsStore";
let items = [
  (arg0) => {
    clipsSettings = arg0;
    if (null == arg0) {
      clipsSettings = obj;
    }
    return { clipsSettings, newClipsCount: 0 };
  },
  (clipsSettings) => {
    clipsSettings = {};
    const merged = Object.assign(clipsSettings);
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj2 = {};
    const merged2 = Object.assign(clipsSettings);
    obj2.clipsSettings = clipsSettings;
    return obj2;
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
    const obj = {};
    const merged = Object.assign(clipsSettings);
    obj2 = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj2.decoupledClipsEnabled = obj.decoupledClipsEnabled;
    obj.clipsSettings = obj2;
    return obj;
  },
  (arg0) => arg0,
  (arg0) => arg0,
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
    const obj = {};
    const merged = Object.assign(clipsSettings);
    obj2 = {};
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
    const obj = {};
    const merged = Object.assign(clipsSettings);
    obj2 = {};
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
    const obj = {};
    const merged = Object.assign(arg0);
    obj.hasTakenDecoupledClip = false;
    obj.clipsEducationState = { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 };
    return obj;
  },
  (clipsSettings) => {
    const obj = {};
    const merged = Object.assign(clipsSettings);
    obj2 = {};
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
    const obj = {};
    const merged = Object.assign(clipsSettings);
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj.clipsSettings = {};
    return obj;
  },
  (clipsSettings) => {
    const obj = {};
    const merged = Object.assign(clipsSettings);
    obj2 = {};
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
    const obj = {};
    const merged = Object.assign(clipsSettings);
    obj2 = {};
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
    const obj = {};
    const merged = Object.assign(clipsSettings);
    obj2 = {};
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
    const obj = {};
    const merged = Object.assign(clipsSettings);
    obj2 = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj2.clipsEnabled = clipsSettings.clipsSettings.clipsEnabled && clipsSettings.clipsSettings.decoupledClipsEnabled;
    obj2.decoupledClipsEnabled = clipsSettings.clipsSettings.clipsEnabled && clipsSettings.clipsSettings.decoupledClipsEnabled;
    obj.clipsSettings = obj2;
    return obj;
  },
  (arg0) => arg0,
  (clipsSettings) => {
    let tmp2 = clipsSettings;
    if (clipsSettings.clipsSettings.clipsQuality.frameRate === ApplicationStreamFPS.FPS_15) {
      const obj = {};
      const merged = Object.assign(clipsSettings);
      obj2 = {};
      const merged1 = Object.assign(clipsSettings.clipsSettings);
      const obj3 = {};
      const merged2 = Object.assign(clipsSettings.clipsSettings.clipsQuality);
      obj3.frameRate = tmp.FPS_30;
      obj2.clipsQuality = obj3;
      obj.clipsSettings = obj2;
      tmp2 = obj;
    }
    return tmp2;
  },
  (clipsDefaultSettingsState) => {
    const obj = {};
    const merged = Object.assign(clipsDefaultSettingsState);
    let INITIAL_CLIPS_DEFAULT_SETTINGS_STATE = clipsDefaultSettingsState.clipsDefaultSettingsState;
    if (INITIAL_CLIPS_DEFAULT_SETTINGS_STATE == null) {
      INITIAL_CLIPS_DEFAULT_SETTINGS_STATE = ClipsDefaultSettingsUtils.INITIAL_CLIPS_DEFAULT_SETTINGS_STATE;
    }
    obj.clipsDefaultSettingsState = INITIAL_CLIPS_DEFAULT_SETTINGS_STATE;
    return obj;
  },
  (hardwareClassification) => {
    hardwareClassification = hardwareClassification.hardwareClassification;
    const obj = {};
    const merged = Object.assign(hardwareClassification);
    let tmp2 = hardwareClassification === constants2.MEETS_AUTO_ENABLE;
    if (!tmp2) {
      let tmp3 = hardwareClassification === constants2.MEETS_MINIMUM;
      if (tmp3) {
        tmp3 = hardwareClassification.hasClips || hardwareClassification.hasTakenDecoupledClip;
        const tmp4 = hardwareClassification.hasClips || hardwareClassification.hasTakenDecoupledClip;
      }
      tmp2 = tmp3;
    }
    obj.hasAutoEnabledClipsForHardware = tmp2;
    return obj;
  }
];
ClipsStoreClass.migrations = items;
const clipsStoreClass = new ClipsStoreClass(DispatcherDefault, {
  CLIPS_SETTINGS_UPDATE: function handleSettingsUpdate(settings) {
    settings = settings.settings;
    if (null != settings.clipsEnabled) {
      const obj = {};
      const merged = Object.assign(obj2.clipsDefaultSettingsState);
      obj.clipsEnabledSource = constants4.USER;
      let clipsDefaultSettingsState = obj;
    } else {
      clipsDefaultSettingsState = obj2.clipsDefaultSettingsState;
    }
    obj2 = {};
    const merged1 = Object.assign(obj2);
    const merged2 = Object.assign(obj2.clipsSettings);
    const merged3 = Object.assign(settings);
    obj2.clipsSettings = {};
    obj2.clipsDefaultSettingsState = clipsDefaultSettingsState;
    const obj3 = {};
  },
  CLIPS_DEV_SET_GAME_CLIPS: function handleDevSetGameClips(arg0) {
    ({ game, clips } = arg0);
    const obj = {};
    const merged = Object.assign(map2.get(game.pid));
    obj.dismissed = false;
    value = map2.get(game.pid);
    let after;
    if (value != null) {
      after = value.after;
    }
    if (after == null) {
      after = getGameExitRevision(game);
    }
    obj.after = after;
    obj.game = game;
    const result = map2.set(game.pid, obj);
    map3.delete(game.pid);
    for (const item10031 of clips) {
      if (!map.has(item10031.id)) {
        let sum = sum + 1;
        let result1 = map.set(item10031.id, sum);
      }
      continue;
    }
  },
  CLIPS_DISMISS_QUICK_BAR: function handleDismissQuickBar(pid) {
    value = map2.get(pid.pid);
    if (null != value) {
      if (!value.dismissed) {
        value.dismissed = true;
      }
    }
    return false;
  },
  CLIPS_SAVE_CLIP: function handleSaveClip(arg0) {
    ({ clip, session } = arg0);
    closure_24 = Math.max(closure_24 - 1, 0);
    sum = sum + 1;
    if (!map.has(clip.id)) {
      value = null;
      if (null != session) {
        value = weakMap.get(session);
      }
      if (value == null) {
        value = sum;
      }
      const result = map.set(clip.id, value);
    }
    if (null != session) {
      session.recordSavedClip(clip);
      let hasClips = session.hasClips;
      if (hasClips) {
        let tmp7 = null == _null2;
        if (!tmp7) {
          tmp7 = _null2.startedAt <= session.startedAt;
        }
        hasClips = tmp7;
      }
      if (hasClips) {
        _null2 = session;
      }
    }
    if (!clip.isCandidate) {
      obj2 = {};
      const merged = Object.assign(obj2);
      let newClipIds = obj2.newClipIds;
      if (newClipIds == null) {
        newClipIds = [];
      }
      items = [];
      items[HermesBuiltin.arraySpread(newClipIds, 0)] = clip.id;
      obj2.newClipIds = items;
      closure_21[clip.id] = clip;
      if (null != clip.remoteClipId) {
        closure_22[clip.remoteClipId] = clip.id;
      }
      obj2.hasClips = true;
    }
  },
  CLIPS_PROMOTE_CLIP_CANDIDATE: function handlePromoteClipCandidate(arg0) {
    ({ clip, session } = arg0);
    sum = sum + 1;
    if (!map.has(clip.id)) {
      value = null;
      if (null != session) {
        value = weakMap.get(session);
      }
      if (value == null) {
        value = sum;
      }
      const result = map.set(clip.id, value);
    }
    if (null != session) {
      session.recordPromotedClip(clip);
      let hasClips = session.hasClips;
      if (hasClips) {
        let tmp7 = null == _null2;
        if (!tmp7) {
          tmp7 = _null2.startedAt <= session.startedAt;
        }
        hasClips = tmp7;
      }
      if (hasClips) {
        _null2 = session;
      }
    }
    obj2 = {};
    const merged = Object.assign(obj2);
    let newClipIds = obj2.newClipIds;
    if (newClipIds == null) {
      newClipIds = [];
    }
    items = [];
    items[HermesBuiltin.arraySpread(newClipIds, 0)] = clip.id;
    obj2.newClipIds = items;
    closure_21[clip.id] = clip;
    obj2.hasClips = true;
  },
  CLIPS_SAVE_CLIP_START: function handleSaveClipStart(arg0) {
    closure_24 = closure_24 + 1;
    let hasTakenDecoupledClip = obj2.hasTakenDecoupledClip;
    if (!hasTakenDecoupledClip) {
      hasTakenDecoupledClip = tmp === constants.DECOUPLED;
    }
    obj2.hasTakenDecoupledClip = hasTakenDecoupledClip;
  },
  CLIPS_SAVE_CLIP_ERROR: function handleSaveClipError() {
    closure_24 = Math.max(closure_24 - 1, 0);
  },
  CLIPS_SAVE_CLIP_NO_OP: function handleSaveClipNoOp(reason) {
    reason = reason.reason;
    if (!tmp) {
      const _Math = Math;
      closure_24 = Math.max(closure_24 - 1, 0);
    }
  },
  CLIPS_CLEAR_LAST_CLIPS_SESSION: function handleClearLastClipsSession() {
    if (null == c35) {
      return false;
    } else {
      c35 = null;
    }
  },
  CLIPS_SESSION_START: function handleClipsSessionStart(session) {
    session = session.session;
    if (_null != null) {
      _null.end();
    }
    _null = session;
    sum = sum + 1;
    const result = weakMap.set(session, sum);
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
    obj2.newClipIds = [];
  },
  CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function removeSingleNewClipId(clipId) {
    clipId = clipId.clipId;
    const newClipIds = obj2.newClipIds;
    obj2.newClipIds = newClipIds.filter((item) => item !== clipId);
  },
  CLIPS_LOAD_DIRECTORY_SUCCESS: function handleClipsDirectoryLoaded(arg0) {
    sum = sum + 1;
    closure_21 = {};
    const iter = arg0.clips[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if (!nextResult.isCandidate) {
        closure_21[tmp2.id] = tmp2;
        if (null != tmp2.remoteClipId) {
          closure_22[tmp2.remoteClipId] = tmp2.id;
        }
      }
      continue;
    }
    obj2.hasClips = Object.keys(closure_21).length > 0;
  },
  CLIPS_DELETE_CLIP: function handleClipsDelete(id) {
    sum = sum + 1;
    map.delete(id.id);
    for (const item10017 of tmp6) {
      let removeClipResult = item10017.removeClip(arg0.id);
      continue;
    }
    delete tmp3[tmp2];
    let remoteClipId1;
    if (dependencyMap[id.id] != null) {
      remoteClipId1 = tmp5.remoteClipId;
    }
    if (null != remoteClipId1) {
      const remoteClipId = tmp5.remoteClipId;
      delete tmp2[tmp];
    }
    obj2.hasClips = Object.keys(dependencyMap).length > 0;
    const tmp6 = getKnownSessions();
  },
  CLIPS_UPDATE_METADATA: function handleClipMetadataUpdate(clip) {
    clip = clip.clip;
    sum = sum + 1;
    if (clip.isCandidate) {
      return false;
    } else {
      closure_21[clip.id] = clip;
      if (null != clip.remoteClipId) {
        closure_22[clip.remoteClipId] = clip.id;
      }
    }
  },
  RTC_CONNECTION_FLAGS: function handleRTCConnectionFlagsUpdate(flags) {
    const obj = { clipsEnabled: FlagUtils.hasFlag(flags.flags, constants6.CLIPS_ENABLED), allowVoiceRecording: null };
    obj.allowVoiceRecording = FlagUtils.hasFlag(flags.flags, constants6.ALLOW_VOICE_RECORDING);
    closure_36[flags.userId] = obj;
  },
  CLIPS_SHOW_CALL_WARNING: function handleShowCallWarning(channelId) {
    channelId = channelId.channelId;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    if (channelId.channelId !== c25) {
      c25 = null;
    }
  },
  CLIPS_APPLY_DEFAULT_SETTINGS: function handleApplyDefaultSettings(arg0) {
    ({ classification, decision } = arg0);
    let MEETS_AUTO_ENABLE = obj2.hardwareClassification;
    obj2.hardwareClassificationVersion = hardwareClassificationVersion;
    obj2.hardwareClassification = classification;
    let tmp = obj2.clipsDefaultSettingsState.clipsEnabledSource === constants4.UNSET;
    if (tmp) {
      tmp = classification === constants2.MEETS_AUTO_ENABLE;
    }
    if (tmp) {
      tmp = !obj2.hasAutoEnabledClipsForHardware;
    }
    let tmp4 = tmp;
    if (tmp) {
      tmp4 = !obj2.clipsSettings.clipsEnabled;
    }
    if (tmp) {
      clipsSettings = {};
      const merged = Object.assign(obj2.clipsSettings);
      clipsSettings.clipsEnabled = true;
      obj2.clipsSettings = clipsSettings;
      obj2.hasAutoEnabledClipsForHardware = true;
    }
    if (null != decision) {
      obj2 = { defaultState: null, clipsEnabled: null, decision: null, previousHardwareClassification: null };
      obj2.defaultState = obj2.clipsDefaultSettingsState;
      obj2.clipsEnabled = obj2.clipsSettings.clipsEnabled;
      obj2.decision = decision;
      if (tmp4) {
        MEETS_AUTO_ENABLE = constants2.MEETS_AUTO_ENABLE;
      }
      obj2.previousHardwareClassification = MEETS_AUTO_ENABLE;
      const result = ClipsDefaultSettingsUtils.applyClipsDefaultSettingsDecision(obj2);
      const obj3 = {};
      ({ clipsEnabled, defaultState } = result);
      const merged1 = Object.assign(obj2);
      const obj5 = {};
      const merged2 = Object.assign(obj2.clipsSettings);
      obj5.clipsEnabled = clipsEnabled;
      obj3.clipsSettings = obj5;
      obj3.clipsDefaultSettingsState = defaultState;
      obj2 = obj3;
    }
  },
  CLIPS_APPLY_DEFAULT_SETTINGS_COMPLETE: function handleApplyDefaultSettingsComplete() {
    if (c40) {
      return false;
    } else {
      c40 = true;
    }
  },
  CLIPS_INIT: function handleClipsInit() {
    c37 = null;
  },
  CLIPS_INIT_FAILURE: function handleClipsInitFailure(errMsg) {
    errMsg = errMsg.errMsg;
  },
  CLIPS_DISMISS_EDUCATION: function handleDismissClipsEducation(educationType) {
    educationType = educationType.educationType;
    if (_Error.Error === educationType) {
      c37 = null;
    } else if (_Error.Disabled === educationType) {
      const _Date = Date;
      obj2.clipsEducationState.dismissedAt = Date.now();
      obj2.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0;
      const clipsEducationState = obj2.clipsEducationState;
      clipsEducationState.numberOfTimesDismissed = clipsEducationState.numberOfTimesDismissed + 1;
    }
  },
  RUNNING_GAMES_CHANGE: function handleRunningGamesChange(games) {
    games = games.games;
    let game;
    map3.clear();
    function _loop(arg0) {
      closure_0 = arg0;
      if (games.some((pid) => pid.pid === closure_0)) {
        return 1;
      } else {
        const tmp3 = getGameApplicationIds(game.game);
        for (const item10014 of tmp3) {
          let sum = sum + 1;
          let result = map1.set(item10014, sum);
          continue;
        }
        const result1 = map4.set(arg0, game);
        map2.delete(arg0);
      }
    }
    map = new Map();
    const obj = map;
    while (tmp4 !== undefined) {
      let tmp7 = _slicedToArray(tmp5, 2);
      game = tmp7[1];
      let _loopResult = _loop(tmp7[0]);
      continue;
    }
    const iter = games[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp10 = nextResult;
      value = map2.get(nextResult.pid);
      if (value == null) {
        value = obj.get(tmp10.pid);
      }
      if (value == null) {
        let obj3 = { after: null, game: null };
        obj3.after = getGameExitRevision(tmp10);
        obj3.game = tmp10;
        value = obj3;
      }
      value.game = tmp10;
      let result = map2.set(tmp10.pid, value);
      continue;
    }
    if (games.added.length > 0) {
      const clipsEducationState = map2.clipsEducationState;
      clipsEducationState.numberOfGamesLaunchedSinceDismissal = clipsEducationState.numberOfGamesLaunchedSinceDismissal + 1;
    }
    tmp4 = map2[Symbol.iterator]();
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
    items = [clip, ...closure_23.filter((id) => id.id !== clip.id)];
    closure_23 = items;
  },
  CLIPS_MONTAGE_RENDER_DONE: function handleMontageRenderDone(clip) {
    clip = clip.clip;
    const session = clip.session;
    closure_23 = closure_23.filter((id) => id.id !== clip.id);
    closure_21[clip.id] = clip;
    sum = sum + 1;
    if (!map.has(clip.id)) {
      value = null;
      if (null != session) {
        value = weakMap.get(session);
      }
      if (value == null) {
        value = sum;
      }
      const result = map.set(clip.id, value);
    }
    if (null != session) {
      session.recordMontageClip(clip);
      let hasClips = session.hasClips;
      if (hasClips) {
        let tmp7 = null == _null2;
        if (!tmp7) {
          tmp7 = _null2.startedAt <= session.startedAt;
        }
        hasClips = tmp7;
      }
      if (hasClips) {
        _null2 = session;
      }
    }
    obj2 = {};
    const merged = Object.assign(obj2);
    let newClipIds = obj2.newClipIds;
    if (newClipIds == null) {
      newClipIds = [];
    }
    items = [];
    items[HermesBuiltin.arraySpread(newClipIds, 0)] = clip.id;
    obj2.newClipIds = items;
    obj2.hasClips = true;
  },
  CLIPS_MONTAGE_RENDER_ERROR: function handleMontageRenderError(clipId) {
    clipId = clipId.clipId;
    closure_23 = closure_23.filter((id) => id.id !== clipId);
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
    map2.clear();
    map3.clear();
    map4.clear();
    map1.clear();
    map.clear();
    weakMap = new WeakMap();
    sum = sum + 1;
    set1.clear();
    map5.clear();
    map6.clear();
    map7.clear();
    c26 = null;
    c35 = null;
    c25 = null;
    closure_36 = {};
    c40 = false;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/clips/ClipsStore.tsx");

export default clipsStoreClass;
export const DEFAULT_STORAGE_SENTINEL = "default";
export const DEFAULT_STORAGE_DIRECTORY = "Discord Clips";