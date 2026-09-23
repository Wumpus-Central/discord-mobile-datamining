// === Module 16817: NotificationCenterItemsActions ===

// Module 16817 (NotificationCenterItemsActions)
import DispatcherDefault from "Dispatcher" /* 573 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import UserSettings from "UserSettings" /* 2020 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 5020 */;
import NotificationCenterUtils from "NotificationCenterUtils" /* 7963 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 7961 */;

require = fn;
let closure_6 = async function _fetchNotificationCenterItems(arg0) {
  if (c7 === 2) {
    c7 = 3;
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_3 = tmp3;
          const page = tmp7;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          if (loading.loading) {
            c7 = 3;
          } else {
            c6 = 1;
            c7 = 1;
            const obj5 = { value: DispatcherDefault.dispatch({ type: "LOAD_NOTIFICATION_CENTER_ITEMS" }), done: false };
            return obj5;
          }
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const _Math = Math;
          closure_130_2 = Math.ceil(closure_131_4.items.length / closure_130_0.limit);
          c5 = 1;
          const request = { url: closure_131_5.NOTIF_CENTER_ITEMS(), trackedActionData: null, query: null, rejectWithError: true };
          const obj8 = {
            event: closure_131_0(closure_131_2[5]).NetworkActionNames.NOTIFICATION_CENTER_PAGE_FETCH,
            properties(body) {
                      body = body.body;
                      let items;
                      if (body != null) {
                        items = body.items;
                      }
                      if (!items) {
                        items = [];
                      }
                      const mapped = items.map((type) => type.type);
                      return closure_0(page[6]).exact({ page, items: mapped, item_count: mapped.length });
                    }
          };
          request.trackedActionData = obj8;
          const obj9 = {};
          const merged = Object.assign(closure_130_0);
          request.query = obj9;
          c6 = 3;
          c7 = 1;
          const obj10 = { value: closure_131_1(closure_131_2[4]).get(request), done: false };
          return obj10;
        }
      } else if (2 === tmp7) {
        c5 = 0;
        if (closure_130_1 != null) {
          closure_130_1();
        }
        c6 = 5;
        c7 = 1;
        const obj12 = { value: closure_131_1(closure_131_2[3]).dispatch({ type: "LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE" }), done: false };
        return obj12;
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          closure_130_3 = value;
          if (closure_130_1 != null) {
            closure_130_1();
          }
          const obj14 = { type: "LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS", items: closure_130_3.body.items, cursor: closure_130_3.body.cursor, hasMore: closure_130_3.body.has_more };
          c6 = 4;
          c7 = 1;
          const obj16 = { value: closure_131_1(closure_131_2[3]).dispatch(obj14), done: false };
          return obj16;
        }
      } else if (4 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c5 = 0;
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c5 = 0;
      c7 = 3;
      const obj17 = { value, done: true };
      return obj17;
    } catch (tmp24) {
      closure_4 = tmp24;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp24;
      } else {
        c6 = tmp;
      }
    }
  }
};
function markNotificationCenterRemoteItemAcked() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _markNotificationCenterRemoteItemAcked(arg0) {
  closure_2 = tmp3;
  closure_129_0 = closure_0;
  const obj5 = { type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: true, ids: null };
  const items = [closure_0];
  obj5.ids = items;
  DispatcherDefault.dispatch(obj5);
  const HTTP = HTTPUtils.HTTP;
  await HTTP.post({ url: Endpoints.NOTIF_CENTER_ITEMS_ACK(closure_0), rejectWithError: true });
  if (1 === tmp7) {
    c4 = 0;
    const obj9 = { type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE", ids: null };
    const items1 = [closure_129_0];
    obj9.ids = items1;
    closure_130_1(closure_130_2[3]).dispatch(obj9);
    c6 = 3;
    closure_130_1(closure_130_2[3]);
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c4 = 0;
  }
  return value;
};
let closure_9 = async function _bulkMarkNotificationCenterItemsAcked(arg0) {
  closure_2 = tmp3;
  const mapped = _require.map((id) => id.id);
  closure_129_0 = mapped;
  DispatcherDefault.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: true, ids: mapped });
  const found = _require.filter((local_id) => {
    let isMentionItemResult = null == local_id.local_id;
    if (!isMentionItemResult) {
      isMentionItemResult = closure_1_0(dependencyMap[7]).isMentionItem(local_id);
      const obj = closure_1_0(dependencyMap[7]);
    }
    return isMentionItemResult;
  });
  const mapped1 = found.map((id) => id.id);
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants.NOTIF_CENTER_ITEMS_BULK_ACK, query: { item_ids: mapped1 }, rejectWithError: true };
  await HTTP.post(request);
  if (1 === tmp7) {
    c4 = 0;
    closure_130_1(closure_130_2[3]).dispatch({ type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE", ids: closure_129_0 });
    c6 = 3;
    closure_130_1(closure_130_2[3]);
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c4 = 0;
  }
  return value;
};
let closure_10 = async function _deleteNotificationCenterItem(arg0) {
  let user = arg0;
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = user;
            const NotificationCenterAckedBeforeId = UserSettings.NotificationCenterAckedBeforeId;
            c4 = 1;
            const setting = NotificationCenterAckedBeforeId.getSetting();
            const obj5 = { type: "NOTIFICATION_CENTER_ITEM_DELETE", id: user.id };
            DispatcherDefault.dispatch(obj5);
            const request = { url: Endpoints.NOTIF_CENTER_ITEMS(user.id), body: null, trackedActionData: null, rejectWithError: false };
            const obj13 = TrackedHTTPUtilsDefault;
            let str = "regular";
            if (obj15.isMentionItem(user)) {
              str = "mention";
            }
            const obj6 = { item_type: str };
            request.body = obj6;
            const obj7 = { event: discord_common_AnalyticsUtils.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE, properties: null };
            const obj8 = { notification_center_id: user.id, acked: null, item_type: null };
            obj15 = NotificationCenterUtils;
            obj8.acked = NotificationCenterUtils.isRemoteAcked(user, setting);
            obj8.item_type = user.type;
            obj7.properties = obj8;
            request.trackedActionData = obj7;
            c5 = 2;
            c6 = 1;
            const obj9 = { value: obj13.delete(request), done: false };
            return obj9;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_1 = closure_3;
          const obj10 = { type: "NOTIFICATION_CENTER_ITEM_DELETE_FAILURE", item: closure_129_0 };
          closure_130_1(closure_130_2[3]).dispatch(obj10);
          throw closure_129_1;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp19) {
        closure_3 = tmp19;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp19;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/NotificationCenterItemsActions.tsx");

export const setNotificationCenterActive = function setNotificationCenterActive(active) {
  DispatcherDefault.dispatch({ type: "NOTIFICATION_CENTER_SET_ACTIVE", active });
};
export const setNotificationCenterTabFocused = function setNotificationCenterTabFocused(isFocused) {
  DispatcherDefault.dispatch({ type: "NOTIFICATION_CENTER_TAB_FOCUSED", focused: isFocused });
};
export const resetNotificationCenter = function resetNotificationCenter() {
  DispatcherDefault.dispatch({ type: "RESET_NOTIFICATION_CENTER" });
};
export const fetchNotificationCenterItems = function fetchNotificationCenterItems() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const markNotificationCenterItemAcked = function markNotificationCenterItemAcked(local_id) {
  if (null != local_id.local_id) {
    const items = [local_id.local_id];
    const obj3 = { type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK", localIds: items };
    DispatcherDefault.dispatch(obj3);
  } else {
    if (obj.isMentionItem(local_id)) {
      const obj5 = { type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: true, ids: null };
      const items1 = [local_id.id];
      obj5.ids = items1;
      DispatcherDefault.dispatch(obj5);
    } else {
      markNotificationCenterRemoteItemAcked(local_id.id);
    }
    obj = NotificationCenterUtils;
  }
};
export const markNotificationCenterLocalItemsAcked = function markNotificationCenterLocalItemsAcked(found) {
  DispatcherDefault.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK", localIds: found });
};
export { markNotificationCenterRemoteItemAcked };
export const markNotificationCenterMentionAcked = function markNotificationCenterMentionAcked(arg0) {
  const obj2 = { type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: true, ids: null };
  const items = [arg0];
  obj2.ids = items;
  DispatcherDefault.dispatch(obj2);
};
export const bulkMarkNotificationCenterItemsAcked = function bulkMarkNotificationCenterItemsAcked() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteNotificationCenterItem = function deleteNotificationCenterItem() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};