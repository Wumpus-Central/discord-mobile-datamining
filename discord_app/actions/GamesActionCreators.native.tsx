// === Module 11396: fetchJoinSecret ===

// Module 11396 (fetchJoinSecret)
import _modDef4158 from "module_4158" /* 4158 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import ME from "ME" /* 676 */;
import { ActivityIntent } from "items3" /* 4472 */;
import { MAIN_SURFACE } from "FrameLayoutModes" /* 10750 */;

const require = arg1;
function fetchJoinSecret(application) {
  const _require = arg1;
  ({ channelId, messageId } = application);
  const id = application.application.id;
  let tmp = null != channelId;
  ({ userId, sessionId, remotePartyId } = application);
  if (tmp) {
    tmp = null != messageId;
  }
  let tmp2;
  if (tmp) {
    let obj = { channel_id: null, message_id: null, headless: true };
    obj[0] = channelId;
    obj[1] = messageId;
    tmp2 = obj;
  }
  id(709).dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: id, remotePartyId });
  const HTTP = _require(530).HTTP;
  obj = { url: closure_4.USER_ACTIVITY_JOIN(userId, sessionId, id), retries: 3, query: tmp2, oldFormErrors: true, rejectWithError: true };
  const value = HTTP.get(obj);
  return value.then((arg0) => f121741(arg0), () => {
    let obj = id(application[7]);
    obj = { type: "ACTIVITY_JOIN_FAILED", applicationId: id };
    obj.dispatch(obj);
    return false;
  });
}
({ Endpoints: c4, DiscordConnectDeeplinks: c5, WebBrowserType: closure_6, ActivityFlags: error } = ME);
const result = require("set").fileFinishedImporting("actions/GamesActionCreators.native.tsx");

export default {
  addGame() {

  },
  toggleOverlay() {

  },
  editName() {

  },
  identifyGame() {
    error = new Error("not supported");
    return Promise.reject(error);
  },
  getDetectableGames() {

  },
  reportUnverifiedGame() {

  },
  uploadIcon() {

  },
  deleteEntry() {

  },
  launch() {
    return Promise.resolve();
  },
  join(arg0) {
    closure_0 = arg0;
    return callback(function*() {
      if (table === 2) {
        table = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          table = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              table = 3;
              throw arg1;
            } else if (arg0 === 2) {
              table = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              ({ application, channelId, locationObject } = closure_1_0);
              ({ embedded, source } = closure_1_0);
              if (undefined === locationObject) {
                locationObject = {};
              }
              let analyticsLocations = tmp25.analyticsLocations;
              if (undefined === analyticsLocations) {
                analyticsLocations = [];
              }
              if (embedded) {
                let obj2 = closure_1_0(table[9]);
                if (obj2.canLaunchFrame(application)) {
                  let tmp14Result = tmp14(tmp13[10]);
                  obj1 = { applicationId: null, surface: null };
                  obj1[0] = application.id;
                  obj1[1] = closure_1_9;
                  c3 = 1;
                  table = 1;
                  obj2 = { value: null, done: false };
                  obj2[0] = tmp14Result.launchFrame(obj1);
                  return obj2;
                } else {
                  let obj3 = { applicationId: null, activityChannelId: null, source: null, locationObject: null, analyticsLocations: null };
                  obj3[0] = application.id;
                  c1 = channelId;
                  tmp14Result = tmp14(tmp13[11]);
                  if (channelId == null) {
                    c1 = undefined;
                  }
                  obj3[1] = c1;
                  obj3[2] = source;
                  obj3[3] = locationObject;
                  obj3[4] = analyticsLocations;
                  c3 = 2;
                  table = 1;
                  let obj4 = { value: null, done: false };
                  obj4[0] = tmp14Result(obj3);
                  return obj4;
                }
              } else if (null != tmp7) {
                let tmp9 = closure_1_10(tmp25, () => true);
              } else {
                tmp9 = (function joinViaDeeplink(application) {
                  let f121741 = application;
                  application = application.application;
                  if (application.id === f121741(application[4]).DISCORD_CONNECT_EXAMPLE_APP_APPLICATION_ID) {
                    let deeplink_uri = tmp(tmp2[4]).DISCORD_CONNECT_EXAMPLE_APP_DEEPLINK_URI;
                  } else {
                    deeplink_uri = application.deeplink_uri;
                  }
                  let id = deeplink_uri;
                  if (null == deeplink_uri) {
                    if (!id(tmp2[5])(application.applicationActivity, constants.SUPPORTS_JOIN_URL)) {
                      let resolved = Promise.resolve(false);
                    }
                    return resolved;
                  }
                  f121741 = (body) => {
                    const join_url = body.body.join_url;
                    const secret = body.body.secret;
                    if (null != join_url) {
                      id(application[6]).openURL(join_url, closure_1_6.SAFARI);
                      const obj3 = id(application[6]);
                      let obj = { type: "ACTIVITY_JOIN", applicationId: null, parentApplicationId: null, secret: null, intent: null, embedded: null };
                      ({ id: obj5[1], parent_id: obj5[2] } = application);
                      obj[3] = secret;
                      obj[4] = closure_1_8.PLAY;
                      let flag3 = f121741.embedded;
                      if (flag3 == null) {
                        flag3 = false;
                      }
                      obj[5] = flag3;
                      id(application[7]).dispatch(obj);
                      let flag2 = true;
                      const obj4 = id(application[7]);
                    } else {
                      if (null == id) {
                        obj = id(application[7]);
                        obj = { type: "ACTIVITY_JOIN_FAILED", applicationId: null };
                        obj[1] = application.id;
                        obj.dispatch(obj);
                        flag2 = false;
                      } else {
                        const _HermesInternal = HermesInternal;
                        const combined = "" + str.replace(/\/+$/, "") + closure_1_5.GAME_INVITE_FRAGMENT + secret;
                        id(application[6]).openURL(combined, closure_1_6.SAFARI);
                        const obj6 = id(application[6]);
                        obj1 = { type: "ACTIVITY_JOIN", applicationId: null, parentApplicationId: null, secret: null, intent: null, embedded: null };
                        ({ id: obj8[1], parent_id: obj8[2] } = application);
                        obj1[3] = secret;
                        obj1[4] = closure_1_8.PLAY;
                        let flag = f121741.embedded;
                        if (flag == null) {
                          flag = false;
                        }
                        obj1[5] = flag;
                        id(application[7]).dispatch(obj1);
                        flag2 = true;
                        const obj7 = id(application[7]);
                      }
                      str = id;
                    }
                    return flag2;
                  };
                  ({ channelId, messageId } = application);
                  id = application.application.id;
                  let tmp7 = null != channelId;
                  ({ userId, sessionId, remotePartyId } = application);
                  if (tmp7) {
                    tmp7 = null != messageId;
                  }
                  let tmp8;
                  if (tmp7) {
                    let obj = { channel_id: null, message_id: null, headless: true };
                    obj[0] = channelId;
                    obj[1] = messageId;
                    tmp8 = obj;
                  }
                  id(application[7]).dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: id, remotePartyId });
                  const HTTP = tmp(tmp2[8]).HTTP;
                  obj = { url: closure_4.USER_ACTIVITY_JOIN(userId, sessionId, id), retries: 3, query: tmp8, oldFormErrors: true, rejectWithError: true };
                  const value = HTTP.get(obj);
                  resolved = value.then((arg0) => f121741(arg0), () => {
                    let obj = id(application[7]);
                    obj = { type: "ACTIVITY_JOIN_FAILED", applicationId: id };
                    obj.dispatch(obj);
                    return false;
                  });
                })(tmp25);
              }
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                table = 3;
                throw arg1;
              } else {
                table = 3;
                const obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              }
            } else if (arg0 === 1) {
              table = 3;
              throw arg1;
            } else if (arg0 === 2) {
              table = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c0 = arg1;
              if (arg1 == null) {
                c0 = false;
              }
            }
            table = 3;
          }
        } catch (tmp19) {
          table = tmp;
          throw tmp19;
        }
      }
    })();
  },
  joinWithSecret(str) {
    const combined = "" + str.replace(/\/+$/, "") + constants.GAME_INVITE_FRAGMENT + arg1;
    _modDef4158.openURL(combined, constants2.SAFARI);
  }
};