// discord_app/modules/stage_channels/useCanSpeakInChannel.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../_runtime/00576_react.js";
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const useAudienceRequestToSpeakStateDefault = useAudienceRequestToSpeakState;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let id;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      const tmp8 = useAudienceRequestToSpeakStateDefault(stateFromStores, arg0);
      return tmp8 === useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE;
    }
  : (arg0) => {
      let id;
      const items = [AuthenticationStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => id.getId());
      const tmp2 = useAudienceRequestToSpeakStateDefault(stateFromStores, arg0);
      return tmp2 === useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE;
    };
const result = size.fileFinishedImporting("modules/stage_channels/useCanSpeakInChannel.tsx");

export default tmp2;
