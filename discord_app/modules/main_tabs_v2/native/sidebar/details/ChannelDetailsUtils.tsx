// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsUtils.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import set from "../../../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import ChannelDetailsNavigatorScreens from "ChannelDetailsConstants.tsx";

const ChannelDetailsButtonTypes = ChannelDetailsNavigatorScreens.ChannelDetailsButtonTypes;
const result = obj132.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsUtils.tsx");

export const getChannelDetailsButtons = function getChannelDetailsButtons(channel, stateFromStores) {
  let flag = stateFromStores;
  if (stateFromStores === undefined) {
    flag = false;
  }
  if (channel.type === set.ChannelTypes.GUILD_DIRECTORY) {
    let items = [];
  } else {
    items = [, , ];
    ({ SEARCH: arr[0], MUTE: arr[1], SETTINGS: arr[2] } = ChannelDetailsButtonTypes);
  }
  let found = items;
  if (flag) {
    found = items.filter((item, index) => item !== constants.MUTE);
  }
  return found;
};
export const navigateToChannelDetailsScreen = function navigateToChannelDetailsScreen(closure_4, PERMISSIONS, closure_0, source) {
  navigation.navigate("sidebar", { screen: PERMISSIONS, channelId: closure_0, source });
};