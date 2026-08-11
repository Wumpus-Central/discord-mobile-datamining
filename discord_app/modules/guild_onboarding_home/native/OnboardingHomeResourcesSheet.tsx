// discord_app/modules/guild_onboarding_home/native/OnboardingHomeResourcesSheet.tsx
import "noop";
import { ONBOARDING_HOME_RESOURCES_SHEET_KEY as closure_3 } from "ONBOARDING_HOME_RESOURCES_SHEET_KEY";
import { jsx } from "jsxProd";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { useResourceChannels } from "../useResourceChannels.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeResourcesSheet.tsx");

export default function OnboardingHomeResourcesSheet(guildId) {
  guildId = guildId.guildId;
  let importDefault;
  let obj = guildId(4024);
  importDefault = obj.useToken(Themes.modules.mobile.TABLE_ROW_ICON_SIZE);
  obj = { children: null };
  obj = { hasIcons: true, children: null };
  obj[1] = useResourceChannels(guildId).map((label) => {
    let closure_0 = label;
    let obj = callback(outer1_2[10]);
    const resourceChannelIconURL = obj.getResourceChannelIconURL(label);
    obj = { label: label.title, icon: null, onPress: null, arrow: true };
    let tmp4Result;
    if (null != resourceChannelIconURL) {
      obj = { style: null, source: null };
      const obj1 = { width: null, height: null };
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
      const homeResourceChannel = guildId(outer2_2[6]).selectHomeResourceChannel(label, label.channelId);
      const obj = guildId(outer2_2[6]);
      callback(outer2_2[7]).hideActionSheet(outer2_3);
    };
    return outer1_4(guildId(outer1_2[9]).ActionSheetRow, obj, label.channelId);
  });
  obj[0] = jsx(guildId(5766).ActionSheetRow.Group, { hasIcons: true, children: null });
  return jsx(guildId(5764).ActionSheet, { hasIcons: true, children: null });
};