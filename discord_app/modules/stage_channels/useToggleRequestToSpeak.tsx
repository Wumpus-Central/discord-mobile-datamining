// === Module 10968: useToggleRequestToSpeak ===

// Module 10968 (useToggleRequestToSpeak)
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 5413 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 5916 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 5956 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 7487 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7497 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;
const useAudienceRequestToSpeakStateDefault = useAudienceRequestToSpeakState;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/useToggleRequestToSpeak.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useToggleRequestToSpeak(id) {
  _require = id;
  const cResult = require("c").c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function _() {
      return id2.getId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  const tmp8 = useAudienceRequestToSpeakStateDefault(stateFromStores, id.id);
  importDefault = tmp8;
  const tmp9 = tmp8 === require("useAudienceRequestToSpeakState").RequestToSpeakStates.REQUESTED_TO_SPEAK || tmp8 === require("useAudienceRequestToSpeakState").RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  dependencyMap = tmp9;
  const tmp10 = first(noop.useState(tmp9), 2);
  first = tmp10[0];
  noop = tmp10[1];
  if (cResult[2] !== tmp9) {
    class E {
      constructor() {
        tmp = closure_4(closure_2);
        return;
      }
    }
    const items1 = [tmp9];
    cResult[2] = tmp9;
    cResult[3] = E;
    cResult[4] = items1;
    let tmp13 = items1;
  } else {
    class E {
      constructor() {
        tmp = closure_4(closure_2);
        return;
      }
    }
    tmp13 = cResult[4];
  }
  const effect = noop.useEffect(E, tmp13);
  if (cResult[5] === id) {
    class E {
      constructor() {
        tmp = closure_4(closure_2);
        return;
      }
    }
  }
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
  cResult[5] = id;
  cResult[6] = tmp8;
  cResult[7] = first;
  cResult[8] = handleToggleRequestToSpeak;
  let tmpResult = require("initialize");
}) : (function useToggleRequestToSpeak(id) {
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
});