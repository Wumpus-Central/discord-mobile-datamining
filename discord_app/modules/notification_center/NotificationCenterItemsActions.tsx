// === Module 15670: _fetchNotificationCenterItems ===

// Module 15670 (_fetchNotificationCenterItems)
import dispatcherDefault from "dispatcher" /* 709 */;
import getRelativeTimestamp from "getRelativeTimestamp" /* 4967 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_validate" /* 4801 */;
import { Endpoints } from "ME" /* 676 */;

require = arg1;
function _fetchNotificationCenterItems() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              dependencyMap = tmp7;
              dependencyMap = undefined;
              closure_3 = undefined;
              if (closure_1_4.loading) {
                c7 = 3;
              } else {
                let obj10 = callback(closure_1_2[3]);
                c6 = 1;
                c7 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj10.dispatch({ type: "LOAD_NOTIFICATION_CENTER_ITEMS" });
                return obj1;
              }
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              let obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              const _Math = Math;
              dependencyMap = Math.ceil(items.items.length / lib.limit);
              c5 = 1;
              const obj3 = { url: null, trackedActionData: null, query: null, rejectWithError: true };
              obj3[0] = c5.NOTIF_CENTER_ITEMS();
              const obj4 = { event: null, properties: null };
              obj4[0] = lib(503).NetworkActionNames.NOTIFICATION_CENTER_PAGE_FETCH;
              obj4[1] = function properties(body) {
                body = body.body;
                let items;
                if (body != null) {
                  items = body.items;
                }
                if (!items) {
                  items = [];
                }
                const mapped = items.map((type) => type.type);
                let obj = callback(table[6]);
                obj = { page: table, items: mapped, item_count: mapped.length };
                return obj.exact(obj);
              };
              obj3[1] = obj4;
              const obj5 = {};
              const merged = Object.assign(lib);
              obj3[2] = obj5;
              c6 = 3;
              c7 = 1;
              let obj6 = { value: null, done: false };
              obj6[0] = callback(5227).get(obj3);
              return obj6;
            }
          } else if (2 === tmp7) {
            c5 = 0;
            if (callback != null) {
              callback();
            }
            obj6 = callback(709);
            c6 = 5;
            c7 = 1;
            const obj7 = { value: null, done: false };
            obj7[0] = obj6.dispatch({ type: "LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE" });
            return obj7;
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = arg1;
              return obj8;
            } else {
              closure_3 = arg1;
              if (callback != null) {
                callback();
              }
              obj2 = callback(709);
              const obj9 = { type: "LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS", items: null, cursor: null, hasMore: null };
              obj9[1] = closure_3.body.items;
              obj9[2] = closure_3.body.cursor;
              obj9[3] = closure_3.body.has_more;
              c6 = 4;
              c7 = 1;
              obj10 = { value: null, done: false };
              obj10[0] = obj2.dispatch(obj9);
              return obj10;
            }
          } else if (4 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c5 = 0;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c5 = 0;
          c7 = 3;
          const obj11 = { value: null, done: true };
          obj11[0] = arg1;
          return obj11;
        } catch (tmp24) {
          items = tmp24;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp24;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function markNotificationCenterRemoteItemAcked(id) {
  const self = this;
  const apply = _markNotificationCenterRemoteItemAcked.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _markNotificationCenterRemoteItemAcked() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      const table = tmp3;
      c4 = 1;
      obj1 = { type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: true, ids: null };
      const items = [callback];
      obj1[2] = items;
      closure_1_1(closure_1_2[3]).dispatch(obj1);
      const HTTP = callback(closure_1_2[8]).HTTP;
      const obj2 = { url: null, rejectWithError: true };
      obj2[0] = c5.NOTIF_CENTER_ITEMS_ACK(callback);
      yield HTTP.post(obj2);
      if (1 === tmp7) {
        c4 = 0;
        obj1 = callback2(table[3]);
        const obj4 = { type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE", ids: null };
        const items1 = [callback];
        obj4[1] = items1;
        obj1.dispatch(obj4);
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c4 = 0;
      }
      c4 = 0;
      return arg1;
    })();
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _bulkMarkNotificationCenterItemsAcked() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      const table = tmp3;
      mapped = mapped.map((id) => id.id);
      c4 = 1;
      obj1 = { type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: true, ids: null };
      obj1[2] = mapped;
      closure_1_1(closure_1_2[3]).dispatch(obj1);
      const found = mapped.filter((local_id) => {
        let isMentionItemResult = null == local_id.local_id;
        if (!isMentionItemResult) {
          isMentionItemResult = mapped(tmp3[7]).isMentionItem(local_id);
          const obj = mapped(tmp3[7]);
        }
        return isMentionItemResult;
      });
      const mapped1 = found.map((id) => id.id);
      const HTTP = callback(closure_1_2[8]).HTTP;
      const obj2 = { url: null, query: null, rejectWithError: true };
      obj2[0] = constants.NOTIF_CENTER_ITEMS_BULK_ACK;
      const obj3 = { item_ids: null };
      obj3[0] = mapped1;
      obj2[1] = obj3;
      yield HTTP.post(obj2);
      if (1 === tmp7) {
        c4 = 0;
        obj1 = callback2(table[3]);
        const obj5 = { type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE", ids: null };
        obj5[1] = mapped;
        obj1.dispatch(obj5);
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c4 = 0;
      }
      c4 = 0;
      return arg1;
    })();
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _deleteNotificationCenterItem() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const table = tmp3;
              let callback = tmp7;
              const NotificationCenterAckedBeforeId = lib(closure_1_2[9]).NotificationCenterAckedBeforeId;
              c4 = 1;
              const setting = NotificationCenterAckedBeforeId.getSetting();
              obj1 = { type: "NOTIFICATION_CENTER_ITEM_DELETE", id: null };
              obj1[1] = lib.id;
              closure_1_1(closure_1_2[3]).dispatch(obj1);
              const obj11 = closure_1_1(closure_1_2[3]);
              const obj2 = { url: null, body: null, trackedActionData: null, rejectWithError: false };
              obj2[0] = c5.NOTIF_CENTER_ITEMS(lib.id);
              const obj13 = closure_1_1(closure_1_2[4]);
              let str = "regular";
              if (obj15.isMentionItem(lib)) {
                str = "mention";
              }
              const obj3 = { item_type: null };
              obj3[0] = str;
              obj2[1] = obj3;
              const obj4 = { event: null, properties: null };
              obj4[0] = lib(closure_1_2[5]).NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE;
              const obj5 = { notification_center_id: null, acked: null, item_type: null };
              obj5[0] = lib.id;
              obj15 = lib(closure_1_2[7]);
              obj5[1] = lib(closure_1_2[7]).isRemoteAcked(lib, setting);
              obj5[2] = lib.type;
              obj4[1] = obj5;
              obj2[2] = obj4;
              c5 = 2;
              c6 = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = obj13.delete(obj2);
              return obj6;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            callback = closure_3;
            obj1 = callback(table[3]);
            const obj7 = { type: "NOTIFICATION_CENTER_ITEM_DELETE_FAILURE", item: null };
            obj7[1] = lib;
            obj1.dispatch(obj7);
            throw callback;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c4 = 0;
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
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
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/notification_center/NotificationCenterItemsActions.tsx");

export const setNotificationCenterActive = function setNotificationCenterActive(active) {
  let obj = dispatcherDefault;
  obj = { type: "NOTIFICATION_CENTER_SET_ACTIVE", active };
  obj.dispatch(obj);
};
export const setNotificationCenterTabFocused = function setNotificationCenterTabFocused(focused) {
  let obj = dispatcherDefault;
  obj = { type: "NOTIFICATION_CENTER_TAB_FOCUSED", focused };
  obj.dispatch(obj);
};
export const resetNotificationCenter = function resetNotificationCenter() {
  dispatcherDefault.dispatch({ type: "RESET_NOTIFICATION_CENTER" });
};
export const fetchNotificationCenterItems = function fetchNotificationCenterItems(arg0, arg1) {
  const self = this;
  const apply = _fetchNotificationCenterItems.apply;
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
    let obj = { type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK", localIds: null };
    obj[1] = items;
    dispatcherDefault.dispatch(obj);
    const obj4 = dispatcherDefault;
  } else {
    obj = getRelativeTimestamp;
    if (obj.isMentionItem(local_id)) {
      obj = { type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: true, ids: null };
      const items1 = [local_id.id];
      obj[2] = items1;
      dispatcherDefault.dispatch(obj);
      const obj2 = dispatcherDefault;
    } else {
      markNotificationCenterRemoteItemAcked(local_id.id);
    }
  }
};
export const markNotificationCenterLocalItemsAcked = function markNotificationCenterLocalItemsAcked(found) {
  let obj = dispatcherDefault;
  obj = { type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK", localIds: found };
  obj.dispatch(obj);
};
export { markNotificationCenterRemoteItemAcked };
export const markNotificationCenterMentionAcked = function markNotificationCenterMentionAcked(arg0) {
  const items = [arg0];
  dispatcherDefault.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: true, ids: items });
};
export const bulkMarkNotificationCenterItemsAcked = function bulkMarkNotificationCenterItemsAcked(arr) {
  const self = this;
  const apply = _bulkMarkNotificationCenterItemsAcked.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteNotificationCenterItem = function deleteNotificationCenterItem(closure_1_0) {
  const self = this;
  const apply = _deleteNotificationCenterItem.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};