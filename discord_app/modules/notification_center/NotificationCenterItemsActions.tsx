// discord_app/modules/notification_center/NotificationCenterItemsActions.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import discord_common_AnalyticsUtils from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import TrackedHTTPUtilsDefault from "../../utils/TrackedHTTPUtils.tsx";
import NotificationCenterUtils from "NotificationCenterUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import NotificationCenterItemsStore from "NotificationCenterItemsStore.tsx";

require = fn;
let closure_6 = async function _fetchNotificationCenterItems(arg0, value) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
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
            let obj10 = DispatcherDefault;
            c6 = 1;
            c7 = 1;
            const obj1 = { value: obj10.dispatch({ type: "LOAD_NOTIFICATION_CENTER_ITEMS" }), done: false };
            return obj1;
          }
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          const _Math = Math;
          closure_130_2 = Math.ceil(closure_131_4.items.length / closure_130_0.limit);
          c5 = 1;
          const request = {
            url: closure_131_5.NOTIF_CENTER_ITEMS(),
            trackedActionData: null,
            query: null,
            rejectWithError: true,
          };
          const obj3 = {
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
              closure_0(page[6]);
              const obj = { page, items: mapped, item_count: mapped.length };
              return obj.exact(obj);
            },
          };
          request.trackedActionData = obj3;
          const obj4 = {};
          const merged = Object.assign(closure_130_0);
          request.query = obj4;
          c6 = 3;
          c7 = 1;
          const obj5 = { value: closure_131_1(closure_131_2[4]).get(request), done: false };
          return obj5;
        }
      } else if (2 === tmp7) {
        c5 = 0;
        if (closure_130_1 != null) {
          closure_130_1();
        }
        let obj6 = closure_131_1(closure_131_2[3]);
        c6 = 5;
        c7 = 1;
        obj6 = { value: null, done: false };
        obj6.value = obj6.dispatch({ type: "LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE" });
        return obj6;
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_130_3 = value;
          if (closure_130_1 != null) {
            closure_130_1();
          }
          obj2 = closure_131_1(closure_131_2[3]);
          const obj8 = {
            type: "LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS",
            items: closure_130_3.body.items,
            cursor: closure_130_3.body.cursor,
            hasMore: closure_130_3.body.has_more,
          };
          c6 = 4;
          c7 = 1;
          const obj9 = { value: obj2.dispatch(obj8), done: false };
          return obj9;
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
        obj = { value, done: true };
        return obj;
      }
      c5 = 0;
      c7 = 3;
      obj10 = { value, done: true };
      return obj10;
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
let closure_8 = async function _markNotificationCenterRemoteItemAcked(arg0, arg1) {
  closure_2 = tmp3;
  closure_129_0 = closure_0;
  let obj1 = { type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: true, ids: null };
  const items = [closure_0];
  obj1.ids = items;
  DispatcherDefault.dispatch(obj1);
  const HTTP = HTTPUtils.HTTP;
  await HTTP.post({ url: Endpoints.NOTIF_CENTER_ITEMS_ACK(closure_0), rejectWithError: true });
  if (1 === tmp7) {
    c4 = 0;
    obj1 = closure_130_1(closure_130_2[3]);
    const obj4 = { type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE", ids: null };
    const items1 = [closure_129_0];
    obj4.ids = items1;
    obj1.dispatch(obj4);
    c6 = 3;
  } else if (arg0 === 1) {
    c6 = 3;
    throw arg1;
  } else if (arg0 !== 2) {
    c4 = 0;
  }
  return arg1;
};
let closure_9 = async function _bulkMarkNotificationCenterItemsAcked(arg0, arg1) {
  closure_2 = tmp3;
  const mapped = _require.map((id) => id.id);
  closure_129_0 = mapped;
  let obj1 = { type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: true, ids: mapped };
  DispatcherDefault.dispatch(obj1);
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
    obj1 = closure_130_1(closure_130_2[3]);
    obj1.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE", ids: closure_129_0 });
    c6 = 3;
  } else if (arg0 === 1) {
    c6 = 3;
    throw arg1;
  } else if (arg0 !== 2) {
    c4 = 0;
  }
  return arg1;
};
let closure_10 = async function _deleteNotificationCenterItem(arg0) {
  let user = arg0;
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = user;
            const NotificationCenterAckedBeforeId = UserSettings.NotificationCenterAckedBeforeId;
            c4 = 1;
            const setting = NotificationCenterAckedBeforeId.getSetting();
            let obj1 = { type: "NOTIFICATION_CENTER_ITEM_DELETE", id: user.id };
            DispatcherDefault.dispatch(obj1);
            const request = {
              url: Endpoints.NOTIF_CENTER_ITEMS(user.id),
              body: null,
              trackedActionData: null,
              rejectWithError: false,
            };
            const obj13 = TrackedHTTPUtilsDefault;
            let str = "regular";
            if (obj15.isMentionItem(user)) {
              str = "mention";
            }
            const obj2 = { item_type: str };
            request.body = obj2;
            const obj3 = {
              event: discord_common_AnalyticsUtils.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE,
              properties: null,
            };
            const obj4 = { notification_center_id: user.id, acked: null, item_type: null };
            obj15 = NotificationCenterUtils;
            obj4.acked = NotificationCenterUtils.isRemoteAcked(user, setting);
            obj4.item_type = user.type;
            obj3.properties = obj4;
            request.trackedActionData = obj3;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: obj13.delete(request), done: false };
            return obj5;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_1 = closure_3;
          obj1 = closure_130_1(closure_130_2[3]);
          const obj6 = { type: "NOTIFICATION_CENTER_ITEM_DELETE_FAILURE", item: closure_129_0 };
          obj1.dispatch(obj6);
          throw closure_129_1;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
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
  const obj = { type: "NOTIFICATION_CENTER_SET_ACTIVE", active };
  obj.dispatch(obj);
};
export const setNotificationCenterTabFocused = function setNotificationCenterTabFocused(isFocused) {
  const obj = { type: "NOTIFICATION_CENTER_TAB_FOCUSED", focused: isFocused };
  obj.dispatch(obj);
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
    let obj = { type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK", localIds: items };
    DispatcherDefault.dispatch(obj);
  } else {
    obj = NotificationCenterUtils;
    if (obj.isMentionItem(local_id)) {
      obj = { type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: true, ids: null };
      const items1 = [local_id.id];
      obj.ids = items1;
      DispatcherDefault.dispatch(obj);
    } else {
      markNotificationCenterRemoteItemAcked(local_id.id);
    }
  }
};
export const markNotificationCenterLocalItemsAcked = function markNotificationCenterLocalItemsAcked(found) {
  const obj = { type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK", localIds: found };
  obj.dispatch(obj);
};
export { markNotificationCenterRemoteItemAcked };
export const markNotificationCenterMentionAcked = function markNotificationCenterMentionAcked(arg0) {
  const obj = { type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: true, ids: null };
  const items = [arg0];
  obj.ids = items;
  obj.dispatch(obj);
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
