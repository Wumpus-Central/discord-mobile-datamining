// === Module 11384: UserActivityActionCreators ===

// Module 11384 (UserActivityActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, activityMetadata;

let obj = function _getMetadata() {
  obj = _asyncToGenerator(async (userId, arg1) => {
    let closure_2;
    let closure_3;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let obj11;
      userId = closure_1;
      const metadata = userId.metadata;
      if (null != metadata) {
        const _Object = Object;
        if (Object.keys(metadata).length > 0) {
          c5 = 3;
          return { value: metadata, done: true };
        }
      }
      activityMetadata = activityMetadata.getActivityMetadata(closure_1);
      if (null != activityMetadata) {
        return activityMetadata;
      }
      if (null == userId.session_id) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("null/undefined session_id");
        throw error;
      }
      const HTTP = require("HTTPUtils").HTTP;
      const get = HTTP.get;
      const obj6 = { url: Endpoints.USER_ACTIVITY_METADATA(closure_1, userId.session_id, userId.application_id), oldFormErrors: true, rejectWithError: obj11.rejectWithMigratedError() };
      obj11 = require("HTTPUtils");
      await get(obj6);
      const body = value.body;
      const obj9 = { type: "ACTIVITY_METADATA_UPDATE", metadata: body, userId };
      obj = closure_131_1(closure_131_2[3]);
      obj.dispatch(obj9);
      return body;
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/UserActivityActionCreators.tsx");

export const sync = function sync(activity, userId) {
  obj = DispatcherDefault;
  const obj2 = { type: "ACTIVITY_SYNC", activity, userId };
  obj.dispatch(obj2);
};
export const play = function play(result, userId) {
  let activity;
  _require = result;
  obj = require("SpotifyUtils");
  const spotifyMetadataFromActivity = obj.getSpotifyMetadataFromActivity(result, userId);
  const nextPromise = spotifyMetadataFromActivity.then((metadata) => {
    obj = DispatcherDefault;
    const obj2 = { type: "ACTIVITY_PLAY", activity, userId, metadata };
    return obj.dispatch(obj2);
  });
  nextPromise.catch(() => {
    obj = DispatcherDefault;
    const obj2 = { type: "ACTIVITY_PLAY", activity, userId };
    return obj.dispatch(obj2);
  });
};
export const getMetadata = function getMetadata() {
  return obj(...arguments);
};