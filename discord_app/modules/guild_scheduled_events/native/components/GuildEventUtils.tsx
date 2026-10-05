// === Module 9258: GuildEventUtils ===

// Module 9258 (GuildEventUtils)
import utils_ChannelUtils from "utils/ChannelUtils" /* 5812 */;
import EntityUtils from "EntityUtils" /* 9180 */;
import AssetRegistryDefault from "AssetRegistry" /* 9190 */;
import LocationIcon2 from "LocationIcon" /* 9191 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventUtils.tsx");

export const getEventLocationIconSource = function getEventLocationIconSource(event, channel, stateFromStores2) {
  let tmp4;
  const obj = EntityUtils;
  if (null != obj.getLocationFromEvent(event)) {
    tmp4 = AssetRegistryDefault;
  } else {
    tmp4 = null;
    if (null != channel) {
      let channelIcon;
      const tmpResult = utils_ChannelUtils;
      if (stateFromStores2) {
        channelIcon = tmpResult.getChannelIcon(channel);
      } else {
        channelIcon = tmpResult.getSimpleChannelIcon(channel);
      }
      tmp4 = channelIcon;
    }
  }
  return tmp4;
};
export const getEventLocationIconComponent = function getEventLocationIconComponent(event, stateFromStores, stateFromStores1) {
  let LocationIcon;
  const obj = EntityUtils;
  if (null != obj.getLocationFromEvent(event)) {
    LocationIcon = LocationIcon2.LocationIcon;
  } else {
    LocationIcon = null;
    if (null != stateFromStores) {
      let channelIconComponent;
      const tmpResult = utils_ChannelUtils;
      if (stateFromStores1) {
        channelIconComponent = tmpResult.getChannelIconComponent(stateFromStores);
      } else {
        channelIconComponent = tmpResult.getSimpleChannelIconComponent(stateFromStores);
      }
      if (channelIconComponent == null) {
        channelIconComponent = null;
      }
      LocationIcon = channelIconComponent;
    }
  }
  return LocationIcon;
};