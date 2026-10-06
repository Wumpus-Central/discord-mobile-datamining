// discord_app/modules/activities/EmbeddedActivitiesStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Server from "../../flow/Server.tsx";
import Constants2 from "Constants.tsx";
import embeddedActivityLocationUtils from "utils/embeddedActivityLocationUtils.tsx";
import ApplicationCommandTypes from "../application_commands/ApplicationCommandTypes.tsx";
import getPlatformDefault from "utils/getPlatform.tsx";
import getURLForApplicationDefault from "getURLForApplication.tsx";
import isVoiceEmbeddedActivityDefault from "utils/isVoiceEmbeddedActivity.tsx";
import ContentClassificationEmbeddedActivityFilterExperiment2 from "ContentClassificationEmbeddedActivityFilterExperiment.tsx";
import ContentClassificationReference from "../content_classification/ContentClassificationReference.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ActivityPanelConstants from "panel/ActivityPanelConstants.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let embeddedActivitiesForLocationIncludingHidden, importDefault, set3;

let c10;
let set1;
let unpackModuleId;
function participantFromServer(userId) {
  return { userId: userId.user_id, sessionId: userId.session_id, nonce: userId.nonce };
}
function updateEmbeddedActivities(content_classification) {
  let _location;
  let application_id;
  let closure_1;
  let composite_instance_id;
  let customId;
  let customId1;
  let launch_id;
  let participants;
  let proxyTicket;
  let proxyTicket1;
  let referrerId;
  let referrerId1;
  let set1;
  ({ application_id, launch_id, composite_instance_id, location: _location, participants } = content_classification);
  const mapped = participants.map(participantFromServer);
  content_classification = content_classification.content_classification;
  const tmp3 = getURLForApplicationDefault(application_id);
  if (null != tmp3) {
    let arr2;
    let sessionId;
    let launchParams;
    const obj19 = application_id(4504);
    const embeddedActivityLocationChannelId = obj19.getEmbeddedActivityLocationChannelId(_location);
    if (null != embeddedActivityLocationChannelId) {
      const value = map2.get(embeddedActivityLocationChannelId);
      items = undefined;
      if (value != null) {
        items = value.getItems("all");
      }
      arr2 = items;
    } else {
      arr2 = items;
    }
    const length = arr2.length;
    const value8 = map3.get(_location.id);
    items1 = undefined;
    if (value8 != null) {
      items1 = value8.getItems("all");
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
      sessionId = found1.sessionId;
    }
    mapped.some((item) => {
      obj = application_id(dependencyMap[12]);
      return obj.isActivityParticipantCurrentUserCurrentSession(item);
    });
    const value9 = map.get(application_id);
    let tmp12 = embeddedActivityLocationChannelId;
    const get = map4.get;
    if (embeddedActivityLocationChannelId == null) {
      tmp12 = null;
    }
    const _HermesInternal = HermesInternal;
    const value10 = get("" + application_id + ":" + tmp12);
    if (value10 != null) {
      launchParams = value10.launchParams;
    }
    obj = {
      applicationId: application_id,
      location: _location,
      launchId: launch_id,
      compositeInstanceId: composite_instance_id,
      url: tmp3,
      userIds: set1,
      participants: mapped,
      contentClassification: content_classification,
      referrerId: referrerId1,
      customId: customId1,
      proxyTicket: proxyTicket1,
    };
    const _Set = Set;
    const self = this;
    const self2 = this;
    referrerId1 = undefined;
    set1 = new Set(mapped1);
    if (value9 != null) {
      referrerId1 = value9.referrerId;
    }
    if (referrerId1 == null) {
      let referrerId2;
      if (launchParams != null) {
        referrerId2 = launchParams.referrerId;
      }
      referrerId1 = referrerId2;
    }
    customId1 = undefined;
    if (value9 != null) {
      customId1 = value9.customId;
    }
    if (customId1 == null) {
      let customId2;
      if (launchParams != null) {
        customId2 = launchParams.customId;
      }
      customId1 = customId2;
    }
    proxyTicket1 = undefined;
    if (value10 != null) {
      proxyTicket1 = value10.proxyTicket;
    }
    const tmp23 = someResult && null != value9;
    if (tmp23) {
      const applicationId = value9.applicationId;
      const obj3 = { proxyTicket };
      set = map.set;
      const merged = Object.assign(value9);
      const merged1 = Object.assign(obj);
      proxyTicket = obj.proxyTicket;
      if (proxyTicket == null) {
        proxyTicket = value9.proxyTicket;
      }
      const result = set(applicationId, obj3);
    }
    if (null != value9) {
      if (_location.id === value9.location.id) {
        if (application_id === value9.applicationId) {
          if (someResult) {
            let tmp58 = null;
            if (mapped1.length > 0) {
              tmp58 = obj;
            }
            id = _location.id;
            let value11 = map3.get(id);
            if (null == value11) {
              const self5 = this;
              if (typeof ActivityBucket === "function") {
                const merged2 = Object.assign({ items: null, cachedVisible: null, cachedHidden: null });
                merged2[0] = [];
                const result1 = map3.set(id, merged2);
                value11 = merged2;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            value11.upsert(application_id, _location.id, tmp58);
            const tmp70Result = application_id(4504);
            const embeddedActivityLocationChannelId1 = tmp70Result.getEmbeddedActivityLocationChannelId(_location);
            if (null != embeddedActivityLocationChannelId1) {
              let value12 = map2.get(embeddedActivityLocationChannelId1);
              if (null == value12) {
                const self6 = this;
                if (typeof ActivityBucket === "function") {
                  const merged3 = Object.assign({ items: null, cachedVisible: null, cachedHidden: null });
                  merged3[0] = [];
                  const result2 = map2.set(embeddedActivityLocationChannelId1, merged3);
                  value12 = merged3;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              value12.upsert(application_id, _location.id, tmp58);
              const tmp70Result4 = application_id(4504);
              let str5 = tmp70Result4.getEmbeddedActivityLocationGuildId(_location);
              if (str5 == null) {
                str5 = "0";
              }
              let value13 = map1.get(str5);
              if (null == value13) {
                const self7 = this;
                if (typeof ActivityBucket === "function") {
                  const merged4 = Object.assign({ items: null, cachedVisible: null, cachedHidden: null });
                  merged4[0] = [];
                  const result3 = map1.set(str5, merged4);
                  value13 = merged4;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              value13.upsert(application_id, _location.id, tmp58);
            }
          } else {
            const _Array = Array;
            Array.from(value9.userIds);
          }
          map.delete(value9.applicationId);
          const ComponentDispatch = application_id(1121).ComponentDispatch;
          ComponentDispatch.dispatch(constants.RELEASE_ACTIVITY_WEB_VIEW);
        }
      }
    }
    if (someResult) {
      if (sessionId === AuthenticationStore.getSessionId()) {
        let inviterUserId;
        let renderInFramePool;
        const tmp72 = null == found;
        ({ referrerId, customId } = obj);
        if (value10 != null) {
          inviterUserId = value10.inviterUserId;
        }
        const proxyTicket2 = obj.proxyTicket;
        if (launchParams != null) {
          renderInFramePool = launchParams.renderInFramePool;
        }
        const tmp34 = getURLForApplicationDefault(application_id);
        if (null != tmp34) {
          if (null != AuthenticationStore.getSessionId()) {
            const value14 = map.get(application_id);
            let id1;
            if (value14 != null) {
              id1 = value14.location.id;
            }
            if (id1 !== _location.id) {
              let guildId;
              const tmp70Result5 = application_id(4504);
              const embeddedActivityLocationChannelId2 = tmp70Result5.getEmbeddedActivityLocationChannelId(_location);
              const channel = ChannelStore.getChannel(embeddedActivityLocationChannelId2);
              if (channel != null) {
                guildId = channel.getGuildId();
              }
              if (null != UserStore.getCurrentUser()) {
                if (null != guildId) {
                  const obj7 = {
                    applicationId: application_id,
                    url: tmp34,
                    userIds: set3,
                    participants: mapped,
                    connectedSince: Date.now(),
                    launchId: launch_id,
                    compositeInstanceId: composite_instance_id,
                    location: _location,
                    referrerId,
                    customId,
                    proxyTicket: proxyTicket2,
                    renderInFramePool,
                  };
                  const _Set2 = Set;
                  const self3 = this;
                  const self4 = this;
                  const tmp39 = 0 === length;
                  const _Date = Date;
                  set3 = new Set(mapped.map((userId) => userId.userId));
                  const result4 = map.set(application_id, obj7);
                  const ComponentDispatch2 = application_id(1121).ComponentDispatch;
                  const obj8 = {
                    location: _location,
                    applicationId: application_id,
                    isFirstActivityInChannel: tmp39,
                    isStart: tmp72,
                    participants: mapped,
                    embeddedActivity: obj7,
                    inviterUserId,
                  };
                  ComponentDispatch2.dispatch(constants.OPEN_EMBEDDED_ACTIVITY, obj8);
                  application_id(9084);
                  if (true === renderInFramePool) {
                    let PIP = ActivityPanelModes.DISCONNECTED;
                  } else if (tmp46) {
                    PIP = ActivityPanelModes.ACTIVITY_POPOUT_WINDOW;
                    const tmpResult = DispatcherDefault;
                    tmpResult.wait(() => {
                      obj = closure_1(dependencyMap[15]);
                      obj.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" });
                    });
                  } else {
                    if (embeddedActivityLocationChannelId2 === SelectedChannelStore.getChannelId()) {
                      if (!isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId2)) {
                        PIP = ActivityPanelModes.PANEL;
                      }
                    }
                    PIP = ActivityPanelModes.PIP;
                  }
                  const _HermesInternal2 = HermesInternal;
                  const _Date2 = Date;
                  set2 = map11.set;
                  const combined = "" + _location.id + ":" + application_id;
                  set2(combined, Date.now());
                } else if (channel != null) {
                  channel.isPrivate();
                }
              }
            }
          }
        }
      }
      let tmp56 = embeddedActivityLocationChannelId;
      if (embeddedActivityLocationChannelId == null) {
        tmp56 = null;
      }
      const _HermesInternal3 = HermesInternal;
      map4.delete("" + application_id + ":" + tmp56);
    }
  }
}
const ActivityPopoutWindowLayouts = Constants2.ActivityPopoutWindowLayouts;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const FocusedActivityLayouts = ActivityPanelConstants.FocusedActivityLayouts;
({ ComponentActions: c10, PopoutWindowKeys: unpackModuleId } = Constants);
let set = new Set([]);
let obj = {
  everLaunchedActivities: set1,
  seenNewActivities: {},
  seenUpdatedActivities: {},
  lastCheckedForBadgeableActivities: null,
  dateRangesForSurfaces: {},
};
set1 = new Set();
let items = [];
let items1 = [];
class ActivityBucket {
  constructor() {
    const merged = Object.assign({ items: null, cachedVisible: null, cachedHidden: null });
    merged[0] = [];
    return merged;
  }
  upsert(arg0, arg1, arg2) {
    const self = this;
    let closure_0 = arg0;
    let closure_1 = arg1;
    items = this.items;
    this.items = items.filter(
      (applicationId) => !(applicationId.applicationId === closure_0 && applicationId.location.id === closure_1),
    );
    if (null != arg2) {
      items1 = self.items;
      items1.push(arg2);
    }
    self.invalidate();
  }
  removeWhere(arg0) {
    let closure_0 = arg0;
    items = this.items;
    this.items = items.filter((item) => !closure_0(item));
    this.invalidate();
  }
  clear() {
    this.items = [];
    this.invalidate();
  }
  getItems(arg0) {
    const self = this;
    const ContentClassificationEmbeddedActivityFilterExperiment =
      ContentClassificationEmbeddedActivityFilterExperiment2.ContentClassificationEmbeddedActivityFilterExperiment;
    if (
      ContentClassificationEmbeddedActivityFilterExperiment.getConfig({ location: "embedded_activity_store" }).enabled
    ) {
      if ("all" !== arg0) {
        if ("visible" === arg0) {
          let cachedVisible = self.cachedVisible;
          if (cachedVisible == null) {
            items = self.items;
            const found = items.filter((contentClassification) => {
              obj = ContentClassificationReference;
              return !obj.isAgeRestrictedClassificationReference(contentClassification.contentClassification);
            });
            self.cachedVisible = found;
            cachedVisible = found;
          }
          return cachedVisible;
        } else if ("hidden" === arg0) {
          let cachedHidden = self.cachedHidden;
          if (cachedHidden == null) {
            items1 = self.items;
            const found1 = items1.filter((contentClassification) => {
              obj = ContentClassificationReference;
              return obj.isAgeRestrictedClassificationReference(contentClassification.contentClassification);
            });
            self.cachedHidden = found1;
            cachedHidden = found1;
          }
          return cachedHidden;
        }
      }
    }
    return self.items;
  }
  invalidate() {
    this.cachedVisible = null;
    this.cachedHidden = null;
  }
}
const prototype = ActivityBucket.prototype;
let map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const map4 = new Map();
let set2 = new Set();
const map5 = new Map();
const map6 = new Map();
const map7 = new Map();
const map8 = new Map();
const map9 = new Map();
const map10 = new Map();
const map11 = new Map();
let c29;
let DISCONNECTED = ActivityPanelModes.DISCONNECTED;
let RESIZABLE = FocusedActivityLayouts.RESIZABLE;
let NORMAL = ActivityPopoutWindowLayouts.NORMAL;
const PersistedStore = get_initializedDefault.PersistedStore;
class EmbeddedActivitiesStoreClass extends PersistedStore {
  initialize(everLaunchedActivities) {
    this.waitFor(AuthenticationStore, ChannelStore, SelectedChannelStore, UserStore);
    let prop;
    const _Set = Set;
    if (everLaunchedActivities != null) {
      prop = everLaunchedActivities.everLaunchedActivities;
    }
    if (prop == null) {
      prop = [];
    }
    const _Set1 = new _Set(prop);
    if (null != everLaunchedActivities) {
      const merged = Object.assign(everLaunchedActivities);
    }
  }
  getState() {
    return obj;
  }
  getSelfEmbeddedActivityForChannel(currentClientVoiceChannelId) {
    let closure_0 = currentClientVoiceChannelId;
    let tmp = null;
    if (null != currentClientVoiceChannelId) {
      const _Array = Array;
      const arr = Array.from(map.values());
      let found = arr.find((location) => {
        obj = embeddedActivityLocationUtils;
        return obj.getEmbeddedActivityLocationChannelId(location.location) === currentClientVoiceChannelId;
      });
      if (found == null) {
        found = null;
      }
      tmp = found;
    }
    return tmp;
  }
  getSelfEmbeddedActivityForLocation(connectedActivityLocation) {
    let closure_0 = connectedActivityLocation;
    let tmp = null;
    if (null != connectedActivityLocation) {
      const _Array = Array;
      const arr = Array.from(map.values());
      let found = arr.find((location) => location.location.id === id.id);
      if (found == null) {
        found = null;
      }
      tmp = found;
    }
    return tmp;
  }
  getSelfEmbeddedActivities() {
    return map;
  }
  getEmbeddedActivitiesForGuild(guildId) {
    const value = map1.get(guildId);
    items = undefined;
    if (value != null) {
      items = value.getItems("visible");
    }
    return items;
  }
  getEmbeddedActivitiesForChannel(id) {
    const value = map2.get(id);
    items = undefined;
    if (value != null) {
      items = value.getItems("visible");
    }
    return items;
  }
  getEmbeddedActivitiesForLocation(id) {
    const value = map3.get(id.id);
    items = undefined;
    if (value != null) {
      items = value.getItems("visible");
    }
    return items;
  }
  getEmbeddedActivitiesForGuildIncludingHidden(arg0) {
    const value = map1.get(arg0);
    items = undefined;
    if (value != null) {
      items = value.getItems("all");
    }
    return items;
  }
  getEmbeddedActivitiesForChannelIncludingHidden(id) {
    const value = map2.get(id);
    items = undefined;
    if (value != null) {
      items = value.getItems("all");
    }
    return items;
  }
  getEmbeddedActivitiesForLocationIncludingHidden(location) {
    const value = map3.get(location.id);
    items = undefined;
    if (value != null) {
      items = value.getItems("all");
    }
    return items;
  }
  getEmbeddedActivitiesByChannel() {
    map = new Map();
    const item = map2.forEach((getItems, index) => {
      items = getItems.getItems("visible");
      if (items.length > 0) {
        const result = map.set(index, items);
      }
    });
    return map;
  }
  getEmbeddedActivityDurationMs(id, c0) {
    const value = map11.get("" + id + ":" + c0);
    let diff = null;
    if (null != value) {
      const _Date = Date;
      diff = Date.now() - value;
    }
    return diff;
  }
  isLaunchingActivity() {
    return map4.size > 0;
  }
  getShelfActivities(c0) {
    let str = c0;
    if (c0 == null) {
      str = "0";
    }
    let value = map5.get(str);
    if (value == null) {
      value = items1;
    }
    return value;
  }
  getShelfFetchStatus(c0) {
    let str = c0;
    if (c0 == null) {
      str = "0";
    }
    return map6.get(str);
  }
  shouldFetchShelf(c0) {
    let str = c0;
    if (c0 == null) {
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
    return !isFetching && diff > 21600000;
  }
  getOrientationLockStateForApp(applicationId) {
    return map7.get(applicationId);
  }
  getPipOrientationLockStateForApp(applicationId) {
    let orientationLockStateForApp = map8.get(applicationId);
    if (orientationLockStateForApp == null) {
      const self = this;
      orientationLockStateForApp = this.getOrientationLockStateForApp(applicationId);
    }
    return orientationLockStateForApp;
  }
  getGridOrientationLockStateForApp(applicationId) {
    let orientationLockStateForApp = map9.get(applicationId);
    if (orientationLockStateForApp == null) {
      orientationLockStateForApp = map8.get(applicationId);
    }
    if (orientationLockStateForApp == null) {
      const self = this;
      orientationLockStateForApp = this.getOrientationLockStateForApp(applicationId);
    }
    return orientationLockStateForApp;
  }
  getLayoutModeForApp(id) {
    return map10.get(id);
  }
  getConnectedActivityChannelId() {
    if (null != c29) {
      obj = embeddedActivityLocationUtils;
      return obj.getEmbeddedActivityLocationChannelId(c29);
    }
  }
  getConnectedActivityLocation() {
    return c29;
  }
  getActivityPanelMode() {
    return DISCONNECTED;
  }
  getFocusedLayout() {
    return RESIZABLE;
  }
  getCurrentEmbeddedActivity() {
    const selfEmbeddedActivityForLocation = this.getSelfEmbeddedActivityForLocation(
      this.getConnectedActivityLocation(),
    );
    return selfEmbeddedActivityForLocation;
  }
  isProxyTicketRefreshing(arg0) {
    return set2.has(arg0);
  }
  getEmbeddedActivityForUserId(author_id, id) {
    let obj2;
    if (undefined !== id) {
      obj = map3[Symbol.iterator]();
      label0: while (obj !== undefined) {
        let tmp8 = _slicedToArray(tmp5, 2);
        [r10016, obj2] = tmp8;
        items = obj2.getItems("visible");
        for (const item10023 of items) {
          if (item10023.applicationId === id) {
            let userIds = tmp12.userIds;
            if (userIds.has(author_id)) {
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
  }
  hasActivityEverBeenLaunched(c1) {
    const everLaunchedActivities = obj.everLaunchedActivities;
    return everLaunchedActivities.has(c1);
  }
  getLaunchState(applicationId, id) {
    if (null != applicationId) {
      let tmp = id;
      const get = map4.get;
      if (id == null) {
        tmp = null;
      }
      const _HermesInternal = HermesInternal;
      return get("" + applicationId + ":" + tmp);
    }
  }
  getLaunchStates() {
    return map4;
  }
  getActivityPopoutWindowLayout() {
    return NORMAL;
  }
}
const prototype2 = EmbeddedActivitiesStoreClass.prototype;
EmbeddedActivitiesStoreClass.displayName = "EmbeddedActivitiesStore";
EmbeddedActivitiesStoreClass.persistKey = "EmbeddedActivities";
const items2 = [
  (arg0) => {
    obj = { seenFeaturedActivities: [], shouldShowNewActivityIndicator: false };
    const merged = Object.assign(arg0);
    return obj;
  },
  (arg0) => {
    delete arg0["seenFeaturedActivities"];
    obj = {};
    const merged = Object.assign(arg0);
    return obj;
  },
  (arg0) => {
    delete arg0["seenActivities"];
    obj = {};
    const merged = Object.assign(arg0);
    return obj;
  },
  (arg0) => {
    delete arg0["currentFreeActivity"];
    delete arg0["lastFreeActivityRotationTimestampMs"];
    delete arg0["freePeriodActivities"];
    delete arg0["shouldShowFreeActivityIndicator"];
    obj = {};
    const merged = Object.assign(arg0);
    return obj;
  },
  (arg0) => {
    obj = { seenNewActivities: {}, seenUpdatedActivities: {} };
    const merged = Object.assign(arg0);
    return obj;
  },
  (everLaunchedActivities) => {
    let prop = everLaunchedActivities.everLaunchedActivities;
    const _Set = Set;
    if (prop == null) {
      prop = [];
    }
    const _Set1 = new _Set(prop);
    obj = { everLaunchedActivities: _Set1 };
    const merged = Object.assign(everLaunchedActivities);
    return obj;
  },
  (arg0) => {
    delete arg0["usersHavePlayedByApp"];
    obj = {};
    const merged = Object.assign(arg0);
    return obj;
  },
  (shouldShowNewActivityIndicator) => {
    shouldShowNewActivityIndicator.surfacesToShowNewActivityIndicator = new Set();
    new Set();
    const tmp = shouldShowNewActivityIndicator;
    if (shouldShowNewActivityIndicator.shouldShowNewActivityIndicator) {
      const surfacesToShowNewActivityIndicator = shouldShowNewActivityIndicator.surfacesToShowNewActivityIndicator;
      surfacesToShowNewActivityIndicator.add(Server.EmbeddedActivitySurfaces.VOICE_LAUNCHER);
    }
    delete tmp["shouldShowNewActivityIndicator"];
    obj = {};
    const merged = Object.assign(shouldShowNewActivityIndicator);
    return obj;
  },
  (arg0) => {
    obj = { lastCheckedForBadgeableActivities: null };
    const merged = Object.assign(arg0);
    return obj;
  },
  (arg0) => {
    delete arg0["surfacesToShowNewActivityIndicator"];
    obj = { dateRangesForSurfaces: {} };
    const merged = Object.assign(arg0);
    return obj;
  },
];
EmbeddedActivitiesStoreClass.migrations = items2;
const obj2 = {
  ACTIVITY_LAYOUT_MODE_UPDATE: function handleActivityLayoutModeUpdate(applicationId) {
    const result = map10.set(applicationId.applicationId, applicationId.layoutMode);
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpen(guilds) {
    let closure_0;
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
    id = AuthenticationStore.getId();
    function _loop(iter) {
      embeddedActivitiesForLocationIncludingHidden =
        embeddedActivitiesForLocationIncludingHidden.getEmbeddedActivitiesForLocationIncludingHidden(iter.location);
      if (
        !embeddedActivitiesForLocationIncludingHidden.some((applicationId) => {
          let hasItem = applicationId.applicationId === iter.applicationId && applicationId.launchId === tmp.launchId;
          if (hasItem) {
            const userIds = applicationId.userIds;
            hasItem = userIds.has(iter);
          }
          return hasItem;
        })
      ) {
        set.delete(iter.applicationId);
        const ComponentDispatch = iter(dependencyMap[13]).ComponentDispatch;
        ComponentDispatch.dispatch(constants.RELEASE_ACTIVITY_WEB_VIEW);
      }
    }
    const arr = Array.from(map.values());
    const iter = arr[Symbol.iterator]();
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
    const value = map2.get(channel.id);
    items = undefined;
    if (value != null) {
      items = value.getItems("all");
    }
    map2.delete(channel.id);
    let str2 = channel.guild_id;
    if (str2 == null) {
      str2 = "0";
    }
    const value2 = map1.get(str2);
    if (value2 != null) {
      value2.removeWhere((location) => {
        obj = embeddedActivityLocationUtils;
        return obj.getEmbeddedActivityLocationChannelId(location.location) === channel.id;
      });
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
    const result = map4.set("" + applicationId.applicationId + ":" + applicationId.channelId, {
      isLaunching: true,
      componentId,
      inviterUserId,
      launchParams,
    });
    if (commandOrigin === ApplicationCommandTypes.CommandOrigin.APP_DMS_ENTRY_POINT_COMMAND_BUTTON) {
      RESIZABLE = FocusedActivityLayouts.NO_CHAT;
    } else {
      RESIZABLE = FocusedActivityLayouts.RESIZABLE;
    }
  },
  EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET: function handleEmbeddedActivityLaunchSetProxyTicket(proxyTicket) {
    proxyTicket = proxyTicket.proxyTicket;
    const combined = "" + proxyTicket.applicationId + ":" + proxyTicket.channelId;
    const value = map4.get(combined);
    if (null != value) {
      obj = { proxyTicket };
      set = map4.set;
      const merged = Object.assign(value);
      const result = set(combined, obj);
    }
  },
  EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET: function handleEmbeddedActivityUpdateConnectedProxyTicket(
    applicationId,
  ) {
    applicationId = applicationId.applicationId;
    const proxyTicket = applicationId.proxyTicket;
    const value = map.get(applicationId);
    if (null == value) {
      return false;
    } else {
      obj = { proxyTicket };
      set = map.set;
      const merged = Object.assign(value);
      const result = set(applicationId, obj);
    }
  },
  EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING: function handleEmbeddedActivitySetProxyTicketRefreshing(
    applicationId,
  ) {
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
    const value = map.get(applicationId);
    map.delete(applicationId);
    id = undefined;
    if (value != null) {
      id = value.location.id;
    }
    let id1;
    if (id != null) {
      id1 = id.id;
    }
    if (id === id1) {
      id = undefined;
    }
  },
  EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: function handleUpdatePopoutWindowLayout(layout) {
    NORMAL = layout.layout;
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function handleEmbeddedActivityUpdateV2(instance) {
    updateEmbeddedActivities(instance.instance);
  },
  LOCAL_ACTIVITY_UPDATE: function handleLocalActivityUpdate(activity) {
    activity = activity.activity;
    if (null == activity) {
      return false;
    } else {
      let str = activity.application_id;
      const get = map.get;
      if (str == null) {
        str = "";
      }
      const value = get(str);
      if (null == value) {
        return false;
      } else {
        const applicationId = value.applicationId;
        obj = {};
        set = map.set;
        const merged = Object.assign(value);
        const result = set(applicationId, obj);
      }
    }
  },
  EMBEDDED_ACTIVITY_SET_CONFIG: function handleSetSelfEmbeddedActivityConfig(config) {
    config = config.config;
    const value = map.get(config.applicationId);
    if (null != value) {
      const applicationId = value.applicationId;
      obj = { config };
      set = map.set;
      const merged = Object.assign(value);
      const result = set(applicationId, obj);
    }
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF: function handleEmbeddedActivityFetchShelf(guildId) {
    let str = guildId.guildId;
    if (str == null) {
      str = "0";
    }
    const value = map6.get(str);
    let lastFetchTimestampMs;
    set = map6.set;
    if (value != null) {
      lastFetchTimestampMs = value.lastFetchTimestampMs;
    }
    const result = set(str, { isFetching: true, lastFetchTimestampMs });
    const date = new Date(Date.now());
    obj.lastCheckedForBadgeableActivities = date.toISOString();
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
    let tmp3 = getPlatformDefault;
    obj = timestamp(1369);
    importDefault = tmp3(obj.getOS());
    obj.dateRangesForSurfaces = activities.reduce(function (acc, item) {
      let closure_0 = acc;
      closure_1 = tmp;
      if (null != item.client_platform_config[closure_1].label_from) {
        if (null != item.client_platform_config[closure_1].label_until) {
          obj = { fromDate: null, untilDate: null };
          ({ label_from: obj.fromDate, label_until: obj.untilDate } = item.client_platform_config[closure_1]);
          let _Date = Date;
          let self = this;
          let self2 = this;
          let date = new Date(tmp.label_from);
          const time = date.getTime();
          const _Date2 = Date;
          const self3 = this;
          const self4 = this;
          const date1 = new Date(item.client_platform_config[closure_1].label_until);
          const tmp2 = time > timestamp || date1.getTime() < timestamp;
          if (!tmp2) {
            const _Object = Object;
            const values = Object.values(Server.EmbeddedActivitySurfaces);
            const found = values.filter((item) => {
              const omit_badge_from_surfaces = closure_1.omit_badge_from_surfaces;
              return !omit_badge_from_surfaces.includes(item);
            });
            item = found.forEach(function (item) {
              let tmp3 = null == tmp2;
              if (!tmp3) {
                const _Date = Date;
                const self = this;
                const self2 = this;
                const date = new Date(closure_0[item].fromDate);
                tmp3 = date.getTime() < time;
              }
              if (tmp3) {
                closure_0[item] = obj;
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
    const value = map6.get(str);
    let lastFetchTimestampMs;
    set = map6.set;
    if (value != null) {
      lastFetchTimestampMs = value.lastFetchTimestampMs;
    }
    const result = set(str, { isFetching: false, lastFetchTimestampMs });
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
    DISCONNECTED = activityPanelMode.activityPanelMode;
  },
  EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function handleSetFocusedLayout(focusedActivityLayout) {
    RESIZABLE = focusedActivityLayout.focusedActivityLayout;
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    if (null != c29) {
      obj = embeddedActivityLocationUtils;
      const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(c29);
      const tmp6 =
        null != embeddedActivityLocationChannelId &&
        embeddedActivityLocationChannelId !== tmp &&
        DISCONNECTED === ActivityPanelModes.PANEL;
      if (tmp6) {
        DISCONNECTED = ActivityPanelModes.PIP;
      }
    }
  },
  POPOUT_WINDOW_CLOSE: function handlePopoutWindowClose(key) {
    if (key.key === unpackModuleId.ACTIVITY_POPOUT) {
      DISCONNECTED = ActivityPanelModes.PIP;
    }
  },
};
const embeddedActivitiesStoreClass = new EmbeddedActivitiesStoreClass(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/activities/EmbeddedActivitiesStore.tsx");

export default embeddedActivitiesStoreClass;
export const FEATURED_ACTIVITY_IDS = set;
export const NO_ACTIVITIES = items;
export const NO_ACTIVITY_CONFIGS = items1;
export const ACTIVITIES_GUILD_ID_SENTINEL_FOR_PRIVATE_CHANNELS = "0";
