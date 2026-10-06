// === Module 15403: ViewDebugLogsSetting ===

// Module 15403 (ViewDebugLogsSetting)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import UserSettings from "UserSettings" /* 2028 */;
import ClockIcon from "ClockIcon" /* 4855 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6651 */;
import ActionSheetRow from "ActionSheetRow" /* 6704 */;
import ActionSheet2 from "ActionSheet" /* 6708 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 10674 */;
import ChannelNotificationIcon from "ChannelNotificationIcon" /* 10710 */;
import ChannelListMagnifyingGlassIcon from "ChannelListMagnifyingGlassIcon" /* 13672 */;
import WrenchIcon from "WrenchIcon" /* 15404 */;
import UserSettingsDebugLogsDefault from "UserSettingsDebugLogs" /* 15406 */;
import UserSettingsStartupTimingsDefault from "UserSettingsStartupTimings" /* 15409 */;
import UserSettingsPushNotificationLogsDefault from "UserSettingsPushNotificationLogs" /* 15410 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const Suspense = react.Suspense;
const Keyboard = react_native.Keyboard;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const ViewDebugLogsActionSheet = "ViewDebugLogsActionSheet";
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((screenKey) => {
  let icon;
  let render;
  let title;
  let obj = title(render[5]);
  const cResult = obj.c(8);
  ({ icon, title } = screenKey);
  screenKey = screenKey.screenKey;
  const tmp2 = render;
  render = screenKey.render;
  if (cResult[0] === render) {
    if (cResult[1] === screenKey) {
      let tmp4;
      if (cResult[2] === title) {
        tmp4 = cResult[3];
      }
      if (cResult[4] === icon) {
        if (cResult[5] === tmp4) {
          let tmp5;
          if (cResult[6] === title) {
            tmp5 = cResult[7];
          }
          return tmp5;
        }
      }
      let obj2 = { icon, label: title, onPress: tmp4 };
      const tmp7 = closure_5(title(tmp2[8]).ActionSheetRow, obj2);
      cResult[4] = icon;
      cResult[5] = tmp4;
      cResult[6] = title;
      cResult[7] = tmp7;
      tmp5 = tmp7;
    }
  }
  const fn = function t() {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(ViewDebugLogsActionSheet);
    const obj2 = ModalActionCreatorsDefault;
    const obj3 = {
      default: () => {
        const obj = { title, render, screenKey };
        return closure_2_5(screenKey(render[7]), obj);
      }
    };
    obj2.pushLazy(Promise.resolve(obj3));
  };
  cResult[0] = render;
  cResult[1] = screenKey;
  cResult[2] = title;
  cResult[3] = fn;
  tmp4 = fn;
}) : ((icon) => {
  const title = icon.title;
  ({ screenKey: importDefault, render: dependencyMap } = icon);
  let obj = {
    icon: icon.icon,
    label: title,
    onPress() {
      let render;
      let screenKey;
      let obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(ViewDebugLogsActionSheet);
      const obj2 = ModalActionCreatorsDefault;
      const obj3 = {
        default: () => {
          const obj = { title, render, screenKey };
          return closure_2_5(ModalStackNavigatorDefault, obj);
        }
      };
      obj2.pushLazy(Promise.resolve(obj3));
    }
  };
  return closure_5(title(6704).ActionSheetRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Group;
  let first;
  let intl;
  let intl4;
  let obj7;
  let tmp12;
  let tmp16;
  let tmp17;
  let tmp21;
  let tmp7;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: intl.string(intl5.t.BUOCPi) };
    const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
    intl = intl5.intl;
    const tmp6 = hasOwnProperty(BottomSheetTitleHeader, obj2);
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = hasOwnProperty(WrenchIcon.WrenchIcon, {});
    const intl2 = intl5.intl;
    const stringResult = intl2.string(intl5.t.XpPGhL);
    cResult[1] = tmp10;
    cResult[2] = stringResult;
    tmp8 = stringResult;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = {
      icon: tmp7,
      title: tmp8,
      screenKey: "debugLogs",
      render() {
          return closure_1_5(UserSettingsDebugLogsDefault, {});
        }
    };
    const tmp15 = hasOwnProperty(closure_8, obj3);
    cResult[3] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp19 = hasOwnProperty(ClockIcon.ClockIcon, {});
    const intl3 = intl5.intl;
    const stringResult1 = intl3.string(intl5.t.b0nJvk);
    cResult[4] = tmp19;
    cResult[5] = stringResult1;
    tmp17 = stringResult1;
    tmp16 = tmp19;
  } else {
    tmp16 = cResult[4];
    tmp17 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { header: first, children: metroRequire(Group, obj7) };
    const ActionSheet = ActionSheet2.ActionSheet;
    const items = [tmp12, , ];
    const obj5 = {
      icon: tmp16,
      title: tmp17,
      screenKey: "startupTiming",
      render() {
          const obj = { children: closure_1_5(UserSettingsStartupTimingsDefault, {}) };
          return closure_1_5(Suspense, obj);
        }
    };
    Group = ActionSheetRow.ActionSheetRow.Group;
    items[1] = hasOwnProperty(closure_8, obj5);
    let tmp22Result = null;
    const tmpResult = PlatformUtils;
    if (tmpResult.isAndroid()) {
      const obj6 = {
        icon: hasOwnProperty(ChannelNotificationIcon.ChannelNotificationIcon, {}),
        title: intl4.string(intl5.t.Ljj0ps),
        screenKey: "pushNotificationLogs",
        render() {
              return closure_1_5(UserSettingsPushNotificationLogsDefault, {});
            }
      };
      intl4 = intl5.intl;
      tmp22Result = hasOwnProperty(closure_8, obj6);
    }
    obj7 = { hasIcons: true, children: items };
    items[2] = tmp22Result;
    const tmp22Result2 = hasOwnProperty(ActionSheet, obj4);
    cResult[6] = tmp22Result2;
    tmp21 = tmp22Result2;
  } else {
    tmp21 = cResult[6];
  }
  return tmp21;
}) : (() => {
  let BottomSheetTitleHeader;
  let Group;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let obj = { header: hasOwnProperty(BottomSheetTitleHeader, obj2), children: metroRequire(Group, { hasIcons: true, children: items }) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { title: intl.string(intl5.t.BUOCPi) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl5.intl;
  const obj3 = {
    icon: hasOwnProperty(WrenchIcon.WrenchIcon, {}),
    title: intl2.string(intl5.t.XpPGhL),
    screenKey: "debugLogs",
    render() {
      return closure_1_5(UserSettingsDebugLogsDefault, {});
    }
  };
  Group = ActionSheetRow.ActionSheetRow.Group;
  intl2 = intl5.intl;
  items = [hasOwnProperty(closure_8, obj3), , ];
  const obj4 = {
    icon: hasOwnProperty(ClockIcon.ClockIcon, {}),
    title: intl3.string(intl5.t.b0nJvk),
    screenKey: "startupTiming",
    render() {
      const obj = { children: closure_1_5(UserSettingsStartupTimingsDefault, {}) };
      return closure_1_5(Suspense, obj);
    }
  };
  intl3 = intl5.intl;
  items[1] = hasOwnProperty(closure_8, obj4);
  let tmpResult = null;
  const obj5 = PlatformUtils;
  if (obj5.isAndroid()) {
    const obj6 = {
      icon: hasOwnProperty(ChannelNotificationIcon.ChannelNotificationIcon, {}),
      title: intl4.string(intl5.t.Ljj0ps),
      screenKey: "pushNotificationLogs",
      render() {
          return closure_1_5(UserSettingsPushNotificationLogsDefault, {});
        }
    };
    intl4 = intl5.intl;
    tmpResult = hasOwnProperty(closure_8, obj6);
  }
  items[2] = tmpResult;
  return hasOwnProperty(ActionSheet, obj);
});
let obj = {
  useTitle() {
    const intl = intl5.intl;
    return intl.string(intl5.t.BUOCPi);
  },
  parent: null,
  IconComponent: ChannelListMagnifyingGlassIcon.ChannelListMagnifyingGlassIcon,
  usePredicate: UserSettings.DeveloperMode.useSetting,
  onPress: function handleViewDebugLogsSettingPress() {
    Keyboard.dismiss();
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { default: closure_9 };
    obj.openLazy(Promise.resolve(obj2), ViewDebugLogsActionSheet);
  },
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ViewDebugLogsSetting.tsx");

export default pressable;