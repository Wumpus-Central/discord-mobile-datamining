// === Module 8539: AppChannelApplicationActionSheet ===

// Module 8539 (AppChannelApplicationActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import TableRowApplicationIconDefault from "TableRowApplicationIcon" /* 8538 */;
import getAppChannelApplicationUnsupportedTextDefault from "getAppChannelApplicationUnsupportedText" /* 8540 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/native/AppChannelApplicationActionSheet.tsx");

export default function AppChannelApplicationActionSheet(arg0) {
  ({ selectedApplicationId, onChange } = arg0);
  ({ guildId, channelId } = arg0);
  const options = onChange(8536).useAppChannelApplicationOptions(guildId, channelId, selectedApplicationId).options;
  items = [onChange];
  const callback = noop.useCallback((arg0) => {
    onChange(arg0);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  const obj2 = { header: null, children: null };
  const obj3 = { title: null };
  const intl = onChange(1112).intl;
  obj3.title = intl.string(onChange(1112).t.F2FMFR);
  obj2.header = jsx(onChange(7507).BottomSheetTitleHeader, { title: null });
  const obj4 = { accessibilityLabel: null, value: null, onChange: null, hasIcons: true, children: null };
  const intl2 = onChange(1112).intl;
  obj4.accessibilityLabel = intl2.string(onChange(1112).t.F2FMFR);
  if (selectedApplicationId == null) {
    selectedApplicationId = "";
  }
  obj4.value = selectedApplicationId;
  obj4.onChange = callback;
  obj4.children = options.map((item) => {
    ({ application, status } = item);
    return jsx(onChange(7253).TableRadioRow, { value: application.id, label: application.name, subLabel: getAppChannelApplicationUnsupportedTextDefault(status), disabled: !status.supported, icon: jsx(TableRowApplicationIconDefault, { application }) }, application.id);
  });
  obj2.children = jsx(onChange(7251).TableRadioGroup, { accessibilityLabel: null, value: null, onChange: null, hasIcons: true, children: null });
  return jsx(onChange(7546).ActionSheet, { header: null, children: null });
};
export const APP_CHANNEL_APPLICATION_ACTION_SHEET_KEY = "AppChannelApplicationActionSheet";