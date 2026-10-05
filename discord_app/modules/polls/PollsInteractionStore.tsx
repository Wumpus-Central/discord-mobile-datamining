// === Module 11086: PollsInteractionStore ===

// Module 11086 (PollsInteractionStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import shallowEqualDefault from "shallowEqual" /* 568 */;
import react from "react" /* 576 */;
import module_1254 from "module_1254" /* 1254 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_3 = {};
let closure_4 = module_1254.createWithEqualityFn((arg0) => {
  let closure_0 = arg0;
  let obj = {
    pollsByChannelId: {},
    pollsByMessageId: {},
    updatePollState(arg0, arg1, arg2) {
      closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      let obj = closure_0(dependencyMap[1]);
      obj.batchUpdates(() => {
        closure_0((pollsByChannelId) => {
          let obj2;
          let obj4;
          let tmp4;
          if (pollsByChannelId.pollsByChannelId[closure_1_0] != null) {
            tmp4 = tmp3[closure_1_1];
          }
          const tmpResult = closure_1_2(tmp4);
          const obj = { pollsByChannelId: obj2, pollsByMessageId: obj4 };
          obj2 = {};
          const merged = Object.assign(pollsByChannelId.pollsByChannelId);
          const obj3 = {};
          const merged1 = Object.assign(pollsByChannelId.pollsByChannelId[closure_1_0]);
          obj3[closure_1_1] = tmpResult;
          obj2[closure_1_0] = obj3;
          obj4 = {};
          const merged2 = Object.assign(pollsByChannelId.pollsByMessageId);
          obj4[closure_1_1] = tmpResult;
          return obj;
        });
      });
    }
  };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp3;
  let closure_0 = arg0;
  let obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function n(arg0) {
      closure_0 = arg0;
      const obj = {};
      const item = closure_0.forEach((item) => {
        if (null != pollsByMessageId.pollsByMessageId[item]) {
          obj[item] = pollsByMessageId.pollsByMessageId[item];
        }
      });
      return obj;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return closure_4(tmp3, shallowEqualDefault);
}) : ((arg0) => {
  let closure_0 = arg0;
  return closure_4((arg0) => {
    closure_0 = arg0;
    const obj = {};
    const item = closure_0.forEach((item) => {
      if (null != pollsByMessageId.pollsByMessageId[item]) {
        obj[item] = pollsByMessageId.pollsByMessageId[item];
      }
    });
    return obj;
  }, shallowEqualDefault);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp3;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function s(arg0) {
      let tmp = arg0.pollsByChannelId[closure_0];
      if (tmp == null) {
        tmp = closure_3;
      }
      return tmp;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return closure_4(tmp3, shallowEqualDefault);
}) : ((arg0) => {
  let closure_0 = arg0;
  return closure_4((arg0) => {
    let tmp = arg0.pollsByChannelId[closure_0];
    if (tmp == null) {
      tmp = closure_3;
    }
    return tmp;
  }, shallowEqualDefault);
});
const result = size.fileFinishedImporting("modules/polls/PollsInteractionStore.tsx");

export const useMessagePollInteractions = tmp2;
export const useChannelPollInteractions = tmp3;
export const clearChannelPollState = function clearChannelPollState(arg0) {
  let closure_0;
  let state;
  _require = arg0;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    state.setState((arg0) => {
      let pollsByChannelId;
      let pollsByMessageId;
      ({ pollsByChannelId, pollsByMessageId } = arg0);
      let obj2;
      let tmp2 = pollsByChannelId[closure_1_0];
      if (tmp2 == null) {
        tmp2 = closure_2_3;
      }
      const obj = SnowflakeUtilsDefault;
      const keys = obj.keys(tmp2);
      obj2 = {};
      const merged = Object.assign(pollsByMessageId);
      const item = keys.forEach((item) => {
        delete obj2[item];
      });
      const obj5 = {};
      const merged1 = Object.assign(pollsByChannelId);
      delete obj3[closure_1_0];
      return { pollsByChannelId: obj5, pollsByMessageId: obj2 };
    });
  });
};
export const clearPollState = function clearPollState(arg0, arg1) {
  let closure_0;
  let state;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    state.setState((arg0) => {
      let obj10;
      let pollsByChannelId;
      let pollsByMessageId;
      ({ pollsByChannelId, pollsByMessageId } = arg0);
      let obj = pollsByChannelId[closure_1_0];
      if (obj == null) {
        obj = {};
      }
      const obj4 = {};
      const merged = Object.assign(obj);
      delete obj2[closure_1_1];
      const obj5 = {};
      const merged1 = Object.assign(pollsByMessageId);
      delete obj3[closure_1_1];
      const obj9 = { pollsByChannelId: obj10, pollsByMessageId: obj5 };
      obj10 = {};
      const merged2 = Object.assign(pollsByChannelId);
      obj10[closure_1_0] = obj4;
      return obj9;
    });
  });
};
export const updatePollState = function updatePollState(arg0, arg1, arg2) {
  const state = closure_4.getState();
  state.updatePollState(arg0, arg1, arg2);
};
export const getPollState = function getPollState(channelId, id) {
  const tmp = closure_4.getState().pollsByChannelId[channelId];
  let tmp2;
  if (tmp != null) {
    tmp2 = tmp[id];
  }
  return tmp2;
};