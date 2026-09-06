// discord_app/modules/notifications/settings/native/NotificationSettingsMessageUnreadActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TableRadioGroup from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import NotificationSettingsMockChannelsDefault from "NotificationSettingsMockChannels.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const UnreadSetting = fn(4742).UnreadSetting;
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
  "modules/notifications/settings/native/NotificationSettingsMessageUnreadActionSheet.tsx",
);

export default function NotificationSettingsMessageUnreadActionSheet(defaultValue) {
  const tmp = closure_7();
  let obj = { startExpanded: true, backgroundStyles: tmp.sheet, children: null };
  obj = { style: tmp.header, children: null };
  obj = { unreadSetting: defaultValue.value };
  obj.children = hasOwnProperty(NotificationSettingsMockChannelsDefault, obj);
  const items = [hasOwnProperty(View, obj)];
  const obj1 = { style: tmp.content, children: null };
  const obj2 = { variant: "text-sm/semibold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.Tqd1Af);
  const items1 = [hasOwnProperty(Text_Text.Text, obj2), ,];
  const obj3 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.RpQgm5);
  items1[1] = hasOwnProperty(Text_Text.Text, obj3);
  const obj4 = { style: tmp.form, children: null };
  const obj5 = { defaultValue: defaultValue.value, onChange: defaultValue.onChange, hasIcons: false, children: null };
  const obj6 = { label: null, value: null };
  const intl3 = util.intl;
  obj6.label = intl3.string(util.t["HVah/3"]);
  obj6.value = UnreadSetting.ALL_MESSAGES;
  const items2 = [hasOwnProperty(TableRadioRow.TableRadioRow, obj6)];
  const obj7 = {
    subLabel: defaultValue.disabledMentionOnlyWithReason,
    disabled: null != defaultValue.disabledMentionOnlyWithReason,
    label: null,
    value: null,
  };
  const intl4 = util.intl;
  obj7.label = intl4.string(util.t["tu+ZWJ"]);
  obj7.value = UnreadSetting.ONLY_MENTIONS;
  items2[1] = hasOwnProperty(TableRadioRow.TableRadioRow, obj7);
  obj5.children = items2;
  obj4.children = timestampProducer(TableRadioGroup.TableRadioGroup, obj5);
  items1[2] = hasOwnProperty(View, obj4);
  obj1.children = items1;
  items[1] = timestampProducer(View, obj1);
  obj.children = items;
  return timestampProducer(Sheet_BottomSheet.BottomSheet, obj);
}
