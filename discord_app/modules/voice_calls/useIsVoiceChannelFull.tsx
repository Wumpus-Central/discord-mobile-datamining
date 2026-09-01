// discord_app/modules/voice_calls/useIsVoiceChannelFull.tsx
import closure_2 from "../../stores/GuildStore.tsx";
import closure_3 from "../../stores/PermissionStore.tsx";
import closure_4 from "../../stores/VoiceStateStore.tsx";
import { Permissions } from "../../../discord_common/js/shared/Constants.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/voice_calls/useIsVoiceChannelFull.tsx");

export default function useIsVoiceChannelFull(arg0) {
  const _require = arg0;
  const items = [closure_4, closure_2];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () =>
    callback(closure_1_1[5]).isChannelFull(callback, closure_1_4, closure_1_2),
  );
}
export const useIsVoiceChannelLocked = function useIsVoiceChannelLocked(channel) {
  const _require = channel;
  const items = [closure_3];
  const items1 = [channel];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => {
      let tmp2 = null == closure_0;
      if (!tmp2) {
        tmp2 = !closure_1_3.can(closure_1_5.CONNECT, tmp);
      }
      return tmp2;
    },
    items1,
  );
};
