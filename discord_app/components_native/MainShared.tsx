// === Module 17021: MainShared ===

// Module 17021 (MainShared)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4494 */;
import usePipVideoOrStream from "usePipVideoOrStream" /* 9620 */;
import VoicePanelUtils from "VoicePanelUtils" /* 9811 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14522 */;
import KeyCommands from "KeyCommands" /* 14666 */;
import PictureInPictureGlobalDefault from "PictureInPictureGlobal" /* 17022 */;
import BurstReactionAnimationContainerDefault from "BurstReactionAnimationContainer" /* 17025 */;
import NativeMenuPresenterDefault from "NativeMenuPresenter" /* 17026 */;
import components_ActionSheetPresenterDefault from "components/ActionSheetPresenter" /* 17027 */;
import AlertsDefault from "Alerts" /* 17028 */;
import SoundPlayerDefault from "SoundPlayer" /* 17036 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 17037 */;
import ToastContainerDefault from "ToastContainer" /* 17069 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4659 */;

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
    const obj = { input: "k", modifierFlags: KeyCommands.KeyModifierFlags.keyModifierCommand, eventName: "keyCommandShowQuickSwitcher", discoverabilityTitle: null, onKeyCommand: null };
    const intl = util.intl;
    obj.discoverabilityTitle = intl.string(util.t.yYsRlD);
    obj.onKeyCommand = function onKeyCommand() {
      closure_1_1(dependencyMap[11])();
    };
    const items = [obj];
    return items;
  }, []);
  const keyCommands = KeyCommands.useKeyCommands(memo);
};
export const useScreenReaderEnabled = function useScreenReaderEnabled() {
  const effect = noop.useEffect(() => {
    const result = AccessibilityManagerDefault.checkScreenreaderEnabled();
  }, []);
};