// === Module 11752: UserActivityActionCreators ===

// Module 11752 (UserActivityActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import PresenceStore from "PresenceStore" /* 4600 */;

const require = fn;
let closure_6 = async function _getMetadata(arg0, arg1) {
  let metadata = arg0;
  closure_1 = arg1;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp3;
    closure_2 = tmp2;
    closure_130_0 = closure_1;
    metadata = metadata.metadata;
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
    if (null == tmp27.session_id) {
      const _Error = Error;
      const error = new Error("null/undefined session_id");
      throw error;
    }
    const HTTP = require("HTTPUtils").HTTP;
    await HTTP.get({ url: Endpoints.USER_ACTIVITY_METADATA(closure_1, tmp27.session_id, tmp27.application_id), oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() });
    const body = value.body;
    { url: Endpoints.USER_ACTIVITY_METADATA(closure_1, tmp27.session_id, tmp27.application_id), oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    closure_131_1(closure_131_2[3]).dispatch({ type: "ACTIVITY_METADATA_UPDATE", metadata: body, userId: closure_130_0 });
    return body;
  })();
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("actions/UserActivityActionCreators.tsx");

export const sync = function sync(activity, userId) {
  const obj = { type: "ACTIVITY_SYNC", activity, userId };
  obj.dispatch(obj);
};
export const play = function play(result, userId) {
  _require = result;
  const spotifyMetadataFromActivity = require("SpotifyUtils").getSpotifyMetadataFromActivity(result, userId);
  let obj = require("SpotifyUtils");
  spotifyMetadataFromActivity.then((metadata) => {
    const obj = { type: "ACTIVITY_PLAY", activity, userId, metadata };
    return obj.dispatch(obj);
  }).catch(() => {
    const obj = { type: "ACTIVITY_PLAY", activity, userId };
    return obj.dispatch(obj);
  });
};
export const getMetadata = function getMetadata() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};