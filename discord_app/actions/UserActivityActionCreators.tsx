// === Module 10915: _getMetadata ===

// Module 10915 (_getMetadata)
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "sortActivity" /* 4559 */;
import { Endpoints } from "ME" /* 676 */;

const require = arg1;
function _getMetadata() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, body) {
      closure_3 = tmp3;
      const table = tmp2;
      const lib = body;
      const metadata = lib.metadata;
      if (null != metadata) {
        const _Object = Object;
        if (Object.keys(metadata).length > 0) {
          c5 = 3;
          obj1 = { value: null, done: true };
          obj1[0] = metadata;
          return obj1;
        }
      }
      if (null != activityMetadata) {
        return activityMetadata;
      }
      if (null == tmp28.session_id) {
        const _Error = Error;
        error = new Error("null/undefined session_id");
        throw error;
      }
      const HTTP = lib(closure_1_2[5]).HTTP;
      const obj3 = { url: null, oldFormErrors: true, rejectWithError: null };
      obj3[0] = c5.USER_ACTIVITY_METADATA(tmp29, tmp28.session_id, tmp28.application_id);
      obj3[2] = lib(closure_1_2[5]).rejectWithMigratedError();
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
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("actions/UserActivityActionCreators.tsx");

export const sync = function sync(activity, userId) {
  let obj = dispatcherDefault;
  obj = { type: "ACTIVITY_SYNC", activity, userId };
  obj.dispatch(obj);
};
export const play = function play(closure_0, closure_1) {
  const _require = closure_0;
  const spotifyMetadataFromActivity = _require(10914).getSpotifyMetadataFromActivity(closure_0, closure_1);
  let obj = _require(10914);
  spotifyMetadataFromActivity.then((metadata) => {
    let obj = callback(closure_1_2[3]);
    obj = { type: "ACTIVITY_PLAY", activity: closure_0, userId: callback, metadata };
    return obj.dispatch(obj);
  }).catch(() => {
    let obj = callback(closure_1_2[3]);
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