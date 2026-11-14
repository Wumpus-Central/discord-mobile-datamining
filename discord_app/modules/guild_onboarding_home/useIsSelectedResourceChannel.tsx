// === Module 11997: useIsSelectedResourceChannel ===

// Module 11997 (useIsSelectedResourceChannel)
import FlagUtils from "FlagUtils" /* 1406 */;
import isSelectedFromHomeChannelDefault from "isSelectedFromHomeChannel" /* 11998 */;
import ChannelSectionStore from "ChannelSectionStore" /* 7036 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5209 */;

const require = globalThis.__r;

require = fn;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1072).EMPTY_STRING_SNOWFLAKE_ID;
const ChannelFlags = fn(5162).ChannelFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx");

export default function useIsSelectedResourceChannel(arg0) {
  _require = arg0;
  items = [ChannelStore, SelectedChannelStore, ChannelSectionStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    if (null != channel) {
      if (obj.hasFlag(channel.flags, ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
        if (isSelectedFromHomeChannelDefault(channel, SelectedChannelStore, ChannelSectionStore)) {
          return channel.guild_id;
        }
      }
      obj = FlagUtils;
    }
  });
  let obj = require("useStateFromStores");
  let tmp2 = stateFromStores;
  if (stateFromStores == null) {
    tmp2 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const obj2 = require("OnboardingHomeUtils");
  return null != stateFromStores && require("OnboardingHomeUtils").useCanSeeOnboardingHome(tmp2);
};