// discord_app/modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import isSelectedFromHomeChannelDefault from "isSelectedFromHomeChannel.native.tsx";
import ChannelSectionStore from "../../stores/ChannelSectionStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";

require = fn;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1074).EMPTY_STRING_SNOWFLAKE_ID;
const ChannelFlags = fn(1964).ChannelFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx");

export default function useIsSelectedResourceChannel(arg0) {
  _require = arg0;
  const items = [ChannelStore, SelectedChannelStore, ChannelSectionStore];
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
}
