// === Module 9816: AppChannelApplicationActionSheet ===

// Module 9816 (AppChannelApplicationActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import AppChannelApplicationIconDefault from "AppChannelApplicationIcon" /* 9815 */;
import getAppChannelApplicationUnsupportedTextDefault from "getAppChannelApplicationUnsupportedText" /* 9817 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/native/AppChannelApplicationActionSheet.tsx");

export default function AppChannelApplicationActionSheet(arg0) {
  ({ selectedApplicationId, onChange } = arg0);
  ({ guildId, channelId } = arg0);
  let obj = onChange(9813);
  const options = obj.useAppChannelApplicationOptions(guildId, channelId, selectedApplicationId).options;
  const items = [onChange];
  const callback = noop.useCallback((arg0) => {
    onChange(arg0);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  obj = { header: null, children: null };
  obj = { title: null };
  const intl = onChange(1114).intl;
  obj.title = intl.string(onChange(1114).t.F2FMFR);
  obj.header = jsx(onChange(7201).BottomSheetTitleHeader, { title: null });
  const obj1 = { accessibilityLabel: null, value: null, onChange: null, hasIcons: true, children: null };
  const intl2 = onChange(1114).intl;
  obj1.accessibilityLabel = intl2.string(onChange(1114).t.F2FMFR);
  if (selectedApplicationId == null) {
    selectedApplicationId = "";
  }
  obj1.value = selectedApplicationId;
  obj1.onChange = callback;
  obj1.children = options.map((item) => {
    ({ application, status } = item);
    return jsx(onChange(5738).TableRadioRow, { value: application.id, label: application.name, subLabel: getAppChannelApplicationUnsupportedTextDefault(status), disabled: !status.supported, icon: jsx(AppChannelApplicationIconDefault, { application }) }, application.id);
  });
  obj.children = jsx(onChange(5735).TableRadioGroup, { accessibilityLabel: null, value: null, onChange: null, hasIcons: true, children: null });
  return jsx(onChange(7249).ActionSheet, { title: null });
};
export const APP_CHANNEL_APPLICATION_ACTION_SHEET_KEY = "AppChannelApplicationActionSheet";