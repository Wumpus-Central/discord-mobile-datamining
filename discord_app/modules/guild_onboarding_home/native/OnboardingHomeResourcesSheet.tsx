// === Module 16594: OnboardingHomeResourcesSheet ===

// Module 16594 (OnboardingHomeResourcesSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 12314 */;
import useResourceChannelsDefault from "useResourceChannels" /* 16593 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = fn(16592).ONBOARDING_HOME_RESOURCES_SHEET_KEY;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeResourcesSheet.tsx");

export default function OnboardingHomeResourcesSheet(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(4275);
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
        tmp4Result = jsx(height(dependencyMap[11]), { style: null, source: null });
      }
      obj.icon = tmp4Result;
      obj.onPress = function onPress() {
        const homeResourceChannel = GuildOnboardingHomeActionCreators.selectHomeResourceChannel(guildId, label.channelId);
        ActionSheetActionCreatorsDefault.hideActionSheet(closure_3);
      };
      return jsx(guildId(dependencyMap[9]).ActionSheetRow, { label: label.title, icon: null, onPress: null, arrow: true }, label.channelId);
    })
  };
  obj.children = jsx(guildId(7213).ActionSheetRow.Group, {
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
        tmp4Result = jsx(height(dependencyMap[11]), { style: null, source: null });
      }
      obj.icon = tmp4Result;
      obj.onPress = function onPress() {
        const homeResourceChannel = GuildOnboardingHomeActionCreators.selectHomeResourceChannel(guildId, label.channelId);
        ActionSheetActionCreatorsDefault.hideActionSheet(closure_3);
      };
      return jsx(guildId(dependencyMap[9]).ActionSheetRow, { label: label.title, icon: null, onPress: null, arrow: true }, label.channelId);
    })
  });
  return jsx(guildId(7211).ActionSheet, {
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
        tmp4Result = jsx(height(dependencyMap[11]), { style: null, source: null });
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