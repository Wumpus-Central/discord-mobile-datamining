// === Module 9991: AppChannelApplicationActionSheet ===

// Module 9991 (AppChannelApplicationActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import AppChannelApplicationIconDefault from "AppChannelApplicationIcon" /* 9990 */;
import getAppChannelApplicationUnsupportedTextDefault from "getAppChannelApplicationUnsupportedText" /* 9992 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/native/AppChannelApplicationActionSheet.tsx");

export default function AppChannelApplicationActionSheet(arg0) {
  ({ selectedApplicationId, onChange } = arg0);
  ({ guildId, channelId } = arg0);
  const options = onChange(9988).useAppChannelApplicationOptions(guildId, channelId, selectedApplicationId).options;
  const items = [onChange];
  const callback = noop.useCallback((arg0) => {
    onChange(arg0);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  const obj2 = { header: null, children: null };
  const obj3 = { title: null };
  const intl = onChange(1115).intl;
  obj3.title = intl.string(onChange(1115).t.F2FMFR);
  obj2.header = jsx(onChange(7345).BottomSheetTitleHeader, { title: null });
  const obj4 = { accessibilityLabel: null, value: null, onChange: null, hasIcons: true, children: null };
  const intl2 = onChange(1115).intl;
  obj4.accessibilityLabel = intl2.string(onChange(1115).t.F2FMFR);
  if (selectedApplicationId == null) {
    selectedApplicationId = "";
  }
  obj4.value = selectedApplicationId;
  obj4.onChange = callback;
  obj4.children = options.map((item) => {
    ({ application, status } = item);
    return jsx(onChange(5858).TableRadioRow, { value: application.id, label: application.name, subLabel: getAppChannelApplicationUnsupportedTextDefault(status), disabled: !status.supported, icon: jsx(AppChannelApplicationIconDefault, { application }) }, application.id);
  });
  obj2.children = jsx(onChange(5855).TableRadioGroup, { accessibilityLabel: null, value: null, onChange: null, hasIcons: true, children: null });
  return jsx(onChange(7393).ActionSheet, { header: null, children: null });
};
export const APP_CHANNEL_APPLICATION_ACTION_SHEET_KEY = "AppChannelApplicationActionSheet";