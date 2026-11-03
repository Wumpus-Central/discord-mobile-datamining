// === Module 19161: MainShared ===

// Module 19161 (MainShared)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5321 */;
import KeyCommands from "KeyCommands" /* 6143 */;
import usePipVideoOrStream from "usePipVideoOrStream" /* 11846 */;
import VoicePanelUtils from "VoicePanelUtils" /* 11998 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16410 */;
import PictureInPictureGlobalDefault from "PictureInPictureGlobal" /* 19162 */;
import BurstReactionAnimationContainerDefault from "BurstReactionAnimationContainer" /* 19165 */;
import NativeMenuPresenterDefault from "NativeMenuPresenter" /* 19166 */;
import components_ActionSheetPresenterDefault from "components/ActionSheetPresenter" /* 19167 */;
import AlertsDefault from "Alerts" /* 19168 */;
import SoundPlayerDefault from "SoundPlayer" /* 19176 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19180 */;
import AppToastContainerDefault from "AppToastContainer" /* 19218 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5884 */;

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