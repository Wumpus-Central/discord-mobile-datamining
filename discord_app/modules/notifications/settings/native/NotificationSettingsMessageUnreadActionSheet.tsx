// === Module 10509: NotificationSettingsMessageUnreadActionSheet ===

// Module 10509 (NotificationSettingsMessageUnreadActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4823 */;
import TableRadioGroup from "TableRadioGroup" /* 5988 */;
import TableRadioRow from "TableRadioRow" /* 5991 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7481 */;
import NotificationSettingsMockChannelsDefault from "NotificationSettingsMockChannels" /* 10506 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UnreadSetting = fn(5009).UnreadSetting;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4827);
let obj2 = { sheet: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, header: { padding: 24, paddingTop: 0 }, content: null, form: null };
const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.content = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
obj2.form = { marginTop: 8, marginBottom: 16 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadActionSheet.tsx");

export default function NotificationSettingsMessageUnreadActionSheet(defaultValue) {
  const tmp = closure_7();
  const obj = { startExpanded: true, backgroundStyles: tmp.sheet, children: null };
  const obj2 = { style: tmp.header, children: hasOwnProperty(NotificationSettingsMockChannelsDefault, { unreadSetting: defaultValue.value }) };
  const items = [hasOwnProperty(View, obj2), ];
  const obj4 = { style: tmp.content, children: null };
  const obj5 = { variant: "text-sm/semibold", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.Tqd1Af);
  const items1 = [hasOwnProperty(Text_Text.Text, obj5), , ];
  const obj6 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t.RpQgm5);
  items1[1] = hasOwnProperty(Text_Text.Text, obj6);
  const obj7 = { style: tmp.form, children: null };
  const obj8 = { defaultValue: defaultValue.value, onChange: defaultValue.onChange, hasIcons: false, children: null };
  const obj9 = { label: null, value: null };
  const intl3 = util.intl;
  obj9.label = intl3.string(util.t["HVah/3"]);
  obj9.value = UnreadSetting.ALL_MESSAGES;
  const items2 = [hasOwnProperty(TableRadioRow.TableRadioRow, obj9), ];
  const obj10 = { subLabel: defaultValue.disabledMentionOnlyWithReason, disabled: null != defaultValue.disabledMentionOnlyWithReason, label: null, value: null };
  const intl4 = util.intl;
  obj10.label = intl4.string(util.t["tu+ZWJ"]);
  obj10.value = UnreadSetting.ONLY_MENTIONS;
  items2[1] = hasOwnProperty(TableRadioRow.TableRadioRow, obj10);
  obj8.children = items2;
  obj7.children = timestampProducer(TableRadioGroup.TableRadioGroup, obj8);
  items1[2] = hasOwnProperty(View, obj7);
  obj4.children = items1;
  items[1] = timestampProducer(View, obj4);
  obj.children = items;
  return timestampProducer(Sheet_BottomSheet.BottomSheet, obj);
};