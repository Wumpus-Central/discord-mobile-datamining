// === Module 16909: OnboardingHomeResourcesSheet ===

// Module 16909 (OnboardingHomeResourcesSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 12538 */;
import useResourceChannelsDefault from "useResourceChannels" /* 16908 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = fn(16907).ONBOARDING_HOME_RESOURCES_SHEET_KEY;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeResourcesSheet.tsx");

export default function OnboardingHomeResourcesSheet(guildId) {
  guildId = guildId.guildId;
  importDefault = guildId(4457).useToken(nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
  let obj = guildId(4457);
  let obj2 = { children: null };
  const arr = useResourceChannelsDefault(guildId);
  obj2.children = jsx(guildId(7444).ActionSheetRow.Group, {
    hasIcons: true,
    children: useResourceChannelsDefault(guildId).map((label) => {
      const resourceChannelIconURL = height(dependencyMap[10]).getResourceChannelIconURL(label);
      const obj2 = { label: label.title, icon: null, onPress: null, arrow: true };
      let tmp4Result;
      if (null != resourceChannelIconURL) {
        const obj3 = { style: null, source: null };
        const size = { width: height, height };
        obj3.style = size;
        const obj4 = { uri: resourceChannelIconURL };
        obj3.source = obj4;
        tmp4Result = jsx(height(dependencyMap[11]), { style: null, source: null });
      }
      obj2.icon = tmp4Result;
      obj2.onPress = function onPress() {
        const homeResourceChannel = GuildOnboardingHomeActionCreators.selectHomeResourceChannel(guildId, label.channelId);
        ActionSheetActionCreatorsDefault.hideActionSheet(closure_3);
      };
      return jsx(guildId(dependencyMap[9]).ActionSheetRow, { label: label.title, icon: null, onPress: null, arrow: true }, label.channelId);
    })
  });
  return jsx(guildId(7442).ActionSheet, { children: null });
};