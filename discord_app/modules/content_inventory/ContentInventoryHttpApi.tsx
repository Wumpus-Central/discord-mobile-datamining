// === Module 12918: ContentInventoryHttpApi ===

// Module 12918 (ContentInventoryHttpApi)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import ContentInventoryConstants from "ContentInventoryConstants" /* 8027 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_3, closure_4, closure_5, connection_id, error;

let obj = function _getMyContentInventory() {
  obj = _asyncToGenerator(async function(arg0) {
    let c0;
    let c1;
    let c2;
    let obj5;
    let obj9;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let feature;
        let body;
        let wait_ms_until_next_fetch;
        let date;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c0 = undefined;
            c1 = undefined;
            feature = undefined;
            ({ token: c0, feedId: c1, feature: c2 } = closure_0);
            body = undefined;
            wait_ms_until_next_fetch = undefined;
            date = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c4 = 1;
            const HTTP = closure_130_0(closure_130_2[3]).HTTP;
            const request = { url: closure_130_5.MY_CONTENT_INVENTORY(c0), query: obj5, rejectWithError: obj9.rejectWithMigratedError() };
            const get = HTTP.get;
            obj5 = { for_game_profile: c1 === closure_130_4.GAME_PROFILE_FEED, feature };
            obj9 = closure_130_0(closure_130_2[3]);
            c5 = 3;
            c6 = 1;
            const obj6 = { value: get(request), done: false };
            return obj6;
          }
        } else if (2 === c5) {
          c4 = 0;
          let closure_6 = closure_3;
          const self3 = this;
          const self4 = this;
          const aPIError = new closure_130_0(closure_130_2[4]).APIError(closure_6);
          throw aPIError;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          body = value.body;
          wait_ms_until_next_fetch = body.wait_ms_until_next_fetch;
          if (null != wait_ms_until_next_fetch) {
            const _Date = Date;
            const _Date2 = Date;
            const self = this;
            const self2 = this;
            date = new Date(Date.now() + wait_ms_until_next_fetch);
            body.expired_at = date.toISOString();
          }
          c4 = 0;
          c6 = 3;
          obj = { value: body, done: true };
          return obj;
        }
      } catch (tmp22) {
        closure_3 = tmp22;
        if (0 === c4) {
          c6 = 3;
          throw tmp22;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _getContentInventoryOutbox() {
  obj = _asyncToGenerator(async (userId, signal) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let obj13;
      if (c7 === 2) {
        c7 = 3;
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
          let body;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              body = undefined;
              c5 = 1;
              const obj4 = { type: "CONTENT_INVENTORY_FETCH_OUTBOX_START", userId };
              const obj10 = DispatcherDefault;
              obj10.dispatch(obj4);
              const HTTP = HTTPUtils.HTTP;
              const get = HTTP.get;
              const obj6 = { url: Endpoints.CONTENT_INVENTORY_OUTBOX(userId), signal, rejectWithError: obj13.rejectWithMigratedError() };
              c6 = 2;
              c7 = 1;
              obj13 = HTTPUtils;
              const obj7 = { value: get(obj6), done: false };
              return obj7;
            }
          } else if (1 === c6) {
            c5 = 0;
            closure_2 = closure_4;
            const obj8 = { type: "CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE", userId };
            const obj5 = closure_131_1(closure_131_2[5]);
            obj5.dispatch(obj8);
            const self = this;
            const self2 = this;
            const aPIError = new closure_131_0(closure_131_2[4]).APIError(closure_2);
            throw aPIError;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            body = value.body;
            const obj11 = { type: "CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS", outbox: body, userId };
            obj = closure_131_1(closure_131_2[5]);
            obj.dispatch(obj11);
            c5 = 0;
            c7 = 3;
            return { value: body, done: true };
          }
        } catch (tmp25) {
          closure_4 = tmp25;
          if (0 === c5) {
            c7 = 3;
            throw tmp25;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _deleteContentInventoryEntryHistory() {
  obj = _asyncToGenerator(async (entry, userId, arg2) => {
    let closure_2 = arg2;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2) => {
      let obj11;
      if (c9 === 2) {
        c9 = 3;
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
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              closure_4 = tmp4;
              error = undefined;
              c7 = 1;
              const obj9 = DispatcherDefault;
              obj9.dispatch({ type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START" });
              const HTTP = HTTPUtils.HTTP;
              const del = HTTP.del;
              const obj5 = { url: Endpoints.DELETE_MY_CONTENT_INVENTORY_OUTBOX_ENTRY_HISTORY(entry.id), rejectWithError: obj11.rejectWithMigratedError() };
              c8 = 2;
              c9 = 1;
              obj11 = HTTPUtils;
              const obj6 = { value: del(obj5), done: false };
              return obj6;
            }
          } else {
            if (1 === c8) {
              c7 = 0;
              let message;
              if (body != null) {
                body = body.body;
                if (body != null) {
                  message = body.message;
                }
              }
              error = message;
              if (message == null) {
                const intl = closure_133_0(closure_133_2[6]).intl;
                error = intl.string(closure_133_0(closure_133_2[6]).t.FMbL3s);
              }
              const obj7 = { type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE", error };
              const obj4 = closure_133_1(closure_133_2[5]);
              obj4.dispatch(obj7);
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              return { value, done: true };
            } else {
              const obj10 = { type: "CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS", userId, entry };
              obj = closure_133_1(closure_133_2[5]);
              obj.dispatch(obj10);
              if (closure_2 != null) {
                closure_2();
              }
              c7 = 0;
            }
            c9 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp27) {
          body = tmp27;
          if (0 === c7) {
            c9 = 3;
            throw tmp27;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _postTrackToContentInventory() {
  obj = _asyncToGenerator(async (connection_id, arg1) => {
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let items;
      let obj4;
      let obj7;
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.MY_SPOTIFY_CONTENT_INVENTORY, body: obj4, rejectWithError: obj7.rejectWithMigratedError() };
              obj4 = { connection_id, tracks: items };
              items = [closure_1];
              const post = HTTP.post;
              c6 = 2;
              c7 = 1;
              obj7 = HTTPUtils;
              const obj5 = { value: post(request), done: false };
              return obj5;
            }
          } else if (1 === c6) {
            c5 = 0;
            connection_id = closure_4;
            const self = this;
            const self2 = this;
            const aPIError = new closure_131_0(closure_131_2[4]).APIError(connection_id);
            throw aPIError;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp14) {
          closure_4 = tmp14;
          if (0 === c5) {
            c7 = 3;
            throw tmp14;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const ContentInventoryFeedKey = ContentInventoryConstants.ContentInventoryFeedKey;
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryHttpApi.tsx");

export const getMyContentInventory = function getMyContentInventory() {
  return obj(...arguments);
};
export const getContentInventoryOutbox = function getContentInventoryOutbox() {
  return obj(...arguments);
};
export const deleteContentInventoryEntryHistory = function deleteContentInventoryEntryHistory() {
  return obj(...arguments);
};
export const postTrackToContentInventory = function postTrackToContentInventory() {
  return obj(...arguments);
};