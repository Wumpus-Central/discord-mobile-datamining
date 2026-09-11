// === Module 9860: GuildEventUtils ===

// Module 9860 (GuildEventUtils)
import utils_ChannelUtils from "utils/ChannelUtils" /* 5079 */;
import _modDef9805 from "module_9805" /* 9805 */;
import LocationIcon2 from "LocationIcon" /* 9806 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventUtils.tsx");

export const getEventLocationIconSource = function getEventLocationIconSource(event, channel, stateFromStores2) {
  if (null != obj.getLocationFromEvent(event)) {
    let tmp4 = _modDef9805;
  } else {
    tmp4 = null;
    if (null != channel) {
      const tmpResult = utils_ChannelUtils;
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
    let LocationIcon = LocationIcon2.LocationIcon;
  } else {
    LocationIcon = null;
    if (null != channel) {
      const tmpResult = utils_ChannelUtils;
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