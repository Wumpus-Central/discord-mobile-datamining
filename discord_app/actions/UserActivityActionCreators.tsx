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
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === activityMetadata) {
            if (arg0 === 1) {
              c5 = 3;
              throw body;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let sendRequest = tmp3;
              const table = tmp2;
              const lib = body;
              body = undefined;
              const metadata = lib.metadata;
              if (null != metadata) {
                const _Object = Object;
                if (Object.keys(metadata).length > 0) {
                  c5 = 3;
                  const obj1 = { value: null, done: true };
                  obj1[0] = metadata;
                  return obj1;
                }
              }
              activityMetadata = activityMetadata.getActivityMetadata(tmp29);
              if (null != activityMetadata) {
                c5 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = activityMetadata;
                return obj2;
              } else if (null == tmp28.session_id) {
                const _Error = Error;
                const error = new Error("null/undefined session_id");
                throw error;
              } else {
                const HTTP = lib(outer1_2[5]).HTTP;
                const obj3 = { url: null, oldFormErrors: true, rejectWithError: null };
                obj3[0] = c5.USER_ACTIVITY_METADATA(tmp29, tmp28.session_id, tmp28.application_id);
                obj3[2] = lib(outer1_2[5]).rejectWithMigratedError();
                activityMetadata = 1;
                c5 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = HTTP.get(obj3);
                return obj4;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw body;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          } else {
            body = body.body;
            obj = body(table[3]);
            const obj6 = { type: "ACTIVITY_METADATA_UPDATE", metadata: null, userId: null };
            obj6[1] = body;
            obj6[2] = lib;
            obj.dispatch(obj6);
            c5 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = body;
            return obj7;
          }
        } catch (tmp22) {
          c5 = tmp;
          throw tmp22;
        }
      }
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
  let obj = importDefault(709);
  obj = { type: "ACTIVITY_SYNC", activity, userId };
  obj.dispatch(obj);
};
export const play = function play(closure_0, closure_1) {
  const _require = closure_0;
  const spotifyMetadataFromActivity = _require(11077).getSpotifyMetadataFromActivity(closure_0, closure_1);
  let obj = _require(11077);
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