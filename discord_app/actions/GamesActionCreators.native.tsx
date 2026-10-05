// discord_app/actions/GamesActionCreators.native.tsx
import Constants2 from "../modules/activities/Constants.tsx";
import LinkingDefault from "../lib/native/Linking.tsx";
import FramesConstants from "../modules/frames/FramesConstants.tsx";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c2, c3;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function fetchJoinSecret(application, arg1) {
  let channelId;
  let closure_0;
  let messageId;
  let remotePartyId;
  let sessionId;
  let userId;
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
    tmp2 = { channel_id: channelId, message_id: messageId, headless: true };
    const obj = { channel_id: channelId, message_id: messageId, headless: true };
  }
  const obj2 = id(584);
  obj2.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: id, remotePartyId });
  const HTTP = require("HTTPUtils").HTTP;
  const request = {
    url: closure_4.USER_ACTIVITY_JOIN(userId, sessionId, id),
    retries: 3,
    query: tmp2,
    oldFormErrors: true,
    rejectWithError: true,
  };
  const value = HTTP.get(request);
  return value.then(
    (result) => f154802(result),
    () => {
      const obj = deeplink_uri(application[7]);
      const obj2 = { type: "ACTIVITY_JOIN_FAILED", applicationId: id };
      obj.dispatch(obj2);
      return false;
    },
  );
}
({
  Endpoints: closure_4,
  DiscordConnectDeeplinks: hasOwnProperty,
  WebBrowserType: metroRequire,
  ActivityFlags: metroImportDefault,
} = Constants);
const ActivityIntent = Constants2.ActivityIntent;
const MAIN_SURFACE = FramesConstants.MAIN_SURFACE;
let obj = {
  addGame() {},
  toggleOverlay() {},
  editName() {},
  identifyGame() {
    const error = new Error("not supported");
    return reject(error);
  },
  getDetectableGames() {},
  reportUnverifiedGame() {},
  uploadIcon() {},
  deleteEntry() {},
  launch() {
    return Promise.resolve();
  },
  join(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let _false;
      let activityChannelId;
      let analyticsLocations;
      let application;
      let channelId;
      let embedded;
      let locationObject;
      let source;
      let value;
      function joinViaDeeplink(application) {
        let channelId;
        let constants3;
        let deeplink_uri;
        let messageId;
        let remotePartyId;
        let sessionId;
        let userId;
        closure_0 = application;
        application = application.application;
        if (application.id === closure_0(application[4]).DISCORD_CONNECT_EXAMPLE_APP_APPLICATION_ID) {
          deeplink_uri = tmp(tmp2[4]).DISCORD_CONNECT_EXAMPLE_APP_DEEPLINK_URI;
        } else {
          deeplink_uri = application.deeplink_uri;
        }
        if (null == deeplink_uri) {
          let resolved;
          if (!deeplink_uri(application[5])(application.applicationActivity, constants.SUPPORTS_JOIN_URL)) {
            let flag = false;
            resolved = Promise.resolve(false);
          }
          return resolved;
        }
        const f154802 = (body) => {
          let flag;
          let flag2;
          let flag3;
          const join_url = body.body.join_url;
          const secret = body.body.secret;
          if (null != join_url) {
            const obj3 = deeplink_uri(application[6]);
            obj3.openURL(join_url, constants2.SAFARI);
            const obj2 = {
              type: "ACTIVITY_JOIN",
              applicationId: null,
              parentApplicationId: null,
              secret,
              intent: constants3.PLAY,
              embedded: flag3,
            };
            ({ id: obj4.applicationId, parent_id: obj4.parentApplicationId } = id);
            flag3 = f154802.embedded;
            const dispatch = deeplink_uri(application[7]).dispatch;
            deeplink_uri(application[7]);
            if (flag3 == null) {
              flag3 = false;
            }
            dispatch(obj2);
            flag2 = true;
          } else if (null == id) {
            const obj9 = { type: "ACTIVITY_JOIN_FAILED", applicationId: id.id };
            const obj = deeplink_uri(application[7]);
            obj.dispatch(obj9);
            flag2 = false;
          } else {
            const _HermesInternal = HermesInternal;
            const combined = "" + id.replace(/\/+$/, "") + constants.GAME_INVITE_FRAGMENT + secret;
            const obj5 = deeplink_uri(application[6]);
            obj5.openURL(combined, constants2.SAFARI);
            const obj10 = {
              type: "ACTIVITY_JOIN",
              applicationId: null,
              parentApplicationId: null,
              secret,
              intent: constants3.PLAY,
              embedded: flag,
            };
            ({ id: obj6.applicationId, parent_id: obj6.parentApplicationId } = id);
            flag = f154802.embedded;
            const dispatch2 = deeplink_uri(application[7]).dispatch;
            deeplink_uri(application[7]);
            if (flag == null) {
              flag = false;
            }
            dispatch2(obj10);
            flag2 = true;
          }
          return flag2;
        };
        ({ channelId, messageId } = application);
        const id = application.application.id;
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
        let obj2 = deeplink_uri(tmp2[7]);
        obj2.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: id, remotePartyId });
        const HTTP = tmp(tmp2[8]).HTTP;
        const request = {
          url: closure_4.USER_ACTIVITY_JOIN(userId, sessionId, id),
          retries: 3,
          query: tmp8,
          oldFormErrors: true,
          rejectWithError: true,
        };
        const value = HTTP.get(request);
        resolved = value.then(
          (result) => f154802(result),
          () => {
            const obj = deeplink_uri(application[7]);
            const obj2 = { type: "ACTIVITY_JOIN_FAILED", applicationId: id };
            obj.dispatch(obj2);
            return false;
          },
        );
      }
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
          let flag2;
          c2 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              ({ application, channelId, locationObject } = analyticsLocations);
              ({ embedded, source } = analyticsLocations);
              if (undefined === locationObject) {
                locationObject = {};
              }
              analyticsLocations = analyticsLocations.analyticsLocations ?? [];
              if (embedded) {
                const obj4 = _false(c2[9]);
                if (obj4.canLaunchContextlessFrame(application)) {
                  let obj5 = { applicationId: application.id, surface };
                  c3 = 1;
                  const tmp11Result = activityChannelId(c2[10]);
                  c2 = 1;
                  const obj6 = { value: tmp11Result.launchFrame(obj5), done: false };
                  return obj6;
                } else {
                  const obj7 = {
                    applicationId: application.id,
                    activityChannelId,
                    source,
                    locationObject,
                    analyticsLocations,
                  };
                  activityChannelId = channelId;
                  const tmp11Result2 = activityChannelId(c2[11]);
                  if (channelId == null) {
                    activityChannelId = undefined;
                  }
                  c3 = 2;
                  c2 = 1;
                  const obj8 = { value: tmp11Result2(obj7), done: false };
                  return obj8;
                }
              } else {
                let tmp7;
                if (null != tmp5) {
                  tmp7 = fetchJoinSecret(analyticsLocations, () => true);
                } else {
                  tmp7 = joinViaDeeplink(analyticsLocations);
                }
                flag2 = tmp7;
              }
            }
          } else if (1 === tmp3) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else {
              flag2 = true;
              if (arg0 === 2) {
                c2 = 3;
                let obj9 = { value, done: true };
                return obj9;
              }
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            _false = value;
            if (value == null) {
              let flag = false;
              _false = false;
            }
            flag2 = _false;
          }
          c2 = 3;
          let obj10 = { value: flag2, done: true };
          return obj10;
        } catch (tmp16) {
          c2 = 3;
          throw tmp16;
        }
      }
    })();
  },
  joinWithSecret(str, arg1) {
    const combined = "" + str.replace(/\/+$/, "") + hasOwnProperty.GAME_INVITE_FRAGMENT + arg1;
    const obj = LinkingDefault;
    obj.openURL(combined, metroRequire.SAFARI);
  },
};
const result = size.fileFinishedImporting("actions/GamesActionCreators.native.tsx");

export default obj;
