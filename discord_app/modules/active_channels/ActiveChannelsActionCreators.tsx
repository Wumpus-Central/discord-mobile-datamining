// discord_app/modules/active_channels/ActiveChannelsActionCreators.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_5 = async function _fetchActiveChannels(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_1 = undefined;
          closure_131_0 = closure_0;
          let num7 = closure_1;
          if (closure_1 === undefined) {
            num7 = 10;
          }
          closure_131_1 = num7;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const obj6 = { type: "ACTIVE_CHANNELS_FETCH_START", guildId: closure_131_0 };
          closure_132_1(closure_132_2[2]).dispatch(obj6);
          c6 = 1;
          const HTTP = closure_132_0(closure_132_2[3]).HTTP;
          const request = { url: closure_132_4.ACTIVE_CHANNELS(closure_131_0), query: null, rejectWithError: true };
          const obj7 = { channel_limit: closure_131_1 };
          request.query = obj7;
          c7 = 3;
          c8 = 1;
          const obj8 = { value: HTTP.get(request), done: false };
          return obj8;
        }
      } else if (2 === tmp7) {
        c6 = 0;
        closure_131_4 = closure_5;
        const obj9 = { type: "ACTIVE_CHANNELS_FETCH_FAILURE", guildId: closure_131_0, error: null };
        const tmp29 = new closure_132_1(closure_132_2[4])(closure_131_4);
        obj9.error = tmp29;
        closure_132_1(closure_132_2[2]).dispatch(obj9);
        throw closure_131_4;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj10 = { value, done: true };
        return obj10;
      } else {
        closure_131_2 = value;
        const body = closure_131_2.body;
        let channels;
        if (body != null) {
          channels = body.channels;
        }
        closure_2 = channels;
        if (channels == null) {
          closure_2 = [];
        }
        closure_131_3 = closure_2;
        const obj12 = { type: "ACTIVE_CHANNELS_FETCH_SUCCESS", guildId: closure_131_0, channels: closure_131_3 };
        closure_132_1(closure_132_2[2]).dispatch(obj12);
        c6 = 0;
        c8 = 3;
        const obj13 = { value: closure_131_2, done: true };
        return obj13;
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
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/active_channels/ActiveChannelsActionCreators.tsx");

export const fetchActiveChannels = function fetchActiveChannels() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
