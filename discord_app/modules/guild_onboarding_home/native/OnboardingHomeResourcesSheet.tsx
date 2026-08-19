// discord_app/modules/guild_onboarding_home/native/OnboardingHomeResourcesSheet.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useResourceChannelsDefault from "../useResourceChannels.tsx";
import { ONBOARDING_HOME_RESOURCES_SHEET_KEY as closure_3 } from "OnboardingHomeConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeResourcesSheet.tsx");

export default function OnboardingHomeResourcesSheet(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(4097);
  importDefault = obj.useToken(ThemesDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
  obj = {
    hasIcons: true,
    children: useResourceChannelsDefault(guildId).map((item, index) => {
      closure_0 = item;
      let obj = callback(dependencyMap[10]);
      const resourceChannelIconURL = obj.getResourceChannelIconURL(item);
      obj = { label: item.title, icon: null, onPress: null, arrow: true };
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
        tmp4Result = jsx(callback(dependencyMap[11]), { style: null, source: null });
      }
      obj[1] = tmp4Result;
      obj[2] = function onPress() {
        const homeResourceChannel = guildId(dependencyMap[6]).selectHomeResourceChannel(item, item.channelId);
        const obj = guildId(dependencyMap[6]);
        callback(dependencyMap[7]).hideActionSheet(closure_2_3);
      };
      return jsx(guildId(dependencyMap[9]).ActionSheetRow, { label: item.title, icon: null, onPress: null, arrow: true }, item.channelId);
    })
  };
  obj[0] = jsx(guildId(7177).ActionSheetRow.Group, {
    hasIcons: true,
    children: useResourceChannelsDefault(guildId).map((item, index) => {
      closure_0 = item;
      let obj = callback(dependencyMap[10]);
      const resourceChannelIconURL = obj.getResourceChannelIconURL(item);
      obj = { label: item.title, icon: null, onPress: null, arrow: true };
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
        tmp4Result = jsx(callback(dependencyMap[11]), { style: null, source: null });
      }
      obj[1] = tmp4Result;
      obj[2] = function onPress() {
        const homeResourceChannel = guildId(dependencyMap[6]).selectHomeResourceChannel(item, item.channelId);
        const obj = guildId(dependencyMap[6]);
        callback(dependencyMap[7]).hideActionSheet(closure_2_3);
      };
      return jsx(guildId(dependencyMap[9]).ActionSheetRow, { label: item.title, icon: null, onPress: null, arrow: true }, item.channelId);
    })
  });
  return jsx(guildId(7175).ActionSheet, {
    hasIcons: true,
    children: useResourceChannelsDefault(guildId).map((item, index) => {
      closure_0 = item;
      let obj = callback(dependencyMap[10]);
      const resourceChannelIconURL = obj.getResourceChannelIconURL(item);
      obj = { label: item.title, icon: null, onPress: null, arrow: true };
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
        tmp4Result = jsx(callback(dependencyMap[11]), { style: null, source: null });
      }
      obj[1] = tmp4Result;
      obj[2] = function onPress() {
        const homeResourceChannel = guildId(dependencyMap[6]).selectHomeResourceChannel(item, item.channelId);
        const obj = guildId(dependencyMap[6]);
        callback(dependencyMap[7]).hideActionSheet(closure_2_3);
      };
      return jsx(guildId(dependencyMap[9]).ActionSheetRow, { label: item.title, icon: null, onPress: null, arrow: true }, item.channelId);
    })
  });
};