// discord_app/components_native/MainShared.tsx
import initialize from "../../discord_common/js/packages/flux/index.tsx";
import util from "../intl/index.native.tsx";
import PlatformUtils from "../utils/PlatformUtils.tsx";
import NavigationRouteUtils from "../modules/main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import KeyCommands from "../modules/keyboard/native/KeyCommands.tsx";
import usePipVideoOrStream from "../modules/video_calls/native/usePipVideoOrStream.tsx";
import VoicePanelUtils from "../modules/voice_panel/VoicePanelUtils.native.tsx";
import AccessibilityManagerDefault from "../modules/a11y/native/AccessibilityManager.tsx";
import PictureInPictureGlobalDefault from "../modules/video_calls/native/components/PictureInPictureGlobal.tsx";
import BurstReactionAnimationContainerDefault from "../modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx";
import NativeMenuPresenterDefault from "../modules/native_menu/native/NativeMenuPresenter.tsx";
import components_ActionSheetPresenterDefault from "../modules/action_sheet/native/components/ActionSheetPresenter.tsx";
import AlertsDefault from "common/Alerts.tsx";
import SoundPlayerDefault from "../modules/soundplayer/SoundPlayer.tsx";
import MainViewTooltipActionSheetsV2Default from "../modules/upsell_tooltip/native/MainViewTooltipActionSheetsV2.tsx";
import ToastContainerDefault from "../modules/toast/native/ToastContainer.tsx";
import noop from "../../_runtime/metro/00019__.js";
import ChannelStore from "../stores/ChannelStore.tsx";
import RTCConnectionStore from "../stores/RTCConnectionStore.tsx";

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
    const obj2 = {
      input: "k",
      modifierFlags: PlatformUtils.isAndroid()
        ? KeyModifierFlags.keyModifierControl
        : KeyModifierFlags.keyModifierCommand,
      eventName: "keyCommandShowQuickSwitcher",
      discoverabilityTitle: null,
      onKeyCommand: null,
    };
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
