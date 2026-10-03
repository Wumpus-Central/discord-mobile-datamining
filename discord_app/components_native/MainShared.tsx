// discord_app/components_native/MainShared.tsx
import initialize from "../../discord_common/js/packages/flux/index.tsx";
import c from "../../_runtime/00576_c.js";
import util from "../intl/index.native.tsx";
import PlatformUtils from "../utils/PlatformUtils.tsx";
import NavigationRouteUtils from "../modules/main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import KeyCommands from "../modules/keyboard/native/KeyCommands.tsx";
import usePipVideoOrStream from "../modules/video_calls/native/usePipVideoOrStream.tsx";
import VoicePanelUtils from "../modules/voice_panel/VoicePanelUtils.native.tsx";
import AccessibilityManagerDefault from "../modules/a11y/native/AccessibilityManager.tsx";
import PictureInPictureGlobalDefault from "../modules/video_calls/native/components/PictureInPictureGlobal.tsx";
import showLaunchPadDefault from "../modules/launchpad/native/showLaunchPad.tsx";
import BurstReactionAnimationContainerDefault from "../modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx";
import NativeMenuPresenterDefault from "../modules/native_menu/native/NativeMenuPresenter.tsx";
import components_ActionSheetPresenterDefault from "../modules/action_sheet/native/components/ActionSheetPresenter.tsx";
import AlertsDefault from "common/Alerts.tsx";
import SoundPlayerDefault from "../modules/soundplayer/SoundPlayer.tsx";
import MainViewTooltipActionSheetsV2Default from "../modules/upsell_tooltip/native/MainViewTooltipActionSheetsV2.tsx";
import AppToastContainerDefault from "../modules/toast/native/AppToastContainer.tsx";
import noop from "../../_runtime/metro/00019__.js";
import ChannelStore from "../stores/ChannelStore.tsx";
import RTCConnectionStore from "../stores/RTCConnectionStore.tsx";

require = fn;
const jsx = fn(21).jsx;
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp2 = dependencyMap;
      const cResult = c.c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore, RTCConnectionStore];
        const fn = function l() {
          return channel.getChannel(channelId.getChannelId());
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { isActivityViewFocused: false };
        cResult[2] = obj2;
        let tmp9 = obj2;
      } else {
        tmp9 = cResult[2];
      }
      const tmpResult = initialize;
      const hasPipParticipant = usePipVideoOrStream.useHasPipParticipant(tmp9);
      const tmpResult4 = usePipVideoOrStream;
      const isModalOpen = NavigationRouteUtils.useIsModalOpen();
      VoicePanelUtils;
      let tmp14 = null;
      if (null != stateFromStores) {
        tmp14 = null;
        if (hasPipParticipant) {
          tmp14 = null;
          if (!isModalOpen) {
            tmp14 = null;
            if (!tmp13) {
              if (cResult[3] !== stateFromStores) {
                const obj3 = { channel: stateFromStores };
                tmp2 = jsx(PictureInPictureGlobalDefault, { channel: stateFromStores });
                cResult[3] = stateFromStores;
                cResult[4] = tmp2;
              }
            }
          }
        }
      }
      return tmp14;
    }
  : () => {
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
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = PlatformUtils;
        const isAndroidResult = PlatformUtils.isAndroid();
        const KeyModifierFlags = {
          input: "k",
          modifierFlags: null,
          eventName: "keyCommandShowQuickSwitcher",
          discoverabilityTitle: null,
          onKeyCommand: null,
        };
        KeyModifierFlags.modifierFlags = PlatformUtils.isAndroid()
          ? KeyModifierFlags.keyModifierControl
          : KeyModifierFlags.keyModifierCommand;
        const intl = util.intl;
        KeyModifierFlags.discoverabilityTitle = intl.string(util.t.yYsRlD);
        KeyModifierFlags.onKeyCommand = function onKeyCommand() {
          showLaunchPadDefault();
          return true;
        };
        const items = [KeyModifierFlags];
        cResult[0] = items;
        const tmp5 = PlatformUtils.isAndroid()
          ? KeyModifierFlags.keyModifierControl
          : KeyModifierFlags.keyModifierCommand;
      } else {
        const keyCommands = KeyCommands.useKeyCommands(cResult[0]);
        const tmpResult2 = KeyCommands;
      }
    }
  : () => {
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
          closure_1_1(dependencyMap[14])();
          return true;
        };
        const items = [obj2];
        return items;
      }, []);
      const keyCommands = KeyCommands.useKeyCommands(memo);
    };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/MainShared.tsx");

export const BurstReactionAnimationContainer = BurstReactionAnimationContainerDefault;
export const MenuContainer = NativeMenuPresenterDefault;
export const ActionSheetContainer = components_ActionSheetPresenterDefault;
export const Alerts = AlertsDefault;
export const SoundPlayer = SoundPlayerDefault;
export const MainViewTooltipActionSheetsV2 = MainViewTooltipActionSheetsV2Default;
export const ToastContainer = AppToastContainerDefault;
export const PictureInPictureGlobalContainer = tmp2;
export const useAppKeyCommands = tmp3;
export const useScreenReaderEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          const result = AccessibilityManagerDefault.checkScreenreaderEnabled();
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp2 = fn;
        tmp3 = items;
      } else {
        [tmp2, tmp3] = cResult;
      }
      const effect = noop.useEffect(tmp2, tmp3);
    }
  : () => {
      const effect = noop.useEffect(() => {
        const result = AccessibilityManagerDefault.checkScreenreaderEnabled();
      }, []);
    };
