// === Module 16560: OnboardingHomeResourcesSheet ===

// Module 16560 (OnboardingHomeResourcesSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 12284 */;
import useResourceChannelsDefault from "useResourceChannels" /* 16559 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = fn(16558).ONBOARDING_HOME_RESOURCES_SHEET_KEY;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeResourcesSheet.tsx");

export default function OnboardingHomeResourcesSheet(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(4262);
  importDefault = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
  obj = { children: null };
  obj = {
    hasIcons: true,
    children: useResourceChannelsDefault(guildId).map((label) => {
      let obj = height(dependencyMap[10]);
      const resourceChannelIconURL = obj.getResourceChannelIconURL(label);
      obj = { label: label.title, icon: null, onPress: null, arrow: true };
      let tmp4Result;
      if (null != resourceChannelIconURL) {
        obj = { style: null, source: null };
        const size = { width: height, height };
        obj.style = size;
        const obj1 = { uri: resourceChannelIconURL };
        obj.source = obj1;
        tmp4Result = tmp4(height(tmp2[11]), obj);
      }
      obj.icon = tmp4Result;
      obj.onPress = function onPress() {
        const homeResourceChannel = GuildOnboardingHomeActionCreators.selectHomeResourceChannel(guildId, label.channelId);
        ActionSheetActionCreatorsDefault.hideActionSheet(closure_3);
      };
      return jsx(guildId(dependencyMap[9]).ActionSheetRow, { label: label.title, icon: null, onPress: null, arrow: true }, label.channelId);
    })
  };
  obj.children = jsx(guildId(7200).ActionSheetRow.Group, {
    hasIcons: true,
    children: useResourceChannelsDefault(guildId).map((label) => {
      let obj = height(dependencyMap[10]);
      const resourceChannelIconURL = obj.getResourceChannelIconURL(label);
      obj = { label: label.title, icon: null, onPress: null, arrow: true };
      let tmp4Result;
      if (null != resourceChannelIconURL) {
        obj = { style: null, source: null };
        const size = { width: height, height };
        obj.style = size;
        const obj1 = { uri: resourceChannelIconURL };
        obj.source = obj1;
        tmp4Result = tmp4(height(tmp2[11]), obj);
      }
      obj.icon = tmp4Result;
      obj.onPress = function onPress() {
        const homeResourceChannel = GuildOnboardingHomeActionCreators.selectHomeResourceChannel(guildId, label.channelId);
        ActionSheetActionCreatorsDefault.hideActionSheet(closure_3);
      };
      return jsx(guildId(dependencyMap[9]).ActionSheetRow, { label: label.title, icon: null, onPress: null, arrow: true }, label.channelId);
    })
  });
  return jsx(guildId(7198).ActionSheet, {
    hasIcons: true,
    children: useResourceChannelsDefault(guildId).map((label) => {
      let obj = height(dependencyMap[10]);
      const resourceChannelIconURL = obj.getResourceChannelIconURL(label);
      obj = { label: label.title, icon: null, onPress: null, arrow: true };
      let tmp4Result;
      if (null != resourceChannelIconURL) {
        obj = { style: null, source: null };
        const size = { width: height, height };
        obj.style = size;
        const obj1 = { uri: resourceChannelIconURL };
        obj.source = obj1;
        tmp4Result = tmp4(height(tmp2[11]), obj);
      }
      obj.icon = tmp4Result;
      obj.onPress = function onPress() {
        const homeResourceChannel = GuildOnboardingHomeActionCreators.selectHomeResourceChannel(guildId, label.channelId);
        ActionSheetActionCreatorsDefault.hideActionSheet(closure_3);
      };
      return jsx(guildId(dependencyMap[9]).ActionSheetRow, { label: label.title, icon: null, onPress: null, arrow: true }, label.channelId);
    })
  });
};