// === Module 8625: WidgetActionCreators ===

// Module 8625 (WidgetActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

let c2, c6, c7, closure_4, constants;

const Endpoints = Constants.Endpoints;
let obj = {
  setPendingWidgets(items) {
    const obj = DispatcherDefault;
    const obj2 = { type: "WIDGET_PENDING_SET", widgets: items };
    obj.dispatch(obj2);
  },
  savePendingWidgets(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let closure_1;
      let currentUser;
      let obj4;
      let putResult;
      if (constants === 2) {
        constants = 3;
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
        let c3;
        try {
          let tmp;
          let id;
          constants = 2;
          if (0 === currentUser) {
            if (arg0 === 1) {
              constants = 3;
              throw value;
            } else if (arg0 === 2) {
              constants = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              tmp = undefined;
              currentUser = currentUser.getCurrentUser();
              id = undefined;
              if (currentUser != null) {
                id = currentUser.id;
              }
              if (null != id) {
                const obj6 = tmp(closure_2[3]);
                obj6.dispatch({ type: "WIDGET_PENDING_SAVE_START" });
                c3 = 1;
                const mapped = putResult.map((toSubmission) => toSubmission.toSubmission());
                const HTTP = putResult(closure_2[4]).HTTP;
                const request = { url: constants.USER_PROFILE_WIDGETS, body: obj4, oldFormErrors: true, rejectWithError: true };
                obj4 = { widgets: mapped };
                putResult = HTTP.put(request);
                currentUser = 2;
                constants = 1;
                const obj7 = { value: putResult, done: false };
                return obj7;
              } else {
                constants = 3;
                return { value: "IconComponent", done: null };
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            const obj5 = tmp(closure_2[3]);
            putResult = obj5.dispatch({ type: "WIDGET_PENDING_SAVE_FAILURE" });
            throw closure_2;
          } else if (arg0 === 1) {
            constants = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            constants = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            tmp = value;
            const obj9 = { type: "WIDGET_PENDING_SAVE_SUCCESS", userId: id, widgets: tmp.body.widgets };
            const obj = tmp(closure_2[3]);
            obj.dispatch(obj9);
            c3 = 0;
            constants = 3;
            const obj10 = { value: tmp.body, done: true };
            return obj10;
          }
        } catch (tmp30) {
          closure_2 = tmp30;
          if (0 === c3) {
            constants = 3;
            throw tmp30;
          } else {
            currentUser = 1;
          }
        }
      }
    })();
  },
  clearPendingWidgets() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "WIDGET_PENDING_CLEAR" });
  },
  uploadWidgetAsset(arg0) {
    let closure_0 = arg0;
    return (async function() {
      let obj4;
      let obj7;
      if (c3 === 2) {
        c3 = 3;
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
        try {
          let body;
          let upload_url;
          let upload_filename;
          let closure_3;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp;
              closure_0 = tmp4;
              body = undefined;
              upload_url = undefined;
              upload_filename = undefined;
              closure_3 = undefined;
              const HTTP = closure_0(c2[4]).HTTP;
              const request = { url: constants.USER_PROFILE_WIDGET_ASSET_UPLOAD, body: obj4, rejectWithError: true };
              obj4 = { filename: closure_0.name, file_size: closure_0.size };
              c2 = 1;
              c3 = 1;
              const obj5 = { value: HTTP.post(request), done: false };
              return obj5;
            }
          } else if (1 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              body = value.body;
              upload_url = body.upload_url;
              upload_filename = body.upload_filename;
              const request1 = { method: "PUT", body: closure_129_0, headers: obj7 };
              let str2 = "application/octet-stream";
              const _fetch = fetch;
              const tmp23 = upload_url;
              if ("" !== closure_129_0.type) {
                str2 = closure_129_0.type;
              }
              obj7 = { "Content-Type": str2 };
              c2 = 2;
              c3 = 1;
              const obj8 = { value: _fetch(tmp23, request1), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_3 = value;
            if (closure_3.ok) {
              c3 = 3;
              const obj = { value: upload_filename, done: true };
              return obj;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("Failed to upload widget asset: " + closure_3.status);
              throw error;
            }
          }
        } catch (tmp14) {
          c3 = 3;
          throw tmp14;
        }
      }
    })();
  },
  uploadWidgetClip(arg0) {
    let closure_0 = arg0;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ onProgress: importDefault, signal: dependencyMap } = obj);
    return (async () => {
      let c3;
      let closure_1;
      let obj4;
      let obj7;
      closure_0 = tmp4;
      const HTTP2 = closure_0(c2[4]).HTTP;
      const request = { url: constants.USER_PROFILE_WIDGET_CLIP_UPLOAD, body: obj4, rejectWithError: true };
      obj4 = { file_size: closure_0.size };
      await HTTP2.post(request);
      const body = value.body;
      const upload_url = body.upload_url;
      const upload_filename = body.upload_filename;
      const HTTP = closure_0(c2[4]).HTTP;
      const request1 = {
        url: upload_url,
        body: closure_129_0,
        headers: obj7,
        onRequestProgress(direction) {
          const tmp = "upload" === direction.direction && direction.total > 0;
          if (tmp) {
            if (closure_1_1 != null) {
              tmp2(direction.loaded / direction.total);
            }
          }
        },
        signal: closure_129_2,
        rejectWithError: true
      };
      obj7 = { "Content-Type": closure_0(c2[5]).WIDGET_CLIP_CONTENT_TYPE };
      const put = HTTP.put;
      await put(request1);
      return upload_filename;
    })();
  },
  fetchSuggestedGames() {
    return (async () => {
      if (c7 === 2) {
        c7 = 3;
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
        let c5;
        try {
          let suggestedGamesIds;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_3 = tmp;
              let closure_2 = tmp4;
              suggestedGamesIds = undefined;
              const obj9 = DispatcherDefault;
              obj9.dispatch({ type: "WIDGET_SUGGESTED_FETCH_START" });
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const obj6 = { url: constants.USER_PROFILE_SUGGESTED_GAMES, rejectWithError: true };
              c6 = 2;
              c7 = 1;
              const obj7 = { value: HTTP.get(obj6), done: false };
              return obj7;
            }
          } else {
            let suggestedWishlistGamesIds;
            if (1 === c6) {
              c5 = 0;
              suggestedWishlistGamesIds = closure_4;
              const obj4 = closure_131_1(closure_131_2[3]);
              obj4.dispatch({ type: "WIDGET_SUGGESTED_FETCH_FAILURE" });
              const obj5 = closure_131_1(closure_131_2[6]);
              obj5.captureException(suggestedWishlistGamesIds);
              throw suggestedWishlistGamesIds;
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              suggestedGamesIds = value;
              const body4 = suggestedGamesIds.body;
              let suggested_games;
              if (body4 != null) {
                suggested_games = body4.suggested_games;
              }
              let tmp6 = null != suggested_games;
              if (tmp6) {
                const body = suggestedGamesIds.body;
                let prop;
                if (body != null) {
                  prop = body.suggested_wishlist_games;
                }
                tmp6 = null != prop;
              }
              if (!tmp6) {
                const obj = closure_131_1(closure_131_2[6]);
                obj.captureMessage("Suggested games or wishlist games not found");
              }
              const body2 = suggestedGamesIds.body;
              let suggested_games1;
              const dispatch = closure_131_1(closure_131_2[3]).dispatch;
              const tmp18 = closure_131_1(closure_131_2[3]);
              if (body2 != null) {
                suggested_games1 = body2.suggested_games;
              }
              suggestedGamesIds = suggested_games1;
              if (suggested_games1 == null) {
                suggestedGamesIds = [];
              }
              const obj10 = { type: "WIDGET_SUGGESTED_FETCH_SUCCESS", suggestedGamesIds, suggestedWishlistGamesIds };
              const body3 = suggestedGamesIds.body;
              let prop1;
              if (body3 != null) {
                prop1 = body3.suggested_wishlist_games;
              }
              suggestedWishlistGamesIds = prop1;
              if (prop1 == null) {
                suggestedWishlistGamesIds = [];
              }
              dispatch(obj10);
              c5 = 0;
              c7 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } catch (tmp39) {
          closure_4 = tmp39;
          if (0 === c5) {
            c7 = 3;
            throw tmp39;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  },
  removeGameFromSuggestedGames(applicationId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "WIDGET_SUGGESTED_REMOVE_GAME", applicationId };
    obj.dispatch(obj2);
  }
};
const result = size.fileFinishedImporting("modules/user_profile/WidgetActionCreators.tsx");

export default obj;