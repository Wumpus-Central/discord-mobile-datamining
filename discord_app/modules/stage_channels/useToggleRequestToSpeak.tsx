// === Module 12038: useToggleRequestToSpeak ===

// Module 12038 (useToggleRequestToSpeak)
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 6168 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6849 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 6878 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 8069 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8079 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;
const useAudienceRequestToSpeakStateDefault = useAudienceRequestToSpeakState;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/useToggleRequestToSpeak.tsx");

export default function useToggleRequestToSpeak(id) {
  _require = id;
  items = [AuthenticationStore];
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
    function handleToggleRequestToSpeak() {
      if (obj.shouldAgeVerifyToSpeakForCurrentUser(id.id)) {
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
        const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj2);
      } else {
        if (closure_1 === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
          const result1 = StageChannelActionCreators.audienceAckRequestToSpeak(id, true);
          const tmpResult = StageChannelActionCreators;
        } else {
          StageChannelActionCreators.toggleRequestToSpeak(id, !first);
          const tmpResult2 = StageChannelActionCreators;
        }
        closure_4(!first);
      }
      obj = useStageSpeakingForCurrentUser;
    }
  ];
  return items2;
};