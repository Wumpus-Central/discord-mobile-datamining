// === Module 11199: useIsSelectedResourceChannel ===

// Module 11199 (useIsSelectedResourceChannel)
import closure_3 from "handlePermissionsChange" /* 6135 */;
import closure_4 from "ensureGuildLoaded" /* 1386 */;
import closure_5 from "handleConnectionOpen" /* 1980 */;
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME" /* 673 */;
import { ChannelFlags } from "set" /* 1393 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx");

export default function useIsSelectedResourceChannel(arg0) {
  const _require = arg0;
  const items = [closure_4, closure_5, closure_3];
  const stateFromStores = _require(644).useStateFromStores(items, () => {
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
  });
  let obj = _require(644);
  let tmp2 = stateFromStores;
  if (stateFromStores == null) {
    tmp2 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const obj2 = _require(6077);
  return null != stateFromStores && _require(6077).useCanSeeOnboardingHome(tmp2);
};