// discord_app/actions/UserActivityActionCreators.tsx
import sendRequest from "sendRequest";
import sortActivity from "sortActivity";
import { Endpoints } from "ME";

const require = arg1;
function _getMetadata() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, body) {
      let sendRequest = tmp3;
      const table = tmp2;
      const lib = body;
      const metadata = lib.metadata;
      if (null != metadata) {
        const _Object = Object;
        if (Object.keys(metadata).length > 0) {
          let c5 = 3;
          const obj1 = { value: null, done: true };
          obj1[0] = metadata;
          return obj1;
        }
      }
      if (null != activityMetadata) {
        return activityMetadata;
      }
      if (null == tmp28.session_id) {
        const _Error = Error;
        const error = new Error("null/undefined session_id");
        throw error;
      }
      const HTTP = lib(outer1_2[5]).HTTP;
      const obj3 = { url: null, oldFormErrors: true, rejectWithError: null };
      obj3[0] = c5.USER_ACTIVITY_METADATA(tmp29, tmp28.session_id, tmp28.application_id);
      obj3[2] = lib(outer1_2[5]).rejectWithMigratedError();
      yield HTTP.get(obj3);
      body = body.body;
      const obj = body(table[3]);
      const obj6 = { type: "ACTIVITY_METADATA_UPDATE", metadata: null, userId: null };
      obj6[1] = body;
      obj6[2] = lib;
      obj.dispatch(obj6);
      return body;
    })();
  });
  const _getMetadata = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("ME").fileFinishedImporting("actions/UserActivityActionCreators.tsx");

export const sync = function sync(activity, userId) {
  let obj = require("../Dispatcher.tsx");
  obj = { type: "ACTIVITY_SYNC", activity, userId };
  obj.dispatch(obj);
};
export const play = function play(closure_0, closure_1) {
  const _require = closure_0;
  const spotifyMetadataFromActivity = _require("../modules/spotify/SpotifyUtils.tsx").getSpotifyMetadataFromActivity(closure_0, closure_1);
  let obj = _require("../modules/spotify/SpotifyUtils.tsx");
  spotifyMetadataFromActivity.then((metadata) => {
    let obj = callback(outer1_2[3]);
    obj = { type: "ACTIVITY_PLAY", activity: closure_0, userId: callback, metadata };
    return obj.dispatch(obj);
  }).catch(() => {
    let obj = callback(outer1_2[3]);
    obj = { type: "ACTIVITY_PLAY", activity: closure_0, userId: callback };
    return obj.dispatch(obj);
  });
};
export const getMetadata = function getMetadata() {
  const self = this;
  const apply = _getMetadata.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};