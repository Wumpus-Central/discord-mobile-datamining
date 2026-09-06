// discord_app/modules/stage_channels/useToggleRequestToSpeak.tsx
import useAudienceRequestToSpeakStateDefault from "useAudienceRequestToSpeakState.tsx";
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser.tsx";
import AgeVerificationActionCreatorsDefault from "../age_assurance/AgeVerificationActionCreators.native.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/useToggleRequestToSpeak.tsx");

export default function useToggleRequestToSpeak(id) {
  _require = id;
  const items = [AuthenticationStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => id2.getId());
  const tmp4 = useAudienceRequestToSpeakStateDefault(stateFromStores, id.id);
  importDefault = tmp4;
  const tmp5 =
    tmp4 === require("useAudienceRequestToSpeakState").RequestToSpeakStates.REQUESTED_TO_SPEAK ||
    tmp4 === require("useAudienceRequestToSpeakState").RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
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
        obj = { entryPoint: tmp(8413).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
        const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj);
      } else {
        if (closure_1 === tmp(4707).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
          let tmpResult = tmp(8398);
          const result1 = tmpResult.audienceAckRequestToSpeak(tmp3, true);
        } else {
          tmpResult = tmp(8398);
          tmpResult.toggleRequestToSpeak(tmp3, !first);
        }
        closure_4(!first);
      }
    },
  ];
  return items2;
}
