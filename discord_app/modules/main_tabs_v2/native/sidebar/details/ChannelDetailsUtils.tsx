// === Module 11612: ChannelDetailsUtils ===

// Module 11612 (ChannelDetailsUtils)
import ChannelTypes from "ChannelTypes" /* 1094 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10916 */;
import size from "module_2" /* 2 */;

const ChannelDetailsButtonTypes = ChannelDetailsConstants.ChannelDetailsButtonTypes;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsUtils.tsx");

export const getChannelDetailsButtons = function getChannelDetailsButtons(channel) {
  let flag = stateFromStores;
  if (stateFromStores === undefined) {
    flag = false;
  }
  if (channel.type === ChannelTypes.ChannelTypes.GUILD_DIRECTORY) {
    let items = [];
  } else {
    items = [, , ];
    ({ SEARCH: arr[0], MUTE: arr[1], SETTINGS: arr[2] } = ChannelDetailsButtonTypes);
  }
  let found = items;
  if (flag) {
    found = items.filter((item) => item !== constants.MUTE);
  }
  return found;
};
export const navigateToChannelDetailsScreen = function navigateToChannelDetailsScreen(navigate, PERMISSIONS, channelId, source) {
  navigate.navigate("sidebar", { screen: PERMISSIONS, channelId, source });
};