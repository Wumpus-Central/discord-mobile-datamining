// === Module 12528: useToggleRequestToSpeak ===

// Module 12528 (useToggleRequestToSpeak)
import useAudienceRequestToSpeakStateDefault from "useAudienceRequestToSpeakState" /* 4981 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "fetchFingerprint" /* 1218 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/stage_channels/useToggleRequestToSpeak.tsx");

export default function useToggleRequestToSpeak(id) {
  const _require = id;
  const items = [closure_5];
  const stateFromStores = _require(589).useStateFromStores(items, () => id2.getId());
  const tmp4 = useAudienceRequestToSpeakStateDefault(stateFromStores, id.id);
  importDefault = tmp4;
  const tmp5 = tmp4 === _require(4981).RequestToSpeakStates.REQUESTED_TO_SPEAK || tmp4 === _require(4981).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  dependencyMap = tmp5;
  const tmp6 = first(React.useState(tmp5), 2);
  first = tmp6[0];
  React = tmp6[1];
  const items1 = [tmp5];
  const effect = React.useEffect(() => {
    callback2(closure_2);
  }, items1);
  const items2 = [
    first,
    () => {
      let obj = id(table[5]);
      if (obj.shouldAgeVerifyToSpeakForCurrentUser(id.id)) {
        obj = { entryPoint: null };
        obj[0] = tmp(tmp2[7]).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND;
        const result = callback(tmp2[6]).showAgeVerificationGetStartedModal(obj);
        const obj4 = callback(tmp2[6]);
      } else {
        if (callback === tmp(tmp2[4]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
          let tmpResult = tmp(tmp2[8]);
          const result1 = tmpResult.audienceAckRequestToSpeak(tmp3, true);
        } else {
          tmpResult = tmp(tmp2[8]);
          tmpResult.toggleRequestToSpeak(tmp3, !first);
        }
        callback2(!first);
      }
    }
  ];
  return items2;
};