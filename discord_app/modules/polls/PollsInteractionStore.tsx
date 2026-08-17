// discord_app/modules/polls/PollsInteractionStore.tsx
import set from "set" /* 2 */;
import shallowEqualDefault from "shallowEqual" /* 643 */;
import identity from "identity" /* 700 */;
import { batchUpdates } from "../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";

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
      callback(closure_1_2[1]).batchUpdates(() => {
        callback((pollsByChannelId) => {
          let tmp4;
          if (pollsByChannelId.pollsByChannelId[closure_0] != null) {
            tmp4 = tmp3[closure_1];
          }
          const tmpResult = closure_2(tmp4);
          let obj = { pollsByChannelId: null, pollsByMessageId: null };
          obj = {};
          const merged = Object.assign(pollsByChannelId.pollsByChannelId);
          obj = {};
          const merged1 = Object.assign(pollsByChannelId.pollsByChannelId[tmp2]);
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
const result = set.fileFinishedImporting("modules/polls/PollsInteractionStore.tsx");

export const useMessagePollInteractions = function useMessagePollInteractions(arg0) {
  closure_0 = arg0;
  return store((arg0) => {
    closure_0 = arg0;
    const obj = {};
    const item = closure_0.forEach((arg0) => {
      if (null != pollsByMessageId.pollsByMessageId[arg0]) {
        obj[arg0] = tmp;
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
  _batchUpdates.batchUpdates(() => {
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
      const item = keys.forEach((arg0) => {
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
  _batchUpdates.batchUpdates(() => {
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