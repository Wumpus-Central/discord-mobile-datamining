// === Module 17289: MainShared ===

// Module 17289 (MainShared)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4579 */;
import KeyCommands from "KeyCommands" /* 5140 */;
import usePipVideoOrStream from "usePipVideoOrStream" /* 9728 */;
import VoicePanelUtils from "VoicePanelUtils" /* 9926 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14653 */;
import PictureInPictureGlobalDefault from "PictureInPictureGlobal" /* 17290 */;
import BurstReactionAnimationContainerDefault from "BurstReactionAnimationContainer" /* 17293 */;
import NativeMenuPresenterDefault from "NativeMenuPresenter" /* 17294 */;
import components_ActionSheetPresenterDefault from "components/ActionSheetPresenter" /* 17295 */;
import AlertsDefault from "Alerts" /* 17296 */;
import SoundPlayerDefault from "SoundPlayer" /* 17304 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 17305 */;
import ToastContainerDefault from "ToastContainer" /* 17335 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4745 */;

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
export const ToastContainer = ToastContainerDefault;
export const PictureInPictureGlobalContainer = function PictureInPictureGlobalContainer() {
  const items = [ChannelStore, RTCConnectionStore];
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
};
export const useAppKeyCommands = function useAppKeyCommands() {
  const memo = noop.useMemo(() => {
    const KeyModifierFlags = KeyCommands.KeyModifierFlags;
    const obj2 = { input: "k", modifierFlags: PlatformUtils.isAndroid() ? KeyModifierFlags.keyModifierControl : KeyModifierFlags.keyModifierCommand, eventName: "keyCommandShowQuickSwitcher", discoverabilityTitle: null, onKeyCommand: null };
    const intl = util.intl;
    obj2.discoverabilityTitle = intl.string(util.t.yYsRlD);
    obj2.onKeyCommand = function onKeyCommand() {
      closure_1_1(dependencyMap[12])();
      return true;
    };
    const items = [obj2];
    return items;
  }, []);
  const keyCommands = KeyCommands.useKeyCommands(memo);
};
export const useScreenReaderEnabled = function useScreenReaderEnabled() {
  const effect = noop.useEffect(() => {
    const result = AccessibilityManagerDefault.checkScreenreaderEnabled();
  }, []);
};