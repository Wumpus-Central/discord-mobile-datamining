// discord_app/actions/GamesActionCreators.native.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import LinkingDefault from "../lib/native/Linking.tsx";
import getOrFetchApplicationDefault from "../modules/applications/getOrFetchApplication.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_9 = async function _joinViaDeeplink(arg0) {
  let applicationId = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0) => {
    const parentApplicationId = tmp2;
    closure_130_0 = applicationId;
    applicationId = applicationId.applicationId;
    closure_130_1 = applicationId;
    await getOrFetchApplicationDefault(applicationId);
    closure_130_2 = value;
    if (closure_130_2 != null) {
      const parentId = closure_130_2.parentId;
    }
    c1 = parentId;
    if (parentId == null) {
      c1 = null;
    }
    closure_130_3 = c1;
    if (closure_130_1 === closure_131_0(closure_131_2[4]).DISCORD_CONNECT_EXAMPLE_APP_APPLICATION_ID) {
      let deepLinkUri = closure_131_0(closure_131_2[4]).DISCORD_CONNECT_EXAMPLE_APP_DEEPLINK_URI;
    } else if (closure_130_2 != null) {
      deepLinkUri = closure_130_2.deepLinkUri;
    }
    closure_130_4 = deepLinkUri;
    let tmp19 = null == closure_130_4;
    if (tmp19) {
      tmp19 = !closure_131_1(closure_131_2[5])(closure_130_0.activity, closure_131_7.SUPPORTS_JOIN_URL);
    }
    let tmp26 = !tmp19;
    if (!tmp19) {
      tmp26 = closure_131_10(closure_130_0, (body) => {
        const join_url = body.body.join_url;
        const secret = body.body.secret;
        if (null != join_url) {
          applicationId(5661).openURL(join_url, constants.SAFARI);
          const obj3 = applicationId(5661);
          const obj2 = {
            type: "ACTIVITY_JOIN",
            applicationId,
            parentApplicationId,
            secret,
            intent: constants2.PLAY,
            embedded: null,
          };
          let flag3 = closure_1_0.embedded;
          if (flag3 == null) {
            flag3 = false;
          }
          obj2.embedded = flag3;
          applicationId(584).dispatch(obj2);
          let flag2 = true;
          const obj4 = applicationId(584);
        } else if (null == closure_1_4) {
          const obj5 = { type: "ACTIVITY_JOIN_FAILED", applicationId };
          applicationId(584).dispatch(obj5);
          flag2 = false;
          const obj = applicationId(584);
        } else {
          const _HermesInternal = HermesInternal;
          const combined = "" + closure_1_4.replace(/\/+$/, "") + constants.GAME_INVITE_FRAGMENT + secret;
          applicationId(5661).openURL(combined, constants.SAFARI);
          const obj6 = applicationId(5661);
          const obj8 = {
            type: "ACTIVITY_JOIN",
            applicationId,
            parentApplicationId,
            secret,
            intent: constants2.PLAY,
            embedded: null,
          };
          let flag = closure_1_0.embedded;
          if (flag == null) {
            flag = false;
          }
          obj8.embedded = flag;
          applicationId(584).dispatch(obj8);
          flag2 = true;
          const obj7 = applicationId(584);
        }
        return flag2;
      });
    }
    return tmp26;
  })();
};
function fetchJoinSecret(applicationId, arg1) {
  _require = arg1;
  applicationId = applicationId.applicationId;
  ({ channelId, messageId } = applicationId);
  let tmp = null != channelId;
  ({ userId, sessionId, remotePartyId } = applicationId);
  if (tmp) {
    tmp = null != messageId;
  }
  let tmp2;
  if (tmp) {
    const obj = { channel_id: channelId, message_id: messageId, headless: true };
    tmp2 = obj;
  }
  applicationId(584).dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId, remotePartyId });
  const HTTP = require("HTTPUtils").HTTP;
  const request = {
    url: closure_4.USER_ACTIVITY_JOIN(userId, sessionId, applicationId),
    retries: 3,
    query: tmp2,
    oldFormErrors: true,
    rejectWithError: true,
  };
  value = HTTP.get(request);
  return value.then(
    (result) => closure_0(result),
    () => {
      DispatcherDefault.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId });
      return false;
    },
  );
}
const Constants = fn(1084);
({
  Endpoints: closure_4,
  DiscordConnectDeeplinks: hasOwnProperty,
  WebBrowserType: metroRequire,
  ActivityFlags: closure_7,
} = Constants);
const ActivityIntent = fn(2023).ActivityIntent;
const size = fn(2);
const result = size.fileFinishedImporting("actions/GamesActionCreators.native.tsx");

export default {
  addGame() {},
  toggleOverlay() {},
  editName() {},
  identifyGame() {
    const error = new Error("not supported");
    return Promise.reject(error);
  },
  getDetectableGames() {},
  deleteEntry() {},
  launch(arg0) {
    closure_0 = arg0;
    return (async () => {
      await value(c2[9]).tryStartAsEmbeddedApp(closure_0);
      if (value == null) {
        value = false;
      }
      return value;
    })();
  },
  join(arg0) {
    closure_0 = arg0;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_3 = tmp5;
              let applicationId;
              let channelId;
              let embedded;
              let source;
              closure_130_4 = undefined;
              closure_130_5 = undefined;
              let remotePartyId;
              closure_130_7 = undefined;
              applicationId = closure_0.applicationId;
              channelId = closure_0.channelId;
              embedded = closure_0.embedded;
              source = closure_0.source;
              let locationObject = closure_0.locationObject;
              if (undefined === locationObject) {
                locationObject = {};
              }
              closure_130_4 = locationObject;
              let analyticsLocations = closure_0.analyticsLocations;
              if (undefined === analyticsLocations) {
                analyticsLocations = [];
              }
              closure_130_5 = analyticsLocations;
              remotePartyId = closure_0.remotePartyId;
              c4 = 1;
              c5 = 1;
              const obj4 = { value: c0(tmp2[9]).tryJoinAsFrame(closure_0), done: false };
              return obj4;
            }
          } else {
            let num5 = 1;
            if (1 === tmp5) {
              if (arg0 === num5) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                closure_130_7 = value;
                if (null != closure_130_7) {
                  num5 = tmp2;
                } else if (!embedded) {
                  if (null != remotePartyId) {
                    let tmp12 = fetchJoinSecret(closure_131_0, () => true);
                  } else {
                    tmp12 = (function joinViaDeeplink() {
                      const self = this;
                      const apply = closure_1_9.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    })(closure_131_0);
                  }
                }
                const obj7 = {
                  applicationId,
                  activityChannelId: null,
                  source: null,
                  locationObject: null,
                  analyticsLocations: null,
                };
                let activityChannelId = channelId;
                if (channelId == null) {
                  activityChannelId = undefined;
                }
                obj7.activityChannelId = activityChannelId;
                obj7.source = source;
                obj7.locationObject = closure_130_4;
                obj7.analyticsLocations = closure_130_5;
                c4 = 2;
                c5 = num5;
                const obj8 = { value: activityChannelId(tmp2[10])(obj7), done: false };
                return obj8;
              }
            } else if (arg0 === num5) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c0 = value;
              if (value == null) {
                c0 = false;
              }
            }
            c5 = 3;
          }
        } catch (tmp35) {
          c5 = tmp;
          throw tmp35;
        }
      }
    })();
  },
  joinWithSecret(str, arg1) {
    const combined = "" + str.replace(/\/+$/, "") + constants.GAME_INVITE_FRAGMENT + arg1;
    LinkingDefault.openURL(combined, constants2.SAFARI);
  },
};
