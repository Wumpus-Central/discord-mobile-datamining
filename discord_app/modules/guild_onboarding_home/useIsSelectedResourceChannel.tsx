// === Module 11641: useIsSelectedResourceChannel ===

// Module 11641 (useIsSelectedResourceChannel)
import FlagUtils from "FlagUtils" /* 1404 */;
import isSelectedFromHomeChannelDefault from "isSelectedFromHomeChannel" /* 11642 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6521 */;
import ChannelStore from "ChannelStore" /* 4643 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4697 */;

const require = globalThis.__r;

require = fn;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1071).EMPTY_STRING_SNOWFLAKE_ID;
const ChannelFlags = fn(4650).ChannelFlags;
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