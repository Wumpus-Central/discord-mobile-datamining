// discord_app/modules/user_settings/defs/native/ViewDebugLogsSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import noop from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import ClockIcon from "../../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ActionSheetRowIcon from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import ChannelListMagnifyingGlassIcon from "../../../../design/components/Icon/native/redesign/generated/ChannelListMagnifyingGlassIcon.tsx";
import WrenchIcon from "../../../../design/components/Icon/native/redesign/generated/WrenchIcon.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

function ViewDebugLogsActionSheetRow(icon) {
  const title = icon.title;
  ({ screenKey: importDefault, render: dependencyMap } = icon);
  return callback(title(6000).ActionSheetRow, {
    icon: icon.icon,
    label: title,
    onPress() {
      let obj = closure_1_1(closure_1_2[3]);
      obj.hideActionSheet(closure_1_7);
      obj = {
        default() {
          return closure_1_5(closure_1_1(closure_1_2[6]), {
            title: closure_0,
            render: closure_2,
            screenKey: closure_1,
          });
        },
      };
      closure_1_1(closure_1_2[5]).pushLazy(Promise.resolve(obj));
    },
  });
}
function ViewDebugLogsActionSheet() {
  let obj = { header: null, children: null };
  obj = { title: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.BUOCPi);
  obj[0] = callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
  obj = { icon: callback(WrenchIcon.WrenchIcon, {}), title: null, screenKey: "debugLogs", render: null };
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.XpPGhL);
  obj[3] = function render() {
    return callback2(callback(15406), {});
  };
  const items = [callback(ViewDebugLogsActionSheetRow, obj), ,];
  obj1 = { icon: callback(ClockIcon.ClockIcon, {}), title: null, screenKey: "startupTiming", render: null };
  const intl3 = getSystemLocale.intl;
  obj1[1] = intl3.string(getSystemLocale.t.b0nJvk);
  obj1[3] = function render() {
    return callback2(closure_3, { children: callback2(callback(15409), {}) });
  };
  items[1] = callback(ViewDebugLogsActionSheetRow, obj1);
  let tmpResult = null;
  if (obj5.isAndroid()) {
    const obj2 = { icon: null, title: null, screenKey: "pushNotificationLogs", render: null };
    obj2[0] = tmp(tmp2(10923).ChannelNotificationIcon, {});
    const intl4 = tmp2(1233).intl;
    obj2[1] = intl4.string(tmp2(1233).t.Ljj0ps);
    obj2[3] = function render() {
      return callback2(callback(15410), {});
    };
    tmpResult = tmp(ViewDebugLogsActionSheetRow, obj2);
  }
  items[2] = tmpResult;
  obj[1] = closure_6(ActionSheetRowIcon.ActionSheetRow.Group, { hasIcons: true, children: items });
  return callback(ActionSheet.ActionSheet, obj);
}
const Suspense = noop.Suspense;
const Keyboard = get_ActivityIndicator.Keyboard;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
ViewDebugLogsActionSheet = "ViewDebugLogsActionSheet";
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.BUOCPi);
  },
  parent: null,
  IconComponent: ChannelListMagnifyingGlassIcon.ChannelListMagnifyingGlassIcon,
  usePredicate: explicitContentFromProto.DeveloperMode.useSetting,
  onPress: function handleViewDebugLogsSettingPress() {
    Keyboard.dismiss();
    let obj = ACTION_SHEET_HEIGHT_HALFDefault;
    obj = { default: ViewDebugLogsActionSheet };
    obj.openLazy(Promise.resolve(obj), ViewDebugLogsActionSheet);
  },
  withArrow: true,
});
let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.BUOCPi);
  },
  parent: null,
  IconComponent: ChannelListMagnifyingGlassIcon.ChannelListMagnifyingGlassIcon,
  usePredicate: explicitContentFromProto.DeveloperMode.useSetting,
  onPress: function handleViewDebugLogsSettingPress() {
    Keyboard.dismiss();
    let obj = ACTION_SHEET_HEIGHT_HALFDefault;
    obj = { default: ViewDebugLogsActionSheet };
    obj.openLazy(Promise.resolve(obj), ViewDebugLogsActionSheet);
  },
  withArrow: true,
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ViewDebugLogsSetting.tsx");

export default pressable;
