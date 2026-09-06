// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsUtils.tsx
import ChannelTypes from "../../../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import ChannelDetailsConstants from "ChannelDetailsConstants.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

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
    items = [, ,];
    ({ SEARCH: arr[0], MUTE: arr[1], SETTINGS: arr[2] } = ChannelDetailsButtonTypes);
  }
  let found = items;
  if (flag) {
    found = items.filter((item) => item !== constants.MUTE);
  }
  return found;
};
export const navigateToChannelDetailsScreen = function navigateToChannelDetailsScreen(
  navigate,
  PERMISSIONS,
  channelId,
  source,
) {
  navigate.navigate("sidebar", { screen: PERMISSIONS, channelId, source });
};
