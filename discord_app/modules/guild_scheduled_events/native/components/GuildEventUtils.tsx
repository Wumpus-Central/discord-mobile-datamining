// discord_app/modules/guild_scheduled_events/native/components/GuildEventUtils.tsx
import set from "../../../../../_runtime/00002_set.js";
import getChannelIcon from "../../../../utils/native/ChannelUtils.tsx";
import registerAssetDefault from "../../../../../_runtime/09605_registerAsset.js";

const result = set.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventUtils.tsx");

export const getEventLocationIconSource = function getEventLocationIconSource(event, channel, stateFromStores2) {
  if (null != obj.getLocationFromEvent(event)) {
    let tmp4 = registerAssetDefault;
  } else {
    tmp4 = null;
    if (null != channel) {
      const tmpResult = getChannelIcon;
      if (stateFromStores2) {
        let channelIcon = tmpResult.getChannelIcon(channel);
      } else {
        channelIcon = tmpResult.getSimpleChannelIcon(channel);
      }
    }
  }
  return tmp4;
};
export const getEventLocationIconComponent = function getEventLocationIconComponent(event, channel, stateFromStores1) {
  if (null != obj.getLocationFromEvent(event)) {
    let LocationIcon = tmp(9606).LocationIcon;
  } else {
    LocationIcon = null;
    if (null != channel) {
      const tmpResult = tmp(4933);
      if (stateFromStores1) {
        let channelIconComponent = tmpResult.getChannelIconComponent(channel);
      } else {
        channelIconComponent = tmpResult.getSimpleChannelIconComponent(channel);
      }
      if (channelIconComponent == null) {
        channelIconComponent = null;
      }
      LocationIcon = channelIconComponent;
    }
  }
  return LocationIcon;
};