// discord_app/modules/guild_onboarding_home/native/OnboardingHomeResourcesSheet.tsx
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useResourceChannelsDefault from "useResourceChannels" /* 15815 */;
import { ONBOARDING_HOME_RESOURCES_SHEET_KEY as closure_3 } from "ONBOARDING_HOME_RESOURCES_SHEET_KEY" /* 15814 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeResourcesSheet.tsx");

export default function OnboardingHomeResourcesSheet(guildId) {
  guildId = guildId.guildId;
  importDefault = undefined;
  let obj = guildId(4097);
  importDefault = obj.useToken(ThemesDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
  obj = { children: null };
  obj = {
    hasIcons: true,
    children: useResourceChannelsDefault(guildId).map((label) => {
      closure_0 = label;
      let obj = callback(closure_1_2[10]);
      const resourceChannelIconURL = obj.getResourceChannelIconURL(label);
      obj = { label: label.title, icon: null, onPress: null, arrow: true };
      let tmp4Result;
      if (null != resourceChannelIconURL) {
        obj = { style: null, source: null };
        obj1 = { width: null, height: null };
        obj1[0] = callback;
        obj1[1] = callback;
        obj[0] = obj1;
        const obj2 = { uri: null };
        obj2[0] = resourceChannelIconURL;
        obj[1] = obj2;
        tmp4Result = tmp4(callback(tmp2[11]), obj);
      }
      obj[1] = tmp4Result;
      obj[2] = function onPress() {
        const homeResourceChannel = guildId(closure_2_2[6]).selectHomeResourceChannel(label, label.channelId);
        const obj = guildId(closure_2_2[6]);
        callback(closure_2_2[7]).hideActionSheet(closure_2_3);
      };
      return closure_1_4(guildId(closure_1_2[9]).ActionSheetRow, obj, label.channelId);
    })
  };
  obj[0] = jsx(guildId(7177).ActionSheetRow.Group, {
    hasIcons: true,
    children: useResourceChannelsDefault(guildId).map((label) => {
      closure_0 = label;
      let obj = callback(closure_1_2[10]);
      const resourceChannelIconURL = obj.getResourceChannelIconURL(label);
      obj = { label: label.title, icon: null, onPress: null, arrow: true };
      let tmp4Result;
      if (null != resourceChannelIconURL) {
        obj = { style: null, source: null };
        obj1 = { width: null, height: null };
        obj1[0] = callback;
        obj1[1] = callback;
        obj[0] = obj1;
        const obj2 = { uri: null };
        obj2[0] = resourceChannelIconURL;
        obj[1] = obj2;
        tmp4Result = tmp4(callback(tmp2[11]), obj);
      }
      obj[1] = tmp4Result;
      obj[2] = function onPress() {
        const homeResourceChannel = guildId(closure_2_2[6]).selectHomeResourceChannel(label, label.channelId);
        const obj = guildId(closure_2_2[6]);
        callback(closure_2_2[7]).hideActionSheet(closure_2_3);
      };
      return closure_1_4(guildId(closure_1_2[9]).ActionSheetRow, obj, label.channelId);
    })
  });
  return jsx(guildId(7175).ActionSheet, {
    hasIcons: true,
    children: useResourceChannelsDefault(guildId).map((label) => {
      closure_0 = label;
      let obj = callback(closure_1_2[10]);
      const resourceChannelIconURL = obj.getResourceChannelIconURL(label);
      obj = { label: label.title, icon: null, onPress: null, arrow: true };
      let tmp4Result;
      if (null != resourceChannelIconURL) {
        obj = { style: null, source: null };
        obj1 = { width: null, height: null };
        obj1[0] = callback;
        obj1[1] = callback;
        obj[0] = obj1;
        const obj2 = { uri: null };
        obj2[0] = resourceChannelIconURL;
        obj[1] = obj2;
        tmp4Result = tmp4(callback(tmp2[11]), obj);
      }
      obj[1] = tmp4Result;
      obj[2] = function onPress() {
        const homeResourceChannel = guildId(closure_2_2[6]).selectHomeResourceChannel(label, label.channelId);
        const obj = guildId(closure_2_2[6]);
        callback(closure_2_2[7]).hideActionSheet(closure_2_3);
      };
      return closure_1_4(guildId(closure_1_2[9]).ActionSheetRow, obj, label.channelId);
    })
  });
};