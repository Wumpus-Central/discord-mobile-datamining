// discord_app/modules/polls/PollsInteractionStore.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import shallowEqualDefault from "../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import identity from "../../../_runtime/00700_identity.js";

let closure_3 = {};
let closure_4 = identity.createWithEqualityFn((arg0) => {
  closure_0 = arg0;
  return {
    pollsByChannelId: {},
    pollsByMessageId: {},
    updatePollState(arg0, arg1, arg2) {
      const callback = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      callback(dependencyMap[1]).batchUpdates(() => {
        callback((pollsByChannelId) => {
          let tmp4;
          if (pollsByChannelId.pollsByChannelId[closure_0] != null) {
            tmp4 = tmp3[closure_1];
          }
          const tmpResult = callback(tmp4);
          const merged = Object.assign(pollsByChannelId.pollsByChannelId);
          const obj = {};
          const merged1 = Object.assign(pollsByChannelId.pollsByChannelId[closure_0]);
          obj[closure_1] = tmpResult;
          obj[closure_0] = obj;
          obj[0] = obj;
          obj1 = {};
          const merged2 = Object.assign(pollsByChannelId.pollsByMessageId);
          obj1[closure_1] = tmpResult;
          obj[1] = obj1;
          return obj;
        });
      });
    }
  };
});
const result = obj132.fileFinishedImporting("modules/polls/PollsInteractionStore.tsx");

export const useMessagePollInteractions = function useMessagePollInteractions(arg0) {
  closure_0 = arg0;
  return store((arg0) => {
    closure_0 = arg0;
    const obj = {};
    const item = closure_0.forEach((item, index) => {
      if (null != pollsByMessageId.pollsByMessageId[item]) {
        obj[item] = tmp;
      }
    });
    return obj;
  }, shallowEqualDefault);
};
export const useChannelPollInteractions = function useChannelPollInteractions(arg0) {
  closure_0 = arg0;
  return store((arg0) => {
    let tmp = arg0.pollsByChannelId[closure_0];
    if (tmp == null) {
      tmp = closure_1_3;
    }
    return tmp;
  }, shallowEqualDefault);
};
export const clearChannelPollState = function clearChannelPollState(arg0) {
  const _require = arg0;
  require("../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    closure_1_4.setState((arg0) => {
      ({ pollsByChannelId, pollsByMessageId } = arg0);
      pollsByMessageId = undefined;
      let tmp3 = pollsByChannelId[pollsByMessageId];
      if (tmp3 == null) {
        tmp3 = closure_1_3;
      }
      pollsByMessageId = closure_1_1(closure_1_2[3]);
      const keys = pollsByMessageId.keys(tmp3);
      pollsByMessageId = {};
      const merged = Object.assign(pollsByMessageId);
      const item = keys.forEach((item, index) => {
        delete tmp2[tmp];
      });
      const merged1 = Object.assign(pollsByChannelId);
      delete tmp2[tmp];
      return { pollsByChannelId: {}, pollsByMessageId };
    });
  });
};
export const clearPollState = function clearPollState(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  require("../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    closure_1_4.setState((arg0) => {
      ({ pollsByChannelId, pollsByMessageId } = arg0);
      let obj = pollsByChannelId[closure_0];
      if (obj == null) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(obj);
      delete tmp3[tmp];
      obj = {};
      const merged1 = Object.assign(pollsByMessageId);
      delete tmp2[tmp];
      obj1 = { pollsByChannelId: null, pollsByMessageId: null };
      const obj2 = {};
      const merged2 = Object.assign(pollsByChannelId);
      obj2[closure_0] = obj;
      obj1[0] = obj2;
      obj1[1] = obj;
      return obj1;
    });
  });
};
export const updatePollState = function updatePollState(arg0, arg1, arg2) {
  const state = store.getState();
  state.updatePollState(arg0, arg1, arg2);
};
export const getPollState = function getPollState(channelId, id) {
  const tmp = store.getState().pollsByChannelId[channelId];
  let tmp2;
  if (tmp != null) {
    tmp2 = tmp[id];
  }
  return tmp2;
};