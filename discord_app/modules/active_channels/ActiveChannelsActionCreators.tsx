// === Module 15418: _fetchActiveChannels ===

// Module 15418 (_fetchActiveChannels)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;

const require = arg1;
function _fetchActiveChannels() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    const iter = (function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              closure_3 = tmp7;
              let num7;
              if (num7 === undefined) {
                num7 = 10;
              }
              let body;
              closure_3 = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const obj2 = { type: "ACTIVE_CHANNELS_FETCH_START", guildId: null };
              obj2[1] = callback;
              num7(body[2]).dispatch(obj2);
              c6 = 1;
              const HTTP = callback(body[3]).HTTP;
              const obj3 = { url: null, query: null, rejectWithError: true };
              obj3[0] = closure_4.ACTIVE_CHANNELS(callback);
              let obj4 = { channel_limit: null };
              obj4[0] = num7;
              obj3[1] = obj4;
              c7 = 3;
              c8 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = HTTP.get(obj3);
              return obj5;
            }
          } else if (2 === tmp7) {
            c6 = 0;
            closure_4 = closure_5;
            obj4 = num7(body[2]);
            const obj6 = { type: "ACTIVE_CHANNELS_FETCH_FAILURE", guildId: null, error: null };
            obj6[1] = callback;
            const tmp29 = new num7(body[4])(closure_4);
            obj6[2] = tmp29;
            obj4.dispatch(obj6);
            throw closure_4;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          } else {
            body = arg1;
            body = body.body;
            let channels;
            if (body != null) {
              channels = body.channels;
            }
            body = channels;
            if (channels == null) {
              body = [];
            }
            closure_3 = body;
            obj = num7(body[2]);
            const obj8 = { type: "ACTIVE_CHANNELS_FETCH_SUCCESS", guildId: null, channels: null };
            obj8[1] = callback;
            obj8[2] = closure_3;
            obj.dispatch(obj8);
            c6 = 0;
            c8 = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = body;
            return obj9;
          }
        } catch (tmp34) {
          closure_5 = tmp34;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp34;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/active_channels/ActiveChannelsActionCreators.tsx");

export const fetchActiveChannels = function fetchActiveChannels(arg0) {
  const self = this;
  const apply = _fetchActiveChannels.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};