// === Module 10417: NotificationSettingsMessageNotificationActionSheet ===

// Module 10417 (NotificationSettingsMessageNotificationActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4752 */;
import TableRadioGroup from "TableRadioGroup" /* 5897 */;
import TableRadioRow from "TableRadioRow" /* 5900 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7390 */;
import NotificationSettingsMockMessageDefault from "NotificationSettingsMockMessage" /* 10414 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4756);
let obj2 = { sheet: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, header: { padding: 24, paddingTop: 0 }, content: null, form: null };
const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.content = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
obj2.form = { marginTop: 8, marginBottom: 16 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationActionSheet.tsx");

export default function NotificationSettingsMessageNotificationActionSheet(defaultValue) {
  const tmp = closure_7();
  const obj = { startExpanded: true, backgroundStyles: tmp.sheet, children: null };
  const obj2 = { style: tmp.header, children: hasOwnProperty(NotificationSettingsMockMessageDefault, { notificationSetting: defaultValue.value }) };
  const items = [hasOwnProperty(View, obj2), ];
  const obj4 = { style: tmp.content, children: null };
  const obj5 = { variant: "text-sm/semibold", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t["1m22ZB"]);
  const items1 = [hasOwnProperty(Text_Text.Text, obj5), hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted" }), ];
  const obj6 = { style: tmp.form, children: null };
  const obj7 = { defaultValue: defaultValue.value, onChange: defaultValue.onChange, hasIcons: false, children: null };
  const obj8 = { label: null, value: null, subLabel: null };
  const intl2 = util.intl;
  obj8.label = intl2.string(util.t["HVah/3"]);
  obj8.value = UserNotificationSettings.ALL_MESSAGES;
  obj8.subLabel = defaultValue.allMessagesSubLabel;
  const items2 = [hasOwnProperty(TableRadioRow.TableRadioRow, obj8), , ];
  const obj9 = { label: null, value: null };
  const intl3 = util.intl;
  obj9.label = intl3.string(util.t["tu+ZWJ"]);
  obj9.value = UserNotificationSettings.ONLY_MENTIONS;
  items2[1] = hasOwnProperty(TableRadioRow.TableRadioRow, obj9);
  const obj10 = { label: null, value: null };
  const intl4 = util.intl;
  obj10.label = intl4.string(util.t.X4wWUi);
  obj10.value = UserNotificationSettings.NO_MESSAGES;
  items2[2] = hasOwnProperty(TableRadioRow.TableRadioRow, obj10);
  obj7.children = items2;
  obj6.children = timestampProducer(TableRadioGroup.TableRadioGroup, obj7);
  items1[2] = hasOwnProperty(View, obj6);
  obj4.children = items1;
  items[1] = timestampProducer(View, obj4);
  obj.children = items;
  return timestampProducer(Sheet_BottomSheet.BottomSheet, obj);
};