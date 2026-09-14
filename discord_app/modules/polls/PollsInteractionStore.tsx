// discord_app/modules/polls/PollsInteractionStore.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import discord_common_shallowEqualDefault from "../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import identity from "../../../_runtime/metro/01242__.js";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

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
          const obj = { pollsByChannelId: null, pollsByMessageId: null };
          const obj2 = {};
          const merged = Object.assign(pollsByChannelId.pollsByChannelId);
          const obj3 = {};
          const merged1 = Object.assign(pollsByChannelId.pollsByChannelId[closure_1_0]);
          obj3[closure_1_1] = tmpResult;
          obj2[closure_1_0] = obj3;
          obj.pollsByChannelId = obj2;
          const obj4 = {};
          const merged2 = Object.assign(pollsByChannelId.pollsByMessageId);
          obj4[closure_1_1] = tmpResult;
          obj.pollsByMessageId = obj4;
          return obj;
        });
      });
    },
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
      let obj2;
      let tmp3 = pollsByChannelId[closure_1_0];
      if (tmp3 == null) {
        tmp3 = closure_2_3;
      }
      const keys = SnowflakeUtilsDefault.keys(tmp3);
      obj2 = {};
      const merged = Object.assign(pollsByMessageId);
      const item = keys.forEach((item) => {
        delete tmp2[tmp];
      });
      const merged1 = Object.assign(pollsByChannelId);
      delete tmp2[tmp];
      return { pollsByChannelId: {}, pollsByMessageId: obj2 };
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
      const merged = Object.assign(obj);
      delete tmp3[tmp];
      const merged1 = Object.assign(pollsByMessageId);
      delete tmp2[tmp];
      const obj4 = { pollsByChannelId: null, pollsByMessageId: null };
      const obj5 = {};
      const merged2 = Object.assign(pollsByChannelId);
      obj5[closure_1_0] = {};
      obj4.pollsByChannelId = obj5;
      obj4.pollsByMessageId = {};
      return obj4;
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
