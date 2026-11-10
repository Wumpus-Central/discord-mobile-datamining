// discord_app/modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import native2 from "../../../../../discord_common/js/packages/design/native.tsx";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import useDisplayNameStylesDefault from "../../../display_name_styles/hooks/useDisplayNameStyles.tsx";
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import StreamActionCreators from "../../../../actions/StreamActionCreators.tsx";
import useGameProfileObscuredDefault from "../../../game_profile/hooks/useGameProfileObscured.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import VoiceStateIcons from "../shared/VoiceStateIcons.tsx";
import VoiceStateIconUtils from "../utils/VoiceStateIconUtils.tsx";
import usePlayingGameActivitiesDefault from "../../../activities/hooks/usePlayingGameActivities.tsx";
import useShouldOpenGameProfileModal from "../../../game_profile/hooks/useShouldOpenGameProfileModal.tsx";
import useResolveGameDefault from "../../../games/hooks/useResolveGame.tsx";
import GameProfileAnalyticUtils from "../../../game_profile/GameProfileAnalyticUtils.tsx";
import leaveEmbeddedActivity from "../../../activities/leaveEmbeddedActivity.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import VoiceXIcon from "../../../../design/components/Icon/native/redesign/generated/VoiceXIcon.tsx";
import _modDef12219 from "../../../../../_runtime/metro/12219__.js";
import VoicePanelIconButtonDefault from "../shared/VoicePanelIconButton.tsx";
import useStableParticipant from "../utils/useStableParticipant.tsx";
import useVoicePanelCardUserStateIcons from "../hooks/useVoicePanelCardUserStateIcons.tsx";
import _modDef19649 from "../../../../../_runtime/metro/19649__.js";
import getRandomNumberInRangeDefault from "../utils/getRandomNumberInRange.tsx";
import _modDef19689 from "../../../../../_runtime/metro/19689__.js";
import _modDef19690 from "../../../../../_runtime/metro/19690__.js";
import StageModeratorIcon from "../../../../design/components/Icon/native/redesign/generated/StageModeratorIcon.tsx";
import _modDef19694 from "../../../../../_runtime/metro/19694__.js";
import _modDef19695 from "../../../../../_runtime/metro/19695__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";

const require = globalThis.__r;
const useVoicePanelCardUserStateIconsDefault = useVoicePanelCardUserStateIcons;
const module_1652_mod = _mod1652;

const useIsVoicePanelParticipantFocusableDefault = tmp(19593);
require = fn;
function StreamIcon(voicePlatform) {
  voicePlatform = voicePlatform.voicePlatform;
  let tmp = closure_23();
  items = [closure_24, noop.useContext(VoicePanelStateContextDefault).controlsSpecs, VoicePanelControlsModes, 4];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp4, tmp5, tmp6, tmp7] = items;
  class VoicePanelCardFloatingControlsTsx1 {
    constructor() {
      tmp = closure_0.get().mode === closure_1.HIDDEN;
      num = 2;
      if (!tmp) {
        num = closure_2;
      }
      obj = { marginLeft: num, marginRight: null };
      num2 = 0;
      if (tmp) {
        num2 = 2;
      }
      obj.marginRight = num2;
      return obj;
    }
  }
  const items1 = [tmp5, tmp6, tmp7];
  VoicePanelCardFloatingControlsTsx1.__closure = items1;
  VoicePanelCardFloatingControlsTsx1.__workletHash = 5506814510669;
  VoicePanelCardFloatingControlsTsx1.__initData = tmp4;
  const animatedStyle = _mod1652.useAnimatedStyle(VoicePanelCardFloatingControlsTsx1);
  let tmp2Result = _modDef19649;
  if (voicePlatform === constants2.XBOX) {
    tmp2Result = _modDef19689;
  } else if (voicePlatform === constants2.MOBILE) {
    tmp2Result = _modDef12219;
  } else if (voicePlatform === constants2.QUEST) {
    tmp2Result = _modDef19690;
  }
  const obj2 = { source: tmp2Result, style: null };
  const items2 = [tmp.iconWithoutBackground, animatedStyle];
  obj2.style = items2;
  return value2(closure_19, obj2);
}
function AnimatedLabelIcon(icon) {
  icon = icon.icon;
  const tmp = closure_23();
  const type = icon.type;
  if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.STREAM_ICON === type) {
    const obj2 = { voicePlatform: icon.voicePlatform };
    return value2(StreamIcon, obj2);
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.SPEAKER_MUTE_ICON === type) {
    const obj3 = {
      style: tmp.speakerMuteIcon,
      hitSlop: 12,
      onPress: icon.onPress,
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null,
    };
    const intl5 = util.intl;
    obj3.accessibilityLabel = intl5.string(util.t.Q8Uzof);
    const obj4 = { style: tmp.iconWithoutBackground };
    obj3.children = value2(VoiceXIcon.VoiceXIcon, obj4);
    return value2(Pressable, obj3);
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_VIDEO_ICON === type) {
    if (icon.videoIconState === VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO) {
      const intl4 = util.intl;
      let stringResult = intl4.string(util.t.uv1tVh);
    } else {
      const intl3 = util.intl;
      stringResult = intl3.string(util.t["PXMZ/+"]);
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
      let tmp19 = value2(Pressable, obj5);
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
      tmp19 = value2(NativeViewDefault, obj7);
    }
    return tmp19;
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
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.STAGE_MODERATOR_ICON === type) {
    const obj12 = {
      style: tmp.iconContainer,
      accessible: true,
      accessibilityRole: "image",
      accessibilityLabel: null,
      children: null,
    };
    const intl2 = util.intl;
    obj12.accessibilityLabel = intl2.string(util.t.GMZqSi);
    const obj13 = { size: "xs", color: nativeDefault.colors.WHITE };
    obj12.children = value2(StageModeratorIcon.StageModeratorIcon, obj13);
    return value2(NativeViewDefault, obj12);
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
    const obj14 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
    obj.children = value2(CircleErrorIcon.CircleErrorIcon, obj14);
    return value2(Pressable, obj);
  }
}
function useControlsHideStyles(controlsHidden, arg1) {
  items = [closure_29, spring_spring.withSpring, controlsHidden, React6, arg1];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp, tmp2, tmp3, tmp4, tmp5] = items;
  class VoicePanelCardFloatingControlsTsx2 {
    constructor() {
      tmp = closure_0;
      obj = closure_1;
      num = 1;
      if (closure_1.get()) {
        num = 0;
      }
      obj1 = { opacity: tmp(num, closure_2), transform: null };
      tmp2 = closure_2;
      num2 = 0;
      if (obj.get()) {
        num2 = closure_3;
      }
      obj4 = { translateY: tmp(num2, tmp2) };
      items = [];
      items[0] = obj4;
      obj1.transform = items;
      return obj1;
    }
  }
  const items1 = [tmp2, tmp3, tmp4, tmp5];
  VoicePanelCardFloatingControlsTsx2.__closure = items1;
  VoicePanelCardFloatingControlsTsx2.__workletHash = 9709174111835;
  VoicePanelCardFloatingControlsTsx2.__initData = tmp;
  return _mod1652.useAnimatedStyle(VoicePanelCardFloatingControlsTsx2);
}
function HideableTileControl(arg0) {
  ({ style, hideStyles, layout, children } = arg0);
  return value2(module_1652.View, {
    style,
    layout,
    pointerEvents: "box-none",
    children: value2(module_1652.View, { style: hideStyles, pointerEvents: "box-none", children }),
  });
}
get_ActivityIndicator = fn(17);
({ PixelRatio, Platform, Pressable } = get_ActivityIndicator);
const VoicePanelConstants = fn(11372);
({ MODE_CHANGE_PHYSICS: closure_9, VoicePanelModes: closure_10 } = VoicePanelConstants);
const VoicePanelControlsModes = fn(11370).VoicePanelControlsModes;
const VOICE_PANEL_CARD_INNER_PADDING = fn(11375).VOICE_PANEL_CARD_INNER_PADDING;
const ThemeTypes = fn(1072).ThemeTypes;
const CallConstants = fn(5807);
({ ParticipantTypes: closure_14, VoicePlatforms: closure_15 } = CallConstants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
let module_1652 = module_1652_mod;
let closure_19 = module_1652.createAnimatedComponent(fn(1187).Icon);
let module_1652 = module_1652_mod;
let closure_20 = module_1652.createAnimatedComponent(Pressable);
let c21 = 28;
const paddingVertical = PixelRatio.roundToNearestPixel(4);
const createStyles = fn(5142);
let closure_23 = createStyles.createStyles(() => {
  const obj = {
    topLeftButton: null,
    topRightButton: {
      position: "absolute",
      top: VOICE_PANEL_CARD_INNER_PADDING,
      right: VOICE_PANEL_CARD_INNER_PADDING,
      zIndex: 1,
    },
    labelPositionContainer: null,
    labelHideWrapper: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: "center",
      alignItems: "center",
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
  const rect = {
    position: "absolute",
    top: VOICE_PANEL_CARD_INNER_PADDING,
    left: VOICE_PANEL_CARD_INNER_PADDING,
    zIndex: 1,
  };
  obj.topLeftButton = rect;
  const rect1 = { position: "absolute", left: 8, right: 8, bottom: 8, height, marginHorizontal: 8 };
  obj.labelPositionContainer = rect1;
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
  obj.floatingContainer = {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    overflow: "hidden",
    flexShrink: 1,
    alignSelf: "stretch",
  };
  obj.floatingText = {
    overflow: "hidden",
    paddingStart: 4,
    paddingEnd: 4,
    paddingVertical,
    marginVertical: -paddingVertical,
    flexShrink: 1,
    lineHeight: 14,
  };
  const rect2 = {
    position: "absolute",
    top: 8,
    right: 8,
    padding: 6,
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  };
  obj.ringingIconContainer = rect2;
  const obj2 = {
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
  };
  const obj3 = {
    overflow: "hidden",
    paddingStart: 4,
    paddingEnd: 4,
    paddingVertical,
    marginVertical: -paddingVertical,
    flexShrink: 1,
    lineHeight: 14,
  };
  obj.ringingIcon = { tintColor: nativeDefault.colors.STATUS_POSITIVE };
  obj.secureFramesIcon = { marginEnd: -2 };
  return obj;
});
let closure_24 = {
  code: "(function VoicePanelCardFloatingControlsTsx1(){let[controlsSpecs,VoicePanelControlsModes,GAP]=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;return{marginLeft:hidden?2:GAP,marginRight:hidden?2:0};})",
};
let closure_27 = -28 + 3 * VOICE_PANEL_CARD_INNER_PADDING;
let closure_28 = 28 + VOICE_PANEL_CARD_INNER_PADDING;
let closure_29 = {
  code: "(function VoicePanelCardFloatingControlsTsx2(){let[withSpring,hidden,MODE_CHANGE_PHYSICS,hiddenOffsetY]=this.__closure;return{opacity:withSpring(hidden.get()?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(hidden.get()?hiddenOffsetY:0,MODE_CHANGE_PHYSICS)}]};})",
};
let closure_32 = noop.memo(function CloseButton(participant) {
  participant = participant.participant;
  let guildId;
  ({ controlsHidden, isSelf, layout } = participant);
  guildId = noop.useContext(guildId(11371)).guildId;
  items = [guildId, participant];
  const tmp = closure_23();
  let obj = {
    style: tmp.topLeftButton,
    hideStyles: useControlsHideStyles(controlsHidden, closure_27),
    layout,
    children: null,
  };
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
  const tmp2 = useControlsHideStyles(controlsHidden, closure_27);
  obj2.icon = guildId(19693);
  obj2.onPress = callback;
  const tmp6 = guildId(19550);
  let result = participant(19645).isStableActivityParticipant(participant);
  const intl = participant(1113).intl;
  const string = intl.string;
  const t = participant(1113).t;
  if (result) {
    let stringResult = string(t["R/FK4A"]);
  } else if (isSelf) {
    stringResult = string(t.S5anIc);
  } else {
    stringResult = string(t.q3O3J8);
  }
  obj2.accessibilityLabel = stringResult;
  obj.children = closure_16(tmp6, obj2);
  return closure_16(HideableTileControl, obj);
});
let closure_33 = {
  code: "(function VoicePanelCardFloatingControlsTsx3(){let[controlsHidden,mode,VoicePanelModes]=this.__closure;return controlsHidden.get()||mode.get()===VoicePanelModes.PIP;})",
};
let closure_34 = noop.memo(function CardFocusButton(participantId) {
  participantId = participantId.participantId;
  const targetName = participantId.targetName;
  ({ controlsHidden, isActivityParticipant, layout } = participantId);
  const context = noop.useContext(VoicePanelStateContextDefault);
  const setFocused = context.setFocused;
  items = [setFocused, participantId];
  const callback = noop.useCallback(() => {
    _undefined2(c0);
  }, items);
  const tmp5 = closure_23();
  const items1 = [closure_33, controlsHidden, context.mode, closure_1_10];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp7, tmp8, tmp9, tmp10] = items1;
  class VoicePanelCardFloatingControlsTsx3 {
    constructor() {
      value = closure_0.get();
      if (!value) {
        tmp2 = closure_1;
        tmp3 = closure_2;
        value = closure_1.get() === closure_2.PIP;
      }
      return value;
    }
  }
  const items2 = [tmp8, tmp9, tmp10];
  VoicePanelCardFloatingControlsTsx3.__closure = items2;
  VoicePanelCardFloatingControlsTsx3.__workletHash = 11699868813456;
  VoicePanelCardFloatingControlsTsx3.__initData = tmp7;
  if (isActivityParticipant) {
    const intl3 = util.intl;
    let stringResult = intl3.string(util.t["3ejJer"]);
  } else if (null != targetName) {
    const intl2 = util.intl;
    const obj2 = { targetName };
    stringResult = intl2.formatToPlainString(util.t.OervdV, obj2);
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t["77cRN4"]);
  }
  const obj3 = {
    style: tmp5.topRightButton,
    hideStyles: useControlsHideStyles(_mod1652.useDerivedValue(VoicePanelCardFloatingControlsTsx3), closure_27),
    layout,
    children: null,
  };
  const obj4 = { icon: null, onPress: null, accessibilityLabel: null };
  const tmp11 = useControlsHideStyles(_mod1652.useDerivedValue(VoicePanelCardFloatingControlsTsx3), closure_27);
  obj4.icon = _modDef19694;
  obj4.onPress = callback;
  obj4.accessibilityLabel = stringResult;
  obj3.children = value2(VoicePanelIconButtonDefault, obj4);
  return value2(HideableTileControl, obj3);
});
let closure_35 = { mass: 0.1, stiffness: 400, overshootClamping: true };
let closure_36 = {
  code: "(function VoicePanelCardFloatingControlsTsx4(){let[flip]=this.__closure;return flip.get();})",
};
let closure_37 = {
  code: "(function VoicePanelCardFloatingControlsTsx5(finished){let[flip]=this.__closure;if(!finished)return;flip.set(!flip.get());})",
};
let closure_38 = {
  code: "(function VoicePanelCardFloatingControlsTsx6(finished){let[flip]=this.__closure;if(!finished)return;flip.set(!flip.get());})",
};
let closure_39 = {
  code: "(function VoicePanelCardFloatingControlsTsx7(flipped){let[angle,withSpring,getRandomNumberInRange,RING_PHYSICS,_worklet_3408418077918_init_data,flip,_worklet_3975598053693_init_data]=this.__closure;if(flipped){angle.set(withSpring(getRandomNumberInRange(45-10,45+10),RING_PHYSICS,'respect-motion-settings',function VoicePanelCardFloatingControlsTsx5Factory([_worklet_3408418077918_init_data,flip]){const VoicePanelCardFloatingControlsTsx5=function(finished){if(!finished)return;flip.set(!flip.get());};VoicePanelCardFloatingControlsTsx5.__closure=[flip];VoicePanelCardFloatingControlsTsx5.__workletHash=3408418077918;VoicePanelCardFloatingControlsTsx5.__initData=_worklet_3408418077918_init_data;return VoicePanelCardFloatingControlsTsx5;}([_worklet_3408418077918_init_data,flip])));}else{angle.set(withSpring(getRandomNumberInRange(0-10,0+10),RING_PHYSICS,'respect-motion-settings',function VoicePanelCardFloatingControlsTsx6Factory([_worklet_3975598053693_init_data,flip]){const VoicePanelCardFloatingControlsTsx6=function(finished){if(!finished)return;flip.set(!flip.get());};VoicePanelCardFloatingControlsTsx6.__closure=[flip];VoicePanelCardFloatingControlsTsx6.__workletHash=3975598053693;VoicePanelCardFloatingControlsTsx6.__initData=_worklet_3975598053693_init_data;return VoicePanelCardFloatingControlsTsx6;}([_worklet_3975598053693_init_data,flip])));}})",
};
let closure_40 = {
  code: "(function VoicePanelCardFloatingControlsTsx8(){let[controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING]=this.__closure;return{top:controlsHidden.get()?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):0};})",
};
let closure_41 = {
  code: '(function VoicePanelCardFloatingControlsTsx9(){let[angle]=this.__closure;return{transform:[{rotate:angle.get()+"deg"}]};})',
};
let closure_42 = noop.memo(function RingingIcon(controlsHidden) {
  const tmp = closure_23();
  const sharedValue = _mod1652.useSharedValue(true);
  const sharedValue1 = _mod1652.useSharedValue(0);
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => _undefined2.useReducedMotion);
  let items1 = [closure_36, sharedValue];
  c0 = undefined;
  [tmp7, tmp8] = items1;
  class VoicePanelCardFloatingControlsTsx4 {
    constructor() {
      return closure_0.get();
    }
  }
  let items2 = [tmp8];
  VoicePanelCardFloatingControlsTsx4.__closure = items2;
  VoicePanelCardFloatingControlsTsx4.__workletHash = 5558451211124;
  VoicePanelCardFloatingControlsTsx4.__initData = tmp7;
  let items3 = [
    closure_39,
    sharedValue1,
    spring_spring.withSpring,
    getRandomNumberInRangeDefault,
    closure_35,
    closure_37,
    sharedValue,
    closure_38,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items3;
  class VoicePanelCardFloatingControlsTsx7 {
    constructor(arg0) {
      tmp = closure_0;
      set = closure_0.set;
      tmp2 = closure_1;
      tmp3 = closure_2;
      if (controlsHidden) {
        num4 = 55;
        num5 = 35;
        tmp3Result = tmp3(35, 55);
        tmp16 = closure_3;
        tmp17 = closure_4;
        items = [,];
        items[0] = closure_4;
        tmp18 = closure_5;
        items[1] = closure_5;
        closure_0 = undefined;
        tmp19 = items;
        [tmp20, tmp21] = items;
        class VoicePanelCardFloatingControlsTsx5 {
          constructor(arg0) {
            if (controlsHidden) {
              tmp = closure_0;
              result = closure_0.set(!closure_0.get());
            }
            return;
          }
        }
        items1 = [];
        items1[0] = tmp21;
        VoicePanelCardFloatingControlsTsx5.__closure = items1;
        num6 = 3408418077918;
        VoicePanelCardFloatingControlsTsx5.__workletHash = 3408418077918;
        VoicePanelCardFloatingControlsTsx5.__initData = tmp20;
        str2 = "respect-motion-settings";
        tmp22 = tmp3Result;
        tmp23 = tmp16;
        tmp24 = VoicePanelCardFloatingControlsTsx5;
        result = set(tmp2(tmp3Result, tmp16, "respect-motion-settings", VoicePanelCardFloatingControlsTsx5));
      } else {
        num = 10;
        num2 = -10;
        tmp3Result1 = tmp3(-10, 10);
        tmp5 = closure_3;
        tmp6 = closure_6;
        items2 = [,];
        items2[0] = closure_6;
        tmp7 = closure_5;
        items2[1] = closure_5;
        closure_0 = undefined;
        tmp8 = items2;
        [tmp9, tmp10] = items2;
        class VoicePanelCardFloatingControlsTsx5 {
          constructor(arg0) {
            if (controlsHidden) {
              tmp = closure_0;
              result = closure_0.set(!closure_0.get());
            }
            return;
          }
        }
        items3 = [];
        items3[0] = tmp10;
        VoicePanelCardFloatingControlsTsx6.__closure = items3;
        num3 = 3975598053693;
        VoicePanelCardFloatingControlsTsx6.__workletHash = 3975598053693;
        VoicePanelCardFloatingControlsTsx6.__initData = tmp9;
        str = "respect-motion-settings";
        tmp11 = tmp3Result1;
        tmp12 = tmp5;
        tmp13 = VoicePanelCardFloatingControlsTsx6;
        result1 = set(tmp2(tmp3Result1, tmp5, "respect-motion-settings", VoicePanelCardFloatingControlsTsx6));
      }
      return;
    }
  }
  const items4 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  VoicePanelCardFloatingControlsTsx7.__closure = items4;
  VoicePanelCardFloatingControlsTsx7.__workletHash = 8633903369339;
  VoicePanelCardFloatingControlsTsx7.__initData = tmp10;
  const animatedReaction = _mod1652.useAnimatedReaction(
    VoicePanelCardFloatingControlsTsx4,
    VoicePanelCardFloatingControlsTsx7,
  );
  const items5 = [closure_40, controlsHidden.controlsHidden, c21, VOICE_PANEL_CARD_INNER_PADDING];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp19, tmp20, tmp21, tmp22] = items5;
  class VoicePanelCardFloatingControlsTsx8 {
    constructor() {
      top = 0;
      if (closure_0.get()) {
        tmp = closure_1;
        tmp2 = closure_2;
        num2 = 2;
        top = -closure_1 + 2 * closure_2;
      }
      return { top };
    }
  }
  const items6 = [tmp20, tmp21, tmp22];
  VoicePanelCardFloatingControlsTsx8.__closure = items6;
  VoicePanelCardFloatingControlsTsx8.__workletHash = 1499880068773;
  VoicePanelCardFloatingControlsTsx8.__initData = tmp19;
  const animatedStyle = _mod1652.useAnimatedStyle(VoicePanelCardFloatingControlsTsx8);
  const tmp2Result = _mod1652;
  const items7 = [closure_41, sharedValue1];
  c0 = undefined;
  [tmp24, tmp25] = items7;
  class VoicePanelCardFloatingControlsTsx9 {
    constructor() {
      obj = { transform: null };
      obj1 = { rotate: "" + closure_0.get() + "deg" };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items8 = [tmp25];
  VoicePanelCardFloatingControlsTsx9.__closure = items8;
  VoicePanelCardFloatingControlsTsx9.__workletHash = 7953187195911;
  VoicePanelCardFloatingControlsTsx9.__initData = tmp24;
  const animatedStyle1 = _mod1652.useAnimatedStyle(VoicePanelCardFloatingControlsTsx9);
  const obj5 = { style: null, children: null };
  const items9 = [animatedStyle, tmp.ringingIconContainer];
  obj5.style = items9;
  let tmp28 = !stateFromStores;
  if (!stateFromStores) {
    tmp28 = animatedStyle1;
  }
  const obj6 = { style: tmp28, pointerEvents: "none", children: null };
  const tmp2Result2 = _mod1652;
  obj6.children = value2(native.Icon, {
    source: _modDef19695,
    size: native.IconSizes.SMALL_20,
    style: tmp.ringingIcon,
  });
  obj5.children = value2(module_1652.View, obj6);
  return value2(module_1652.View, obj5);
});
let closure_43 = noop.memo(function RingingIconWrapper(controlsHidden) {
  return value2(native2.ThemeContextProvider, {
    theme: ThemeTypes.LIGHT,
    children: value2(closure_42, { controlsHidden: controlsHidden.controlsHidden }),
  });
});
let closure_44 = noop.memo(function UserTagChiplet(arg0) {
  ({ userId, textColor } = arg0);
  let gameRecord;
  importDefault = undefined;
  dependencyMap = undefined;
  const first = usePlayingGameActivitiesDefault(userId, arg0.guildId)[0];
  application_id = undefined;
  if (first != null) {
    application_id = first.application_id;
  }
  gameRecord = useResolveGameDefault({ applicationId: application_id }).gameRecord;
  const tmp6 = useGameProfileObscuredDefault(gameRecord);
  importDefault = tmp6;
  dependencyMap = noop.useRef(false);
  items = [gameRecord, tmp6];
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
      items = [useShouldOpenGameProfileModal.RejectionReason.Obscured];
      obj.trackEntryPoint(false, gameRecord.id, items, GameProfileAnalyticUtils.GameProfileSources.CallTile);
      ref.current = true;
    }
  }, items);
  if (null != gameRecord) {
    if (!tmp6) {
      let obj = { game: gameRecord, userId, textColor };
      let tmp9 = closure_16(tmp(19696), obj);
    }
    return tmp9;
  }
  tmp9 = closure_16(tmp(9381), { userId, textColor });
});
let closure_45 = {
  code: "(function VoicePanelCardFloatingControlsTsx10(){let[hasHiddenVisibleIcon,focused,connected,mode,VoicePanelModes,controlsHidden]=this.__closure;const showIcon=hasHiddenVisibleIcon&&focused.get()==null;return!connected.get()||mode.get()===VoicePanelModes.PIP||!showIcon&&controlsHidden.get();})",
};
let closure_46 = {
  code: "(function VoicePanelCardFloatingControlsTsx11(){let[FLOATING_BAR_HEIGHT,isPillHidden]=this.__closure;return{height:FLOATING_BAR_HEIGHT,pointerEvents:isPillHidden.get()?'none':'auto'};})",
};
let closure_47 = {
  code: "(function VoicePanelCardFloatingControlsTsx12(){let[connected,isScreenReaderEnabled,controlsSpecs,VoicePanelControlsModes,hasIcon,GAP]=this.__closure;const hidden=!connected.get()||!isScreenReaderEnabled&&controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&hasIcon;const shouldCollapseWidth=hidden&&hasIcon;return{width:shouldCollapseWidth?0:'auto',marginRight:hidden?-GAP:0};})",
};
let closure_48 = noop.memo(function FloatingParticipantLabel(controlsHidden) {
  ({ label, layout, participant } = controlsHidden);
  importDefault = undefined;
  dependencyMap = undefined;
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ guildId, channelId } = context);
  let _require = channelId;
  const connected = context.connected;
  ({ controlsSpecs, focused, mode } = context);
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  const tmp6 = closure_23();
  let obj = noop;
  const obj2 = require("useIsScreenReaderEnabled");
  let id;
  if (obj3.isStableParticipantWithUser(participant)) {
    id = participant.user.id;
  }
  importDefault = id;
  const analyticsLocations = tmp(7390)().analyticsLocations;
  dependencyMap = analyticsLocations;
  items = [id, channelId, analyticsLocations];
  const callback = obj.useCallback(() => {
    if (null != c1) {
      const obj = { userId: tmp, channelId: _undefined, isVoiceContext: true, sourceAnalyticsLocations };
      showUserProfileActionSheetDefault(obj);
    }
  }, items);
  obj3 = require("useStableParticipant");
  let isUserSecureFramesVerified = require("useIsSecureFramesVerified").useIsUserSecureFramesVerified({
    userId: id,
    channelId,
  });
  const tmp4Result = require("useIsSecureFramesVerified");
  const tmpResult = useVoicePanelCardUserStateIconsDefault;
  let id1;
  if (tmp4Result6.isStableParticipantWithUser(participant)) {
    id1 = participant.user.id;
  }
  const tmpResultResult = tmpResult(participant.type, id1, guildId, channelId);
  tmp4Result6 = require("useStableParticipant");
  const tmp12 = useDisplayNameStylesDefault({ userId: id, guildId });
  const displayNameStylesFont = require("useDisplayNameStylesFont").useDisplayNameStylesFont({
    displayNameStyles: tmp12,
  });
  const tmp4Result7 = require("useDisplayNameStylesFont");
  const items1 = [
    closure_45,
    tmpResultResult.filter(
      (type) => type.type !== _undefined(sourceAnalyticsLocations[21]).VoicePanelCardUserStateIconType.STREAM_ICON,
    ).length >= 1,
    focused,
    connected,
    mode,
    closure_10,
    controlsHidden.controlsHidden,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items1;
  class VoicePanelCardFloatingControlsTsx10 {
    constructor() {
      tmp = closure_0;
      if (closure_0) {
        tmp2 = closure_1;
        tmp3 = null;
        tmp = null == closure_1.get();
      }
      value = closure_2.get();
      tmp5 = !value;
      if (value) {
        tmp6 = closure_3;
        tmp7 = closure_4;
        tmp5 = closure_3.get() === closure_4.PIP;
      }
      if (!tmp5) {
        value1 = !tmp;
        if (!tmp) {
          tmp9 = closure_5;
          value1 = closure_5.get();
        }
        tmp5 = value1;
      }
      return tmp5;
    }
  }
  const items2 = [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
  VoicePanelCardFloatingControlsTsx10.__closure = items2;
  VoicePanelCardFloatingControlsTsx10.__workletHash = 475264106102;
  VoicePanelCardFloatingControlsTsx10.__initData = tmp14;
  const derivedValue = require("../../../../../_runtime/metro/01652__.js").useDerivedValue(
    VoicePanelCardFloatingControlsTsx10,
  );
  const tmp4Result8 = require("../../../../../_runtime/metro/01652__.js");
  const items3 = [closure_46, c21, derivedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp22, tmp23, tmp24] = items3;
  class VoicePanelCardFloatingControlsTsx11 {
    constructor() {
      obj = { height: closure_0, pointerEvents: null };
      str = "auto";
      if (closure_1.get()) {
        str = "none";
      }
      obj.pointerEvents = str;
      return obj;
    }
  }
  const items4 = [tmp23, tmp24];
  VoicePanelCardFloatingControlsTsx11.__closure = items4;
  VoicePanelCardFloatingControlsTsx11.__workletHash = 14022799495709;
  VoicePanelCardFloatingControlsTsx11.__initData = tmp22;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    VoicePanelCardFloatingControlsTsx11,
  );
  const tmp4Result9 = require("../../../../../_runtime/metro/01652__.js");
  const tmp26 = useControlsHideStyles(derivedValue, closure_28);
  const items5 = [
    closure_47,
    connected,
    isScreenReaderEnabled,
    controlsSpecs,
    VoicePanelControlsModes,
    tmpResultResult.length >= 1,
    4,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33] = items5;
  class VoicePanelCardFloatingControlsTsx12 {
    constructor() {
      value = closure_0.get();
      tmp2 = !value;
      if (value) {
        tmp3 = closure_1;
        tmp4 = !closure_1;
        if (!closure_1) {
          tmp5 = closure_2;
          tmp6 = closure_3;
          tmp4 = closure_2.get().mode === closure_3.HIDDEN;
        }
        if (tmp4) {
          tmp4 = closure_4;
        }
        tmp2 = tmp4;
      }
      num = "auto";
      if (tmp2) {
        tmp7 = closure_4;
        num = "auto";
        if (closure_4) {
          num = 0;
        }
      }
      obj = { width: num, marginRight: null };
      num2 = 0;
      if (tmp2) {
        tmp8 = closure_5;
        num2 = -closure_5;
      }
      obj.marginRight = num2;
      return obj;
    }
  }
  const items6 = [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33];
  VoicePanelCardFloatingControlsTsx12.__closure = items6;
  VoicePanelCardFloatingControlsTsx12.__workletHash = 14557424257641;
  VoicePanelCardFloatingControlsTsx12.__initData = tmp27;
  const items7 = [tmp6.labelPositionContainer];
  const animatedStyle1 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    VoicePanelCardFloatingControlsTsx12,
  );
  const obj4 = { style: items7, layout, pointerEvents: "box-none", children: null };
  const obj5 = { style: null, pointerEvents: "box-none", children: null };
  const items8 = [tmp6.labelHideWrapper, tmp26];
  obj5.style = items8;
  let tmp38;
  if (null != id) {
    tmp38 = callback;
  }
  const obj6 = { onPress: tmp38, style: null, layout, children: null };
  const items9 = [tmp6.labelOuterContainer, animatedStyle];
  obj6.style = items9;
  let tmp35Result = tmpResultResult.length > 0;
  if (tmp35Result) {
    const obj7 = {
      style: tmp6.initialIcons,
      children: tmpResultResult.map((icon) => closure_1_16(AnimatedLabelIcon, { icon }, icon.type)),
    };
    tmp35Result = closure_16(tmp(7026), obj7);
    const tmpResult2 = tmp(7026);
  }
  const items10 = [tmp35Result];
  const obj8 = { style: null, layout, children: null };
  const items11 = [tmp6.floatingContainer, animatedStyle1];
  obj8.style = items11;
  const items12 = [tmp6.floatingText];
  let tmp41 = null != displayNameStylesFont;
  if (tmp41) {
    const obj9 = { fontFamily: displayNameStylesFont };
    tmp41 = obj9;
  }
  const obj10 = {
    variant: "heading-xs/semibold",
    color: "text-overlay-light",
    lineClamp: 1,
    style: items12,
    ellipsizeMode: "tail",
    accessibilityLabel: null,
    children: null,
  };
  items12[1] = tmp41;
  if (
    null !=
    tmpResultResult.find(
      (type) => type.type === _undefined(sourceAnalyticsLocations[21]).VoicePanelCardUserStateIconType.STREAM_ICON,
    )
  ) {
    const intl3 = tmp4(1113).intl;
    const obj11 = { username: label };
    let formatToPlainStringResult = intl3.formatToPlainString(tmp4(1113).t.I0mOAs, obj11);
  } else {
    const found = tmpResultResult.find(
      (type) => type.type === _undefined(sourceAnalyticsLocations[21]).VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON,
    );
    formatToPlainStringResult = label;
    if (null != found) {
      const muteDeafenIconState = found.muteDeafenIconState;
      if (tmp4(9320).MuteDeafenIconState.DEAFENED !== muteDeafenIconState) {
        if (tmp4(9320).MuteDeafenIconState.DEAFENED_SERVER !== muteDeafenIconState) {
          const intl = tmp4(1113).intl;
          const obj12 = { username: label };
          formatToPlainStringResult = intl.formatToPlainString(tmp4(1113).t.Hd1oVG, obj12);
        }
      }
      const intl2 = tmp4(1113).intl;
      const obj13 = { username: label };
      formatToPlainStringResult = intl2.formatToPlainString(tmp4(1113).t["9hDjai"], obj13);
    }
  }
  obj10.accessibilityLabel = formatToPlainStringResult;
  obj10.children = label;
  const items13 = [closure_16(require("Text/Text").Text, obj10), ,];
  let tmp35Result2 = participant.type === constants.USER;
  if (tmp35Result2) {
    const obj14 = { userId: participant.user.id, guildId, textColor: "text-overlay-light" };
    tmp35Result2 = closure_16(closure_44, obj14);
  }
  items13[1] = tmp35Result2;
  if (isUserSecureFramesVerified) {
    const obj15 = { style: tmp6.secureFramesIcon, size: "xs", accessibilityLabel: null };
    const intl4 = tmp4(1113).intl;
    obj15.accessibilityLabel = intl4.string(tmp4(1113).t.mR9cf3);
    isUserSecureFramesVerified = closure_16(tmp4(15001).ShieldLockIcon, obj15);
  }
  items13[2] = isUserSecureFramesVerified;
  obj8.children = items13;
  items10[1] = closure_17(module_1652.View, obj8);
  obj6.children = items10;
  obj5.children = closure_17(closure_20, obj6);
  obj4.children = closure_16(module_1652.View, obj5);
  return closure_16(module_1652.View, obj4);
});
let closure_49 = {
  code: "(function VoicePanelCardFloatingControlsTsx13(){let[controlsSpecs,VoicePanelControlsModes,focused,mode,VoicePanelModes]=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN||focused.get()!=null||mode.get()===VoicePanelModes.PIP;})",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx");

export default noop.memo(function FloatingControls(arg0) {
  ({ label, participant } = arg0);
  let _require = participant;
  ({ isRinging, layout } = arg0);
  const context = noop.useContext(VoicePanelStateContextDefault);
  const guildId = context.guildId;
  importDefault = guildId;
  ({ channelId, controlsSpecs, focused, mode } = context);
  items = [RTCConnectionStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => connected.isConnected());
  let obj = require("initialize");
  const obj2 = require("useStableParticipant");
  const tmp6 = require("useStableParticipant").isStableParticipantWithUser(participant) && participant.isSelf;
  const items1 = [EmbeddedActivitiesStore, ApplicationStreamingStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    if (obj.isStableActivityParticipant(_undefined)) {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      return _undefined.applicationId === applicationId;
    } else {
      let result = useStableParticipant.isStableStreamParticipant(_undefined);
      if (result) {
        result = null != ApplicationStreamingStore.getActiveStreamForUser(_undefined.user.id, c1);
      }
      return result;
    }
    obj = useStableParticipant;
  });
  const tmp4Result = require("initialize");
  const tmp8 = useIsVoicePanelParticipantFocusableDefault(guildId, channelId, participant.id);
  const items2 = [closure_49, controlsSpecs, VoicePanelControlsModes, focused, mode, closure_10];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items2;
  class VoicePanelCardFloatingControlsTsx13 {
    constructor() {
      tmp = closure_0.get().mode === closure_1.HIDDEN;
      if (!tmp) {
        tmp2 = closure_2;
        tmp3 = null;
        tmp = null != closure_2.get();
      }
      if (!tmp) {
        tmp4 = closure_3;
        tmp5 = closure_4;
        tmp = closure_3.get() === closure_4.PIP;
      }
      return tmp;
    }
  }
  const items3 = [tmp10, tmp11, tmp12, tmp13, tmp14];
  VoicePanelCardFloatingControlsTsx13.__closure = items3;
  VoicePanelCardFloatingControlsTsx13.__workletHash = 1345141750539;
  VoicePanelCardFloatingControlsTsx13.__initData = tmp9;
  const derivedValue = require("../../../../../_runtime/metro/01652__.js").useDerivedValue(
    VoicePanelCardFloatingControlsTsx13,
  );
  let tmp16 = null != label;
  if (tmp16) {
    const obj3 = { controlsHidden: derivedValue, label, layout, participant };
    tmp16 = closure_16(closure_48, obj3);
  }
  if (isRinging) {
    const obj4 = { controlsHidden: derivedValue };
    isRinging = closure_16(closure_43, obj4);
  }
  const children = [isRinging, , ,];
  let tmp23 = stateFromStores;
  if (stateFromStores) {
    tmp23 = stateFromStores1;
  }
  if (tmp23) {
    const obj5 = { controlsHidden: derivedValue, participant, isSelf: tmp6, layout };
    tmp23 = closure_16(closure_32, obj5);
  }
  children[1] = tmp23;
  if (stateFromStores) {
    stateFromStores = tmp8;
  }
  if (stateFromStores) {
    const obj6 = {
      controlsHidden: derivedValue,
      participantId: participant.id,
      targetName: label,
      isActivityParticipant: tmp4(19645).isStableActivityParticipant(participant),
      layout,
    };
    stateFromStores = closure_16(closure_34, obj6);
    const tmp4Result4 = tmp4(19645);
  }
  children[2] = stateFromStores;
  children[3] = tmp16;
  return closure_17(closure_18, { children });
});
