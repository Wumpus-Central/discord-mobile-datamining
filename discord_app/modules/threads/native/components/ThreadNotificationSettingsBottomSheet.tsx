// === Module 11313: ThreadNotificationSettingsBottomSheet ===

// Module 11313 (ThreadNotificationSettingsBottomSheet)
import jsxProd from "jsxProd" /* 21 */;
import ThreadConstants from "ThreadConstants" /* 1113 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7765 */;
import size from "module_2" /* 2 */;

let closure_3 = ThreadConstants.getThreadNotificationOptions;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/threads/native/components/ThreadNotificationSettingsBottomSheet.tsx");

export default function ThreadNotificationsBottomSheet(channel) {
  channel = channel.channel;
  let obj = channel(10088);
  const threadNotificationSetting = obj.useThreadNotificationSetting(channel);
  obj = { header: null, children: null };
  obj = { title: null };
  const intl = channel(1114).intl;
  obj.title = intl.string(channel(1114).t.h850Ss);
  obj.header = jsx(channel(7149).BottomSheetTitleHeader, { title: null });
  const obj1 = {
    hasIcons: false,
    value: threadNotificationSetting,
    onChange(flags) {
      const obj = { flags };
      return obj.setNotificationSettings(channel, obj);
    },
    accessibilityLabel: null,
    children: null
  };
  const intl2 = channel(1114).intl;
  obj1.accessibilityLabel = intl2.string(channel(1114).t.h850Ss);
  obj1.children = closure_3().map((label) => {
    const setting = label.setting;
    return jsx(channel(dependencyMap[8]).TableRadioRow, { value: setting, label: label.label }, "" + setting);
  });
  obj.children = jsx(channel(5685).TableRadioGroup, {
    hasIcons: false,
    value: threadNotificationSetting,
    onChange(flags) {
      const obj = { flags };
      return obj.setNotificationSettings(channel, obj);
    },
    accessibilityLabel: null,
    children: null
  });
  return jsx(channel(7198).ActionSheet, { title: null });
};