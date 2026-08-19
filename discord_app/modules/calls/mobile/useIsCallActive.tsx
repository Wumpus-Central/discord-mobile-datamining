// discord_app/modules/calls/mobile/useIsCallActive.tsx
import callConnect from "../../../stores/CallStore.tsx";
import getParticipants from "../ChannelRTCStore.tsx";
import { ParticipantTypes } from "../CallConstants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/calls/mobile/useIsCallActive.tsx");

export default function useIsCallActive(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_2, closure_3];
  const items1 = [arg0, arg1];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let isCallActiveResult = closure_1_2.isCallActive(closure_0, closure_1);
    if (isCallActiveResult) {
      const participants = closure_1_3.getParticipants(closure_0);
      isCallActiveResult = participants.some((item, index) => item.type === constants.USER && !item.ringing);
    }
    return isCallActiveResult;
  }, items1);
};
export const checkIsCallActive = function checkIsCallActive(channelId, id) {
  let isCallActiveResult = callActive.isCallActive(channelId, id);
  if (isCallActiveResult) {
    participants = participants.getParticipants(channelId);
    isCallActiveResult = participants.some((item, index) => item.type === constants.USER && !item.ringing);
  }
  return isCallActiveResult;
};
export const useIsCallActiveNullable = function useIsCallActiveNullable(id) {
  const _require = id;
  dependencyMap = arg1;
  const items = [closure_2, closure_3];
  const items1 = [id, arg1];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let isCallActiveResult = closure_1_2.isCallActive(closure_0, closure_1);
      if (isCallActiveResult) {
        const participants = closure_1_3.getParticipants(closure_0);
        isCallActiveResult = participants.some((item, index) => item.type === constants.USER && !item.ringing);
      }
      tmp2 = isCallActiveResult;
    }
    return tmp2;
  }, items1);
};