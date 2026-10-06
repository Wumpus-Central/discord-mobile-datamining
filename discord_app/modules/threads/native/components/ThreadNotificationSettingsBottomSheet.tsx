// === Module 11081: ThreadNotificationSettingsBottomSheet ===

// Module 11081 (ThreadNotificationSettingsBottomSheet)
import Fragment from "Fragment" /* 21 */;
import ThreadConstants from "ThreadConstants" /* 1125 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7274 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel, setting;

let closure_3 = ThreadConstants.getThreadNotificationOptions;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let tmp8;
  let obj = channel(576);
  const cResult = obj.c(8);
  channel = channel.channel;
  let obj2 = channel(11082);
  const threadNotificationSetting = obj2.useThreadNotificationSetting(channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const BottomSheetTitleHeader = tmp(6651).BottomSheetTitleHeader;
    const intl = tmp(1126).intl;
    const tmp7 = <BottomSheetTitleHeader title={intl.string(channel(1126).t.h850Ss)} />;
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function s(flags) {
      const obj = ThreadActionCreatorsDefault;
      const obj2 = { flags };
      return obj.setNotificationSettings(channel, obj2);
    };
    cResult[1] = channel;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult = intl2.string(channel(1126).t.h850Ss);
    const arr = closure_3();
    const mapped = arr.map((setting) => {
      setting = setting.setting;
      const label = setting.label;
      return jsx(channel(dependencyMap[8]).TableRadioRow, { value: setting, label }, "" + setting);
    });
    cResult[3] = stringResult;
    cResult[4] = mapped;
  }
  if (cResult[5] === threadNotificationSetting) {
    let tmp14;
    if (cResult[6] === tmp8) {
      tmp14 = cResult[7];
    }
    return tmp14;
  }
  const ActionSheet = tmp(6708).ActionSheet;
  const tmp15 = <ActionSheet header={first}>{null}</ActionSheet>;
  cResult[5] = threadNotificationSetting;
  cResult[6] = tmp8;
  cResult[7] = tmp15;
  tmp14 = tmp15;
}) : ((channel) => {
  let arr;
  let intl;
  let intl2;
  channel = channel.channel;
  let obj = channel(11082);
  const threadNotificationSetting = obj.useThreadNotificationSetting(channel);
  const ActionSheet = channel(6708).ActionSheet;
  ({ title: intl.string(channel(1126).t.h850Ss) });
  const BottomSheetTitleHeader = channel(6651).BottomSheetTitleHeader;
  intl = channel(1126).intl;
  ({
    hasIcons: false,
    value: threadNotificationSetting,
    onChange(flags) {
      const obj = ThreadActionCreatorsDefault;
      const obj2 = { flags };
      return obj.setNotificationSettings(channel, obj2);
    },
    accessibilityLabel: intl2.string(channel(1126).t.h850Ss),
    children: arr.map((setting) => {
      setting = setting.setting;
      const label = setting.label;
      return jsx(channel(dependencyMap[8]).TableRadioRow, { value: setting, label }, "" + setting);
    })
  });
  const TableRadioGroup = channel(6079).TableRadioGroup;
  intl2 = channel(1126).intl;
  arr = closure_3();
  return <ActionSheet header={null}>{null}</ActionSheet>;
});
const result = size.fileFinishedImporting("modules/threads/native/components/ThreadNotificationSettingsBottomSheet.tsx");

export default tmp2;