import { initialize } from "../../discord_common/js/packages/flux/index.tsx";
import { KeyCommandsView } from "../modules/keyboard/native/KeyCommandsView.tsx";
import { navigationToRootTabHelper } from "../modules/main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import { PictureInPictureGlobal } from "../modules/video_calls/native/components/PictureInPictureGlobal.tsx";
import { usePipVideoOrStream } from "../modules/video_calls/native/usePipVideoOrStream.tsx";
import { isVoicePanelEnabled } from "../modules/voice_panel/VoicePanelUtils.native.tsx";
// discord_app/components_native/MainShared.tsx
import ActionSheetPresenter from "ActionSheetPresenter";
import { NativeModules } from "BurstReactionAnimationContainerInner";
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import { jsx } from "MuteDeafen";

const require = arg1;
let result = require("ensureGuildLoaded").fileFinishedImporting("components_native/MainShared.tsx");

export const BurstReactionAnimationContainer = require("BurstReactionAnimationContainerInner");
export const MenuContainer = require("MenuContainer");
export const ActionSheetContainer = require("ActionSheetPresenter");
export const Alerts = require("StyleSheet");
export const SoundPlayer = require("MuteDeafen");
export const MainViewTooltipActionSheetsV2 = require("trackActionSheetImpression");
export const ToastContainer = require("AnimatedToast");
export const PictureInPictureGlobalContainer = function PictureInPictureGlobalContainer() {
  let obj = initialize /* initialize */;
  const items = [ensureGuildLoaded, createRTCConnection];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId.getChannelId()));
  const hasPipParticipant = usePipVideoOrStream /* usePipVideoOrStream */.useHasPipParticipant({ isActivityViewFocused: false });
  const obj2 = usePipVideoOrStream /* usePipVideoOrStream */;
  const isModalOpen = navigationToRootTabHelper /* navigationToRootTabHelper */.useIsModalOpen();
  isVoicePanelEnabled /* isVoicePanelEnabled */;
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
          tmp7 = jsx(PictureInPictureGlobal, { channel: null });
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
    obj = { input: "k", modifierFlags: keyModifierCommand, eventName: "keyCommandShowQuickSwitcher", discoverabilityTitle: null, onKeyCommand: null };
    const intl = tmp(tmp2[12]).intl;
    obj[3] = intl.string(callback(table[12]).t.yYsRlD);
    obj[4] = function onKeyCommand() {
      callback(table[13])();
    };
    const items = [obj];
    return items;
  }, []);
  const keyCommands = KeyCommandsView /* KeyCommandsView */.useKeyCommands(memo);
};
export const useScreenReaderEnabled = function useScreenReaderEnabled() {
  const effect = React.useEffect(() => {
    const result = callback(table[15]).checkScreenreaderEnabled();
  }, []);
};