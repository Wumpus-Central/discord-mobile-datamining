// === Module 9930: useToggleRequestToSpeak ===

// Module 9930 (useToggleRequestToSpeak)
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 4707 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 5422 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 8398 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8411 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8413 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const useAudienceRequestToSpeakStateDefault = useAudienceRequestToSpeakState;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/useToggleRequestToSpeak.tsx");

export default function useToggleRequestToSpeak(id) {
  _require = id;
  const items = [AuthenticationStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => id2.getId());
  const tmp4 = useAudienceRequestToSpeakStateDefault(stateFromStores, id.id);
  importDefault = tmp4;
  const tmp5 = tmp4 === require("useAudienceRequestToSpeakState").RequestToSpeakStates.REQUESTED_TO_SPEAK || tmp4 === require("useAudienceRequestToSpeakState").RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  dependencyMap = tmp5;
  const tmp6 = first(noop.useState(tmp5), 2);
  first = tmp6[0];
  noop = tmp6[1];
  const items1 = [tmp5];
  const effect = noop.useEffect(() => {
    closure_4(closure_2);
  }, items1);
  const items2 = [
    first,
    () => {
      let obj = useStageSpeakingForCurrentUser;
      if (obj.shouldAgeVerifyToSpeakForCurrentUser(id.id)) {
        obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
        const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj);
      } else {
        if (closure_1 === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
          let tmpResult = StageChannelActionCreators;
          const result1 = tmpResult.audienceAckRequestToSpeak(id, true);
        } else {
          tmpResult = StageChannelActionCreators;
          tmpResult.toggleRequestToSpeak(id, !first);
        }
        closure_4(!first);
      }
    }
  ];
  return items2;
};