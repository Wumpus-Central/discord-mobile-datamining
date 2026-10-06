// discord_app/modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import native2 from "../../../../../discord_common/js/packages/design/native.tsx";
import CircleErrorIcon2 from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import StreamActionCreators from "../../../../actions/StreamActionCreators.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import useGameProfileObscuredDefault from "../../../game_profile/hooks/useGameProfileObscured.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import GameProfileAnalyticUtils from "../../../game_profile/GameProfileAnalyticUtils.tsx";
import useShouldOpenGameProfileModal from "../../../game_profile/hooks/useShouldOpenGameProfileModal.tsx";
import useResolveGameForProfileDefault from "../../../game_profile/hooks/useResolveGameForProfile.tsx";
import EmbeddedActivitiesNativeManagerDefault from "../../../activities/native/EmbeddedActivitiesNativeManager.tsx";
import VoiceStateIcons from "../shared/VoiceStateIcons.tsx";
import VoiceStateIconUtils from "../utils/VoiceStateIconUtils.tsx";
import usePlayingGameActivitiesDefault from "../../../activities/hooks/usePlayingGameActivities.tsx";
import GuildTagDefault from "../../../guild_tag/native/GuildTag.tsx";
import VoiceXIcon from "../../../../design/components/Icon/native/redesign/generated/VoiceXIcon.tsx";
import AssetRegistryDefault from "../../../../../_runtime/09761_AssetRegistry.js";
import VoicePanelControlsConstants from "../controls/VoicePanelControlsConstants.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import VoicePanelCardConstants from "VoicePanelCardConstants.tsx";
import useStableParticipant from "../utils/useStableParticipant.tsx";
import useVoicePanelCardUserStateIcons from "../hooks/useVoicePanelCardUserStateIcons.tsx";
import AssetRegistryDefault2 from "../../../../../_runtime/17277_AssetRegistry.js";
import getRandomNumberInRangeDefault from "../utils/getRandomNumberInRange.tsx";
import AssetRegistryDefault3 from "../../../../../_runtime/17322_AssetRegistry.js";
import AssetRegistryDefault4 from "../../../../../_runtime/17323_AssetRegistry.js";
import GameTagChipletDefault from "../../../game_profile/native/components/GameTagChiplet.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";
import VoicePanelConstants from "../../VoicePanelConstants.tsx";
import CallConstants from "../../../calls/CallConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReanimatedRexport_mod from "../../../reanimated/ReanimatedRexport.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, icon, importDefault, participantId, set, voicePlatform;

let Platform;
let Pressable;
let c10;
let c9;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
function getAccessibilityLabel(tmp4ResultResult, label) {
  if (
    null !=
    tmp4ResultResult.find(
      (type) => type.type === require("useVoicePanelCardUserStateIcons").VoicePanelCardUserStateIconType.STREAM_ICON,
    )
  ) {
    const intl3 = intl5.intl;
    const obj2 = { username: label };
    return intl3.formatToPlainString(intl5.t.I0mOAs, obj2);
  } else {
    const found = tmp4ResultResult.find(
      (type) =>
        type.type === require("useVoicePanelCardUserStateIcons").VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON,
    );
    if (null != found) {
      const muteDeafenIconState = found.muteDeafenIconState;
      if (VoiceStateIconUtils.MuteDeafenIconState.DEAFENED !== muteDeafenIconState) {
        if (VoiceStateIconUtils.MuteDeafenIconState.DEAFENED_SERVER !== muteDeafenIconState) {
          const intl = intl5.intl;
          const obj = { username: label };
          return intl.formatToPlainString(intl5.t.Hd1oVG, obj);
        }
      }
      const intl2 = intl5.intl;
      const obj3 = { username: label };
      return intl2.formatToPlainString(intl5.t["9hDjai"], obj3);
    } else {
      return label;
    }
  }
}
({ Platform, Pressable } = react_native);
({ MODE_CHANGE_PHYSICS: c9, VoicePanelModes: c10 } = VoicePanelConstants);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const VOICE_PANEL_CARD_INNER_PADDING = VoicePanelCardConstants.VOICE_PANEL_CARD_INNER_PADDING;
const ThemeTypes = Constants.ThemeTypes;
({ ParticipantTypes: closure_14, VoicePlatforms: closure_15 } = CallConstants);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = Fragment);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_19 = ReanimatedRexport.createAnimatedComponent(native.Icon);
ReanimatedRexport = ReanimatedRexport_mod;
let closure_20 = ReanimatedRexport.createAnimatedComponent(Pressable);
let c21 = 28;
let closure_22 = createStyles.createStyles(() => {
  let rect;
  let size1;
  let size2;
  const obj = {
    labelPositionContainer: {
      position: "absolute",
      left: 8,
      right: 8,
      bottom: 8,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 8,
    },
    labelOuterContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      borderRadius: nativeDefault.radii.sm,
      overflow: "hidden",
      paddingHorizontal: 8,
      backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
      height,
      gap: 4,
    },
    initialIcons: { display: "flex", flexDirection: "row", marginStart: -4, marginEnd: -4 },
    icon: size,
    iconWithoutBackground: size1,
    iconContainer: size2,
    speakerMuteIcon: { marginRight: 4 },
    floatingContainer: { flexDirection: "row", alignItems: "center", gap: 4, overflow: "hidden", flexShrink: 1 },
    floatingText: { overflow: "hidden", paddingStart: 4, paddingEnd: 4, flexShrink: 1, lineHeight: 14 },
    ringingIconContainer: rect,
    ringingIcon: { tintColor: nativeDefault.colors.STATUS_POSITIVE },
    secureFramesIcon: { marginEnd: -2 },
  };
  ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: nativeDefault.radii.sm,
    overflow: "hidden",
    paddingHorizontal: 8,
    backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
    height,
    gap: 4,
  });
  size = { width: 12, height: 12, tintColor: nativeDefault.colors.WHITE };
  size1 = { width: 16, height: 16, tintColor: nativeDefault.colors.WHITE };
  size2 = {
    width: 20,
    height: 20,
    borderRadius: nativeDefault.radii.round,
    alignItems: "center",
    justifyContent: "center",
  };
  rect = {
    position: "absolute",
    top: 8,
    right: 8,
    padding: 6,
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  };
  ({ tintColor: nativeDefault.colors.STATUS_POSITIVE });
  return obj;
});
const __initData = {
  code: "function VoicePanelCardFloatingControlsTsx1(){const{controlsSpecs,VoicePanelControlsModes,GAP}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;return{marginLeft:hidden?2:GAP,marginRight:hidden?2:0};}",
};
const __initData2 = {
  code: "function VoicePanelCardFloatingControlsTsx2(){const{controlsSpecs,VoicePanelControlsModes,GAP}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;return{marginLeft:hidden?2:GAP,marginRight:hidden?2:0};}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? (voicePlatform) => {
      let controlsSpecs;
      let obj = controlsSpecs(576);
      const cResult = obj.c(6);
      voicePlatform = voicePlatform.voicePlatform;
      const tmp3 = closure_22();
      controlsSpecs = react.useContext(VoicePanelStateContextDefault).controlsSpecs;
      const fn = function o() {
        let num2;
        const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
        let num = 4;
        if (tmp) {
          num = 2;
        }
        const obj = { marginLeft: num, marginRight: num2 };
        num2 = 0;
        if (tmp) {
          num2 = 2;
        }
        return obj;
      };
      const obj3 = { controlsSpecs, VoicePanelControlsModes, GAP: 4 };
      fn.__closure = obj3;
      fn.__workletHash = 3270040588948;
      fn.__initData = __initData;
      const obj2 = controlsSpecs(4618);
      const animatedStyle = obj2.useAnimatedStyle(fn);
      let tmp4Result = AssetRegistryDefault2;
      if (voicePlatform === constants2.XBOX) {
        tmp4Result = AssetRegistryDefault3;
      } else if (voicePlatform === constants2.MOBILE) {
        tmp4Result = AssetRegistryDefault;
      } else if (voicePlatform === constants2.QUEST) {
        tmp4Result = AssetRegistryDefault4;
      }
      if (cResult[0] === animatedStyle) {
        let tmp8;
        if (cResult[1] === tmp3.iconWithoutBackground) {
          tmp8 = cResult[2];
        }
        if (cResult[3] === tmp4Result) {
          let tmp9;
          if (cResult[4] === tmp8) {
            tmp9 = cResult[5];
          }
          return tmp9;
        }
        const obj4 = { source: tmp4Result, style: tmp8 };
        const tmp12 = closure_16(closure_19, obj4);
        let num = 3;
        cResult[3] = tmp4Result;
        let num2 = 4;
        cResult[4] = tmp8;
        cResult[5] = tmp12;
        tmp9 = tmp12;
      }
      const items = [tmp3.iconWithoutBackground, animatedStyle];
      cResult[0] = animatedStyle;
      cResult[1] = tmp3.iconWithoutBackground;
      cResult[2] = items;
      tmp8 = items;
    }
  : (voicePlatform) => {
      let items;
      voicePlatform = voicePlatform.voicePlatform;
      let tmp = closure_22();
      const controlsSpecs = react.useContext(VoicePanelStateContextDefault).controlsSpecs;
      let obj = controlsSpecs(4618);
      const fn = function o() {
        let num2;
        const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
        let num = 4;
        if (tmp) {
          num = 2;
        }
        const obj = { marginLeft: num, marginRight: num2 };
        num2 = 0;
        if (tmp) {
          num2 = 2;
        }
        return obj;
      };
      const obj2 = { controlsSpecs, VoicePanelControlsModes, GAP: 4 };
      fn.__closure = obj2;
      fn.__workletHash = 15914667672663;
      fn.__initData = __initData2;
      const animatedStyle = obj.useAnimatedStyle(fn);
      let tmp2Result = AssetRegistryDefault2;
      if (voicePlatform === constants2.XBOX) {
        tmp2Result = AssetRegistryDefault3;
      } else if (voicePlatform === constants2.MOBILE) {
        tmp2Result = AssetRegistryDefault;
      } else if (voicePlatform === constants2.QUEST) {
        tmp2Result = AssetRegistryDefault4;
      }
      const obj3 = { source: tmp2Result, style: items };
      items = [tmp.iconWithoutBackground, animatedStyle];
      return closure_16(closure_19, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? (icon) => {
      let obj6;
      let obj8;
      const obj = react2;
      const cResult = obj.c(31);
      icon = icon.icon;
      const tmp4 = closure_22();
      const type = icon.type;
      if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.STREAM_ICON === type) {
        let tmp47;
        if (cResult[0] !== icon.voicePlatform) {
          const obj2 = { voicePlatform: icon.voicePlatform };
          const tmp50 = authStore3(closure_25, obj2);
          cResult[0] = icon.voicePlatform;
          cResult[1] = tmp50;
          tmp47 = tmp50;
        } else {
          tmp47 = cResult[1];
        }
        return tmp47;
      } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.SPEAKER_MUTE_ICON === type) {
        let tmp38;
        let tmp40;
        const _Symbol2 = Symbol;
        const speakerMuteIcon = tmp4.speakerMuteIcon;
        const onPress2 = icon.onPress;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = intl5.intl;
          const stringResult = intl4.string(intl5.t.Q8Uzof);
          cResult[2] = stringResult;
          tmp38 = stringResult;
        } else {
          tmp38 = cResult[2];
        }
        if (cResult[3] !== tmp4.iconWithoutBackground) {
          const obj3 = { style: tmp4.iconWithoutBackground };
          const tmp42 = authStore3(VoiceXIcon.VoiceXIcon, obj3);
          cResult[3] = tmp4.iconWithoutBackground;
          cResult[4] = tmp42;
          tmp40 = tmp42;
        } else {
          tmp40 = cResult[4];
        }
        if (cResult[5] === icon.onPress) {
          if (cResult[6] === tmp4.speakerMuteIcon) {
            let tmp43;
            if (cResult[7] === tmp40) {
              tmp43 = cResult[8];
            }
            return tmp43;
          }
        }
        const obj4 = {
          style: speakerMuteIcon,
          hitSlop: 12,
          onPress: onPress2,
          accessibilityRole: "button",
          accessibilityLabel: tmp38,
          children: tmp40,
        };
        const tmp46 = authStore3(Pressable, obj4);
        cResult[5] = icon.onPress;
        cResult[6] = tmp4.speakerMuteIcon;
        cResult[7] = tmp40;
        cResult[8] = tmp46;
        tmp43 = tmp46;
      } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_VIDEO_ICON === type) {
        let tmp27;
        let tmp34;
        if (cResult[9] !== icon.videoIconState) {
          let stringResult1;
          if (icon.videoIconState === VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO) {
            const intl3 = intl5.intl;
            stringResult1 = intl3.string(intl5.t.uv1tVh);
          } else {
            const intl2 = intl5.intl;
            stringResult1 = intl2.string(intl5.t["PXMZ/+"]);
          }
          cResult[9] = icon.videoIconState;
          cResult[10] = stringResult1;
          tmp27 = stringResult1;
        } else {
          tmp27 = cResult[10];
        }
        if (cResult[11] === icon.onPress) {
          if (cResult[12] === icon.videoIconState) {
            if (cResult[13] === tmp4.icon) {
              if (cResult[14] === tmp4.iconContainer) {
                let tmp29;
                if (cResult[15] === tmp27) {
                  tmp29 = cResult[16];
                }
                return tmp29;
              }
            }
          }
        }
        if (null != icon.onPress) {
          const obj5 = {
            style: tmp4.iconContainer,
            onPress: icon.onPress,
            accessibilityRole: "button",
            accessibilityLabel: tmp27,
            children: authStore3(VoiceStateIcons.VideoIcon, obj6),
          };
          obj6 = { style: tmp4.icon, state: icon.videoIconState };
          tmp34 = authStore3(Pressable, obj5);
        } else {
          const obj7 = {
            style: tmp4.iconContainer,
            accessible: true,
            accessibilityRole: "image",
            accessibilityLabel: tmp27,
            children: authStore3(VoiceStateIcons.VideoIcon, obj8),
          };
          obj8 = { style: tmp4.icon, state: icon.videoIconState };
          const tmp33 = NativeViewDefault;
          tmp34 = authStore3(tmp33, obj7);
        }
        cResult[11] = icon.onPress;
        cResult[12] = icon.videoIconState;
        cResult[13] = tmp4.icon;
        cResult[14] = tmp4.iconContainer;
        cResult[15] = tmp27;
        cResult[16] = tmp34;
        tmp29 = tmp34;
      } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON === type) {
        if (cResult[17] === icon.muteDeafenIconState) {
          let tmp16;
          if (cResult[18] === tmp4.icon) {
            tmp16 = cResult[19];
          }
          if (cResult[20] === icon.onPress) {
            let tmp19;
            if (cResult[21] === tmp16) {
              tmp19 = cResult[22];
            }
            if (cResult[23] === tmp4.iconContainer) {
              let tmp23;
              if (cResult[24] === tmp19) {
                tmp23 = cResult[25];
              }
              return tmp23;
            }
            const obj9 = {
              style: tmp4.iconContainer,
              accessibilityElementsHidden: true,
              importantForAccessibility: "no-hide-descendants",
              children: tmp19,
            };
            const tmp26 = authStore3(NativeViewDefault, obj9);
            cResult[23] = tmp4.iconContainer;
            cResult[24] = tmp19;
            cResult[25] = tmp26;
            tmp23 = tmp26;
          }
          const obj10 = { onPress: icon.onPress, hitSlop: 12, children: tmp16 };
          const tmp22 = authStore3(Pressable, obj10);
          cResult[20] = icon.onPress;
          cResult[21] = tmp16;
          cResult[22] = tmp22;
          tmp19 = tmp22;
        }
        const obj11 = { style: tmp4.icon, state: icon.muteDeafenIconState, alwaysWhite: true };
        const tmp18 = authStore3(VoiceStateIcons.MuteDeafenIcon, obj11);
        cResult[17] = icon.muteDeafenIconState;
        cResult[18] = tmp4.icon;
        cResult[19] = tmp18;
        tmp16 = tmp18;
      } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_DISCONNECTED_ICON === type) {
        let tmp7;
        let tmp6;
        const _Symbol = Symbol;
        const iconContainer = tmp4.iconContainer;
        const onPress = icon.onPress;
        if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl5.intl;
          const stringResult2 = intl.string(intl5.t.HFwRpk);
          const obj12 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
          const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
          const tmp11 = authStore3(CircleErrorIcon, obj12);
          cResult[26] = stringResult2;
          cResult[27] = tmp11;
          tmp7 = tmp11;
          tmp6 = stringResult2;
        } else {
          tmp6 = cResult[26];
          tmp7 = cResult[27];
        }
        if (cResult[28] === icon.onPress) {
          let tmp12;
          if (cResult[29] === tmp4.iconContainer) {
            tmp12 = cResult[30];
          }
          return tmp12;
        }
        const obj13 = {
          style: iconContainer,
          onPress,
          accessibilityRole: "button",
          accessibilityLabel: tmp6,
          children: tmp7,
        };
        const tmp15 = authStore3(Pressable, obj13);
        cResult[28] = icon.onPress;
        cResult[29] = tmp4.iconContainer;
        cResult[30] = tmp15;
        tmp12 = tmp15;
      }
    }
  : (icon) => {
      let CircleErrorIcon;
      let intl;
      let intl4;
      let obj10;
      let obj11;
      let obj12;
      let obj4;
      let obj6;
      let obj8;
      icon = icon.icon;
      const tmp = closure_22();
      const type = icon.type;
      if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.STREAM_ICON === type) {
        const obj2 = { voicePlatform: icon.voicePlatform };
        return authStore3(closure_25, obj2);
      } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.SPEAKER_MUTE_ICON === type) {
        const obj3 = {
          style: tmp.speakerMuteIcon,
          hitSlop: 12,
          onPress: icon.onPress,
          accessibilityRole: "button",
          accessibilityLabel: intl4.string(intl5.t.Q8Uzof),
          children: authStore3(VoiceXIcon.VoiceXIcon, obj4),
        };
        intl4 = intl5.intl;
        obj4 = { style: tmp.iconWithoutBackground };
        return authStore3(Pressable, obj3);
      } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_VIDEO_ICON === type) {
        let stringResult;
        let tmp16;
        if (icon.videoIconState === VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO) {
          const intl3 = intl5.intl;
          stringResult = intl3.string(intl5.t.uv1tVh);
        } else {
          const intl2 = intl5.intl;
          stringResult = intl2.string(intl5.t["PXMZ/+"]);
        }
        if (null != icon.onPress) {
          const obj5 = {
            style: tmp.iconContainer,
            onPress: icon.onPress,
            accessibilityRole: "button",
            accessibilityLabel: stringResult,
            children: authStore3(VoiceStateIcons.VideoIcon, obj6),
          };
          obj6 = { style: tmp.icon, state: icon.videoIconState };
          tmp16 = authStore3(Pressable, obj5);
        } else {
          const obj7 = {
            style: tmp.iconContainer,
            accessible: true,
            accessibilityRole: "image",
            accessibilityLabel: stringResult,
            children: authStore3(VoiceStateIcons.VideoIcon, obj8),
          };
          obj8 = { style: tmp.icon, state: icon.videoIconState };
          const tmp15 = NativeViewDefault;
          tmp16 = authStore3(tmp15, obj7);
        }
        return tmp16;
      } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON === type) {
        const obj9 = {
          style: tmp.iconContainer,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          children: authStore3(Pressable, obj10),
        };
        obj10 = { onPress: icon.onPress, hitSlop: 12, children: authStore3(VoiceStateIcons.MuteDeafenIcon, obj11) };
        obj11 = { style: tmp.icon, state: icon.muteDeafenIconState, alwaysWhite: true };
        const tmp9 = NativeViewDefault;
        return authStore3(tmp9, obj9);
      } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_DISCONNECTED_ICON === type) {
        const obj = {
          style: tmp.iconContainer,
          onPress: icon.onPress,
          accessibilityRole: "button",
          accessibilityLabel: intl.string(intl5.t.HFwRpk),
          children: authStore3(CircleErrorIcon, obj12),
        };
        intl = intl5.intl;
        obj12 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
        CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
        return authStore3(Pressable, obj);
      }
    };
const __initData3 = {
  code: 'function VoicePanelCardFloatingControlsTsx3(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get();return{position:"absolute",top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,left:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}',
};
const __initData4 = {
  code: "function VoicePanelCardFloatingControlsTsx4(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get();return{position:'absolute',top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,left:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled()
  ? (controlsHidden) => {
      let left;
      _require = controlsHidden;
      const fn = function n() {
        let num2;
        let tmp2;
        let withSpring;
        const value = controlsHidden.get();
        if (value) {
          tmp2 = -c21 + 2 * left;
        } else {
          tmp2 = left;
        }
        const rect = { position: "absolute", top: tmp2, left, opacity: withSpring(num2, c9), zIndex: 1 };
        num2 = 1;
        withSpring = spring.withSpring;
        spring;
        if (value) {
          num2 = 0;
        }
        return rect;
      };
      const obj = require("ReanimatedRexport");
      fn.__closure = {
        controlsHidden,
        FLOATING_BAR_HEIGHT: v28,
        VOICE_PANEL_CARD_INNER_PADDING,
        withSpring: require("spring").withSpring,
        MODE_CHANGE_PHYSICS,
      };
      fn.__workletHash = 14378515190270;
      fn.__initData = __initData3;
      ({
        controlsHidden,
        FLOATING_BAR_HEIGHT: v28,
        VOICE_PANEL_CARD_INNER_PADDING,
        withSpring: require("spring").withSpring,
        MODE_CHANGE_PHYSICS,
      });
      return obj.useAnimatedStyle(fn);
    }
  : (controlsHidden) => {
      let left;
      _require = controlsHidden;
      const fn = function n() {
        let num2;
        let tmp2;
        let withSpring;
        const value = controlsHidden.get();
        if (value) {
          tmp2 = -c21 + 2 * left;
        } else {
          tmp2 = left;
        }
        const rect = { position: "absolute", top: tmp2, left, opacity: withSpring(num2, c9), zIndex: 1 };
        num2 = 1;
        withSpring = spring.withSpring;
        spring;
        if (value) {
          num2 = 0;
        }
        return rect;
      };
      const obj = require("ReanimatedRexport");
      fn.__closure = {
        controlsHidden,
        FLOATING_BAR_HEIGHT: v28,
        VOICE_PANEL_CARD_INNER_PADDING,
        withSpring: require("spring").withSpring,
        MODE_CHANGE_PHYSICS,
      };
      fn.__workletHash = 5483379042905;
      fn.__initData = __initData4;
      ({
        controlsHidden,
        FLOATING_BAR_HEIGHT: v28,
        VOICE_PANEL_CARD_INNER_PADDING,
        withSpring: require("spring").withSpring,
        MODE_CHANGE_PHYSICS,
      });
      return obj.useAnimatedStyle(fn);
    };
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_31 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (participant) => {
        let guildId;
        let isSelf;
        let layout;
        let obj = participant(576);
        const cResult = obj.c(11);
        participant = participant.participant;
        ({ isSelf, layout } = participant);
        const controlsHidden = participant.controlsHidden;
        guildId = react.useContext(guildId(11915)).guildId;
        const tmp5 = closure_30(controlsHidden);
        if (cResult[0] === guildId) {
          let tmp6;
          let stringResult;
          if (cResult[1] === participant) {
            tmp6 = cResult[2];
          }
          if (cResult[3] === isSelf) {
            let tmp7;
            if (cResult[4] === participant) {
              tmp7 = cResult[5];
            }
            if (cResult[6] === tmp6) {
              if (cResult[7] === layout) {
                if (cResult[8] === tmp7) {
                  let tmp10;
                  if (cResult[9] === tmp5) {
                    tmp10 = cResult[10];
                  }
                  return tmp10;
                }
              }
            }
            let obj2 = { icon: guildId(17324), onPress: tmp6, style: tmp5, layout, accessibilityLabel: tmp7 };
            const tmp4Result = guildId(17217);
            const tmp13 = closure_16(tmp4Result, obj2);
            cResult[6] = tmp6;
            cResult[7] = layout;
            cResult[8] = tmp7;
            cResult[9] = tmp5;
            cResult[10] = tmp13;
            tmp10 = tmp13;
          }
          const tmpResult = tmp(17248);
          const result = tmpResult.isStableActivityParticipant(participant);
          const intl = tmp(1126).intl;
          const string = intl.string;
          const t = tmp(1126).t;
          if (result) {
            stringResult = string(t["R/FK4A"]);
          } else if (isSelf) {
            stringResult = string(t.S5anIc);
          } else {
            stringResult = string(t.q3O3J8);
          }
          cResult[3] = isSelf;
          cResult[4] = participant;
          cResult[5] = stringResult;
          tmp7 = stringResult;
        }
        const fn = function o() {
          const obj = useStableParticipant;
          if (obj.isStableStreamParticipant(participant)) {
            const streamForUser = ApplicationStreamingStore.getStreamForUser(participant.user.id, guildId);
            if (null != streamForUser) {
              const stopStream = StreamActionCreators.stopStream;
              StreamActionCreators;
              const tmpResult3 = StreamKeyUtils;
              stopStream(tmpResult3.encodeStreamKey(streamForUser));
            }
          }
          const tmpResult4 = useStableParticipant;
          if (tmpResult4.isStableActivityParticipant(participant)) {
            const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
            let _location;
            const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
            EmbeddedActivitiesNativeManagerDefault;
            if (currentEmbeddedActivity != null) {
              _location = currentEmbeddedActivity.location;
            }
            const obj2 = { location: _location, applicationId: participant.applicationId };
            leaveActivity(obj2);
          }
        };
        cResult[0] = guildId;
        cResult[1] = participant;
        cResult[2] = fn;
        tmp6 = fn;
      }
    : (participant) => {
        let controlsHidden;
        let isSelf;
        let layout;
        let stringResult;
        participant = participant.participant;
        let guildId;
        ({ controlsHidden, isSelf, layout } = participant);
        guildId = react.useContext(guildId(11915)).guildId;
        const items = [guildId, participant];
        const tmp = closure_30(controlsHidden);
        const callback = react.useCallback(() => {
          const obj = useStableParticipant;
          if (obj.isStableStreamParticipant(participant)) {
            const streamForUser = ApplicationStreamingStore.getStreamForUser(participant.user.id, guildId);
            if (null != streamForUser) {
              const stopStream = StreamActionCreators.stopStream;
              StreamActionCreators;
              const tmpResult3 = StreamKeyUtils;
              stopStream(tmpResult3.encodeStreamKey(streamForUser));
            }
          }
          const tmpResult4 = useStableParticipant;
          if (tmpResult4.isStableActivityParticipant(participant)) {
            const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
            let _location;
            const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
            EmbeddedActivitiesNativeManagerDefault;
            if (currentEmbeddedActivity != null) {
              _location = currentEmbeddedActivity.location;
            }
            const obj2 = { location: _location, applicationId: participant.applicationId };
            leaveActivity(obj2);
          }
        }, items);
        let obj = { icon: guildId(17324), onPress: callback, style: tmp, layout, accessibilityLabel: stringResult };
        const tmp4 = guildId(17217);
        let obj2 = participant(17248);
        const result = obj2.isStableActivityParticipant(participant);
        const intl = participant(1126).intl;
        const string = intl.string;
        const t = participant(1126).t;
        if (result) {
          stringResult = string(t["R/FK4A"]);
        } else if (isSelf) {
          stringResult = string(t.S5anIc);
        } else {
          stringResult = string(t.q3O3J8);
        }
        return closure_16(tmp4, obj);
      },
);
const __initData5 = {
  code: 'function VoicePanelCardFloatingControlsTsx5(){const{controlsHidden,mode,VoicePanelModes,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get()||mode.get()===VoicePanelModes.PIP;return{position:"absolute",top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,right:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}',
};
const __initData6 = {
  code: "function VoicePanelCardFloatingControlsTsx6(){const{controlsHidden,mode,VoicePanelModes,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get()||mode.get()===VoicePanelModes.PIP;return{position:'absolute',top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,right:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}",
};
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (participantId) => {
        let isActivityParticipant;
        let layout;
        let mode;
        let right;
        let setFocused;
        let targetName;
        const obj = participantId(setFocused[17]);
        const cResult = obj.c(11);
        participantId = participantId.participantId;
        const controlsHidden = participantId.controlsHidden;
        ({ targetName, isActivityParticipant, layout } = participantId);
        let tmp4 = controlsHidden;
        const context = mode.useContext(controlsHidden(setFocused[18]));
        setFocused = context.setFocused;
        mode = context.mode;
        if (cResult[0] === participantId) {
          let tmp6;
          let stringResult;
          if (cResult[1] === setFocused) {
            tmp6 = cResult[2];
          }
          const fn2 = function f() {
            let num2;
            let tmp4;
            let withSpring;
            const value = controlsHidden.get() || mode.get() === constants.PIP;
            if (value) {
              tmp4 = -c21 + 2 * right;
            } else {
              tmp4 = right;
            }
            const rect = { position: "absolute", top: tmp4, right, opacity: withSpring(num2, c9), zIndex: 1 };
            num2 = 1;
            withSpring = spring.withSpring;
            spring;
            if (value) {
              num2 = 0;
            }
            return rect;
          };
          const obj2 = {
            controlsHidden,
            mode,
            VoicePanelModes,
            FLOATING_BAR_HEIGHT: v28,
            VOICE_PANEL_CARD_INNER_PADDING,
            withSpring: participantId(setFocused[30]).withSpring,
            MODE_CHANGE_PHYSICS,
          };
          const useAnimatedStyle = tmp(setFocused[12]).useAnimatedStyle;
          participantId(setFocused[12]);
          fn2.__closure = obj2;
          fn2.__workletHash = 9450803171648;
          fn2.__initData = __initData5;
          const animatedStyle = useAnimatedStyle(fn2);
          if (cResult[3] === isActivityParticipant) {
            let tmp14;
            if (cResult[4] === targetName) {
              tmp14 = cResult[5];
            }
            if (cResult[6] === tmp14) {
              if (cResult[7] === tmp6) {
                if (cResult[8] === layout) {
                  let tmp17;
                  if (cResult[9] === animatedStyle) {
                    tmp17 = cResult[10];
                  }
                  return tmp17;
                }
              }
            }
            const obj3 = {
              icon: tmp4(setFocused[37]),
              onPress: tmp6,
              style: animatedStyle,
              layout,
              accessibilityLabel: tmp14,
            };
            const tmp4Result = tmp4(setFocused[35]);
            const tmp20 = closure_16(tmp4Result, obj3);
            cResult[6] = tmp14;
            cResult[7] = tmp6;
            cResult[8] = layout;
            cResult[9] = animatedStyle;
            cResult[10] = tmp20;
            tmp17 = tmp20;
          }
          if (isActivityParticipant) {
            const intl3 = tmp(tmp2[24]).intl;
            stringResult = intl3.string(tmp(tmp2[24]).t["3ejJer"]);
          } else if (null != targetName) {
            const intl2 = tmp(tmp2[24]).intl;
            const obj4 = { targetName };
            stringResult = intl2.formatToPlainString(tmp(tmp2[24]).t.OervdV, obj4);
          } else {
            const intl = tmp(tmp2[24]).intl;
            stringResult = intl.string(tmp(tmp2[24]).t["77cRN4"]);
          }
          let num2 = 3;
          cResult[3] = isActivityParticipant;
          cResult[4] = targetName;
          cResult[5] = stringResult;
          tmp14 = stringResult;
        }
        const fn = function o() {
          setFocused(participantId);
        };
        cResult[0] = participantId;
        cResult[1] = setFocused;
        cResult[2] = fn;
        tmp6 = fn;
      }
    : (participantId) => {
        let isActivityParticipant;
        let layout;
        let right;
        let stringResult;
        participantId = participantId.participantId;
        const controlsHidden = participantId.controlsHidden;
        const targetName = participantId.targetName;
        let setFocused;
        let mode;
        ({ isActivityParticipant, layout } = participantId);
        const context = mode.useContext(controlsHidden(setFocused[18]));
        setFocused = context.setFocused;
        mode = context.mode;
        const items = [setFocused, participantId];
        const callback = mode.useCallback(() => {
          setFocused(participantId);
        }, items);
        const fn = function _() {
          let num2;
          let tmp4;
          let withSpring;
          const value = controlsHidden.get() || mode.get() === constants.PIP;
          if (value) {
            tmp4 = -c21 + 2 * right;
          } else {
            tmp4 = right;
          }
          const rect = { position: "absolute", top: tmp4, right, opacity: withSpring(num2, c9), zIndex: 1 };
          num2 = 1;
          withSpring = spring.withSpring;
          spring;
          if (value) {
            num2 = 0;
          }
          return rect;
        };
        const obj = participantId(setFocused[12]);
        fn.__closure = {
          controlsHidden,
          mode,
          VoicePanelModes,
          FLOATING_BAR_HEIGHT: v28,
          VOICE_PANEL_CARD_INNER_PADDING,
          withSpring: participantId(setFocused[30]).withSpring,
          MODE_CHANGE_PHYSICS,
        };
        fn.__workletHash = 14668928149603;
        fn.__initData = __initData6;
        ({
          controlsHidden,
          mode,
          VoicePanelModes,
          FLOATING_BAR_HEIGHT: v28,
          VOICE_PANEL_CARD_INNER_PADDING,
          withSpring: participantId(setFocused[30]).withSpring,
          MODE_CHANGE_PHYSICS,
        });
        const animatedStyle = obj.useAnimatedStyle(fn);
        if (isActivityParticipant) {
          const intl3 = tmp5(tmp2[24]).intl;
          stringResult = intl3.string(tmp5(tmp2[24]).t["3ejJer"]);
        } else if (null != targetName) {
          const intl2 = tmp5(tmp2[24]).intl;
          const obj3 = { targetName };
          stringResult = intl2.formatToPlainString(tmp5(tmp2[24]).t.OervdV, obj3);
        } else {
          const intl = tmp5(tmp2[24]).intl;
          stringResult = intl.string(tmp5(tmp2[24]).t["77cRN4"]);
        }
        const obj4 = {
          icon: controlsHidden(setFocused[37]),
          onPress: callback,
          style: animatedStyle,
          layout,
          accessibilityLabel: stringResult,
        };
        const tmpResult = controlsHidden(setFocused[35]);
        return closure_16(tmpResult, obj4);
      },
);
const RING_PHYSICS = { mass: 0.1, stiffness: 400, overshootClamping: true };
const __initData7 = {
  code: "function VoicePanelCardFloatingControlsTsx7(){const{flip}=this.__closure;return flip.get();}",
};
const __initData8 = {
  code: 'function VoicePanelCardFloatingControlsTsx8(flipped){const{angle,withSpring,getRandomNumberInRange,RING_PHYSICS,flip}=this.__closure;if(flipped){angle.set(withSpring(getRandomNumberInRange(35,55),RING_PHYSICS,"respect-motion-settings",function(finished){if(!finished){return;}flip.set(!flip.get());}));}else{angle.set(withSpring(getRandomNumberInRange(-10,10),RING_PHYSICS,"respect-motion-settings",function(finished_0){if(!finished_0){return;}flip.set(!flip.get());}));}}',
};
let closure_38 = {
  code: "function VoicePanelCardFloatingControlsTsx9(finished){const{flip}=this.__closure;if(!finished){return;}flip.set(!flip.get());}",
};
let closure_39 = {
  code: "function VoicePanelCardFloatingControlsTsx10(finished_0){const{flip}=this.__closure;if(!finished_0){return;}flip.set(!flip.get());}",
};
const __initData9 = {
  code: "function VoicePanelCardFloatingControlsTsx11(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{top:controlsHidden.get()?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):0};}",
};
const __initData10 = {
  code: 'function VoicePanelCardFloatingControlsTsx12(){const{angle}=this.__closure;return{transform:[{rotate:angle.get()+"deg"}]};}',
};
const __initData11 = {
  code: "function VoicePanelCardFloatingControlsTsx13(){const{flip}=this.__closure;return flip.get();}",
};
const __initData12 = {
  code: "function VoicePanelCardFloatingControlsTsx14(flipped){const{angle,withSpring,getRandomNumberInRange,RING_PHYSICS,flip}=this.__closure;if(flipped){angle.set(withSpring(getRandomNumberInRange(45-10,45+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}else{angle.set(withSpring(getRandomNumberInRange(0-10,0+10),RING_PHYSICS,'respect-motion-settings',function(finished_0){if(!finished_0)return;flip.set(!flip.get());}));}}",
};
let closure_44 = {
  code: "function VoicePanelCardFloatingControlsTsx15(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}",
};
let closure_45 = {
  code: "function VoicePanelCardFloatingControlsTsx16(finished_0){const{flip}=this.__closure;if(!finished_0)return;flip.set(!flip.get());}",
};
const __initData13 = {
  code: "function VoicePanelCardFloatingControlsTsx17(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{top:controlsHidden.get()?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):0};}",
};
const __initData14 = {
  code: 'function VoicePanelCardFloatingControlsTsx18(){const{angle}=this.__closure;return{transform:[{rotate:angle.get()+"deg"}]};}',
};
const memo3 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_48 = memo3(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (controlsHidden) => {
        let sharedValue1;
        let tmp7;
        let tmp8;
        let useReducedMotion;
        let tmp = controlsHidden;
        let tmp2 = sharedValue1;
        let obj = controlsHidden(sharedValue1[17]);
        const cResult = obj.c(13);
        controlsHidden = controlsHidden.controlsHidden;
        let tmp4 = closure_22();
        let obj2 = controlsHidden(sharedValue1[12]);
        const sharedValue = obj2.useSharedValue(true);
        const obj3 = controlsHidden(sharedValue1[12]);
        sharedValue1 = obj3.useSharedValue(0);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [AccessibilityStore];
          let fn = function o() {
            return useReducedMotion.useReducedMotion;
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp7 = items;
          tmp8 = fn;
        } else {
          [tmp7, tmp8] = cResult;
        }
        const tmpResult = tmp(tmp2[38]);
        const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
        const tmpResult4 = tmp(tmp2[12]);
        class C {
          constructor() {
            return sharedValue.get();
          }
        }
        C.__closure = { flip: sharedValue };
        C.__workletHash = 12043935058158;
        C.__initData = __initData7;
        let fn2 = function p(arg0) {
          const withSpring = spring.withSpring;
          const tmp3 = getRandomNumberInRangeDefault;
          const tmp4 = arg0;
          if (tmp4) {
            const fn2 = function o(arg0) {
              const tmp = arg0;
              if (tmp) {
                const result = sharedValue.set(!sharedValue.get());
              }
            };
            const obj2 = { flip: sharedValue };
            fn2.__closure = obj2;
            fn2.__workletHash = 12072622457709;
            fn2.__initData = __initData;
            let result = set(withSpring(tmp3(35, 55), RING_PHYSICS, "respect-motion-settings", fn2));
          } else {
            const fn = function n(arg0) {
              const tmp = arg0;
              if (tmp) {
                const result = sharedValue.set(!sharedValue.get());
              }
            };
            const obj = { flip: sharedValue };
            fn.__closure = obj;
            fn.__workletHash = 3548834534549;
            fn.__initData = __initData2;
            const result1 = set(withSpring(tmp3(-10, 10), RING_PHYSICS, "respect-motion-settings", fn));
          }
        };
        fn2.__closure = {
          angle: sharedValue1,
          withSpring: tmp(tmp2[30]).withSpring,
          getRandomNumberInRange: sharedValue(tmp2[39]),
          RING_PHYSICS,
          flip: sharedValue,
        };
        fn2.__workletHash = 9806064842498;
        fn2.__initData = __initData8;
        ({
          angle: sharedValue1,
          withSpring: tmp(tmp2[30]).withSpring,
          getRandomNumberInRange: sharedValue(tmp2[39]),
          RING_PHYSICS,
          flip: sharedValue,
        });
        const animatedReaction = tmpResult4.useAnimatedReaction(C, fn2);
        const tmpResult5 = tmp(tmp2[12]);
        class S {
          constructor() {
            let top = 0;
            if (controlsHidden.get()) {
              top = -c21 + 2 * VOICE_PANEL_CARD_INNER_PADDING;
            }
            return { top };
          }
        }
        const obj5 = { controlsHidden, FLOATING_BAR_HEIGHT: v28, VOICE_PANEL_CARD_INNER_PADDING };
        S.__closure = obj5;
        S.__workletHash = 1062668091812;
        S.__initData = __initData9;
        const animatedStyle = tmpResult5.useAnimatedStyle(S);
        tmp(tmp2[12]);
        class E {
          constructor() {
            let items;
            const obj = { transform: items };
            items = [{ rotate: "" + sharedValue1.get() + "deg" }];
            ({ rotate: "" + sharedValue1.get() + "deg" });
            return obj;
          }
        }
        E.__closure = { angle: sharedValue1 };
        E.__workletHash = 5604667206084;
        E.__initData = __initData10;
        if (cResult[2] === tmp4.ringingIconContainer) {
          let tmp16;
          let tmp18;
          if (cResult[3] === animatedStyle) {
            tmp16 = cResult[4];
          }
          if (cResult[5] !== tmp4.ringingIcon) {
            const obj6 = {
              source: sharedValue(tmp2[40]),
              size: tmp(tmp2[13]).IconSizes.SMALL_20,
              style: tmp4.ringingIcon,
            };
            const Icon = tmp(tmp2[13]).Icon;
            const tmp20 = closure_16(Icon, obj6);
            cResult[5] = tmp4.ringingIcon;
            cResult[6] = tmp20;
            tmp18 = tmp20;
          } else {
            tmp18 = cResult[6];
          }
          if (cResult[7] === (!stateFromStores && tmp15)) {
            let tmp21;
            if (cResult[8] === tmp18) {
              tmp21 = cResult[9];
            }
            if (cResult[10] === tmp16) {
              let tmp24;
              if (cResult[11] === tmp21) {
                tmp24 = cResult[12];
              }
              return tmp24;
            }
            const obj7 = { style: tmp16, children: tmp21 };
            const tmp26 = closure_16(sharedValue(tmp2[41]), obj7);
            cResult[10] = tmp16;
            cResult[11] = tmp21;
            cResult[12] = tmp26;
            tmp24 = tmp26;
          }
          const obj8 = { style: !stateFromStores && tmp15, pointerEvents: "none", children: tmp18 };
          const tmp23 = closure_16(sharedValue(tmp2[41]), obj8);
          cResult[7] = !stateFromStores && tmp15;
          cResult[8] = tmp18;
          cResult[9] = tmp23;
          tmp21 = tmp23;
        }
        const items1 = [animatedStyle, tmp4.ringingIconContainer];
        cResult[2] = tmp4.ringingIconContainer;
        cResult[3] = animatedStyle;
        cResult[4] = items1;
        tmp16 = items1;
      }
    : (controlsHidden) => {
        let Icon;
        let items1;
        let obj10;
        let obj11;
        let tmp13;
        let useReducedMotion;
        controlsHidden = controlsHidden.controlsHidden;
        let sharedValue1;
        let tmp = closure_22();
        let tmp2 = controlsHidden;
        let tmp3 = sharedValue1;
        let obj = controlsHidden(sharedValue1[12]);
        const sharedValue = obj.useSharedValue(true);
        let obj2 = controlsHidden(sharedValue1[12]);
        sharedValue1 = obj2.useSharedValue(0);
        let items = [AccessibilityStore];
        const obj3 = controlsHidden(sharedValue1[38]);
        const stateFromStores = obj3.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
        let fn = function o() {
          return sharedValue.get();
        };
        fn.__closure = { flip: sharedValue };
        fn.__workletHash = 12713167779771;
        fn.__initData = __initData11;
        let fn2 = function n(arg0) {
          const withSpring = spring.withSpring;
          const tmp3 = getRandomNumberInRangeDefault;
          const tmp4 = arg0;
          if (tmp4) {
            const fn2 = function o(arg0) {
              const tmp = arg0;
              if (tmp) {
                const result = sharedValue.set(!sharedValue.get());
              }
            };
            const obj2 = { flip: sharedValue };
            fn2.__closure = obj2;
            fn2.__workletHash = 6186600894966;
            fn2.__initData = __initData;
            let result = set(withSpring(tmp3(35, 55), RING_PHYSICS, "respect-motion-settings", fn2));
          } else {
            const fn = function n(arg0) {
              const tmp = arg0;
              if (tmp) {
                const result = sharedValue.set(!sharedValue.get());
              }
            };
            const obj = { flip: sharedValue };
            fn.__closure = obj;
            fn.__workletHash = 8631692281909;
            fn.__initData = __initData2;
            const result1 = set(withSpring(tmp3(-10, 10), RING_PHYSICS, "respect-motion-settings", fn));
          }
        };
        const obj4 = controlsHidden(sharedValue1[12]);
        fn2.__closure = {
          angle: sharedValue1,
          withSpring: controlsHidden(sharedValue1[30]).withSpring,
          getRandomNumberInRange: sharedValue(sharedValue1[39]),
          RING_PHYSICS,
          flip: sharedValue,
        };
        fn2.__workletHash = 5752929555156;
        fn2.__initData = __initData12;
        ({
          angle: sharedValue1,
          withSpring: controlsHidden(sharedValue1[30]).withSpring,
          getRandomNumberInRange: sharedValue(sharedValue1[39]),
          RING_PHYSICS,
          flip: sharedValue,
        });
        const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
        const obj6 = controlsHidden(sharedValue1[12]);
        const tmp7 = sharedValue;
        class I {
          constructor() {
            let top = 0;
            if (controlsHidden.get()) {
              top = -c21 + 2 * VOICE_PANEL_CARD_INNER_PADDING;
            }
            return { top };
          }
        }
        const obj7 = { controlsHidden, FLOATING_BAR_HEIGHT: v28, VOICE_PANEL_CARD_INNER_PADDING };
        I.__closure = obj7;
        I.__workletHash = 15571042858594;
        I.__initData = __initData13;
        const animatedStyle = obj6.useAnimatedStyle(I);
        const fn3 = function p() {
          let items;
          const obj = { transform: items };
          items = [{ rotate: "" + sharedValue1.get() + "deg" }];
          ({ rotate: "" + sharedValue1.get() + "deg" });
          return obj;
        };
        fn3.__closure = { angle: sharedValue1 };
        fn3.__workletHash = 12957595468302;
        fn3.__initData = __initData14;
        const obj8 = controlsHidden(sharedValue1[12]);
        const animatedStyle1 = obj8.useAnimatedStyle(fn3);
        const obj9 = { style: items1, children: closure_16(tmp13, obj10) };
        items1 = [animatedStyle, tmp.ringingIconContainer];
        let tmp14 = !stateFromStores;
        const tmp12 = sharedValue(sharedValue1[41]);
        tmp13 = sharedValue(sharedValue1[41]);
        if (!stateFromStores) {
          tmp14 = animatedStyle1;
        }
        obj10 = { style: tmp14, pointerEvents: "none", children: closure_16(Icon, obj11) };
        obj11 = { source: tmp7(tmp3[40]), size: tmp2(tmp3[13]).IconSizes.SMALL_20, style: tmp.ringingIcon };
        Icon = tmp2(tmp3[13]).Icon;
        return closure_16(tmp12, obj9);
      },
);
const memo4 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_49 = memo4(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (controlsHidden) => {
        let obj3;
        let tmp4;
        const obj = react2;
        const cResult = obj.c(2);
        controlsHidden = controlsHidden.controlsHidden;
        if (cResult[0] !== controlsHidden) {
          const obj2 = { theme: ThemeTypes.LIGHT, children: authStore3(closure_48, obj3) };
          obj3 = { controlsHidden };
          const ThemeContextProvider = native2.ThemeContextProvider;
          const tmp8 = authStore3(ThemeContextProvider, obj2);
          cResult[0] = controlsHidden;
          cResult[1] = tmp8;
          tmp4 = tmp8;
        } else {
          tmp4 = cResult[1];
        }
        return tmp4;
      }
    : (controlsHidden) => {
        controlsHidden = controlsHidden.controlsHidden;
        const obj = { theme: ThemeTypes.LIGHT, children: authStore3(closure_48, { controlsHidden }) };
        const ThemeContextProvider = native2.ThemeContextProvider;
        return authStore3(ThemeContextProvider, obj);
      },
);
const memo5 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_50 = memo5(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let closure_1;
        let gameRecord;
        let ref;
        let textColor;
        let tmp6;
        let userId;
        const obj = gameRecord(576);
        const cResult = obj.c(13);
        ({ userId, textColor } = arg0);
        const first = usePlayingGameActivitiesDefault(userId, arg0.guildId)[0];
        let application_id;
        if (first != null) {
          application_id = first.application_id;
        }
        if (cResult[0] !== application_id) {
          const obj2 = { applicationId: application_id };
          cResult[0] = application_id;
          cResult[1] = obj2;
          tmp6 = obj2;
        } else {
          tmp6 = cResult[1];
        }
        gameRecord = tmp3(8356)(tmp6).gameRecord;
        let tmp7 = tmp3(5903)(gameRecord);
        importDefault = tmp7;
        dependencyMap = react.useRef(false);
        if (cResult[2] === gameRecord) {
          let tmp8;
          let tmp9;
          let tmp11;
          if (cResult[3] === tmp7) {
            tmp8 = cResult[4];
            tmp9 = cResult[5];
          }
          const effect = react.useEffect(tmp8, tmp9);
          if (null != gameRecord) {
            if (!tmp7) {
              if (cResult[9] === gameRecord) {
                if (cResult[10] === textColor) {
                  if (cResult[11] === userId) {
                    tmp11 = cResult[12];
                  }
                }
              }
              const obj4 = { game: gameRecord, userId, textColor };
              const tmp13 = closure_16(GameTagChipletDefault, obj4);
              cResult[9] = gameRecord;
              cResult[10] = textColor;
              cResult[11] = userId;
              cResult[12] = tmp13;
              tmp11 = tmp13;
            }
            return tmp11;
          }
          if (cResult[6] === textColor) {
            let tmp14;
            if (cResult[7] === userId) {
              tmp14 = cResult[8];
            }
            tmp11 = tmp14;
          }
          const obj5 = { userId, textColor };
          const tmp16 = closure_16(GuildTagDefault, obj5);
          cResult[6] = textColor;
          cResult[7] = userId;
          cResult[8] = tmp16;
          tmp14 = tmp16;
        }
        const fn = function p() {
          const current = ref.current;
          const tmp2 = !current && null != gameRecord && closure_1;
          if (tmp2) {
            const trackEntryPoint = useShouldOpenGameProfileModal.trackEntryPoint;
            const id = gameRecord.id;
            const items = [useShouldOpenGameProfileModal.RejectionReason.Obscured];
            trackEntryPoint(false, id, items, GameProfileAnalyticUtils.GameProfileSources.CallTile);
            ref.current = true;
          }
        };
        let items = [gameRecord, tmp7];
        cResult[2] = gameRecord;
        cResult[3] = tmp7;
        cResult[4] = fn;
        cResult[5] = items;
        tmp9 = items;
        tmp8 = fn;
      }
    : (arg0) => {
        let closure_1;
        let ref;
        let textColor;
        let userId;
        ({ userId, textColor } = arg0);
        let gameRecord;
        importDefault = undefined;
        dependencyMap = undefined;
        let tmp2 = dependencyMap;
        const first = usePlayingGameActivitiesDefault(userId, arg0.guildId)[0];
        let application_id;
        const tmp4 = useResolveGameForProfileDefault;
        if (first != null) {
          application_id = first.application_id;
        }
        gameRecord = tmp4({ applicationId: application_id }).gameRecord;
        const tmp6 = useGameProfileObscuredDefault(gameRecord);
        importDefault = tmp6;
        dependencyMap = react.useRef(false);
        let items = [gameRecord, tmp6];
        const effect = react.useEffect(() => {
          const current = ref.current;
          const tmp2 = !current && null != gameRecord && closure_1;
          if (tmp2) {
            const trackEntryPoint = useShouldOpenGameProfileModal.trackEntryPoint;
            const id = gameRecord.id;
            const items = [useShouldOpenGameProfileModal.RejectionReason.Obscured];
            trackEntryPoint(false, id, items, GameProfileAnalyticUtils.GameProfileSources.CallTile);
            ref.current = true;
          }
        }, items);
        if (null != gameRecord) {
          let tmp9;
          if (!tmp6) {
            const obj = { game: gameRecord, userId, textColor };
            tmp9 = closure_16(tmp(17327), obj);
          }
          return tmp9;
        }
        tmp9 = closure_16(tmp(9409), { userId, textColor });
      },
);
const __initData15 = {
  code: "function VoicePanelCardFloatingControlsTsx19(){const{hasHiddenVisibleIcon,focused,connected,mode,VoicePanelModes,controlsHidden}=this.__closure;const showIcon=hasHiddenVisibleIcon&&focused.get()==null;return!connected.get()||mode.get()===VoicePanelModes.PIP||!showIcon&&controlsHidden.get();}",
};
const __initData16 = {
  code: "function VoicePanelCardFloatingControlsTsx20(){const{isPillHidden}=this.__closure;return isPillHidden.get();}",
};
const __initData17 = {
  code: "function VoicePanelCardFloatingControlsTsx21(hidden){const{pillOpacity,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;pillOpacity.set(withSpring(hidden?0:1,MODE_CHANGE_PHYSICS));}",
};
const __initData18 = {
  code: 'function VoicePanelCardFloatingControlsTsx22(){const{pillOpacity,isPillHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{opacity:pillOpacity.get(),top:isPillHidden.get()?FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING:0,height:FLOATING_BAR_HEIGHT,pointerEvents:isPillHidden.get()?"none":"auto"};}',
};
const __initData19 = {
  code: 'function VoicePanelCardFloatingControlsTsx23(){const{connected,isScreenReaderEnabled,controlsSpecs,VoicePanelControlsModes,hasIcon,GAP}=this.__closure;const hidden_0=!connected.get()||!isScreenReaderEnabled&&controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&hasIcon;const shouldCollapseWidth=hidden_0&&hasIcon;return{width:shouldCollapseWidth?0:"auto",marginRight:hidden_0?-GAP:0};}',
};
const __initData20 = {
  code: "function VoicePanelCardFloatingControlsTsx24(){const{hasHiddenVisibleIcon,focused,connected,mode,VoicePanelModes,controlsHidden}=this.__closure;const showIcon=hasHiddenVisibleIcon&&focused.get()==null;return!connected.get()||mode.get()===VoicePanelModes.PIP||!showIcon&&controlsHidden.get();}",
};
const __initData21 = {
  code: "function VoicePanelCardFloatingControlsTsx25(){const{isPillHidden}=this.__closure;return isPillHidden.get();}",
};
const __initData22 = {
  code: "function VoicePanelCardFloatingControlsTsx26(hidden){const{pillOpacity,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;pillOpacity.set(withSpring(hidden?0:1,MODE_CHANGE_PHYSICS));}",
};
const __initData23 = {
  code: "function VoicePanelCardFloatingControlsTsx27(){const{pillOpacity,isPillHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{opacity:pillOpacity.get(),top:isPillHidden.get()?FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING:0,height:FLOATING_BAR_HEIGHT,pointerEvents:isPillHidden.get()?'none':'auto'};}",
};
const __initData24 = {
  code: "function VoicePanelCardFloatingControlsTsx28(){const{connected,isScreenReaderEnabled,controlsSpecs,VoicePanelControlsModes,hasIcon,GAP}=this.__closure;const hidden_0=!connected.get()||!isScreenReaderEnabled&&controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&hasIcon;const shouldCollapseWidth=hidden_0&&hasIcon;return{width:shouldCollapseWidth?0:'auto',marginRight:hidden_0?-GAP:0};}",
};
const memo6 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_61 = memo6(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (controlsHidden) => {
        let channelId;
        let closure_9;
        let controlsSpecs;
        let focused;
        let guildId;
        let intl;
        let label;
        let layout;
        let participant;
        let tmp = controlsHidden;
        let tmp2 = controlsSpecs;
        let obj = controlsHidden(controlsSpecs[17]);
        const cResult = obj.c(58);
        controlsHidden = controlsHidden.controlsHidden;
        ({ label, layout, participant } = controlsHidden);
        const context = focused.useContext(channelId(controlsSpecs[18]));
        ({ guildId, channelId } = context);
        controlsSpecs = context.controlsSpecs;
        focused = context.focused;
        const connected = context.connected;
        const mode = context.mode;
        const obj2 = controlsHidden(controlsSpecs[50]);
        const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
        const tmp7 = closure_22();
        let id;
        const obj3 = controlsHidden(controlsSpecs[31]);
        if (obj3.isStableParticipantWithUser(participant)) {
          id = participant.user.id;
        }
        const analyticsLocations = channelId(tmp2[51])().analyticsLocations;
        if (cResult[0] === analyticsLocations) {
          if (cResult[1] === channelId) {
            if (cResult[4] === channelId) {
              let tmp10;
              if (cResult[5] === id) {
                tmp10 = cResult[6];
              }
              const tmpResult = tmp(tmp2[53]);
              const isUserSecureFramesVerified = tmpResult.useIsUserSecureFramesVerified(tmp10);
              const type = participant.type;
              let id1;
              const tmp4Result = channelId(tmp2[23]);
              const tmpResult8 = tmp(tmp2[31]);
              if (tmpResult8.isStableParticipantWithUser(participant)) {
                id1 = participant.user.id;
              }
              const tmp4ResultResult = tmp4Result(type, id1, guildId, channelId);
              if (cResult[7] === guildId) {
                let tmp18;
                let tmp20;
                let tmp40;
                if (cResult[8] === id) {
                  tmp18 = cResult[9];
                }
                const tmp19 = channelId(tmp2[54])(tmp18);
                if (cResult[10] !== tmp19) {
                  const obj4 = { displayNameStyles: tmp19 };
                  cResult[10] = tmp19;
                  cResult[11] = obj4;
                  tmp20 = obj4;
                } else {
                  tmp20 = cResult[11];
                }
                const tmpResult9 = tmp(tmp2[55]);
                const displayNameStylesFont = tmpResult9.useDisplayNameStylesFont(tmp20);
                let num9 = 1;
                MODE_CHANGE_PHYSICS = tmp22;
                const tmp23 =
                  tmp4ResultResult.filter(
                    (type) =>
                      type.type !== controlsHidden(controlsSpecs[23]).VoicePanelCardUserStateIconType.STREAM_ICON,
                  ).length >= 1;
                VoicePanelModes = tmp23;
                const tmpResult10 = tmp(tmp2[12]);
                class W {
                  constructor() {
                    const tmp = closure_10 && null == focused.get();
                    const value = connected.get();
                    let tmp5 = !value;
                    if (value) {
                      tmp5 = mode.get() === constants.PIP;
                    }
                    if (!tmp5) {
                      const value2 = !tmp && controlsHidden.get();
                      tmp5 = value2;
                    }
                    return tmp5;
                  }
                }
                const obj5 = { hasHiddenVisibleIcon: tmp23, focused, connected, mode, VoicePanelModes, controlsHidden };
                W.__closure = obj5;
                W.__workletHash = 12564689742086;
                W.__initData = __initData15;
                const derivedValue = tmpResult10.useDerivedValue(W);
                const useSharedValue = tmp(tmp2[12]).useSharedValue;
                tmp(tmp2[12]);
                if (derivedValue.get()) {
                  num9 = 0;
                }
                const sharedValue = useSharedValue(num9);
                const fn2 = function j() {
                  return derivedValue.get();
                };
                const obj6 = { isPillHidden: derivedValue };
                fn2.__closure = obj6;
                fn2.__workletHash = 13352649643291;
                fn2.__initData = __initData16;
                const fn3 = function z(arg0) {
                  let num = 1;
                  set = sharedValue.set;
                  const withSpring = spring.withSpring;
                  spring;
                  if (arg0) {
                    num = 0;
                  }
                  const result = set(withSpring(num, c9));
                };
                const obj7 = { pillOpacity: sharedValue, withSpring: tmp(tmp2[30]).withSpring, MODE_CHANGE_PHYSICS };
                const useAnimatedReaction = tmp(tmp2[12]).useAnimatedReaction;
                tmp(tmp2[12]);
                fn3.__closure = obj7;
                fn3.__workletHash = 15019245300237;
                fn3.__initData = __initData17;
                const animatedReaction = useAnimatedReaction(fn2, fn3);
                const tmpResult13 = tmp(tmp2[12]);
                class Z {
                  constructor() {
                    let num;
                    let str;
                    const obj = { opacity: sharedValue.get(), top: num, height, pointerEvents: str };
                    num = 0;
                    if (derivedValue.get()) {
                      num = height + VOICE_PANEL_CARD_INNER_PADDING;
                    }
                    str = "auto";
                    if (derivedValue.get()) {
                      str = "none";
                    }
                    return obj;
                  }
                }
                const obj8 = {
                  pillOpacity: sharedValue,
                  isPillHidden: derivedValue,
                  FLOATING_BAR_HEIGHT: v28,
                  VOICE_PANEL_CARD_INNER_PADDING: sharedValue,
                };
                Z.__closure = obj8;
                Z.__workletHash = 11091839394591;
                Z.__initData = __initData18;
                const animatedStyle = tmpResult13.useAnimatedStyle(Z);
                const fn4 = function $() {
                  let num2;
                  const value = connected.get();
                  let tmp2 = !value;
                  if (value) {
                    tmp2 =
                      !isScreenReaderEnabled &&
                      controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN &&
                      closure_9;
                    const tmp4 =
                      !isScreenReaderEnabled &&
                      controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN &&
                      closure_9;
                  }
                  let num = "auto";
                  if (tmp2) {
                    num = "auto";
                    if (closure_9) {
                      num = 0;
                    }
                  }
                  const obj = { width: num, marginRight: num2 };
                  num2 = 0;
                  if (tmp2) {
                    num2 = -4;
                  }
                  return obj;
                };
                const obj9 = {
                  connected,
                  isScreenReaderEnabled,
                  controlsSpecs,
                  VoicePanelControlsModes: derivedValue,
                  hasIcon: tmp4ResultResult.length >= 1,
                  GAP: 4,
                };
                fn4.__closure = obj9;
                fn4.__workletHash = 2330440220925;
                fn4.__initData = __initData19;
                const tmpResult14 = tmp(tmp2[12]);
                const animatedStyle1 = tmpResult14.useAnimatedStyle(fn4);
                if (cResult[12] !== tmp7.labelPositionContainer) {
                  const items = [tmp7.labelPositionContainer];
                  cResult[12] = tmp7.labelPositionContainer;
                  cResult[13] = items;
                  tmp40 = items;
                } else {
                  tmp40 = cResult[13];
                }
                if (cResult[14] === animatedStyle) {
                  let tmp43;
                  if (cResult[15] === tmp7.labelOuterContainer) {
                    tmp43 = cResult[16];
                  }
                  if (cResult[17] === tmp4ResultResult) {
                    if (cResult[20] === animatedStyle1) {
                      let tmp49;
                      if (cResult[23] !== displayNameStylesFont) {
                        let tmp50 = null != displayNameStylesFont;
                        if (tmp50) {
                          tmp50 = { fontFamily: displayNameStylesFont };
                          const obj10 = { fontFamily: displayNameStylesFont };
                        }
                        cResult[23] = displayNameStylesFont;
                        cResult[24] = tmp50;
                        tmp49 = tmp50;
                      } else {
                        tmp49 = cResult[24];
                      }
                      if (cResult[25] === tmp7.floatingText) {
                        let tmp51;
                        if (cResult[26] === tmp49) {
                          tmp51 = cResult[27];
                        }
                        if (cResult[28] === tmp4ResultResult) {
                          if (cResult[31] === label) {
                            if (cResult[32] === tmp51) {
                              let tmp55;
                              if (cResult[33] === tmp52) {
                                tmp55 = cResult[34];
                              }
                              if (cResult[35] === guildId) {
                                if (cResult[36] === participant.type) {
                                  let tmp58;
                                  if (cResult[37] === participant.user) {
                                    tmp58 = cResult[38];
                                  }
                                  if (cResult[39] === isUserSecureFramesVerified) {
                                    let tmp63;
                                    if (cResult[40] === tmp7.secureFramesIcon) {
                                      tmp63 = cResult[41];
                                    }
                                    if (cResult[42] === layout) {
                                      if (cResult[43] === tmp55) {
                                        if (cResult[44] === tmp58) {
                                          if (cResult[45] === tmp63) {
                                            let tmp66;
                                            if (cResult[46] === tmp48) {
                                              tmp66 = cResult[47];
                                            }
                                            if (cResult[48] === layout) {
                                              if (cResult[49] === tmp66) {
                                                if (cResult[50] === tmp42) {
                                                  if (cResult[51] === tmp43) {
                                                    let tmp69;
                                                    if (cResult[52] === tmp44) {
                                                      tmp69 = cResult[53];
                                                    }
                                                    if (cResult[54] === tmp40) {
                                                      if (cResult[55] === layout) {
                                                        let tmp73;
                                                        if (cResult[56] === tmp69) {
                                                          tmp73 = cResult[57];
                                                        }
                                                        return tmp73;
                                                      }
                                                    }
                                                    const obj11 = {
                                                      style: tmp40,
                                                      layout,
                                                      pointerEvents: "box-none",
                                                      children: tmp69,
                                                    };
                                                    const tmp75 = closure_16(channelId(tmp2[41]), obj11);
                                                    cResult[54] = tmp40;
                                                    class W {
                                                      constructor() {
                                                        const tmp = closure_10 && null == focused.get();
                                                        const value = connected.get();
                                                        let tmp5 = !value;
                                                        if (value) {
                                                          tmp5 = mode.get() === constants.PIP;
                                                        }
                                                        if (!tmp5) {
                                                          const value2 = !tmp && controlsHidden.get();
                                                          tmp5 = value2;
                                                        }
                                                        return tmp5;
                                                      }
                                                    }
                                                    cResult[56] = tmp69;
                                                    cResult[57] = tmp75;
                                                    tmp73 = tmp75;
                                                  }
                                                }
                                              }
                                            }
                                            const items1 = [tmp44, tmp66];
                                            const obj12 = { onPress: tmp42, style: tmp43, layout, children: null };
                                            class W {
                                              constructor() {
                                                const tmp = closure_10 && null == focused.get();
                                                const value = connected.get();
                                                let tmp5 = !value;
                                                if (value) {
                                                  tmp5 = mode.get() === constants.PIP;
                                                }
                                                if (!tmp5) {
                                                  const value2 = !tmp && controlsHidden.get();
                                                  tmp5 = value2;
                                                }
                                                return tmp5;
                                              }
                                            }
                                            const tmp72 = closure_17(closure_20, obj12);
                                            cResult[48] = layout;
                                            cResult[49] = tmp66;
                                            cResult[50] = tmp42;
                                            cResult[51] = tmp43;
                                            cResult[52] = tmp44;
                                            cResult[53] = tmp72;
                                            tmp69 = tmp72;
                                          }
                                        }
                                      }
                                    }
                                    const items2 = [tmp55, tmp58, tmp63];
                                    class W {
                                      constructor() {
                                        const tmp = closure_10 && null == focused.get();
                                        const value = connected.get();
                                        let tmp5 = !value;
                                        if (value) {
                                          tmp5 = mode.get() === constants.PIP;
                                        }
                                        if (!tmp5) {
                                          const value2 = !tmp && controlsHidden.get();
                                          tmp5 = value2;
                                        }
                                        return tmp5;
                                      }
                                    }
                                    cResult[42] = layout;
                                    cResult[43] = tmp55;
                                    cResult[44] = tmp58;
                                    cResult[45] = tmp63;
                                    cResult[46] = tmp48;
                                    cResult[47] = tmp68;
                                    tmp66 = tmp68;
                                  }
                                  let tmp64 = isUserSecureFramesVerified;
                                  if (tmp64) {
                                    const obj14 = {
                                      style: tmp7.secureFramesIcon,
                                      size: "xs",
                                      accessibilityLabel: intl.string(tmp(tmp2[24]).t.mR9cf3),
                                    };
                                    const ShieldLockIcon = tmp(tmp2[57]).ShieldLockIcon;
                                    intl = tmp(tmp2[24]).intl;
                                    tmp64 = closure_16(ShieldLockIcon, obj14);
                                  }
                                  cResult[39] = isUserSecureFramesVerified;
                                  cResult[40] = tmp7.secureFramesIcon;
                                  cResult[41] = tmp64;
                                  tmp63 = tmp64;
                                }
                              }
                              let tmp60 = participant.type === constants.USER;
                              if (tmp60) {
                                const obj15 = { userId: participant.user.id, guildId, textColor: "text-overlay-light" };
                                tmp60 = closure_16(closure_50, obj15);
                              }
                              cResult[35] = guildId;
                              cResult[36] = participant.type;
                              cResult[37] = participant.user;
                              class W {
                                constructor() {
                                  const tmp = closure_10 && null == focused.get();
                                  const value = connected.get();
                                  let tmp5 = !value;
                                  if (value) {
                                    tmp5 = mode.get() === constants.PIP;
                                  }
                                  if (!tmp5) {
                                    const value2 = !tmp && controlsHidden.get();
                                    tmp5 = value2;
                                  }
                                  return tmp5;
                                }
                              }
                              cResult[38] = tmp60;
                              tmp58 = tmp60;
                            }
                          }
                          const obj16 = {
                            variant: "heading-sm/semibold",
                            color: "text-overlay-light",
                            lineClamp: 1,
                            style: tmp51,
                            ellipsizeMode: "tail",
                            accessibilityLabel: tmp52,
                            children: label,
                          };
                          const tmp57 = closure_16(tmp(tmp2[56]).Text, obj16);
                          cResult[31] = label;
                          class W {
                            constructor() {
                              const tmp = closure_10 && null == focused.get();
                              const value = connected.get();
                              let tmp5 = !value;
                              if (value) {
                                tmp5 = mode.get() === constants.PIP;
                              }
                              if (!tmp5) {
                                const value2 = !tmp && controlsHidden.get();
                                tmp5 = value2;
                              }
                              return tmp5;
                            }
                          }
                          cResult[33] = tmp52;
                          cResult[34] = tmp57;
                          tmp55 = tmp57;
                        }
                        cResult[28] = tmp4ResultResult;
                        cResult[29] = label;
                        cResult[30] = getAccessibilityLabel(tmp4ResultResult, label);
                        getAccessibilityLabel(tmp4ResultResult, label);
                        class W {
                          constructor() {
                            const tmp = closure_10 && null == focused.get();
                            const value = connected.get();
                            let tmp5 = !value;
                            if (value) {
                              tmp5 = mode.get() === constants.PIP;
                            }
                            if (!tmp5) {
                              const value2 = !tmp && controlsHidden.get();
                              tmp5 = value2;
                            }
                            return tmp5;
                          }
                        }
                      }
                      const items3 = [tmp7.floatingText, tmp49];
                      cResult[25] = tmp7.floatingText;
                      cResult[26] = tmp49;
                      class W {
                        constructor() {
                          const tmp = closure_10 && null == focused.get();
                          const value = connected.get();
                          let tmp5 = !value;
                          if (value) {
                            tmp5 = mode.get() === constants.PIP;
                          }
                          if (!tmp5) {
                            const value2 = !tmp && controlsHidden.get();
                            tmp5 = value2;
                          }
                          return tmp5;
                        }
                      }
                      tmp51 = items3;
                    }
                    const items4 = [tmp7.floatingContainer, animatedStyle1];
                    cResult[20] = animatedStyle1;
                    cResult[21] = tmp7.floatingContainer;
                    cResult[22] = items4;
                    class W {
                      constructor() {
                        const tmp = closure_10 && null == focused.get();
                        const value = connected.get();
                        let tmp5 = !value;
                        if (value) {
                          tmp5 = mode.get() === constants.PIP;
                        }
                        if (!tmp5) {
                          const value2 = !tmp && controlsHidden.get();
                          tmp5 = value2;
                        }
                        return tmp5;
                      }
                    }
                  }
                  let tmp45 = tmp4ResultResult.length > 0;
                  if (tmp45) {
                    const obj17 = {
                      style: tmp7.initialIcons,
                      children: tmp4ResultResult.map((icon) => {
                        const obj = { icon };
                        return closure_1_16(closure_1_26, obj, icon.type);
                      }),
                    };
                    const tmp4Result2 = channelId(tmp2[28]);
                    tmp45 = closure_16(tmp4Result2, obj17);
                  }
                  cResult[17] = tmp4ResultResult;
                  cResult[18] = tmp7.initialIcons;
                  cResult[19] = tmp45;
                  class W {
                    constructor() {
                      const tmp = closure_10 && null == focused.get();
                      const value = connected.get();
                      let tmp5 = !value;
                      if (value) {
                        tmp5 = mode.get() === constants.PIP;
                      }
                      if (!tmp5) {
                        const value2 = !tmp && controlsHidden.get();
                        tmp5 = value2;
                      }
                      return tmp5;
                    }
                  }
                }
                const items5 = [tmp7.labelOuterContainer, animatedStyle];
                cResult[14] = animatedStyle;
                cResult[15] = tmp7.labelOuterContainer;
                cResult[16] = items5;
                tmp43 = items5;
              }
              const obj18 = { userId: id, guildId };
              cResult[7] = guildId;
              cResult[8] = id;
              cResult[9] = obj18;
              tmp18 = obj18;
            }
            let num = 4;
            const obj19 = { userId: id, channelId };
            cResult[4] = channelId;
            let num2 = 5;
            cResult[5] = id;
            cResult[6] = obj19;
          }
        }
        const fn = function o() {
          if (null != id) {
            const obj = { userId: tmp, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
            showUserProfileActionSheetDefault(obj);
          }
        };
        cResult[0] = analyticsLocations;
        cResult[1] = channelId;
        cResult[2] = id;
        cResult[3] = fn;
      }
    : (controlsHidden) => {
        let channelId;
        let closure_9;
        let guildId;
        let intl;
        let items2;
        let items3;
        let items4;
        let items6;
        let label;
        let layout;
        let obj9;
        let participant;
        controlsHidden = controlsHidden.controlsHidden;
        ({ label, layout, participant } = controlsHidden);
        channelId = undefined;
        let controlsSpecs;
        let focused;
        let analyticsLocations;
        MODE_CHANGE_PHYSICS = undefined;
        VoicePanelModes = undefined;
        let derivedValue;
        let sharedValue;
        let obj = focused;
        let tmp = channelId;
        let tmp2 = controlsSpecs;
        const context = focused.useContext(channelId(controlsSpecs[18]));
        ({ guildId, channelId } = context);
        controlsSpecs = context.controlsSpecs;
        focused = context.focused;
        const connected = context.connected;
        const mode = context.mode;
        let tmp4 = controlsHidden;
        const obj2 = controlsHidden(controlsSpecs[50]);
        const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
        const tmp6 = closure_22();
        let id;
        const obj3 = controlsHidden(controlsSpecs[31]);
        if (obj3.isStableParticipantWithUser(participant)) {
          id = participant.user.id;
        }
        analyticsLocations = tmp(tmp2[51])().analyticsLocations;
        const items = [id, channelId, analyticsLocations];
        const callback = obj.useCallback(() => {
          if (null != id) {
            const obj = { userId: tmp, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
            showUserProfileActionSheetDefault(obj);
          }
        }, items);
        const tmp4Result = tmp4(tmp2[53]);
        let isUserSecureFramesVerified = tmp4Result.useIsUserSecureFramesVerified({ userId: id, channelId });
        const type = participant.type;
        let id1;
        const tmpResult = tmp(tmp2[23]);
        const tmp4Result8 = tmp4(tmp2[31]);
        if (tmp4Result8.isStableParticipantWithUser(participant)) {
          id1 = participant.user.id;
        }
        const tmpResultResult = tmpResult(type, id1, guildId, channelId);
        const tmp12 = tmp(tmp2[54])({ userId: id, guildId });
        const tmp4Result9 = tmp4(tmp2[55]);
        const displayNameStylesFont = tmp4Result9.useDisplayNameStylesFont({ displayNameStyles: tmp12 });
        let num = 1;
        MODE_CHANGE_PHYSICS = tmp14;
        const tmp15 =
          tmpResultResult.filter(
            (type) => type.type !== controlsHidden(controlsSpecs[23]).VoicePanelCardUserStateIconType.STREAM_ICON,
          ).length >= 1;
        VoicePanelModes = tmp15;
        const fn = function c() {
          const tmp = closure_10 && null == focused.get();
          const value = connected.get();
          let tmp5 = !value;
          if (value) {
            tmp5 = mode.get() === constants.PIP;
          }
          if (!tmp5) {
            const value2 = !tmp && controlsHidden.get();
            tmp5 = value2;
          }
          return tmp5;
        };
        const obj4 = { hasHiddenVisibleIcon: tmp15, focused, connected, mode, VoicePanelModes, controlsHidden };
        fn.__closure = obj4;
        fn.__workletHash = 7935160281192;
        fn.__initData = __initData20;
        const tmp4Result10 = tmp4(tmp2[12]);
        derivedValue = tmp4Result10.useDerivedValue(fn);
        const useSharedValue = tmp4(tmp2[12]).useSharedValue;
        tmp4(tmp2[12]);
        if (derivedValue.get()) {
          num = 0;
        }
        sharedValue = useSharedValue(num);
        const fn2 = function u() {
          return derivedValue.get();
        };
        fn2.__closure = { isPillHidden: derivedValue };
        fn2.__workletHash = 7247821634750;
        fn2.__initData = __initData21;
        const fn3 = function _(arg0) {
          let num = 1;
          set = sharedValue.set;
          const withSpring = spring.withSpring;
          spring;
          if (arg0) {
            num = 0;
          }
          const result = set(withSpring(num, c9));
        };
        const tmp4Result12 = tmp4(tmp2[12]);
        fn3.__closure = { pillOpacity: sharedValue, withSpring: tmp4(tmp2[30]).withSpring, MODE_CHANGE_PHYSICS };
        fn3.__workletHash = 1131754503018;
        fn3.__initData = __initData22;
        ({ pillOpacity: sharedValue, withSpring: tmp4(tmp2[30]).withSpring, MODE_CHANGE_PHYSICS });
        const animatedReaction = tmp4Result12.useAnimatedReaction(fn2, fn3);
        const fn4 = function j() {
          let num;
          let str;
          const obj = { opacity: sharedValue.get(), top: num, height, pointerEvents: str };
          num = 0;
          if (derivedValue.get()) {
            num = height + VOICE_PANEL_CARD_INNER_PADDING;
          }
          str = "auto";
          if (derivedValue.get()) {
            str = "none";
          }
          return obj;
        };
        const obj6 = {
          pillOpacity: sharedValue,
          isPillHidden: derivedValue,
          FLOATING_BAR_HEIGHT: v28,
          VOICE_PANEL_CARD_INNER_PADDING: sharedValue,
        };
        fn4.__closure = obj6;
        fn4.__workletHash = 12126381522874;
        fn4.__initData = __initData23;
        const tmp4Result13 = tmp4(tmp2[12]);
        const animatedStyle = tmp4Result13.useAnimatedStyle(fn4);
        const tmp4Result14 = tmp4(tmp2[12]);
        class K {
          constructor() {
            let num2;
            const value = connected.get();
            let tmp2 = !value;
            if (value) {
              tmp2 = !isScreenReaderEnabled && controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN && closure_9;
              const tmp4 =
                !isScreenReaderEnabled && controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN && closure_9;
            }
            let num = "auto";
            if (tmp2) {
              num = "auto";
              if (closure_9) {
                num = 0;
              }
            }
            const obj = { width: num, marginRight: num2 };
            num2 = 0;
            if (tmp2) {
              num2 = -4;
            }
            return obj;
          }
        }
        const obj7 = {
          connected,
          isScreenReaderEnabled,
          controlsSpecs,
          VoicePanelControlsModes: derivedValue,
          hasIcon: tmpResultResult.length >= 1,
          GAP: 4,
        };
        K.__closure = obj7;
        K.__workletHash = 9996732216246;
        K.__initData = __initData24;
        const items1 = [tmp6.labelPositionContainer];
        const animatedStyle1 = tmp4Result14.useAnimatedStyle(K);
        let tmp25;
        const obj8 = { style: items1, layout, pointerEvents: "box-none", children: closure_17(closure_20, obj9) };
        const tmpResult4 = tmp(tmp2[41]);
        if (null != id) {
          tmp25 = callback;
        }
        obj9 = { onPress: tmp25, style: items2, layout, children: items3 };
        items2 = [tmp6.labelOuterContainer, animatedStyle];
        let tmp21Result = tmpResultResult.length > 0;
        if (tmp21Result) {
          const obj10 = {
            style: tmp6.initialIcons,
            children: tmpResultResult.map((icon) => {
              const obj = { icon };
              return closure_1_16(closure_1_26, obj, icon.type);
            }),
          };
          const tmpResult5 = tmp(tmp2[28]);
          tmp21Result = closure_16(tmpResult5, obj10);
        }
        items3 = [tmp21Result];
        const obj11 = { style: items4, layout, children: items6 };
        items4 = [tmp6.floatingContainer, animatedStyle1];
        const items5 = [tmp6.floatingText];
        let tmp29 = null != displayNameStylesFont;
        const tmpResult6 = tmp(tmp2[41]);
        const Text = tmp4(tmp2[56]).Text;
        if (tmp29) {
          tmp29 = { fontFamily: displayNameStylesFont };
          const obj12 = { fontFamily: displayNameStylesFont };
        }
        items5[1] = tmp29;
        items6 = [, ,];
        const obj13 = {
          variant: "heading-sm/semibold",
          color: "text-overlay-light",
          lineClamp: 1,
          style: items5,
          ellipsizeMode: "tail",
          accessibilityLabel: getAccessibilityLabel(tmpResultResult, label),
          children: label,
        };
        items6[0] = closure_16(Text, obj13);
        let tmp21Result2 = participant.type === constants.USER;
        if (tmp21Result2) {
          const obj14 = { userId: participant.user.id, guildId, textColor: "text-overlay-light" };
          tmp21Result2 = closure_16(closure_50, obj14);
        }
        items6[1] = tmp21Result2;
        if (isUserSecureFramesVerified) {
          const obj15 = {
            style: tmp6.secureFramesIcon,
            size: "xs",
            accessibilityLabel: intl.string(tmp4(tmp2[24]).t.mR9cf3),
          };
          const ShieldLockIcon = tmp4(tmp2[57]).ShieldLockIcon;
          intl = tmp4(tmp2[24]).intl;
          isUserSecureFramesVerified = closure_16(ShieldLockIcon, obj15);
        }
        items6[2] = isUserSecureFramesVerified;
        items3[1] = closure_17(tmpResult6, obj11);
        return closure_16(tmpResult4, obj8);
      },
);
const __initData25 = {
  code: "function VoicePanelCardFloatingControlsTsx29(){const{controlsSpecs,VoicePanelControlsModes,focused,mode,VoicePanelModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN||focused.get()!=null||mode.get()===VoicePanelModes.PIP;}",
};
const __initData26 = {
  code: "function VoicePanelCardFloatingControlsTsx30(){const{controlsSpecs,VoicePanelControlsModes,focused,mode,VoicePanelModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN||focused.get()!=null||mode.get()===VoicePanelModes.PIP;}",
};
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let connected;
        let controlsSpecs;
        let focused;
        let guildId;
        let isRinging;
        let label;
        let layout;
        let participant;
        let tmp11;
        let tmp6;
        let tmp7;
        let tmpResult8;
        let obj = participant(controlsSpecs[17]);
        const cResult = obj.c(33);
        ({ label, participant } = arg0);
        ({ isRinging, layout } = arg0);
        const context = focused.useContext(guildId(controlsSpecs[18]));
        const tmp4 = guildId;
        guildId = context.guildId;
        controlsSpecs = context.controlsSpecs;
        focused = context.focused;
        const mode = context.mode;
        const channelId = context.channelId;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [RTCConnectionStore];
          const fn = function s() {
            return connected.isConnected();
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp6 = items;
          tmp7 = fn;
        } else {
          [tmp6, tmp7] = cResult;
        }
        let tmpResult = participant(tmp2[38]);
        const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
        const tmpResult5 = participant(controlsSpecs[31]);
        const tmp10 = tmpResult5.isStableParticipantWithUser(participant) && participant.isSelf;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [EmbeddedActivitiesStore, ApplicationStreamingStore];
          cResult[2] = items1;
          tmp11 = items1;
        } else {
          tmp11 = cResult[2];
        }
        if (cResult[3] === guildId) {
          let tmp14;
          if (cResult[4] === participant) {
            tmp14 = cResult[5];
          }
          const tmpResult6 = participant(controlsSpecs[38]);
          const stateFromStores1 = tmpResult6.useStateFromStores(tmp11, tmp14);
          const tmp16 = tmp4(controlsSpecs[58])(guildId, channelId, participant.id);
          const tmpResult7 = participant(controlsSpecs[12]);
          class G {
            constructor() {
              const tmp =
                controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN ||
                null != focused.get() ||
                mode.get() === constants.PIP;
              return tmp;
            }
          }
          const obj2 = { controlsSpecs, VoicePanelControlsModes, focused, mode, VoicePanelModes };
          G.__closure = obj2;
          G.__workletHash = 15157168637339;
          G.__initData = __initData25;
          const derivedValue = tmpResult7.useDerivedValue(G);
          if (cResult[6] === derivedValue) {
            if (cResult[7] === label) {
              if (cResult[8] === layout) {
                let tmp21;
                if (cResult[9] === participant) {
                  tmp21 = cResult[10];
                }
                if (cResult[11] === derivedValue) {
                  let tmp26;
                  if (cResult[12] === isRinging) {
                    tmp26 = cResult[13];
                  }
                  if (cResult[14] === derivedValue) {
                    if (cResult[15] === stateFromStores) {
                      if (cResult[16] === tmp10) {
                        if (cResult[17] === stateFromStores1) {
                          if (cResult[18] === layout) {
                            let tmp30;
                            if (cResult[19] === participant) {
                              tmp30 = cResult[20];
                            }
                            if (cResult[21] === derivedValue) {
                              if (cResult[22] === stateFromStores) {
                                if (cResult[23] === label) {
                                  if (cResult[24] === layout) {
                                    if (cResult[25] === participant) {
                                      let tmp34;
                                      if (cResult[26] === tmp16) {
                                        tmp34 = cResult[27];
                                      }
                                      if (cResult[28] === tmp21) {
                                        if (cResult[29] === tmp26) {
                                          if (cResult[30] === tmp30) {
                                            let tmp38;
                                            if (cResult[31] === tmp34) {
                                              tmp38 = cResult[32];
                                            }
                                            return tmp38;
                                          }
                                        }
                                      }
                                      const obj3 = { children: tmp41 };
                                      class G {
                                        constructor() {
                                          const tmp =
                                            controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN ||
                                            null != focused.get() ||
                                            mode.get() === constants.PIP;
                                          return tmp;
                                        }
                                      }
                                      tmp41[0] = tmp26;
                                      tmp41[1] = tmp30;
                                      tmp41[2] = tmp34;
                                      tmp41[3] = tmp21;
                                      const tmp42 = closure_17(closure_18, obj3);
                                      cResult[28] = tmp21;
                                      cResult[29] = tmp26;
                                      cResult[30] = tmp30;
                                      cResult[31] = tmp34;
                                      cResult[32] = tmp42;
                                      tmp38 = tmp42;
                                    }
                                  }
                                }
                              }
                            }
                            let tmp35 = stateFromStores && tmp16;
                            if (tmp35) {
                              const obj4 = {
                                controlsHidden: derivedValue,
                                participantId: participant.id,
                                targetName: null,
                                isActivityParticipant: tmpResult8.isStableActivityParticipant(participant),
                                layout,
                              };
                              class G {
                                constructor() {
                                  const tmp =
                                    controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN ||
                                    null != focused.get() ||
                                    mode.get() === constants.PIP;
                                  return tmp;
                                }
                              }
                              tmpResult8 = participant(controlsSpecs[31]);
                              tmp35 = closure_16(closure_34, obj4);
                            }
                            class G {
                              constructor() {
                                const tmp =
                                  controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN ||
                                  null != focused.get() ||
                                  mode.get() === constants.PIP;
                                return tmp;
                              }
                            }
                            cResult[22] = stateFromStores;
                            cResult[23] = label;
                            cResult[24] = layout;
                            cResult[25] = participant;
                            cResult[26] = tmp16;
                            cResult[27] = tmp35;
                            tmp34 = tmp35;
                          }
                        }
                      }
                    }
                  }
                  let tmp31 = stateFromStores && stateFromStores1;
                  if (tmp31) {
                    const obj5 = { controlsHidden: derivedValue, participant, isSelf: null, layout };
                    class G {
                      constructor() {
                        const tmp =
                          controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN ||
                          null != focused.get() ||
                          mode.get() === constants.PIP;
                        return tmp;
                      }
                    }
                    tmp31 = closure_16(closure_31, obj5);
                  }
                  class G {
                    constructor() {
                      const tmp =
                        controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN ||
                        null != focused.get() ||
                        mode.get() === constants.PIP;
                      return tmp;
                    }
                  }
                  cResult[15] = stateFromStores;
                  cResult[16] = tmp10;
                  cResult[17] = stateFromStores1;
                  cResult[18] = layout;
                  cResult[19] = participant;
                  cResult[20] = tmp31;
                  tmp30 = tmp31;
                }
                let tmp27 = isRinging;
                if (tmp27) {
                  const obj6 = { controlsHidden: derivedValue };
                  tmp27 = closure_16(closure_49, obj6);
                }
                class G {
                  constructor() {
                    const tmp =
                      controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN ||
                      null != focused.get() ||
                      mode.get() === constants.PIP;
                    return tmp;
                  }
                }
                cResult[12] = isRinging;
                cResult[13] = tmp27;
                tmp26 = tmp27;
              }
            }
          }
          let tmp23 = null != label;
          if (tmp23) {
            const obj7 = { controlsHidden: derivedValue, label, layout: null, participant };
            class G {
              constructor() {
                const tmp =
                  controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN ||
                  null != focused.get() ||
                  mode.get() === constants.PIP;
                return tmp;
              }
            }
            tmp23 = closure_16(closure_61, obj7);
          }
          cResult[6] = derivedValue;
          cResult[7] = label;
          cResult[8] = layout;
          cResult[9] = participant;
          cResult[10] = tmp23;
          tmp21 = tmp23;
        }
        class T {
          constructor() {
            const obj = useStableParticipant;
            if (obj.isStableActivityParticipant(participant)) {
              const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
              let applicationId1;
              const applicationId = participant.applicationId;
              if (currentEmbeddedActivity != null) {
                applicationId1 = currentEmbeddedActivity.applicationId;
              }
              return applicationId === applicationId1;
            } else {
              const tmpResult = useStableParticipant;
              const result =
                tmpResult.isStableStreamParticipant(participant) &&
                null != ApplicationStreamingStore.getActiveStreamForUser(participant.user.id, guildId);
              return result;
            }
          }
        }
        cResult[3] = guildId;
        cResult[4] = participant;
        cResult[5] = T;
        tmp14 = T;
      }
    : (arg0) => {
        let connected;
        let isRinging;
        let label;
        let layout;
        let participant;
        let tmp4Result4;
        ({ label, participant } = arg0);
        ({ isRinging, layout } = arg0);
        let guildId;
        let controlsSpecs;
        let focused;
        let tmp = guildId;
        const context = focused.useContext(guildId(controlsSpecs[18]));
        guildId = context.guildId;
        controlsSpecs = context.controlsSpecs;
        focused = context.focused;
        const mode = context.mode;
        const channelId = context.channelId;
        let obj = participant(controlsSpecs[38]);
        const items = [RTCConnectionStore];
        let stateFromStores = obj.useStateFromStores(items, () => connected.isConnected());
        const obj2 = participant(controlsSpecs[31]);
        const items1 = [EmbeddedActivitiesStore, ApplicationStreamingStore];
        const tmp6 = obj2.isStableParticipantWithUser(participant) && participant.isSelf;
        const tmp4Result = participant(controlsSpecs[38]);
        const stateFromStores1 = tmp4Result.useStateFromStores(items1, () => {
          const obj = useStableParticipant;
          if (obj.isStableActivityParticipant(participant)) {
            const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
            let applicationId1;
            const applicationId = participant.applicationId;
            if (currentEmbeddedActivity != null) {
              applicationId1 = currentEmbeddedActivity.applicationId;
            }
            return applicationId === applicationId1;
          } else {
            const tmpResult = useStableParticipant;
            const result =
              tmpResult.isStableStreamParticipant(participant) &&
              null != ApplicationStreamingStore.getActiveStreamForUser(participant.user.id, guildId);
            return result;
          }
        });
        const tmp8 = tmp(controlsSpecs[58])(guildId, channelId, participant.id);
        const tmp4Result3 = participant(controlsSpecs[12]);
        class I {
          constructor() {
            const tmp =
              controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN ||
              null != focused.get() ||
              mode.get() === constants.PIP;
            return tmp;
          }
        }
        const obj3 = { controlsSpecs, VoicePanelControlsModes, focused, mode, VoicePanelModes };
        I.__closure = obj3;
        I.__workletHash = 10271388297843;
        I.__initData = __initData26;
        const derivedValue = tmp4Result3.useDerivedValue(I);
        let tmp10 = null != label;
        if (tmp10) {
          const obj4 = { controlsHidden: derivedValue, label, layout, participant };
          tmp10 = closure_16(closure_61, obj4);
        }
        if (isRinging) {
          const obj5 = { controlsHidden: derivedValue };
          isRinging = closure_16(closure_49, obj5);
        }
        const children = [isRinging, , ,];
        let tmp17 = stateFromStores && stateFromStores1;
        if (tmp17) {
          const obj6 = { controlsHidden: derivedValue, participant, isSelf: tmp6, layout };
          tmp17 = closure_16(closure_31, obj6);
        }
        children[1] = tmp17;
        if (stateFromStores) {
          stateFromStores = tmp8;
        }
        if (stateFromStores) {
          const obj7 = {
            controlsHidden: derivedValue,
            participantId: participant.id,
            targetName: label,
            isActivityParticipant: tmp4Result4.isStableActivityParticipant(participant),
            layout,
          };
          tmp4Result4 = participant(controlsSpecs[31]);
          stateFromStores = closure_16(closure_34, obj7);
        }
        children[2] = stateFromStores;
        children[3] = tmp10;
        return closure_17(closure_18, { children });
      },
);
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx");

export default memoResult;
