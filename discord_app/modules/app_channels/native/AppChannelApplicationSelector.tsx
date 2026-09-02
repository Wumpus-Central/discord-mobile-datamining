// === Module 9725: AppChannelApplicationSelector ===

// Module 9725 (AppChannelApplicationSelector)
import noopAll from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/app_channels/native/AppChannelApplicationSelector.tsx");

export default function AppChannelApplicationSelector(guildId) {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const selectedApplicationId = guildId.selectedApplicationId;
  ({ onChange: jsx, disabled } = guildId);
  let obj = guildId(selectedApplicationId[2]);
  const appChannelApplicationOptions = obj.useAppChannelApplicationOptions(guildId, channelId, selectedApplicationId, disabled);
  ({ selectedApplication, hasNoApplications } = appChannelApplicationOptions);
  if (null != selectedApplication) {
    let name = selectedApplication.name;
  } else {
    const intl = tmp(tmp2[3]).intl;
    const string = intl.string;
    const t = tmp(tmp2[3]).t;
    if (hasNoApplications) {
      name = string(t.MlQm3T);
    } else {
      name = string(t.F2FMFR);
    }
  }
  obj = { title: null, description: null, hasIcons: true, children: null };
  const intl2 = tmp(tmp2[3]).intl;
  obj[0] = intl2.string(guildId(selectedApplicationId[3]).t.oYTLIL);
  obj[1] = guildId.description;
  obj = { label: name, accessibilityLabel: null, icon: null, onPress: null, arrow: null, disabled: null };
  const intl3 = tmp(tmp2[3]).intl;
  obj[1] = "" + intl3.string(guildId(selectedApplicationId[3]).t.oYTLIL) + " " + name;
  let tmp5Result = null;
  if (null != selectedApplication) {
    obj1 = { application: null };
    obj1[0] = selectedApplication;
    tmp5Result = tmp5(channelId(tmp2[6]), obj1);
  }
  obj[2] = tmp5Result;
  let fn;
  if (true !== disabled && !hasNoApplications) {
    fn = () => {
      let obj = channelId(selectedApplicationId[7]);
      obj = { guildId, channelId, selectedApplicationId, onChange: closure_3 };
      obj.openLazy(guildId(selectedApplicationId[9])(selectedApplicationId[8], selectedApplicationId.paths), guildId(selectedApplicationId[10]).APP_CHANNEL_APPLICATION_ACTION_SHEET_KEY, obj);
    };
  }
  obj[3] = fn;
  obj[4] = true !== disabled && !hasNoApplications;
  obj[5] = !(true !== disabled && !hasNoApplications);
  obj[3] = jsx(guildId(selectedApplicationId[5]).TableRow, { label: name, accessibilityLabel: null, icon: null, onPress: null, arrow: null, disabled: null });
  return jsx(guildId(selectedApplicationId[4]).TableRowGroup, { label: name, accessibilityLabel: null, icon: null, onPress: null, arrow: null, disabled: null });
};