// discord_app/modules/activities/EmbeddedActivitiesStore.tsx
import _slicedToArray from "_slicedToArray";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import ActivityPanelModes from "ActivityPanelModes";
import ME from "ME";
import { PersistedStore } from "initialize";
import set from "ensureGuildLoaded";
import { PermissionOverwriteType } from "../../flow/Server.tsx";
import { ApplicationCommandSectionType } from "../application_commands/ApplicationCommandTypes.tsx";
import { apexExperiment } from "ContentClassificationEmbeddedActivityFilterExperiment.tsx";
import { getURLForApplication } from "getURLForApplication.tsx";
import { getEmbeddedActivityLocationChannelId } from "utils/embeddedActivityLocationUtils.tsx";
import { getPlatform } from "utils/getPlatform.tsx";

let c10;
let unpackModuleId;
const require = arg1;
function participantFromServer(userId) {
  return { userId: userId.user_id, sessionId: userId.session_id, nonce: userId.nonce };
}
function updateEmbeddedActivities(content_classification) {
  let _location;
  let application_id;
  let composite_instance_id;
  let customId;
  let launch_id;
  let participants;
  let referrerId;
  ({ application_id, launch_id, composite_instance_id, location: _location, participants } = content_classification);
  const mapped = participants.map(participantFromServer);
  let combined = importDefault;
  const tmp3 = getURLForApplication(application_id);
  if (null != tmp3) {
    const embeddedActivityLocationChannelId = application_id(3979).getEmbeddedActivityLocationChannelId(_location);
    if (null != embeddedActivityLocationChannelId) {
      let value = map2.get(embeddedActivityLocationChannelId);
      let items;
      if (value != null) {
        items = value.getItems("all");
      }
      let arr2 = items;
    } else {
      arr2 = items;
    }
    let obj1 = map3;
    value = map3.get(_location.id);
    let items1;
    if (value != null) {
      items1 = value.getItems("all");
    }
    if (items1 == null) {
      items1 = items;
    }
    const found = items1.find((applicationId) => applicationId.applicationId === application_id);
    const mapped1 = mapped.map((userId) => userId.userId);
    let obj3 = store;
    importDefault = store.getId();
    const someResult = mapped1.some((arg0) => arg0 === closure_1);
    const found1 = mapped.find((userId) => userId.userId === closure_1);
    if (found1 != null) {
      const sessionId = found1.sessionId;
    }
    let obj4 = map;
    const obj19 = application_id(3979);
    const value1 = map.get(application_id);
    let obj5 = map4;
    let tmp12 = embeddedActivityLocationChannelId;
    if (embeddedActivityLocationChannelId == null) {
      tmp12 = null;
    }
    const _HermesInternal = HermesInternal;
    const value2 = map4.get("" + application_id + ":" + tmp12);
    if (value2 != null) {
      const launchParams = value2.launchParams;
    }
    let obj = { applicationId: null, location: null, launchId: null, compositeInstanceId: null, url: null, userIds: null, participants: null, contentClassification: null, referrerId: null, customId: null, proxyTicket: null };
    obj[0] = application_id;
    obj[1] = _location;
    obj[2] = launch_id;
    obj[3] = composite_instance_id;
    obj[4] = tmp3;
    const _Set = Set;
    const set = new Set(mapped1);
    obj[5] = set;
    obj[6] = mapped;
    obj[7] = content_classification.content_classification;
    referrerId = undefined;
    if (value1 != null) {
      referrerId = value1.referrerId;
    }
    if (referrerId == null) {
      let referrerId1;
      if (launchParams != null) {
        referrerId1 = launchParams.referrerId;
      }
      referrerId = referrerId1;
    }
    obj[8] = referrerId;
    customId = undefined;
    if (value1 != null) {
      customId = value1.customId;
    }
    if (customId == null) {
      let customId1;
      if (launchParams != null) {
        customId1 = launchParams.customId;
      }
      customId = customId1;
    }
    obj[9] = customId;
    let proxyTicket;
    if (value2 != null) {
      proxyTicket = value2.proxyTicket;
    }
    obj[10] = proxyTicket;
    let tmp25 = someResult;
    if (someResult) {
      tmp25 = null != value1;
    }
    if (tmp25) {
      obj = {};
      const merged = Object.assign(value1);
      const merged1 = Object.assign(obj);
      proxyTicket = obj.proxyTicket;
      if (proxyTicket == null) {
        proxyTicket = value1.proxyTicket;
      }
      obj.proxyTicket = proxyTicket;
      const result = obj4.set(value1.applicationId, obj);
    }
    if (null != value1) {
      if (_location.id === value1.location.id) {
        if (application_id === value1.applicationId) {
          if (someResult) {
            let tmp61 = null;
            if (mapped1.length > 0) {
              tmp61 = obj;
            }
            let id = _location.id;
            let value3 = obj1.get(id);
            if (null == value3) {
              if (typeof ActivityBucket !== "function") {
                HermesBuiltin.throwTypeError();
              }
              obj1 = Object.create(ActivityBucket.prototype);
              obj1[0] = [];
              const result1 = obj1.set(id, obj1);
              value3 = obj1;
              const tmp62 = ActivityBucket;
            }
            value3.upsert(application_id, _location.id, tmp61);
            let tmp79Result = tmp79(3979);
            const embeddedActivityLocationChannelId1 = tmp79Result.getEmbeddedActivityLocationChannelId(_location);
            if (null != embeddedActivityLocationChannelId1) {
              let value4 = map2.get(embeddedActivityLocationChannelId1);
              if (null == value4) {
                if (typeof ActivityBucket !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                const obj2 = Object.create(ActivityBucket.prototype);
                obj2[0] = [];
                const result2 = obj22.set(embeddedActivityLocationChannelId1, obj2);
                value4 = obj2;
                const tmp68 = ActivityBucket;
              }
              value4.upsert(application_id, _location.id, tmp61);
              tmp79Result = tmp79(3979);
              let str5 = tmp79Result.getEmbeddedActivityLocationGuildId(_location);
              if (str5 == null) {
                str5 = "0";
              }
              let value5 = map1.get(str5);
              if (null == value5) {
                if (typeof ActivityBucket !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                obj3 = Object.create(ActivityBucket.prototype);
                obj3[0] = [];
                const result3 = obj17.set(str5, obj3);
                value5 = obj3;
                const tmp74 = ActivityBucket;
              }
              value5.upsert(application_id, _location.id, tmp61);
              obj17 = map1;
              obj22 = map2;
            }
          } else {
            const _Array = Array;
            const arr = Array.from(value1.userIds);
          }
          obj4.delete(value1.applicationId);
          const ComponentDispatch = tmp79(1231).ComponentDispatch;
          ComponentDispatch.dispatch(constants.RELEASE_ACTIVITY_WEB_VIEW);
        }
      }
    }
    if (someResult) {
      if (sessionId === obj3.getSessionId()) {
        ({ referrerId, customId } = obj);
        if (value2 != null) {
          const inviterUserId = value2.inviterUserId;
        }
        if (launchParams != null) {
          const renderInFramePool = launchParams.renderInFramePool;
        }
        const tmp36 = combined(10566)(application_id);
        if (null != tmp36) {
          if (null != obj3.getSessionId()) {
            const value6 = obj4.get(application_id);
            id = undefined;
            if (value6 != null) {
              id = value6.location.id;
            }
            if (id !== _location.id) {
              const embeddedActivityLocationChannelId2 = tmp79(3979).getEmbeddedActivityLocationChannelId(_location);
              channel = channel.getChannel(embeddedActivityLocationChannelId2);
              if (channel != null) {
                const guildId = channel.getGuildId();
              }
              if (null != currentUser.getCurrentUser()) {
                if (null == guildId) {
                  let isPrivateResult;
                  if (channel != null) {
                    isPrivateResult = channel.isPrivate();
                  }
                }
                obj4 = { applicationId: null, url: null, userIds: null, participants: null, connectedSince: null, launchId: null, compositeInstanceId: null, location: null, referrerId: null, customId: null, proxyTicket: null, renderInFramePool: null };
                obj4[0] = application_id;
                obj4[1] = tmp36;
                const _Set2 = Set;
                const set1 = new Set(mapped.map((userId) => userId.userId));
                obj4[2] = set1;
                obj4[3] = mapped;
                const _Date = Date;
                obj4[4] = Date.now();
                obj4[5] = launch_id;
                obj4[6] = composite_instance_id;
                obj4[7] = _location;
                obj4[8] = referrerId;
                obj4[9] = customId;
                obj4[10] = obj.proxyTicket;
                obj4[11] = renderInFramePool;
                const result4 = obj4.set(application_id, obj4);
                const ComponentDispatch2 = tmp79(1231).ComponentDispatch;
                obj5 = { location: null, applicationId: null, isFirstActivityInChannel: null, isStart: null, participants: null, embeddedActivity: null, inviterUserId: null };
                obj5[0] = _location;
                obj5[1] = application_id;
                obj5[2] = 0 === arr2.length;
                obj5[3] = tmp81;
                obj5[4] = mapped;
                obj5[5] = obj4;
                obj5[6] = inviterUserId;
                ComponentDispatch2.dispatch(constants.OPEN_EMBEDDED_ACTIVITY, obj5);
                tmp79(10622);
                if (true === renderInFramePool) {
                  let ACTIVITY_POPOUT_WINDOW = ActivityPanelModes.DISCONNECTED;
                  const _HermesInternal2 = HermesInternal;
                  combined = "" + _location.id + ":" + application_id;
                  const _Date2 = Date;
                  const result5 = map11.set(combined, Date.now());
                } else if (!tmp50) {
                  if (embeddedActivityLocationChannelId2 === channelId.getChannelId()) {
                    if (!combined(10366)(embeddedActivityLocationChannelId2)) {
                      let PIP = ActivityPanelModes.PANEL;
                    }
                    ACTIVITY_POPOUT_WINDOW = PIP;
                  }
                  PIP = ActivityPanelModes.PIP;
                }
                ACTIVITY_POPOUT_WINDOW = ActivityPanelModes.ACTIVITY_POPOUT_WINDOW;
                combined(709).wait(() => {
                  callback(709).dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                });
                const combinedResult = combined(709);
                const tmp41 = 0 === arr2.length;
              }
              const tmp79Result1 = tmp79(3979);
            }
          }
        }
        tmp81 = null == found;
      }
      let tmp59 = embeddedActivityLocationChannelId;
      if (embeddedActivityLocationChannelId == null) {
        tmp59 = null;
      }
      const _HermesInternal3 = HermesInternal;
      obj5.delete("" + application_id + ":" + tmp59);
    }
    const someResult1 = mapped.some((userId) => application_id(13400).isActivityParticipantCurrentUserCurrentSession(userId));
  }
}
ActivityPanelModes = ActivityPanelModes.ActivityPanelModes;
const FocusedActivityLayouts = ActivityPanelModes.FocusedActivityLayouts;
({ ComponentActions: c10, PopoutWindowKeys: unpackModuleId } = ME);
let set = new Set([]);
let obj = { everLaunchedActivities: null, seenNewActivities: null, seenUpdatedActivities: null, lastCheckedForBadgeableActivities: null, dateRangesForSurfaces: null };
obj[0] = new Set();
obj[1] = {};
obj[2] = {};
obj[4] = {};
let items = [];
let items1 = [];
class ActivityBucket {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[0] = [];
    return obj;
  }
}
const prototype = ActivityBucket.prototype;
prototype["upsert"] = function upsert(arg0, arg1, arg2) {
  const self = this;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = this.items;
  this.items = items.filter((applicationId) => {
    let tmp = applicationId.applicationId === closure_0;
    if (tmp) {
      tmp = applicationId.location.id === closure_1;
    }
    return !tmp;
  });
  if (null != arg2) {
    const items1 = self.items;
    items1.push(arg2);
  }
  self.invalidate();
};
prototype["removeWhere"] = function removeWhere(arg0) {
  let closure_0 = arg0;
  const items = this.items;
  this.items = items.filter((arg0) => !callback(arg0));
  this.invalidate();
};
prototype["clear"] = function clear() {
  this.items = [];
  this.invalidate();
};
prototype["getItems"] = function getItems(arg0) {
  const self = this;
  const ContentClassificationEmbeddedActivityFilterExperiment = apexExperiment.ContentClassificationEmbeddedActivityFilterExperiment;
  if (ContentClassificationEmbeddedActivityFilterExperiment.getConfig({ location: "embedded_activity_store" }).enabled) {
    if ("all" !== arg0) {
      if ("visible" === arg0) {
        let cachedVisible = self.cachedVisible;
        if (cachedVisible == null) {
          const items = self.items;
          const found = items.filter((contentClassification) => !callback(10617).isAgeRestrictedClassificationReference(contentClassification.contentClassification));
          self.cachedVisible = found;
          cachedVisible = found;
        }
        return cachedVisible;
      } else if ("hidden" === arg0) {
        let cachedHidden = self.cachedHidden;
        if (cachedHidden == null) {
          const items1 = self.items;
          const found1 = items1.filter((contentClassification) => callback(10617).isAgeRestrictedClassificationReference(contentClassification.contentClassification));
          self.cachedHidden = found1;
          cachedHidden = found1;
        }
        return cachedHidden;
      }
    }
  }
  return self.items;
};
prototype["invalidate"] = function invalidate() {
  this.cachedVisible = null;
  this.cachedHidden = null;
};
let map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const map4 = new Map();
const set2 = new Set();
const map5 = new Map();
const map6 = new Map();
const map7 = new Map();
const map8 = new Map();
const map9 = new Map();
const map10 = new Map();
const map11 = new Map();
let c29;
const DISCONNECTED = ActivityPanelModes.DISCONNECTED;
let RESIZABLE = FocusedActivityLayouts.RESIZABLE;
const NORMAL = require("items3").ActivityPopoutWindowLayouts.NORMAL;
class EmbeddedActivitiesStoreClass extends PersistedStore {
}
const prototype2 = EmbeddedActivitiesStoreClass.prototype;
prototype2["initialize"] = function initialize(everLaunchedActivities) {
  this.waitFor(fetchFingerprint, ensureGuildLoaded, handleConnectionOpen, mergeGuildAvatar);
  let prop;
  if (everLaunchedActivities != null) {
    prop = everLaunchedActivities.everLaunchedActivities;
  }
  if (prop == null) {
    prop = [];
  }
  const set = new Set(prop);
  if (null != everLaunchedActivities) {
    const obj = {};
    const merged = Object.assign(everLaunchedActivities);
    obj.everLaunchedActivities = set;
  }
};
prototype2["getState"] = function getState() {
  return obj;
};
prototype2["getSelfEmbeddedActivityForChannel"] = function getSelfEmbeddedActivityForChannel(currentClientVoiceChannelId) {
  let closure_0 = currentClientVoiceChannelId;
  let tmp = null;
  if (null != currentClientVoiceChannelId) {
    const _Array = Array;
    let found = Array.from(map.values()).find((location) => currentClientVoiceChannelId(outer1_2[10]).getEmbeddedActivityLocationChannelId(location.location) === currentClientVoiceChannelId);
    if (found == null) {
      found = null;
    }
    tmp = found;
    const arr = Array.from(map.values());
  }
  return tmp;
};
prototype2["getSelfEmbeddedActivityForLocation"] = function getSelfEmbeddedActivityForLocation(connectedActivityLocation) {
  let closure_0 = connectedActivityLocation;
  let tmp = null;
  if (null != connectedActivityLocation) {
    const _Array = Array;
    let found = Array.from(map.values()).find((location) => location.location.id === id.id);
    if (found == null) {
      found = null;
    }
    tmp = found;
    const arr = Array.from(map.values());
  }
  return tmp;
};
prototype2["getSelfEmbeddedActivities"] = function getSelfEmbeddedActivities() {
  return map;
};
prototype2["getEmbeddedActivitiesForGuild"] = function getEmbeddedActivitiesForGuild(closure_0) {
  const value = map1.get(closure_0);
  let items;
  if (value != null) {
    items = value.getItems("visible");
  }
  return items;
};
prototype2["getEmbeddedActivitiesForChannel"] = function getEmbeddedActivitiesForChannel(id) {
  const value = map2.get(id);
  let items;
  if (value != null) {
    items = value.getItems("visible");
  }
  return items;
};
prototype2["getEmbeddedActivitiesForLocation"] = function getEmbeddedActivitiesForLocation(id) {
  const value = map3.get(id.id);
  let items;
  if (value != null) {
    items = value.getItems("visible");
  }
  return items;
};
prototype2["getEmbeddedActivitiesForGuildIncludingHidden"] = function getEmbeddedActivitiesForGuildIncludingHidden(arg0) {
  const value = map1.get(arg0);
  let items;
  if (value != null) {
    items = value.getItems("all");
  }
  return items;
};
prototype2["getEmbeddedActivitiesForChannelIncludingHidden"] = function getEmbeddedActivitiesForChannelIncludingHidden(channelId) {
  const value = map2.get(channelId);
  let items;
  if (value != null) {
    items = value.getItems("all");
  }
  return items;
};
prototype2["getEmbeddedActivitiesForLocationIncludingHidden"] = function getEmbeddedActivitiesForLocationIncludingHidden(location) {
  const value = map3.get(location.id);
  let items;
  if (value != null) {
    items = value.getItems("all");
  }
  return items;
};
prototype2["getEmbeddedActivitiesByChannel"] = function getEmbeddedActivitiesByChannel() {
  const map = new Map();
  const item = map2.forEach((getItems) => {
    const items = getItems.getItems("visible");
    if (items.length > 0) {
      const result = map.set(arg1, items);
    }
  });
  return map;
};
prototype2["getEmbeddedActivityDurationMs"] = function getEmbeddedActivityDurationMs(id, c0) {
  const value = map11.get("" + id + ":" + c0);
  let diff = null;
  if (null != value) {
    const _Date = Date;
    diff = Date.now() - value;
  }
  return diff;
};
prototype2["isLaunchingActivity"] = function isLaunchingActivity() {
  return map4.size > 0;
};
prototype2["getShelfActivities"] = function getShelfActivities(closure_0) {
  let str = closure_0;
  if (closure_0 == null) {
    str = "0";
  }
  let value = map5.get(str);
  if (value == null) {
    value = items1;
  }
  return value;
};
prototype2["getShelfFetchStatus"] = function getShelfFetchStatus(closure_0) {
  let str = closure_0;
  if (closure_0 == null) {
    str = "0";
  }
  return map6.get(str);
};
prototype2["shouldFetchShelf"] = function shouldFetchShelf(closure_0) {
  let str = closure_0;
  if (closure_0 == null) {
    str = "0";
  }
  let obj = map6.get(str);
  if (obj == null) {
    obj = { isFetching: false };
  }
  let num;
  const timestamp = Date.now();
  if (obj != null) {
    num = obj.lastFetchTimestampMs;
  }
  if (num == null) {
    num = 0;
  }
  let isFetching;
  const diff = timestamp - num;
  if (obj != null) {
    isFetching = obj.isFetching;
  }
  let tmp4 = !isFetching;
  if (!isFetching) {
    tmp4 = diff > 21600000;
  }
  return tmp4;
};
prototype2["getOrientationLockStateForApp"] = function getOrientationLockStateForApp(applicationId) {
  return map7.get(applicationId);
};
prototype2["getPipOrientationLockStateForApp"] = function getPipOrientationLockStateForApp(applicationId) {
  let orientationLockStateForApp = map8.get(applicationId);
  if (orientationLockStateForApp == null) {
    const self = this;
    orientationLockStateForApp = this.getOrientationLockStateForApp(applicationId);
  }
  return orientationLockStateForApp;
};
prototype2["getGridOrientationLockStateForApp"] = function getGridOrientationLockStateForApp(applicationId) {
  let orientationLockStateForApp = map9.get(applicationId);
  if (orientationLockStateForApp == null) {
    orientationLockStateForApp = map8.get(applicationId);
  }
  if (orientationLockStateForApp == null) {
    const self = this;
    orientationLockStateForApp = this.getOrientationLockStateForApp(applicationId);
  }
  return orientationLockStateForApp;
};
prototype2["getLayoutModeForApp"] = function getLayoutModeForApp(id) {
  return map10.get(id);
};
prototype2["getConnectedActivityChannelId"] = function getConnectedActivityChannelId() {
  if (null != c29) {
    return getEmbeddedActivityLocationChannelId.getEmbeddedActivityLocationChannelId(c29);
  }
};
prototype2["getConnectedActivityLocation"] = function getConnectedActivityLocation() {
  return c29;
};
prototype2["getActivityPanelMode"] = function getActivityPanelMode() {
  return DISCONNECTED;
};
prototype2["getFocusedLayout"] = function getFocusedLayout() {
  return RESIZABLE;
};
prototype2["getCurrentEmbeddedActivity"] = function getCurrentEmbeddedActivity() {
  const selfEmbeddedActivityForLocation = this.getSelfEmbeddedActivityForLocation(this.getConnectedActivityLocation());
  return selfEmbeddedActivityForLocation;
};
prototype2["isProxyTicketRefreshing"] = function isProxyTicketRefreshing(arg0) {
  return set2.has(arg0);
};
prototype2["getEmbeddedActivityForUserId"] = function getEmbeddedActivityForUserId(author_id, id) {
  let obj2;
  if (undefined !== id) {
    const obj = map3[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp7 = callback;
      let tmp8 = callback(tmp5, 2);
      [r10016, obj2] = tmp8;
      let items = obj2.getItems("visible");
      let tmp10 = items;
      let tmp11 = items;
      for (const item10023 of items) {
        if (item10023.applicationId === arg1) {
          let tmp13 = item10023;
          let userIds = tmp12.userIds;
          if (userIds.has(arg0)) {
            let tmp = item10023;
            let tmp14 = obj3;
            obj3.return();
            let tmp15 = obj;
            obj.return();
            break label0;
          }
          return tmp;
        }
        continue;
      }
      continue;
    }
    const tmp2 = map3;
  }
};
prototype2["hasActivityEverBeenLaunched"] = function hasActivityEverBeenLaunched(closure_1) {
  const everLaunchedActivities = obj.everLaunchedActivities;
  return everLaunchedActivities.has(closure_1);
};
prototype2["getLaunchState"] = function getLaunchState(applicationId, id) {
  if (null != applicationId) {
    let tmp = id;
    if (id == null) {
      tmp = null;
    }
    const _HermesInternal = HermesInternal;
    return map4.get("" + applicationId + ":" + tmp);
  }
};
prototype2["getLaunchStates"] = function getLaunchStates() {
  return map4;
};
prototype2["getActivityPopoutWindowLayout"] = function getActivityPopoutWindowLayout() {
  return NORMAL;
};
EmbeddedActivitiesStoreClass.displayName = "EmbeddedActivitiesStore";
EmbeddedActivitiesStoreClass.persistKey = "EmbeddedActivities";
const items2 = [
  (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.seenFeaturedActivities = [];
    obj.shouldShowNewActivityIndicator = false;
    return obj;
  },
  (arg0) => {
    delete tmp2[tmp];
    const merged = Object.assign(arg0);
    return {};
  },
  (arg0) => {
    delete tmp2[tmp];
    const merged = Object.assign(arg0);
    return {};
  },
  (arg0) => {
    delete tmp2[tmp];
    delete tmp2[tmp];
    delete tmp2[tmp];
    delete tmp2[tmp];
    const merged = Object.assign(arg0);
    return {};
  },
  (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.seenNewActivities = {};
    obj.seenUpdatedActivities = {};
    return obj;
  },
  (everLaunchedActivities) => {
    let prop = everLaunchedActivities.everLaunchedActivities;
    if (prop == null) {
      prop = [];
    }
    const obj = {};
    const merged = Object.assign(everLaunchedActivities);
    obj.everLaunchedActivities = new Set(prop);
    return obj;
  },
  (arg0) => {
    delete tmp2[tmp];
    const merged = Object.assign(arg0);
    return {};
  },
  (shouldShowNewActivityIndicator) => {
    shouldShowNewActivityIndicator.surfacesToShowNewActivityIndicator = new Set();
    if (shouldShowNewActivityIndicator.shouldShowNewActivityIndicator) {
      const surfacesToShowNewActivityIndicator = shouldShowNewActivityIndicator.surfacesToShowNewActivityIndicator;
      surfacesToShowNewActivityIndicator.add(PermissionOverwriteType.EmbeddedActivitySurfaces.VOICE_LAUNCHER);
    }
    delete tmp2[tmp];
    const merged = Object.assign(shouldShowNewActivityIndicator);
    return {};
  },
  (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.lastCheckedForBadgeableActivities = null;
    return obj;
  },
  (arg0) => {
    delete tmp2[tmp];
    const obj = {};
    const merged = Object.assign(arg0);
    obj.dateRangesForSurfaces = {};
    return obj;
  }
];
EmbeddedActivitiesStoreClass.migrations = items2;
obj = {
  ACTIVITY_LAYOUT_MODE_UPDATE: function handleActivityLayoutModeUpdate(applicationId) {
    const result = map10.set(applicationId.applicationId, applicationId.layoutMode);
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    let id;
    map2.clear();
    map1.clear();
    map3.clear();
    let item = guilds.forEach((activity_instances) => {
      activity_instances = activity_instances.activity_instances;
      if (activity_instances != null) {
        const item = activity_instances.forEach((arg0) => {
          callback(arg0);
        });
      }
    });
    id = store.getId();
    function _loop(iter) {
      const callback = iter;
      const embeddedActivitiesForLocationIncludingHidden = outer1_35.getEmbeddedActivitiesForLocationIncludingHidden(iter.location);
      if (!embeddedActivitiesForLocationIncludingHidden.some((applicationId) => {
        let hasItem = applicationId.applicationId === iter.applicationId && applicationId.launchId === tmp.launchId;
        if (hasItem) {
          const userIds = applicationId.userIds;
          hasItem = userIds.has(iter);
        }
        return hasItem;
      })) {
        outer1_16.delete(iter.applicationId);
        const ComponentDispatch = callback(outer1_2[13]).ComponentDispatch;
        ComponentDispatch.dispatch(outer1_10.RELEASE_ACTIVITY_WEB_VIEW);
      }
    }
    const iter = Array.from(map.values())[Symbol.iterator]();
    while (iter !== undefined) {
      let _loopResult = _loop(iter.next());
      continue;
    }
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    const activity_instances = guild.guild.activity_instances;
    if (activity_instances != null) {
      const item = activity_instances.forEach((arg0) => {
        callback(arg0);
      });
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    let value = map2.get(channel.id);
    let items;
    if (value != null) {
      items = value.getItems("all");
    }
    map2.delete(channel.id);
    let str2 = channel.guild_id;
    if (str2 == null) {
      str2 = "0";
    }
    value = map1.get(str2);
    if (value != null) {
      value.removeWhere((location) => channel(outer1_2[10]).getEmbeddedActivityLocationChannelId(location.location) === channel.id);
    }
    const item = items.forEach((location) => {
      set.delete(location.location.id);
    });
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function handleEmbeddedActivityLaunchStart(applicationId) {
    let commandOrigin;
    let componentId;
    let inviterUserId;
    let launchParams;
    ({ componentId, commandOrigin, launchParams, inviterUserId } = applicationId);
    const result = map4.set("" + applicationId.applicationId + ":" + applicationId.channelId, { isLaunching: true, componentId, inviterUserId, launchParams });
    if (commandOrigin === ApplicationCommandSectionType.CommandOrigin.APP_DMS_ENTRY_POINT_COMMAND_BUTTON) {
      let RESIZABLE = FocusedActivityLayouts.NO_CHAT;
    } else {
      RESIZABLE = FocusedActivityLayouts.RESIZABLE;
    }
  },
  EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET: function handleEmbeddedActivityLaunchSetProxyTicket(applicationId) {
    const combined = "" + applicationId.applicationId + ":" + applicationId.channelId;
    let obj = map4;
    const value = map4.get(combined);
    if (null != value) {
      obj = {};
      const merged = Object.assign(value);
      obj.proxyTicket = applicationId.proxyTicket;
      const result = obj.set(combined, obj);
    }
  },
  EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET: function handleEmbeddedActivityUpdateConnectedProxyTicket(applicationId) {
    applicationId = applicationId.applicationId;
    let obj = map;
    const value = map.get(applicationId);
    if (null == value) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(value);
      obj.proxyTicket = applicationId.proxyTicket;
      const result = obj.set(applicationId, obj);
    }
  },
  EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING: function handleEmbeddedActivitySetProxyTicketRefreshing(applicationId) {
    applicationId = applicationId.applicationId;
    if (applicationId.refreshing) {
      obj.add(applicationId);
    } else {
      obj.delete(applicationId);
    }
  },
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function handleEmbeddedActivityLaunchSuccess(applicationId) {
    const everLaunchedActivities = obj.everLaunchedActivities;
    everLaunchedActivities.add(applicationId.applicationId);
  },
  EMBEDDED_ACTIVITY_LAUNCH_FAIL: function handleEmbeddedActivityLaunchFail(applicationId) {
    applicationId = applicationId.applicationId;
    map4.delete("" + applicationId + ":" + applicationId.channelId);
    set2.delete(applicationId);
  },
  EMBEDDED_ACTIVITY_LAUNCH_CANCEL: function handleEmbeddedActivityLaunchCancel(applicationId) {
    applicationId = applicationId.applicationId;
    map4.delete("" + applicationId + ":" + applicationId.channelId);
    set2.delete(applicationId);
  },
  EMBEDDED_ACTIVITY_CLOSE: function handleEmbeddedActivityClose(applicationId) {
    applicationId = applicationId.applicationId;
    const value = map.get(applicationId);
    map.delete(applicationId);
    let id;
    if (value != null) {
      id = value.location.id;
    }
    let id1;
    if (_undefined != null) {
      id1 = _undefined.id;
    }
    if (id === id1) {
      _undefined = undefined;
    }
  },
  EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: function handleUpdatePopoutWindowLayout(layout) {
    layout = layout.layout;
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function handleEmbeddedActivityUpdateV2(instance) {
    updateEmbeddedActivities(instance.instance);
  },
  LOCAL_ACTIVITY_UPDATE: function handleLocalActivityUpdate(activity) {
    activity = activity.activity;
    if (null == activity) {
      return false;
    } else {
      let obj = map;
      let str = activity.application_id;
      if (str == null) {
        str = "";
      }
      const value = map.get(str);
      if (null == value) {
        return false;
      } else {
        obj = {};
        const merged = Object.assign(value);
        const result = obj.set(value.applicationId, obj);
      }
    }
  },
  EMBEDDED_ACTIVITY_SET_CONFIG: function handleSetSelfEmbeddedActivityConfig(applicationId) {
    let obj = map;
    const value = map.get(applicationId.applicationId);
    if (null != value) {
      obj = {};
      const merged = Object.assign(value);
      obj.config = applicationId.config;
      const result = obj.set(value.applicationId, obj);
    }
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF: function handleEmbeddedActivityFetchShelf(guildId) {
    let str = guildId.guildId;
    if (str == null) {
      str = "0";
    }
    const value = map6.get(str);
    let lastFetchTimestampMs;
    if (value != null) {
      lastFetchTimestampMs = value.lastFetchTimestampMs;
    }
    const result = map6.set(str, { isFetching: true, lastFetchTimestampMs });
    obj.lastCheckedForBadgeableActivities = new Date(Date.now()).toISOString();
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function handleEmbeddedActivityFetchShelfSuccess(arg0) {
    let activities;
    let guildId;
    ({ guildId, activities } = arg0);
    if (guildId == null) {
      guildId = "0";
    }
    const result = map5.set(guildId, activities);
    const timestamp = Date.now();
    let importDefault;
    let obj = timestamp(500);
    importDefault = getPlatform(obj.getOS());
    obj.dateRangesForSurfaces = activities.reduce((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = tmp;
      if (null != arg1.client_platform_config[closure_1].label_from) {
        if (null != tmp.label_until) {
          const obj = { fromDate: null, untilDate: null };
          ({ label_from: obj[0], label_until: obj[1] } = tmp);
          let _Date = Date;
          let date = new Date(tmp.label_from);
          const time = date.getTime();
          const _Date2 = Date;
          const date1 = new Date(tmp.label_until);
          if (!tmp2) {
            const _Object = Object;
            const values = Object.values(timestamp(outer1_2[19]).EmbeddedActivitySurfaces);
            const found = values.filter((arg0) => {
              const omit_badge_from_surfaces = tmp.omit_badge_from_surfaces;
              return !omit_badge_from_surfaces.includes(arg0);
            });
            const item = found.forEach((arg0) => {
              let tmp3 = null == tmp2;
              if (!tmp3) {
                const _Date = Date;
                const date = new Date(tmp2.fromDate);
                tmp3 = date.getTime() < time;
              }
              if (tmp3) {
                table[arg0] = obj;
              }
            });
          }
          return arg0;
        }
      }
      return arg0;
    }, {});
    const result1 = map6.set(guildId, { isFetching: false, lastFetchTimestampMs: timestamp });
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function handleEmbeddedActivityFetchShelfFail(guildId) {
    let str = guildId.guildId;
    if (str == null) {
      str = "0";
    }
    const value = map6.get(str);
    let lastFetchTimestampMs;
    if (value != null) {
      lastFetchTimestampMs = value.lastFetchTimestampMs;
    }
    const result = map6.set(str, { isFetching: false, lastFetchTimestampMs });
  },
  EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function handleOrientationLockState(arg0) {
    let applicationId;
    let gridLockState;
    let lockState;
    let pictureInPictureLockState;
    ({ applicationId, lockState, pictureInPictureLockState, gridLockState } = arg0);
    if (null == lockState) {
      map7.delete(applicationId);
    } else {
      const result = map7.set(applicationId, lockState);
    }
    if (null === pictureInPictureLockState) {
      map8.delete(applicationId);
    } else if (undefined !== pictureInPictureLockState) {
      const result1 = map8.set(applicationId, pictureInPictureLockState);
    }
    if (null === gridLockState) {
      map9.delete(applicationId);
    } else if (undefined !== gridLockState) {
      const result2 = map9.set(applicationId, gridLockState);
    }
  },
  EMBEDDED_ACTIVITY_SET_PANEL_MODE: function handleSetPanelMode(activityPanelMode) {
    activityPanelMode = activityPanelMode.activityPanelMode;
  },
  EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function handleSetFocusedLayout(focusedActivityLayout) {
    focusedActivityLayout = focusedActivityLayout.focusedActivityLayout;
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    if (null != c29) {
      const embeddedActivityLocationChannelId = getEmbeddedActivityLocationChannelId.getEmbeddedActivityLocationChannelId(c29);
      let tmp6 = null != embeddedActivityLocationChannelId && embeddedActivityLocationChannelId !== tmp;
      if (tmp6) {
        tmp6 = PIP === ActivityPanelModes.PANEL;
      }
      if (tmp6) {
        PIP = ActivityPanelModes.PIP;
      }
      const obj = getEmbeddedActivityLocationChannelId;
    }
  },
  POPOUT_WINDOW_CLOSE: function handlePopoutWindowClose(key) {
    if (key.key === constants2.ACTIVITY_POPOUT) {
      const PIP = ActivityPanelModes.PIP;
    }
  }
};
const embeddedActivitiesStoreClass = new EmbeddedActivitiesStoreClass(require("dispatcher"), obj);
let result = set.fileFinishedImporting("modules/activities/EmbeddedActivitiesStore.tsx");

export default embeddedActivitiesStoreClass;
export const FEATURED_ACTIVITY_IDS = set;
export const NO_ACTIVITIES = items;
export const NO_ACTIVITY_CONFIGS = items1;
export const ACTIVITIES_GUILD_ID_SENTINEL_FOR_PRIVATE_CHANNELS = "0";