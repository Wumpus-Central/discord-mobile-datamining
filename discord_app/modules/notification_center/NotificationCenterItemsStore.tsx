// === Module 7124: NotificationCenterItemsStore ===

// Module 7124 (NotificationCenterItemsStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5112 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7037 */;
import NotificationCenterItemsTypes from "NotificationCenterItemsTypes" /* 7125 */;
import NotificationCenterUtils from "NotificationCenterUtils" /* 7126 */;
import ExperimentStore from "ExperimentStore" /* 4776 */;
import MessageRecord from "MessageRecord" /* 4520 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

let set;
function _validate(id) {
  return null != id.id && null != id.type;
}
function toNotificationCenterItem(item_enum) {
  let id;
  let messageRecord;
  const tmp3 = item_enum.item_enum === NotificationCenterItemsTypes.ItemEnum.FIRST_MESSAGE && item_enum.type === NotificationCenterItemsTypes.NotificationCenterItems.LIFECYCLE_ITEM;
  if (tmp3) {
    item_enum.deeplink = "https://discord.com/feature/composeMessage";
  }
  obj = { kind: "notification-center-item", message: messageRecord, applicationId: id };
  const merged = Object.assign(item_enum);
  messageRecord = undefined;
  if (null != item_enum.message) {
    const tmpResult = MessageRecordUtils;
    messageRecord = tmpResult.createMessageRecord(item_enum.message);
  }
  id = undefined;
  if (null != item_enum.application) {
    id = item_enum.application.id;
  }
  return obj;
}
function handleAddItem(type) {
  let id;
  let item;
  let messageRecord;
  if ("NOTIFICATION_CENTER_ITEM_CREATE" === type.type) {
    const item2 = type.item;
    const tmp4 = item2.item_enum === NotificationCenterItemsTypes.ItemEnum.FIRST_MESSAGE && item2.type === NotificationCenterItemsTypes.NotificationCenterItems.LIFECYCLE_ITEM;
    if (tmp4) {
      item2.deeplink = "https://discord.com/feature/composeMessage";
    }
    obj = { kind: "notification-center-item", message: messageRecord, applicationId: id };
    const merged = Object.assign(item2);
    messageRecord = undefined;
    if (null != item2.message) {
      const tmp2Result = MessageRecordUtils;
      messageRecord = tmp2Result.createMessageRecord(item2.message);
    }
    id = undefined;
    if (null != item2.application) {
      id = item2.application.id;
    }
    item = obj;
  } else {
    item = type.item;
  }
  if (obj.initialized) {
    const tmp12 = null != item.id && null != item.type;
    if (tmp12) {
      const notifCenterIds = obj.notifCenterIds;
      if (!notifCenterIds.has(item.id)) {
        const notifCenterIds2 = obj.notifCenterIds;
        notifCenterIds2.add(item.id);
        const items = [item];
        HermesBuiltin.arraySpread(items, obj.notifCenterItems, 1);
        obj.notifCenterItems = items;
        const notifCenterItems = obj.notifCenterItems;
        const sorted = notifCenterItems.sort((id, id2) => {
          obj = SnowflakeUtilsDefault;
          return obj.compare(id2.id, id.id);
        });
      }
    }
  }
  return false;
}
function handleRelationshipAddOrUpdate(relationship) {
  let c1;
  let type;
  let user;
  let userIgnored;
  relationship = relationship.relationship;
  c1 = undefined;
  user = undefined;
  ({ id: c1, type, userIgnored, user } = relationship);
  const since = relationship.since;
  if (type === RelationshipTypes.PENDING_INCOMING) {
    if (!relationship.isSpamRequest) {
      if (!userIgnored) {
        let tmp4 = null;
        if (null == since) {
          return null;
        } else if (null != user) {
          const user1 = UserStore.getUser(user.id);
          if (null != user1) {
            let tmp7 = obj;
            const items = [];
            let tmp10 = relationship;
            const arraySpreadResult = HermesBuiltin.arraySpread(items, obj.notifCenterLocalItems, 0);
            obj = relationship(user[8]);
            items[arraySpreadResult] = obj.incomingFriendRequestLocalItem(user1, since, tmp2);
            obj.notifCenterLocalItems = items;
          }
        }
      }
    }
  }
  let tmp12 = type !== RelationshipTypes.FRIEND;
  if (!tmp12) {
    let tmp13 = null;
    tmp12 = null == relationship.user;
  }
  if (!tmp12) {
    tmp12 = userIgnored;
  }
  if (!tmp12) {
    const prop = obj.notifCenterLocalItems;
    obj.notifCenterLocalItems = prop.map((type) => {
      let tmp4 = type.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
      if (tmp4) {
        const other_user = type.other_user;
        let id;
        if (other_user != null) {
          id = other_user.id;
        }
        tmp4 = id === tmp3;
      }
      let tmp7 = type;
      if (tmp4) {
        obj = { acked: true, forceUnacked: false, local_id: "incoming_friend_requests_accepted_" + user.id + "_" + type.id, type: NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED };
        const merged = Object.assign(type);
        const _HermesInternal = HermesInternal;
        tmp7 = obj;
      }
      return tmp7;
    });
  }
  const tmp15 = type === RelationshipTypes.BLOCKED || userIgnored;
  if (tmp15) {
    const prop1 = obj.notifCenterLocalItems;
    obj.notifCenterLocalItems = prop1.filter((type) => {
      let tmp4 = type.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
      if (tmp4) {
        const other_user = type.other_user;
        let id;
        if (other_user != null) {
          id = other_user.id;
        }
        tmp4 = id === c1;
      }
      if (!tmp4) {
        let tmp7 = type.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED;
        if (tmp7) {
          const other_user2 = type.other_user;
          let id1;
          if (other_user2 != null) {
            id1 = other_user2.id;
          }
          tmp7 = id1 === c1;
        }
        tmp4 = tmp7;
      }
      if (!tmp4) {
        let tmp10 = type.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
        if (tmp10) {
          const other_user3 = type.other_user;
          let id2;
          if (other_user3 != null) {
            id2 = other_user3.id;
          }
          tmp10 = id2 === c1;
        }
        tmp4 = tmp10;
      }
      if (!tmp4) {
        let tmp13 = type.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
        if (tmp13) {
          const other_user4 = type.other_user;
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
}
const isGuildEventEnded = GuildScheduledEventStore.isGuildEventEnded;
const RelationshipTypes = Constants.RelationshipTypes;
let obj = { loading: false, initialized: false, errored: false, isDataStale: false, notifCenterItems: [], staleNotifCenterItems: [], notifCenterIds: set, notifCenterLocalItems: [], paginationHasMore: true, paginationCursor: "Symbol", notifCenterActive: "none", notifCenterTabFocused: "URL" };
set = new Set();
const PersistedStore = get_initializedDefault.PersistedStore;
class NotificationCenterItemsStore extends PersistedStore {
  initialize(notifCenterItems) {
    this.waitFor(UserStore, RelationshipStore, ExperimentStore);
    if (null != notifCenterItems) {
      notifCenterItems = notifCenterItems.notifCenterItems;
      const mapped = notifCenterItems.map(function(message) {
        let tmp2;
        obj = { message: tmp2 };
        const merged = Object.assign(message);
        tmp2 = undefined;
        if (null != message.message) {
          const self = this;
          const self2 = this;
          tmp2 = new MessageRecord(message.message);
        }
        return obj;
      });
      if (mapped.length > 0) {
        obj = { initialized: true, isDataStale: true, notifCenterItems: [], staleNotifCenterItems: mapped };
        let tmp2 = obj;
        let merged = Object.assign(obj);
      }
    }
  }
  getState() {
    let notifCenterItems;
    let prop;
    function pack(message) {
      let toJSResult;
      obj = { message: toJSResult };
      const merged = Object.assign(message);
      toJSResult = undefined;
      if (null != message.message) {
        message = message.message;
        toJSResult = message.toJS();
      }
      return obj;
    }
    obj = { notifCenterItems: notifCenterItems.map(pack), staleNotifCenterItems: prop.map(pack) };
    let merged = Object.assign(obj);
    notifCenterItems = obj.notifCenterItems;
    prop = obj.staleNotifCenterItems;
    return obj;
  }
}
const prototype = NotificationCenterItemsStore.prototype;
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
  get: function active() {
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
const obj2 = {
  CONNECTION_OPEN: function handleConnectionOpen(relationships) {
    const items = [];
    set = new Set();
    relationships = relationships.relationships;
    let item = relationships.forEach((item) => {
      let id;
      let is_spam_request;
      let origin_application_id;
      let since;
      let type;
      let user_ignored;
      ({ id, since, user_ignored, type, is_spam_request, origin_application_id } = item);
      if (user_ignored) {
        set.add(id);
      }
      if (type === RelationshipTypes.PENDING_INCOMING) {
        if (!is_spam_request) {
          if (!user_ignored) {
            if (null != since) {
              const user = UserStore.getUser(id);
              if (null == user) {
                return null;
              } else {
                const push = items.push;
                obj = NotificationCenterUtils;
                push(obj.incomingFriendRequestLocalItem(user, since, origin_application_id));
              }
            }
          }
        }
      }
      return null;
    });
    const gameRelationships = relationships.gameRelationships;
    const item1 = gameRelationships.forEach((id) => {
      id = id.id;
      if (id.type === RelationshipTypes.PENDING_INCOMING) {
        if (!set.has(id)) {
          const user = UserStore.getUser(id);
          if (null != user) {
            const push = items.push;
            obj = NotificationCenterUtils;
            push(obj.incomingGameFriendRequestLocalItem(user, tmp2, tmp));
          }
        }
      }
    });
    const guilds = relationships.guilds;
    const item2 = guilds.forEach((guild_scheduled_events) => {
      const prop = guild_scheduled_events.guild_scheduled_events;
      let item = prop.forEach((item) => {
        if (closure_4(item)) {
          let tmp = notifCenterItems;
          notifCenterItems = notifCenterItems.notifCenterItems;
          notifCenterItems.notifCenterItems = notifCenterItems.map((type) => {
            let tmp = type;
            if (type.type === items(closure_2_2[6]).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED) {
              tmp = type;
              if (type.guild_scheduled_event_id === item.id) {
                obj = { disable_action: true };
                const merged = Object.assign(type);
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
    let prop;
    let flag = {}.keepLocalItems;
    if (flag === undefined) {
      flag = false;
    }
    obj = { loading: false, initialized: false, errored: false, isDataStale: false, notifCenterItems: [], staleNotifCenterItems: [], notifCenterIds: new Set(), notifCenterLocalItems: prop, paginationHasMore: true, paginationCursor: "Symbol", notifCenterActive: "none", notifCenterTabFocused: "URL" };
    new Set();
    if (flag) {
      prop = obj.notifCenterLocalItems;
    } else {
      prop = [];
    }
  },
  NOTIFICATION_CENTER_ITEMS_ACK: function handleAck(ids) {
    ids = ids.ids;
    let c1 = true;
    const notifCenterItems = obj.notifCenterItems;
    const mapped = notifCenterItems.map((id) => {
      let tmp = id;
      if (ids.includes(id.id)) {
        obj = { acked };
        const merged = Object.assign(id);
        tmp = obj;
      }
      return tmp;
    });
    obj.notifCenterItems = mapped.filter(_validate);
  },
  NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: function handleAckFailure(ids) {
    ids = ids.ids;
    let c1 = false;
    const notifCenterItems = obj.notifCenterItems;
    const mapped = notifCenterItems.map((id) => {
      let tmp = id;
      if (ids.includes(id.id)) {
        obj = { acked };
        const merged = Object.assign(id);
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
      obj.notifCenterItems = notifCenterItems.map((type) => {
        let tmp = type;
        if (type.type === items(closure_2_2[6]).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED) {
          tmp = type;
          if (type.guild_scheduled_event_id === item.id) {
            obj = { disable_action: true };
            const merged = Object.assign(type);
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
      obj.notifCenterItems = notifCenterItems.filter((id) => id.id !== id);
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
    let cursor;
    let items;
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
        const tmp11 = items.length > 0 && tmp2;
        obj.paginationHasMore = tmp11;
        let tmp13;
        if (items.length > 0) {
          tmp13 = cursor;
        }
        obj.paginationCursor = tmp13;
      }
      const items1 = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items1, obj.notifCenterItems, 0);
      const mapped = items.map(toNotificationCenterItem);
      HermesBuiltin.arraySpread(items1, mapped.filter((id) => {
        const notifCenterIds = obj.notifCenterIds;
        return !notifCenterIds.has(id.id);
      }), arraySpreadResult);
      obj.notifCenterItems = items1;
      const notifCenterItems = obj.notifCenterItems;
      const sorted = notifCenterItems.sort((id, id2) => {
        obj = SnowflakeUtilsDefault;
        return obj.compare(id2.id, id.id);
      });
      const item = items.forEach((id) => {
        const notifCenterIds = obj.notifCenterIds;
        return notifCenterIds.add(id.id);
      });
    }
  },
  RESET_NOTIFICATION_CENTER() {
    let prop;
    let flag = { keepLocalItems: true }.keepLocalItems;
    if (flag === undefined) {
      flag = false;
    }
    obj = { loading: false, initialized: false, errored: false, isDataStale: false, notifCenterItems: [], staleNotifCenterItems: [], notifCenterIds: new Set(), notifCenterLocalItems: prop, paginationHasMore: true, paginationCursor: "Symbol", notifCenterActive: "none", notifCenterTabFocused: "URL" };
    new Set();
    if (flag) {
      prop = obj.notifCenterLocalItems;
    } else {
      prop = [];
    }
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
    let closure_0 = arg0;
    const prop = obj.notifCenterLocalItems;
    obj.notifCenterLocalItems = prop.filter((type) => {
      let tmp4 = type.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
      if (tmp4) {
        const other_user = type.other_user;
        let id;
        if (other_user != null) {
          id = other_user.id;
        }
        tmp4 = id === tmp3;
      }
      let tmp7 = !tmp4;
      if (tmp7) {
        let tmp9 = type.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED;
        if (tmp9) {
          const other_user2 = type.other_user;
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
    let applicationId;
    let since;
    let type;
    gameRelationship = gameRelationship.gameRelationship;
    applicationId = undefined;
    let id = gameRelationship.id;
    ({ type, since, applicationId } = gameRelationship);
    if (RelationshipStore.isBlockedOrIgnored(id)) {
      return false;
    } else if (type === RelationshipTypes.PENDING_INCOMING) {
      const user = UserStore.getUser(id);
      const tmp7 = null != since && null != user;
      if (tmp7) {
        let tmp8 = obj;
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items, obj.notifCenterLocalItems, 0);
        obj = id(7126);
        items[arraySpreadResult] = obj.incomingGameFriendRequestLocalItem(user, since, applicationId);
        obj.notifCenterLocalItems = items;
      }
    } else if (type !== tmp2.FRIEND) {
      return false;
    } else {
      const tmp3 = obj;
      const prop = obj.notifCenterLocalItems;
      obj.notifCenterLocalItems = prop.map((type) => {
        let tmp5 = type.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
        if (tmp5) {
          const other_user = type.other_user;
          id = undefined;
          if (other_user != null) {
            id = other_user.id;
          }
          tmp5 = id === tmp3;
        }
        if (tmp5) {
          tmp5 = type.applicationId === applicationId;
        }
        let tmp8 = type;
        if (tmp5) {
          obj = { acked: true, forceUnacked: false, local_id: "incoming_game_friend_requests_accepted_" + id + "_" + type.id, type: NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED };
          const merged = Object.assign(type);
          const _HermesInternal = HermesInternal;
          tmp8 = obj;
        }
        return tmp8;
      });
    }
  },
  GAME_RELATIONSHIP_REMOVE: function handleGameRelationshipRemove(arg0) {
    ({ userId: require, applicationId: importDefault } = arg0);
    const prop = obj.notifCenterLocalItems;
    obj.notifCenterLocalItems = prop.filter((type) => {
      let tmp5 = type.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
      if (tmp5) {
        const other_user = type.other_user;
        let id;
        if (other_user != null) {
          id = other_user.id;
        }
        tmp5 = id === require;
      }
      if (tmp5) {
        tmp5 = type.applicationId === importDefault;
      }
      let tmp8 = !tmp5;
      if (tmp8) {
        let tmp9 = type.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
        if (tmp9) {
          const other_user2 = type.other_user;
          let id1;
          if (other_user2 != null) {
            id1 = other_user2.id;
          }
          tmp9 = id1 === require;
        }
        if (tmp9) {
          tmp9 = type.applicationId === importDefault;
        }
        tmp8 = !tmp9;
      }
      return tmp8;
    });
  },
  NOTIFICATION_CENTER_ITEM_COMPLETED: function handleCompleted(item_enum) {
    item_enum = item_enum.item_enum;
    const notifCenterItems = obj.notifCenterItems;
    const mapped = notifCenterItems.map((item_enum) => {
      let tmp = item_enum;
      if (item_enum.item_enum === item_enum) {
        obj = { completed: true, acked: true };
        const merged = Object.assign(item_enum);
        tmp = obj;
      }
      return tmp;
    });
    obj.notifCenterItems = mapped.filter(_validate);
  },
  SET_RECENT_MENTIONS_FILTER() {
    let prop;
    let flag = { keepLocalItems: true }.keepLocalItems;
    if (flag === undefined) {
      flag = false;
    }
    obj = { loading: false, initialized: false, errored: false, isDataStale: false, notifCenterItems: [], staleNotifCenterItems: [], notifCenterIds: new Set(), notifCenterLocalItems: prop, paginationHasMore: true, paginationCursor: "Symbol", notifCenterActive: "none", notifCenterTabFocused: "URL" };
    new Set();
    if (flag) {
      prop = obj.notifCenterLocalItems;
    } else {
      prop = [];
    }
  },
  MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function handleMobileNativeUpdate(newBuild) {
    newBuild = newBuild.newBuild;
    let c0;
    if (null !== newBuild) {
      obj = NotificationCenterUtils;
      const result = obj.mobileNativeUpdateAvailableLocalItem(newBuild);
      c0 = result;
      const prop = obj.notifCenterLocalItems;
      if (undefined === prop.find((local_id) => local_id.local_id === _undefined.local_id)) {
        const prop1 = obj.notifCenterLocalItems;
        const items = [];
        items[HermesBuiltin.arraySpread(items, prop1.filter((type) => type.type !== closure_0.type), 0)] = result;
        obj.notifCenterLocalItems = items;
      }
    }
  },
  APPLICATIONS_FETCH_SUCCESS: function handleFetchApplicationsSuccess(unknownApplicationIds) {
    unknownApplicationIds = unknownApplicationIds.unknownApplicationIds;
    set = undefined;
    if (null != unknownApplicationIds) {
      let tmp = globalThis;
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(unknownApplicationIds);
      const prop = obj.notifCenterLocalItems;
      obj.notifCenterLocalItems = prop.filter((applicationId) => {
        const tmp = null == applicationId.applicationId || !set.has(applicationId.applicationId);
        return tmp;
      });
    }
  }
};
const notificationCenterItemsStore = new NotificationCenterItemsStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/notification_center/NotificationCenterItemsStore.tsx");

export default notificationCenterItemsStore;