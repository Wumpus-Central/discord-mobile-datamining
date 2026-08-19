// === Module 10798: getChannelDetailsButtons ===

// Module 10798 (getChannelDetailsButtons)
import obj132 from "obj132" /* 2 */;
import set from "set" /* 692 */;
import ChannelDetailsNavigatorScreens from "ChannelDetailsNavigatorScreens" /* 9922 */;

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