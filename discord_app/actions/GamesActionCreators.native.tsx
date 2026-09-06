// === Module 11765: GamesActionCreators ===

// Module 11765 (GamesActionCreators)
import LinkingDefault from "Linking" /* 4255 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
function fetchJoinSecret(application, arg1) {
  _require = arg1;
  ({ channelId, messageId } = application);
  const id = application.application.id;
  let tmp = null != channelId;
  ({ userId, sessionId, remotePartyId } = application);
  if (tmp) {
    tmp = null != messageId;
  }
  let tmp2;
  if (tmp) {
    const obj = { channel_id: channelId, message_id: messageId, headless: true };
    tmp2 = obj;
  }
  id(573).dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: id, remotePartyId });
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: closure_4.USER_ACTIVITY_JOIN(userId, sessionId, id), retries: 3, query: tmp2, oldFormErrors: true, rejectWithError: true };
  value = HTTP.get(request);
  return value.then((result) => application(result), () => {
    activityChannelId(573);
    const obj = { type: "ACTIVITY_JOIN_FAILED", applicationId: deeplink_uri };
    obj.dispatch(obj);
    return false;
  });
}
const Constants = fn(1074);
({ Endpoints: closure_4, DiscordConnectDeeplinks: hasOwnProperty, WebBrowserType: metroRequire, ActivityFlags: closure_7 } = Constants);
const ActivityIntent = fn(1920).ActivityIntent;
const MAIN_SURFACE = fn(9511).MAIN_SURFACE;
const size = fn(2);
const result = size.fileFinishedImporting("actions/GamesActionCreators.native.tsx");

export default {
  addGame() {

  },
  toggleOverlay() {

  },
  editName() {

  },
  identifyGame() {
    const error = new Error("not supported");
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
    return (async (arg0, value) => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          c2 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              ({ application, channelId, locationObject } = closure_0);
              ({ embedded, source } = closure_0);
              if (undefined === locationObject) {
                locationObject = {};
              }
              let analyticsLocations = tmp24.analyticsLocations;
              if (undefined === analyticsLocations) {
                analyticsLocations = [];
              }
              if (embedded) {
                let obj2 = c0(c2[9]);
                if (obj2.canLaunchFrame(application)) {
                  let tmp14Result = tmp14(tmp13[10]);
                  let obj1 = { applicationId: application.id, surface };
                  c3 = 1;
                  c2 = 1;
                  obj2 = { value: tmp14Result.launchFrame(obj1), done: false };
                  return obj2;
                } else {
                  let obj3 = { applicationId: application.id, activityChannelId: null, source: null, locationObject: null, analyticsLocations: null };
                  let activityChannelId = channelId;
                  tmp14Result = tmp14(tmp13[11]);
                  if (channelId == null) {
                    activityChannelId = undefined;
                  }
                  obj3.activityChannelId = activityChannelId;
                  obj3.source = source;
                  obj3.locationObject = locationObject;
                  obj3.analyticsLocations = analyticsLocations;
                  c3 = 2;
                  c2 = 1;
                  let obj4 = { value: tmp14Result(obj3), done: false };
                  return obj4;
                }
              } else if (null != tmp7) {
                let tmp9 = fetchJoinSecret(tmp24, () => true);
              } else {
                tmp9 = (function joinViaDeeplink(application) {
                  application = application.application;
                  if (application.id === application(application[4]).DISCORD_CONNECT_EXAMPLE_APP_APPLICATION_ID) {
                    let deeplink_uri = tmp(tmp2[4]).DISCORD_CONNECT_EXAMPLE_APP_DEEPLINK_URI;
                  } else {
                    deeplink_uri = application.deeplink_uri;
                  }
                  if (null == deeplink_uri) {
                    if (!deeplink_uri(tmp2[5])(application.applicationActivity, constants3.SUPPORTS_JOIN_URL)) {
                      let resolved = Promise.resolve(false);
                    }
                    return resolved;
                  }
                  closure_129_0 = (body) => {
                    const join_url = body.body.join_url;
                    const secret = body.body.secret;
                    if (null != join_url) {
                      activityChannelId(4255).openURL(join_url, constants2.SAFARI);
                      const obj3 = activityChannelId(4255);
                      let obj = { type: "ACTIVITY_JOIN", applicationId: null, parentApplicationId: null, secret: null, intent: null, embedded: null };
                      ({ id: obj5.applicationId, parent_id: obj5.parentApplicationId } = application);
                      obj.secret = secret;
                      obj.intent = constants4.PLAY;
                      let flag3 = application.embedded;
                      if (flag3 == null) {
                        flag3 = false;
                      }
                      obj.embedded = flag3;
                      activityChannelId(573).dispatch(obj);
                      let flag2 = true;
                      const obj4 = activityChannelId(573);
                    } else {
                      if (null == deeplink_uri) {
                        activityChannelId(573);
                        obj = { type: "ACTIVITY_JOIN_FAILED", applicationId: application.id };
                        obj.dispatch(obj);
                        flag2 = false;
                      } else {
                        const _HermesInternal = HermesInternal;
                        const combined = "" + str.replace(/\/+$/, "") + constants.GAME_INVITE_FRAGMENT + secret;
                        activityChannelId(4255).openURL(combined, constants2.SAFARI);
                        const obj6 = activityChannelId(4255);
                        const obj1 = { type: "ACTIVITY_JOIN", applicationId: null, parentApplicationId: null, secret: null, intent: null, embedded: null };
                        ({ id: obj8.applicationId, parent_id: obj8.parentApplicationId } = application);
                        obj1.secret = secret;
                        obj1.intent = constants4.PLAY;
                        let flag = application.embedded;
                        if (flag == null) {
                          flag = false;
                        }
                        obj1.embedded = flag;
                        activityChannelId(573).dispatch(obj1);
                        flag2 = true;
                        const obj7 = activityChannelId(573);
                      }
                      str = deeplink_uri;
                    }
                    return flag2;
                  };
                  ({ channelId, messageId } = application);
                  const id = application.application.id;
                  closure_129_1 = id;
                  let tmp7 = null != channelId;
                  ({ userId, sessionId, remotePartyId } = application);
                  if (tmp7) {
                    tmp7 = null != messageId;
                  }
                  let tmp8;
                  if (tmp7) {
                    let obj = { channel_id: channelId, message_id: messageId, headless: true };
                    tmp8 = obj;
                  }
                  deeplink_uri(application[7]).dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: id, remotePartyId });
                  const HTTP = tmp(tmp2[8]).HTTP;
                  const request = { url: closure_4.USER_ACTIVITY_JOIN(userId, sessionId, id), retries: 3, query: tmp8, oldFormErrors: true, rejectWithError: true };
                  value = HTTP.get(request);
                  resolved = value.then((result) => application(result), () => {
                    activityChannelId(573);
                    const obj = { type: "ACTIVITY_JOIN_FAILED", applicationId: deeplink_uri };
                    obj.dispatch(obj);
                    return false;
                  });
                })(tmp24);
              }
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else {
                c2 = 3;
                const obj5 = { value, done: true };
                return obj5;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c0 = value;
              if (value == null) {
                c0 = false;
              }
            }
            c2 = 3;
          }
        } catch (tmp19) {
          c2 = tmp;
          throw tmp19;
        }
      }
    })();
  },
  joinWithSecret(str, arg1) {
    const combined = "" + str.replace(/\/+$/, "") + constants.GAME_INVITE_FRAGMENT + arg1;
    LinkingDefault.openURL(combined, constants2.SAFARI);
  }
};