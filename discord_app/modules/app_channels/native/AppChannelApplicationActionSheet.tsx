// === Module 9746: AppChannelApplicationActionSheet ===

// Module 9746 (AppChannelApplicationActionSheet)
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/app_channels/native/AppChannelApplicationActionSheet.tsx");

export default function AppChannelApplicationActionSheet(arg0) {
  ({ selectedApplicationId, onChange } = arg0);
  ({ guildId, channelId } = arg0);
  let obj = onChange(9743);
  const options = obj.useAppChannelApplicationOptions(guildId, channelId, selectedApplicationId).options;
  const items = [onChange];
  const callback = React.useCallback((arg0) => {
    onChange(arg0);
    closure_1_1(closure_1_2[3]).hideActionSheet();
  }, items);
  obj = { header: null, children: null };
  obj = { title: null };
  const intl = onChange(1114).intl;
  obj[0] = intl.string(onChange(1114).t.F2FMFR);
  obj[0] = jsx(onChange(7149).BottomSheetTitleHeader, { title: null });
  obj1 = { accessibilityLabel: null, value: null, onChange: null, hasIcons: true, children: null };
  const intl2 = onChange(1114).intl;
  obj1[0] = intl2.string(onChange(1114).t.F2FMFR);
  if (selectedApplicationId == null) {
    selectedApplicationId = "";
  }
  obj1[1] = selectedApplicationId;
  obj1[2] = callback;
  obj1[4] = options.map((arg0) => {
    ({ application, status } = arg0);
    return callback2(onChange(5688).TableRadioRow, { value: application.id, label: application.name, subLabel: callback(9747)(status), disabled: !status.supported, icon: callback2(callback(9745), { application }) }, application.id);
  });
  obj[1] = jsx(onChange(5685).TableRadioGroup, { accessibilityLabel: null, value: null, onChange: null, hasIcons: true, children: null });
  return jsx(onChange(7198).ActionSheet, { title: null });
};
export const APP_CHANNEL_APPLICATION_ACTION_SHEET_KEY = "AppChannelApplicationActionSheet";