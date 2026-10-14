// === Module 8654: GuildEventUtils ===

// Module 8654 (GuildEventUtils)
import utils_ChannelUtils from "utils/ChannelUtils" /* 8166 */;
import _modDef8565 from "module_8565" /* 8565 */;
import LocationIcon2 from "LocationIcon" /* 8566 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventUtils.tsx");

export const getEventLocationIconSource = function getEventLocationIconSource(event, channel, stateFromStores2) {
  if (null != obj.getLocationFromEvent(event)) {
    let tmp4 = _modDef8565;
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
export const getEventLocationIconComponent = function getEventLocationIconComponent(event, stateFromStores, stateFromStores1) {
  if (null != obj.getLocationFromEvent(event)) {
    let LocationIcon = LocationIcon2.LocationIcon;
  } else {
    LocationIcon = null;
    if (null != stateFromStores) {
      const tmpResult = utils_ChannelUtils;
      if (stateFromStores1) {
        let channelIconComponent = tmpResult.getChannelIconComponent(stateFromStores);
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