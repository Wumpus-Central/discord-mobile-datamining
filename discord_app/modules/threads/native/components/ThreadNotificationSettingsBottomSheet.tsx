import { getThreadNotificationOptions as closure_3 } from "AbortCodes";
import { jsx } from "jsxProd";

const result = require("computeThreadNotificationSetting").fileFinishedImporting("modules/threads/native/components/ThreadNotificationSettingsBottomSheet.tsx");

export default function ThreadNotificationsBottomSheet(channel) {
  channel = channel.channel;
  let obj = channel(10406);
  const threadNotificationSetting = obj.useThreadNotificationSetting(channel);
  obj = { header: null, children: null };
  obj = { title: null };
  const intl = channel(1236).intl;
  obj[0] = intl.string(channel(1236).t.h850Ss);
  obj[0] = jsx(channel(5308).BottomSheetTitleHeader, { title: null });
  const obj1 = {
    hasIcons: false,
    value: threadNotificationSetting,
    onChange(flags) {
      let obj = outer1_1(outer1_2[7]);
      obj = { flags };
      return obj.setNotificationSettings(channel, obj);
    },
    accessibilityLabel: null,
    children: null
  };
  const intl2 = channel(1236).intl;
  obj1[3] = intl2.string(channel(1236).t.h850Ss);
  obj1[4] = callback().map((label) => {
    const setting = label.setting;
    return callback(channel(table[8]).TableRadioRow, { value: setting, label: label.label }, "" + setting);
  });
  obj[1] = jsx(channel(7783).TableRadioGroup, {
    hasIcons: false,
    value: threadNotificationSetting,
    onChange(flags) {
      let obj = outer1_1(outer1_2[7]);
      obj = { flags };
      return obj.setNotificationSettings(channel, obj);
    },
    accessibilityLabel: null,
    children: null
  });
  return jsx(channel(5617).ActionSheet, { title: null });
};