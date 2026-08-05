import { set } from "../../../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsUtils.tsx
import { ChannelDetailsButtonTypes } from "ChannelDetailsNavigatorScreens";

const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsUtils.tsx");

export const getChannelDetailsButtons = function getChannelDetailsButtons(channel, stateFromStores) {
  let flag = stateFromStores;
  if (stateFromStores === undefined) {
    flag = false;
  }
  if (channel.type === set /* set */.ChannelTypes.GUILD_DIRECTORY) {
    let items = [];
  } else {
    items = [, , ];
    ({ SEARCH: arr[0], MUTE: arr[1], SETTINGS: arr[2] } = ChannelDetailsButtonTypes);
  }
  let found = items;
  if (flag) {
    found = items.filter((arg0) => arg0 !== constants.MUTE);
  }
  return found;
};
export const navigateToChannelDetailsScreen = function navigateToChannelDetailsScreen(closure_4, PERMISSIONS, closure_0, source) {
  closure_4.navigate("sidebar", { screen: PERMISSIONS, channelId: closure_0, source });
};