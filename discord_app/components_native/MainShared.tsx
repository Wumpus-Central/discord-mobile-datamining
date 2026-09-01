// discord_app/components_native/MainShared.tsx
import initialize from "../../discord_common/js/packages/flux/index.tsx";
import coerceMainRoute from "../modules/main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import usePipVideoOrStream from "../modules/video_calls/native/usePipVideoOrStream.tsx";
import isVoicePanelEnabled from "../modules/voice_panel/VoicePanelUtils.native.tsx";
import KeyCommandsView from "../modules/keyboard/native/KeyCommandsView.tsx";
import PictureInPictureGlobalDefault from "../modules/video_calls/native/components/PictureInPictureGlobal.tsx";
import BurstReactionAnimationContainerInnerDefault from "../modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx";
import MenuContainerDefault from "../modules/native_menu/native/NativeMenuPresenter.tsx";
import ActionSheetPresenterDefault from "../modules/action_sheet/native/components/ActionSheetPresenter.tsx";
import StyleSheetDefault from "common/Alerts.tsx";
import MuteDeafenDefault from "../modules/soundplayer/SoundPlayer.tsx";
import trackActionSheetImpressionDefault from "../modules/upsell_tooltip/native/MainViewTooltipActionSheetsV2.tsx";
import AnimatedToastDefault from "../modules/toast/native/ToastContainer.tsx";
import closure_3 from "../../_runtime/00019_noop.js";
import { NativeModules } from "../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../stores/ChannelStore.tsx";
import closure_6 from "../stores/RTCConnectionStore.tsx";
import { jsx } from "../../_runtime/react/00021_jsxProd.js";

require = arg1;
let result = require("set").fileFinishedImporting("components_native/MainShared.tsx");

export const BurstReactionAnimationContainer = BurstReactionAnimationContainerInnerDefault;
export const MenuContainer = MenuContainerDefault;
export const ActionSheetContainer = ActionSheetPresenterDefault;
export const Alerts = StyleSheetDefault;
export const SoundPlayer = MuteDeafenDefault;
export const MainViewTooltipActionSheetsV2 = trackActionSheetImpressionDefault;
export const ToastContainer = AnimatedToastDefault;
export const PictureInPictureGlobalContainer = function PictureInPictureGlobalContainer() {
  let obj = initialize;
  const items = [closure_5, closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId.getChannelId()));
  const hasPipParticipant = usePipVideoOrStream.useHasPipParticipant({ isActivityViewFocused: false });
  const obj2 = usePipVideoOrStream;
  const isModalOpen = coerceMainRoute.useIsModalOpen();
  isVoicePanelEnabled;
  let tmp7 = null;
  if (null != stateFromStores) {
    tmp7 = null;
    if (hasPipParticipant) {
      tmp7 = null;
      if (!isModalOpen) {
        tmp7 = null;
        if (!tmp6) {
          obj = { channel: null };
          obj[0] = stateFromStores;
          tmp7 = jsx(PictureInPictureGlobalDefault, { channel: null });
        }
      }
    }
  }
  return tmp7;
};
export const useAppKeyCommands = function useAppKeyCommands() {
  const memo = React.useMemo(() => {
    let obj = callback(table[10]);
    if (obj.isAndroid()) {
      let keyModifierCommand = callback2(tmp2[11]).getConstants().keyModifierCommand;
      const obj2 = callback2(tmp2[11]);
    } else {
      keyModifierCommand = KeyCommandsView.KeyCommandsView.keyModifierCommand;
    }
    obj = {
      input: "k",
      modifierFlags: keyModifierCommand,
      eventName: "keyCommandShowQuickSwitcher",
      discoverabilityTitle: null,
      onKeyCommand: null,
    };
    const intl = tmp(tmp2[12]).intl;
    obj[3] = intl.string(callback(table[12]).t.yYsRlD);
    obj[4] = function onKeyCommand() {
      callback(table[13])();
    };
    const items = [obj];
    return items;
  }, []);
  const keyCommands = KeyCommandsView.useKeyCommands(memo);
};
export const useScreenReaderEnabled = function useScreenReaderEnabled() {
  const effect = React.useEffect(() => {
    const result = callback(table[15]).checkScreenreaderEnabled();
  }, []);
};
