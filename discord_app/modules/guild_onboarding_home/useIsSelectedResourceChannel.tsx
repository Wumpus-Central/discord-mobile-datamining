// discord_app/modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx
import closure_3 from "../../stores/ChannelSectionStore.tsx";
import closure_4 from "../../stores/ChannelStore.tsx";
import closure_5 from "../../stores/SelectedChannelStore.tsx";
import { EMPTY_STRING_SNOWFLAKE_ID } from "../../Constants.tsx";
import { ChannelFlags } from "../channel/ChannelConstants.tsx";
import { defaultAreStatesEqual } from "../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { useCanSeeOnboardingHome } from "OnboardingHomeUtils.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx");

export default function useIsSelectedResourceChannel(arg0) {
  const _require = arg0;
  const items = [closure_4, closure_5, closure_3];
  const stateFromStores = require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(
    items,
    () => {
      const channel = closure_1_4.getChannel(callback);
      if (null != channel) {
        if (obj.hasFlag(channel.flags, closure_1_7.IS_GUILD_RESOURCE_CHANNEL)) {
          if (closure_1_1(tmp3[7])(channel, closure_1_5, closure_1_3)) {
            return channel.guild_id;
          }
        }
        obj = callback(closure_1_2[6]);
        tmp3 = closure_1_2;
      }
    },
  );
  let obj = defaultAreStatesEqual;
  let tmp2 = stateFromStores;
  if (stateFromStores == null) {
    tmp2 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const obj2 = useCanSeeOnboardingHome;
  return null != stateFromStores && require("OnboardingHomeUtils.tsx").useCanSeeOnboardingHome(tmp2);
}
