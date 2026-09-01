// discord_app/modules/calls/mobile/useIsCallActive.tsx
import closure_2 from "../../../stores/CallStore.tsx";
import closure_3 from "../ChannelRTCStore.tsx";
import { ParticipantTypes } from "../CallConstants.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/calls/mobile/useIsCallActive.tsx");

export default function useIsCallActive(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_2, closure_3];
  const items1 = [arg0, arg1];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => {
      let isCallActiveResult = closure_1_2.isCallActive(closure_0, closure_1);
      if (isCallActiveResult) {
        const participants = closure_1_3.getParticipants(closure_0);
        isCallActiveResult = participants.some((type) => type.type === constants.USER && !type.ringing);
      }
      return isCallActiveResult;
    },
    items1,
  );
}
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
  dependencyMap = arg1;
  const items = [closure_2, closure_3];
  const items1 = [id, arg1];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => {
      let tmp2 = null != closure_0;
      if (tmp2) {
        let isCallActiveResult = closure_1_2.isCallActive(tmp, closure_1);
        if (isCallActiveResult) {
          const participants = closure_1_3.getParticipants(tmp);
          isCallActiveResult = participants.some((type) => type.type === constants.USER && !type.ringing);
        }
        tmp2 = isCallActiveResult;
      }
      return tmp2;
    },
    items1,
  );
};
