// === Module 7981: useIsCallActive ===

// Module 7981 (useIsCallActive)
import CallStore from "CallStore" /* 5278 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;

const require = fn;
const ParticipantTypes = fn(4581).ParticipantTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/mobile/useIsCallActive.tsx");

export default function useIsCallActive(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [CallStore, ChannelRTCStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    let isCallActiveResult = CallStore.isCallActive(closure_0, closure_1);
    if (isCallActiveResult) {
      const participants = ChannelRTCStore.getParticipants(closure_0);
      isCallActiveResult = participants.some((type) => type.type === constants.USER && !type.ringing);
    }
    return isCallActiveResult;
  }, items1);
};
export const checkIsCallActive = function checkIsCallActive(channelId, id) {
  let isCallActiveResult = CallStore.isCallActive(channelId, id);
  if (isCallActiveResult) {
    const participants = ChannelRTCStore.getParticipants(channelId);
    isCallActiveResult = participants.some((type) => type.type === constants.USER && !type.ringing);
  }
  return isCallActiveResult;
};
export const useIsCallActiveNullable = function useIsCallActiveNullable(id, arg1) {
  _require = id;
  dependencyMap = arg1;
  const items = [CallStore, ChannelRTCStore];
  const items1 = [id, arg1];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let isCallActiveResult = CallStore.isCallActive(closure_0, closure_1);
      if (isCallActiveResult) {
        const participants = ChannelRTCStore.getParticipants(closure_0);
        isCallActiveResult = participants.some((type) => type.type === constants.USER && !type.ringing);
      }
      tmp2 = isCallActiveResult;
    }
    return tmp2;
  }, items1);
};