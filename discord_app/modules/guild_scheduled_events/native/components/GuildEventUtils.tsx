// === Module 8544: GuildEventUtils ===

// Module 8544 (GuildEventUtils)
import utils_ChannelUtils from "utils/ChannelUtils" /* 7065 */;
import _modDef8461 from "module_8461" /* 8461 */;
import LocationIcon2 from "LocationIcon" /* 8462 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventUtils.tsx");

export function getEventLocationIconSource(event, channel, stateFromStores2) {
  if (null != obj.getLocationFromEvent(event)) {
    let tmp4 = _modDef8461;
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
}
export function getEventLocationIconComponent(event, channel, stateFromStores1) {
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
}