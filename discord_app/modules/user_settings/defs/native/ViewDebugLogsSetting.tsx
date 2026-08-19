// === Module 14869: ViewDebugLogsActionSheetRow ===

// Module 14869 (ViewDebugLogsActionSheetRow)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import noop from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import ClockIcon from "ClockIcon" /* 4338 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import _modDef5260 from "module_5260" /* 5260 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 6949 */;
import ActionSheet from "ActionSheet" /* 7175 */;
import ActionSheetRowIcon from "ActionSheetRowIcon" /* 7177 */;
import ChannelNotificationIcon from "ChannelNotificationIcon" /* 10004 */;
import ChannelListMagnifyingGlassIcon from "ChannelListMagnifyingGlassIcon" /* 13069 */;
import WrenchIcon from "WrenchIcon" /* 14870 */;
import jsxProd from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 10669 */;

function ViewDebugLogsActionSheetRow(icon) {
  const title = icon.title;
  ({ screenKey: importDefault, render: dependencyMap } = icon);
  return callback(title(7177).ActionSheetRow, {
    icon: icon.icon,
    label: title,
    onPress() {
      let obj = ACTION_SHEET_HEIGHT_HALFDefault;
      obj.hideActionSheet(ViewDebugLogsActionSheet);
      obj = {
        default() {
          return closure_1_5(closure_1_1(closure_1_2[6]), { title: closure_0, render: closure_2, screenKey: closure_1 });
        }
      };
      _modDef5260.pushLazy(Promise.resolve(obj));
    }
  });
}
const Suspense = noop.Suspense;
const Keyboard = get_ActivityIndicator.Keyboard;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const ViewDebugLogsActionSheet = "ViewDebugLogsActionSheet";
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
    const obj = { default: ViewDebugLogsActionSheet };
    obj.openLazy(Promise.resolve(obj), ViewDebugLogsActionSheet);
  },
  withArrow: true
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/ViewDebugLogsSetting.tsx");

export default pressable;