// discord_app/modules/stage_channels/useIsInvitedToSpeak.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../_runtime/00576_react.js";
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const useAudienceRequestToSpeakStateDefault = useAudienceRequestToSpeakState;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let id;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      let voiceChannelId;
      const obj = react;
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SelectedChannelStore];
        const fn = function n() {
          return voiceChannelId.getVoiceChannelId();
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
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [AuthenticationStore];
        const fn2 = function u() {
          return id.getId();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        tmp9 = fn2;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult2 = get_initialized;
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
      const tmp12 = useAudienceRequestToSpeakStateDefault(stateFromStores1, stateFromStores);
      return tmp12 === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
    }
  : () => {
      let id;
      let voiceChannelId;
      const items = [SelectedChannelStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
      const items1 = [AuthenticationStore];
      const obj2 = get_initialized;
      const stateFromStores1 = obj2.useStateFromStores(items1, () => id.getId());
      const tmp3 = useAudienceRequestToSpeakStateDefault(stateFromStores1, stateFromStores);
      return tmp3 === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
    };
const result = size.fileFinishedImporting("modules/stage_channels/useIsInvitedToSpeak.tsx");

export default tmp2;
