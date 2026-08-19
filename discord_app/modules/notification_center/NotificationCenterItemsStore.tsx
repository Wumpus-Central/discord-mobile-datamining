// === Module 4801: _validate ===

// Module 4801 (_validate)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import NotificationCenterScenes from "NotificationCenterScenes" /* 4802 */;
import createMinimalMessageRecord from "createMinimalMessageRecord" /* 4803 */;
import getHash from "getHash" /* 4288 */;
import { isGuildEventEnded } from "scheduledEventSort" /* 4370 */;
import hasFlag from "hasFlag" /* 4031 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { RelationshipTypes } from "ME" /* 676 */;

require = fn;
function _validate(id) {
  return null != id.id && null != id.type;
}
function toNotificationCenterItem(item_enum) {
  let tmp3 = item_enum.item_enum === NotificationCenterScenes.ItemEnum.FIRST_MESSAGE;
  if (tmp3) {
    tmp3 = item_enum.type === NotificationCenterScenes.NotificationCenterItems.LIFECYCLE_ITEM;
  }
  if (tmp3) {
    item_enum.deeplink = "https://discord.com/feature/composeMessage";
  }
  obj = {};
  const merged = Object.assign(item_enum);
  obj.kind = "notification-center-item";
  let messageRecord;
  if (null != item_enum.message) {
    messageRecord = createMinimalMessageRecord.createMessageRecord(item_enum.message);
    const tmpResult = createMinimalMessageRecord;
  }
  obj.message = messageRecord;
  let id;
  if (null != item_enum.application) {
    id = item_enum.application.id;
  }
  obj.applicationId = id;
  return obj;
}
function handleAddItem(type) {
  if ("NOTIFICATION_CENTER_ITEM_CREATE" === type.type) {
    const item2 = type.item;
    let tmp3 = item2.item_enum === NotificationCenterScenes.ItemEnum.FIRST_MESSAGE;
    if (tmp3) {
      tmp3 = item2.type === NotificationCenterScenes.NotificationCenterItems.LIFECYCLE_ITEM;
    }
    if (tmp3) {
      item2.deeplink = "https://discord.com/feature/composeMessage";
    }
    obj = {};
    const merged = Object.assign(item2);
    obj.kind = "notification-center-item";
    let messageRecord;
    if (null != item2.message) {
      messageRecord = createMinimalMessageRecord.createMessageRecord(item2.message);
      const tmpResult = createMinimalMessageRecord;
    }
    obj.message = messageRecord;
    let id;
    if (null != item2.application) {
      id = item2.application.id;
    }
    obj.applicationId = id;
    let item = obj;
  } else {
    item = type.item;
  }
  if (obj.initialized) {
    if (tmp11) {
      const notifCenterIds = obj.notifCenterIds;
      if (!notifCenterIds.has(item.id)) {
        const notifCenterIds2 = obj.notifCenterIds;
        notifCenterIds2.add(item.id);
        const items = [item];
        HermesBuiltin.arraySpread(obj.notifCenterItems, 1);
        obj.notifCenterItems = items;
        const notifCenterItems = obj.notifCenterItems;
        const sorted = notifCenterItems.sort((id, id2) => callback(table[9]).compare(id2.id, id.id));
      }
    }
    tmp11 = null != item.id && null != item.type;
  }
  return false;
}
function handleRelationshipAddOrUpdate(relationship) {
  relationship = relationship.relationship;
  c1 = undefined;
  user = undefined;
  ({ id: c1, type, userIgnored, user } = relationship);
  const since = relationship.since;
  if (type === RelationshipTypes.PENDING_INCOMING) {
    if (!relationship.isSpamRequest) {
      if (!userIgnored) {
        if (null == since) {
          return null;
        } else if (null != user) {
          user = authStore.getUser(user.id);
          if (null != user) {
            const items = [];
            obj = relationship(user[8]);
            items[HermesBuiltin.arraySpread(obj.notifCenterLocalItems, 0)] = obj.incomingFriendRequestLocalItem(user, since, tmp);
            obj.notifCenterLocalItems = items;
            const arraySpreadResult = HermesBuiltin.arraySpread(obj.notifCenterLocalItems, 0);
          }
        }
      }
    }
  }
  let tmp11 = type !== RelationshipTypes.FRIEND;
  if (!tmp11) {
    tmp11 = null == relationship.user;
  }
  if (!tmp11) {
    tmp11 = userIgnored;
  }
  if (!tmp11) {
    const prop = obj.notifCenterLocalItems;
    obj.notifCenterLocalItems = prop.map((item, index) => {
      let tmp4 = item.type === relationship(user[6]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
      if (tmp4) {
        const other_user = item.other_user;
        let id;
        if (other_user != null) {
          id = other_user.id;
        }
        tmp4 = id === tmp3;
      }
      let tmp7 = item;
      if (tmp4) {
        obj = {};
        const merged = Object.assign(item);
        obj.acked = true;
        obj.forceUnacked = false;
        const _HermesInternal = HermesInternal;
        obj.local_id = "incoming_friend_requests_accepted_" + user.id + "_" + item.id;
        obj.type = relationship(user[6]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED;
        tmp7 = obj;
      }
      return tmp7;
    });
  }
  if (tmp14) {
    const prop1 = obj.notifCenterLocalItems;
    obj.notifCenterLocalItems = prop1.filter((item, index) => {
      let tmp4 = item.type === relationship(user[6]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
      if (tmp4) {
        const other_user = item.other_user;
        let id;
        if (other_user != null) {
          id = other_user.id;
        }
        tmp4 = id === c1;
      }
      if (!tmp4) {
        let tmp7 = item.type === relationship(user[6]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED;
        if (tmp7) {
          const other_user2 = item.other_user;
          let id1;
          if (other_user2 != null) {
            id1 = other_user2.id;
          }
          tmp7 = id1 === c1;
        }
        tmp4 = tmp7;
      }
      if (!tmp4) {
        let tmp10 = item.type === relationship(user[6]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
        if (tmp10) {
          const other_user3 = item.other_user;
          let id2;
          if (other_user3 != null) {
            id2 = other_user3.id;
          }
          tmp10 = id2 === c1;
        }
        tmp4 = tmp10;
      }
      if (!tmp4) {
        let tmp13 = item.type === relationship(user[6]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
        if (tmp13) {
          const other_user4 = item.other_user;
          let id3;
          if (other_user4 != null) {
            id3 = other_user4.id;
          }
          tmp13 = id3 === c1;
        }
        tmp4 = tmp13;
      }
      return !tmp4;
    });
  }
  tmp14 = type === RelationshipTypes.BLOCKED || userIgnored;
}
let obj = { loading: false, initialized: false, errored: false, isDataStale: false, notifCenterItems: [], staleNotifCenterItems: [], notifCenterIds: new Set(), notifCenterLocalItems: [], paginationHasMore: true, paginationCursor: "PX_16", notifCenterActive: 2087, notifCenterTabFocused: 2088 };
const PersistedStore = initializeDefault.PersistedStore;
class NotificationCenterItemsStore extends PersistedStore {
}
const prototype = NotificationCenterItemsStore.prototype;
prototype["initialize"] = function initialize(notifCenterItems) {
  this.waitFor(closure_7, closure_6, closure_3);
  if (null != notifCenterItems) {
    notifCenterItems = notifCenterItems.notifCenterItems;
    const mapped = notifCenterItems.map((item, index) => {
      obj = {};
      const merged = Object.assign(item);
      let tmp2;
      if (null != item.message) {
        tmp2 = new closure_5(item.message);
      }
      obj.message = tmp2;
      return obj;
    });
    if (mapped.length > 0) {
      obj = {};
      let merged = Object.assign(obj);
      obj.initialized = true;
      obj.isDataStale = true;
      obj.notifCenterItems = [];
      obj.staleNotifCenterItems = mapped;
    }
  }
};
prototype["getState"] = function getState() {
  function pack(item, index) {
    obj = {};
    const merged = Object.assign(item);
    let toJSResult;
    if (null != item.message) {
      const message = item.message;
      toJSResult = message.toJS();
    }
    obj.message = toJSResult;
    return obj;
  }
  obj = {};
  let merged = Object.assign(obj);
  const notifCenterItems = obj.notifCenterItems;
  obj.notifCenterItems = notifCenterItems.map(pack);
  const prop = obj.staleNotifCenterItems;
  obj.staleNotifCenterItems = prop.map(pack);
  return obj;
};
Object.defineProperty(prototype, "loading", {
  get: function loading() {
    return obj.loading;
  },
  set: undefined
});
Object.defineProperty(prototype, "initialized", {
  get: function initialized() {
    return obj.initialized;
  },
  set: undefined
});
Object.defineProperty(prototype, "items", {
  get: function items() {
    return obj.isDataStale ? obj.staleNotifCenterItems : obj.notifCenterItems;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasMore", {
  get: function hasMore() {
    return obj.paginationHasMore;
  },
  set: undefined
});
Object.defineProperty(prototype, "cursor", {
  get: function cursor() {
    return obj.paginationCursor;
  },
  set: undefined
});
Object.defineProperty(prototype, "errored", {
  get: function errored() {
    return obj.errored;
  },
  set: undefined
});
Object.defineProperty(prototype, "active", {
  get: function active(BRAND_500) {
    return obj.notifCenterActive;
  },
  set: undefined
});
Object.defineProperty(prototype, "localItems", {
  get: function localItems() {
    return obj.notifCenterLocalItems;
  },
  set: undefined
});
Object.defineProperty(prototype, "tabFocused", {
  get: function tabFocused() {
    return obj.notifCenterTabFocused;
  },
  set: undefined
});
NotificationCenterItemsStore.displayName = "NotificationCenterItemsStore";
NotificationCenterItemsStore.persistKey = "NotificationCenterItemsStore_v2";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen(relationships) {
    const items = [];
    const set = new Set();
    relationships = relationships.relationships;
    let item = relationships.forEach((item, index) => {
      ({ id, since, user_ignored, type, is_spam_request, origin_application_id } = item);
      if (user_ignored) {
        set.add(id);
      }
      if (type === RelationshipTypes.PENDING_INCOMING) {
        if (!is_spam_request) {
          if (!user_ignored) {
            if (null != since) {
              const user = closure_1_7.getUser(id);
              if (null == user) {
                return null;
              } else {
                items.push(items(dependencyMap[8]).incomingFriendRequestLocalItem(user, since, origin_application_id));
                obj = items(dependencyMap[8]);
              }
            }
          }
        }
      }
      return null;
    });
    const gameRelationships = relationships.gameRelationships;
    const item1 = gameRelationships.forEach((item, index) => {
      const id = item.id;
      if (item.type === RelationshipTypes.PENDING_INCOMING) {
        if (!set.has(id)) {
          const user = closure_1_7.getUser(id);
          if (null != user) {
            items.push(items(dependencyMap[8]).incomingGameFriendRequestLocalItem(user, tmp2, tmp));
            obj = items(dependencyMap[8]);
          }
        }
      }
    });
    const guilds = relationships.guilds;
    const item2 = guilds.forEach((item, index) => {
      const prop = item.guild_scheduled_events;
      item = prop.forEach((item, index) => {
        closure_0 = item;
        if (callback(item)) {
          notifCenterItems = notifCenterItems.notifCenterItems;
          notifCenterItems.notifCenterItems = notifCenterItems.map((item, index) => {
            let tmp = item;
            if (item.type === item(closure_1_2[6]).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED) {
              tmp = item;
              if (item.guild_scheduled_event_id === item.id) {
                obj = {};
                const merged = Object.assign(item);
                obj.disable_action = true;
                tmp = obj;
              }
            }
            return tmp;
          });
        }
      });
    });
    obj.notifCenterLocalItems = items;
  },
  LOGOUT() {
    let flag = {}.keepLocalItems;
    if (flag === undefined) {
      flag = false;
    }
    obj = { loading: false, initialized: false, errored: false, isDataStale: false, notifCenterItems: [], staleNotifCenterItems: [], notifCenterIds: new Set(), notifCenterLocalItems: null, paginationHasMore: true, paginationCursor: "PX_16", notifCenterActive: 2087, notifCenterTabFocused: 2088 };
    if (flag) {
      let prop = obj.notifCenterLocalItems;
    } else {
      prop = [];
    }
    obj[7] = prop;
  },
  NOTIFICATION_CENTER_ITEMS_ACK: function handleAck(ids) {
    ids = ids.ids;
    c1 = true;
    const notifCenterItems = obj.notifCenterItems;
    const mapped = notifCenterItems.map((item, index) => {
      let tmp = item;
      if (ids.includes(item.id)) {
        obj = {};
        const merged = Object.assign(item);
        obj.acked = c1;
        tmp = obj;
      }
      return tmp;
    });
    obj.notifCenterItems = mapped.filter(_validate);
  },
  NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: function handleAckFailure(ids) {
    ids = ids.ids;
    c1 = false;
    const notifCenterItems = obj.notifCenterItems;
    const mapped = notifCenterItems.map((item, index) => {
      let tmp = item;
      if (ids.includes(item.id)) {
        obj = {};
        const merged = Object.assign(item);
        obj.acked = c1;
        tmp = obj;
      }
      return tmp;
    });
    obj.notifCenterItems = mapped.filter(_validate);
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function handleGuildScheduledEventUpdate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    if (isGuildEventEnded(guildScheduledEvent)) {
      const notifCenterItems = obj.notifCenterItems;
      obj.notifCenterItems = notifCenterItems.map((item, index) => {
        let tmp = item;
        if (item.type === item(closure_1_2[6]).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED) {
          tmp = item;
          if (item.guild_scheduled_event_id === item.id) {
            obj = {};
            const merged = Object.assign(item);
            obj.disable_action = true;
            tmp = obj;
          }
        }
        return tmp;
      });
    }
  },
  NOTIFICATION_CENTER_ITEM_CREATE: handleAddItem,
  NOTIFICATION_CENTER_ITEM_DELETE: function handleDelete(id) {
    id = id.id;
    const notifCenterIds = obj.notifCenterIds;
    if (notifCenterIds.has(id)) {
      const notifCenterIds2 = obj.notifCenterIds;
      notifCenterIds2.delete(id);
      const notifCenterItems = obj.notifCenterItems;
      obj.notifCenterItems = notifCenterItems.filter((item, index) => item.id !== id);
    } else {
      return false;
    }
  },
  NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: handleAddItem,
  LOAD_NOTIFICATION_CENTER_ITEMS: function handleLoad() {
    obj.loading = true;
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: function handleLoadFailure() {
    obj.loading = false;
    obj.initialized = true;
    obj.errored = true;
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function handleLoadSuccess(arg0) {
    ({ items, cursor } = arg0);
    if (obj.loading) {
      obj.loading = false;
      obj.initialized = true;
      obj.errored = false;
      obj.isDataStale = false;
      let hasItem = null != cursor;
      if (hasItem) {
        let notifCenterIds = obj.notifCenterIds;
        hasItem = notifCenterIds.has(cursor);
      }
      if (!hasItem) {
        let tmp10 = items.length > 0;
        if (tmp10) {
          tmp10 = tmp;
        }
        obj.paginationHasMore = tmp10;
        let tmp12;
        if (items.length > 0) {
          tmp12 = cursor;
        }
        obj.paginationCursor = tmp12;
      }
      items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(obj.notifCenterItems, 0);
      const mapped = items.map(toNotificationCenterItem);
      arraySpreadResult = HermesBuiltin.arraySpread(mapped.filter((item, index) => {
        const notifCenterIds = closure_9.notifCenterIds;
        return !notifCenterIds.has(item.id);
      }), arraySpreadResult);
      obj.notifCenterItems = items;
      const notifCenterItems = obj.notifCenterItems;
      const sorted = notifCenterItems.sort((id, id2) => callback(table[9]).compare(id2.id, id.id));
      const item = items.forEach((item, index) => {
        const notifCenterIds = closure_9.notifCenterIds;
        return notifCenterIds.add(item.id);
      });
    }
  },
  RESET_NOTIFICATION_CENTER() {
    let flag = { keepLocalItems: true }.keepLocalItems;
    if (flag === undefined) {
      flag = false;
    }
    obj = { loading: false, initialized: false, errored: false, isDataStale: false, notifCenterItems: [], staleNotifCenterItems: [], notifCenterIds: new Set(), notifCenterLocalItems: null, paginationHasMore: true, paginationCursor: "PX_16", notifCenterActive: 2087, notifCenterTabFocused: 2088 };
    if (flag) {
      let prop = obj.notifCenterLocalItems;
    } else {
      prop = [];
    }
    obj[7] = prop;
  },
  NOTIFICATION_CENTER_SET_ACTIVE: function handleSetActive(active) {
    obj.notifCenterActive = active.active;
  },
  NOTIFICATION_CENTER_TAB_FOCUSED: function handleTabFocused(focused) {
    obj.notifCenterTabFocused = focused.focused;
  },
  RELATIONSHIP_ADD: handleRelationshipAddOrUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipAddOrUpdate,
  RELATIONSHIP_REMOVE: function handleRelationshipRemove(arg0) {
    closure_0 = arg0;
    const prop = obj.notifCenterLocalItems;
    obj.notifCenterLocalItems = prop.filter((item, index) => {
      let tmp4 = item.type === callback(dependencyMap[6]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
      if (tmp4) {
        const other_user = item.other_user;
        let id;
        if (other_user != null) {
          id = other_user.id;
        }
        tmp4 = id === tmp3;
      }
      let tmp7 = !tmp4;
      if (!tmp4) {
        let tmp9 = item.type === callback(dependencyMap[6]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED;
        if (tmp9) {
          const other_user2 = item.other_user;
          let id1;
          if (other_user2 != null) {
            id1 = other_user2.id;
          }
          tmp9 = id1 === tmp8;
        }
        tmp7 = !tmp9;
      }
      return tmp7;
    });
  },
  GAME_RELATIONSHIP_ADD: function handleGameRelationshipAddOrUpdate(gameRelationship) {
    gameRelationship = gameRelationship.gameRelationship;
    applicationId = undefined;
    let id = gameRelationship.id;
    ({ type, since, applicationId } = gameRelationship);
    if (blockedOrIgnored.isBlockedOrIgnored(id)) {
      return false;
    } else if (type === RelationshipTypes.PENDING_INCOMING) {
      const user = authStore.getUser(id);
      if (tmp6) {
        const items = [];
        obj = id(4967);
        items[HermesBuiltin.arraySpread(obj.notifCenterLocalItems, 0)] = obj.incomingGameFriendRequestLocalItem(user, since, applicationId);
        obj.notifCenterLocalItems = items;
        const arraySpreadResult = HermesBuiltin.arraySpread(obj.notifCenterLocalItems, 0);
      }
      tmp6 = null != since && null != user;
    } else if (type !== tmp.FRIEND) {
      return false;
    } else {
      const prop = obj.notifCenterLocalItems;
      obj.notifCenterLocalItems = prop.map((item, index) => {
        let tmp5 = item.type === id(dependencyMap[6]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
        if (tmp5) {
          const other_user = item.other_user;
          id = undefined;
          if (other_user != null) {
            id = other_user.id;
          }
          tmp5 = id === tmp3;
        }
        if (tmp5) {
          tmp5 = item.applicationId === applicationId;
        }
        let tmp8 = item;
        if (tmp5) {
          obj = {};
          const merged = Object.assign(item);
          obj.acked = true;
          obj.forceUnacked = false;
          const _HermesInternal = HermesInternal;
          obj.local_id = "incoming_game_friend_requests_accepted_" + tmp3 + "_" + item.id;
          obj.type = id(dependencyMap[6]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
          tmp8 = obj;
        }
        return tmp8;
      });
    }
  },
  GAME_RELATIONSHIP_REMOVE: function handleGameRelationshipRemove(arg0) {
    ({ userId: require, applicationId: importDefault } = arg0);
    const prop = obj.notifCenterLocalItems;
    obj.notifCenterLocalItems = prop.filter((item, index) => {
      let tmp5 = item.type === NotificationCenterScenes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
      if (tmp5) {
        const other_user = item.other_user;
        let id;
        if (other_user != null) {
          id = other_user.id;
        }
        tmp5 = id === closure_0;
      }
      if (tmp5) {
        tmp5 = item.applicationId === closure_1;
      }
      let tmp8 = !tmp5;
      if (!tmp5) {
        let tmp9 = item.type === NotificationCenterScenes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
        if (tmp9) {
          const other_user2 = item.other_user;
          let id1;
          if (other_user2 != null) {
            id1 = other_user2.id;
          }
          tmp9 = id1 === closure_0;
        }
        if (tmp9) {
          tmp9 = item.applicationId === closure_1;
        }
        tmp8 = !tmp9;
      }
      return tmp8;
    });
  },
  NOTIFICATION_CENTER_ITEM_COMPLETED: function handleCompleted(item_enum) {
    item_enum = item_enum.item_enum;
    const notifCenterItems = obj.notifCenterItems;
    const mapped = notifCenterItems.map((item, index) => {
      let tmp = item;
      if (item.item_enum === item_enum) {
        obj = {};
        const merged = Object.assign(item);
        obj.completed = true;
        obj.acked = true;
        tmp = obj;
      }
      return tmp;
    });
    obj.notifCenterItems = mapped.filter(_validate);
  },
  SET_RECENT_MENTIONS_FILTER() {
    let flag = { keepLocalItems: true }.keepLocalItems;
    if (flag === undefined) {
      flag = false;
    }
    obj = { loading: false, initialized: false, errored: false, isDataStale: false, notifCenterItems: [], staleNotifCenterItems: [], notifCenterIds: new Set(), notifCenterLocalItems: null, paginationHasMore: true, paginationCursor: "PX_16", notifCenterActive: 2087, notifCenterTabFocused: 2088 };
    if (flag) {
      let prop = obj.notifCenterLocalItems;
    } else {
      prop = [];
    }
    obj[7] = prop;
  },
  MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function handleMobileNativeUpdate(newBuild) {
    newBuild = newBuild.newBuild;
    let _require;
    if (null !== newBuild) {
      obj = _require(4967);
      const result = obj.mobileNativeUpdateAvailableLocalItem(newBuild);
      _require = result;
      const prop = obj.notifCenterLocalItems;
      if (undefined === prop.find((item, index) => item.local_id === _undefined.local_id)) {
        const prop1 = obj.notifCenterLocalItems;
        const items = [];
        items[HermesBuiltin.arraySpread(prop1.filter((item, index) => item.type !== _undefined.type), 0)] = result;
        obj.notifCenterLocalItems = items;
      }
    }
  },
  APPLICATIONS_FETCH_SUCCESS: function handleFetchApplicationsSuccess(unknownApplicationIds) {
    unknownApplicationIds = unknownApplicationIds.unknownApplicationIds;
    let set;
    if (null != unknownApplicationIds) {
      const _Set = Set;
      set = new Set(unknownApplicationIds);
      const prop = obj.notifCenterLocalItems;
      obj.notifCenterLocalItems = prop.filter((item, index) => {
        let tmp = null == item.applicationId;
        if (!tmp) {
          tmp = !set.has(item.applicationId);
        }
        return tmp;
      });
    }
  }
};
const notificationCenterItemsStore = new NotificationCenterItemsStore(dispatcherDefault, obj);
let set = new Set();
let result = require("obj132").fileFinishedImporting("modules/notification_center/NotificationCenterItemsStore.tsx");

export default notificationCenterItemsStore;