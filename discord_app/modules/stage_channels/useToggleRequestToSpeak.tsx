// discord_app/modules/stage_channels/useToggleRequestToSpeak.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import fetchFingerprint from "fetchFingerprint";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { useAudienceRequestToSpeakState } from "useAudienceRequestToSpeakState.tsx";

const require = arg1;
let result = require("fetchFingerprint").fileFinishedImporting("modules/stage_channels/useToggleRequestToSpeak.tsx");

export default function useToggleRequestToSpeak(id) {
  const _require = id;
  const items = [fetchFingerprint];
  const stateFromStores = _initialize.useStateFromStores(items, () => id2.getId());
  const tmp4 = useAudienceRequestToSpeakState(stateFromStores, id.id);
  importDefault = tmp4;
  const tmp5 = tmp4 === _useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK || tmp4 === _useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  const dependencyMap = tmp5;
  const tmp6 = first(React.useState(tmp5), 2);
  first = tmp6[0];
  React = tmp6[1];
  const items1 = [tmp5];
  const effect = React.useEffect(() => {
    callback(closure_2);
  }, items1);
  const items2 = [
    first,
    () => {
      let obj = id(tmp5[5]);
      if (obj.shouldAgeVerifyToSpeakForCurrentUser(id.id)) {
        obj = { entryPoint: null };
        obj[0] = tmp(tmp2[7]).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND;
        const result = tmp4(tmp2[6]).showAgeVerificationGetStartedModal(obj);
        const obj4 = tmp4(tmp2[6]);
      } else {
        if (tmp4 === tmp(tmp2[4]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
          let tmpResult = tmp(tmp2[8]);
          const result1 = tmpResult.audienceAckRequestToSpeak(tmp3, true);
        } else {
          tmpResult = tmp(tmp2[8]);
          tmpResult.toggleRequestToSpeak(tmp3, !first);
        }
        callback(!first);
      }
    }
  ];
  return items2;
};