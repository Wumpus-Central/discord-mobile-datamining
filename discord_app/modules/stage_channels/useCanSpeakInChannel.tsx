// discord_app/modules/stage_channels/useCanSpeakInChannel.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

const useAudienceRequestToSpeakStateDefault = useAudienceRequestToSpeakState;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useCanSpeakInChannel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        const fn = function o() {
          return id.getId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      const tmpResult = initialize;
      return (
        useAudienceRequestToSpeakStateDefault(stateFromStores, arg0) ===
        useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE
      );
    }
  : (arg0) => {
      const items = [AuthenticationStore];
      const stateFromStores = initialize.useStateFromStores(items, () => id.getId());
      return (
        useAudienceRequestToSpeakStateDefault(stateFromStores, arg0) ===
        useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE
      );
    };
