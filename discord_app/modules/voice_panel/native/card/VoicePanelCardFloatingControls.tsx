// discord_app/modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import ReanimatedNativeViewDefault from "../../../core/native/ReanimatedNativeView.tsx";
import StreamActionCreators from "../../../../actions/StreamActionCreators.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import VoiceStateIcons from "../shared/VoiceStateIcons.tsx";
import VoiceStateIconUtils from "../utils/VoiceStateIconUtils.tsx";
import usePlayingGameActivitiesDefault from "../../../activities/hooks/usePlayingGameActivities.tsx";
import GameProfileAnalyticUtils from "../../../game_profile/GameProfileAnalyticUtils.tsx";
import useShouldOpenGameProfileModal from "../../../game_profile/hooks/useShouldOpenGameProfileModal.tsx";
import leaveEmbeddedActivity from "../../../activities/leaveEmbeddedActivity.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import VoiceXIcon from "../../../../design/components/Icon/native/redesign/generated/VoiceXIcon.tsx";
import _modDef11812 from "../../../../../_runtime/metro/11812__.js";
import useStableParticipant from "../utils/useStableParticipant.tsx";
import useVoicePanelCardUserStateIcons from "../hooks/useVoicePanelCardUserStateIcons.tsx";
import _modDef19056 from "../../../../../_runtime/metro/19056__.js";
import getRandomNumberInRangeDefault from "../utils/getRandomNumberInRange.tsx";
import _modDef19105 from "../../../../../_runtime/metro/19105__.js";
import _modDef19106 from "../../../../../_runtime/metro/19106__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";
import ReanimatedRexport_mod from "../../../reanimated/ReanimatedRexport.tsx";

const useGameProfileObscuredDefault = tmp3(8640);
const GuildTagDefault = tmp3(9262);
const useResolveGameDefault = tmp3(9286);
const GameTagChipletDefault = tmp3(19110);
require = fn;
function getAccessibilityLabel(tmp4ResultResult, label) {
  if (null != tmp4ResultResult.find((type) => type.type === require("useVoicePanelCardUserStateIcons").VoicePanelCardUserStateIconType.STREAM_ICON)) {
    const intl3 = util.intl;
    const obj2 = { username: label };
    return intl3.formatToPlainString(util.t.I0mOAs, obj2);
  } else {
    const found = tmp4ResultResult.find((type) => type.type === require("useVoicePanelCardUserStateIcons").VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON);
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
({ PixelRatio, Platform, Pressable } = get_ActivityIndicator);
const VoicePanelConstants = fn(10974);
({ MODE_CHANGE_PHYSICS: closure_9, VoicePanelModes: c10 } = VoicePanelConstants);
const VoicePanelControlsModes = fn(10972).VoicePanelControlsModes;
const VOICE_PANEL_CARD_INNER_PADDING = fn(10977).VOICE_PANEL_CARD_INNER_PADDING;
const ThemeTypes = fn(1084).ThemeTypes;
const CallConstants = fn(5670);
({ ParticipantTypes: closure_14, VoicePlatforms: closure_15 } = CallConstants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_19 = ReanimatedRexport.createAnimatedComponent(fn(1199).Icon);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_20 = ReanimatedRexport.createAnimatedComponent(Pressable);
let c21 = 28;
const paddingVertical = PixelRatio.roundToNearestPixel(4);
const createStyles = fn(5005);
let closure_23 = createStyles.createStyles(() => {
  const obj = { topLeftButton: null, topRightButton: { position: "absolute", top: VOICE_PANEL_CARD_INNER_PADDING, right: VOICE_PANEL_CARD_INNER_PADDING, zIndex: 1 }, labelPositionContainer: null, labelHideWrapper: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center" }, labelOuterContainer: { display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden", paddingHorizontal: 8, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, height: v28, gap: 4 }, initialIcons: { display: "flex", flexDirection: "row", marginStart: -4, marginEnd: -4 }, icon: null, iconWithoutBackground: null, iconContainer: null, speakerMuteIcon: null, floatingContainer: null, floatingText: null, ringingIconContainer: null, ringingIcon: null, secureFramesIcon: null };
  const rect = { position: "absolute", top: VOICE_PANEL_CARD_INNER_PADDING, left: VOICE_PANEL_CARD_INNER_PADDING, zIndex: 1 };
  obj.topLeftButton = rect;
  const rect1 = { position: "absolute", left: 8, right: 8, bottom: 8, height: v28, marginHorizontal: 8 };
  obj.labelPositionContainer = rect1;
  const size = { width: 12, height: 12, tintColor: nativeDefault.colors.WHITE };
  obj.icon = size;
  const size1 = { width: 16, height: 16, tintColor: nativeDefault.colors.WHITE };
  obj.iconWithoutBackground = size1;
  const size2 = { width: 20, height: 20, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
  obj.iconContainer = size2;
  obj.speakerMuteIcon = { marginRight: 4 };
  obj.floatingContainer = { flexDirection: "row", alignItems: "center", gap: 4, overflow: "hidden", flexShrink: 1, alignSelf: "stretch" };
  obj.floatingText = { overflow: "hidden", paddingStart: 4, paddingEnd: 4, paddingVertical, marginVertical: -paddingVertical, flexShrink: 1, lineHeight: 14 };
  const rect2 = { position: "absolute", top: 8, right: 8, padding: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  obj.ringingIconContainer = rect2;
  const obj2 = { display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden", paddingHorizontal: 8, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, height: v28, gap: 4 };
  const obj3 = { overflow: "hidden", paddingStart: 4, paddingEnd: 4, paddingVertical, marginVertical: -paddingVertical, flexShrink: 1, lineHeight: 14 };
  obj.ringingIcon = { tintColor: nativeDefault.colors.STATUS_POSITIVE };
  obj.secureFramesIcon = { marginEnd: -2 };
  return obj;
});
const __initData = { code: "function VoicePanelCardFloatingControlsTsx1(){const{controlsSpecs,VoicePanelControlsModes,GAP}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;return{marginLeft:hidden?2:GAP,marginRight:hidden?2:0};}" };
const __initData2 = { code: "function VoicePanelCardFloatingControlsTsx2(){const{controlsSpecs,VoicePanelControlsModes,GAP}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;return{marginLeft:hidden?2:GAP,marginRight:hidden?2:0};}" };
let ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function StreamIcon(voicePlatform) {
  const cResult = controlsSpecs(576).c(6);
  voicePlatform = voicePlatform.voicePlatform;
  const tmp3 = closure_23();
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
  const animatedStyle = controlsSpecs(5086).useAnimatedStyle(fn);
  let tmp4Result = _modDef19056;
  if (voicePlatform === constants2.XBOX) {
    tmp4Result = _modDef19105;
  } else if (voicePlatform === constants2.MOBILE) {
    tmp4Result = _modDef11812;
  } else if (voicePlatform === constants2.QUEST) {
    tmp4Result = _modDef19106;
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
  const obj2 = controlsSpecs(5086);
  const obj3 = { controlsSpecs, VoicePanelControlsModes, GAP: 4 };
}) : (function StreamIcon(voicePlatform) {
  voicePlatform = voicePlatform.voicePlatform;
  const controlsSpecs = noop.useContext(VoicePanelStateContextDefault).controlsSpecs;
  let tmp = closure_23();
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
  const animatedStyle = controlsSpecs(5086).useAnimatedStyle(fn);
  let tmp2Result = _modDef19056;
  if (voicePlatform === constants2.XBOX) {
    tmp2Result = _modDef19105;
  } else if (voicePlatform === constants2.MOBILE) {
    tmp2Result = _modDef11812;
  } else if (voicePlatform === constants2.QUEST) {
    tmp2Result = _modDef19106;
  }
  const obj3 = { source: tmp2Result, style: null };
  const items = [tmp.iconWithoutBackground, animatedStyle];
  obj3.style = items;
  return closure_16(closure_19, obj3);
});
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedLabelIcon(icon) {
  const cResult = c.c(31);
  icon = icon.icon;
  const tmp4 = closure_23();
  const type = icon.type;
  if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.STREAM_ICON === type) {
    if (cResult[0] !== icon.voicePlatform) {
      const obj2 = { voicePlatform: icon.voicePlatform };
      const tmp51 = value3(closure_26, obj2);
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
      const tmp43 = value3(VoiceXIcon.VoiceXIcon, obj3);
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
    const obj4 = { style: tmp4.speakerMuteIcon, hitSlop: 12, onPress: icon.onPress, accessibilityRole: "button", accessibilityLabel: tmp39, children: tmp41 };
    const tmp47 = value3(Pressable, obj4);
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
        const obj5 = { style: tmp4.iconContainer, onPress: icon.onPress, accessibilityRole: "button", accessibilityLabel: tmp27, children: null };
        const obj6 = { style: tmp4.icon, state: icon.videoIconState };
        obj5.children = value3(VoiceStateIcons.VideoIcon, obj6);
        let tmp34 = value3(Pressable, obj5);
      } else {
        const obj7 = { style: tmp4.iconContainer, accessible: true, accessibilityRole: "image", accessibilityLabel: tmp27, children: null };
        const obj8 = { style: tmp4.icon, state: icon.videoIconState };
        obj7.children = value3(VoiceStateIcons.VideoIcon, obj8);
        tmp34 = value3(NativeViewDefault, obj7);
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
        const obj9 = { style: tmp4.iconContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp19 };
        const tmp26 = value3(NativeViewDefault, obj9);
        cResult[23] = tmp4.iconContainer;
        cResult[24] = tmp19;
        cResult[25] = tmp26;
        tmp23 = tmp26;
      }
      const obj10 = { onPress: icon.onPress, hitSlop: 12, children: tmp16 };
      const tmp22 = value3(Pressable, obj10);
      cResult[20] = icon.onPress;
      cResult[21] = tmp16;
      cResult[22] = tmp22;
      tmp19 = tmp22;
    }
    const obj11 = { style: tmp4.icon, state: icon.muteDeafenIconState, alwaysWhite: true };
    const tmp18 = value3(VoiceStateIcons.MuteDeafenIcon, obj11);
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
      const tmp11 = value3(CircleErrorIcon.CircleErrorIcon, obj12);
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
    const obj13 = { style: tmp4.iconContainer, onPress: icon.onPress, accessibilityRole: "button", accessibilityLabel: tmp6, children: tmp7 };
    const tmp15 = value3(Pressable, obj13);
    cResult[28] = icon.onPress;
    cResult[29] = tmp4.iconContainer;
    cResult[30] = tmp15;
    tmp12 = tmp15;
  }
}) : (function AnimatedLabelIcon(icon) {
  icon = icon.icon;
  const tmp = closure_23();
  const type = icon.type;
  if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.STREAM_ICON === type) {
    const obj2 = { voicePlatform: icon.voicePlatform };
    return value3(closure_26, obj2);
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.SPEAKER_MUTE_ICON === type) {
    const obj3 = { style: tmp.speakerMuteIcon, hitSlop: 12, onPress: icon.onPress, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const intl4 = util.intl;
    obj3.accessibilityLabel = intl4.string(util.t.Q8Uzof);
    const obj4 = { style: tmp.iconWithoutBackground };
    obj3.children = value3(VoiceXIcon.VoiceXIcon, obj4);
    return value3(Pressable, obj3);
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_VIDEO_ICON === type) {
    if (icon.videoIconState === VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO) {
      const intl3 = util.intl;
      let stringResult = intl3.string(util.t.uv1tVh);
    } else {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t["PXMZ/+"]);
    }
    if (null != icon.onPress) {
      const obj5 = { style: tmp.iconContainer, onPress: icon.onPress, accessibilityRole: "button", accessibilityLabel: stringResult, children: null };
      const obj6 = { style: tmp.icon, state: icon.videoIconState };
      obj5.children = value3(VoiceStateIcons.VideoIcon, obj6);
      let tmp16 = value3(Pressable, obj5);
    } else {
      const obj7 = { style: tmp.iconContainer, accessible: true, accessibilityRole: "image", accessibilityLabel: stringResult, children: null };
      const obj8 = { style: tmp.icon, state: icon.videoIconState };
      obj7.children = value3(VoiceStateIcons.VideoIcon, obj8);
      tmp16 = value3(NativeViewDefault, obj7);
    }
    return tmp16;
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON === type) {
    const obj9 = { style: tmp.iconContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    const obj10 = { onPress: icon.onPress, hitSlop: 12, children: null };
    const obj11 = { style: tmp.icon, state: icon.muteDeafenIconState, alwaysWhite: true };
    obj10.children = value3(VoiceStateIcons.MuteDeafenIcon, obj11);
    obj9.children = value3(Pressable, obj10);
    return value3(NativeViewDefault, obj9);
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_DISCONNECTED_ICON === type) {
    const obj = { style: tmp.iconContainer, onPress: icon.onPress, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.HFwRpk);
    const obj12 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
    obj.children = value3(CircleErrorIcon.CircleErrorIcon, obj12);
    return value3(Pressable, obj);
  }
});
let closure_29 = -28 + 3 * VOICE_PANEL_CARD_INNER_PADDING;
let closure_30 = 28 + VOICE_PANEL_CARD_INNER_PADDING;
const __initData3 = { code: "function VoicePanelCardFloatingControlsTsx3(){const{withSpring,hidden,MODE_CHANGE_PHYSICS,hiddenOffsetY}=this.__closure;return{opacity:withSpring(hidden.get()?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(hidden.get()?hiddenOffsetY:0,MODE_CHANGE_PHYSICS)}]};}" };
const __initData4 = { code: "function VoicePanelCardFloatingControlsTsx4(){const{withSpring,hidden,MODE_CHANGE_PHYSICS,hiddenOffsetY}=this.__closure;return{opacity:withSpring(hidden.get()?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(hidden.get()?hiddenOffsetY:0,MODE_CHANGE_PHYSICS)}]};}" };
ReactCompilerGating = fn(558);
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? (function useControlsHideStyles(hidden, hiddenOffsetY) {
  _require = hidden;
  closure_1 = hiddenOffsetY;
  const fn = function o() {
    let num = 1;
    if (hidden.get()) {
      num = 0;
    }
    const obj3 = { opacity: spring.withSpring(num, MODE_CHANGE_PHYSICS), transform: null };
    let num2 = 0;
    if (hidden.get()) {
      num2 = closure_1;
    }
    const tmpResult = spring;
    const items = [{ translateY: spring.withSpring(num2, MODE_CHANGE_PHYSICS) }];
    obj3.transform = items;
    return obj3;
  };
  let obj = require("ReanimatedRexport");
  fn.__closure = { withSpring: require("spring").withSpring, hidden, MODE_CHANGE_PHYSICS, hiddenOffsetY };
  fn.__workletHash = 17465031688867;
  fn.__initData = __initData3;
  return obj.useAnimatedStyle(fn);
}) : (function useControlsHideStyles(hidden, hiddenOffsetY) {
  _require = hidden;
  closure_1 = hiddenOffsetY;
  const fn = function o() {
    let num = 1;
    if (hidden.get()) {
      num = 0;
    }
    const obj3 = { opacity: spring.withSpring(num, MODE_CHANGE_PHYSICS), transform: null };
    let num2 = 0;
    if (hidden.get()) {
      num2 = closure_1;
    }
    const tmpResult = spring;
    const items = [{ translateY: spring.withSpring(num2, MODE_CHANGE_PHYSICS) }];
    obj3.transform = items;
    return obj3;
  };
  let obj = require("ReanimatedRexport");
  fn.__closure = { withSpring: require("spring").withSpring, hidden, MODE_CHANGE_PHYSICS, hiddenOffsetY };
  fn.__workletHash = 1152554995044;
  fn.__initData = __initData4;
  return obj.useAnimatedStyle(fn);
});
ReactCompilerGating = fn(558);
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? (function HideableTileControl(arg0) {
  const cResult = c.c(7);
  ({ style, hideStyles, layout, children } = arg0);
  if (cResult[0] === children) {
    if (cResult[1] === hideStyles) {
      let tmp3 = cResult[2];
    }
    if (cResult[3] === layout) {
      if (cResult[4] === style) {
        if (cResult[5] === tmp3) {
          let tmp5 = cResult[6];
        }
        return tmp5;
      }
    }
    const obj2 = { style, layout, pointerEvents: "box-none", children: tmp3 };
    const tmp8 = value3(ReanimatedNativeViewDefault, obj2);
    cResult[3] = layout;
    cResult[4] = style;
    cResult[5] = tmp3;
    cResult[6] = tmp8;
    tmp5 = tmp8;
  }
  const tmp4 = value3(ReanimatedNativeViewDefault, { style: hideStyles, pointerEvents: "box-none", children });
  cResult[0] = children;
  cResult[1] = hideStyles;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (function HideableTileControl(arg0) {
  ({ style, hideStyles, layout, children } = arg0);
  const obj = { style, layout, pointerEvents: "box-none", children: value3(ReanimatedNativeViewDefault, { style: hideStyles, pointerEvents: "box-none", children }) };
  return value3(ReanimatedNativeViewDefault, obj);
});
ReactCompilerGating = fn(558);
let closure_35 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function CloseButton(participant) {
  const cResult = participant(576).c(14);
  participant = participant.participant;
  ({ isSelf, layout } = participant);
  guildId = noop.useContext(guildId(10973)).guildId;
  const tmp5 = closure_23();
  const tmp6 = closure_33(participant.controlsHidden, closure_29);
  if (cResult[0] === guildId) {
    if (cResult[1] === participant) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] === isSelf) {
      if (cResult[4] === participant) {
        if (cResult[6] === tmp7) {
          if (cResult[7] === tmp8) {
            let tmp13 = cResult[8];
          }
          if (cResult[9] === tmp6) {
            if (cResult[10] === layout) {
              if (cResult[11] === tmp5.topLeftButton) {
                if (cResult[12] === tmp13) {
                  let tmp17 = cResult[13];
                }
                return tmp17;
              }
            }
          }
          let obj2 = { style: tmp5.topLeftButton, hideStyles: tmp6, layout, children: tmp13 };
          const tmp20 = closure_16(closure_34, obj2);
          cResult[9] = tmp6;
          cResult[10] = layout;
          cResult[11] = tmp5.topLeftButton;
          cResult[12] = tmp13;
          cResult[13] = tmp20;
          tmp17 = tmp20;
        }
        const obj3 = { icon: tmp4(19107), onPress: tmp7, accessibilityLabel: cResult[5] };
        const tmp16 = closure_16(tmp4(19000), obj3);
        cResult[6] = tmp7;
        cResult[7] = cResult[5];
        cResult[8] = tmp16;
        tmp13 = tmp16;
        const tmp4Result = tmp4(19000);
      }
    }
    let result = tmp(19028).isStableActivityParticipant(participant);
    const intl = tmp(1125).intl;
    const string = intl.string;
    let t = tmp(1125).t;
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
    let tmpResult = tmp(19028);
  }
  const fn = function o() {
    if (obj.isStableStreamParticipant(participant)) {
      const streamForUser = ApplicationStreamingStore.getStreamForUser(participant.user.id, guildId);
      if (null != streamForUser) {
        const tmpResult = StreamActionCreators;
        tmpResult.stopStream(StreamKeyUtils.encodeStreamKey(streamForUser));
        const tmpResult4 = StreamKeyUtils;
      }
    }
    obj = useStableParticipant;
    if (tmpResult5.isStableActivityParticipant(participant)) {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let _location;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      const obj2 = { location: _location, applicationId: participant.applicationId };
      const result = leaveEmbeddedActivity.leaveEmbeddedActivity(obj2);
      const tmpResult6 = leaveEmbeddedActivity;
    }
    tmpResult5 = useStableParticipant;
  };
  cResult[0] = guildId;
  cResult[1] = participant;
  cResult[2] = fn;
  tmp7 = fn;
  let obj = participant(576);
}) : (function CloseButton(participant) {
  participant = participant.participant;
  let guildId;
  ({ controlsHidden, isSelf, layout } = participant);
  guildId = noop.useContext(guildId(10973)).guildId;
  const items = [guildId, participant];
  const tmp = closure_23();
  let obj = { style: tmp.topLeftButton, hideStyles: closure_33(controlsHidden, closure_29), layout, children: null };
  const callback = noop.useCallback(() => {
    if (obj.isStableStreamParticipant(participant)) {
      const streamForUser = ApplicationStreamingStore.getStreamForUser(participant.user.id, guildId);
      if (null != streamForUser) {
        const tmpResult = StreamActionCreators;
        tmpResult.stopStream(StreamKeyUtils.encodeStreamKey(streamForUser));
        const tmpResult4 = StreamKeyUtils;
      }
    }
    obj = useStableParticipant;
    if (tmpResult5.isStableActivityParticipant(participant)) {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let _location;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      const obj2 = { location: _location, applicationId: participant.applicationId };
      const result = leaveEmbeddedActivity.leaveEmbeddedActivity(obj2);
      const tmpResult6 = leaveEmbeddedActivity;
    }
    tmpResult5 = useStableParticipant;
  }, items);
  let obj2 = { icon: null, onPress: null, accessibilityLabel: null };
  const tmp2 = closure_33(controlsHidden, closure_29);
  obj2.icon = guildId(19107);
  obj2.onPress = callback;
  const tmp6 = guildId(19000);
  let result = participant(19028).isStableActivityParticipant(participant);
  const intl = participant(1125).intl;
  const string = intl.string;
  const t = participant(1125).t;
  if (result) {
    let stringResult = string(t["R/FK4A"]);
  } else if (isSelf) {
    stringResult = string(t.S5anIc);
  } else {
    stringResult = string(t.q3O3J8);
  }
  obj2.accessibilityLabel = stringResult;
  obj.children = closure_16(tmp6, obj2);
  return closure_16(closure_34, obj);
}));
const __initData5 = { code: "function VoicePanelCardFloatingControlsTsx5(){const{controlsHidden,mode,VoicePanelModes}=this.__closure;return controlsHidden.get()||mode.get()===VoicePanelModes.PIP;}" };
const __initData6 = { code: "function VoicePanelCardFloatingControlsTsx6(){const{controlsHidden,mode,VoicePanelModes}=this.__closure;return controlsHidden.get()||mode.get()===VoicePanelModes.PIP;}" };
ReactCompilerGating = fn(558);
let closure_38 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function CardFocusButton(participantId) {
  const cResult = participantId(setFocused[17]).c(14);
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
    const tmp8 = closure_23();
    class S {
      constructor() {
        value = controlsHidden.get();
        if (!value) {
          tmp2 = mode;
          tmp3 = VoicePanelModes;
          value = mode.get() === VoicePanelModes.PIP;
        }
        return value;
      }
    }
    const obj2 = { controlsHidden, mode, VoicePanelModes };
    S.__closure = obj2;
    S.__workletHash = 1604088689263;
    S.__initData = __initData5;
    const tmp13 = closure_33(tmp(tmp2[12]).useDerivedValue(S), closure_29);
    if (cResult[3] === isActivityParticipant) {
      if (cResult[4] === targetName) {
        if (cResult[6] === cResult[5]) {
          if (cResult[7] === tmp6) {
            let tmp18 = cResult[8];
          }
          if (cResult[9] === tmp13) {
            if (cResult[10] === layout) {
              if (cResult[11] === tmp8.topRightButton) {
                if (cResult[12] === tmp18) {
                  let tmp22 = cResult[13];
                }
                return tmp22;
              }
            }
          }
          class S {
            constructor() {
              value = controlsHidden.get();
              if (!value) {
                tmp2 = mode;
                tmp3 = VoicePanelModes;
                value = mode.get() === VoicePanelModes.PIP;
              }
              return value;
            }
          }
          tmp25[0] = tmp8.topRightButton;
          tmp25[1] = tmp13;
          tmp25[2] = layout;
          tmp25[3] = tmp18;
          const tmp26 = closure_16(closure_34, tmp25);
          cResult[9] = tmp13;
          cResult[10] = layout;
          cResult[11] = tmp8.topRightButton;
          cResult[12] = tmp18;
          cResult[13] = tmp26;
          tmp22 = tmp26;
        }
        const obj3 = { icon: null, onPress: null, accessibilityLabel: null };
        class S {
          constructor() {
            value = controlsHidden.get();
            if (!value) {
              tmp2 = mode;
              tmp3 = VoicePanelModes;
              value = mode.get() === VoicePanelModes.PIP;
            }
            return value;
          }
        }
        obj3.icon = tmp4(tmp2[38]);
        obj3.onPress = tmp6;
        obj3.accessibilityLabel = cResult[5];
        const tmp21 = closure_16(tmp20, obj3);
        cResult[6] = cResult[5];
        cResult[7] = tmp6;
        cResult[8] = tmp21;
        tmp18 = tmp21;
      }
    }
    if (isActivityParticipant) {
      const intl2 = tmp(tmp2[24]).intl;
      let stringResult = intl2.string(tmp(tmp2[24]).t["3ejJer"]);
    } else if (null != targetName) {
      const formatToPlainString = tmp(tmp2[24]).intl.formatToPlainString;
      { targetName: null }.targetName = targetName;
      class S {
        constructor() {
          value = controlsHidden.get();
          if (!value) {
            tmp2 = mode;
            tmp3 = VoicePanelModes;
            value = mode.get() === VoicePanelModes.PIP;
          }
          return value;
        }
      }
      const obj4 = { targetName: null };
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
  tmp4 = controlsHidden;
}) : (function CardFocusButton(participantId) {
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
  const tmp5 = closure_23();
  const fn = function u() {
    value = controlsHidden.get();
    if (!value) {
      value = mode.get() === VoicePanelModes.PIP;
    }
    return value;
  };
  fn.__closure = { controlsHidden, mode, VoicePanelModes };
  fn.__workletHash = 2518485438764;
  fn.__initData = __initData6;
  const obj = participantId(setFocused[12]);
  const obj2 = { controlsHidden, mode, VoicePanelModes };
  if (isActivityParticipant) {
    const intl3 = tmp6(tmp2[24]).intl;
    let stringResult = intl3.string(tmp6(tmp2[24]).t["3ejJer"]);
  } else if (null != targetName) {
    const intl2 = tmp6(tmp2[24]).intl;
    const obj3 = { targetName };
    stringResult = intl2.formatToPlainString(tmp6(tmp2[24]).t.OervdV, obj3);
  } else {
    const intl = tmp6(tmp2[24]).intl;
    stringResult = intl.string(tmp6(tmp2[24]).t["77cRN4"]);
  }
  const obj4 = { style: tmp5.topRightButton, hideStyles: closure_33(participantId(setFocused[12]).useDerivedValue(fn), closure_29), layout, children: null };
  const obj5 = { icon: null, onPress: null, accessibilityLabel: null };
  const tmp7 = closure_33(participantId(setFocused[12]).useDerivedValue(fn), closure_29);
  obj5.icon = controlsHidden(setFocused[38]);
  obj5.onPress = callback;
  obj5.accessibilityLabel = stringResult;
  obj4.children = closure_16(controlsHidden(setFocused[36]), obj5);
  return closure_16(closure_34, obj4);
}));
const RING_PHYSICS = { mass: 0.1, stiffness: 400, overshootClamping: true };
const __initData7 = { code: "function VoicePanelCardFloatingControlsTsx7(){const{flip}=this.__closure;return flip.get();}" };
const __initData8 = { code: "function VoicePanelCardFloatingControlsTsx8(flipped){const{angle,withSpring,getRandomNumberInRange,RING_PHYSICS,flip}=this.__closure;if(flipped){angle.set(withSpring(getRandomNumberInRange(35,55),RING_PHYSICS,\"respect-motion-settings\",function(finished){if(!finished){return;}flip.set(!flip.get());}));}else{angle.set(withSpring(getRandomNumberInRange(-10,10),RING_PHYSICS,\"respect-motion-settings\",function(finished_0){if(!finished_0){return;}flip.set(!flip.get());}));}}" };
let closure_42 = { code: "function VoicePanelCardFloatingControlsTsx9(finished){const{flip}=this.__closure;if(!finished){return;}flip.set(!flip.get());}" };
let closure_43 = { code: "function VoicePanelCardFloatingControlsTsx10(finished_0){const{flip}=this.__closure;if(!finished_0){return;}flip.set(!flip.get());}" };
const __initData9 = { code: "function VoicePanelCardFloatingControlsTsx11(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{top:controlsHidden.get()?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):0};}" };
const __initData10 = { code: "function VoicePanelCardFloatingControlsTsx12(){const{angle}=this.__closure;return{transform:[{rotate:angle.get()+\"deg\"}]};}" };
const __initData11 = { code: "function VoicePanelCardFloatingControlsTsx13(){const{flip}=this.__closure;return flip.get();}" };
const __initData12 = { code: "function VoicePanelCardFloatingControlsTsx14(flipped){const{angle,withSpring,getRandomNumberInRange,RING_PHYSICS,flip}=this.__closure;if(flipped){angle.set(withSpring(getRandomNumberInRange(45-10,45+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}else{angle.set(withSpring(getRandomNumberInRange(0-10,0+10),RING_PHYSICS,'respect-motion-settings',function(finished_0){if(!finished_0)return;flip.set(!flip.get());}));}}" };
let closure_48 = { code: "function VoicePanelCardFloatingControlsTsx15(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}" };
let closure_49 = { code: "function VoicePanelCardFloatingControlsTsx16(finished_0){const{flip}=this.__closure;if(!finished_0)return;flip.set(!flip.get());}" };
const __initData13 = { code: "function VoicePanelCardFloatingControlsTsx17(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{top:controlsHidden.get()?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):0};}" };
const __initData14 = { code: "function VoicePanelCardFloatingControlsTsx18(){const{angle}=this.__closure;return{transform:[{rotate:angle.get()+\"deg\"}]};}" };
ReactCompilerGating = fn(558);
let closure_52 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function RingingIcon(controlsHidden) {
  const cResult = controlsHidden(sharedValue1[17]).c(13);
  controlsHidden = controlsHidden.controlsHidden;
  const tmp4 = closure_23();
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
  const stateFromStores = controlsHidden(sharedValue1[39]).useStateFromStores(tmp7, tmp8);
  const tmpResult = controlsHidden(sharedValue1[39]);
  class I {
    constructor() {
      return closure_1.get();
    }
  }
  I.__closure = { flip: sharedValue };
  I.__workletHash = 12043935058158;
  I.__initData = __initData7;
  let fn2 = function h(arg0) {
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
      let result = set(withSpring(tmp3(35, 55), closure_39, "respect-motion-settings", fn2));
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
      const result1 = set(withSpring(tmp3(-10, 10), closure_39, "respect-motion-settings", fn));
    }
  };
  const tmpResult4 = controlsHidden(sharedValue1[12]);
  fn2.__closure = { angle: sharedValue1, withSpring: controlsHidden(sharedValue1[30]).withSpring, getRandomNumberInRange: sharedValue(sharedValue1[40]), RING_PHYSICS, flip: sharedValue };
  fn2.__workletHash = 9806064842498;
  fn2.__initData = __initData8;
  const animatedReaction = tmpResult4.useAnimatedReaction(I, fn2);
  const obj4 = { angle: sharedValue1, withSpring: controlsHidden(sharedValue1[30]).withSpring, getRandomNumberInRange: sharedValue(sharedValue1[40]), RING_PHYSICS, flip: sharedValue };
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
  class P {
    constructor() {
      obj = { transform: null };
      obj1 = { rotate: "" + closure_2.get() + "deg" };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  P.__closure = { angle: sharedValue1 };
  P.__workletHash = 5604667206084;
  P.__initData = __initData10;
  if (cResult[2] === tmp4.ringingIconContainer) {
    if (cResult[3] === animatedStyle) {
      let tmp16 = cResult[4];
    }
    let tmp17 = !stateFromStores;
    if (!stateFromStores) {
      tmp17 = tmp15;
    }
    if (cResult[5] !== tmp4.ringingIcon) {
      const obj6 = { source: tmp11(tmp2[41]), size: tmp(tmp2[13]).IconSizes.SMALL_20, style: tmp4.ringingIcon };
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
      const tmp26 = closure_16(tmp11(tmp2[31]), obj7);
      cResult[10] = tmp16;
      cResult[11] = tmp21;
      cResult[12] = tmp26;
      tmp24 = tmp26;
    }
    const obj8 = { style: tmp17, pointerEvents: "none", children: tmp18 };
    const tmp23 = closure_16(tmp11(tmp2[31]), obj8);
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
}) : (function RingingIcon(controlsHidden) {
  controlsHidden = controlsHidden.controlsHidden;
  let sharedValue1;
  const tmp = closure_23();
  const sharedValue = controlsHidden(sharedValue1[12]).useSharedValue(true);
  let obj = controlsHidden(sharedValue1[12]);
  sharedValue1 = controlsHidden(sharedValue1[12]).useSharedValue(0);
  let obj2 = controlsHidden(sharedValue1[12]);
  let items = [AccessibilityStore];
  const stateFromStores = controlsHidden(sharedValue1[39]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj3 = controlsHidden(sharedValue1[39]);
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
      let result = set(withSpring(tmp3(35, 55), closure_39, "respect-motion-settings", fn2));
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
      const result1 = set(withSpring(tmp3(-10, 10), closure_39, "respect-motion-settings", fn));
    }
  };
  const obj4 = controlsHidden(sharedValue1[12]);
  fn2.__closure = { angle: sharedValue1, withSpring: controlsHidden(sharedValue1[30]).withSpring, getRandomNumberInRange: sharedValue(sharedValue1[40]), RING_PHYSICS, flip: sharedValue };
  fn2.__workletHash = 5752929555156;
  fn2.__initData = __initData12;
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  const obj5 = { angle: sharedValue1, withSpring: controlsHidden(sharedValue1[30]).withSpring, getRandomNumberInRange: sharedValue(sharedValue1[40]), RING_PHYSICS, flip: sharedValue };
  const tmp7 = sharedValue;
  const fn3 = function p() {
    let top = 0;
    if (controlsHidden.get()) {
      top = -c21 + 2 * VOICE_PANEL_CARD_INNER_PADDING;
    }
    return { top };
  };
  fn3.__closure = { controlsHidden, FLOATING_BAR_HEIGHT: v28, VOICE_PANEL_CARD_INNER_PADDING };
  fn3.__workletHash = 15571042858594;
  fn3.__initData = __initData13;
  const animatedStyle = controlsHidden(sharedValue1[12]).useAnimatedStyle(fn3);
  const obj6 = controlsHidden(sharedValue1[12]);
  const obj7 = { controlsHidden, FLOATING_BAR_HEIGHT: v28, VOICE_PANEL_CARD_INNER_PADDING };
  const fn4 = function h() {
    const obj = { transform: null };
    const items = [{ rotate: "" + sharedValue1.get() + "deg" }];
    obj.transform = items;
    return obj;
  };
  fn4.__closure = { angle: sharedValue1 };
  fn4.__workletHash = 12957595468302;
  fn4.__initData = __initData14;
  const animatedStyle1 = controlsHidden(sharedValue1[12]).useAnimatedStyle(fn4);
  const obj9 = { style: null, children: null };
  const items1 = [animatedStyle, tmp.ringingIconContainer];
  obj9.style = items1;
  const obj8 = controlsHidden(sharedValue1[12]);
  let tmp14 = !stateFromStores;
  const tmp12 = sharedValue(sharedValue1[31]);
  if (!stateFromStores) {
    tmp14 = animatedStyle1;
  }
  const obj10 = { style: tmp14, pointerEvents: "none", children: null };
  const tmp13 = sharedValue(sharedValue1[31]);
  obj10.children = closure_16(controlsHidden(sharedValue1[13]).Icon, { source: tmp7(sharedValue1[41]), size: controlsHidden(sharedValue1[13]).IconSizes.SMALL_20, style: tmp.ringingIcon });
  obj9.children = closure_16(tmp13, obj10);
  return closure_16(tmp12, obj9);
}));
ReactCompilerGating = fn(558);
let closure_53 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function RingingIconWrapper(controlsHidden) {
  const cResult = c.c(2);
  controlsHidden = controlsHidden.controlsHidden;
  if (cResult[0] !== controlsHidden) {
    const obj2 = { theme: ThemeTypes.LIGHT, children: null };
    const obj3 = { controlsHidden };
    obj2.children = value3(closure_52, obj3);
    const tmp8 = value3(native.ThemeContextProvider, obj2);
    cResult[0] = controlsHidden;
    cResult[1] = tmp8;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function RingingIconWrapper(controlsHidden) {
  return value3(native.ThemeContextProvider, { theme: ThemeTypes.LIGHT, children: value3(closure_52, { controlsHidden: controlsHidden.controlsHidden }) });
}));
ReactCompilerGating = fn(558);
let closure_54 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function UserTagChiplet(arg0) {
  let tmp = dependencyMap;
  const cResult = gameRecord(576).c(13);
  ({ userId, textColor } = arg0);
  let tmp3 = importDefault;
  const first = usePlayingGameActivitiesDefault(userId, arg0.guildId)[0];
  let application_id;
  if (first != null) {
    application_id = first.application_id;
  }
  if (cResult[0] !== application_id) {
    const obj2 = { applicationId: application_id };
    cResult[0] = application_id;
    cResult[1] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  gameRecord = useResolveGameDefault(tmp6).gameRecord;
  const tmp7 = useGameProfileObscuredDefault(gameRecord);
  importDefault = tmp7;
  dependencyMap = noop.useRef(false);
  if (cResult[2] === gameRecord) {
    if (cResult[3] === tmp7) {
      let tmp8 = cResult[4];
      let tmp9 = cResult[5];
    }
    const effect = noop.useEffect(tmp8, tmp9);
    if (null != gameRecord) {
      if (!tmp7) {
        if (cResult[9] === gameRecord) {
          if (cResult[10] === textColor) {
            if (cResult[11] === userId) {
              let tmp11 = cResult[12];
            }
            return tmp11;
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
    }
    if (cResult[6] === textColor) {
    }
    tmp3 = GuildTagDefault;
    const obj5 = { userId, textColor };
    tmp = closure_16(tmp3, obj5);
    cResult[6] = textColor;
    cResult[7] = userId;
    cResult[8] = tmp;
  }
  const fn = function h() {
    const current = ref.current;
    let tmp2 = !current;
    if (!current) {
      tmp2 = null != gameRecord;
    }
    if (tmp2) {
      tmp2 = closure_1;
    }
    if (tmp2) {
      const obj = useShouldOpenGameProfileModal;
      const items = [useShouldOpenGameProfileModal.RejectionReason.Obscured];
      obj.trackEntryPoint(false, gameRecord.id, items, GameProfileAnalyticUtils.GameProfileSources.CallTile);
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
  let obj = gameRecord(576);
}) : (function UserTagChiplet(arg0) {
  ({ userId, textColor } = arg0);
  let gameRecord;
  importDefault = undefined;
  dependencyMap = undefined;
  const first = usePlayingGameActivitiesDefault(userId, arg0.guildId)[0];
  let application_id;
  if (first != null) {
    application_id = first.application_id;
  }
  gameRecord = useResolveGameDefault({ applicationId: application_id }).gameRecord;
  const tmp6 = useGameProfileObscuredDefault(gameRecord);
  importDefault = tmp6;
  dependencyMap = noop.useRef(false);
  let items = [gameRecord, tmp6];
  const effect = noop.useEffect(() => {
    const current = ref.current;
    let tmp2 = !current;
    if (!current) {
      tmp2 = null != gameRecord;
    }
    if (tmp2) {
      tmp2 = closure_1;
    }
    if (tmp2) {
      const obj = useShouldOpenGameProfileModal;
      const items = [useShouldOpenGameProfileModal.RejectionReason.Obscured];
      obj.trackEntryPoint(false, gameRecord.id, items, GameProfileAnalyticUtils.GameProfileSources.CallTile);
      ref.current = true;
    }
  }, items);
  if (null != gameRecord) {
    if (!tmp6) {
      let obj = { game: gameRecord, userId, textColor };
      let tmp9 = closure_16(tmp(19110), obj);
    }
    return tmp9;
  }
  tmp9 = closure_16(tmp(9262), { userId, textColor });
}));
const __initData15 = { code: "function VoicePanelCardFloatingControlsTsx19(){const{hasHiddenVisibleIcon,focused,connected,mode,VoicePanelModes,controlsHidden}=this.__closure;const showIcon=hasHiddenVisibleIcon&&focused.get()==null;return!connected.get()||mode.get()===VoicePanelModes.PIP||!showIcon&&controlsHidden.get();}" };
const __initData16 = { code: "function VoicePanelCardFloatingControlsTsx20(){const{FLOATING_BAR_HEIGHT,isPillHidden}=this.__closure;return{height:FLOATING_BAR_HEIGHT,pointerEvents:isPillHidden.get()?\"none\":\"auto\"};}" };
const __initData17 = { code: "function VoicePanelCardFloatingControlsTsx21(){const{connected,isScreenReaderEnabled,controlsSpecs,VoicePanelControlsModes,hasIcon,GAP}=this.__closure;const hidden=!connected.get()||!isScreenReaderEnabled&&controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&hasIcon;const shouldCollapseWidth=hidden&&hasIcon;return{width:shouldCollapseWidth?0:\"auto\",marginRight:hidden?-GAP:0};}" };
const __initData18 = { code: "function VoicePanelCardFloatingControlsTsx22(){const{hasHiddenVisibleIcon,focused,connected,mode,VoicePanelModes,controlsHidden}=this.__closure;const showIcon=hasHiddenVisibleIcon&&focused.get()==null;return!connected.get()||mode.get()===VoicePanelModes.PIP||!showIcon&&controlsHidden.get();}" };
const __initData19 = { code: "function VoicePanelCardFloatingControlsTsx23(){const{FLOATING_BAR_HEIGHT,isPillHidden}=this.__closure;return{height:FLOATING_BAR_HEIGHT,pointerEvents:isPillHidden.get()?'none':'auto'};}" };
const __initData20 = { code: "function VoicePanelCardFloatingControlsTsx24(){const{connected,isScreenReaderEnabled,controlsSpecs,VoicePanelControlsModes,hasIcon,GAP}=this.__closure;const hidden=!connected.get()||!isScreenReaderEnabled&&controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&hasIcon;const shouldCollapseWidth=hidden&&hasIcon;return{width:shouldCollapseWidth?0:'auto',marginRight:hidden?-GAP:0};}" };
ReactCompilerGating = fn(558);
let closure_61 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function FloatingParticipantLabel(controlsHidden) {
  const cResult = controlsHidden(controlsSpecs[17]).c(64);
  controlsHidden = controlsHidden.controlsHidden;
  ({ label, layout, participant } = controlsHidden);
  const context = focused.useContext(channelId(controlsSpecs[18]));
  ({ guildId, channelId } = context);
  controlsSpecs = context.controlsSpecs;
  focused = context.focused;
  const connected = context.connected;
  const mode = context.mode;
  let obj = controlsHidden(controlsSpecs[17]);
  const isScreenReaderEnabled = controlsHidden(controlsSpecs[50]).useIsScreenReaderEnabled();
  const tmp7 = closure_23();
  const obj2 = controlsHidden(controlsSpecs[50]);
  let id;
  if (obj3.isStableParticipantWithUser(participant)) {
    id = participant.user.id;
  }
  const analyticsLocations = channelId(tmp2[51])().analyticsLocations;
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === channelId) {
      if (cResult[4] === channelId) {
        if (cResult[5] === id) {
          const tmp10 = cResult[6];
        }
        const isUserSecureFramesVerified = tmp(tmp2[53]).useIsUserSecureFramesVerified(tmp10);
        const type = participant.type;
        const tmpResult = tmp(tmp2[53]);
        const tmp4Result = channelId(tmp2[23]);
        let id1;
        if (tmpResult6.isStableParticipantWithUser(participant)) {
          id1 = participant.user.id;
        }
        const tmp4ResultResult = tmp4Result(type, id1, guildId, channelId);
        if (cResult[7] === guildId) {
          if (cResult[8] === id) {
            let tmp18 = cResult[9];
          }
          const tmp19 = channelId(tmp2[54])(tmp18);
          if (cResult[10] !== tmp19) {
            const obj4 = { displayNameStyles: tmp19 };
            cResult[10] = tmp19;
            cResult[11] = obj4;
            let tmp20 = obj4;
          } else {
            tmp20 = cResult[11];
          }
          const displayNameStylesFont = tmp(tmp2[55]).useDisplayNameStylesFont(tmp20);
          closure_9 = tmp22;
          const tmp23 = tmp4ResultResult.filter((type) => type.type !== controlsHidden(controlsSpecs[23]).VoicePanelCardUserStateIconType.STREAM_ICON).length >= 1;
          VoicePanelModes = tmp23;
          const tmpResult7 = tmp(tmp2[55]);
          class Y {
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
          Y.__closure = obj5;
          Y.__workletHash = 12564689742086;
          Y.__initData = __initData15;
          const derivedValue = tmp(tmp2[12]).useDerivedValue(Y);
          const tmpResult8 = tmp(tmp2[12]);
          const fn2 = function z() {
            const obj = { height, pointerEvents: null };
            let str = "auto";
            if (derivedValue.get()) {
              str = "none";
            }
            obj.pointerEvents = str;
            return obj;
          };
          const obj6 = { FLOATING_BAR_HEIGHT: v28, isPillHidden: derivedValue };
          fn2.__closure = obj6;
          fn2.__workletHash = 14536744021222;
          fn2.__initData = __initData16;
          const animatedStyle = tmp(tmp2[12]).useAnimatedStyle(fn2);
          const tmp32 = closure_33(derivedValue, closure_30);
          const tmpResult9 = tmp(tmp2[12]);
          const fn3 = function j() {
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
          const obj7 = { connected, isScreenReaderEnabled, controlsSpecs, VoicePanelControlsModes: derivedValue, hasIcon: tmp4ResultResult.length >= 1, GAP: 4 };
          fn3.__closure = obj7;
          fn3.__workletHash = 5569452163568;
          fn3.__initData = __initData17;
          const animatedStyle1 = tmp(tmp2[12]).useAnimatedStyle(fn3);
          if (cResult[12] !== tmp7.labelPositionContainer) {
            const items = [tmp7.labelPositionContainer];
            cResult[12] = tmp7.labelPositionContainer;
            cResult[13] = items;
            let tmp36 = items;
          } else {
            tmp36 = cResult[13];
          }
          if (cResult[14] === tmp32) {
            if (cResult[15] === tmp7.labelHideWrapper) {
              let tmp37 = cResult[16];
            }
            if (cResult[17] === animatedStyle) {
              if (cResult[18] === tmp7.labelOuterContainer) {
                let tmp40 = cResult[19];
              }
              if (cResult[20] === tmp4ResultResult) {
                if (cResult[23] === animatedStyle1) {
                  if (cResult[26] !== displayNameStylesFont) {
                    let tmp47 = null != displayNameStylesFont;
                    if (tmp47) {
                      const obj8 = { fontFamily: displayNameStylesFont };
                      tmp47 = obj8;
                    }
                    cResult[26] = displayNameStylesFont;
                    cResult[27] = tmp47;
                    let tmp46 = tmp47;
                  } else {
                    tmp46 = cResult[27];
                  }
                  if (cResult[28] === tmp7.floatingText) {
                    if (cResult[29] === tmp46) {
                      let tmp48 = cResult[30];
                    }
                    if (cResult[31] === tmp4ResultResult) {
                      if (cResult[34] === label) {
                        if (cResult[35] === tmp48) {
                          if (cResult[36] === tmp49) {
                            let tmp52 = cResult[37];
                          }
                          if (cResult[38] === guildId) {
                            if (cResult[39] === participant.type) {
                              if (cResult[40] === participant.user) {
                                let tmp55 = cResult[41];
                              }
                              if (cResult[42] === isUserSecureFramesVerified) {
                                if (cResult[43] === tmp7.secureFramesIcon) {
                                  let tmp60 = cResult[44];
                                }
                                if (cResult[45] === layout) {
                                  if (cResult[46] === tmp45) {
                                    if (cResult[47] === tmp52) {
                                      if (cResult[48] === tmp55) {
                                        if (cResult[49] === tmp60) {
                                          let tmp63 = cResult[50];
                                        }
                                        if (cResult[51] === layout) {
                                          if (cResult[52] === tmp63) {
                                            if (cResult[53] === tmp39) {
                                              if (cResult[54] === tmp40) {
                                                if (cResult[55] === tmp41) {
                                                  let tmp66 = cResult[56];
                                                }
                                                if (cResult[57] === tmp66) {
                                                  if (cResult[58] === tmp37) {
                                                    let tmp70 = cResult[59];
                                                  }
                                                  if (cResult[60] === tmp36) {
                                                    if (cResult[61] === layout) {
                                                      if (cResult[62] === tmp70) {
                                                        let tmp73 = cResult[63];
                                                      }
                                                      return tmp73;
                                                    }
                                                  }
                                                  const obj9 = { style: tmp36, layout, pointerEvents: "box-none", children: tmp70 };
                                                  const tmp75 = closure_16(channelId(tmp2[31]), obj9);
                                                  cResult[60] = tmp36;
                                                  class Y {
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
                                                  cResult[62] = tmp70;
                                                  cResult[63] = tmp75;
                                                  tmp73 = tmp75;
                                                }
                                                const obj10 = { style: tmp37, pointerEvents: "box-none", children: tmp66 };
                                                const tmp72 = closure_16(channelId(tmp2[31]), obj10);
                                                cResult[57] = tmp66;
                                                cResult[58] = tmp37;
                                                class Y {
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
                                                cResult[59] = tmp72;
                                                tmp70 = tmp72;
                                              }
                                            }
                                          }
                                        }
                                        const obj11 = { onPress: tmp39, style: tmp40, layout, children: null };
                                        const items1 = [tmp41, tmp63];
                                        class Y {
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
                                        const tmp69 = closure_17(closure_20, obj11);
                                        cResult[51] = layout;
                                        cResult[52] = tmp63;
                                        cResult[53] = tmp39;
                                        cResult[54] = tmp40;
                                        cResult[55] = tmp41;
                                        cResult[56] = tmp69;
                                        tmp66 = tmp69;
                                      }
                                    }
                                  }
                                }
                                const obj12 = { style: tmp45, layout, children: null };
                                const items2 = [tmp52, tmp55, tmp60];
                                obj12.children = items2;
                                class Y {
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
                                cResult[45] = layout;
                                cResult[46] = tmp45;
                                cResult[47] = tmp52;
                                cResult[48] = tmp55;
                                cResult[49] = tmp60;
                                cResult[50] = tmp65;
                                tmp63 = tmp65;
                              }
                              let tmp61 = isUserSecureFramesVerified;
                              if (isUserSecureFramesVerified) {
                                const obj13 = { style: tmp7.secureFramesIcon, size: "xs", accessibilityLabel: null };
                                const intl = tmp(tmp2[24]).intl;
                                obj13.accessibilityLabel = intl.string(tmp(tmp2[24]).t.mR9cf3);
                                tmp61 = closure_16(tmp(tmp2[57]).ShieldLockIcon, obj13);
                              }
                              cResult[42] = isUserSecureFramesVerified;
                              cResult[43] = tmp7.secureFramesIcon;
                              cResult[44] = tmp61;
                              tmp60 = tmp61;
                            }
                          }
                          let tmp57 = participant.type === constants.USER;
                          if (tmp57) {
                            const obj14 = { userId: participant.user.id, guildId, textColor: "text-overlay-light" };
                            tmp57 = closure_16(closure_54, obj14);
                          }
                          cResult[38] = guildId;
                          cResult[39] = participant.type;
                          cResult[40] = participant.user;
                          class Y {
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
                          cResult[41] = tmp57;
                          tmp55 = tmp57;
                        }
                      }
                      const obj15 = { variant: "heading-sm/semibold", color: "text-overlay-light", lineClamp: 1, style: tmp48, ellipsizeMode: "tail", accessibilityLabel: tmp49, children: label };
                      const tmp54 = closure_16(tmp(tmp2[56]).Text, obj15);
                      cResult[34] = label;
                      class Y {
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
                      cResult[36] = tmp49;
                      cResult[37] = tmp54;
                      tmp52 = tmp54;
                    }
                    cResult[31] = tmp4ResultResult;
                    cResult[32] = label;
                    cResult[33] = getAccessibilityLabel(tmp4ResultResult, label);
                    class Y {
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
                    const tmp51 = getAccessibilityLabel(tmp4ResultResult, label);
                  }
                  const items3 = [tmp7.floatingText, tmp46];
                  cResult[28] = tmp7.floatingText;
                  cResult[29] = tmp46;
                  class Y {
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
                  tmp48 = items3;
                }
                const items4 = [tmp7.floatingContainer, animatedStyle1];
                cResult[23] = animatedStyle1;
                cResult[24] = tmp7.floatingContainer;
                cResult[25] = items4;
                class Y {
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
              let tmp42 = tmp4ResultResult.length > 0;
              if (tmp42) {
                const obj16 = { style: tmp7.initialIcons, children: tmp4ResultResult.map((icon) => closure_1_16(closure_1_27, { icon }, icon.type)) };
                tmp42 = closure_16(channelId(tmp2[28]), obj16);
                const tmp4Result2 = channelId(tmp2[28]);
              }
              cResult[20] = tmp4ResultResult;
              cResult[21] = tmp7.initialIcons;
              cResult[22] = tmp42;
              class Y {
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
            cResult[17] = animatedStyle;
            class Y {
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
            cResult[19] = items5;
            tmp40 = items5;
          }
          const items6 = [tmp7.labelHideWrapper, tmp32];
          cResult[14] = tmp32;
          cResult[15] = tmp7.labelHideWrapper;
          cResult[16] = items6;
          tmp37 = items6;
          const tmpResult10 = tmp(tmp2[12]);
        }
        const obj17 = { userId: id, guildId };
        cResult[7] = guildId;
        cResult[8] = id;
        cResult[9] = obj17;
        tmp18 = obj17;
        tmpResult6 = tmp(tmp2[32]);
      }
      const obj18 = { userId: id, channelId };
      cResult[4] = channelId;
      cResult[5] = id;
      cResult[6] = obj18;
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
  obj3 = controlsHidden(controlsSpecs[32]);
}) : (function FloatingParticipantLabel(controlsHidden) {
  controlsHidden = controlsHidden.controlsHidden;
  ({ label, layout, participant } = controlsHidden);
  channelId = undefined;
  let controlsSpecs;
  let focused;
  let analyticsLocations;
  closure_9 = undefined;
  VoicePanelModes = undefined;
  let derivedValue;
  const context = focused.useContext(channelId(controlsSpecs[18]));
  ({ guildId, channelId } = context);
  controlsSpecs = context.controlsSpecs;
  focused = context.focused;
  const connected = context.connected;
  const mode = context.mode;
  const isScreenReaderEnabled = controlsHidden(controlsSpecs[50]).useIsScreenReaderEnabled();
  const tmp6 = closure_23();
  let obj = focused;
  const obj2 = controlsHidden(controlsSpecs[50]);
  let id;
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
  obj3 = controlsHidden(controlsSpecs[32]);
  let isUserSecureFramesVerified = controlsHidden(controlsSpecs[53]).useIsUserSecureFramesVerified({ userId: id, channelId });
  const tmp4Result = controlsHidden(controlsSpecs[53]);
  const tmpResult = channelId(controlsSpecs[23]);
  let id1;
  if (tmp4Result6.isStableParticipantWithUser(participant)) {
    id1 = participant.user.id;
  }
  const tmpResultResult = tmpResult(participant.type, id1, guildId, channelId);
  tmp4Result6 = controlsHidden(controlsSpecs[32]);
  const tmp12 = channelId(controlsSpecs[54])({ userId: id, guildId });
  const displayNameStylesFont = controlsHidden(controlsSpecs[55]).useDisplayNameStylesFont({ displayNameStyles: tmp12 });
  closure_9 = tmp14;
  const tmp15 = tmpResultResult.filter((type) => type.type !== controlsHidden(controlsSpecs[23]).VoicePanelCardUserStateIconType.STREAM_ICON).length >= 1;
  VoicePanelModes = tmp15;
  const tmp4Result7 = controlsHidden(controlsSpecs[55]);
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
  fn.__workletHash = 12554335904174;
  fn.__initData = __initData18;
  derivedValue = controlsHidden(controlsSpecs[12]).useDerivedValue(fn);
  const obj4 = { hasHiddenVisibleIcon: tmp15, focused, connected, mode, VoicePanelModes, controlsHidden };
  const tmp4Result8 = controlsHidden(controlsSpecs[12]);
  const fn2 = function u() {
    const obj = { height, pointerEvents: null };
    let str = "auto";
    if (derivedValue.get()) {
      str = "none";
    }
    obj.pointerEvents = str;
    return obj;
  };
  fn2.__closure = { FLOATING_BAR_HEIGHT: v28, isPillHidden: derivedValue };
  fn2.__workletHash = 5252557783301;
  fn2.__initData = __initData19;
  const animatedStyle = controlsHidden(controlsSpecs[12]).useAnimatedStyle(fn2);
  const obj5 = { FLOATING_BAR_HEIGHT: v28, isPillHidden: derivedValue };
  const tmp4Result9 = controlsHidden(controlsSpecs[12]);
  const tmp18 = closure_33(derivedValue, closure_30);
  const fn3 = function _() {
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
  fn3.__closure = { connected, isScreenReaderEnabled, controlsSpecs, VoicePanelControlsModes: derivedValue, hasIcon: tmpResultResult.length >= 1, GAP: 4 };
  fn3.__workletHash = 6830777623285;
  fn3.__initData = __initData20;
  const items1 = [tmp6.labelPositionContainer];
  const animatedStyle1 = controlsHidden(controlsSpecs[12]).useAnimatedStyle(fn3);
  const obj7 = { style: items1, layout, pointerEvents: "box-none", children: null };
  const obj6 = { connected, isScreenReaderEnabled, controlsSpecs, VoicePanelControlsModes: derivedValue, hasIcon: tmpResultResult.length >= 1, GAP: 4 };
  const tmp4Result10 = controlsHidden(controlsSpecs[12]);
  const obj8 = { style: null, pointerEvents: "box-none", children: null };
  const items2 = [tmp6.labelHideWrapper, tmp18];
  obj8.style = items2;
  let tmp25;
  const tmpResult5 = channelId(controlsSpecs[31]);
  if (null != id) {
    tmp25 = callback;
  }
  const obj9 = { onPress: tmp25, style: null, layout, children: null };
  const items3 = [tmp6.labelOuterContainer, animatedStyle];
  obj9.style = items3;
  let tmp20Result = tmpResultResult.length > 0;
  if (tmp20Result) {
    const obj10 = { style: tmp6.initialIcons, children: tmpResultResult.map((icon) => closure_1_16(closure_1_27, { icon }, icon.type)) };
    tmp20Result = closure_16(tmp(tmp2[28]), obj10);
    const tmpResult7 = tmp(tmp2[28]);
  }
  const items4 = [tmp20Result, ];
  const obj11 = { style: null, layout, children: null };
  const items5 = [tmp6.floatingContainer, animatedStyle1];
  obj11.style = items5;
  const tmpResult6 = channelId(controlsSpecs[31]);
  const items6 = [tmp6.floatingText, ];
  let tmp29 = null != displayNameStylesFont;
  if (tmp29) {
    const obj12 = { fontFamily: displayNameStylesFont };
    tmp29 = obj12;
  }
  const tmpResult8 = channelId(controlsSpecs[31]);
  items6[1] = tmp29;
  const items7 = [closure_16(controlsHidden(controlsSpecs[56]).Text, { variant: "heading-sm/semibold", color: "text-overlay-light", lineClamp: 1, style: items6, ellipsizeMode: "tail", accessibilityLabel: getAccessibilityLabel(tmpResultResult, label), children: label }), , ];
  let tmp20Result2 = participant.type === constants.USER;
  if (tmp20Result2) {
    const obj14 = { userId: participant.user.id, guildId, textColor: "text-overlay-light" };
    tmp20Result2 = closure_16(closure_54, obj14);
  }
  items7[1] = tmp20Result2;
  if (isUserSecureFramesVerified) {
    const obj15 = { style: tmp6.secureFramesIcon, size: "xs", accessibilityLabel: null };
    const intl = tmp4(tmp2[24]).intl;
    obj15.accessibilityLabel = intl.string(tmp4(tmp2[24]).t.mR9cf3);
    isUserSecureFramesVerified = closure_16(tmp4(tmp2[57]).ShieldLockIcon, obj15);
  }
  items7[2] = isUserSecureFramesVerified;
  obj11.children = items7;
  items4[1] = closure_17(tmpResult8, obj11);
  obj9.children = items4;
  obj8.children = closure_17(closure_20, obj9);
  obj7.children = closure_16(tmpResult6, obj8);
  return closure_16(tmpResult5, obj7);
}));
const __initData21 = { code: "function VoicePanelCardFloatingControlsTsx25(){const{controlsSpecs,VoicePanelControlsModes,focused,mode,VoicePanelModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN||focused.get()!=null||mode.get()===VoicePanelModes.PIP;}" };
const __initData22 = { code: "function VoicePanelCardFloatingControlsTsx26(){const{controlsSpecs,VoicePanelControlsModes,focused,mode,VoicePanelModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN||focused.get()!=null||mode.get()===VoicePanelModes.PIP;}" };
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function FloatingControls(arg0) {
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
  const stateFromStores = participant(controlsSpecs[39]).useStateFromStores(tmp6, tmp7);
  const tmpResult = participant(controlsSpecs[39]);
  const tmp10 = participant(controlsSpecs[32]).isStableParticipantWithUser(participant) && participant.isSelf;
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
    const stateFromStores1 = participant(tmp2[39]).useStateFromStores(tmp11, tmp14);
    const tmp16 = tmp4(tmp2[58])(guildId, context.channelId, participant.id);
    const tmpResult6 = participant(tmp2[39]);
    class F {
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
    F.__closure = obj2;
    F.__workletHash = 3813471061271;
    F.__initData = __initData21;
    const derivedValue = participant(tmp2[12]).useDerivedValue(F);
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
                                class F {
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
                        const obj4 = { controlsHidden: derivedValue, participantId: participant.id, targetName: null, isActivityParticipant: null, layout: null };
                        class F {
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
                        obj4.isActivityParticipant = participant(tmp2[32]).isStableActivityParticipant(participant);
                        obj4.layout = layout;
                        tmp35 = closure_16(closure_38, obj4);
                        const tmpResult8 = participant(tmp2[32]);
                      }
                      class F {
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
              class F {
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
              tmp31 = closure_16(closure_35, obj5);
            }
            class F {
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
            tmp27 = closure_16(closure_53, obj6);
          }
          class F {
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
      class F {
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
  class N {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[32]);
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
        tmpResult = tmp(tmp2[32]);
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
  cResult[5] = N;
  tmp14 = N;
  const tmpResult5 = participant(controlsSpecs[32]);
}) : (function FloatingControls(arg0) {
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
  let stateFromStores = participant(controlsSpecs[39]).useStateFromStores(items, () => connected.isConnected());
  let obj = participant(controlsSpecs[39]);
  let tmp = guildId;
  const obj2 = participant(controlsSpecs[32]);
  const tmp6 = participant(controlsSpecs[32]).isStableParticipantWithUser(participant) && participant.isSelf;
  const items1 = [EmbeddedActivitiesStore, ApplicationStreamingStore];
  const stateFromStores1 = participant(controlsSpecs[39]).useStateFromStores(items1, () => {
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
  const tmp4Result = participant(controlsSpecs[39]);
  const tmp8 = tmp(controlsSpecs[58])(guildId, context.channelId, participant.id);
  const fn = function p() {
    let tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
    if (!tmp) {
      tmp = null != focused.get();
    }
    if (!tmp) {
      tmp = mode.get() === VoicePanelModes.PIP;
    }
    return tmp;
  };
  fn.__closure = { controlsSpecs, VoicePanelControlsModes, focused, mode, VoicePanelModes };
  fn.__workletHash = 4146938327924;
  fn.__initData = __initData22;
  const derivedValue = participant(controlsSpecs[12]).useDerivedValue(fn);
  let tmp10 = null != label;
  if (tmp10) {
    const obj4 = { controlsHidden: derivedValue, label, layout, participant };
    tmp10 = closure_16(closure_61, obj4);
  }
  if (isRinging) {
    const obj5 = { controlsHidden: derivedValue };
    isRinging = closure_16(closure_53, obj5);
  }
  const children = [isRinging, , , ];
  let tmp17 = stateFromStores;
  if (stateFromStores) {
    tmp17 = stateFromStores1;
  }
  if (tmp17) {
    const obj6 = { controlsHidden: derivedValue, participant, isSelf: tmp6, layout };
    tmp17 = closure_16(closure_35, obj6);
  }
  children[1] = tmp17;
  if (stateFromStores) {
    stateFromStores = tmp8;
  }
  if (stateFromStores) {
    const obj7 = { controlsHidden: derivedValue, participantId: participant.id, targetName: label, isActivityParticipant: participant(tmp2[32]).isStableActivityParticipant(participant), layout };
    stateFromStores = closure_16(closure_38, obj7);
    const tmp4Result4 = participant(tmp2[32]);
  }
  children[2] = stateFromStores;
  children[3] = tmp10;
  return closure_17(closure_18, { children });
}));