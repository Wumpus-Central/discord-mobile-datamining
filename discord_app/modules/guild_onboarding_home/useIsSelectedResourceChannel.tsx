// discord_app/modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx
import handlePermissionsChange from "handlePermissionsChange";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";
import { ChannelFlags } from "set";

const require = arg1;
const result = require("handleConnectionOpen").fileFinishedImporting("modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx");

export default function useIsSelectedResourceChannel(arg0) {
  const _require = arg0;
  const items = [ensureGuildLoaded, handleConnectionOpen, handlePermissionsChange];
  const stateFromStores = _require(647).useStateFromStores(items, () => {
    const channel = outer1_4.getChannel(callback);
    if (null != channel) {
      if (obj.hasFlag(channel.flags, outer1_7.IS_GUILD_RESOURCE_CHANNEL)) {
        if (outer1_1(tmp3[7])(channel, outer1_5, outer1_3)) {
          return channel.guild_id;
        }
      }
      obj = callback(outer1_2[6]);
      tmp3 = outer1_2;
    }
  });
  let obj = _require(647);
  let tmp2 = stateFromStores;
  if (stateFromStores == null) {
    tmp2 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const obj2 = _require(5753);
  return null != stateFromStores && _require(5753).useCanSeeOnboardingHome(tmp2);
};