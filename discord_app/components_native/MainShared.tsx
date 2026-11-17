// === Module 19828: MainShared ===

// Module 19828 (MainShared)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5486 */;
import KeyCommands from "KeyCommands" /* 6331 */;
import usePipVideoOrStream from "usePipVideoOrStream" /* 11329 */;
import VoicePanelUtils from "VoicePanelUtils" /* 11532 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16921 */;
import PictureInPictureGlobalDefault from "PictureInPictureGlobal" /* 19829 */;
import BurstReactionAnimationContainerDefault from "BurstReactionAnimationContainer" /* 19832 */;
import NativeMenuPresenterDefault from "NativeMenuPresenter" /* 19833 */;
import components_ActionSheetPresenterDefault from "components/ActionSheetPresenter" /* 19834 */;
import AlertsDefault from "Alerts" /* 19835 */;
import SoundPlayerDefault from "SoundPlayer" /* 19843 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19847 */;
import AppToastContainerDefault from "AppToastContainer" /* 19901 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 5159 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6068 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("components_native/MainShared.tsx");

export const BurstReactionAnimationContainer = BurstReactionAnimationContainerDefault;
export const MenuContainer = NativeMenuPresenterDefault;
export const ActionSheetContainer = components_ActionSheetPresenterDefault;
export const Alerts = AlertsDefault;
export const SoundPlayer = SoundPlayerDefault;
export const MainViewTooltipActionSheetsV2 = MainViewTooltipActionSheetsV2Default;
export const ToastContainer = AppToastContainerDefault;
export function PictureInPictureGlobalContainer() {
  items = [ChannelStore, RTCConnectionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => channel.getChannel(channelId.getChannelId()));
  const hasPipParticipant = usePipVideoOrStream.useHasPipParticipant({ isActivityViewFocused: false });
  const isModalOpen = NavigationRouteUtils.useIsModalOpen();
  VoicePanelUtils;
  let tmp7 = null;
  if (null != stateFromStores) {
    tmp7 = null;
    if (hasPipParticipant) {
      tmp7 = null;
      if (!isModalOpen) {
        tmp7 = null;
        if (!tmp6) {
          const obj4 = { channel: stateFromStores };
          tmp7 = jsx(PictureInPictureGlobalDefault, { channel: stateFromStores });
        }
      }
    }
  }
  return tmp7;
}
export function useAppKeyCommands() {
  const memo = noop.useMemo(() => {
    const KeyModifierFlags = KeyCommands.KeyModifierFlags;
    const obj2 = { input: "k", modifierFlags: PlatformUtils.isAndroid() ? KeyModifierFlags.keyModifierControl : KeyModifierFlags.keyModifierCommand, eventName: "keyCommandShowQuickSwitcher", discoverabilityTitle: null, onKeyCommand: null };
    const intl = util.intl;
    obj2.discoverabilityTitle = intl.string(util.t.yYsRlD);
    obj2.onKeyCommand = function onKeyCommand() {
      closure_1_1(dependencyMap[12])();
      return true;
    };
    items = [obj2];
    return items;
  }, []);
  const keyCommands = KeyCommands.useKeyCommands(memo);
}
export function useScreenReaderEnabled() {
  const effect = noop.useEffect(() => {
    const result = AccessibilityManagerDefault.checkScreenreaderEnabled();
  }, []);
}