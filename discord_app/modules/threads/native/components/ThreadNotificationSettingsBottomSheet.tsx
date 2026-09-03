// discord_app/modules/threads/native/components/ThreadNotificationSettingsBottomSheet.tsx
import set from "../../../../../_runtime/00002_set.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import AbortCodes from "../../ThreadConstants.tsx";

let closure_3 = AbortCodes.getThreadNotificationOptions;
const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/threads/native/components/ThreadNotificationSettingsBottomSheet.tsx");

export default function ThreadNotificationsBottomSheet(channel) {
  channel = channel.channel;
  let obj = channel(10197);
  const threadNotificationSetting = obj.useThreadNotificationSetting(channel);
  obj = { header: null, children: null };
  obj = { title: null };
  const intl = channel(1233).intl;
  obj[0] = intl.string(channel(1233).t.h850Ss);
  obj[0] = jsx(channel(5630).BottomSheetTitleHeader, { title: null });
  obj1 = {
    hasIcons: false,
    value: threadNotificationSetting,
    onChange(flags) {
      let obj = closure_1_1(closure_1_2[7]);
      obj = { flags };
      return obj.setNotificationSettings(channel, obj);
    },
    accessibilityLabel: null,
    children: null,
  };
  const intl2 = channel(1233).intl;
  obj1[3] = intl2.string(channel(1233).t.h850Ss);
  obj1[4] = callback().map((label) => {
    const setting = label.setting;
    return callback(channel(table[8]).TableRadioRow, { value: setting, label: label.label }, "" + setting);
  });
  obj[1] = jsx(channel(7704).TableRadioGroup, {
    hasIcons: false,
    value: threadNotificationSetting,
    onChange(flags) {
      let obj = closure_1_1(closure_1_2[7]);
      obj = { flags };
      return obj.setNotificationSettings(channel, obj);
    },
    accessibilityLabel: null,
    children: null,
  });
  return jsx(channel(5998).ActionSheet, { title: null });
}
