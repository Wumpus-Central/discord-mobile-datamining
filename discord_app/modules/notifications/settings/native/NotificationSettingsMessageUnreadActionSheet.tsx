// === Module 9999: NotificationSettingsMessageUnreadActionSheet ===

// Module 9999 (NotificationSettingsMessageUnreadActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4376 */;
import Background from "Background" /* 5503 */;
import TableRadioRow from "TableRadioRow" /* 8135 */;
import context from "context" /* 8136 */;
import NotificationSettingsMockChannelsDefault from "NotificationSettingsMockChannels" /* 9996 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { UnreadSetting } from "ReadStateTypes" /* 4590 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { sheet: null, header: null, content: null, form: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: 24, paddingTop: 0 };
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
createCacheKey[3] = { marginTop: 8, marginBottom: 16 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
const result = require("set").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadActionSheet.tsx");

export default function NotificationSettingsMessageUnreadActionSheet(defaultValue) {
  const tmp = callback3();
  let obj = { startExpanded: true, backgroundStyles: tmp.sheet, children: null };
  obj = { style: tmp.header, children: callback(NotificationSettingsMockChannelsDefault, obj) };
  obj = { unreadSetting: defaultValue.value };
  const items = [callback(View, obj), ];
  obj1 = { style: tmp.content, children: null };
  const obj2 = { variant: "text-sm/semibold", children: null };
  const intl = getSystemLocale.intl;
  obj2[1] = intl.string(getSystemLocale.t.Tqd1Af);
  const items1 = [callback(Text.Text, obj2), , ];
  const obj3 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl2 = getSystemLocale.intl;
  obj3[2] = intl2.string(getSystemLocale.t.RpQgm5);
  items1[1] = callback(Text.Text, obj3);
  const obj4 = { style: tmp.form, children: null };
  const obj5 = { defaultValue: defaultValue.value, onChange: defaultValue.onChange, hasIcons: false, children: null };
  const obj6 = { label: null, value: null };
  const intl3 = getSystemLocale.intl;
  obj6[0] = intl3.string(getSystemLocale.t["HVah/3"]);
  obj6[1] = UnreadSetting.ALL_MESSAGES;
  const items2 = [callback(TableRadioRow.TableRadioRow, obj6), ];
  const obj7 = { subLabel: defaultValue.disabledMentionOnlyWithReason, disabled: null != defaultValue.disabledMentionOnlyWithReason, label: null, value: null };
  const intl4 = getSystemLocale.intl;
  obj7[2] = intl4.string(getSystemLocale.t["tu+ZWJ"]);
  obj7[3] = UnreadSetting.ONLY_MENTIONS;
  items2[1] = callback(TableRadioRow.TableRadioRow, obj7);
  obj5[3] = items2;
  obj4[1] = callback2(context.TableRadioGroup, obj5);
  items1[2] = callback(View, obj4);
  obj1[1] = items1;
  items[1] = callback2(View, obj1);
  obj[2] = items;
  return callback2(Background.BottomSheet, obj);
};