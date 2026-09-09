// === Module 16948: MainShared ===

// Module 16948 (MainShared)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4431 */;
import usePipVideoOrStream from "usePipVideoOrStream" /* 9522 */;
import VoicePanelUtils from "VoicePanelUtils" /* 9713 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14462 */;
import KeyCommandsView from "KeyCommandsView" /* 14603 */;
import NativeKeyCommandsModuleDefault from "NativeKeyCommandsModule" /* 14608 */;
import PictureInPictureGlobalDefault from "PictureInPictureGlobal" /* 16949 */;
import BurstReactionAnimationContainerDefault from "BurstReactionAnimationContainer" /* 16952 */;
import NativeMenuPresenterDefault from "NativeMenuPresenter" /* 16953 */;
import components_ActionSheetPresenterDefault from "components/ActionSheetPresenter" /* 16954 */;
import AlertsDefault from "Alerts" /* 16955 */;
import SoundPlayerDefault from "SoundPlayer" /* 16963 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 16964 */;
import ToastContainerDefault from "ToastContainer" /* 16994 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4597 */;

require = fn;
const NativeModules = fn(17).NativeModules;
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
  let obj = initialize;
  const items = [ChannelStore, RTCConnectionStore];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId.getChannelId()));
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
          obj = { channel: stateFromStores };
          tmp7 = jsx(PictureInPictureGlobalDefault, { channel: stateFromStores });
        }
      }
    }
  }
  return tmp7;
};
export const useAppKeyCommands = function useAppKeyCommands() {
  const memo = noop.useMemo(() => {
    let obj = PlatformUtils;
    if (obj.isAndroid()) {
      let keyModifierCommand = NativeKeyCommandsModuleDefault.getConstants().keyModifierCommand;
    } else {
      keyModifierCommand = KeyCommandsView.KeyCommandsView.keyModifierCommand;
    }
    obj = { input: "k", modifierFlags: keyModifierCommand, eventName: "keyCommandShowQuickSwitcher", discoverabilityTitle: null, onKeyCommand: null };
    const intl = util.intl;
    obj.discoverabilityTitle = intl.string(util.t.yYsRlD);
    obj.onKeyCommand = function onKeyCommand() {
      closure_1_1(closure_1_2[13])();
    };
    const items = [obj];
    return items;
  }, []);
  const keyCommands = KeyCommandsView.useKeyCommands(memo);
};
export const useScreenReaderEnabled = function useScreenReaderEnabled() {
  const effect = noop.useEffect(() => {
    const result = AccessibilityManagerDefault.checkScreenreaderEnabled();
  }, []);
};