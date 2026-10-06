// discord_app/modules/stage_channels/native/components/StageActionBarButtons.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import StageChannelsConstants from "../../StageChannelsConstants.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import StageChannelModalActionCreators from "../../StageChannelModalActionCreators.tsx";
import StageChannelActionCreatorExtras from "../../StageChannelActionCreatorExtras.native.tsx";
import StageChannelActionCreators from "../../StageChannelActionCreators.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import CallBarActionAll from "../../../video_calls/native/components/CallBarAction.tsx";
import AssetRegistryDefault from "../../../../../_runtime/09328_AssetRegistry.js";
import CallsUtils from "../../../voice_calls/native/CallsUtils.tsx";
import AssetRegistryDefault2 from "../../../../../_runtime/09573_AssetRegistry.js";
import StageMusicActionCreators from "../../StageMusicActionCreators.tsx";
import shouldShowEndStageModalDefault from "../../shouldShowEndStageModal.tsx";
import AssetRegistryDefault3 from "../../../../../_runtime/09588_AssetRegistry.js";
import AssetRegistryDefault4 from "../../../../../_runtime/09615_AssetRegistry.js";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import StageMusicStore from "../../StageMusicStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
let _require, importAll, onClose, onContinue;

let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj7;
let obj8;
let size;
let size1;
let _slicedToArray = _slicedToArray_mod;
let View = react_native.View;
let closure_10 = StageChannelsConstants.REQUEST_TO_SPEAK_SHEET_KEY;
const NOOP = Constants.NOOP;
({ jsx: closure_12, jsxs: map1 } = Fragment);
const AgeVerificationSpeakerActionSheet = "AgeVerificationSpeakerActionSheet";
let createStyles = createStyles_mod;
let obj = {
  actionBarCTAContainer: { position: "relative" },
  imageStyle: obj2,
  iconStyle: size,
  iconContainerStyle: obj3,
  promptIconStyle: size1,
  continueContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 16 },
  continueText: obj4,
  continueIcon: obj5,
};
obj2 = { tintColor: nativeDefault.colors.WHITE };
createStyles = createStyles.createStyles;
size = { tintColor: nativeDefault.colors.WHITE, width: 20, height: 20 };
obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, borderRadius: nativeDefault.radii.lg, padding: 4 };
size1 = {
  tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT,
  width: nativeDefault.space.PX_24,
  height: nativeDefault.space.PX_24,
};
obj4 = { color: nativeDefault.unsafe_rawColors.BLUE_345, fontSize: 14, lineHeight: 18 };
obj5 = { tintColor: nativeDefault.unsafe_rawColors.BLUE_345 };
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let tmp6;
      let obj = channel(576);
      const cResult = obj.c(6);
      channel = channel.channel;
      const isSmallSize = channel.isSmallSize;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(channel(1126).t.ezLpY6);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function o() {
          const obj = StageChannelActionCreators;
          const result = obj.audienceAckRequestToSpeak(channel, true);
        };
        cResult[1] = channel;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === isSmallSize) {
        let tmp7;
        if (cResult[4] === tmp6) {
          tmp7 = cResult[5];
        }
        return tmp7;
      }
      const obj2 = { accessibilityLabel: first, source: AssetRegistryDefault2, onPress: tmp6, isSmallSize };
      const ActionButton = CallBarActionAll.ActionButton;
      const tmp8 = closure_12(ActionButton, obj2);
      cResult[3] = isSmallSize;
      cResult[4] = tmp6;
      cResult[5] = tmp8;
      tmp7 = tmp8;
    }
  : (channel) => {
      let intl;
      channel = channel.channel;
      const isSmallSize = channel.isSmallSize;
      let obj = {
        accessibilityLabel: intl.string(channel(1126).t.ezLpY6),
        source: AssetRegistryDefault2,
        onPress() {
          const obj = StageChannelActionCreators;
          const result = obj.audienceAckRequestToSpeak(channel, true);
        },
        isSmallSize,
      };
      const ActionButton = CallBarActionAll.ActionButton;
      intl = channel(1126).intl;
      return closure_12(ActionButton, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isSmallSize) => {
      let muted;
      let stateFromStores;
      let tmp5;
      let tmp6;
      let obj = stateFromStores(576);
      const cResult = obj.c(13);
      isSmallSize = isSmallSize.isSmallSize;
      const channel = isSmallSize.channel;
      const tmp4 = closure_15();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StageMusicStore];
        const fn = function o() {
          return muted.isMuted();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = stateFromStores(504);
      stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      const tmpResult2 = stateFromStores(9574);
      if (tmpResult2.useShowStageMusicMuteButton(channel.id)) {
        let tmp10;
        let MusicIcon;
        let tmp13;
        if (cResult[2] !== stateFromStores) {
          let stringResult;
          const intl = tmp(1126).intl;
          const string = intl.string;
          const t = tmp(1126).t;
          if (stateFromStores) {
            stringResult = string(t.ScHlfl);
          } else {
            stringResult = string(t.zqxfrf);
          }
          cResult[2] = stateFromStores;
          cResult[3] = stringResult;
          tmp10 = stringResult;
        } else {
          tmp10 = cResult[3];
        }
        const tmp12 = importDefault(stateFromStores ? 9580 : 9581);
        if (stateFromStores) {
          MusicIcon = tmp(9582).MusicSlashIcon;
        } else {
          MusicIcon = tmp(9584).MusicIcon;
        }
        if (cResult[4] !== stateFromStores) {
          const fn2 = function y() {
            const obj = StageMusicActionCreators;
            return obj.updateStageMusicMuted(!stateFromStores);
          };
          cResult[4] = stateFromStores;
          cResult[5] = fn2;
          tmp13 = fn2;
        } else {
          tmp13 = cResult[5];
        }
        if (cResult[6] === isSmallSize) {
          if (cResult[7] === tmp4.imageStyle) {
            if (cResult[8] === tmp10) {
              if (cResult[9] === tmp12) {
                if (cResult[10] === MusicIcon) {
                  let tmp14;
                  if (cResult[11] === tmp13) {
                    tmp14 = cResult[12];
                  }
                  return tmp14;
                }
              }
            }
          }
        }
        const obj2 = {
          accessibilityLabel: tmp10,
          source: tmp12,
          IconComponent: MusicIcon,
          imageStyle: tmp4.imageStyle,
          onPress: tmp13,
          isSmallSize,
        };
        const tmp17 = closure_12(CallBarActionAll.ActionButton, obj2);
        cResult[6] = isSmallSize;
        cResult[7] = tmp4.imageStyle;
        cResult[8] = tmp10;
        cResult[9] = tmp12;
        cResult[10] = MusicIcon;
        cResult[11] = tmp13;
        cResult[12] = tmp17;
        tmp14 = tmp17;
      } else {
        return null;
      }
    }
  : (arg0) => {
      let MusicIcon;
      let channel;
      let isSmallSize;
      let muted;
      let stateFromStores;
      ({ channel, isSmallSize } = arg0);
      const tmp = closure_15();
      let obj = stateFromStores(504);
      const items = [StageMusicStore];
      stateFromStores = obj.useStateFromStores(items, () => muted.isMuted());
      let tmp6Result = null;
      const obj2 = stateFromStores(9574);
      if (obj2.useShowStageMusicMuteButton(channel.id)) {
        let stringResult;
        const ActionButton = CallBarActionAll.ActionButton;
        const intl = tmp2(1126).intl;
        const string = intl.string;
        const t = tmp2(1126).t;
        if (stateFromStores) {
          stringResult = string(t.ScHlfl);
        } else {
          stringResult = string(t.zqxfrf);
        }
        const obj3 = {
          accessibilityLabel: stringResult,
          source: importDefault(stateFromStores ? 9580 : 9581),
          IconComponent: MusicIcon,
          imageStyle: tmp.imageStyle,
          onPress() {
            const obj = StageMusicActionCreators;
            return obj.updateStageMusicMuted(!stateFromStores);
          },
          isSmallSize,
        };
        if (stateFromStores) {
          MusicIcon = tmp2(9582).MusicSlashIcon;
        } else {
          MusicIcon = tmp2(9584).MusicIcon;
        }
        tmp6Result = closure_12(ActionButton, obj3);
      }
      return tmp6Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let tmp4;
      let tmp5;
      const obj = channel(576);
      const cResult = obj.c(6);
      channel = channel.channel;
      const isSmallSize = channel.isSmallSize;
      if (cResult[0] !== channel) {
        const fn = function n() {
          if (shouldShowEndStageModalDefault(channel)) {
            const tmp3Result = StageChannelActionCreatorExtras;
            tmp3Result.openEndStageModal(channel);
          } else {
            const tmp3Result2 = CallsUtils;
            tmp3Result2.handleDisconnect(channel);
          }
        };
        cResult[0] = channel;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(channel(1126).t.SMKyih);
        cResult[2] = stringResult;
        tmp5 = stringResult;
      } else {
        tmp5 = cResult[2];
      }
      if (cResult[3] === tmp4) {
        let tmp7;
        if (cResult[4] === isSmallSize) {
          tmp7 = cResult[5];
        }
        return tmp7;
      }
      const obj2 = {
        accessibilityLabel: tmp5,
        source: AssetRegistryDefault3,
        IconComponent: channel(9589).DoorExitIcon,
        onPress: tmp4,
        isSmallSize,
      };
      const PrimaryActionButton = CallBarActionAll.PrimaryActionButton;
      const tmp8 = closure_12(PrimaryActionButton, obj2);
      cResult[3] = tmp4;
      cResult[4] = isSmallSize;
      cResult[5] = tmp8;
      tmp7 = tmp8;
    }
  : (channel) => {
      let intl;
      channel = channel.channel;
      const isSmallSize = channel.isSmallSize;
      const obj = {
        accessibilityLabel: intl.string(channel(1126).t.SMKyih),
        source: AssetRegistryDefault3,
        IconComponent: channel(9589).DoorExitIcon,
        onPress() {
          if (shouldShowEndStageModalDefault(channel)) {
            const tmp3Result = StageChannelActionCreatorExtras;
            tmp3Result.openEndStageModal(channel);
          } else {
            const tmp3Result2 = CallsUtils;
            tmp3Result2.handleDisconnect(channel);
          }
        },
        isSmallSize,
      };
      const PrimaryActionButton = CallBarActionAll.PrimaryActionButton;
      intl = channel(1126).intl;
      return closure_12(PrimaryActionButton, obj);
    };
createStyles = createStyles_mod;
let obj6 = { container: obj7, header: { alignItems: "center" }, title: { textAlign: "center" }, footer: obj8 };
obj7 = { paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_24 };
const createStyles2 = createStyles.createStyles;
obj8 = { gap: nativeDefault.space.PX_12 };
let closure_16 = createStyles2(obj6);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onClose) => {
      let container;
      let items;
      let obj3;
      let title;
      let tmp14;
      let tmp18;
      let tmp22;
      let tmp5;
      let tmp9;
      let obj = onClose(576);
      const cResult = obj.c(31);
      onClose = onClose.onClose;
      const tmp4 = closure_16();
      const bottom = useSafeAreaInsetsDefault().bottom;
      if (cResult[0] !== onClose) {
        const fn = function n() {
          const obj = AgeVerificationActionCreatorsDefault;
          const obj2 = {
            entryPoint:
              AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT,
          };
          const result = obj.showAgeVerificationGetStartedModal(obj2);
          onClose();
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet();
        };
        cResult[0] = onClose;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== onClose) {
        class S {
          constructor() {
            onClose();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
        cResult[2] = onClose;
        cResult[3] = S;
      } else {
        class S {
          constructor() {
            onClose();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
      }
      if (cResult[4] !== bottom) {
        class S {
          constructor() {
            onClose();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
        tmp8[0] = bottom;
        cResult[4] = bottom;
        cResult[5] = tmp8;
      } else {
        class S {
          constructor() {
            onClose();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            onClose();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
        const tmp10 = closure_12(onClose(6085).TrafficConeSpotIllustration, { width: 120, height: 120 });
        cResult[6] = tmp10;
        tmp9 = tmp10;
      } else {
        class S {
          constructor() {
            onClose();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
      }
      if (cResult[7] !== tmp4.header) {
        class S {
          constructor() {
            onClose();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
        let obj2 = { style: tmp4.header, children: tmp9 };
        cResult[7] = tmp4.header;
        cResult[8] = closure_12(View, obj2);
        const tmp13 = closure_12(View, obj2);
      } else {
        class S {
          constructor() {
            onClose();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
      }
      ({ container, title } = tmp4);
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            onClose();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
        const stringResult = obj3.string(onClose(1126).t.zvubnM);
        cResult[9] = stringResult;
        tmp14 = stringResult;
      } else {
        class S {
          constructor() {
            onClose();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
      }
      if (cResult[10] !== tmp4.title) {
        class S {
          constructor() {
            onClose();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
        const obj4 = {
          variant: "heading-lg/bold",
          color: "mobile-text-heading-primary",
          style: title,
          children: tmp14,
        };
        cResult[10] = tmp4.title;
        cResult[11] = closure_12(onClose(4892).Text, obj4);
        const tmp17 = closure_12(onClose(4892).Text, obj4);
      } else {
        class S {
          constructor() {
            onClose();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
      }
      const footer = tmp4.footer;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            onClose();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
        const stringResult1 = obj5.string(onClose(1126).t.KXVgjt);
        cResult[12] = stringResult1;
        tmp18 = stringResult1;
      } else {
        class S {
          constructor() {
            onClose();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
      }
      if (cResult[13] !== tmp5) {
        class S {
          constructor() {
            onClose();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
        const obj6 = { size: "lg", onPress: tmp5, text: tmp18 };
        cResult[13] = tmp5;
        cResult[14] = closure_12(onClose(5601).Button, obj6);
        const tmp21 = closure_12(onClose(5601).Button, obj6);
      } else {
        class S {
          constructor() {
            onClose();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            onClose();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
        const stringResult2 = obj7.string(onClose(1126).t.WAI6xu);
        cResult[15] = stringResult2;
        tmp22 = stringResult2;
      } else {
        class S {
          constructor() {
            onClose();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
      }
      if (cResult[16] !== S) {
        class S {
          constructor() {
            onClose();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
        const obj8 = { size: "lg", onPress: S, text: tmp22, variant: "secondary" };
        cResult[16] = S;
        cResult[17] = closure_12(onClose(5601).Button, obj8);
        const tmp25 = closure_12(onClose(5601).Button, obj8);
      } else {
        class S {
          constructor() {
            onClose();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
      }
      if (cResult[18] === tmp4.footer) {
        class S {
          constructor() {
            onClose();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          }
        }
      }
      const obj9 = { style: footer, children: items };
      items = [tmp20, tmp24];
      cResult[18] = tmp4.footer;
      cResult[19] = tmp20;
      cResult[20] = tmp24;
      cResult[21] = closure_13(View, obj9);
      closure_13(View, obj9);
    }
  : (onClose) => {
      let intl;
      let intl2;
      let intl3;
      let items;
      let items1;
      let obj2;
      let obj3;
      onClose = onClose.onClose;
      function handleDismiss() {
        onClose();
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      }
      const tmp = closure_16();
      let obj = {
        startExpanded: true,
        onDismiss: handleDismiss,
        contentStyles: { paddingBottom: useSafeAreaInsetsDefault().bottom },
        header: closure_12(View, obj2),
        children: closure_13(View, obj3),
      };
      obj2 = {
        style: tmp.header,
        children: closure_12(onClose(6085).TrafficConeSpotIllustration, { width: 120, height: 120 }),
      };
      const ActionSheet = onClose(6708).ActionSheet;
      obj3 = { style: tmp.container, children: items };
      const obj4 = {
        variant: "heading-lg/bold",
        color: "mobile-text-heading-primary",
        style: tmp.title,
        children: intl.string(onClose(1126).t.zvubnM),
      };
      const Text = onClose(4892).Text;
      intl = onClose(1126).intl;
      items = [closure_12(Text, obj4)];
      const obj5 = { style: tmp.footer, children: items1 };
      const obj6 = {
        size: "lg",
        onPress() {
          const obj = AgeVerificationActionCreatorsDefault;
          const obj2 = {
            entryPoint:
              AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT,
          };
          const result = obj.showAgeVerificationGetStartedModal(obj2);
          onClose();
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet();
        },
        text: intl2.string(onClose(1126).t.KXVgjt),
      };
      const Button = onClose(5601).Button;
      intl2 = onClose(1126).intl;
      items1 = [closure_12(Button, obj6)];
      const obj7 = {
        size: "lg",
        onPress: handleDismiss,
        text: intl3.string(onClose(1126).t.WAI6xu),
        variant: "secondary",
      };
      const Button2 = onClose(5601).Button;
      intl3 = onClose(1126).intl;
      items1[1] = closure_12(Button2, obj7);
      items[1] = closure_13(View, obj5);
      return closure_12(ActionSheet, obj);
    };
let closure_17 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channel;
      let closure_0;
      let closure_2;
      let first;
      let isSmallSize;
      let require;
      let shouldAgeVerifyToSpeakForCurrentUser;
      let shouldShowAgeVerificationPopover;
      let tmp6;
      let tmp7;
      let tmp = require;
      let obj = require("react");
      const cResult = obj.c(17);
      ({ channel, isSmallSize } = arg0);
      const tmp5 = shouldShowAgeVerificationPopover(first(shouldAgeVerifyToSpeakForCurrentUser[44])(channel), 2);
      [tmp6, tmp7] = tmp5;
      require = tmp7;
      let obj2 = require("useLocalStorageState");
      const tmp8 = shouldShowAgeVerificationPopover(
        obj2.useLocalStorageState("age-verification-stage-popover-dismissed", false),
        2,
      );
      const tmp4 = first;
      first = tmp8[0];
      importAll = tmp10;
      const obj3 = require("useStageSpeakingForCurrentUser");
      shouldAgeVerifyToSpeakForCurrentUser = obj3.useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
      const obj4 = require("useStageSpeakingForCurrentUser");
      shouldShowAgeVerificationPopover = obj4.useShouldShowAgeVerificationPopover(channel.id);
      if (cResult[0] === first) {
        if (cResult[1] === tmp8[1]) {
          let tmp13;
          let tmp14;
          if (cResult[2] === shouldShowAgeVerificationPopover) {
            tmp13 = cResult[3];
            tmp14 = cResult[4];
          }
          const effect = react.useEffect(tmp13, tmp14);
          if (cResult[5] === tmp7) {
            let tmp17;
            let tmp20;
            let HandRequestSpeakIcon;
            if (cResult[6] === shouldAgeVerifyToSpeakForCurrentUser) {
              tmp17 = cResult[7];
            }
            const tmpResult = tmp(shouldAgeVerifyToSpeakForCurrentUser[47]);
            const canRaiseHand = tmpResult.useCanRaiseHand(channel);
            if (cResult[8] !== tmp6) {
              let stringResult;
              const intl = tmp(tmp2[13]).intl;
              const string = intl.string;
              const t = tmp(tmp2[13]).t;
              if (tmp6) {
                stringResult = string(t.GCimTk);
              } else {
                stringResult = string(t.hLbG5N);
              }
              cResult[8] = tmp6;
              cResult[9] = stringResult;
              tmp20 = stringResult;
            } else {
              tmp20 = cResult[9];
            }
            if (shouldAgeVerifyToSpeakForCurrentUser) {
              HandRequestSpeakIcon = tmp(tmp2[48]).HandRequestDenyIcon;
            } else {
              HandRequestSpeakIcon = tmp(tmp2[49]).HandRequestSpeakIcon;
            }
            if (!canRaiseHand && !tmp6) {
              tmp17 = NOOP;
            }
            if (cResult[10] === (!canRaiseHand && !tmp6)) {
              if (cResult[11] === tmp6) {
                if (cResult[12] === isSmallSize) {
                  if (cResult[13] === tmp20) {
                    if (cResult[14] === HandRequestSpeakIcon) {
                      let tmp22;
                      if (cResult[15] === tmp17) {
                        tmp22 = cResult[16];
                      }
                      return tmp22;
                    }
                  }
                }
              }
            }
            const obj5 = {
              accessibilityLabel: tmp20,
              isActive: tmp6,
              source: tmp4(shouldAgeVerifyToSpeakForCurrentUser[50]),
              IconComponent: HandRequestSpeakIcon,
              onPress: tmp17,
              appearsDisabled: !canRaiseHand && !tmp6,
              isSmallSize,
            };
            const ToggledActionButton = require("CallBarAction").ToggledActionButton;
            const tmp25 = closure_12(ToggledActionButton, obj5);
            cResult[10] = !canRaiseHand && !tmp6;
            cResult[11] = tmp6;
            cResult[12] = isSmallSize;
            cResult[13] = tmp20;
            cResult[14] = HandRequestSpeakIcon;
            cResult[15] = tmp17;
            cResult[16] = tmp25;
            tmp22 = tmp25;
          }
          const fn2 = function l() {
            if (shouldAgeVerifyToSpeakForCurrentUser) {
              const obj = {
                entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND,
              };
              const showAgeVerificationGetStartedModal =
                AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
              AgeVerificationActionCreatorsDefault;
              const result = showAgeVerificationGetStartedModal(obj);
            } else {
              require();
            }
          };
          cResult[5] = tmp7;
          cResult[6] = shouldAgeVerifyToSpeakForCurrentUser;
          cResult[7] = fn2;
          tmp17 = fn2;
        }
      }
      const fn = function s() {
        let obj2;
        const tmp = shouldShowAgeVerificationPopover && !first;
        if (tmp) {
          const obj = { content: closure_12(closure_17, obj2), key: AgeVerificationSpeakerActionSheet };
          obj2 = {
            onClose() {
              return closure_1_2(true);
            },
          };
          const showActionSheet = ActionSheetActionCreators.showActionSheet;
          ActionSheetActionCreators;
          showActionSheet(obj);
        }
      };
      const items = [shouldShowAgeVerificationPopover, first, tmp8[1]];
      cResult[0] = first;
      cResult[1] = tmp8[1];
      cResult[2] = shouldShowAgeVerificationPopover;
      cResult[3] = fn;
      cResult[4] = items;
      tmp14 = items;
      tmp13 = fn;
    }
  : (channel) => {
      let HandRequestSpeakIcon;
      let _undefined;
      let c0;
      let closure_2;
      let stringResult;
      let tmp4;
      channel = channel.channel;
      _require = undefined;
      let first;
      let shouldAgeVerifyToSpeakForCurrentUser;
      let shouldShowAgeVerificationPopover;
      const isSmallSize = channel.isSmallSize;
      let tmp = first;
      [tmp4, c0] = shouldShowAgeVerificationPopover(first(shouldAgeVerifyToSpeakForCurrentUser[44])(channel), 2);
      const tmp5 = _require;
      const tmp3 = shouldShowAgeVerificationPopover(first(shouldAgeVerifyToSpeakForCurrentUser[44])(channel), 2);
      let obj = require("useLocalStorageState");
      const tmp6 = shouldShowAgeVerificationPopover(
        obj.useLocalStorageState("age-verification-stage-popover-dismissed", false),
        2,
      );
      first = tmp6[0];
      importAll = tmp8;
      let obj2 = require("useStageSpeakingForCurrentUser");
      shouldAgeVerifyToSpeakForCurrentUser = obj2.useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
      const obj3 = require("useStageSpeakingForCurrentUser");
      shouldShowAgeVerificationPopover = obj3.useShouldShowAgeVerificationPopover(channel.id);
      const items = [shouldShowAgeVerificationPopover, first, tmp6[1]];
      const effect = react.useEffect(() => {
        let obj2;
        const tmp = shouldShowAgeVerificationPopover && !first;
        if (tmp) {
          const obj = { content: closure_12(closure_17, obj2), key: AgeVerificationSpeakerActionSheet };
          obj2 = {
            onClose() {
              return closure_1_2(true);
            },
          };
          const showActionSheet = ActionSheetActionCreators.showActionSheet;
          ActionSheetActionCreators;
          showActionSheet(obj);
        }
      }, items);
      const obj4 = require("useCanRaiseHand");
      const canRaiseHand = obj4.useCanRaiseHand(channel);
      const ToggledActionButton = require("CallBarAction").ToggledActionButton;
      const intl = tmp5(tmp2[13]).intl;
      const string = intl.string;
      const t = tmp5(tmp2[13]).t;
      if (tmp4) {
        stringResult = string(t.GCimTk);
      } else {
        stringResult = string(t.hLbG5N);
      }
      const obj5 = {
        accessibilityLabel: stringResult,
        isActive: tmp4,
        source: tmp(shouldAgeVerifyToSpeakForCurrentUser[50]),
        IconComponent: HandRequestSpeakIcon,
        onPress:
          !canRaiseHand && !tmp4
            ? NOOP
            : () => {
                if (shouldAgeVerifyToSpeakForCurrentUser) {
                  const obj = {
                    entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND,
                  };
                  const showAgeVerificationGetStartedModal =
                    AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
                  AgeVerificationActionCreatorsDefault;
                  const result = showAgeVerificationGetStartedModal(obj);
                } else {
                  _undefined();
                }
              },
        appearsDisabled: !canRaiseHand && !tmp4,
        isSmallSize,
      };
      if (shouldAgeVerifyToSpeakForCurrentUser) {
        HandRequestSpeakIcon = tmp5(tmp2[48]).HandRequestDenyIcon;
      } else {
        HandRequestSpeakIcon = tmp5(tmp2[49]).HandRequestSpeakIcon;
      }
      return closure_12(ToggledActionButton, obj5);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let c18 = 400;
const actionBarAnimationConfig = {
  mass: 1,
  stiffness: 100,
  damping: 30,
  overshootClamping: false,
  restSpeedThreshold: 0.01,
  restDisplacementThreshold: 0.01,
};
const __initData = {
  code: "function StageActionBarButtonsTsx1(){const{withSpring,show,actionBarAnimationConfig}=this.__closure;return{marginTop:withSpring(show?0:20,actionBarAnimationConfig),opacity:withSpring(show?1:0,actionBarAnimationConfig)};}",
};
const __initData2 = {
  code: "function StageActionBarButtonsTsx2(){const{withSpring,show,actionBarAnimationConfig}=this.__closure;return{marginTop:withSpring(show?0:20,actionBarAnimationConfig),opacity:withSpring(show?1:0,actionBarAnimationConfig)};}",
};
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let mentionCount;
      let tmp6;
      let tmp7;
      let unreadCount;
      let obj = channel(576);
      const cResult = obj.c(21);
      channel = channel.channel;
      const isSmallSize = channel.isSmallSize;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReadStateStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.id) {
        const fn = function o() {
          const obj = {
            unreadCount: ReadStateStore.getUnreadCount(channel.id),
            mentionCount: ReadStateStore.getMentionCount(channel.id),
          };
          return obj;
        };
        const items1 = [channel.id];
        cResult[1] = channel.id;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = channel(504);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp6, tmp7);
      ({ unreadCount, mentionCount } = stateFromStoresObject);
      const tmpResult3 = channel(9613);
      const isVoiceChannelLocked = tmpResult3.useIsVoiceChannelLocked(channel);
      const tmpResult4 = channel(9123);
      const voiceChatNavigationContext = tmpResult4.useVoiceChatNavigationContext();
      let openChat;
      if (voiceChatNavigationContext != null) {
        openChat = voiceChatNavigationContext.openChat;
      }
      if (cResult[4] === isVoiceChannelLocked) {
        let tmp12;
        let tmp24;
        let tmp23;
        if (cResult[5] === openChat) {
          tmp12 = cResult[6];
        }
        if (mentionCount <= 0) {
          if (unreadCount <= 0) {
            let tmp14;
            let tmp13;
            const _Symbol2 = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              const obj2 = { tintColor: isVoiceChannelLocked(587).unsafe_rawColors.WHITE };
              const intl = tmp(1126).intl;
              const stringResult = intl.string(channel(1126).t.ZXxLQg);
              cResult[15] = obj2;
              cResult[16] = stringResult;
              tmp14 = stringResult;
              tmp13 = obj2;
            } else {
              tmp13 = cResult[15];
              tmp14 = cResult[16];
            }
            if (cResult[17] === isSmallSize) {
              if (cResult[18] === isVoiceChannelLocked) {
                let tmp17;
                if (cResult[19] === tmp12) {
                  tmp17 = cResult[20];
                }
                return tmp17;
              }
            }
            const obj3 = {
              imageStyle: tmp13,
              accessibilityLabel: tmp14,
              IconComponent: channel(5862).ChatIcon,
              source: isVoiceChannelLocked(9614),
              onPress: tmp12,
              appearsDisabled: isVoiceChannelLocked,
              isSmallSize,
            };
            const ActionButton = openChat(9112).ActionButton;
            const tmp21 = closure_12(ActionButton, obj3);
            cResult[17] = isSmallSize;
            cResult[18] = isVoiceChannelLocked;
            cResult[19] = tmp12;
            cResult[20] = tmp21;
            tmp17 = tmp21;
          }
        }
        if (mentionCount > 0) {
          unreadCount = mentionCount;
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { tintColor: isVoiceChannelLocked(587).unsafe_rawColors.WHITE };
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(channel(1126).t.ZXxLQg);
          cResult[7] = obj4;
          cResult[8] = stringResult1;
          tmp24 = stringResult1;
          tmp23 = obj4;
        } else {
          tmp23 = cResult[7];
          tmp24 = cResult[8];
        }
        if (cResult[9] === isSmallSize) {
          if (cResult[10] === isVoiceChannelLocked) {
            if (cResult[11] === tmp12) {
              if (cResult[12] === unreadCount) {
                let tmp27;
                if (cResult[13] === mentionCount > 0) {
                  tmp27 = cResult[14];
                }
                return tmp27;
              }
            }
          }
        }
        const obj5 = {
          notifications: unreadCount,
          isMentioned: mentionCount > 0,
          imageStyle: tmp23,
          accessibilityLabel: tmp24,
          IconComponent: channel(5862).ChatIcon,
          source: isVoiceChannelLocked(9614),
          onPress: tmp12,
          appearsDisabled: isVoiceChannelLocked,
          isSmallSize,
        };
        const NotifiedActionButton = openChat(9112).NotifiedActionButton;
        const tmp31 = closure_12(NotifiedActionButton, obj5);
        cResult[9] = isSmallSize;
        cResult[10] = isVoiceChannelLocked;
        cResult[11] = tmp12;
        cResult[12] = unreadCount;
        cResult[13] = mentionCount > 0;
        cResult[14] = tmp31;
        tmp27 = tmp31;
      }
      const fn2 = function h() {
        if (!isVoiceChannelLocked) {
          if (openChat != null) {
            tmp2();
          }
        }
      };
      cResult[4] = isVoiceChannelLocked;
      cResult[5] = openChat;
      cResult[6] = fn2;
      tmp12 = fn2;
    }
  : (channel) => {
      let intl;
      let intl2;
      let mentionCount;
      let obj5;
      let unreadCount;
      channel = channel.channel;
      const isSmallSize = channel.isSmallSize;
      let obj = channel(504);
      const items = [ReadStateStore];
      const items1 = [channel.id];
      const stateFromStoresObject = obj.useStateFromStoresObject(
        items,
        () => {
          const obj = {
            unreadCount: ReadStateStore.getUnreadCount(channel.id),
            mentionCount: ReadStateStore.getMentionCount(channel.id),
          };
          return obj;
        },
        items1,
      );
      ({ unreadCount, mentionCount } = stateFromStoresObject);
      const obj2 = channel(9613);
      const isVoiceChannelLocked = obj2.useIsVoiceChannelLocked(channel);
      const obj3 = channel(9123);
      const voiceChatNavigationContext = obj3.useVoiceChatNavigationContext();
      let openChat;
      if (voiceChatNavigationContext != null) {
        openChat = voiceChatNavigationContext.openChat;
      }
      function onPress() {
        if (!isVoiceChannelLocked) {
          if (openChat != null) {
            tmp2();
          }
        }
      }
      if (mentionCount <= 0) {
        let tmp7Result;
        if (unreadCount <= 0) {
          const obj4 = {
            imageStyle: obj5,
            accessibilityLabel: intl2.string(channel(1126).t.ZXxLQg),
            IconComponent: channel(5862).ChatIcon,
            source: isVoiceChannelLocked(9614),
            onPress,
            appearsDisabled: isVoiceChannelLocked,
            isSmallSize,
          };
          obj5 = { tintColor: isVoiceChannelLocked(587).unsafe_rawColors.WHITE };
          const ActionButton = openChat(9112).ActionButton;
          intl2 = tmp(1126).intl;
          tmp7Result = closure_12(ActionButton, obj4);
        }
        return tmp7Result;
      }
      const NotifiedActionButton = openChat(9112).NotifiedActionButton;
      if (mentionCount > 0) {
        unreadCount = mentionCount;
      }
      const obj6 = {
        notifications: unreadCount,
        isMentioned: mentionCount > 0,
        imageStyle: { tintColor: isVoiceChannelLocked(587).unsafe_rawColors.WHITE },
        accessibilityLabel: intl.string(channel(1126).t.ZXxLQg),
        IconComponent: channel(5862).ChatIcon,
        source: isVoiceChannelLocked(9614),
        onPress,
        appearsDisabled: isVoiceChannelLocked,
        isSmallSize,
      };
      ({ tintColor: isVoiceChannelLocked(587).unsafe_rawColors.WHITE });
      intl = tmp(1126).intl;
      tmp7Result = closure_12(NotifiedActionButton, obj6);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (show) => {
      let children;
      let style;
      let tmp5;
      let tmp6;
      let useReducedMotion;
      let obj = show(576);
      const cResult = obj.c(9);
      show = show.show;
      ({ children, style } = show);
      const tmp4 = closure_15();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function o() {
          return useReducedMotion.useReducedMotion;
        };
        let num = 0;
        cResult[0] = items;
        let num2 = 1;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      const fn2 = function p() {
        let num2;
        let withSpring2;
        let num = 20;
        const withSpring = spring.withSpring;
        spring;
        if (show) {
          num = 0;
        }
        const obj = {
          marginTop: withSpring(num, actionBarAnimationConfig),
          opacity: withSpring2(num2, actionBarAnimationConfig),
        };
        num2 = 0;
        withSpring2 = spring.withSpring;
        spring;
        if (show) {
          num2 = 1;
        }
        return obj;
      };
      const useAnimatedStyle = show(4618).useAnimatedStyle;
      const tmpResult2 = show(4618);
      fn2.__closure = { withSpring: show(5604).withSpring, show, actionBarAnimationConfig };
      fn2.__workletHash = 5255980384921;
      fn2.__initData = __initData;
      let animatedStyle;
      ({ withSpring: show(5604).withSpring, show, actionBarAnimationConfig });
      if (!stateFromStores) {
        animatedStyle = useAnimatedStyle(fn2);
      }
      if (cResult[2] === style) {
        if (cResult[3] === tmp4.actionBarCTAContainer) {
          let tmp11;
          if (cResult[4] === animatedStyle) {
            tmp11 = cResult[5];
          }
          if (cResult[6] === children) {
            let tmp12;
            if (cResult[7] === tmp11) {
              tmp12 = cResult[8];
            }
            return tmp12;
          }
          const obj3 = { style: tmp11, children };
          const tmp15 = closure_12(ReanimatedRexportDefault.View, obj3);
          cResult[6] = children;
          cResult[7] = tmp11;
          cResult[8] = tmp15;
          tmp12 = tmp15;
        }
      }
      const items1 = [tmp4.actionBarCTAContainer, style, animatedStyle];
      cResult[2] = style;
      cResult[3] = tmp4.actionBarCTAContainer;
      cResult[4] = animatedStyle;
      cResult[5] = items1;
      tmp11 = items1;
    }
  : (show) => {
      let children;
      let style;
      let useReducedMotion;
      show = show.show;
      ({ children, style } = show);
      const tmp = closure_15();
      let obj = show(504);
      const items = [AccessibilityStore];
      const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const fn = function c() {
        let num2;
        let withSpring2;
        let num = 20;
        const withSpring = spring.withSpring;
        spring;
        if (show) {
          num = 0;
        }
        const obj = {
          marginTop: withSpring(num, actionBarAnimationConfig),
          opacity: withSpring2(num2, actionBarAnimationConfig),
        };
        num2 = 0;
        withSpring2 = spring.withSpring;
        spring;
        if (show) {
          num2 = 1;
        }
        return obj;
      };
      const obj2 = show(4618);
      fn.__closure = { withSpring: show(5604).withSpring, show, actionBarAnimationConfig };
      fn.__workletHash = 295263961338;
      fn.__initData = __initData2;
      ({ withSpring: show(5604).withSpring, show, actionBarAnimationConfig });
      const animatedStyle = obj2.useAnimatedStyle(fn);
      const style1 = [tmp.actionBarCTAContainer, style];
      let tmp5;
      View = ReanimatedRexportDefault.View;
      if (!stateFromStores) {
        tmp5 = animatedStyle;
      }
      style1[2] = tmp5;
      return closure_12(View, { style: style1, children });
    };
let closure_22 = tmp11;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channel;
      let closure_2;
      let closure_4;
      let closure_6;
      let first1;
      let first2;
      let isLive;
      let show;
      let style;
      const obj = isLive(first1[12]);
      const cResult = obj.c(19);
      ({ channel, style } = arg0);
      const obj2 = isLive(first1[57]);
      isLive = obj2.useStageChannelStartEvent(channel.id).isLive;
      [show, closure_2] = first2.useState(false);
      [first1, _slicedToArray] = first2.useState(false);
      [first2, closure_6] = first2.useState(isLive);
      if (cResult[0] === first1) {
        if (cResult[1] === isLive) {
          let tmp8;
          let tmp9;
          let tmp13;
          let tmp12;
          if (cResult[2] === show) {
            tmp8 = cResult[3];
            tmp9 = cResult[4];
          }
          const effect = obj3.useEffect(tmp8, tmp9);
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const fn2 = function l() {
              let closure_0;
              const timeout = setTimeout(() => {
                closure_1_4(true);
              }, closure_1_18);
              return () => {
                clearTimeout(closure_0);
              };
            };
            const items = [];
            cResult[5] = fn2;
            cResult[6] = items;
            tmp13 = items;
            tmp12 = fn2;
          } else {
            tmp12 = cResult[5];
            tmp13 = cResult[6];
          }
          const effect1 = obj3.useEffect(tmp12, tmp13);
          if (cResult[7] === first2) {
            if (cResult[8] === isLive) {
              let tmp15;
              let tmp16;
              if (cResult[9] === show) {
                tmp15 = cResult[10];
                tmp16 = cResult[11];
              }
              const effect2 = obj3.useEffect(tmp15, tmp16);
              let tmp18 = null;
              if (!first2) {
                if (cResult[12] === channel) {
                  if (cResult[13] === isLive) {
                    let tmp19;
                    if (cResult[14] === style) {
                      tmp19 = cResult[15];
                    }
                    if (cResult[16] === show) {
                      let tmp23;
                      if (cResult[17] === tmp19) {
                        tmp23 = cResult[18];
                      }
                      tmp18 = tmp23;
                    }
                    const obj4 = { show, children: tmp19 };
                    const tmp26 = closure_12(closure_22, obj4);
                    class S {
                      constructor() {
                        let closure_0;
                        let timeout;
                        const tmp = timeout;
                        if (tmp) {
                          if (!first) {
                            if (!first2) {
                              const _setTimeout = setTimeout;
                              timeout = setTimeout(() => {
                                closure_1_6(true);
                              }, closure_1_18);
                              return () => {
                                clearTimeout(closure_0);
                              };
                            }
                          }
                        }
                      }
                    }
                    cResult[17] = tmp19;
                    cResult[18] = tmp26;
                    tmp23 = tmp26;
                  }
                }
                const obj5 = { channel, isLive, style };
                const tmp22 = closure_12(closure_23, obj5);
                class S {
                  constructor() {
                    let closure_0;
                    let timeout;
                    const tmp = timeout;
                    if (tmp) {
                      if (!first) {
                        if (!first2) {
                          const _setTimeout = setTimeout;
                          timeout = setTimeout(() => {
                            closure_1_6(true);
                          }, closure_1_18);
                          return () => {
                            clearTimeout(closure_0);
                          };
                        }
                      }
                    }
                  }
                }
                cResult[13] = isLive;
                cResult[14] = style;
                cResult[15] = tmp22;
                tmp19 = tmp22;
              }
              return tmp18;
            }
          }
          class S {
            constructor() {
              let closure_0;
              let timeout;
              const tmp = timeout;
              if (tmp) {
                if (!first) {
                  if (!first2) {
                    const _setTimeout = setTimeout;
                    timeout = setTimeout(() => {
                      closure_1_6(true);
                    }, closure_1_18);
                    return () => {
                      clearTimeout(closure_0);
                    };
                  }
                }
              }
            }
          }
          const items1 = [isLive, show, first2];
          cResult[7] = first2;
          cResult[8] = isLive;
          cResult[9] = show;
          cResult[10] = S;
          cResult[11] = items1;
          tmp16 = items1;
          tmp15 = S;
        }
      }
      const fn = function s() {
        if (first1) {
          let tmp2 = isLive;
          if (!tmp2) {
            if (!first) {
              closure_2(true);
            }
          }
          if (tmp2) {
            tmp2 = first;
          }
          if (tmp2) {
            closure_2(false);
          }
        }
      };
      const items2 = [isLive, show, first1];
      cResult[0] = first1;
      cResult[1] = isLive;
      cResult[2] = show;
      cResult[3] = fn;
      cResult[4] = items2;
      tmp9 = items2;
      tmp8 = fn;
    }
  : (channel) => {
      let closure_2;
      let closure_4;
      let closure_6;
      let first1;
      let first2;
      let obj3;
      let show;
      channel = channel.channel;
      let isLive;
      show = undefined;
      closure_2 = undefined;
      first1 = undefined;
      _slicedToArray = undefined;
      first2 = undefined;
      closure_6 = undefined;
      const style = channel.style;
      const obj = isLive(first1[57]);
      isLive = obj.useStageChannelStartEvent(channel.id).isLive;
      [show, closure_2] = first2.useState(false);
      [first1, _slicedToArray] = first2.useState(false);
      [first2, closure_6] = first2.useState(isLive);
      const items = [isLive, show, first1];
      const effect = first2.useEffect(() => {
        if (first1) {
          let tmp2 = isLive;
          if (!tmp2) {
            if (!first) {
              closure_2(true);
            }
          }
          if (tmp2) {
            tmp2 = first;
          }
          if (tmp2) {
            closure_2(false);
          }
        }
      }, items);
      const effect1 = first2.useEffect(() => {
        let closure_0;
        const timeout = setTimeout(() => {
          closure_1_4(true);
        }, closure_1_18);
        return () => {
          clearTimeout(closure_0);
        };
      }, []);
      const items1 = [isLive, show, first2];
      const effect2 = first2.useEffect(() => {
        let closure_0;
        let timeout;
        const tmp = timeout;
        if (tmp) {
          if (!first) {
            if (!first2) {
              const _setTimeout = setTimeout;
              timeout = setTimeout(() => {
                closure_1_6(true);
              }, closure_1_18);
              return () => {
                clearTimeout(closure_0);
              };
            }
          }
        }
      }, items1);
      let tmp10 = null;
      if (!first2) {
        const obj2 = { show, children: closure_12(closure_23, obj3) };
        obj3 = { channel, isLive, style };
        tmp10 = closure_12(closure_22, obj2);
      }
      return tmp10;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let obj = channel(576);
      const cResult = obj.c(10);
      channel = channel.channel;
      const isLive = channel.isLive;
      const style = channel.style;
      const tmp4 = closure_15();
      if (cResult[0] === channel) {
        let tmp5;
        let tmp8;
        let tmp7;
        if (cResult[1] === isLive) {
          tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        const promptIconStyle = tmp4.promptIconStyle;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(channel(1126).t.OYbHfv);
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(channel(1126).t.yXwLMQ);
          cResult[3] = stringResult;
          cResult[4] = stringResult1;
          tmp8 = stringResult1;
          tmp7 = stringResult;
        } else {
          tmp7 = cResult[3];
          tmp8 = cResult[4];
        }
        if (cResult[5] === tmp5) {
          if (cResult[6] === isLive) {
            if (cResult[7] === style) {
              let tmp11;
              if (cResult[8] === tmp4.promptIconStyle) {
                tmp11 = cResult[9];
              }
              return tmp11;
            }
          }
        }
        const obj2 = {
          onPress: tmp5,
          iconSource: isLive(5828),
          iconStyle: promptIconStyle,
          style,
          completed: isLive,
          title: tmp7,
          subtitle: tmp8,
        };
        const FormCTA = tmp(8924).FormCTA;
        const tmp14 = closure_12(FormCTA, obj2);
        cResult[5] = tmp5;
        cResult[6] = isLive;
        cResult[7] = style;
        cResult[8] = tmp4.promptIconStyle;
        cResult[9] = tmp14;
        tmp11 = tmp14;
      }
      const fn = function n() {
        if (!isLive) {
          const obj = StageChannelActionCreatorExtras;
          const result = obj.openStageChannelSettings(channel);
        }
      };
      cResult[0] = channel;
      cResult[1] = isLive;
      cResult[2] = fn;
      tmp5 = fn;
    }
  : (style) => {
      let intl;
      let intl2;
      let isLive;
      let require;
      let tmp;
      ({ channel: require, isLive } = style);
      style = style.style;
      let obj = {
        onPress() {
          if (!isLive) {
            const obj = StageChannelActionCreatorExtras;
            const result = obj.openStageChannelSettings(_require);
          }
        },
        iconSource: isLive(5828),
        iconStyle: tmp.promptIconStyle,
        style,
        completed: isLive,
        title: intl.string(intl4.t.OYbHfv),
        subtitle: intl2.string(intl4.t.yXwLMQ),
      };
      tmp = closure_15();
      const FormCTA = Form.FormCTA;
      intl = intl4.intl;
      intl2 = intl4.intl;
      return closure_12(FormCTA, obj);
    };
let closure_23 = tmp13;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let iconContainerStyle;
      let iconStyle;
      let tmp5;
      let tmp6;
      let tmp7;
      let obj = channel(576);
      const cResult = obj.c(9);
      channel = channel.channel;
      const style = channel.style;
      const tmp4 = closure_15();
      if (cResult[0] !== channel) {
        const fn = function n() {
          const obj = StageChannelModalActionCreators;
          obj.connectAndOpen(channel);
        };
        cResult[0] = channel;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      ({ iconStyle, iconContainerStyle } = tmp4);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(channel(1126).t["7vb2cc"]);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(channel(1126).t.lyCW4E);
        cResult[2] = stringResult;
        cResult[3] = stringResult1;
        tmp7 = stringResult1;
        tmp6 = stringResult;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      if (cResult[4] === tmp5) {
        if (cResult[5] === style) {
          if (cResult[6] === tmp4.iconContainerStyle) {
            let tmp10;
            if (cResult[7] === tmp4.iconStyle) {
              tmp10 = cResult[8];
            }
            return tmp10;
          }
        }
      }
      const obj2 = {
        onPress: tmp5,
        iconSource: AssetRegistryDefault,
        iconStyle,
        iconContainerStyle,
        style,
        title: tmp6,
        subtitle: tmp7,
      };
      const FormCTA = tmp(8924).FormCTA;
      const tmp11 = closure_12(FormCTA, obj2);
      cResult[4] = tmp5;
      cResult[5] = style;
      cResult[6] = tmp4.iconContainerStyle;
      cResult[7] = tmp4.iconStyle;
      cResult[8] = tmp11;
      tmp10 = tmp11;
    }
  : (channel) => {
      let intl;
      let intl2;
      channel = channel.channel;
      const style = channel.style;
      let obj = {
        onPress() {
          const obj = StageChannelModalActionCreators;
          obj.connectAndOpen(channel);
        },
        iconSource: AssetRegistryDefault,
        iconStyle: null,
        iconContainerStyle: null,
        style,
        title: intl.string(channel(1126).t["7vb2cc"]),
        subtitle: intl2.string(channel(1126).t.lyCW4E),
      };
      const tmp = closure_15();
      const FormCTA = channel(8924).FormCTA;
      ({ iconStyle: obj.iconStyle, iconContainerStyle: obj.iconContainerStyle } = tmp);
      intl = channel(1126).intl;
      intl2 = channel(1126).intl;
      return closure_12(FormCTA, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onContinue) => {
      let Icon;
      let continueContainer;
      let continueText;
      let first;
      let items;
      let obj3;
      let obj5;
      let tmp11;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(12);
      onContinue = onContinue.onContinue;
      const tmp4 = closure_15();
      ({ continueContainer, continueText } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl4.intl;
        const stringResult = intl.string(intl4.t["jMLfp/"]);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.continueText) {
        const obj2 = { children: closure_12(native.LegacyText, obj3) };
        obj3 = { style: continueText, children: first };
        const tmp10 = closure_12(View, obj2);
        cResult[1] = tmp4.continueText;
        cResult[2] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== tmp4.continueIcon) {
        const obj4 = { children: closure_12(Icon, obj5) };
        obj5 = {
          style: tmp4.continueIcon,
          source: AssetRegistryDefault4,
          size: native.Icon.Sizes.SMALL,
          disableColor: true,
        };
        Icon = native.Icon;
        const tmp15 = closure_12(View, obj4);
        cResult[3] = tmp4.continueIcon;
        cResult[4] = tmp15;
        tmp11 = tmp15;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === tmp4.continueContainer) {
        if (cResult[6] === tmp7) {
          let tmp16;
          if (cResult[7] === tmp11) {
            tmp16 = cResult[8];
          }
          if (cResult[9] === onContinue) {
            let tmp18;
            if (cResult[10] === tmp16) {
              tmp18 = cResult[11];
            }
            return tmp18;
          }
          const obj6 = { accessibilityRole: "button", onPress: onContinue, children: tmp16 };
          const tmp20 = closure_12(Pressables.PressableOpacity, obj6);
          cResult[9] = onContinue;
          cResult[10] = tmp16;
          cResult[11] = tmp20;
          tmp18 = tmp20;
        }
      }
      const obj7 = { style: continueContainer, children: items };
      items = [tmp7, tmp11];
      const tmp17 = map1(View, obj7);
      cResult[5] = tmp4.continueContainer;
      cResult[6] = tmp7;
      cResult[7] = tmp11;
      cResult[8] = tmp17;
      tmp16 = tmp17;
    }
  : (onContinue) => {
      let Icon;
      let LegacyText;
      let intl;
      let items;
      let obj2;
      let obj4;
      let obj6;
      onContinue = onContinue.onContinue;
      const tmp = closure_15();
      const obj = { accessibilityRole: "button", onPress: onContinue, children: map1(View, obj2) };
      obj2 = { style: tmp.continueContainer, children: items };
      const obj3 = { children: closure_12(LegacyText, obj4) };
      const PressableOpacity = Pressables.PressableOpacity;
      obj4 = { style: tmp.continueText, children: intl.string(intl4.t["jMLfp/"]) };
      LegacyText = native.LegacyText;
      intl = intl4.intl;
      items = [closure_12(View, obj3)];
      const obj5 = { children: closure_12(Icon, obj6) };
      obj6 = {
        style: tmp.continueIcon,
        source: AssetRegistryDefault4,
        size: native.Icon.Sizes.SMALL,
        disableColor: true,
      };
      Icon = native.Icon;
      items[1] = closure_12(View, obj5);
      return closure_12(PressableOpacity, obj);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageActionBarButtons.tsx");
const AgeVerificationSpeakerActionSheet_export = tmp8;

export const MoveToAudienceButton = tmp4;
export const MusicMuteButton = tmp5;
export const DisconnectStageButton = tmp6;
export const RequestToSpeakListButton = function RequestToSpeakListButton(channel) {
  let intl;
  let intl2;
  let obj3;
  let obj4;
  let obj6;
  let tmp7;
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  let analyticsLocations;
  function handleOpenAudienceList() {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { channelId: channel.id, analyticsLocations };
    obj.openLazy(asyncRequire(9591, dependencyMap.paths), closure_10, obj2);
  }
  analyticsLocations = analyticsLocations(6664)().analyticsLocations;
  let obj = channel(5595);
  const stageParticipantsCount = obj.useStageParticipantsCount(
    channel.id,
    channel(5589).StageChannelParticipantNamedIndex.REQUESTED_TO_SPEAK_ONLY,
  );
  if (stageParticipantsCount > 0) {
    let obj2 = {
      accessibilityLabel: intl.formatToPlainString(channel(1126).t.OhK58v, obj3),
      source: analyticsLocations(9602),
      imageStyle: obj4,
      IconComponent: channel(9603).HandRequestSpeakListIcon,
      onPress: handleOpenAudienceList,
      notifications: stageParticipantsCount,
      isSmallSize,
    };
    const NotifiedActionButton = CallBarActionAll.NotifiedActionButton;
    intl = tmp3(1126).intl;
    obj3 = { count: stageParticipantsCount };
    obj4 = { tintColor: analyticsLocations(587).unsafe_rawColors.WHITE };
    tmp7 = closure_12(NotifiedActionButton, obj2);
  } else {
    const obj5 = {
      accessibilityLabel: intl2.string(channel(1126).t.KJnyvh),
      source: analyticsLocations(9602),
      imageStyle: obj6,
      IconComponent: channel(9603).HandRequestSpeakListIcon,
      onPress: handleOpenAudienceList,
      isSmallSize,
    };
    const ActionButton = CallBarActionAll.ActionButton;
    intl2 = tmp3(1126).intl;
    obj6 = { tintColor: analyticsLocations(587).unsafe_rawColors.WHITE };
    tmp7 = closure_12(ActionButton, obj5);
  }
  return tmp7;
};
export { AgeVerificationSpeakerActionSheet_export as AgeVerificationSpeakerActionSheet };
export const RequestToSpeakButton = tmp9;
export const ChatButton = tmp10;
export const AnimatedPrompt = tmp11;
export const AnimatedStartStagePrompt = tmp12;
export const StartStagePrompt = tmp13;
export const JoinStagePrompt = tmp14;
export const ContinueToStagePrompt = tmp15;
