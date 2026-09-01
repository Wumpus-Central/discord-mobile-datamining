// discord_app/modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ManaContext from "../../../../../discord_common/js/packages/design/native.tsx";
import setDefault from "../../../core/native/NativeView.tsx";
import dismissPanelDefault from "../VoicePanelStateContext.tsx";
import useVoicePanelCardUserStateIcons from "../hooks/useVoicePanelCardUserStateIcons.tsx";
import registerAssetDefault from "../../../../../_runtime/16689_registerAsset.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../a11y/AccessibilityStore.tsx";
import closure_6 from "../../../activities/EmbeddedActivitiesStore.tsx";
import closure_7 from "../../../../stores/ApplicationStreamingStore.tsx";
import closure_8 from "../../../../stores/RTCConnectionStore.tsx";
import VoicePanelModes from "../../VoicePanelConstants.tsx";
import { VoicePanelControlsModes } from "../controls/VoicePanelControlsConstants.tsx";
import { VOICE_PANEL_CARD_INNER_PADDING as closure_12 } from "VoicePanelCardConstants.tsx";
import { ThemeTypes } from "../../../../Constants.tsx";
import ParticipantTypes from "../../../calls/CallConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import importDefaultResult from "../../../reanimated/ReanimatedRexport.tsx";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function StreamIcon(voicePlatform) {
  voicePlatform = voicePlatform.voicePlatform;
  let controlsSpecs;
  controlsSpecs = importAllResult.useContext(dismissPanelDefault).controlsSpecs;
  let obj = controlsSpecs(4217);
  const fn = function o() {
    const tmp = controlsSpecs.get().mode === closure_1_11.HIDDEN;
    let num = 4;
    if (tmp) {
      num = 2;
    }
    const obj = { marginLeft: num, marginRight: null };
    let num2 = 0;
    if (tmp) {
      num2 = 2;
    }
    obj[1] = num2;
    return obj;
  };
  obj = { controlsSpecs, VoicePanelControlsModes, GAP: 4 };
  fn.__closure = obj;
  fn.__workletHash = 3270040588948;
  fn.__initData = closure_23;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let source = registerAssetDefault;
  if (voicePlatform === constants2.XBOX) {
    source = tmp2(16734);
  } else if (voicePlatform === tmp6.MOBILE) {
    source = tmp2(10147);
  } else if (voicePlatform === tmp6.QUEST) {
    source = tmp2(16735);
  }
  const style = [callback2().iconWithoutBackground, animatedStyle];
  return callback(closure_19, { source, style });
}
function AnimatedLabelIcon(icon) {
  icon = icon.icon;
  const tmp = callback2();
  const type = icon.type;
  if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.STREAM_ICON === type) {
    let obj = { voicePlatform: null };
    obj[0] = icon.voicePlatform;
    return callback(StreamIcon, obj);
  } else if (tmp2(16687).VoicePanelCardUserStateIconType.SPEAKER_MUTE_ICON === type) {
    obj = { style: null, hitSlop: 12, onPress: null, children: null };
    obj[0] = tmp.speakerMuteIcon;
    obj[2] = icon.onPress;
    obj1 = { style: null };
    obj1[0] = tmp.iconWithoutBackground;
    obj[3] = callback(tmp2(10070).VoiceXIcon, obj1);
    return callback(Pressable, obj);
  } else if (tmp2(16687).VoicePanelCardUserStateIconType.USER_VIDEO_ICON === type) {
    const obj2 = { style: null, onPress: null, children: null };
    obj2[0] = tmp.iconContainer;
    obj2[1] = icon.onPress;
    const obj3 = { style: null, state: null };
    obj3[0] = tmp.icon;
    obj3[1] = icon.videoIconState;
    obj2[2] = callback(tmp2(9808).VideoIcon, obj3);
    return callback(Pressable, obj2);
  } else if (tmp2(16687).VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON === type) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.iconContainer;
    const obj5 = { onPress: null, hitSlop: 12, children: null };
    obj5[0] = icon.onPress;
    const obj6 = { style: null, state: null, alwaysWhite: true };
    obj6[0] = tmp.icon;
    obj6[1] = icon.muteDeafenIconState;
    obj5[2] = callback(tmp2(9808).MuteDeafenIcon, obj6);
    obj4[1] = callback(Pressable, obj5);
    return callback(setDefault, obj4);
  } else if (tmp2(16687).VoicePanelCardUserStateIconType.USER_DISCONNECTED_ICON === type) {
    obj = { style: null, onPress: null, children: null };
    obj[0] = tmp.iconContainer;
    obj[1] = icon.onPress;
    const obj7 = { size: "xs", color: null };
    obj7[1] = ThemesDefault.colors.TEXT_FEEDBACK_WARNING;
    obj[2] = callback(tmp2(7708).CircleErrorIcon, obj7);
    return callback(Pressable, obj);
  }
}
let c3 = importAllResult;
({ Platform, Pressable } = get_ActivityIndicator);
({ MODE_CHANGE_PHYSICS: c9, VoicePanelModes: c10 } = VoicePanelModes);
({ ParticipantTypes: closure_14, VoicePlatforms: closure_15 } = ParticipantTypes);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
let closure_19 = importDefaultResult.createAnimatedComponent(require("Button").Icon);
let closure_20 = importDefaultResult.createAnimatedComponent(Pressable);
let c21 = 28;
let closure_22 = createCacheKey.createStyles(() => {
  let obj = {
    labelPositionContainer: {
      position: "absolute",
      left: 8,
      right: 8,
      bottom: 8,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 8,
    },
    labelOuterContainer: null,
    initialIcons: null,
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
  obj = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: ThemesDefault.radii.sm,
    overflow: "hidden",
    paddingHorizontal: 8,
    backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
    height: c21,
    gap: 4,
  };
  obj[1] = obj;
  obj[2] = { display: "flex", flexDirection: "row", marginStart: -4, marginEnd: -4 };
  obj = { width: 12, height: 12, tintColor: ThemesDefault.colors.WHITE };
  obj[3] = obj;
  obj[4] = { width: 16, height: 16, tintColor: ThemesDefault.colors.WHITE };
  obj1 = { width: 16, height: 16, tintColor: ThemesDefault.colors.WHITE };
  obj[5] = {
    width: 20,
    height: 20,
    borderRadius: ThemesDefault.radii.round,
    alignItems: "center",
    justifyContent: "center",
  };
  obj[6] = { marginRight: 4 };
  obj[7] = { flexDirection: "row", alignItems: "center", gap: 4, overflow: "hidden", flexShrink: 1 };
  obj[8] = { overflow: "hidden", paddingStart: 4, paddingEnd: 4, flexShrink: 1, lineHeight: 14 };
  const obj2 = {
    width: 20,
    height: 20,
    borderRadius: ThemesDefault.radii.round,
    alignItems: "center",
    justifyContent: "center",
  };
  obj[9] = {
    position: "absolute",
    top: 8,
    right: 8,
    padding: 6,
    borderRadius: ThemesDefault.radii.round,
    backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  };
  const obj3 = {
    position: "absolute",
    top: 8,
    right: 8,
    padding: 6,
    borderRadius: ThemesDefault.radii.round,
    backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  };
  obj[10] = { tintColor: ThemesDefault.colors.STATUS_POSITIVE };
  obj[11] = { marginEnd: -2 };
  return obj;
});
let closure_23 = {
  code: "function VoicePanelCardFloatingControlsTsx1(){const{controlsSpecs,VoicePanelControlsModes,GAP}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;return{marginLeft:hidden?2:GAP,marginRight:hidden?2:0};}",
};
let closure_26 = {
  code: "function VoicePanelCardFloatingControlsTsx2(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get();return{position:'absolute',top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,left:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}",
};
let closure_27 = importAllResult.memo((participant) => {
  participant = participant.participant;
  let controlsHidden = participant;
  controlsHidden = participant.controlsHidden;
  let guildId;
  ({ isSelf, layout } = participant);
  guildId = importAllResult.useContext(guildId(11839)).guildId;
  let obj = controlsHidden(4217);
  const fn = function n() {
    const value = controlsHidden.get();
    if (value) {
      let tmp2 = -closure_1_21 + 2 * closure_1_12;
    } else {
      tmp2 = closure_1_12;
    }
    const obj = { position: "absolute", top: tmp2, left: closure_1_12, opacity: null, zIndex: 1 };
    let num2 = 1;
    if (value) {
      num2 = 0;
    }
    obj[3] = controlsHidden(closure_1_2[28]).withSpring(num2, closure_1_9);
    return obj;
  };
  obj = {
    controlsHidden,
    FLOATING_BAR_HEIGHT: c21,
    VOICE_PANEL_CARD_INNER_PADDING: closure_12,
    withSpring: controlsHidden(4927).withSpring,
    MODE_CHANGE_PHYSICS: closure_9,
  };
  fn.__closure = obj;
  fn.__workletHash = 4080439075039;
  fn.__initData = closure_26;
  const items = [guildId, participant];
  const animatedStyle = obj.useAnimatedStyle(fn);
  const callback = importAllResult.useCallback(() => {
    let obj = controlsHidden(closure_1_2[29]);
    if (obj.isStableStreamParticipant(controlsHidden)) {
      const streamForUser = closure_1_7.getStreamForUser(tmp3.user.id, guildId);
      if (null != streamForUser) {
        let tmpResult = tmp(tmp2[30]);
        tmpResult = tmp(tmp2[31]);
        tmpResult.stopStream(tmpResult.encodeStreamKey(streamForUser));
      }
    }
    if (tmpResult1.isStableActivityParticipant(controlsHidden)) {
      const currentEmbeddedActivity = closure_1_6.getCurrentEmbeddedActivity();
      let _location;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      obj = { location: null, applicationId: null };
      obj[0] = _location;
      obj[1] = tmp3.applicationId;
      guildId(tmp2[32]).leaveActivity(obj);
      const obj3 = guildId(tmp2[32]);
    }
  }, items);
  obj = { icon: guildId(16736), onPress: callback, style: animatedStyle, layout, accessibilityLabel: null };
  const tmp3 = closure_16;
  const tmp4 = guildId(16616);
  const result = controlsHidden(16685).isStableActivityParticipant(participant);
  const intl = controlsHidden(1236).intl;
  const string = intl.string;
  const t = controlsHidden(1236).t;
  if (result) {
    let stringResult = string(t["R/FK4A"]);
  } else if (isSelf) {
    stringResult = string(t.S5anIc);
  } else {
    stringResult = string(t.q3O3J8);
  }
  obj[4] = stringResult;
  return tmp3(tmp4, obj);
});
let closure_28 = {
  code: "function VoicePanelCardFloatingControlsTsx3(){const{controlsHidden,mode,VoicePanelModes,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get()||mode.get()===VoicePanelModes.PIP;return{position:'absolute',top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,right:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}",
};
let closure_29 = importAllResult.memo((participantId) => {
  participantId = participantId.participantId;
  const controlsHidden = participantId.controlsHidden;
  const targetName = participantId.targetName;
  let setFocused;
  let mode;
  ({ isActivityParticipant, layout } = participantId);
  const context = mode.useContext(controlsHidden(setFocused[16]));
  setFocused = context.setFocused;
  mode = context.mode;
  const items = [setFocused, participantId];
  const callback = mode.useCallback(() => {
    setFocused(participantId);
  }, items);
  let obj = participantId(setFocused[12]);
  const fn = function _() {
    let value = controlsHidden.get();
    if (!value) {
      value = mode.get() === closure_1_10.PIP;
    }
    if (value) {
      let tmp4 = -closure_1_21 + 2 * closure_1_12;
    } else {
      tmp4 = closure_1_12;
    }
    const obj = { position: "absolute", top: tmp4, right: closure_1_12, opacity: null, zIndex: 1 };
    let num2 = 1;
    if (value) {
      num2 = 0;
    }
    obj[3] = participantId(setFocused[28]).withSpring(num2, closure_1_9);
    return obj;
  };
  obj = {
    controlsHidden,
    mode,
    VoicePanelModes: closure_10,
    FLOATING_BAR_HEIGHT: c21,
    VOICE_PANEL_CARD_INNER_PADDING: closure_12,
    withSpring: participantId(setFocused[28]).withSpring,
    MODE_CHANGE_PHYSICS: closure_9,
  };
  fn.__closure = obj;
  fn.__workletHash = 12421495364262;
  fn.__initData = closure_28;
  const animatedStyle = obj.useAnimatedStyle(fn);
  if (isActivityParticipant) {
    const intl3 = tmp5(tmp2[26]).intl;
    let stringResult = intl3.string(tmp5(tmp2[26]).t["3ejJer"]);
  } else if (null != targetName) {
    const intl2 = tmp5(tmp2[26]).intl;
    obj = { targetName: null };
    obj[0] = targetName;
    stringResult = intl2.formatToPlainString(tmp5(tmp2[26]).t.OervdV, obj);
  } else {
    const intl = tmp5(tmp2[26]).intl;
    stringResult = intl.string(tmp5(tmp2[26]).t["77cRN4"]);
  }
  obj1 = {
    icon: controlsHidden(setFocused[35]),
    onPress: callback,
    style: animatedStyle,
    layout,
    accessibilityLabel: stringResult,
  };
  return callback(controlsHidden(setFocused[33]), obj1);
});
let closure_30 = { mass: 0.1, stiffness: 400, overshootClamping: true };
let closure_31 = {
  code: "function VoicePanelCardFloatingControlsTsx4(){const{flip}=this.__closure;return flip.get();}",
};
let closure_32 = {
  code: "function VoicePanelCardFloatingControlsTsx5(flipped){const{angle,withSpring,getRandomNumberInRange,RING_PHYSICS,flip}=this.__closure;if(flipped){angle.set(withSpring(getRandomNumberInRange(45-10,45+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}else{angle.set(withSpring(getRandomNumberInRange(0-10,0+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}}",
};
let closure_33 = {
  code: "function VoicePanelCardFloatingControlsTsx6(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}",
};
let closure_34 = {
  code: "function VoicePanelCardFloatingControlsTsx7(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}",
};
let closure_35 = {
  code: "function VoicePanelCardFloatingControlsTsx8(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{top:controlsHidden.get()?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):0};}",
};
let closure_36 = {
  code: 'function VoicePanelCardFloatingControlsTsx9(){const{angle}=this.__closure;return{transform:[{rotate:angle.get()+"deg"}]};}',
};
let closure_37 = importAllResult.memo((controlsHidden) => {
  controlsHidden = controlsHidden.controlsHidden;
  let sharedValue;
  let sharedValue1;
  const tmp = callback2();
  let obj = controlsHidden(sharedValue1[12]);
  sharedValue = obj.useSharedValue(true);
  obj1 = controlsHidden(sharedValue1[12]);
  sharedValue1 = obj1.useSharedValue(0);
  let obj2 = controlsHidden(sharedValue1[36]);
  let items = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj3 = controlsHidden(sharedValue1[12]);
  let fn = function o() {
    return sharedValue.get();
  };
  fn.__closure = { flip: sharedValue };
  fn.__workletHash = 7663309832237;
  fn.__initData = closure_31;
  let fn2 = function n(arg0) {
    const tmp2 = controlsHidden(sharedValue1[28]);
    const withSpring = tmp2.withSpring;
    const tmp3 = sharedValue(sharedValue1[37]);
    if (arg0) {
      const fn2 = function o(arg0) {
        if (arg0) {
          const result = store.set(!store.get());
        }
      };
      let obj = { flip: null };
      obj[0] = sharedValue;
      fn2.__closure = obj;
      fn2.__workletHash = 17264907521028;
      fn2.__initData = closure_1_33;
      let result = set(withSpring(tmp3(35, 55), closure_1_30, "respect-motion-settings", fn2));
    } else {
      const fn = function n(arg0) {
        if (arg0) {
          const result = store.set(!store.get());
        }
      };
      obj = { flip: null };
      obj[0] = sharedValue;
      fn.__closure = obj;
      fn.__workletHash = 1799436949573;
      fn.__initData = closure_1_34;
      const result1 = set(withSpring(tmp3(-10, 10), closure_1_30, "respect-motion-settings", fn));
    }
  };
  obj = {
    angle: sharedValue1,
    withSpring: controlsHidden(sharedValue1[28]).withSpring,
    getRandomNumberInRange: sharedValue(sharedValue1[37]),
    RING_PHYSICS: closure_30,
    flip: sharedValue,
  };
  fn2.__closure = obj;
  fn2.__workletHash = 15646860695268;
  fn2.__initData = closure_32;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  class I {
    constructor() {
      top = 0;
      if (controlsHidden.get()) {
        tmp = closure_1_21;
        tmp2 = closure_1_12;
        num2 = 2;
        top = -closure_1_21 + 2 * closure_1_12;
      }
      return { top };
    }
  }
  obj = { controlsHidden, FLOATING_BAR_HEIGHT: c21, VOICE_PANEL_CARD_INNER_PADDING: closure_12 };
  I.__closure = obj;
  I.__workletHash = 726627995932;
  I.__initData = closure_35;
  const animatedStyle = controlsHidden(sharedValue1[12]).useAnimatedStyle(I);
  const obj6 = controlsHidden(sharedValue1[12]);
  const tmp7 = sharedValue;
  const fn3 = function p() {
    let obj = { transform: null };
    obj = { rotate: "" + sharedValue1.get() + "deg" };
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  fn3.__closure = { angle: sharedValue1 };
  fn3.__workletHash = 791392364030;
  fn3.__initData = closure_36;
  const animatedStyle1 = controlsHidden(sharedValue1[12]).useAnimatedStyle(fn3);
  obj1 = { style: items1, children: null };
  items1 = [animatedStyle, tmp.ringingIconContainer];
  const obj8 = controlsHidden(sharedValue1[12]);
  let tmp14 = !stateFromStores;
  const tmp12 = sharedValue(sharedValue1[38]);
  if (!stateFromStores) {
    tmp14 = animatedStyle1;
  }
  obj2 = { style: tmp14, pointerEvents: "none", children: null };
  obj3 = { source: tmp7(tmp3[39]), size: tmp2(tmp3[13]).IconSizes.SMALL_20, style: tmp.ringingIcon };
  obj2[2] = closure_16(controlsHidden(sharedValue1[13]).Icon, obj3);
  obj1[1] = closure_16(sharedValue(sharedValue1[38]), obj2);
  return closure_16(tmp12, obj1);
});
let closure_38 = importAllResult.memo((controlsHidden) =>
  callback(ManaContext.ThemeContextProvider, {
    theme: ThemeTypes.LIGHT,
    children: callback(closure_37, { controlsHidden: controlsHidden.controlsHidden }),
  }),
);
let closure_39 = importAllResult.memo((arg0) => {
  ({ userId, textColor } = arg0);
  let showGameTag;
  let gameRecord;
  dependencyMap = undefined;
  importAllResult = undefined;
  let obj = gameRecord(16739);
  showGameTag = obj.useConfig({ location: "VoicePanelCardFloatingControls" }).showGameTag;
  const first = gameRecord(9868)(userId, arg0.guildId, showGameTag)[0];
  let tmp5;
  if (showGameTag) {
    let application_id;
    if (first != null) {
      application_id = first.application_id;
    }
    tmp5 = application_id;
  }
  gameRecord = gameRecord(8804)({ applicationId: tmp5 }).gameRecord;
  const tmp8 = gameRecord(5056)(gameRecord);
  dependencyMap = tmp8;
  importAllResult = importAllResult.useRef(false);
  let items = [showGameTag, gameRecord, tmp8];
  const effect = importAllResult.useEffect(() => {
    let tmp = showGameTag;
    if (showGameTag) {
      tmp = !ref.current;
    }
    if (tmp) {
      tmp = null != gameRecord;
    }
    if (tmp) {
      tmp = dependencyMap;
    }
    if (tmp) {
      const obj = showGameTag(8802);
      const items = [showGameTag(8802).RejectionReason.Obscured];
      obj.trackEntryPoint(false, gameRecord.id, items, showGameTag(8812).GameProfileSources.CallTile);
      ref.current = true;
    }
  }, items);
  if (showGameTag) {
    if (null != gameRecord) {
      if (!tmp8) {
        obj = { game: null, userId: null, textColor: null };
        obj[0] = gameRecord;
        obj[1] = userId;
        obj[2] = textColor;
        let tmp12 = callback(tmp(16740), obj);
      }
      return tmp12;
    }
  }
  tmp12 = callback(tmp(9007), { userId, textColor });
});
let closure_40 = {
  code: "function VoicePanelCardFloatingControlsTsx10(){const{hasHiddenVisibleIcon,focused,connected,mode,VoicePanelModes,controlsHidden}=this.__closure;const showIcon=hasHiddenVisibleIcon&&focused.get()==null;return!connected.get()||mode.get()===VoicePanelModes.PIP||!showIcon&&controlsHidden.get();}",
};
let closure_41 = {
  code: "function VoicePanelCardFloatingControlsTsx11(){const{isPillHidden}=this.__closure;return isPillHidden.get();}",
};
let closure_42 = {
  code: "function VoicePanelCardFloatingControlsTsx12(hidden){const{pillOpacity,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;pillOpacity.set(withSpring(hidden?0:1,MODE_CHANGE_PHYSICS));}",
};
let closure_43 = {
  code: "function VoicePanelCardFloatingControlsTsx13(){const{pillOpacity,isPillHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{opacity:pillOpacity.get(),top:isPillHidden.get()?FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING:0,height:FLOATING_BAR_HEIGHT,pointerEvents:isPillHidden.get()?'none':'auto'};}",
};
let closure_44 = {
  code: "function VoicePanelCardFloatingControlsTsx14(){const{connected,isScreenReaderEnabled,controlsSpecs,VoicePanelControlsModes,hasIcon,GAP}=this.__closure;const hidden=!connected.get()||!isScreenReaderEnabled&&controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&hasIcon;const shouldCollapseWidth=hidden&&hasIcon;return{width:shouldCollapseWidth?0:'auto',marginRight:hidden?-GAP:0};}",
};
let closure_45 = importAllResult.memo((controlsHidden) => {
  controlsHidden = controlsHidden.controlsHidden;
  ({ label, layout, participant } = controlsHidden);
  channelId = undefined;
  let controlsSpecs;
  let focused;
  let connected;
  let mode;
  let isScreenReaderEnabled;
  let id;
  let analyticsLocations;
  closure_9 = undefined;
  closure_10 = undefined;
  let derivedValue;
  let sharedValue;
  let obj = focused;
  const context = focused.useContext(channelId(controlsSpecs[16]));
  ({ guildId, channelId } = context);
  controlsSpecs = context.controlsSpecs;
  focused = context.focused;
  connected = context.connected;
  mode = context.mode;
  obj1 = controlsHidden(controlsSpecs[49]);
  isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  const tmp6 = callback2();
  let obj2 = controlsHidden(controlsSpecs[29]);
  id = undefined;
  if (obj2.isStableParticipantWithUser(participant)) {
    id = participant.user.id;
  }
  analyticsLocations = tmp(tmp2[50])().analyticsLocations;
  const items = [id, channelId, analyticsLocations];
  const callback = obj.useCallback(() => {
    if (null != id) {
      const obj = { userId: null, channelId: null, isVoiceContext: true, sourceAnalyticsLocations: null };
      obj[0] = tmp;
      obj[1] = channelId;
      obj[3] = analyticsLocations;
      channelId(controlsSpecs[51])(obj);
    }
  }, items);
  let tmp4Result = tmp4(tmp2[52]);
  let isUserSecureFramesVerified = tmp4Result.useIsUserSecureFramesVerified({ userId: id, channelId });
  let tmpResult = tmp(tmp2[21]);
  tmp4Result = tmp4(tmp2[29]);
  let id1;
  if (tmp4Result.isStableParticipantWithUser(participant)) {
    id1 = participant.user.id;
  }
  const tmpResultResult = tmpResult(participant.type, id1, guildId, channelId);
  const tmp12 = channelId(controlsSpecs[53])({ userId: id, guildId });
  const displayNameStylesFont = controlsHidden(controlsSpecs[54]).useDisplayNameStylesFont({
    displayNameStyles: tmp12,
  });
  let num = 1;
  closure_9 = tmp14;
  const tmp15 =
    tmpResultResult.filter(
      (type) => type.type !== controlsHidden(controlsSpecs[21]).VoicePanelCardUserStateIconType.STREAM_ICON,
    ).length >= 1;
  closure_10 = tmp15;
  const tmp4Result1 = controlsHidden(controlsSpecs[54]);
  const fn = function c() {
    let tmp = constants;
    if (constants) {
      tmp = null == focused.get();
    }
    let value = connected.get();
    let tmp5 = !value;
    if (value) {
      tmp5 = mode.get() === constants.PIP;
    }
    if (!tmp5) {
      value = !tmp;
      if (!tmp) {
        value = controlsHidden.get();
      }
      tmp5 = value;
    }
    return tmp5;
  };
  obj = { hasHiddenVisibleIcon: tmp15, focused, connected, mode, VoicePanelModes: closure_10, controlsHidden };
  fn.__closure = obj;
  fn.__workletHash = 14354852732719;
  fn.__initData = closure_40;
  derivedValue = controlsHidden(controlsSpecs[12]).useDerivedValue(fn);
  const tmp4Result2 = controlsHidden(controlsSpecs[12]);
  if (derivedValue.get()) {
    num = 0;
  }
  sharedValue = controlsHidden(controlsSpecs[12]).useSharedValue(num);
  const tmp4Result3 = controlsHidden(controlsSpecs[12]);
  const fn2 = function u() {
    return derivedValue.get();
  };
  fn2.__closure = { isPillHidden: derivedValue };
  fn2.__workletHash = 653298163833;
  fn2.__initData = closure_41;
  const fn3 = function _(arg0) {
    let num = 1;
    if (arg0) {
      num = 0;
    }
    const result = sharedValue.set(controlsHidden(controlsSpecs[28]).withSpring(num, closure_9));
  };
  obj = { pillOpacity: sharedValue, withSpring: tmp4(tmp2[28]).withSpring, MODE_CHANGE_PHYSICS: closure_9 };
  fn3.__closure = obj;
  fn3.__workletHash = 158794425133;
  fn3.__initData = closure_42;
  const animatedReaction = controlsHidden(controlsSpecs[12]).useAnimatedReaction(fn2, fn3);
  const tmp4Result4 = controlsHidden(controlsSpecs[12]);
  class Q {
    constructor() {
      obj = { opacity: closure_12.get(), top: null, height: null, pointerEvents: null };
      obj2 = closure_11;
      num = 0;
      if (closure_11.get()) {
        tmp = closure_1_21;
        tmp2 = closure_12;
        num = closure_1_21 + closure_12;
      }
      obj[1] = num;
      obj[2] = closure_1_21;
      str = "auto";
      if (obj2.get()) {
        str = "none";
      }
      obj[3] = str;
      return obj;
    }
  }
  obj1 = {
    pillOpacity: sharedValue,
    isPillHidden: derivedValue,
    FLOATING_BAR_HEIGHT: c21,
    VOICE_PANEL_CARD_INNER_PADDING: sharedValue,
  };
  Q.__closure = obj1;
  Q.__workletHash = 12355778282621;
  Q.__initData = closure_43;
  const animatedStyle = controlsHidden(controlsSpecs[12]).useAnimatedStyle(Q);
  const tmp4Result5 = controlsHidden(controlsSpecs[12]);
  const fn4 = function $() {
    const value = connected.get();
    let tmp2 = !value;
    if (value) {
      let tmp4 = !isScreenReaderEnabled;
      if (!isScreenReaderEnabled) {
        tmp4 = controlsSpecs.get().mode === derivedValue.HIDDEN;
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
    obj[1] = num2;
    return obj;
  };
  obj2 = {
    connected,
    isScreenReaderEnabled,
    controlsSpecs,
    VoicePanelControlsModes: derivedValue,
    hasIcon: tmp14,
    GAP: 4,
  };
  fn4.__closure = obj2;
  fn4.__workletHash = 10013340978870;
  fn4.__initData = closure_44;
  const items1 = [tmp6.labelPositionContainer];
  const animatedStyle1 = controlsHidden(controlsSpecs[12]).useAnimatedStyle(fn4);
  const obj3 = { style: items1, layout, pointerEvents: "box-none", children: null };
  let tmp24;
  tmpResult = tmp(tmp2[38]);
  if (null != id) {
    tmp24 = callback;
  }
  const obj4 = { onPress: tmp24, style: items2, layout, children: null };
  items2 = [tmp6.labelOuterContainer, animatedStyle];
  let tmp20Result = tmpResultResult.length > 0;
  if (tmp20Result) {
    const obj5 = { style: null, children: null };
    obj5[0] = tmp6.initialIcons;
    obj5[1] = tmpResultResult.map((icon) => callback(closure_25, { icon }, icon.type));
    tmp20Result = tmp20(tmp(tmp2[24]), obj5);
    const tmpResult1 = tmp(tmp2[24]);
  }
  const items3 = [tmp20Result];
  const obj6 = { style: items4, layout, children: null };
  items4 = [tmp6.floatingContainer, animatedStyle1];
  const tmp23 = closure_20;
  const tmp4Result6 = controlsHidden(controlsSpecs[12]);
  const items5 = [tmp6.floatingText];
  let tmp28 = null != displayNameStylesFont;
  if (tmp28) {
    const obj7 = { fontFamily: null };
    obj7[0] = displayNameStylesFont;
    tmp28 = obj7;
  }
  const obj8 = {
    variant: "heading-sm/semibold",
    color: "text-overlay-light",
    lineClamp: 1,
    style: items5,
    ellipsizeMode: "tail",
    accessibilityLabel: null,
    children: null,
  };
  items5[1] = tmp28;
  if (
    null !=
    tmpResultResult.find(
      (type) => type.type === controlsHidden(controlsSpecs[21]).VoicePanelCardUserStateIconType.STREAM_ICON,
    )
  ) {
    const intl3 = tmp4(tmp2[26]).intl;
    const obj9 = { username: null };
    obj9[0] = label;
    let formatToPlainStringResult = intl3.formatToPlainString(tmp4(tmp2[26]).t.I0mOAs, obj9);
  } else {
    const found = tmpResultResult.find(
      (type) => type.type === controlsHidden(controlsSpecs[21]).VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON,
    );
    formatToPlainStringResult = label;
    if (null != found) {
      const muteDeafenIconState = found.muteDeafenIconState;
      if (tmp4(tmp2[27]).MuteDeafenIconState.DEAFENED !== muteDeafenIconState) {
        if (tmp4(tmp2[27]).MuteDeafenIconState.DEAFENED_SERVER !== muteDeafenIconState) {
          const intl = tmp4(tmp2[26]).intl;
          const obj10 = { username: null };
          obj10[0] = label;
          formatToPlainStringResult = intl.formatToPlainString(tmp4(tmp2[26]).t.Hd1oVG, obj10);
        }
      }
      const intl2 = tmp4(tmp2[26]).intl;
      const obj11 = { username: null };
      obj11[0] = label;
      formatToPlainStringResult = intl2.formatToPlainString(tmp4(tmp2[26]).t["9hDjai"], obj11);
    }
  }
  obj8[5] = formatToPlainStringResult;
  obj8[6] = label;
  const items6 = [closure_16(controlsHidden(controlsSpecs[55]).Text, obj8), ,];
  tmp20Result = participant.type === constants.USER;
  if (tmp20Result) {
    const obj12 = { userId: null, guildId: null, textColor: "text-overlay-light" };
    obj12[0] = participant.user.id;
    obj12[1] = guildId;
    tmp20Result = tmp20(closure_39, obj12);
  }
  items6[1] = tmp20Result;
  if (isUserSecureFramesVerified) {
    const obj13 = { style: null, size: "xs", accessibilityLabel: null };
    obj13[0] = tmp6.secureFramesIcon;
    const intl4 = tmp4(tmp2[26]).intl;
    obj13[2] = intl4.string(tmp4(tmp2[26]).t.mR9cf3);
    isUserSecureFramesVerified = tmp20(tmp4(tmp2[56]).ShieldLockIcon, obj13);
  }
  items6[2] = isUserSecureFramesVerified;
  obj6[2] = items6;
  items3[1] = closure_17(channelId(controlsSpecs[38]), obj6);
  obj4[3] = items3;
  obj3[3] = closure_17(tmp23, obj4);
  return closure_16(tmpResult, obj3);
});
let closure_46 = {
  code: "function VoicePanelCardFloatingControlsTsx15(){const{controlsSpecs,VoicePanelControlsModes,focused,mode,VoicePanelModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN||focused.get()!=null||mode.get()===VoicePanelModes.PIP;}",
};
const importDefaultResult1 = importDefaultResult;
const memoResult = importAllResult.memo(function FloatingControls(arg0) {
  ({ label, participant } = arg0);
  ({ isRinging, layout } = arg0);
  let guildId;
  let controlsSpecs;
  let focused;
  let mode;
  const context = focused.useContext(guildId(controlsSpecs[16]));
  guildId = context.guildId;
  controlsSpecs = context.controlsSpecs;
  focused = context.focused;
  mode = context.mode;
  let obj = participant(controlsSpecs[36]);
  const items = [closure_8];
  let stateFromStores = obj.useStateFromStores(items, () => connected.isConnected());
  obj1 = participant(controlsSpecs[29]);
  let tmp4Result = tmp4(tmp2[36]);
  const items1 = [closure_6, closure_7];
  const stateFromStores1 = tmp4Result.useStateFromStores(items1, () => {
    if (obj.isStableActivityParticipant(participant)) {
      const currentEmbeddedActivity = closure_1_6.getCurrentEmbeddedActivity();
      let applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      return tmp3.applicationId === applicationId;
    } else {
      let result = tmp(tmp2[29]).isStableStreamParticipant(tmp3);
      if (result) {
        result = null != closure_1_7.getActiveStreamForUser(tmp3.user.id, guildId);
      }
      return result;
    }
    obj = participant(controlsSpecs[29]);
    tmp = participant;
    tmp2 = controlsSpecs;
  });
  let tmp = guildId;
  const tmp6 = obj1.isStableParticipantWithUser(participant) && participant.isSelf;
  tmp4Result = tmp4(tmp2[12]);
  class I {
    constructor() {
      tmp = controlsSpecs.get().mode === closure_1_11.HIDDEN;
      if (!tmp) {
        tmp2 = focused;
        tmp3 = null;
        tmp = null != focused.get();
      }
      if (!tmp) {
        tmp4 = mode;
        tmp5 = closure_1_10;
        tmp = mode.get() === closure_1_10.PIP;
      }
      return tmp;
    }
  }
  obj = { controlsSpecs, VoicePanelControlsModes, focused, mode, VoicePanelModes: closure_10 };
  I.__closure = obj;
  I.__workletHash = 8765031976276;
  I.__initData = closure_46;
  const derivedValue = tmp4Result.useDerivedValue(I);
  let tmp10 = null != label;
  if (tmp10) {
    obj = { controlsHidden: null, label: null, layout: null, participant: null };
    obj[0] = derivedValue;
    obj[1] = label;
    obj[2] = layout;
    obj[3] = participant;
    tmp10 = callback(closure_45, obj);
  }
  if (isRinging) {
    obj1 = { controlsHidden: null };
    obj1[0] = derivedValue;
    isRinging = callback(closure_38, obj1);
  }
  const children = [isRinging, , ,];
  let tmp17 = stateFromStores;
  if (stateFromStores) {
    tmp17 = stateFromStores1;
  }
  if (tmp17) {
    const obj2 = { controlsHidden: null, participant: null, isSelf: null, layout: null };
    obj2[0] = derivedValue;
    obj2[1] = participant;
    obj2[2] = tmp6;
    obj2[3] = layout;
    tmp17 = callback(closure_27, obj2);
  }
  children[1] = tmp17;
  if (stateFromStores) {
    stateFromStores = tmp8;
  }
  if (stateFromStores) {
    const obj3 = {
      controlsHidden: null,
      participantId: null,
      targetName: null,
      isActivityParticipant: null,
      layout: null,
    };
    obj3[0] = derivedValue;
    obj3[1] = participant.id;
    obj3[2] = label;
    obj3[3] = tmp4(tmp2[29]).isStableActivityParticipant(participant);
    obj3[4] = layout;
    stateFromStores = callback(closure_29, obj3);
    const tmp4Result1 = tmp4(tmp2[29]);
  }
  children[2] = stateFromStores;
  children[3] = tmp10;
  return closure_17(closure_18, { children });
});
let result = require("set").fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx");

export default memoResult;
