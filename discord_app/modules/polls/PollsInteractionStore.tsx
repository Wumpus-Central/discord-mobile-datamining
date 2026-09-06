// === Module 11427: PollsInteractionStore ===

// Module 11427 (PollsInteractionStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 558 */;
import identity from "module_1244" /* 1244 */;
import size from "module_2" /* 2 */;

let closure_3 = {};
let closure_4 = identity.createWithEqualityFn((arg0) => {
  closure_0 = arg0;
  return {
    pollsByChannelId: {},
    pollsByMessageId: {},
    updatePollState(arg0, arg1, arg2) {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      closure_0(dependencyMap[1]).batchUpdates(() => {
        closure_0((pollsByChannelId) => {
          let tmp4;
          if (pollsByChannelId.pollsByChannelId[closure_1_0] != null) {
            tmp4 = tmp3[closure_1_1];
          }
          const tmpResult = closure_1_2(tmp4);
          let obj = { pollsByChannelId: null, pollsByMessageId: null };
          obj = {};
          const merged = Object.assign(pollsByChannelId.pollsByChannelId);
          obj = {};
          const merged1 = Object.assign(pollsByChannelId.pollsByChannelId[closure_1_0]);
          obj[closure_1_1] = tmpResult;
          obj[closure_1_0] = obj;
          obj.pollsByChannelId = obj;
          const obj1 = {};
          const merged2 = Object.assign(pollsByChannelId.pollsByMessageId);
          obj1[closure_1_1] = tmpResult;
          obj.pollsByMessageId = obj1;
          return obj;
        });
      });
    }
  };
});
const result = size.fileFinishedImporting("modules/polls/PollsInteractionStore.tsx");

export const useMessagePollInteractions = function useMessagePollInteractions(arg0) {
  closure_0 = arg0;
  return closure_4((arg0) => {
    const pollsByMessageId = arg0;
    const obj = {};
    const item = pollsByMessageId.forEach((item) => {
      if (null != pollsByMessageId.pollsByMessageId[item]) {
        obj[item] = tmp;
      }
    });
    return obj;
  }, discord_common_shallowEqualDefault);
};
export const useChannelPollInteractions = function useChannelPollInteractions(arg0) {
  closure_0 = arg0;
  return closure_4((arg0) => {
    let tmp = arg0.pollsByChannelId[closure_0];
    if (tmp == null) {
      tmp = closure_3;
    }
    return tmp;
  }, discord_common_shallowEqualDefault);
};
export const clearChannelPollState = function clearChannelPollState(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    state.setState((arg0) => {
      ({ pollsByChannelId, pollsByMessageId } = arg0);
      pollsByMessageId = undefined;
      let tmp3 = pollsByChannelId[closure_1_0];
      if (tmp3 == null) {
        tmp3 = closure_2_3;
      }
      pollsByMessageId = SnowflakeUtilsDefault;
      const keys = pollsByMessageId.keys(tmp3);
      pollsByMessageId = {};
      const merged = Object.assign(pollsByMessageId);
      const item = keys.forEach((item) => {
        delete tmp2[tmp];
      });
      const merged1 = Object.assign(pollsByChannelId);
      delete tmp2[tmp];
      return { pollsByChannelId: {}, pollsByMessageId };
    });
  });
};
export const clearPollState = function clearPollState(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  require("ReactBatchUpdates").batchUpdates(() => {
    state.setState((arg0) => {
      ({ pollsByChannelId, pollsByMessageId } = arg0);
      let obj = pollsByChannelId[closure_1_0];
      if (obj == null) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(obj);
      delete tmp3[tmp];
      obj = {};
      const merged1 = Object.assign(pollsByMessageId);
      delete tmp2[tmp];
      const obj1 = { pollsByChannelId: null, pollsByMessageId: null };
      const obj2 = {};
      const merged2 = Object.assign(pollsByChannelId);
      obj2[closure_1_0] = obj;
      obj1.pollsByChannelId = obj2;
      obj1.pollsByMessageId = obj;
      return obj1;
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