// discord_app/modules/user_profile/WidgetActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/WidgetActionCreators.tsx");

export default {
  setPendingWidgets(items) {
    DispatcherDefault.dispatch({ type: "WIDGET_PENDING_SET", widgets: items });
  },
  savePendingWidgets(arg0) {
    closure_0 = arg0;
    return (async () => {
      if (constants === 2) {
        constants = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              currentUser = currentUser.getCurrentUser();
              let id;
              if (currentUser != null) {
                id = currentUser.id;
              }
              closure_128_0 = id;
              if (null != id) {
                tmp3(tmp34[3]).dispatch({ type: "WIDGET_PENDING_SAVE_START" });
                c3 = 1;
                const mapped = tmp5.map((toSubmission) => toSubmission.toSubmission());
                const HTTP = tmp5(tmp34[4]).HTTP;
                const request = {
                  url: constants.USER_PROFILE_WIDGETS,
                  body: null,
                  oldFormErrors: true,
                  rejectWithError: true,
                };
                const obj4 = { widgets: mapped };
                request.body = obj4;
                currentUser = 2;
                constants = 1;
                const obj7 = { value: HTTP.put(request), done: false };
                return obj7;
              } else {
                constants = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          } else if (1 === tmp8) {
            c3 = 0;
            closure_128_2 = tmp34;
            tmp3(tmp34[3]).dispatch({ type: "WIDGET_PENDING_SAVE_FAILURE" });
            throw closure_128_2;
          } else if (arg0 === 1) {
            constants = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            constants = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_128_1 = value;
            const obj9 = {
              type: "WIDGET_PENDING_SAVE_SUCCESS",
              userId: closure_128_0,
              widgets: closure_128_1.body.widgets,
            };
            tmp3(tmp34[3]).dispatch(obj9);
            c3 = 0;
            constants = 3;
            const obj10 = { value: closure_128_1.body, done: true };
            return obj10;
          }
        } catch (tmp34) {
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
    DispatcherDefault.dispatch({ type: "WIDGET_PENDING_CLEAR" });
  },
  uploadWidgetAsset(arg0) {
    closure_0 = arg0;
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
              closure_1 = tmp2;
              closure_0 = tmp5;
              let body;
              let upload_url;
              let upload_filename;
              closure_128_3 = undefined;
              const HTTP = closure_0(c2[4]).HTTP;
              const request = { url: constants.USER_PROFILE_WIDGET_ASSET_UPLOAD, body: null, rejectWithError: true };
              const obj4 = { filename: closure_0.name, file_size: closure_0.size };
              request.body = obj4;
              c2 = 1;
              c3 = 1;
              const obj5 = { value: HTTP.post(request), done: false };
              return obj5;
            }
          } else if (1 === tmp5) {
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
              const request1 = { method: "PUT", body: closure_129_0, headers: null };
              let str2 = "application/octet-stream";
              if ("" !== closure_129_0.type) {
                str2 = closure_129_0.type;
              }
              const obj7 = { "Content-Type": str2 };
              request1.headers = obj7;
              c2 = 2;
              c3 = 1;
              const obj8 = { value: fetch(upload_url, request1), done: false };
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
            closure_128_3 = value;
            if (closure_128_3.ok) {
              c3 = 3;
              const obj = { value: upload_filename, done: true };
              return obj;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const error = new Error("Failed to upload widget asset: " + closure_128_3.status);
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
    closure_0 = arg0;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ onProgress: importDefault, signal: dependencyMap } = obj);
    return (async () => {
      closure_1 = tmp2;
      const HTTP2 = closure_0(1271).HTTP;
      const request = {
        url: constants.USER_PROFILE_WIDGET_CLIP_UPLOAD,
        body: { file_size: closure_0.size },
        rejectWithError: true,
      };
      await HTTP2.post(request);
      const body = value.body;
      const upload_url = body.upload_url;
      const upload_filename = body.upload_filename;
      const HTTP = closure_0(1271).HTTP;
      const request1 = {
        url: upload_url,
        body: closure_129_0,
        headers: { "Content-Type": closure_0(7737).WIDGET_CLIP_CONTENT_TYPE },
        onRequestProgress(direction) {
          let tmp = "upload" === direction.direction;
          if (tmp) {
            tmp = direction.total > 0;
          }
          if (tmp) {
            if (closure_1_1 != null) {
              tmp2(direction.loaded / direction.total);
            }
          }
        },
        signal: closure_129_2,
        rejectWithError: true,
      };
      await HTTP.put(request1);
      return upload_filename;
    })();
  },
  fetchSuggestedGames() {
    return (async () => {
      if (c7 === 2) {
        c7 = 3;
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
              closure_2 = tmp7;
              closure_130_0 = undefined;
              DispatcherDefault.dispatch({ type: "WIDGET_SUGGESTED_FETCH_START" });
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const obj7 = { url: constants.USER_PROFILE_SUGGESTED_GAMES, rejectWithError: true };
              c6 = 2;
              c7 = 1;
              const obj8 = { value: HTTP.get(obj7), done: false };
              return obj8;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            closure_130_1 = closure_4;
            closure_131_1(closure_131_2[3]).dispatch({ type: "WIDGET_SUGGESTED_FETCH_FAILURE" });
            const obj5 = closure_131_1(closure_131_2[3]);
            closure_131_1(closure_131_2[6]).captureException(closure_130_1);
            throw closure_130_1;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_130_0 = value;
            const body4 = closure_130_0.body;
            let suggested_games;
            if (body4 != null) {
              suggested_games = body4.suggested_games;
            }
            let tmp9 = null != suggested_games;
            if (tmp9) {
              const body = closure_130_0.body;
              let prop;
              if (body != null) {
                prop = body.suggested_wishlist_games;
              }
              tmp9 = null != prop;
            }
            if (!tmp9) {
              closure_131_1(closure_131_2[6]).captureMessage("Suggested games or wishlist games not found");
              const obj = closure_131_1(closure_131_2[6]);
            }
            const body2 = closure_130_0.body;
            let suggested_games1;
            if (body2 != null) {
              suggested_games1 = body2.suggested_games;
            }
            let suggestedGamesIds = suggested_games1;
            if (suggested_games1 == null) {
              suggestedGamesIds = [];
            }
            const obj11 = {
              type: "WIDGET_SUGGESTED_FETCH_SUCCESS",
              suggestedGamesIds,
              suggestedWishlistGamesIds: null,
            };
            const body3 = closure_130_0.body;
            let prop1;
            if (body3 != null) {
              prop1 = body3.suggested_wishlist_games;
            }
            let suggestedWishlistGamesIds = prop1;
            if (prop1 == null) {
              suggestedWishlistGamesIds = [];
            }
            obj11.suggestedWishlistGamesIds = suggestedWishlistGamesIds;
            closure_131_1(closure_131_2[3]).dispatch(obj11);
            c5 = 0;
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp41) {
          closure_4 = tmp41;
          if (tmp4 === c5) {
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
    DispatcherDefault.dispatch({ type: "WIDGET_SUGGESTED_REMOVE_GAME", applicationId });
  },
};
