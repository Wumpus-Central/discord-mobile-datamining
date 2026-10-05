// === Module 16356: NotificationCenterItemsActions ===

// Module 16356 (NotificationCenterItemsActions)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import UserSettings from "UserSettings" /* 2028 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 5083 */;
import NotificationCenterUtils from "NotificationCenterUtils" /* 7126 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 7124 */;
import size from "module_2" /* 2 */;

let closure_4;

let obj = function _fetchNotificationCenterItems() {
  let loading;
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_2;
    let closure_3;
    const limit = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj11;
      let obj3;
      let obj7;
      let obj8;
      let obj9;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              let page;
              tmp = undefined;
              if (!loading.loading) {
                c6 = 1;
                c7 = 1;
                const obj5 = { value: obj11.dispatch({ type: "LOAD_NOTIFICATION_CENTER_ITEMS" }), done: false };
                obj11 = DispatcherDefault;
                return obj5;
              }
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              const _Math = Math;
              page = Math.ceil(closure_131_4.items.length / limit.limit);
              c5 = 1;
              const request = { url: closure_131_5.NOTIF_CENTER_ITEMS(), trackedActionData: obj8, query: obj9, rejectWithError: true };
              const get = closure_131_1(closure_131_2[4]).get;
              closure_131_1(closure_131_2[4]);
              obj8 = {
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
                          obj = limit(page[6]);
                          const obj2 = { page, items: mapped, item_count: mapped.length };
                          return obj.exact(obj2);
                        }
              };
              obj9 = {};
              const merged = Object.assign(limit);
              c6 = 3;
              c7 = 1;
              const obj10 = { value: get(request), done: false };
              return obj10;
            }
          } else if (2 === c6) {
            c5 = 0;
            if (closure_1 != null) {
              closure_1();
            }
            c6 = 5;
            c7 = 1;
            const obj12 = { value: obj7.dispatch({ type: "LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE" }), done: false };
            obj7 = closure_131_1(closure_131_2[3]);
            return obj12;
          } else if (3 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              tmp = value;
              if (closure_1 != null) {
                closure_1();
              }
              c6 = 4;
              c7 = 1;
              const obj14 = { type: "LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS", items: tmp.body.items, cursor: tmp.body.cursor, hasMore: tmp.body.has_more };
              const obj15 = { value: obj3.dispatch(obj14), done: false };
              obj3 = closure_131_1(closure_131_2[3]);
              return obj15;
            }
          } else if (4 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
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
          c7 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp21) {
          closure_4 = tmp21;
          if (0 === c5) {
            c7 = 3;
            throw tmp21;
          } else {
            c6 = 2;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function markNotificationCenterRemoteItemAcked() {
  return obj(...arguments);
}
obj = function _markNotificationCenterRemoteItemAcked() {
  obj = _asyncToGenerator(async (arg0) => {
    let items;
    let items1;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
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
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c4 = 1;
            const obj5 = { type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: true, ids: items };
            items = [closure_0];
            const obj7 = DispatcherDefault;
            obj7.dispatch(obj5);
            const HTTP = HTTPUtils.HTTP;
            const obj6 = { url: Endpoints.NOTIF_CENTER_ITEMS_ACK(closure_0), rejectWithError: true };
            const post = HTTP.post;
            c5 = 2;
            c6 = 1;
            const obj8 = { value: post(obj6), done: false };
            return obj8;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            const obj9 = { type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE", ids: items1 };
            items1 = [closure_0];
            const obj2 = closure_130_1(closure_130_2[3]);
            obj2.dispatch(obj9);
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
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp12) {
        let closure_3 = tmp12;
        if (0 === c4) {
          c6 = 3;
          throw tmp12;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _bulkMarkNotificationCenterItemsAcked() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj6;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let mapped;
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
            let closure_2 = tmp;
            let closure_1 = tmp4;
            mapped = closure_0.map((id) => id.id);
            c4 = 1;
            const obj5 = { type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: true, ids: mapped };
            const obj7 = DispatcherDefault;
            obj7.dispatch(obj5);
            const found = closure_0.filter((local_id) => {
              let isMentionItemResult = null == local_id.local_id;
              if (!isMentionItemResult) {
                obj = closure_1_0(closure_1_2[7]);
                isMentionItemResult = obj.isMentionItem(local_id);
              }
              return isMentionItemResult;
            });
            const mapped1 = found.map((id) => id.id);
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.NOTIF_CENTER_ITEMS_BULK_ACK, query: obj6, rejectWithError: true };
            obj6 = { item_ids: mapped1 };
            c5 = 2;
            c6 = 1;
            const obj8 = { value: HTTP.post(request), done: false };
            return obj8;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            const obj9 = { type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE", ids: mapped };
            const obj2 = closure_130_1(closure_130_2[3]);
            obj2.dispatch(obj9);
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
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp12) {
        let closure_3 = tmp12;
        if (0 === c4) {
          c6 = 3;
          throw tmp12;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _deleteNotificationCenterItem() {
  obj = _asyncToGenerator(async (item) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj6;
      let obj7;
      let obj8;
      let tmp23Result;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              const NotificationCenterAckedBeforeId = UserSettings.NotificationCenterAckedBeforeId;
              c4 = 1;
              const setting = NotificationCenterAckedBeforeId.getSetting();
              const obj5 = { type: "NOTIFICATION_CENTER_ITEM_DELETE", id: item.id };
              const obj11 = DispatcherDefault;
              obj11.dispatch(obj5);
              const request = { url: Endpoints.NOTIF_CENTER_ITEMS(item.id), body: obj6, trackedActionData: obj7, rejectWithError: false };
              const _delete = TrackedHTTPUtilsDefault.delete;
              TrackedHTTPUtilsDefault;
              let str = "regular";
              const obj14 = NotificationCenterUtils;
              if (obj14.isMentionItem(item)) {
                str = "mention";
              }
              obj6 = { item_type: str };
              obj7 = { event: discord_common_AnalyticsUtils.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE, properties: obj8 };
              obj8 = { notification_center_id: item.id, acked: tmp23Result.isRemoteAcked(item, setting), item_type: item.type };
              c5 = 2;
              c6 = 1;
              tmp23Result = NotificationCenterUtils;
              const obj9 = { value: _delete(request), done: false };
              return obj9;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_1 = closure_3;
            const obj10 = { type: "NOTIFICATION_CENTER_ITEM_DELETE_FAILURE", item };
            const obj2 = closure_130_1(closure_130_2[3]);
            obj2.dispatch(obj10);
            throw closure_1;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            c4 = 0;
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp16) {
          closure_3 = tmp16;
          if (0 === c4) {
            c6 = 3;
            throw tmp16;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/notification_center/NotificationCenterItemsActions.tsx");

export const setNotificationCenterActive = function setNotificationCenterActive(active) {
  obj = DispatcherDefault;
  const obj2 = { type: "NOTIFICATION_CENTER_SET_ACTIVE", active };
  obj.dispatch(obj2);
};
export const setNotificationCenterTabFocused = function setNotificationCenterTabFocused(isFocused) {
  obj = DispatcherDefault;
  const obj2 = { type: "NOTIFICATION_CENTER_TAB_FOCUSED", focused: isFocused };
  obj.dispatch(obj2);
};
export const resetNotificationCenter = function resetNotificationCenter() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "RESET_NOTIFICATION_CENTER" });
};
export const fetchNotificationCenterItems = function fetchNotificationCenterItems() {
  return obj(...arguments);
};
export const markNotificationCenterItemAcked = function markNotificationCenterItemAcked(local_id) {
  let items1;
  if (null != local_id.local_id) {
    const items = [local_id.local_id];
    const obj3 = { type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK", localIds: items };
    const obj4 = DispatcherDefault;
    obj4.dispatch(obj3);
  } else {
    obj = NotificationCenterUtils;
    if (obj.isMentionItem(local_id)) {
      const id = local_id.id;
      const obj5 = { type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: true, ids: items1 };
      items1 = [id];
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj5);
    } else {
      markNotificationCenterRemoteItemAcked(local_id.id);
    }
  }
};
export const markNotificationCenterLocalItemsAcked = function markNotificationCenterLocalItemsAcked(found) {
  obj = DispatcherDefault;
  const obj2 = { type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK", localIds: found };
  obj.dispatch(obj2);
};
export { markNotificationCenterRemoteItemAcked };
export const markNotificationCenterMentionAcked = function markNotificationCenterMentionAcked(arg0) {
  let items;
  const obj2 = { type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: true, ids: items };
  items = [arg0];
  obj = DispatcherDefault;
  obj.dispatch(obj2);
};
export const bulkMarkNotificationCenterItemsAcked = function bulkMarkNotificationCenterItemsAcked() {
  return obj(...arguments);
};
export const deleteNotificationCenterItem = function deleteNotificationCenterItem() {
  return obj(...arguments);
};