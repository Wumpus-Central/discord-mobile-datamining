// discord_app/modules/user_profile/WidgetActionCreators.tsx
import convertClip from "convertClip";
import mergeGuildAvatar from "mergeGuildAvatar";
import { Endpoints } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/user_profile/WidgetActionCreators.tsx");

export default {
  setPendingWidgets(items) {
    let obj = require("../../Dispatcher.tsx");
    obj = { type: "WIDGET_PENDING_SET", widgets: items };
    obj.dispatch(obj);
  },
  savePendingWidgets(arg0) {
    let closure_0 = arg0;
    return callback(function*() {
      if (constants === 2) {
        constants = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          constants = 2;
          if (0 === currentUser) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp3;
              let id = tmp5;
              id = undefined;
              closure_1 = undefined;
              currentUser = currentUser.getCurrentUser();
              id = undefined;
              if (currentUser != null) {
                id = currentUser.id;
              }
              if (null != id) {
                let obj5 = outer1_1(outer1_2[3]);
                obj5.dispatch({ type: "WIDGET_PENDING_SAVE_START" });
                let c3 = 1;
                const mapped = outer1_0.map((toSubmission) => toSubmission.toSubmission());
                const HTTP = outer1_0(outer1_2[4]).HTTP;
                const obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
                obj1[0] = constants.USER_PROFILE_WIDGETS;
                const obj2 = { widgets: null };
                obj2[0] = mapped;
                obj1[1] = obj2;
                currentUser = 2;
                constants = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = HTTP.put(obj1);
                return obj3;
              } else {
                constants = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          } else if (1 === tmp8) {
            c3 = 0;
            let obj4 = outer1_1(outer1_2[3]);
            obj4.dispatch({ type: "WIDGET_PENDING_SAVE_FAILURE" });
            throw closure_2;
          } else if (arg0 === 1) {
            constants = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            constants = 3;
            obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            closure_1 = arg1;
            obj = outer1_1(outer1_2[3]);
            obj5 = { type: "WIDGET_PENDING_SAVE_SUCCESS", userId: null, widgets: null };
            obj5[1] = id;
            obj5[2] = closure_1.body.widgets;
            obj.dispatch(obj5);
            c3 = 0;
            constants = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = closure_1.body;
            return obj6;
          }
        } catch (tmp34) {
          closure_2 = tmp34;
          if (tmp4 === c3) {
            constants = tmp2;
            throw tmp34;
          } else {
            currentUser = tmp;
          }
        }
      }
    })();
  },
  clearPendingWidgets() {
    require("../../Dispatcher.tsx").dispatch({ type: "WIDGET_PENDING_CLEAR" });
  },
  uploadWidgetAsset(arg0) {
    let closure_0 = arg0;
    return callback(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let upload_url = tmp2;
              let body = tmp5;
              body = undefined;
              upload_url = undefined;
              table = undefined;
              c3 = undefined;
              const HTTP = outer1_0(table[4]).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: true };
              obj1[0] = outer1_5.USER_PROFILE_WIDGET_ASSET_UPLOAD;
              const obj2 = { filename: null, file_size: null };
              obj2[0] = outer1_0.name;
              obj2[1] = outer1_0.size;
              obj1[1] = obj2;
              table = 1;
              c3 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              body = arg1.body;
              upload_url = body.upload_url;
              table = body.upload_filename;
              const obj5 = { method: "PUT", body: null, headers: null };
              obj5[1] = body;
              let str2 = "application/octet-stream";
              if ("" !== body.type) {
                str2 = body.type;
              }
              const obj6 = { "Content-Type": null };
              obj6[0] = str2;
              obj5[2] = obj6;
              table = 2;
              c3 = 1;
              const obj7 = { value: null, done: false };
              obj7[0] = fetch(upload_url, obj5);
              return obj7;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = arg1;
            return obj8;
          } else {
            c3 = arg1;
            if (c3.ok) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = table;
              return obj;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const error = new Error("Failed to upload widget asset: " + c3.status);
              throw error;
            }
          }
        } catch (tmp17) {
          c3 = tmp;
          throw tmp17;
        }
      }
    })();
  },
  uploadWidgetClip(arg0) {
    let dependencyMap;
    let importDefault;
    let closure_0 = arg0;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ onProgress: importDefault, signal: dependencyMap } = obj);
    return callback(function*() {
      let upload_url = tmp2;
      const HTTP2 = outer1_0(530).HTTP;
      const obj1 = { url: null, body: null, rejectWithError: true };
      obj1[0] = outer1_5.USER_PROFILE_WIDGET_CLIP_UPLOAD;
      const obj2 = { file_size: null };
      obj2[0] = outer1_0.size;
      obj1[1] = obj2;
      yield HTTP2.post(obj1);
      const body = arg1.body;
      upload_url = body.upload_url;
      const HTTP = outer1_0(530).HTTP;
      const obj5 = { url: null, body: null, headers: null, onRequestProgress: null, signal: null, rejectWithError: true };
      obj5[0] = upload_url;
      obj5[1] = body;
      const obj6 = { "Content-Type": null };
      obj6[0] = outer1_0(6997).WIDGET_CLIP_CONTENT_TYPE;
      obj5[2] = obj6;
      obj5[3] = function onRequestProgress(direction) {
        let tmp = "upload" === direction.direction;
        if (tmp) {
          tmp = direction.total > 0;
        }
        if (tmp) {
          if (upload_url != null) {
            tmp2(direction.loaded / direction.total);
          }
        }
      };
      obj5[4] = dependencyMap;
      yield HTTP.put(obj5);
      return dependencyMap;
    })();
  },
  fetchSuggestedGames() {
    return callback(function*() {
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
          return { value: "HermesInternal", done: null };
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
              let convertClip = tmp3;
              const dependencyMap = tmp7;
              let closure_0;
              outer1_1(outer1_2[3]).dispatch({ type: "WIDGET_SUGGESTED_FETCH_START" });
              let constants = 1;
              const HTTP = outer1_0(outer1_2[4]).HTTP;
              let obj1 = { url: null, rejectWithError: true };
              obj1[0] = constants.USER_PROFILE_SUGGESTED_GAMES;
              c6 = 2;
              c7 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            constants = 0;
            let callback = mergeGuildAvatar;
            let obj4 = callback(709);
            obj4.dispatch({ type: "WIDGET_SUGGESTED_FETCH_FAILURE" });
            callback(1208).captureException(callback);
            throw callback;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 0;
            c7 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            closure_0 = arg1;
            const body4 = closure_0.body;
            let suggested_games;
            if (body4 != null) {
              suggested_games = body4.suggested_games;
            }
            let tmp9 = null != suggested_games;
            if (tmp9) {
              const body = closure_0.body;
              let prop;
              if (body != null) {
                prop = body.suggested_wishlist_games;
              }
              tmp9 = null != prop;
            }
            if (!tmp9) {
              obj = callback(1208);
              obj.captureMessage("Suggested games or wishlist games not found");
            }
            obj1 = callback(709);
            const body2 = closure_0.body;
            let suggested_games1;
            if (body2 != null) {
              suggested_games1 = body2.suggested_games;
            }
            closure_0 = suggested_games1;
            if (suggested_games1 == null) {
              closure_0 = [];
            }
            obj4 = { type: "WIDGET_SUGGESTED_FETCH_SUCCESS", suggestedGamesIds: null, suggestedWishlistGamesIds: null };
            obj4[1] = closure_0;
            const body3 = closure_0.body;
            let prop1;
            if (body3 != null) {
              prop1 = body3.suggested_wishlist_games;
            }
            callback = prop1;
            if (prop1 == null) {
              callback = [];
            }
            obj4[2] = callback;
            obj1.dispatch(obj4);
            constants = 0;
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp41) {
          mergeGuildAvatar = tmp41;
          if (tmp4 === constants) {
            c7 = tmp2;
            throw tmp41;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  },
  removeGameFromSuggestedGames(applicationId) {
    let obj = require("../../Dispatcher.tsx");
    obj = { type: "WIDGET_SUGGESTED_REMOVE_GAME", applicationId };
    obj.dispatch(obj);
  }
};