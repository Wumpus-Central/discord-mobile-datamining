// discord_app/modules/stage_channels/useIsInvitedToSpeak.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";

const useAudienceRequestToSpeakStateDefault = useAudienceRequestToSpeakState;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useIsInvitedToSpeak.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(4);
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
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [AuthenticationStore];
        const fn2 = function u() {
          return id.getId();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp9 = fn2;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = initialize;
      const stateFromStores1 = initialize.useStateFromStores(tmp8, tmp9);
      const tmpResult2 = initialize;
      return (
        useAudienceRequestToSpeakStateDefault(stateFromStores1, stateFromStores) ===
        useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
      );
    }
  : () => {
      const items = [SelectedChannelStore];
      const stateFromStores = initialize.useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
      const items1 = [AuthenticationStore];
      const stateFromStores1 = initialize.useStateFromStores(items1, () => id.getId());
      return (
        useAudienceRequestToSpeakStateDefault(stateFromStores1, stateFromStores) ===
        useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
      );
    };
