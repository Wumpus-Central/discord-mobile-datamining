// discord_app/modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import StreamActionCreators from "../../../../actions/StreamActionCreators.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import GameProfileAnalyticUtils from "../../../game_profile/GameProfileAnalyticUtils.tsx";
import useShouldOpenGameProfileModal from "../../../game_profile/hooks/useShouldOpenGameProfileModal.tsx";
import EmbeddedActivitiesNativeManagerDefault from "../../../activities/native/EmbeddedActivitiesNativeManager.tsx";
import VoiceStateIcons from "../shared/VoiceStateIcons.tsx";
import VoiceStateIconUtils from "../utils/VoiceStateIconUtils.tsx";
import VoiceXIcon from "../../../../design/components/Icon/native/redesign/generated/VoiceXIcon.tsx";
import _modDef9748 from "../../../../../_runtime/metro/09748__.js";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import useStableParticipant from "../utils/useStableParticipant.tsx";
import useVoicePanelCardUserStateIcons from "../hooks/useVoicePanelCardUserStateIcons.tsx";
import _modDef17248 from "../../../../../_runtime/metro/17248__.js";
import getRandomNumberInRangeDefault from "../utils/getRandomNumberInRange.tsx";
import _modDef17293 from "../../../../../_runtime/metro/17293__.js";
import _modDef17294 from "../../../../../_runtime/metro/17294__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";
import ReanimatedRexport_mod from "../../../reanimated/ReanimatedRexport.tsx";

require = fn;
function getAccessibilityLabel(tmp4ResultResult, label) {
  if (
    null !=
    tmp4ResultResult.find(
      (type) => type.type === require("useVoicePanelCardUserStateIcons").VoicePanelCardUserStateIconType.STREAM_ICON,
    )
  ) {
    const intl3 = util.intl;
    const obj2 = { username: label };
    return intl3.formatToPlainString(util.t.I0mOAs, obj2);
  } else {
    const found = tmp4ResultResult.find(
      (type) =>
        type.type === require("useVoicePanelCardUserStateIcons").VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON,
    );
    if (null != found) {
      const muteDeafenIconState = found.muteDeafenIconState;
      if (VoiceStateIconUtils.MuteDeafenIconState.DEAFENED !== muteDeafenIconState) {
        if (VoiceStateIconUtils.MuteDeafenIconState.DEAFENED_SERVER !== muteDeafenIconState) {
          const intl = util.intl;
          const obj = { username: label };
          return intl.formatToPlainString(util.t.Hd1oVG, obj);
        }
      }
      const intl2 = util.intl;
      const obj3 = { username: label };
      return intl2.formatToPlainString(util.t["9hDjai"], obj3);
    } else {
      return label;
    }
  }
}
get_ActivityIndicator = fn(17);
({ Platform, Pressable } = get_ActivityIndicator);
const VoicePanelConstants = fn(11902);
({ MODE_CHANGE_PHYSICS: closure_9, VoicePanelModes: c10 } = VoicePanelConstants);
const VoicePanelControlsModes = fn(11900).VoicePanelControlsModes;
const VOICE_PANEL_CARD_INNER_PADDING = fn(11905).VOICE_PANEL_CARD_INNER_PADDING;
const ThemeTypes = fn(1085).ThemeTypes;
const CallConstants = fn(4911);
({ ParticipantTypes: closure_14, VoicePlatforms: closure_15 } = CallConstants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_19 = ReanimatedRexport.createAnimatedComponent(fn(1188).Icon);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_20 = ReanimatedRexport.createAnimatedComponent(Pressable);
let c21 = 28;
const createStyles = fn(4890);
let closure_22 = createStyles.createStyles(() => {
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
      height: v28,
      gap: 4,
    },
    initialIcons: { display: "flex", flexDirection: "row", marginStart: -4, marginEnd: -4 },
    icon: null,
    iconWithoutBackground: null,
    iconContainer: null,
    speakerMuteIcon: null,
    floatingContainer: null,
    floatingText: null,
    ringingIconContainer: null,
    ringingIcon: null,
    secureFramesIcon: null,
  };
  const size = { width: 12, height: 12, tintColor: nativeDefault.colors.WHITE };
  obj.icon = size;
  const size1 = { width: 16, height: 16, tintColor: nativeDefault.colors.WHITE };
  obj.iconWithoutBackground = size1;
  const size2 = {
    width: 20,
    height: 20,
    borderRadius: nativeDefault.radii.round,
    alignItems: "center",
    justifyContent: "center",
  };
  obj.iconContainer = size2;
  obj.speakerMuteIcon = { marginRight: 4 };
  obj.floatingContainer = { flexDirection: "row", alignItems: "center", gap: 4, overflow: "hidden", flexShrink: 1 };
  obj.floatingText = { overflow: "hidden", paddingStart: 4, paddingEnd: 4, flexShrink: 1, lineHeight: 14 };
  const rect = {
    position: "absolute",
    top: 8,
    right: 8,
    padding: 6,
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  };
  obj.ringingIconContainer = rect;
  const obj2 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: nativeDefault.radii.sm,
    overflow: "hidden",
    paddingHorizontal: 8,
    backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
    height: v28,
    gap: 4,
  };
  obj.ringingIcon = { tintColor: nativeDefault.colors.STATUS_POSITIVE };
  obj.secureFramesIcon = { marginEnd: -2 };
  return obj;
});
const __initData = {
  code: "function VoicePanelCardFloatingControlsTsx1(){const{controlsSpecs,VoicePanelControlsModes,GAP}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;return{marginLeft:hidden?2:GAP,marginRight:hidden?2:0};}",
};
const __initData2 = {
  code: "function VoicePanelCardFloatingControlsTsx2(){const{controlsSpecs,VoicePanelControlsModes,GAP}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;return{marginLeft:hidden?2:GAP,marginRight:hidden?2:0};}",
};
let ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? (voicePlatform) => {
      const cResult = controlsSpecs(576).c(6);
      voicePlatform = voicePlatform.voicePlatform;
      const tmp3 = closure_22();
      controlsSpecs = noop.useContext(VoicePanelStateContextDefault).controlsSpecs;
      let obj = controlsSpecs(576);
      const fn = function o() {
        const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
        let num = 4;
        if (tmp) {
          num = 2;
        }
        const obj = { marginLeft: num, marginRight: null };
        let num2 = 0;
        if (tmp) {
          num2 = 2;
        }
        obj.marginRight = num2;
        return obj;
      };
      fn.__closure = { controlsSpecs, VoicePanelControlsModes, GAP: 4 };
      fn.__workletHash = 3270040588948;
      fn.__initData = __initData;
      const animatedStyle = controlsSpecs(4612).useAnimatedStyle(fn);
      let tmp4Result = _modDef17248;
      if (voicePlatform === constants2.XBOX) {
        tmp4Result = _modDef17293;
      } else if (voicePlatform === constants2.MOBILE) {
        tmp4Result = _modDef9748;
      } else if (voicePlatform === constants2.QUEST) {
        tmp4Result = _modDef17294;
      }
      if (cResult[0] === animatedStyle) {
        if (cResult[1] === tmp3.iconWithoutBackground) {
          let tmp8 = cResult[2];
        }
        if (cResult[3] === tmp4Result) {
          if (cResult[4] === tmp8) {
            let tmp9 = cResult[5];
          }
          return tmp9;
        }
        const obj4 = { source: tmp4Result, style: tmp8 };
        const tmp12 = closure_16(closure_19, obj4);
        cResult[3] = tmp4Result;
        cResult[4] = tmp8;
        cResult[5] = tmp12;
        tmp9 = tmp12;
      }
      const items = [tmp3.iconWithoutBackground, animatedStyle];
      cResult[0] = animatedStyle;
      cResult[1] = tmp3.iconWithoutBackground;
      cResult[2] = items;
      tmp8 = items;
      const obj2 = controlsSpecs(4612);
      const obj3 = { controlsSpecs, VoicePanelControlsModes, GAP: 4 };
    }
  : (voicePlatform) => {
      voicePlatform = voicePlatform.voicePlatform;
      const controlsSpecs = noop.useContext(VoicePanelStateContextDefault).controlsSpecs;
      let tmp = closure_22();
      const fn = function o() {
        const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
        let num = 4;
        if (tmp) {
          num = 2;
        }
        const obj = { marginLeft: num, marginRight: null };
        let num2 = 0;
        if (tmp) {
          num2 = 2;
        }
        obj.marginRight = num2;
        return obj;
      };
      fn.__closure = { controlsSpecs, VoicePanelControlsModes, GAP: 4 };
      fn.__workletHash = 15914667672663;
      fn.__initData = __initData2;
      const animatedStyle = controlsSpecs(4612).useAnimatedStyle(fn);
      let tmp2Result = _modDef17248;
      if (voicePlatform === constants2.XBOX) {
        tmp2Result = _modDef17293;
      } else if (voicePlatform === constants2.MOBILE) {
        tmp2Result = _modDef9748;
      } else if (voicePlatform === constants2.QUEST) {
        tmp2Result = _modDef17294;
      }
      const obj3 = { source: tmp2Result, style: null };
      const items = [tmp.iconWithoutBackground, animatedStyle];
      obj3.style = items;
      return closure_16(closure_19, obj3);
    };
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? (icon) => {
      const cResult = c.c(31);
      icon = icon.icon;
      const tmp4 = closure_22();
      const type = icon.type;
      if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.STREAM_ICON === type) {
        if (cResult[0] !== icon.voicePlatform) {
          const obj2 = { voicePlatform: icon.voicePlatform };
          const tmp51 = value2(closure_25, obj2);
          cResult[0] = icon.voicePlatform;
          cResult[1] = tmp51;
          let tmp48 = tmp51;
        } else {
          tmp48 = cResult[1];
        }
        return tmp48;
      } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.SPEAKER_MUTE_ICON === type) {
        const _Symbol2 = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = util.intl;
          const stringResult = intl4.string(util.t.Q8Uzof);
          cResult[2] = stringResult;
          let tmp39 = stringResult;
        } else {
          tmp39 = cResult[2];
        }
        if (cResult[3] !== tmp4.iconWithoutBackground) {
          const obj3 = { style: tmp4.iconWithoutBackground };
          const tmp43 = value2(VoiceXIcon.VoiceXIcon, obj3);
          cResult[3] = tmp4.iconWithoutBackground;
          cResult[4] = tmp43;
          let tmp41 = tmp43;
        } else {
          tmp41 = cResult[4];
        }
        if (cResult[5] === icon.onPress) {
          if (cResult[6] === tmp4.speakerMuteIcon) {
            if (cResult[7] === tmp41) {
              let tmp44 = cResult[8];
            }
            return tmp44;
          }
        }
        const obj4 = {
          style: tmp4.speakerMuteIcon,
          hitSlop: 12,
          onPress: icon.onPress,
          accessibilityRole: "button",
          accessibilityLabel: tmp39,
          children: tmp41,
        };
        const tmp47 = value2(Pressable, obj4);
        cResult[5] = icon.onPress;
        cResult[6] = tmp4.speakerMuteIcon;
        cResult[7] = tmp41;
        cResult[8] = tmp47;
        tmp44 = tmp47;
      } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_VIDEO_ICON === type) {
        if (cResult[9] !== icon.videoIconState) {
          if (icon.videoIconState === VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO) {
            const intl3 = util.intl;
            let stringResult1 = intl3.string(util.t.uv1tVh);
          } else {
            const intl2 = util.intl;
            stringResult1 = intl2.string(util.t["PXMZ/+"]);
          }
          cResult[9] = icon.videoIconState;
          cResult[10] = stringResult1;
        } else {
          if (cResult[11] === icon.onPress) {
            if (cResult[12] === icon.videoIconState) {
              if (cResult[13] === tmp4.icon) {
                if (cResult[14] === tmp4.iconContainer) {
                  if (cResult[15] === tmp27) {
                    return cResult[16];
                  }
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
              children: null,
            };
            const obj6 = { style: tmp4.icon, state: icon.videoIconState };
            obj5.children = value2(VoiceStateIcons.VideoIcon, obj6);
            let tmp34 = value2(Pressable, obj5);
          } else {
            const obj7 = {
              style: tmp4.iconContainer,
              accessible: true,
              accessibilityRole: "image",
              accessibilityLabel: tmp27,
              children: null,
            };
            const obj8 = { style: tmp4.icon, state: icon.videoIconState };
            obj7.children = value2(VoiceStateIcons.VideoIcon, obj8);
            tmp34 = value2(NativeViewDefault, obj7);
          }
          cResult[11] = icon.onPress;
          cResult[12] = icon.videoIconState;
          cResult[13] = tmp4.icon;
          cResult[14] = tmp4.iconContainer;
          cResult[15] = cResult[10];
          cResult[16] = tmp34;
        }
      } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON === type) {
        if (cResult[17] === icon.muteDeafenIconState) {
          if (cResult[18] === tmp4.icon) {
            let tmp16 = cResult[19];
          }
          if (cResult[20] === icon.onPress) {
            if (cResult[21] === tmp16) {
              let tmp19 = cResult[22];
            }
            if (cResult[23] === tmp4.iconContainer) {
              if (cResult[24] === tmp19) {
                let tmp23 = cResult[25];
              }
              return tmp23;
            }
            const obj9 = {
              style: tmp4.iconContainer,
              accessibilityElementsHidden: true,
              importantForAccessibility: "no-hide-descendants",
              children: tmp19,
            };
            const tmp26 = value2(NativeViewDefault, obj9);
            cResult[23] = tmp4.iconContainer;
            cResult[24] = tmp19;
            cResult[25] = tmp26;
            tmp23 = tmp26;
          }
          const obj10 = { onPress: icon.onPress, hitSlop: 12, children: tmp16 };
          const tmp22 = value2(Pressable, obj10);
          cResult[20] = icon.onPress;
          cResult[21] = tmp16;
          cResult[22] = tmp22;
          tmp19 = tmp22;
        }
        const obj11 = { style: tmp4.icon, state: icon.muteDeafenIconState, alwaysWhite: true };
        const tmp18 = value2(VoiceStateIcons.MuteDeafenIcon, obj11);
        cResult[17] = icon.muteDeafenIconState;
        cResult[18] = tmp4.icon;
        cResult[19] = tmp18;
        tmp16 = tmp18;
      } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_DISCONNECTED_ICON === type) {
        const _Symbol = Symbol;
        if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult2 = intl.string(util.t.HFwRpk);
          const obj12 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
          const tmp11 = value2(CircleErrorIcon.CircleErrorIcon, obj12);
          cResult[26] = stringResult2;
          cResult[27] = tmp11;
          let tmp7 = tmp11;
          let tmp6 = stringResult2;
        } else {
          tmp6 = cResult[26];
          tmp7 = cResult[27];
        }
        if (cResult[28] === icon.onPress) {
          if (cResult[29] === tmp4.iconContainer) {
            let tmp12 = cResult[30];
          }
          return tmp12;
        }
        const obj13 = {
          style: tmp4.iconContainer,
          onPress: icon.onPress,
          accessibilityRole: "button",
          accessibilityLabel: tmp6,
          children: tmp7,
        };
        const tmp15 = value2(Pressable, obj13);
        cResult[28] = icon.onPress;
        cResult[29] = tmp4.iconContainer;
        cResult[30] = tmp15;
        tmp12 = tmp15;
      }
    }
  : (icon) => {
      icon = icon.icon;
      const tmp = closure_22();
      const type = icon.type;
      if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.STREAM_ICON === type) {
        const obj2 = { voicePlatform: icon.voicePlatform };
        return value2(closure_25, obj2);
      } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.SPEAKER_MUTE_ICON === type) {
        const obj3 = {
          style: tmp.speakerMuteIcon,
          hitSlop: 12,
          onPress: icon.onPress,
          accessibilityRole: "button",
          accessibilityLabel: null,
          children: null,
        };
        const intl4 = util.intl;
        obj3.accessibilityLabel = intl4.string(util.t.Q8Uzof);
        const obj4 = { style: tmp.iconWithoutBackground };
        obj3.children = value2(VoiceXIcon.VoiceXIcon, obj4);
        return value2(Pressable, obj3);
      } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_VIDEO_ICON === type) {
        if (icon.videoIconState === VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO) {
          const intl3 = util.intl;
          let stringResult = intl3.string(util.t.uv1tVh);
        } else {
          const intl2 = util.intl;
          stringResult = intl2.string(util.t["PXMZ/+"]);
        }
        if (null != icon.onPress) {
          const obj5 = {
            style: tmp.iconContainer,
            onPress: icon.onPress,
            accessibilityRole: "button",
            accessibilityLabel: stringResult,
            children: null,
          };
          const obj6 = { style: tmp.icon, state: icon.videoIconState };
          obj5.children = value2(VoiceStateIcons.VideoIcon, obj6);
          let tmp16 = value2(Pressable, obj5);
        } else {
          const obj7 = {
            style: tmp.iconContainer,
            accessible: true,
            accessibilityRole: "image",
            accessibilityLabel: stringResult,
            children: null,
          };
          const obj8 = { style: tmp.icon, state: icon.videoIconState };
          obj7.children = value2(VoiceStateIcons.VideoIcon, obj8);
          tmp16 = value2(NativeViewDefault, obj7);
        }
        return tmp16;
      } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON === type) {
        const obj9 = {
          style: tmp.iconContainer,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          children: null,
        };
        const obj10 = { onPress: icon.onPress, hitSlop: 12, children: null };
        const obj11 = { style: tmp.icon, state: icon.muteDeafenIconState, alwaysWhite: true };
        obj10.children = value2(VoiceStateIcons.MuteDeafenIcon, obj11);
        obj9.children = value2(Pressable, obj10);
        return value2(NativeViewDefault, obj9);
      } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_DISCONNECTED_ICON === type) {
        const obj = {
          style: tmp.iconContainer,
          onPress: icon.onPress,
          accessibilityRole: "button",
          accessibilityLabel: null,
          children: null,
        };
        const intl = util.intl;
        obj.accessibilityLabel = intl.string(util.t.HFwRpk);
        const obj12 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
        obj.children = value2(CircleErrorIcon.CircleErrorIcon, obj12);
        return value2(Pressable, obj);
      }
    };
const __initData3 = {
  code: 'function VoicePanelCardFloatingControlsTsx3(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get();return{position:"absolute",top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,left:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}',
};
const __initData4 = {
  code: "function VoicePanelCardFloatingControlsTsx4(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get();return{position:'absolute',top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,left:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}",
};
ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled()
  ? (controlsHidden) => {
      _require = controlsHidden;
      const fn = function n() {
        value = controlsHidden.get();
        if (value) {
          let tmp2 = -c21 + 2 * left;
        } else {
          tmp2 = left;
        }
        const rect = { position: "absolute", top: tmp2, left, opacity: null, zIndex: 1 };
        let num2 = 1;
        if (value) {
          num2 = 0;
        }
        rect.opacity = spring.withSpring(num2, MODE_CHANGE_PHYSICS);
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
      return obj.useAnimatedStyle(fn);
    }
  : (controlsHidden) => {
      _require = controlsHidden;
      const fn = function n() {
        value = controlsHidden.get();
        if (value) {
          let tmp2 = -c21 + 2 * left;
        } else {
          tmp2 = left;
        }
        const rect = { position: "absolute", top: tmp2, left, opacity: null, zIndex: 1 };
        let num2 = 1;
        if (value) {
          num2 = 0;
        }
        rect.opacity = spring.withSpring(num2, MODE_CHANGE_PHYSICS);
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
      return obj.useAnimatedStyle(fn);
    };
ReactCompilerGating = fn(558);
let closure_31 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (participant) => {
        const cResult = participant(576).c(11);
        participant = participant.participant;
        ({ isSelf, layout } = participant);
        guildId = noop.useContext(guildId(11901)).guildId;
        const tmp5 = closure_30(participant.controlsHidden);
        if (cResult[0] === guildId) {
          if (cResult[1] === participant) {
            let tmp6 = cResult[2];
          }
          if (cResult[3] === isSelf) {
            if (cResult[4] === participant) {
              if (cResult[6] === tmp6) {
                if (cResult[7] === layout) {
                  if (cResult[8] === tmp7) {
                    if (cResult[9] === tmp5) {
                      let tmp12 = cResult[10];
                    }
                    return tmp12;
                  }
                }
              }
              let obj2 = { icon: tmp4(17295), onPress: tmp6, style: tmp5, layout, accessibilityLabel: cResult[5] };
              const tmp15 = closure_16(tmp4(17188), obj2);
              cResult[6] = tmp6;
              cResult[7] = layout;
              cResult[8] = cResult[5];
              cResult[9] = tmp5;
              cResult[10] = tmp15;
              tmp12 = tmp15;
              const tmp4Result = tmp4(17188);
            }
          }
          const result = tmp(17219).isStableActivityParticipant(participant);
          const intl = tmp(1126).intl;
          const string = intl.string;
          let t = tmp(1126).t;
          if (result) {
            t = t["R/FK4A"];
            let stringResult = string(t);
          } else if (isSelf) {
            stringResult = string(t.S5anIc);
          } else {
            stringResult = string(t.q3O3J8);
          }
          cResult[3] = isSelf;
          cResult[4] = participant;
          cResult[5] = stringResult;
          let tmpResult = tmp(17219);
        }
        const fn = function o() {
          if (obj.isStableStreamParticipant(participant)) {
            const streamForUser = ApplicationStreamingStore.getStreamForUser(participant.user.id, guildId);
            if (null != streamForUser) {
              const tmpResult = StreamActionCreators;
              tmpResult.stopStream(StreamKeyUtils.encodeStreamKey(streamForUser));
              const tmpResult3 = StreamKeyUtils;
            }
          }
          obj = useStableParticipant;
          if (tmpResult4.isStableActivityParticipant(participant)) {
            const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
            let _location;
            if (currentEmbeddedActivity != null) {
              _location = currentEmbeddedActivity.location;
            }
            const obj2 = { location: _location, applicationId: participant.applicationId };
            EmbeddedActivitiesNativeManagerDefault.leaveActivity(obj2);
          }
          tmpResult4 = useStableParticipant;
        };
        cResult[0] = guildId;
        cResult[1] = participant;
        cResult[2] = fn;
        tmp6 = fn;
        let obj = participant(576);
      }
    : (participant) => {
        participant = participant.participant;
        let guildId;
        ({ controlsHidden, isSelf, layout } = participant);
        guildId = noop.useContext(guildId(11901)).guildId;
        const items = [guildId, participant];
        const callback = noop.useCallback(() => {
          if (obj.isStableStreamParticipant(participant)) {
            const streamForUser = ApplicationStreamingStore.getStreamForUser(participant.user.id, guildId);
            if (null != streamForUser) {
              const tmpResult = StreamActionCreators;
              tmpResult.stopStream(StreamKeyUtils.encodeStreamKey(streamForUser));
              const tmpResult3 = StreamKeyUtils;
            }
          }
          obj = useStableParticipant;
          if (tmpResult4.isStableActivityParticipant(participant)) {
            const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
            let _location;
            if (currentEmbeddedActivity != null) {
              _location = currentEmbeddedActivity.location;
            }
            const obj2 = { location: _location, applicationId: participant.applicationId };
            EmbeddedActivitiesNativeManagerDefault.leaveActivity(obj2);
          }
          tmpResult4 = useStableParticipant;
        }, items);
        let obj = { icon: null, onPress: null, style: null, layout: null, accessibilityLabel: null };
        const tmp = closure_30(controlsHidden);
        obj.icon = guildId(17295);
        obj.onPress = callback;
        obj.style = tmp;
        obj.layout = layout;
        const tmp4 = guildId(17188);
        const result = participant(17219).isStableActivityParticipant(participant);
        const intl = participant(1126).intl;
        const string = intl.string;
        const t = participant(1126).t;
        if (result) {
          let stringResult = string(t["R/FK4A"]);
        } else if (isSelf) {
          stringResult = string(t.S5anIc);
        } else {
          stringResult = string(t.q3O3J8);
        }
        obj.accessibilityLabel = stringResult;
        return closure_16(tmp4, obj);
      },
);
const __initData5 = {
  code: 'function VoicePanelCardFloatingControlsTsx5(){const{controlsHidden,mode,VoicePanelModes,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get()||mode.get()===VoicePanelModes.PIP;return{position:"absolute",top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,right:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}',
};
const __initData6 = {
  code: "function VoicePanelCardFloatingControlsTsx6(){const{controlsHidden,mode,VoicePanelModes,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get()||mode.get()===VoicePanelModes.PIP;return{position:'absolute',top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,right:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}",
};
ReactCompilerGating = fn(558);
let closure_34 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (participantId) => {
        const cResult = participantId(setFocused[17]).c(11);
        participantId = participantId.participantId;
        const controlsHidden = participantId.controlsHidden;
        ({ targetName, isActivityParticipant, layout } = participantId);
        const context = mode.useContext(controlsHidden(setFocused[18]));
        setFocused = context.setFocused;
        mode = context.mode;
        if (cResult[0] === participantId) {
          if (cResult[1] === setFocused) {
            let tmp6 = cResult[2];
          }
          const fn2 = function f() {
            value = controlsHidden.get();
            if (!value) {
              value = mode.get() === VoicePanelModes.PIP;
            }
            if (value) {
              let tmp4 = -c21 + 2 * right;
            } else {
              tmp4 = right;
            }
            const rect = { position: "absolute", top: tmp4, right, opacity: null, zIndex: 1 };
            let num2 = 1;
            if (value) {
              num2 = 0;
            }
            rect.opacity = spring.withSpring(num2, MODE_CHANGE_PHYSICS);
            return rect;
          };
          const obj2 = {
            controlsHidden,
            mode,
            VoicePanelModes,
            FLOATING_BAR_HEIGHT: v28,
            VOICE_PANEL_CARD_INNER_PADDING,
            withSpring: tmp(tmp2[30]).withSpring,
            MODE_CHANGE_PHYSICS,
          };
          fn2.__closure = obj2;
          fn2.__workletHash = 9450803171648;
          fn2.__initData = __initData5;
          const animatedStyle = tmp(tmp2[12]).useAnimatedStyle(fn2);
          if (cResult[3] === isActivityParticipant) {
            if (cResult[4] === targetName) {
              if (cResult[6] === cResult[5]) {
                if (cResult[7] === tmp6) {
                  if (cResult[8] === layout) {
                    if (cResult[9] === animatedStyle) {
                      let tmp17 = cResult[10];
                    }
                    return tmp17;
                  }
                }
              }
              const obj3 = {
                icon: tmp4(tmp2[37]),
                onPress: tmp6,
                style: animatedStyle,
                layout,
                accessibilityLabel: cResult[5],
              };
              const tmp20 = closure_16(tmp4(tmp2[35]), obj3);
              cResult[6] = cResult[5];
              cResult[7] = tmp6;
              cResult[8] = layout;
              cResult[9] = animatedStyle;
              cResult[10] = tmp20;
              tmp17 = tmp20;
              const tmp4Result = tmp4(tmp2[35]);
            }
          }
          if (isActivityParticipant) {
            const intl3 = tmp(tmp2[24]).intl;
            let stringResult = intl3.string(tmp(tmp2[24]).t["3ejJer"]);
          } else if (null != targetName) {
            const intl2 = tmp(tmp2[24]).intl;
            const obj4 = { targetName };
            stringResult = intl2.formatToPlainString(tmp(tmp2[24]).t.OervdV, obj4);
          } else {
            const intl = tmp(tmp2[24]).intl;
            stringResult = intl.string(tmp(tmp2[24]).t["77cRN4"]);
          }
          cResult[3] = isActivityParticipant;
          cResult[4] = targetName;
          cResult[5] = stringResult;
          const tmpResult = tmp(tmp2[12]);
        }
        const fn = function o() {
          setFocused(participantId);
        };
        cResult[0] = participantId;
        cResult[1] = setFocused;
        cResult[2] = fn;
        tmp6 = fn;
        const obj = participantId(setFocused[17]);
      }
    : (participantId) => {
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
          value = controlsHidden.get();
          if (!value) {
            value = mode.get() === VoicePanelModes.PIP;
          }
          if (value) {
            let tmp4 = -c21 + 2 * right;
          } else {
            tmp4 = right;
          }
          const rect = { position: "absolute", top: tmp4, right, opacity: null, zIndex: 1 };
          let num2 = 1;
          if (value) {
            num2 = 0;
          }
          rect.opacity = spring.withSpring(num2, MODE_CHANGE_PHYSICS);
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
        const animatedStyle = obj.useAnimatedStyle(fn);
        if (isActivityParticipant) {
          const intl3 = tmp5(tmp2[24]).intl;
          let stringResult = intl3.string(tmp5(tmp2[24]).t["3ejJer"]);
        } else if (null != targetName) {
          const intl2 = tmp5(tmp2[24]).intl;
          const obj3 = { targetName };
          stringResult = intl2.formatToPlainString(tmp5(tmp2[24]).t.OervdV, obj3);
        } else {
          const intl = tmp5(tmp2[24]).intl;
          stringResult = intl.string(tmp5(tmp2[24]).t["77cRN4"]);
        }
        const obj4 = { icon: null, onPress: null, style: null, layout: null, accessibilityLabel: null };
        const obj2 = {
          controlsHidden,
          mode,
          VoicePanelModes,
          FLOATING_BAR_HEIGHT: v28,
          VOICE_PANEL_CARD_INNER_PADDING,
          withSpring: participantId(setFocused[30]).withSpring,
          MODE_CHANGE_PHYSICS,
        };
        obj4.icon = controlsHidden(setFocused[37]);
        obj4.onPress = callback;
        obj4.style = animatedStyle;
        obj4.layout = layout;
        obj4.accessibilityLabel = stringResult;
        return closure_16(controlsHidden(setFocused[35]), obj4);
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
ReactCompilerGating = fn(558);
let closure_48 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (controlsHidden) => {
        const cResult = controlsHidden(sharedValue1[17]).c(13);
        controlsHidden = controlsHidden.controlsHidden;
        const tmp4 = closure_22();
        let obj = controlsHidden(sharedValue1[17]);
        const sharedValue = controlsHidden(sharedValue1[12]).useSharedValue(true);
        let obj2 = controlsHidden(sharedValue1[12]);
        sharedValue1 = controlsHidden(sharedValue1[12]).useSharedValue(0);
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
        const obj3 = controlsHidden(sharedValue1[12]);
        const stateFromStores = controlsHidden(sharedValue1[38]).useStateFromStores(tmp7, tmp8);
        const tmpResult = controlsHidden(sharedValue1[38]);
        class C {
          constructor() {
            return closure_1.get();
          }
        }
        C.__closure = { flip: sharedValue };
        C.__workletHash = 12043935058158;
        C.__initData = __initData7;
        let fn2 = function p(arg0) {
          const tmp2 = spring;
          const withSpring = tmp2.withSpring;
          const tmp3 = getRandomNumberInRangeDefault;
          if (arg0) {
            const fn2 = function o(arg0) {
              if (arg0) {
                const result = sharedValue.set(!sharedValue.get());
              }
            };
            const obj2 = { flip: sharedValue };
            fn2.__closure = obj2;
            fn2.__workletHash = 12072622457709;
            fn2.__initData = __initData;
            let result = set(withSpring(tmp3(35, 55), closure_35, "respect-motion-settings", fn2));
          } else {
            const fn = function n(arg0) {
              if (arg0) {
                const result = sharedValue.set(!sharedValue.get());
              }
            };
            const obj = { flip: sharedValue };
            fn.__closure = obj;
            fn.__workletHash = 3548834534549;
            fn.__initData = __initData2;
            const result1 = set(withSpring(tmp3(-10, 10), closure_35, "respect-motion-settings", fn));
          }
        };
        const tmpResult4 = controlsHidden(sharedValue1[12]);
        fn2.__closure = {
          angle: sharedValue1,
          withSpring: controlsHidden(sharedValue1[30]).withSpring,
          getRandomNumberInRange: sharedValue(sharedValue1[39]),
          RING_PHYSICS,
          flip: sharedValue,
        };
        fn2.__workletHash = 9806064842498;
        fn2.__initData = __initData8;
        const animatedReaction = tmpResult4.useAnimatedReaction(C, fn2);
        const obj4 = {
          angle: sharedValue1,
          withSpring: controlsHidden(sharedValue1[30]).withSpring,
          getRandomNumberInRange: sharedValue(sharedValue1[39]),
          RING_PHYSICS,
          flip: sharedValue,
        };
        class S {
          constructor() {
            top = 0;
            if (controlsHidden.get()) {
              tmp = c21;
              tmp2 = closure_12;
              num2 = 2;
              top = -c21 + 2 * closure_12;
            }
            return { top };
          }
        }
        S.__closure = { controlsHidden, FLOATING_BAR_HEIGHT: v28, VOICE_PANEL_CARD_INNER_PADDING };
        S.__workletHash = 1062668091812;
        S.__initData = __initData9;
        const animatedStyle = controlsHidden(sharedValue1[12]).useAnimatedStyle(S);
        controlsHidden(sharedValue1[12]);
        class E {
          constructor() {
            obj = { transform: null };
            obj1 = { rotate: "" + closure_2.get() + "deg" };
            items = [];
            items[0] = obj1;
            obj.transform = items;
            return obj;
          }
        }
        E.__closure = { angle: sharedValue1 };
        E.__workletHash = 5604667206084;
        E.__initData = __initData10;
        if (cResult[2] === tmp4.ringingIconContainer) {
          if (cResult[3] === animatedStyle) {
            let tmp16 = cResult[4];
          }
          let tmp17 = !stateFromStores;
          if (!stateFromStores) {
            tmp17 = tmp15;
          }
          if (cResult[5] !== tmp4.ringingIcon) {
            const obj6 = { source: tmp11(tmp2[40]), size: tmp(tmp2[13]).IconSizes.SMALL_20, style: tmp4.ringingIcon };
            const tmp20 = closure_16(tmp(tmp2[13]).Icon, obj6);
            cResult[5] = tmp4.ringingIcon;
            cResult[6] = tmp20;
            let tmp18 = tmp20;
          } else {
            tmp18 = cResult[6];
          }
          if (cResult[7] === tmp17) {
            if (cResult[8] === tmp18) {
              let tmp21 = cResult[9];
            }
            if (cResult[10] === tmp16) {
              if (cResult[11] === tmp21) {
                let tmp24 = cResult[12];
              }
              return tmp24;
            }
            const obj7 = { style: tmp16, children: tmp21 };
            const tmp26 = closure_16(tmp11(tmp2[41]), obj7);
            cResult[10] = tmp16;
            cResult[11] = tmp21;
            cResult[12] = tmp26;
            tmp24 = tmp26;
          }
          const obj8 = { style: tmp17, pointerEvents: "none", children: tmp18 };
          const tmp23 = closure_16(tmp11(tmp2[41]), obj8);
          cResult[7] = tmp17;
          cResult[8] = tmp18;
          cResult[9] = tmp23;
          tmp21 = tmp23;
        }
        const items1 = [animatedStyle, tmp4.ringingIconContainer];
        cResult[2] = tmp4.ringingIconContainer;
        cResult[3] = animatedStyle;
        cResult[4] = items1;
        tmp16 = items1;
        const obj5 = { controlsHidden, FLOATING_BAR_HEIGHT: v28, VOICE_PANEL_CARD_INNER_PADDING };
        const tmpResult5 = controlsHidden(sharedValue1[12]);
      }
    : (controlsHidden) => {
        controlsHidden = controlsHidden.controlsHidden;
        let sharedValue1;
        const tmp = closure_22();
        const sharedValue = controlsHidden(sharedValue1[12]).useSharedValue(true);
        let obj = controlsHidden(sharedValue1[12]);
        sharedValue1 = controlsHidden(sharedValue1[12]).useSharedValue(0);
        let obj2 = controlsHidden(sharedValue1[12]);
        let items = [AccessibilityStore];
        const stateFromStores = controlsHidden(sharedValue1[38]).useStateFromStores(
          items,
          () => useReducedMotion.useReducedMotion,
        );
        const obj3 = controlsHidden(sharedValue1[38]);
        let fn = function o() {
          return sharedValue.get();
        };
        fn.__closure = { flip: sharedValue };
        fn.__workletHash = 12713167779771;
        fn.__initData = __initData11;
        let fn2 = function n(arg0) {
          const tmp2 = spring;
          const withSpring = tmp2.withSpring;
          const tmp3 = getRandomNumberInRangeDefault;
          if (arg0) {
            const fn2 = function o(arg0) {
              if (arg0) {
                const result = sharedValue.set(!sharedValue.get());
              }
            };
            const obj2 = { flip: sharedValue };
            fn2.__closure = obj2;
            fn2.__workletHash = 6186600894966;
            fn2.__initData = __initData;
            let result = set(withSpring(tmp3(35, 55), closure_35, "respect-motion-settings", fn2));
          } else {
            const fn = function n(arg0) {
              if (arg0) {
                const result = sharedValue.set(!sharedValue.get());
              }
            };
            const obj = { flip: sharedValue };
            fn.__closure = obj;
            fn.__workletHash = 8631692281909;
            fn.__initData = __initData2;
            const result1 = set(withSpring(tmp3(-10, 10), closure_35, "respect-motion-settings", fn));
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
        const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
        const obj5 = {
          angle: sharedValue1,
          withSpring: controlsHidden(sharedValue1[30]).withSpring,
          getRandomNumberInRange: sharedValue(sharedValue1[39]),
          RING_PHYSICS,
          flip: sharedValue,
        };
        const tmp7 = sharedValue;
        class I {
          constructor() {
            top = 0;
            if (controlsHidden.get()) {
              tmp = c21;
              tmp2 = closure_12;
              num2 = 2;
              top = -c21 + 2 * closure_12;
            }
            return { top };
          }
        }
        I.__closure = { controlsHidden, FLOATING_BAR_HEIGHT: v28, VOICE_PANEL_CARD_INNER_PADDING };
        I.__workletHash = 15571042858594;
        I.__initData = __initData13;
        const animatedStyle = controlsHidden(sharedValue1[12]).useAnimatedStyle(I);
        const obj6 = controlsHidden(sharedValue1[12]);
        const obj7 = { controlsHidden, FLOATING_BAR_HEIGHT: v28, VOICE_PANEL_CARD_INNER_PADDING };
        const fn3 = function p() {
          const obj = { transform: null };
          const items = [{ rotate: "" + sharedValue1.get() + "deg" }];
          obj.transform = items;
          return obj;
        };
        fn3.__closure = { angle: sharedValue1 };
        fn3.__workletHash = 12957595468302;
        fn3.__initData = __initData14;
        const animatedStyle1 = controlsHidden(sharedValue1[12]).useAnimatedStyle(fn3);
        const obj9 = { style: null, children: null };
        const items1 = [animatedStyle, tmp.ringingIconContainer];
        obj9.style = items1;
        const obj8 = controlsHidden(sharedValue1[12]);
        let tmp14 = !stateFromStores;
        const tmp12 = sharedValue(sharedValue1[41]);
        if (!stateFromStores) {
          tmp14 = animatedStyle1;
        }
        const obj10 = { style: tmp14, pointerEvents: "none", children: null };
        const tmp13 = sharedValue(sharedValue1[41]);
        obj10.children = closure_16(controlsHidden(sharedValue1[13]).Icon, {
          source: tmp7(sharedValue1[40]),
          size: controlsHidden(sharedValue1[13]).IconSizes.SMALL_20,
          style: tmp.ringingIcon,
        });
        obj9.children = closure_16(tmp13, obj10);
        return closure_16(tmp12, obj9);
      },
);
ReactCompilerGating = fn(558);
let closure_49 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (controlsHidden) => {
        const cResult = c.c(2);
        controlsHidden = controlsHidden.controlsHidden;
        if (cResult[0] !== controlsHidden) {
          const obj2 = { theme: ThemeTypes.LIGHT, children: null };
          const obj3 = { controlsHidden };
          obj2.children = value2(closure_48, obj3);
          const tmp8 = value2(native.ThemeContextProvider, obj2);
          cResult[0] = controlsHidden;
          cResult[1] = tmp8;
          let tmp4 = tmp8;
        } else {
          tmp4 = cResult[1];
        }
        return tmp4;
      }
    : (controlsHidden) =>
        value2(native.ThemeContextProvider, {
          theme: ThemeTypes.LIGHT,
          children: value2(closure_48, { controlsHidden: controlsHidden.controlsHidden }),
        }),
);
ReactCompilerGating = fn(558);
let closure_50 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let tmp = dependencyMap;
        const cResult = showGameTag(576).c(15);
        ({ userId, textColor } = arg0);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { location: "VoicePanelCardFloatingControls" };
          cResult[0] = obj2;
          let first = obj2;
        } else {
          first = cResult[0];
        }
        let tmp4 = gameRecord;
        let obj = showGameTag(576);
        showGameTag = gameRecord(17298).useConfig(first).showGameTag;
        const first1 = gameRecord(9392)(userId, arg0.guildId, showGameTag)[0];
        let tmp6;
        if (showGameTag) {
          let application_id;
          if (first1 != null) {
            application_id = first1.application_id;
          }
          tmp6 = application_id;
        }
        if (cResult[1] !== tmp6) {
          const obj4 = { applicationId: tmp6 };
          cResult[1] = tmp6;
          cResult[2] = obj4;
          let tmp9 = obj4;
        } else {
          tmp9 = cResult[2];
        }
        gameRecord = tmp4(8323)(tmp9).gameRecord;
        const tmp10 = tmp4(5896)(gameRecord);
        dependencyMap = tmp10;
        noop = noop.useRef(false);
        if (cResult[3] === gameRecord) {
          if (cResult[4] === tmp10) {
            if (cResult[5] === showGameTag) {
              let tmp11 = cResult[6];
              let tmp12 = cResult[7];
            }
            const effect = obj5.useEffect(tmp11, tmp12);
            if (showGameTag) {
              if (null != gameRecord) {
                if (!tmp10) {
                  if (cResult[11] === gameRecord) {
                    if (cResult[12] === textColor) {
                      if (cResult[13] === userId) {
                        let tmp15 = cResult[14];
                      }
                      return tmp15;
                    }
                  }
                  const obj6 = { game: gameRecord, userId, textColor };
                  const tmp17 = closure_16(tmp4(17299), obj6);
                  cResult[11] = gameRecord;
                  cResult[12] = textColor;
                  cResult[13] = userId;
                  cResult[14] = tmp17;
                  tmp15 = tmp17;
                }
              }
            }
            if (cResult[8] === textColor) {
            }
            tmp4 = tmp4(9395);
            const obj7 = { userId, textColor };
            tmp = closure_16(tmp4, obj7);
            cResult[8] = textColor;
            cResult[9] = userId;
            cResult[10] = tmp;
          }
        }
        const fn = function h() {
          let tmp = showGameTag;
          if (showGameTag) {
            tmp = !ref.current;
          }
          if (tmp) {
            tmp = null != gameRecord;
          }
          if (tmp) {
            tmp = closure_2;
          }
          if (tmp) {
            const obj = useShouldOpenGameProfileModal;
            const items = [useShouldOpenGameProfileModal.RejectionReason.Obscured];
            obj.trackEntryPoint(false, gameRecord.id, items, GameProfileAnalyticUtils.GameProfileSources.CallTile);
            ref.current = true;
          }
        };
        let items = [showGameTag, gameRecord, tmp10];
        cResult[3] = gameRecord;
        cResult[4] = tmp10;
        cResult[5] = showGameTag;
        cResult[6] = fn;
        cResult[7] = items;
        tmp12 = items;
        tmp11 = fn;
        const obj3 = gameRecord(17298);
        obj5 = noop;
      }
    : (arg0) => {
        ({ userId, textColor } = arg0);
        let gameRecord;
        dependencyMap = undefined;
        noop = undefined;
        const showGameTag = gameRecord(17298).useConfig({ location: "VoicePanelCardFloatingControls" }).showGameTag;
        const first = gameRecord(9392)(userId, arg0.guildId, showGameTag)[0];
        let tmp5;
        let obj = gameRecord(17298);
        if (showGameTag) {
          let application_id;
          if (first != null) {
            application_id = first.application_id;
          }
          tmp5 = application_id;
        }
        gameRecord = gameRecord(8323)({ applicationId: tmp5 }).gameRecord;
        const tmp8 = gameRecord(5896)(gameRecord);
        dependencyMap = tmp8;
        noop = noop.useRef(false);
        let items = [showGameTag, gameRecord, tmp8];
        const effect = noop.useEffect(() => {
          let tmp = showGameTag;
          if (showGameTag) {
            tmp = !ref.current;
          }
          if (tmp) {
            tmp = null != gameRecord;
          }
          if (tmp) {
            tmp = closure_2;
          }
          if (tmp) {
            const obj = useShouldOpenGameProfileModal;
            const items = [useShouldOpenGameProfileModal.RejectionReason.Obscured];
            obj.trackEntryPoint(false, gameRecord.id, items, GameProfileAnalyticUtils.GameProfileSources.CallTile);
            ref.current = true;
          }
        }, items);
        if (showGameTag) {
          if (null != gameRecord) {
            if (!tmp8) {
              const obj2 = { game: gameRecord, userId, textColor };
              let tmp12 = closure_16(tmp(17299), obj2);
            }
            return tmp12;
          }
        }
        tmp12 = closure_16(tmp(9395), { userId, textColor });
        const tmp4 = gameRecord(8323);
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
ReactCompilerGating = fn(558);
let closure_61 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (controlsHidden) => {
        const cResult = controlsHidden(controlsSpecs[17]).c(58);
        controlsHidden = controlsHidden.controlsHidden;
        ({ label, layout, participant } = controlsHidden);
        const context = focused.useContext(channelId(controlsSpecs[18]));
        ({ guildId, channelId } = context);
        controlsSpecs = context.controlsSpecs;
        focused = context.focused;
        const connected = context.connected;
        const mode = context.mode;
        let obj = controlsHidden(controlsSpecs[17]);
        const isScreenReaderEnabled = controlsHidden(controlsSpecs[51]).useIsScreenReaderEnabled();
        const tmp7 = closure_22();
        const obj2 = controlsHidden(controlsSpecs[51]);
        let id;
        if (obj3.isStableParticipantWithUser(participant)) {
          id = participant.user.id;
        }
        const analyticsLocations = channelId(tmp2[52])().analyticsLocations;
        if (cResult[0] === analyticsLocations) {
          if (cResult[1] === channelId) {
            if (cResult[4] === channelId) {
              if (cResult[5] === id) {
                const tmp10 = cResult[6];
              }
              const isUserSecureFramesVerified = tmp(tmp2[54]).useIsUserSecureFramesVerified(tmp10);
              const type = participant.type;
              const tmpResult = tmp(tmp2[54]);
              const tmp4Result = channelId(tmp2[23]);
              let id1;
              if (tmpResult8.isStableParticipantWithUser(participant)) {
                id1 = participant.user.id;
              }
              const tmp4ResultResult = tmp4Result(type, id1, guildId, channelId);
              if (cResult[7] === guildId) {
                if (cResult[8] === id) {
                  let tmp18 = cResult[9];
                }
                const tmp19 = channelId(tmp2[55])(tmp18);
                if (cResult[10] !== tmp19) {
                  const obj4 = { displayNameStyles: tmp19 };
                  cResult[10] = tmp19;
                  cResult[11] = obj4;
                  let tmp20 = obj4;
                } else {
                  tmp20 = cResult[11];
                }
                const displayNameStylesFont = tmp(tmp2[56]).useDisplayNameStylesFont(tmp20);
                let num9 = 1;
                MODE_CHANGE_PHYSICS = tmp22;
                const tmp23 =
                  tmp4ResultResult.filter(
                    (type) =>
                      type.type !== controlsHidden(controlsSpecs[23]).VoicePanelCardUserStateIconType.STREAM_ICON,
                  ).length >= 1;
                VoicePanelModes = tmp23;
                const tmpResult9 = tmp(tmp2[56]);
                class W {
                  constructor() {
                    tmp = closure_10;
                    if (closure_10) {
                      tmp2 = focused;
                      tmp3 = null;
                      tmp = null == focused.get();
                    }
                    value = connected.get();
                    tmp5 = !value;
                    if (value) {
                      tmp6 = mode;
                      tmp7 = VoicePanelModes;
                      tmp5 = mode.get() === VoicePanelModes.PIP;
                    }
                    if (!tmp5) {
                      value1 = !tmp;
                      if (!tmp) {
                        tmp9 = controlsHidden;
                        value1 = controlsHidden.get();
                      }
                      tmp5 = value1;
                    }
                    return tmp5;
                  }
                }
                const obj5 = { hasHiddenVisibleIcon: tmp23, focused, connected, mode, VoicePanelModes, controlsHidden };
                W.__closure = obj5;
                W.__workletHash = 12564689742086;
                W.__initData = __initData15;
                const derivedValue = tmp(tmp2[12]).useDerivedValue(W);
                const tmpResult10 = tmp(tmp2[12]);
                if (derivedValue.get()) {
                  num9 = 0;
                }
                const sharedValue = tmp(tmp2[12]).useSharedValue(num9);
                const tmpResult11 = tmp(tmp2[12]);
                const fn2 = function j() {
                  return derivedValue.get();
                };
                const obj6 = { isPillHidden: derivedValue };
                fn2.__closure = obj6;
                fn2.__workletHash = 13352649643291;
                fn2.__initData = __initData16;
                const fn3 = function z(arg0) {
                  let num = 1;
                  if (arg0) {
                    num = 0;
                  }
                  const result = sharedValue.set(spring.withSpring(num, MODE_CHANGE_PHYSICS));
                };
                const obj7 = { pillOpacity: sharedValue, withSpring: tmp(tmp2[30]).withSpring, MODE_CHANGE_PHYSICS };
                fn3.__closure = obj7;
                fn3.__workletHash = 15019245300237;
                fn3.__initData = __initData17;
                const animatedReaction = tmp(tmp2[12]).useAnimatedReaction(fn2, fn3);
                const tmpResult12 = tmp(tmp2[12]);
                class Z {
                  constructor() {
                    obj = { opacity: closure_12.get(), top: null, height: null, pointerEvents: null };
                    obj2 = closure_11;
                    num = 0;
                    if (closure_11.get()) {
                      tmp = c21;
                      tmp2 = closure_12;
                      num = c21 + closure_12;
                    }
                    obj.top = num;
                    obj.height = c21;
                    str = "auto";
                    if (obj2.get()) {
                      str = "none";
                    }
                    obj.pointerEvents = str;
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
                const animatedStyle = tmp(tmp2[12]).useAnimatedStyle(Z);
                const tmpResult13 = tmp(tmp2[12]);
                const fn4 = function $() {
                  value = connected.get();
                  let tmp2 = !value;
                  if (value) {
                    let tmp4 = !isScreenReaderEnabled;
                    if (!isScreenReaderEnabled) {
                      tmp4 = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
                    }
                    if (tmp4) {
                      tmp4 = closure_9;
                    }
                    tmp2 = tmp4;
                  }
                  let num = "auto";
                  if (tmp2) {
                    num = "auto";
                    if (closure_9) {
                      num = 0;
                    }
                  }
                  const obj = { width: num, marginRight: null };
                  let num2 = 0;
                  if (tmp2) {
                    num2 = -4;
                  }
                  obj.marginRight = num2;
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
                const animatedStyle1 = tmp(tmp2[12]).useAnimatedStyle(fn4);
                if (cResult[12] !== tmp7.labelPositionContainer) {
                  const items = [tmp7.labelPositionContainer];
                  cResult[12] = tmp7.labelPositionContainer;
                  cResult[13] = items;
                  let tmp38 = items;
                } else {
                  tmp38 = cResult[13];
                }
                if (cResult[14] === animatedStyle) {
                  if (cResult[15] === tmp7.labelOuterContainer) {
                    let tmp41 = cResult[16];
                  }
                  if (cResult[17] === tmp4ResultResult) {
                    if (cResult[20] === animatedStyle1) {
                      if (cResult[23] !== displayNameStylesFont) {
                        let tmp48 = null != displayNameStylesFont;
                        if (tmp48) {
                          const obj10 = { fontFamily: displayNameStylesFont };
                          tmp48 = obj10;
                        }
                        cResult[23] = displayNameStylesFont;
                        cResult[24] = tmp48;
                        let tmp47 = tmp48;
                      } else {
                        tmp47 = cResult[24];
                      }
                      if (cResult[25] === tmp7.floatingText) {
                        if (cResult[26] === tmp47) {
                          let tmp49 = cResult[27];
                        }
                        if (cResult[28] === tmp4ResultResult) {
                          if (cResult[31] === label) {
                            if (cResult[32] === tmp49) {
                              if (cResult[33] === tmp50) {
                                let tmp53 = cResult[34];
                              }
                              if (cResult[35] === guildId) {
                                if (cResult[36] === participant.type) {
                                  if (cResult[37] === participant.user) {
                                    let tmp56 = cResult[38];
                                  }
                                  if (cResult[39] === isUserSecureFramesVerified) {
                                    if (cResult[40] === tmp7.secureFramesIcon) {
                                      let tmp61 = cResult[41];
                                    }
                                    if (cResult[42] === layout) {
                                      if (cResult[43] === tmp53) {
                                        if (cResult[44] === tmp56) {
                                          if (cResult[45] === tmp61) {
                                            if (cResult[46] === tmp46) {
                                              let tmp64 = cResult[47];
                                            }
                                            if (cResult[48] === layout) {
                                              if (cResult[49] === tmp64) {
                                                if (cResult[50] === tmp40) {
                                                  if (cResult[51] === tmp41) {
                                                    if (cResult[52] === tmp42) {
                                                      let tmp67 = cResult[53];
                                                    }
                                                    if (cResult[54] === tmp38) {
                                                      if (cResult[55] === layout) {
                                                        if (cResult[56] === tmp67) {
                                                          let tmp71 = cResult[57];
                                                        }
                                                        return tmp71;
                                                      }
                                                    }
                                                    const obj11 = {
                                                      style: tmp38,
                                                      layout,
                                                      pointerEvents: "box-none",
                                                      children: tmp67,
                                                    };
                                                    const tmp73 = closure_16(channelId(tmp2[41]), obj11);
                                                    cResult[54] = tmp38;
                                                    class W {
                                                      constructor() {
                                                        tmp = closure_10;
                                                        if (closure_10) {
                                                          tmp2 = focused;
                                                          tmp3 = null;
                                                          tmp = null == focused.get();
                                                        }
                                                        value = connected.get();
                                                        tmp5 = !value;
                                                        if (value) {
                                                          tmp6 = mode;
                                                          tmp7 = VoicePanelModes;
                                                          tmp5 = mode.get() === VoicePanelModes.PIP;
                                                        }
                                                        if (!tmp5) {
                                                          value1 = !tmp;
                                                          if (!tmp) {
                                                            tmp9 = controlsHidden;
                                                            value1 = controlsHidden.get();
                                                          }
                                                          tmp5 = value1;
                                                        }
                                                        return tmp5;
                                                      }
                                                    }
                                                    cResult[56] = tmp67;
                                                    cResult[57] = tmp73;
                                                    tmp71 = tmp73;
                                                  }
                                                }
                                              }
                                            }
                                            const obj12 = { onPress: tmp40, style: tmp41, layout, children: null };
                                            const items1 = [tmp42, tmp64];
                                            class W {
                                              constructor() {
                                                tmp = closure_10;
                                                if (closure_10) {
                                                  tmp2 = focused;
                                                  tmp3 = null;
                                                  tmp = null == focused.get();
                                                }
                                                value = connected.get();
                                                tmp5 = !value;
                                                if (value) {
                                                  tmp6 = mode;
                                                  tmp7 = VoicePanelModes;
                                                  tmp5 = mode.get() === VoicePanelModes.PIP;
                                                }
                                                if (!tmp5) {
                                                  value1 = !tmp;
                                                  if (!tmp) {
                                                    tmp9 = controlsHidden;
                                                    value1 = controlsHidden.get();
                                                  }
                                                  tmp5 = value1;
                                                }
                                                return tmp5;
                                              }
                                            }
                                            const tmp70 = closure_17(closure_20, obj12);
                                            cResult[48] = layout;
                                            cResult[49] = tmp64;
                                            cResult[50] = tmp40;
                                            cResult[51] = tmp41;
                                            cResult[52] = tmp42;
                                            cResult[53] = tmp70;
                                            tmp67 = tmp70;
                                          }
                                        }
                                      }
                                    }
                                    const obj13 = { style: tmp46, layout, children: null };
                                    const items2 = [tmp53, tmp56, tmp61];
                                    obj13.children = items2;
                                    class W {
                                      constructor() {
                                        tmp = closure_10;
                                        if (closure_10) {
                                          tmp2 = focused;
                                          tmp3 = null;
                                          tmp = null == focused.get();
                                        }
                                        value = connected.get();
                                        tmp5 = !value;
                                        if (value) {
                                          tmp6 = mode;
                                          tmp7 = VoicePanelModes;
                                          tmp5 = mode.get() === VoicePanelModes.PIP;
                                        }
                                        if (!tmp5) {
                                          value1 = !tmp;
                                          if (!tmp) {
                                            tmp9 = controlsHidden;
                                            value1 = controlsHidden.get();
                                          }
                                          tmp5 = value1;
                                        }
                                        return tmp5;
                                      }
                                    }
                                    cResult[42] = layout;
                                    cResult[43] = tmp53;
                                    cResult[44] = tmp56;
                                    cResult[45] = tmp61;
                                    cResult[46] = tmp46;
                                    cResult[47] = tmp66;
                                    tmp64 = tmp66;
                                  }
                                  let tmp62 = isUserSecureFramesVerified;
                                  if (isUserSecureFramesVerified) {
                                    const obj14 = {
                                      style: tmp7.secureFramesIcon,
                                      size: "xs",
                                      accessibilityLabel: null,
                                    };
                                    const intl = tmp(tmp2[24]).intl;
                                    obj14.accessibilityLabel = intl.string(tmp(tmp2[24]).t.mR9cf3);
                                    tmp62 = closure_16(tmp(tmp2[58]).ShieldLockIcon, obj14);
                                  }
                                  cResult[39] = isUserSecureFramesVerified;
                                  cResult[40] = tmp7.secureFramesIcon;
                                  cResult[41] = tmp62;
                                  tmp61 = tmp62;
                                }
                              }
                              let tmp58 = participant.type === constants.USER;
                              if (tmp58) {
                                const obj15 = { userId: participant.user.id, guildId, textColor: "text-overlay-light" };
                                tmp58 = closure_16(closure_50, obj15);
                              }
                              cResult[35] = guildId;
                              cResult[36] = participant.type;
                              cResult[37] = participant.user;
                              class W {
                                constructor() {
                                  tmp = closure_10;
                                  if (closure_10) {
                                    tmp2 = focused;
                                    tmp3 = null;
                                    tmp = null == focused.get();
                                  }
                                  value = connected.get();
                                  tmp5 = !value;
                                  if (value) {
                                    tmp6 = mode;
                                    tmp7 = VoicePanelModes;
                                    tmp5 = mode.get() === VoicePanelModes.PIP;
                                  }
                                  if (!tmp5) {
                                    value1 = !tmp;
                                    if (!tmp) {
                                      tmp9 = controlsHidden;
                                      value1 = controlsHidden.get();
                                    }
                                    tmp5 = value1;
                                  }
                                  return tmp5;
                                }
                              }
                              cResult[38] = tmp58;
                              tmp56 = tmp58;
                            }
                          }
                          const obj16 = {
                            variant: "heading-sm/semibold",
                            color: "text-overlay-light",
                            lineClamp: 1,
                            style: tmp49,
                            ellipsizeMode: "tail",
                            accessibilityLabel: tmp50,
                            children: label,
                          };
                          const tmp55 = closure_16(tmp(tmp2[57]).Text, obj16);
                          cResult[31] = label;
                          class W {
                            constructor() {
                              tmp = closure_10;
                              if (closure_10) {
                                tmp2 = focused;
                                tmp3 = null;
                                tmp = null == focused.get();
                              }
                              value = connected.get();
                              tmp5 = !value;
                              if (value) {
                                tmp6 = mode;
                                tmp7 = VoicePanelModes;
                                tmp5 = mode.get() === VoicePanelModes.PIP;
                              }
                              if (!tmp5) {
                                value1 = !tmp;
                                if (!tmp) {
                                  tmp9 = controlsHidden;
                                  value1 = controlsHidden.get();
                                }
                                tmp5 = value1;
                              }
                              return tmp5;
                            }
                          }
                          cResult[33] = tmp50;
                          cResult[34] = tmp55;
                          tmp53 = tmp55;
                        }
                        cResult[28] = tmp4ResultResult;
                        cResult[29] = label;
                        cResult[30] = getAccessibilityLabel(tmp4ResultResult, label);
                        class W {
                          constructor() {
                            tmp = closure_10;
                            if (closure_10) {
                              tmp2 = focused;
                              tmp3 = null;
                              tmp = null == focused.get();
                            }
                            value = connected.get();
                            tmp5 = !value;
                            if (value) {
                              tmp6 = mode;
                              tmp7 = VoicePanelModes;
                              tmp5 = mode.get() === VoicePanelModes.PIP;
                            }
                            if (!tmp5) {
                              value1 = !tmp;
                              if (!tmp) {
                                tmp9 = controlsHidden;
                                value1 = controlsHidden.get();
                              }
                              tmp5 = value1;
                            }
                            return tmp5;
                          }
                        }
                        const tmp52 = getAccessibilityLabel(tmp4ResultResult, label);
                      }
                      const items3 = [tmp7.floatingText, tmp47];
                      cResult[25] = tmp7.floatingText;
                      cResult[26] = tmp47;
                      class W {
                        constructor() {
                          tmp = closure_10;
                          if (closure_10) {
                            tmp2 = focused;
                            tmp3 = null;
                            tmp = null == focused.get();
                          }
                          value = connected.get();
                          tmp5 = !value;
                          if (value) {
                            tmp6 = mode;
                            tmp7 = VoicePanelModes;
                            tmp5 = mode.get() === VoicePanelModes.PIP;
                          }
                          if (!tmp5) {
                            value1 = !tmp;
                            if (!tmp) {
                              tmp9 = controlsHidden;
                              value1 = controlsHidden.get();
                            }
                            tmp5 = value1;
                          }
                          return tmp5;
                        }
                      }
                      tmp49 = items3;
                    }
                    const items4 = [tmp7.floatingContainer, animatedStyle1];
                    cResult[20] = animatedStyle1;
                    cResult[21] = tmp7.floatingContainer;
                    cResult[22] = items4;
                    class W {
                      constructor() {
                        tmp = closure_10;
                        if (closure_10) {
                          tmp2 = focused;
                          tmp3 = null;
                          tmp = null == focused.get();
                        }
                        value = connected.get();
                        tmp5 = !value;
                        if (value) {
                          tmp6 = mode;
                          tmp7 = VoicePanelModes;
                          tmp5 = mode.get() === VoicePanelModes.PIP;
                        }
                        if (!tmp5) {
                          value1 = !tmp;
                          if (!tmp) {
                            tmp9 = controlsHidden;
                            value1 = controlsHidden.get();
                          }
                          tmp5 = value1;
                        }
                        return tmp5;
                      }
                    }
                  }
                  let tmp43 = tmp4ResultResult.length > 0;
                  if (tmp43) {
                    const obj17 = {
                      style: tmp7.initialIcons,
                      children: tmp4ResultResult.map((icon) => closure_1_16(closure_1_26, { icon }, icon.type)),
                    };
                    tmp43 = closure_16(channelId(tmp2[28]), obj17);
                    const tmp4Result2 = channelId(tmp2[28]);
                  }
                  cResult[17] = tmp4ResultResult;
                  cResult[18] = tmp7.initialIcons;
                  cResult[19] = tmp43;
                  class W {
                    constructor() {
                      tmp = closure_10;
                      if (closure_10) {
                        tmp2 = focused;
                        tmp3 = null;
                        tmp = null == focused.get();
                      }
                      value = connected.get();
                      tmp5 = !value;
                      if (value) {
                        tmp6 = mode;
                        tmp7 = VoicePanelModes;
                        tmp5 = mode.get() === VoicePanelModes.PIP;
                      }
                      if (!tmp5) {
                        value1 = !tmp;
                        if (!tmp) {
                          tmp9 = controlsHidden;
                          value1 = controlsHidden.get();
                        }
                        tmp5 = value1;
                      }
                      return tmp5;
                    }
                  }
                }
                const items5 = [tmp7.labelOuterContainer, animatedStyle];
                cResult[14] = animatedStyle;
                cResult[15] = tmp7.labelOuterContainer;
                cResult[16] = items5;
                tmp41 = items5;
                const tmpResult14 = tmp(tmp2[12]);
              }
              const obj18 = { userId: id, guildId };
              cResult[7] = guildId;
              cResult[8] = id;
              cResult[9] = obj18;
              tmp18 = obj18;
              tmpResult8 = tmp(tmp2[31]);
            }
            const obj19 = { userId: id, channelId };
            cResult[4] = channelId;
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
        obj3 = controlsHidden(controlsSpecs[31]);
      }
    : (controlsHidden) => {
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
        const context = focused.useContext(channelId(controlsSpecs[18]));
        ({ guildId, channelId } = context);
        controlsSpecs = context.controlsSpecs;
        focused = context.focused;
        const connected = context.connected;
        const mode = context.mode;
        const isScreenReaderEnabled = controlsHidden(controlsSpecs[51]).useIsScreenReaderEnabled();
        const tmp6 = closure_22();
        let obj = focused;
        const obj2 = controlsHidden(controlsSpecs[51]);
        let id;
        if (obj3.isStableParticipantWithUser(participant)) {
          id = participant.user.id;
        }
        analyticsLocations = tmp(tmp2[52])().analyticsLocations;
        const items = [id, channelId, analyticsLocations];
        const callback = obj.useCallback(() => {
          if (null != id) {
            const obj = { userId: tmp, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
            showUserProfileActionSheetDefault(obj);
          }
        }, items);
        obj3 = controlsHidden(controlsSpecs[31]);
        let isUserSecureFramesVerified = controlsHidden(controlsSpecs[54]).useIsUserSecureFramesVerified({
          userId: id,
          channelId,
        });
        const tmp4Result = controlsHidden(controlsSpecs[54]);
        const tmpResult = channelId(controlsSpecs[23]);
        let id1;
        if (tmp4Result8.isStableParticipantWithUser(participant)) {
          id1 = participant.user.id;
        }
        const tmpResultResult = tmpResult(participant.type, id1, guildId, channelId);
        tmp4Result8 = controlsHidden(controlsSpecs[31]);
        const tmp12 = channelId(controlsSpecs[55])({ userId: id, guildId });
        const displayNameStylesFont = controlsHidden(controlsSpecs[56]).useDisplayNameStylesFont({
          displayNameStyles: tmp12,
        });
        let num = 1;
        MODE_CHANGE_PHYSICS = tmp14;
        const tmp15 =
          tmpResultResult.filter(
            (type) => type.type !== controlsHidden(controlsSpecs[23]).VoicePanelCardUserStateIconType.STREAM_ICON,
          ).length >= 1;
        VoicePanelModes = tmp15;
        const tmp4Result9 = controlsHidden(controlsSpecs[56]);
        const fn = function c() {
          let tmp = closure_10;
          if (closure_10) {
            tmp = null == focused.get();
          }
          value = connected.get();
          let tmp5 = !value;
          if (value) {
            tmp5 = mode.get() === VoicePanelModes.PIP;
          }
          if (!tmp5) {
            value2 = !tmp;
            if (!tmp) {
              value2 = controlsHidden.get();
            }
            tmp5 = value2;
          }
          return tmp5;
        };
        fn.__closure = { hasHiddenVisibleIcon: tmp15, focused, connected, mode, VoicePanelModes, controlsHidden };
        fn.__workletHash = 7935160281192;
        fn.__initData = __initData20;
        derivedValue = controlsHidden(controlsSpecs[12]).useDerivedValue(fn);
        const obj4 = { hasHiddenVisibleIcon: tmp15, focused, connected, mode, VoicePanelModes, controlsHidden };
        const tmp4Result10 = controlsHidden(controlsSpecs[12]);
        if (derivedValue.get()) {
          num = 0;
        }
        sharedValue = controlsHidden(controlsSpecs[12]).useSharedValue(num);
        const tmp4Result11 = controlsHidden(controlsSpecs[12]);
        const fn2 = function u() {
          return derivedValue.get();
        };
        fn2.__closure = { isPillHidden: derivedValue };
        fn2.__workletHash = 7247821634750;
        fn2.__initData = __initData21;
        const fn3 = function _(arg0) {
          let num = 1;
          if (arg0) {
            num = 0;
          }
          const result = sharedValue.set(spring.withSpring(num, MODE_CHANGE_PHYSICS));
        };
        const tmp4Result12 = controlsHidden(controlsSpecs[12]);
        fn3.__closure = {
          pillOpacity: sharedValue,
          withSpring: controlsHidden(controlsSpecs[30]).withSpring,
          MODE_CHANGE_PHYSICS,
        };
        fn3.__workletHash = 1131754503018;
        fn3.__initData = __initData22;
        const animatedReaction = tmp4Result12.useAnimatedReaction(fn2, fn3);
        const obj5 = {
          pillOpacity: sharedValue,
          withSpring: controlsHidden(controlsSpecs[30]).withSpring,
          MODE_CHANGE_PHYSICS,
        };
        const fn4 = function j() {
          const obj = { opacity: sharedValue.get(), top: null, height: null, pointerEvents: null };
          let num = 0;
          if (derivedValue.get()) {
            num = height + closure_12;
          }
          obj.top = num;
          obj.height = height;
          let str = "auto";
          if (derivedValue.get()) {
            str = "none";
          }
          obj.pointerEvents = str;
          return obj;
        };
        fn4.__closure = {
          pillOpacity: sharedValue,
          isPillHidden: derivedValue,
          FLOATING_BAR_HEIGHT: v28,
          VOICE_PANEL_CARD_INNER_PADDING: sharedValue,
        };
        fn4.__workletHash = 12126381522874;
        fn4.__initData = __initData23;
        const animatedStyle = controlsHidden(controlsSpecs[12]).useAnimatedStyle(fn4);
        const obj6 = {
          pillOpacity: sharedValue,
          isPillHidden: derivedValue,
          FLOATING_BAR_HEIGHT: v28,
          VOICE_PANEL_CARD_INNER_PADDING: sharedValue,
        };
        const tmp4Result13 = controlsHidden(controlsSpecs[12]);
        class K {
          constructor() {
            value = connected.get();
            tmp2 = !value;
            if (value) {
              tmp3 = closure_6;
              tmp4 = !closure_6;
              if (!closure_6) {
                tmp5 = controlsSpecs;
                tmp6 = VoicePanelControlsModes;
                tmp4 = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
              }
              if (tmp4) {
                tmp4 = closure_9;
              }
              tmp2 = tmp4;
            }
            num = "auto";
            if (tmp2) {
              tmp7 = closure_9;
              num = "auto";
              if (closure_9) {
                num = 0;
              }
            }
            obj = { width: num, marginRight: null };
            num2 = 0;
            if (tmp2) {
              num2 = -4;
            }
            obj.marginRight = num2;
            return obj;
          }
        }
        K.__closure = {
          connected,
          isScreenReaderEnabled,
          controlsSpecs,
          VoicePanelControlsModes: derivedValue,
          hasIcon: tmpResultResult.length >= 1,
          GAP: 4,
        };
        K.__workletHash = 9996732216246;
        K.__initData = __initData24;
        const items1 = [tmp6.labelPositionContainer];
        const animatedStyle1 = controlsHidden(controlsSpecs[12]).useAnimatedStyle(K);
        const obj8 = { style: items1, layout, pointerEvents: "box-none", children: null };
        let tmp24;
        const obj7 = {
          connected,
          isScreenReaderEnabled,
          controlsSpecs,
          VoicePanelControlsModes: derivedValue,
          hasIcon: tmpResultResult.length >= 1,
          GAP: 4,
        };
        const tmp4Result14 = controlsHidden(controlsSpecs[12]);
        if (null != id) {
          tmp24 = callback;
        }
        const obj9 = { onPress: tmp24, style: null, layout, children: null };
        const items2 = [tmp6.labelOuterContainer, animatedStyle];
        obj9.style = items2;
        let tmp20Result = tmpResultResult.length > 0;
        if (tmp20Result) {
          const obj10 = {
            style: tmp6.initialIcons,
            children: tmpResultResult.map((icon) => closure_1_16(closure_1_26, { icon }, icon.type)),
          };
          tmp20Result = closure_16(tmp(tmp2[28]), obj10);
          const tmpResult5 = tmp(tmp2[28]);
        }
        const items3 = [tmp20Result];
        const obj11 = { style: null, layout, children: null };
        const items4 = [tmp6.floatingContainer, animatedStyle1];
        obj11.style = items4;
        const tmpResult4 = channelId(controlsSpecs[41]);
        const items5 = [tmp6.floatingText];
        let tmp28 = null != displayNameStylesFont;
        if (tmp28) {
          const obj12 = { fontFamily: displayNameStylesFont };
          tmp28 = obj12;
        }
        const tmpResult6 = channelId(controlsSpecs[41]);
        items5[1] = tmp28;
        const items6 = [
          closure_16(controlsHidden(controlsSpecs[57]).Text, {
            variant: "heading-sm/semibold",
            color: "text-overlay-light",
            lineClamp: 1,
            style: items5,
            ellipsizeMode: "tail",
            accessibilityLabel: getAccessibilityLabel(tmpResultResult, label),
            children: label,
          }),
          ,
        ];
        let tmp20Result2 = participant.type === constants.USER;
        if (tmp20Result2) {
          const obj14 = { userId: participant.user.id, guildId, textColor: "text-overlay-light" };
          tmp20Result2 = closure_16(closure_50, obj14);
        }
        items6[1] = tmp20Result2;
        if (isUserSecureFramesVerified) {
          const obj15 = { style: tmp6.secureFramesIcon, size: "xs", accessibilityLabel: null };
          const intl = tmp4(tmp2[24]).intl;
          obj15.accessibilityLabel = intl.string(tmp4(tmp2[24]).t.mR9cf3);
          isUserSecureFramesVerified = closure_16(tmp4(tmp2[58]).ShieldLockIcon, obj15);
        }
        items6[2] = isUserSecureFramesVerified;
        obj11.children = items6;
        items3[1] = closure_17(tmpResult6, obj11);
        obj9.children = items3;
        obj8.children = closure_17(closure_20, obj9);
        return closure_16(tmpResult4, obj8);
      },
);
const __initData25 = {
  code: "function VoicePanelCardFloatingControlsTsx29(){const{controlsSpecs,VoicePanelControlsModes,focused,mode,VoicePanelModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN||focused.get()!=null||mode.get()===VoicePanelModes.PIP;}",
};
const __initData26 = {
  code: "function VoicePanelCardFloatingControlsTsx30(){const{controlsSpecs,VoicePanelControlsModes,focused,mode,VoicePanelModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN||focused.get()!=null||mode.get()===VoicePanelModes.PIP;}",
};
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = participant(controlsSpecs[17]).c(33);
        ({ label, participant } = arg0);
        ({ isRinging, layout } = arg0);
        const context = focused.useContext(guildId(controlsSpecs[18]));
        guildId = context.guildId;
        controlsSpecs = context.controlsSpecs;
        focused = context.focused;
        const mode = context.mode;
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
        let obj = participant(controlsSpecs[17]);
        const tmp4 = guildId;
        const stateFromStores = participant(controlsSpecs[38]).useStateFromStores(tmp6, tmp7);
        const tmpResult = participant(controlsSpecs[38]);
        const tmp10 = participant(controlsSpecs[31]).isStableParticipantWithUser(participant) && participant.isSelf;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [EmbeddedActivitiesStore, ApplicationStreamingStore];
          cResult[2] = items1;
          let tmp11 = items1;
        } else {
          tmp11 = cResult[2];
        }
        if (cResult[3] === guildId) {
          if (cResult[4] === participant) {
            let tmp14 = cResult[5];
          }
          const stateFromStores1 = participant(tmp2[38]).useStateFromStores(tmp11, tmp14);
          const tmp16 = tmp4(tmp2[59])(guildId, context.channelId, participant.id);
          const tmpResult6 = participant(tmp2[38]);
          class G {
            constructor() {
              tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
              if (!tmp) {
                tmp2 = focused;
                tmp3 = null;
                tmp = null != focused.get();
              }
              if (!tmp) {
                tmp4 = mode;
                tmp5 = VoicePanelModes;
                tmp = mode.get() === VoicePanelModes.PIP;
              }
              return tmp;
            }
          }
          const obj2 = { controlsSpecs, VoicePanelControlsModes, focused, mode, VoicePanelModes };
          G.__closure = obj2;
          G.__workletHash = 15157168637339;
          G.__initData = __initData25;
          const derivedValue = participant(tmp2[12]).useDerivedValue(G);
          if (cResult[6] === derivedValue) {
            if (cResult[7] === label) {
              if (cResult[8] === layout) {
                if (cResult[9] === participant) {
                  let tmp21 = cResult[10];
                }
                if (cResult[11] === derivedValue) {
                  if (cResult[12] === isRinging) {
                    let tmp26 = cResult[13];
                  }
                  if (cResult[14] === derivedValue) {
                    if (cResult[15] === stateFromStores) {
                      if (cResult[16] === tmp10) {
                        if (cResult[17] === stateFromStores1) {
                          if (cResult[18] === layout) {
                            if (cResult[19] === participant) {
                              let tmp30 = cResult[20];
                            }
                            if (cResult[21] === derivedValue) {
                              if (cResult[22] === stateFromStores) {
                                if (cResult[23] === label) {
                                  if (cResult[24] === layout) {
                                    if (cResult[25] === participant) {
                                      if (cResult[26] === tmp16) {
                                        let tmp34 = cResult[27];
                                      }
                                      if (cResult[28] === tmp21) {
                                        if (cResult[29] === tmp26) {
                                          if (cResult[30] === tmp30) {
                                            if (cResult[31] === tmp34) {
                                              let tmp38 = cResult[32];
                                            }
                                            return tmp38;
                                          }
                                        }
                                      }
                                      const obj3 = { children: null };
                                      class G {
                                        constructor() {
                                          tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
                                          if (!tmp) {
                                            tmp2 = focused;
                                            tmp3 = null;
                                            tmp = null != focused.get();
                                          }
                                          if (!tmp) {
                                            tmp4 = mode;
                                            tmp5 = VoicePanelModes;
                                            tmp = mode.get() === VoicePanelModes.PIP;
                                          }
                                          return tmp;
                                        }
                                      }
                                      tmp41[0] = tmp26;
                                      tmp41[1] = tmp30;
                                      tmp41[2] = tmp34;
                                      tmp41[3] = tmp21;
                                      obj3.children = tmp41;
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
                            let tmp35 = stateFromStores;
                            if (stateFromStores) {
                              tmp35 = tmp16;
                            }
                            if (tmp35) {
                              const obj4 = {
                                controlsHidden: derivedValue,
                                participantId: participant.id,
                                targetName: null,
                                isActivityParticipant: null,
                                layout: null,
                              };
                              class G {
                                constructor() {
                                  tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
                                  if (!tmp) {
                                    tmp2 = focused;
                                    tmp3 = null;
                                    tmp = null != focused.get();
                                  }
                                  if (!tmp) {
                                    tmp4 = mode;
                                    tmp5 = VoicePanelModes;
                                    tmp = mode.get() === VoicePanelModes.PIP;
                                  }
                                  return tmp;
                                }
                              }
                              obj4.isActivityParticipant = participant(tmp2[31]).isStableActivityParticipant(
                                participant,
                              );
                              obj4.layout = layout;
                              tmp35 = closure_16(closure_34, obj4);
                              const tmpResult8 = participant(tmp2[31]);
                            }
                            class G {
                              constructor() {
                                tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
                                if (!tmp) {
                                  tmp2 = focused;
                                  tmp3 = null;
                                  tmp = null != focused.get();
                                }
                                if (!tmp) {
                                  tmp4 = mode;
                                  tmp5 = VoicePanelModes;
                                  tmp = mode.get() === VoicePanelModes.PIP;
                                }
                                return tmp;
                              }
                            }
                            cResult[21] = derivedValue;
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
                  let tmp31 = stateFromStores;
                  if (stateFromStores) {
                    tmp31 = stateFromStores1;
                  }
                  if (tmp31) {
                    const obj5 = { controlsHidden: derivedValue, participant, isSelf: null, layout: null };
                    class G {
                      constructor() {
                        tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
                        if (!tmp) {
                          tmp2 = focused;
                          tmp3 = null;
                          tmp = null != focused.get();
                        }
                        if (!tmp) {
                          tmp4 = mode;
                          tmp5 = VoicePanelModes;
                          tmp = mode.get() === VoicePanelModes.PIP;
                        }
                        return tmp;
                      }
                    }
                    obj5.layout = layout;
                    tmp31 = closure_16(closure_31, obj5);
                  }
                  class G {
                    constructor() {
                      tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
                      if (!tmp) {
                        tmp2 = focused;
                        tmp3 = null;
                        tmp = null != focused.get();
                      }
                      if (!tmp) {
                        tmp4 = mode;
                        tmp5 = VoicePanelModes;
                        tmp = mode.get() === VoicePanelModes.PIP;
                      }
                      return tmp;
                    }
                  }
                  cResult[14] = derivedValue;
                  cResult[15] = stateFromStores;
                  cResult[16] = tmp10;
                  cResult[17] = stateFromStores1;
                  cResult[18] = layout;
                  cResult[19] = participant;
                  cResult[20] = tmp31;
                  tmp30 = tmp31;
                }
                let tmp27 = isRinging;
                if (isRinging) {
                  const obj6 = { controlsHidden: derivedValue };
                  tmp27 = closure_16(closure_49, obj6);
                }
                class G {
                  constructor() {
                    tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
                    if (!tmp) {
                      tmp2 = focused;
                      tmp3 = null;
                      tmp = null != focused.get();
                    }
                    if (!tmp) {
                      tmp4 = mode;
                      tmp5 = VoicePanelModes;
                      tmp = mode.get() === VoicePanelModes.PIP;
                    }
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
            const obj7 = { controlsHidden: derivedValue, label, layout: null, participant: null };
            class G {
              constructor() {
                tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
                if (!tmp) {
                  tmp2 = focused;
                  tmp3 = null;
                  tmp = null != focused.get();
                }
                if (!tmp) {
                  tmp4 = mode;
                  tmp5 = VoicePanelModes;
                  tmp = mode.get() === VoicePanelModes.PIP;
                }
                return tmp;
              }
            }
            obj7.participant = participant;
            tmp23 = closure_16(closure_61, obj7);
          }
          cResult[6] = derivedValue;
          cResult[7] = label;
          cResult[8] = layout;
          cResult[9] = participant;
          cResult[10] = tmp23;
          tmp21 = tmp23;
          const tmpResult7 = participant(tmp2[12]);
        }
        class T {
          constructor() {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[31]);
            tmp3 = participant;
            if (obj.isStableActivityParticipant(participant)) {
              tmp8 = closure_6;
              currentEmbeddedActivity = closure_6.getCurrentEmbeddedActivity();
              tmp10 = null;
              applicationId = undefined;
              if (currentEmbeddedActivity != null) {
                applicationId = currentEmbeddedActivity.applicationId;
              }
              return tmp3.applicationId === applicationId;
            } else {
              tmpResult = tmp(tmp2[31]);
              tmp4 = tmpResult.isStableStreamParticipant(tmp3);
              if (tmp4) {
                tmp5 = closure_7;
                tmp6 = guildId;
                tmp7 = null;
                tmp4 = null != closure_7.getActiveStreamForUser(tmp3.user.id, guildId);
              }
              return tmp4;
            }
          }
        }
        cResult[3] = guildId;
        cResult[4] = participant;
        cResult[5] = T;
        tmp14 = T;
        const tmpResult5 = participant(controlsSpecs[31]);
      }
    : (arg0) => {
        ({ label, participant } = arg0);
        ({ isRinging, layout } = arg0);
        let guildId;
        let controlsSpecs;
        let focused;
        const context = focused.useContext(guildId(controlsSpecs[18]));
        guildId = context.guildId;
        controlsSpecs = context.controlsSpecs;
        focused = context.focused;
        const mode = context.mode;
        const items = [RTCConnectionStore];
        let stateFromStores = participant(controlsSpecs[38]).useStateFromStores(items, () => connected.isConnected());
        let obj = participant(controlsSpecs[38]);
        let tmp = guildId;
        const obj2 = participant(controlsSpecs[31]);
        const tmp6 = participant(controlsSpecs[31]).isStableParticipantWithUser(participant) && participant.isSelf;
        const items1 = [EmbeddedActivitiesStore, ApplicationStreamingStore];
        const stateFromStores1 = participant(controlsSpecs[38]).useStateFromStores(items1, () => {
          if (obj.isStableActivityParticipant(participant)) {
            const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
            let applicationId;
            if (currentEmbeddedActivity != null) {
              applicationId = currentEmbeddedActivity.applicationId;
            }
            return participant.applicationId === applicationId;
          } else {
            let result = useStableParticipant.isStableStreamParticipant(participant);
            if (result) {
              result = null != ApplicationStreamingStore.getActiveStreamForUser(participant.user.id, guildId);
            }
            return result;
          }
          obj = useStableParticipant;
        });
        const tmp4Result = participant(controlsSpecs[38]);
        const tmp8 = tmp(controlsSpecs[59])(guildId, context.channelId, participant.id);
        class I {
          constructor() {
            tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
            if (!tmp) {
              tmp2 = focused;
              tmp3 = null;
              tmp = null != focused.get();
            }
            if (!tmp) {
              tmp4 = mode;
              tmp5 = VoicePanelModes;
              tmp = mode.get() === VoicePanelModes.PIP;
            }
            return tmp;
          }
        }
        I.__closure = { controlsSpecs, VoicePanelControlsModes, focused, mode, VoicePanelModes };
        I.__workletHash = 10271388297843;
        I.__initData = __initData26;
        const derivedValue = participant(controlsSpecs[12]).useDerivedValue(I);
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
        let tmp17 = stateFromStores;
        if (stateFromStores) {
          tmp17 = stateFromStores1;
        }
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
            isActivityParticipant: participant(tmp2[31]).isStableActivityParticipant(participant),
            layout,
          };
          stateFromStores = closure_16(closure_34, obj7);
          const tmp4Result4 = participant(tmp2[31]);
        }
        children[2] = stateFromStores;
        children[3] = tmp10;
        return closure_17(closure_18, { children });
      },
);
