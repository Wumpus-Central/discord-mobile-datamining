import callConnect from "callConnect";
import getParticipants from "getParticipants";
import { ParticipantTypes } from "ParticipantTypes";

const require = arg1;
const result = require("ParticipantTypes").fileFinishedImporting("modules/calls/mobile/useIsCallActive.tsx");

export default function useIsCallActive(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  const items = [callConnect, getParticipants];
  const items1 = [arg0, arg1];
  return _require(589).useStateFromStores(items, () => {
    let isCallActiveResult = outer1_2.isCallActive(closure_0, closure_1);
    if (isCallActiveResult) {
      const participants = outer1_3.getParticipants(closure_0);
      isCallActiveResult = participants.some((type) => type.type === constants.USER && !type.ringing);
    }
    return isCallActiveResult;
  }, items1);
};
export const checkIsCallActive = function checkIsCallActive(channelId, id) {
  let isCallActiveResult = callActive.isCallActive(channelId, id);
  if (isCallActiveResult) {
    participants = participants.getParticipants(channelId);
    isCallActiveResult = participants.some((type) => type.type === constants.USER && !type.ringing);
  }
  return isCallActiveResult;
};
export const useIsCallActiveNullable = function useIsCallActiveNullable(id) {
  const _require = id;
  const dependencyMap = arg1;
  const items = [callConnect, getParticipants];
  const items1 = [id, arg1];
  return _require(589).useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let isCallActiveResult = outer1_2.isCallActive(tmp, closure_1);
      if (isCallActiveResult) {
        const participants = outer1_3.getParticipants(tmp);
        isCallActiveResult = participants.some((type) => type.type === constants.USER && !type.ringing);
      }
      tmp2 = isCallActiveResult;
    }
    return tmp2;
  }, items1);
};