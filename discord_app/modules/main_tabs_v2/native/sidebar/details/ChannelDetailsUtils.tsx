// === Module 12465: ChannelDetailsUtils ===

// Module 12465 (ChannelDetailsUtils)
import ChannelTypes from "ChannelTypes" /* 1093 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10828 */;
import size from "module_2" /* 2 */;

const ChannelDetailsButtonTypes = ChannelDetailsConstants.ChannelDetailsButtonTypes;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsUtils.tsx");

export function getChannelDetailsButtons(c0) {
  let flag = c2;
  if (c2 === undefined) {
    flag = false;
  }
  if (_require.type === ChannelTypes.ChannelTypes.GUILD_DIRECTORY) {
    items = [];
  } else {
    items = [, , ];
    ({ SEARCH: arr[0], MUTE: arr[1], SETTINGS: arr[2] } = ChannelDetailsButtonTypes);
  }
  let found = items;
  if (flag) {
    found = items.filter((item) => item !== constants.MUTE);
  }
  return found;
}
export function navigateToChannelDetailsScreen(navigate, PERMISSIONS, channelId, source) {
  navigate.navigate("sidebar", { screen: PERMISSIONS, channelId, source });
}