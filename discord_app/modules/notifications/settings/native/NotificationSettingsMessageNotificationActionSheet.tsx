// discord_app/modules/notifications/settings/native/NotificationSettingsMessageNotificationActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TableRadioGroup from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import NotificationSettingsMockMessageDefault from "NotificationSettingsMockMessage.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { sheet: null, header: null, content: null, form: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.sheet = createStyles;
createStyles.header = { padding: 24, paddingTop: 0 };
createStyles.content = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
createStyles.form = { marginTop: 8, marginBottom: 16 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/notifications/settings/native/NotificationSettingsMessageNotificationActionSheet.tsx",
);

export default function NotificationSettingsMessageNotificationActionSheet(defaultValue) {
  const tmp = closure_7();
  let obj = { startExpanded: true, backgroundStyles: tmp.sheet, children: null };
  obj = { style: tmp.header, children: null };
  obj = { notificationSetting: defaultValue.value };
  obj.children = hasOwnProperty(NotificationSettingsMockMessageDefault, obj);
  const items = [hasOwnProperty(View, obj)];
  const obj1 = { style: tmp.content, children: null };
  const obj2 = { variant: "text-sm/semibold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["1m22ZB"]);
  const items1 = [
    hasOwnProperty(Text_Text.Text, obj2),
    hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted" }),
  ];
  const obj3 = { style: tmp.form, children: null };
  const obj4 = { defaultValue: defaultValue.value, onChange: defaultValue.onChange, hasIcons: false, children: null };
  const obj5 = { label: null, value: null, subLabel: null };
  const intl2 = util.intl;
  obj5.label = intl2.string(util.t["HVah/3"]);
  obj5.value = UserNotificationSettings.ALL_MESSAGES;
  obj5.subLabel = defaultValue.allMessagesSubLabel;
  const items2 = [hasOwnProperty(TableRadioRow.TableRadioRow, obj5), ,];
  const obj6 = { label: null, value: null };
  const intl3 = util.intl;
  obj6.label = intl3.string(util.t["tu+ZWJ"]);
  obj6.value = UserNotificationSettings.ONLY_MENTIONS;
  items2[1] = hasOwnProperty(TableRadioRow.TableRadioRow, obj6);
  const obj7 = { label: null, value: null };
  const intl4 = util.intl;
  obj7.label = intl4.string(util.t.X4wWUi);
  obj7.value = UserNotificationSettings.NO_MESSAGES;
  items2[2] = hasOwnProperty(TableRadioRow.TableRadioRow, obj7);
  obj4.children = items2;
  obj3.children = timestampProducer(TableRadioGroup.TableRadioGroup, obj4);
  items1[2] = hasOwnProperty(View, obj3);
  obj1.children = items1;
  items[1] = timestampProducer(View, obj1);
  obj.children = items;
  return timestampProducer(Sheet_BottomSheet.BottomSheet, obj);
}
