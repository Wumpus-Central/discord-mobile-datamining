// discord_app/modules/user_settings/defs/native/ViewDebugLogsSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import noop from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import ClockIcon from "../../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef5260 from "../../../../actions/ModalActionCreators.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ActionSheetRowIcon from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import ChannelNotificationIcon from "../../../../design/components/Icon/native/redesign/generated/ChannelNotificationIcon.tsx";
import ChannelListMagnifyingGlassIcon from "../../../../design/components/Icon/native/redesign/generated/ChannelListMagnifyingGlassIcon.tsx";
import WrenchIcon from "../../../../design/components/Icon/native/redesign/generated/WrenchIcon.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

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