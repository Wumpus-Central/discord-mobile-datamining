// discord_app/components_native/MainShared.tsx
import Fragment from "../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../_runtime/00576_react.js";
import intl2 from "../intl/index.native.tsx";
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
import react from "../../_runtime/00019_react.js";
import ChannelStore from "../stores/ChannelStore.tsx";
import RTCConnectionStore from "../stores/RTCConnectionStore.tsx";
import ReactCompilerGating_mod from "../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let channel;
      let channelId;
      let tmp4;
      let tmp5;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(5);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { isActivityViewFocused: false };
        cResult[2] = obj2;
        tmp9 = obj2;
      } else {
        tmp9 = cResult[2];
      }
      const tmpResult4 = usePipVideoOrStream;
      const hasPipParticipant = tmpResult4.useHasPipParticipant(tmp9);
      const tmpResult5 = NavigationRouteUtils;
      const isModalOpen = tmpResult5.useIsModalOpen();
      VoicePanelUtils;
      let tmp14 = null;
      if (null != stateFromStores) {
        tmp14 = null;
        if (hasPipParticipant) {
          tmp14 = null;
          if (!isModalOpen) {
            tmp14 = null;
            if (!tmp13) {
              let tmp15;
              if (cResult[3] !== stateFromStores) {
                const tmp18 = jsx(PictureInPictureGlobalDefault, { channel: stateFromStores });
                cResult[3] = stateFromStores;
                cResult[4] = tmp18;
                tmp15 = tmp18;
              } else {
                tmp15 = cResult[4];
              }
              tmp14 = tmp15;
            }
          }
        }
      }
      return tmp14;
    }
  : () => {
      let channel;
      let channelId;
      const items = [ChannelStore, RTCConnectionStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId.getChannelId()));
      const obj2 = usePipVideoOrStream;
      const hasPipParticipant = obj2.useHasPipParticipant({ isActivityViewFocused: false });
      const obj3 = NavigationRouteUtils;
      const isModalOpen = obj3.useIsModalOpen();
      VoicePanelUtils;
      let tmp7 = null;
      if (null != stateFromStores) {
        tmp7 = null;
        if (hasPipParticipant) {
          tmp7 = null;
          if (!isModalOpen) {
            tmp7 = null;
            if (!tmp6) {
              tmp7 = jsx(PictureInPictureGlobalDefault, { channel: stateFromStores });
            }
          }
        }
      }
      return tmp7;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = PlatformUtils;
        const isAndroidResult = tmpResult.isAndroid();
        const KeyModifierFlags = KeyCommands.KeyModifierFlags;
        const obj2 = {
          input: "k",
          modifierFlags: isAndroidResult ? KeyModifierFlags.keyModifierControl : KeyModifierFlags.keyModifierCommand,
          eventName: "keyCommandShowQuickSwitcher",
          discoverabilityTitle: intl.string(intl2.t.yYsRlD),
          onKeyCommand() {
            showLaunchPadDefault();
            return true;
          },
        };
        intl = intl2.intl;
        const items = [obj2];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      const tmpResult2 = KeyCommands;
      const keyCommands = tmpResult2.useKeyCommands(first);
    }
  : () => {
      const memo = react.useMemo(() => {
        let intl;
        const obj = PlatformUtils;
        const isAndroidResult = obj.isAndroid();
        const KeyModifierFlags = KeyCommands.KeyModifierFlags;
        const obj2 = {
          input: "k",
          modifierFlags: isAndroidResult ? KeyModifierFlags.keyModifierControl : KeyModifierFlags.keyModifierCommand,
          eventName: "keyCommandShowQuickSwitcher",
          discoverabilityTitle: intl.string(intl2.t.yYsRlD),
          onKeyCommand() {
            closure_1_1(closure_1_2[14])();
            return true;
          },
        };
        intl = intl2.intl;
        const items = [obj2];
        return items;
      }, []);
      let obj = KeyCommands;
      const keyCommands = obj.useKeyCommands(memo);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp2;
      let tmp3;
      let obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          const obj = AccessibilityManagerDefault;
          const result = obj.checkScreenreaderEnabled();
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp2 = fn;
        tmp3 = items;
      } else {
        [tmp2, tmp3] = cResult;
      }
      const effect = react.useEffect(tmp2, tmp3);
    }
  : () => {
      const effect = react.useEffect(() => {
        const obj = AccessibilityManagerDefault;
        const result = obj.checkScreenreaderEnabled();
      }, []);
    };
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
export const useScreenReaderEnabled = tmp4;
