// === Module 1956: EmbeddedActivitiesStore ===

// Module 1956 (EmbeddedActivitiesStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Server from "Server" /* 1894 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4189 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7523 */;
import getPlatformDefault from "getPlatform" /* 9410 */;
import ContentClassificationEmbeddedActivityFilterExperiment2 from "ContentClassificationEmbeddedActivityFilterExperiment" /* 9479 */;
import ContentClassificationReference from "ContentClassificationReference" /* 9480 */;
import getURLForApplicationDefault from "getURLForApplication" /* 9512 */;
import _slicedToArray from "module_32" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import UserStore from "UserStore" /* 1371 */;

const isVoiceEmbeddedActivityDefault = combined(9526);
require = fn;
function participantFromServer(userId) {
  return { userId: userId.user_id, sessionId: userId.session_id, nonce: userId.nonce };
}
function updateEmbeddedActivities(content_classification) {
  ({ application_id, launch_id, composite_instance_id, location: _location, participants } = content_classification);
  const mapped = participants.map(participantFromServer);
  let combined = importDefault;
  const tmp3 = getURLForApplicationDefault(application_id);
  if (null != tmp3) {
    const embeddedActivityLocationChannelId = application_id(4189).getEmbeddedActivityLocationChannelId(_location);
    if (null != embeddedActivityLocationChannelId) {
      value = map2.get(embeddedActivityLocationChannelId);
      items = undefined;
      if (value != null) {
        items = value.getItems("all");
      }
      let arr2 = items;
    } else {
      arr2 = items;
    }
    let obj1 = map3;
    value = map3.get(_location.id);
    items1 = undefined;
    if (value != null) {
      items1 = value.getItems("all");
    }
    if (items1 == null) {
      items1 = items;
    }
    const found = items1.find((applicationId) => applicationId.applicationId === application_id);
    const mapped1 = mapped.map((userId) => userId.userId);
    importDefault = AuthenticationStore.getId();
    const someResult = mapped1.some((item) => item === closure_1);
    const found1 = mapped.find((userId) => userId.userId === closure_1);
    if (found1 != null) {
      const sessionId = found1.sessionId;
    }
    mapped.some((item) => application_id(13985).isActivityParticipantCurrentUserCurrentSession(item));
    const value1 = map.get(application_id);
    let tmp12 = embeddedActivityLocationChannelId;
    if (embeddedActivityLocationChannelId == null) {
      tmp12 = null;
    }
    const _HermesInternal = HermesInternal;
    value2 = map4.get("" + application_id + ":" + tmp12);
    if (value2 != null) {
      const launchParams = value2.launchParams;
    }
    obj = { applicationId: application_id, location: _location, launchId: launch_id, compositeInstanceId: composite_instance_id, url: tmp3, userIds: null, participants: null, contentClassification: null, referrerId: null, customId: null, proxyTicket: null };
    const _Set = Set;
    const set = new Set(mapped1);
    obj.userIds = set;
    obj.participants = mapped;
    obj.contentClassification = content_classification.content_classification;
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
    obj.referrerId = referrerId;
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
    obj.customId = customId;
    let proxyTicket;
    if (value2 != null) {
      proxyTicket = value2.proxyTicket;
    }
    obj.proxyTicket = proxyTicket;
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
      const result = map.set(value1.applicationId, obj);
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
              if (typeof ActivityBucket === "function") {
                const merged2 = Object.assign({ items: null, cachedVisible: null, cachedHidden: null });
                merged2[0] = [];
                const result1 = obj1.set(id, merged2);
                value3 = merged2;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            value3.upsert(application_id, _location.id, tmp61);
            let tmp76Result = application_id(4189);
            const embeddedActivityLocationChannelId1 = tmp76Result.getEmbeddedActivityLocationChannelId(_location);
            if (null != embeddedActivityLocationChannelId1) {
              let value4 = map2.get(embeddedActivityLocationChannelId1);
              if (null == value4) {
                if (typeof ActivityBucket === "function") {
                  const merged3 = Object.assign({ items: null, cachedVisible: null, cachedHidden: null });
                  merged3[0] = [];
                  const result2 = map2.set(embeddedActivityLocationChannelId1, merged3);
                  value4 = merged3;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              value4.upsert(application_id, _location.id, tmp61);
              tmp76Result = application_id(4189);
              let str5 = tmp76Result.getEmbeddedActivityLocationGuildId(_location);
              if (str5 == null) {
                str5 = "0";
              }
              let value5 = map1.get(str5);
              if (null == value5) {
                if (typeof ActivityBucket === "function") {
                  const merged4 = Object.assign({ items: null, cachedVisible: null, cachedHidden: null });
                  merged4[0] = [];
                  const result3 = map1.set(str5, merged4);
                  value5 = merged4;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              value5.upsert(application_id, _location.id, tmp61);
            }
          } else {
            const _Array = Array;
            Array.from(value1.userIds);
          }
          map.delete(value1.applicationId);
          const ComponentDispatch = application_id(1109).ComponentDispatch;
          ComponentDispatch.dispatch(constants.RELEASE_ACTIVITY_WEB_VIEW);
        }
      }
    }
    if (someResult) {
      if (sessionId === AuthenticationStore.getSessionId()) {
        ({ referrerId, customId } = obj);
        if (value2 != null) {
          const inviterUserId = value2.inviterUserId;
        }
        if (launchParams != null) {
          const renderInFramePool = launchParams.renderInFramePool;
        }
        const tmp36 = getURLForApplicationDefault(application_id);
        if (null != tmp36) {
          if (null != AuthenticationStore.getSessionId()) {
            const value6 = map.get(application_id);
            id = undefined;
            if (value6 != null) {
              id = value6.location.id;
            }
            if (id !== _location.id) {
              const embeddedActivityLocationChannelId2 = application_id(4189).getEmbeddedActivityLocationChannelId(_location);
              const channel = ChannelStore.getChannel(embeddedActivityLocationChannelId2);
              if (channel != null) {
                const guildId = channel.getGuildId();
              }
              if (null != UserStore.getCurrentUser()) {
                if (null == guildId) {
                  if (channel != null) {
                    channel.isPrivate();
                  }
                }
                obj1 = { applicationId: application_id, url: tmp36, userIds: null, participants: null, connectedSince: null, launchId: null, compositeInstanceId: null, location: null, referrerId: null, customId: null, proxyTicket: null, renderInFramePool: null };
                const _Set2 = Set;
                const set1 = new Set(mapped.map((userId) => userId.userId));
                obj1.userIds = set1;
                obj1.participants = mapped;
                const _Date = Date;
                obj1.connectedSince = Date.now();
                obj1.launchId = launch_id;
                obj1.compositeInstanceId = composite_instance_id;
                obj1.location = _location;
                obj1.referrerId = referrerId;
                obj1.customId = customId;
                obj1.proxyTicket = obj.proxyTicket;
                obj1.renderInFramePool = renderInFramePool;
                const result4 = map.set(application_id, obj1);
                const ComponentDispatch2 = application_id(1109).ComponentDispatch;
                const obj2 = { location: _location, applicationId: application_id, isFirstActivityInChannel: 0 === arr2.length, isStart: tmp78, participants: mapped, embeddedActivity: obj1, inviterUserId };
                ComponentDispatch2.dispatch(constants.OPEN_EMBEDDED_ACTIVITY, obj2);
                application_id(9534);
                if (true === renderInFramePool) {
                  let ACTIVITY_POPOUT_WINDOW = ActivityPanelModes.DISCONNECTED;
                  const _HermesInternal2 = HermesInternal;
                  combined = "" + _location.id + ":" + application_id;
                  const _Date2 = Date;
                  const result5 = map11.set(combined, Date.now());
                } else if (!tmp50) {
                  if (embeddedActivityLocationChannelId2 === SelectedChannelStore.getChannelId()) {
                    if (!isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId2)) {
                      PIP = ActivityPanelModes.PANEL;
                    }
                    ACTIVITY_POPOUT_WINDOW = PIP;
                  }
                  PIP = ActivityPanelModes.PIP;
                }
                ACTIVITY_POPOUT_WINDOW = ActivityPanelModes.ACTIVITY_POPOUT_WINDOW;
                DispatcherDefault.wait(() => {
                  closure_1(573).dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                });
                const combinedResult = DispatcherDefault;
                const tmp41 = 0 === arr2.length;
              }
              const tmp76Result1 = application_id(4189);
            }
          }
        }
        tmp78 = null == found;
      }
      let tmp59 = embeddedActivityLocationChannelId;
      if (embeddedActivityLocationChannelId == null) {
        tmp59 = null;
      }
      const _HermesInternal3 = HermesInternal;
      map4.delete("" + application_id + ":" + tmp59);
    }
    const obj19 = application_id(4189);
  }
}
const ActivityPanelConstants = fn(9505);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const FocusedActivityLayouts = ActivityPanelConstants.FocusedActivityLayouts;
const Constants = fn(1074);
({ ComponentActions: c10, PopoutWindowKeys: closure_11 } = Constants);
let obj = { everLaunchedActivities: null, seenNewActivities: null, seenUpdatedActivities: null, lastCheckedForBadgeableActivities: null, dateRangesForSurfaces: null };
let set = new Set([]);
obj.everLaunchedActivities = new Set();
obj.seenNewActivities = {};
obj.seenUpdatedActivities = {};
obj.dateRangesForSurfaces = {};
let items = [];
let items1 = [];
class ActivityBucket {
  constructor() {
    merged = Object.assign({ items: null, cachedVisible: null, cachedHidden: null });
    merged[0] = [];
    return merged;
  }
}
const prototype = ActivityBucket.prototype;
prototype["upsert"] = function upsert(arg0, arg1, arg2) {
  const self = this;
  closure_0 = arg0;
  closure_1 = arg1;
  items = this.items;
  this.items = items.filter((applicationId) => {
    let tmp = applicationId.applicationId === closure_0;
    if (tmp) {
      tmp = applicationId.location.id === closure_1;
    }
    return !tmp;
  });
  if (null != arg2) {
    items1 = self.items;
    items1.push(arg2);
  }
  self.invalidate();
};
prototype["removeWhere"] = function removeWhere(arg0) {
  closure_0 = arg0;
  items = this.items;
  this.items = items.filter((item) => !closure_0(item));
  this.invalidate();
};
prototype["clear"] = function clear() {
  this.items = [];
  this.invalidate();
};
prototype["getItems"] = function getItems(arg0) {
  const self = this;
  const ContentClassificationEmbeddedActivityFilterExperiment = ContentClassificationEmbeddedActivityFilterExperiment2.ContentClassificationEmbeddedActivityFilterExperiment;
  if (ContentClassificationEmbeddedActivityFilterExperiment.getConfig({ location: "embedded_activity_store" }).enabled) {
    if ("all" !== arg0) {
      if ("visible" === arg0) {
        let cachedVisible = self.cachedVisible;
        if (cachedVisible == null) {
          items = self.items;
          const found = items.filter((contentClassification) => !ContentClassificationReference.isAgeRestrictedClassificationReference(contentClassification.contentClassification));
          self.cachedVisible = found;
          cachedVisible = found;
        }
        return cachedVisible;
      } else if ("hidden" === arg0) {
        let cachedHidden = self.cachedHidden;
        if (cachedHidden == null) {
          items1 = self.items;
          const found1 = items1.filter((contentClassification) => ContentClassificationReference.isAgeRestrictedClassificationReference(contentClassification.contentClassification));
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
let PIP = ActivityPanelModes.DISCONNECTED;
let focusedActivityLayout = FocusedActivityLayouts.RESIZABLE;
let layout = fn(1920).ActivityPopoutWindowLayouts.NORMAL;
const PersistedStore = initializeDefault.PersistedStore;
class EmbeddedActivitiesStoreClass extends PersistedStore {
}
const prototype2 = EmbeddedActivitiesStoreClass.prototype;
prototype2["initialize"] = function initialize(everLaunchedActivities) {
  this.waitFor(AuthenticationStore, ChannelStore, SelectedChannelStore, UserStore);
  let prop;
  if (everLaunchedActivities != null) {
    prop = everLaunchedActivities.everLaunchedActivities;
  }
  if (prop == null) {
    prop = [];
  }
  const set = new Set(prop);
  if (null != everLaunchedActivities) {
    obj = {};
    const merged = Object.assign(everLaunchedActivities);
    obj.everLaunchedActivities = set;
  }
};
prototype2["getState"] = function getState() {
  return obj;
};
prototype2["getSelfEmbeddedActivityForChannel"] = function getSelfEmbeddedActivityForChannel(currentClientVoiceChannelId) {
  closure_0 = currentClientVoiceChannelId;
  let tmp = null;
  if (null != currentClientVoiceChannelId) {
    const _Array = Array;
    let found = Array.from(map.values()).find((location) => embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(location.location) === closure_0);
    if (found == null) {
      found = null;
    }
    tmp = found;
    const arr = Array.from(map.values());
  }
  return tmp;
};
prototype2["getSelfEmbeddedActivityForLocation"] = function getSelfEmbeddedActivityForLocation(connectedActivityLocation) {
  const id = connectedActivityLocation;
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
prototype2["getEmbeddedActivitiesForGuild"] = function getEmbeddedActivitiesForGuild(guildId) {
  value = map1.get(guildId);
  items = undefined;
  if (value != null) {
    items = value.getItems("visible");
  }
  return items;
};
prototype2["getEmbeddedActivitiesForChannel"] = function getEmbeddedActivitiesForChannel(id) {
  value = map2.get(id);
  items = undefined;
  if (value != null) {
    items = value.getItems("visible");
  }
  return items;
};
prototype2["getEmbeddedActivitiesForLocation"] = function getEmbeddedActivitiesForLocation(id) {
  value = map3.get(id.id);
  items = undefined;
  if (value != null) {
    items = value.getItems("visible");
  }
  return items;
};
prototype2["getEmbeddedActivitiesForGuildIncludingHidden"] = function getEmbeddedActivitiesForGuildIncludingHidden(arg0) {
  value = map1.get(arg0);
  items = undefined;
  if (value != null) {
    items = value.getItems("all");
  }
  return items;
};
prototype2["getEmbeddedActivitiesForChannelIncludingHidden"] = function getEmbeddedActivitiesForChannelIncludingHidden(channelId) {
  value = map2.get(channelId);
  items = undefined;
  if (value != null) {
    items = value.getItems("all");
  }
  return items;
};
prototype2["getEmbeddedActivitiesForLocationIncludingHidden"] = function getEmbeddedActivitiesForLocationIncludingHidden(location) {
  value = map3.get(location.id);
  items = undefined;
  if (value != null) {
    items = value.getItems("all");
  }
  return items;
};
prototype2["getEmbeddedActivitiesByChannel"] = function getEmbeddedActivitiesByChannel() {
  map = new Map();
  const item = map2.forEach((getItems, index) => {
    items = getItems.getItems("visible");
    if (items.length > 0) {
      const result = map.set(index, items);
    }
  });
  return map;
};
prototype2["getEmbeddedActivityDurationMs"] = function getEmbeddedActivityDurationMs(id, arg1) {
  value = map11.get("" + id + ":" + arg1);
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
prototype2["getShelfActivities"] = function getShelfActivities(embeddedActivityLocationGuildId) {
  let str = embeddedActivityLocationGuildId;
  if (embeddedActivityLocationGuildId == null) {
    str = "0";
  }
  value = map5.get(str);
  if (value == null) {
    value = items1;
  }
  return value;
};
prototype2["getShelfFetchStatus"] = function getShelfFetchStatus(arg0) {
  let str = arg0;
  if (arg0 == null) {
    str = "0";
  }
  return map6.get(str);
};
prototype2["shouldFetchShelf"] = function shouldFetchShelf(arg0) {
  let str = arg0;
  if (arg0 == null) {
    str = "0";
  }
  obj = map6.get(str);
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
    return embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(c29);
  }
};
prototype2["getConnectedActivityLocation"] = function getConnectedActivityLocation() {
  return c29;
};
prototype2["getActivityPanelMode"] = function getActivityPanelMode() {
  return PIP;
};
prototype2["getFocusedLayout"] = function getFocusedLayout() {
  return focusedActivityLayout;
};
prototype2["getCurrentEmbeddedActivity"] = function getCurrentEmbeddedActivity() {
  const selfEmbeddedActivityForLocation = this.getSelfEmbeddedActivityForLocation(this.getConnectedActivityLocation());
  return selfEmbeddedActivityForLocation;
};
prototype2["isProxyTicketRefreshing"] = function isProxyTicketRefreshing(arg0) {
  return set2.has(arg0);
};
prototype2["getEmbeddedActivityForUserId"] = function getEmbeddedActivityForUserId(author_id, id) {
  if (undefined !== id) {
    obj = map3[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp8 = _slicedToArray(tmp5, 2);
      [r10016, obj2] = tmp8;
      items = obj2.getItems("visible");
      for (const item10023 of items) {
        if (item10023.applicationId === arg1) {
          let userIds = tmp12.userIds;
          if (userIds.has(arg0)) {
            obj3.return();
            obj.return();
            break label0;
          }
          return item10023;
        }
        continue;
      }
      continue;
    }
  }
};
prototype2["hasActivityEverBeenLaunched"] = function hasActivityEverBeenLaunched(arg0) {
  const everLaunchedActivities = obj.everLaunchedActivities;
  return everLaunchedActivities.has(arg0);
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
  return layout;
};
EmbeddedActivitiesStoreClass.displayName = "EmbeddedActivitiesStore";
EmbeddedActivitiesStoreClass.persistKey = "EmbeddedActivities";
const items2 = [
  (arg0) => {
    obj = {};
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
    obj = {};
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
    obj = {};
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
      surfacesToShowNewActivityIndicator.add(Server.EmbeddedActivitySurfaces.VOICE_LAUNCHER);
    }
    delete tmp2[tmp];
    const merged = Object.assign(shouldShowNewActivityIndicator);
    return {};
  },
  (arg0) => {
    obj = {};
    const merged = Object.assign(arg0);
    obj.lastCheckedForBadgeableActivities = null;
    return obj;
  },
  (arg0) => {
    delete tmp2[tmp];
    obj = {};
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
    map2.clear();
    map1.clear();
    map3.clear();
    let item = guilds.forEach((activity_instances) => {
      activity_instances = activity_instances.activity_instances;
      if (activity_instances != null) {
        const item = activity_instances.forEach((item) => {
          closure_1_34(item);
        });
      }
    });
    const id = AuthenticationStore.getId();
    function _loop(iter) {
      embeddedActivitiesForLocationIncludingHidden = embeddedActivitiesForLocationIncludingHidden.getEmbeddedActivitiesForLocationIncludingHidden(iter.location);
      if (!embeddedActivitiesForLocationIncludingHidden.some((applicationId) => {
        let hasItem = applicationId.applicationId === iter.applicationId && applicationId.launchId === tmp.launchId;
        if (hasItem) {
          const userIds = applicationId.userIds;
          hasItem = userIds.has(iter);
        }
        return hasItem;
      })) {
        set.delete(iter.applicationId);
        const ComponentDispatch = iter(dependencyMap[13]).ComponentDispatch;
        ComponentDispatch.dispatch(constants.RELEASE_ACTIVITY_WEB_VIEW);
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
      const item = activity_instances.forEach((item) => {
        closure_1_34(item);
      });
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    value = map2.get(channel.id);
    items = undefined;
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
      value.removeWhere((location) => embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(location.location) === channel.id);
    }
    const item = items.forEach((location) => {
      set.delete(location.location.id);
    });
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function handleEmbeddedActivityLaunchStart(applicationId) {
    ({ componentId, commandOrigin, launchParams, inviterUserId } = applicationId);
    const result = map4.set("" + applicationId.applicationId + ":" + applicationId.channelId, { isLaunching: true, componentId, inviterUserId, launchParams });
    if (commandOrigin === ApplicationCommandTypes.CommandOrigin.APP_DMS_ENTRY_POINT_COMMAND_BUTTON) {
      let RESIZABLE = FocusedActivityLayouts.NO_CHAT;
    } else {
      RESIZABLE = FocusedActivityLayouts.RESIZABLE;
    }
    focusedActivityLayout = RESIZABLE;
  },
  EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET: function handleEmbeddedActivityLaunchSetProxyTicket(applicationId) {
    const combined = "" + applicationId.applicationId + ":" + applicationId.channelId;
    obj = map4;
    value = map4.get(combined);
    if (null != value) {
      obj = {};
      const merged = Object.assign(value);
      obj.proxyTicket = applicationId.proxyTicket;
      const result = obj.set(combined, obj);
    }
  },
  EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET: function handleEmbeddedActivityUpdateConnectedProxyTicket(applicationId) {
    applicationId = applicationId.applicationId;
    obj = map;
    value = map.get(applicationId);
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
      set2.add(applicationId);
    } else {
      set2.delete(applicationId);
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
    value = map.get(applicationId);
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
      obj = map;
      let str = activity.application_id;
      if (str == null) {
        str = "";
      }
      value = map.get(str);
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
    obj = map;
    value = map.get(applicationId.applicationId);
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
    value = map6.get(str);
    let lastFetchTimestampMs;
    if (value != null) {
      lastFetchTimestampMs = value.lastFetchTimestampMs;
    }
    const result = map6.set(str, { isFetching: true, lastFetchTimestampMs });
    obj.lastCheckedForBadgeableActivities = new Date(Date.now()).toISOString();
    const date = new Date(Date.now());
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function handleEmbeddedActivityFetchShelfSuccess(arg0) {
    ({ guildId, activities } = arg0);
    if (guildId == null) {
      guildId = "0";
    }
    const result = map5.set(guildId, activities);
    const timestamp = Date.now();
    obj = timestamp(1115);
    importDefault = getPlatformDefault(obj.getOS());
    obj.dateRangesForSurfaces = activities.reduce((acc, item) => {
      closure_1 = tmp;
      if (null != item.client_platform_config[closure_1].label_from) {
        if (null != tmp.label_until) {
          obj = { fromDate: null, untilDate: null };
          ({ label_from: obj.fromDate, label_until: obj.untilDate } = tmp);
          let _Date = Date;
          let date = new Date(tmp.label_from);
          const time = date.getTime();
          const _Date2 = Date;
          const date1 = new Date(tmp.label_until);
          if (!tmp2) {
            const _Object = Object;
            const values = Object.values(Server.EmbeddedActivitySurfaces);
            const found = values.filter((item) => {
              const omit_badge_from_surfaces = closure_1.omit_badge_from_surfaces;
              return !omit_badge_from_surfaces.includes(item);
            });
            item = found.forEach((item) => {
              let tmp3 = null == tmp2;
              if (!tmp3) {
                const _Date = Date;
                const date = new Date(tmp2.fromDate);
                tmp3 = date.getTime() < time;
              }
              if (tmp3) {
                acc[item] = obj;
              }
            });
          }
          return acc;
        }
      }
      return acc;
    }, {});
    const result1 = map6.set(guildId, { isFetching: false, lastFetchTimestampMs: timestamp });
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function handleEmbeddedActivityFetchShelfFail(guildId) {
    let str = guildId.guildId;
    if (str == null) {
      str = "0";
    }
    value = map6.get(str);
    let lastFetchTimestampMs;
    if (value != null) {
      lastFetchTimestampMs = value.lastFetchTimestampMs;
    }
    const result = map6.set(str, { isFetching: false, lastFetchTimestampMs });
  },
  EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function handleOrientationLockState(arg0) {
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
    PIP = activityPanelMode.activityPanelMode;
  },
  EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function handleSetFocusedLayout(focusedActivityLayout) {
    focusedActivityLayout = focusedActivityLayout.focusedActivityLayout;
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    if (null != c29) {
      const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(c29);
      let tmp6 = null != embeddedActivityLocationChannelId && embeddedActivityLocationChannelId !== tmp;
      if (tmp6) {
        tmp6 = PIP === ActivityPanelModes.PANEL;
      }
      if (tmp6) {
        PIP = ActivityPanelModes.PIP;
      }
    }
  },
  POPOUT_WINDOW_CLOSE: function handlePopoutWindowClose(key) {
    if (key.key === constants2.ACTIVITY_POPOUT) {
      PIP = ActivityPanelModes.PIP;
    }
  }
};
const embeddedActivitiesStoreClass = new EmbeddedActivitiesStoreClass(DispatcherDefault, obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/EmbeddedActivitiesStore.tsx");

export default embeddedActivitiesStoreClass;
export const FEATURED_ACTIVITY_IDS = set;
export const NO_ACTIVITIES = items;
export const NO_ACTIVITY_CONFIGS = items1;
export const ACTIVITIES_GUILD_ID_SENTINEL_FOR_PRIVATE_CHANNELS = "0";