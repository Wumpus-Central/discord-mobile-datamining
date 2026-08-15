// discord_app/modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx
import importAllResult from "registerAsset";
import get_ActivityIndicator from "dismissPanel";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import participantFromServer from "participantFromServer";
import reset from "reset";
import createRTCConnection from "createRTCConnection";
import VoicePanelModes from "VoicePanelModes";
import { VoicePanelControlsModes } from "VoicePanelControlsModes";
import { VOICE_PANEL_CARD_INNER_PADDING as closure_12 } from "CARD_SIZE";
import { ThemeTypes } from "ME";
import ParticipantTypes from "ParticipantTypes";
import jsxProd from "registerAsset";
import importDefaultResult from "module_4115";
import createCacheKey from "createCacheKey";
import importDefaultResult1 from "module_4115";
import { registerAsset } from "../../../../../_runtime/16326_registerAsset.js";
import { ManaContext } from "../../../../../discord_common/js/packages/design/native.tsx";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import { useVoicePanelCardUserStateIcons } from "../hooks/useVoicePanelCardUserStateIcons.tsx";
import { dismissPanel } from "../VoicePanelStateContext.tsx";

let Platform;
let Pressable;
let c10;
let c9;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
const require = arg1;
function StreamIcon(voicePlatform) {
  voicePlatform = voicePlatform.voicePlatform;
  let controlsSpecs;
  controlsSpecs = importAllResult.useContext(dismissPanel).controlsSpecs;
  let obj = controlsSpecs(4115);
  const fn = function o() {
    const tmp = controlsSpecs.get().mode === outer1_11.HIDDEN;
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
  let source = registerAsset;
  if (voicePlatform === constants2.XBOX) {
    source = tmp(16369);
  } else if (voicePlatform === tmp6.MOBILE) {
    source = tmp(12620);
  } else if (voicePlatform === tmp6.QUEST) {
    source = tmp(16370);
  }
  const style = [callback2(useIsMobileVisualRefreshExperimentEnabled("VoicePanelCardFloatingControls")).iconWithoutBackground, animatedStyle];
  return callback(closure_19, { source, style });
}
function AnimatedLabelIcon(icon) {
  icon = icon.icon;
  const tmp3 = callback2(useIsMobileVisualRefreshExperimentEnabled("VoicePanelCardFloatingControls"));
  const type = icon.type;
  if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.STREAM_ICON === type) {
    let obj = { voicePlatform: null };
    obj[0] = icon.voicePlatform;
    return callback(StreamIcon, obj);
  } else if (tmp4(16324).VoicePanelCardUserStateIconType.SPEAKER_MUTE_ICON === type) {
    obj = { style: null, hitSlop: 12, onPress: null, children: null };
    obj[0] = tmp3.speakerMuteIcon;
    obj[2] = icon.onPress;
    const obj1 = { style: null };
    obj1[0] = tmp3.iconWithoutBackground;
    obj[3] = callback(tmp4(12140).VoiceXIcon, obj1);
    return callback(Pressable, obj);
  } else if (tmp4(16324).VoicePanelCardUserStateIconType.USER_VIDEO_ICON === type) {
    const obj2 = { style: null, onPress: null, children: null };
    obj2[0] = tmp3.iconContainer;
    obj2[1] = icon.onPress;
    const obj3 = { style: null, state: null };
    obj3[0] = tmp3.icon;
    obj3[1] = icon.videoIconState;
    obj2[2] = callback(tmp4(9677).VideoIcon, obj3);
    return callback(Pressable, obj2);
  } else if (tmp4(16324).VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON === type) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp3.iconContainer;
    const obj5 = { onPress: null, hitSlop: 12, children: null };
    obj5[0] = icon.onPress;
    const obj6 = { style: null, state: null, alwaysWhite: true };
    obj6[0] = tmp3.icon;
    obj6[1] = icon.muteDeafenIconState;
    obj5[2] = callback(tmp4(9677).MuteDeafenIcon, obj6);
    obj4[1] = callback(Pressable, obj5);
    return callback(tmp(7190), obj4);
  } else if (tmp4(16324).VoicePanelCardUserStateIconType.USER_DISCONNECTED_ICON === type) {
    obj = { style: null, onPress: null, children: null };
    obj[0] = tmp3.iconContainer;
    obj[1] = icon.onPress;
    const obj7 = { size: "xs", color: null };
    obj7[1] = tmp(712).colors.TEXT_FEEDBACK_WARNING;
    obj[2] = callback(tmp4(8074).CircleErrorIcon, obj7);
    return callback(Pressable, obj);
  }
}
let c3 = importAllResult;
({ Platform, Pressable } = get_ActivityIndicator);
({ MODE_CHANGE_PHYSICS: c9, VoicePanelModes: c10 } = VoicePanelModes);
({ ParticipantTypes: closure_14, VoicePlatforms: closure_15 } = ParticipantTypes);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
let closure_19 = require("module_4115").createAnimatedComponent(require("Button").Icon);
let closure_20 = require("module_4115").createAnimatedComponent(Pressable);
let c21 = 28;
let closure_22 = createCacheKey.createStyles((arg0) => {
  let obj = { labelPositionContainer: { position: "absolute", left: 8, right: 8, bottom: 8, justifyContent: "center", alignItems: "center", marginHorizontal: 8 }, labelOuterContainer: null, initialIcons: null, icon: null, iconWithoutBackground: null, iconContainer: null, speakerMuteIcon: null, floatingContainer: null, floatingText: null, ringingIconContainer: null, ringingIcon: null, secureFramesIcon: null };
  const radii = Themes.radii;
  if (arg0) {
    let round = radii.sm;
    let tmp4 = tmp;
  } else {
    round = radii.round;
    tmp4 = tmp;
  }
  obj = { display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", borderRadius: round, overflow: "hidden", paddingHorizontal: 8, backgroundColor: tmp4(712).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, height: c21, gap: 4 };
  obj[1] = obj;
  obj[2] = { display: "flex", flexDirection: "row", marginStart: -4, marginEnd: -4 };
  obj = { width: 12, height: 12, tintColor: tmp4(712).colors.WHITE };
  obj[3] = obj;
  obj[4] = { width: 16, height: 16, tintColor: tmp4(712).colors.WHITE };
  const obj1 = { width: 16, height: 16, tintColor: tmp4(712).colors.WHITE };
  obj[5] = { width: 20, height: 20, borderRadius: tmp4(712).radii.round, alignItems: "center", justifyContent: "center" };
  obj[6] = { marginRight: 4 };
  obj[7] = { flexDirection: "row", alignItems: "center", gap: 4, overflow: "hidden", flexShrink: 1 };
  obj[8] = { overflow: "hidden", paddingStart: 4, paddingEnd: 4, flexShrink: 1, lineHeight: 14 };
  const obj2 = { width: 20, height: 20, borderRadius: tmp4(712).radii.round, alignItems: "center", justifyContent: "center" };
  obj[9] = { position: "absolute", top: 8, right: 8, padding: 6, borderRadius: tmp4(712).radii.round, backgroundColor: tmp4(712).colors.BACKGROUND_SURFACE_HIGH };
  const obj3 = { position: "absolute", top: 8, right: 8, padding: 6, borderRadius: tmp4(712).radii.round, backgroundColor: tmp4(712).colors.BACKGROUND_SURFACE_HIGH };
  obj[10] = { tintColor: tmp4(712).colors.STATUS_POSITIVE };
  obj[11] = { marginEnd: -2 };
  return obj;
});
let closure_23 = { code: "function VoicePanelCardFloatingControlsTsx1(){const{controlsSpecs,VoicePanelControlsModes,GAP}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;return{marginLeft:hidden?2:GAP,marginRight:hidden?2:0};}" };
let closure_26 = { code: "function VoicePanelCardFloatingControlsTsx2(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get();return{position:'absolute',top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,left:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}" };
let closure_27 = importAllResult.memo((participant) => {
  let isSelf;
  let layout;
  participant = participant.participant;
  let controlsHidden = participant;
  controlsHidden = participant.controlsHidden;
  let guildId;
  ({ isSelf, layout } = participant);
  guildId = importAllResult.useContext(guildId(11439)).guildId;
  let obj = controlsHidden(4115);
  const fn = function n() {
    const value = controlsHidden.get();
    if (value) {
      let tmp2 = -outer1_21 + 2 * outer1_12;
    } else {
      tmp2 = outer1_12;
    }
    const obj = { position: "absolute", top: tmp2, left: outer1_12, opacity: null, zIndex: 1 };
    let num2 = 1;
    if (value) {
      num2 = 0;
    }
    obj[3] = controlsHidden(outer1_2[29]).withSpring(num2, outer1_9);
    return obj;
  };
  obj = { controlsHidden, FLOATING_BAR_HEIGHT: c21, VOICE_PANEL_CARD_INNER_PADDING: closure_12, withSpring: controlsHidden(4744).withSpring, MODE_CHANGE_PHYSICS: closure_9 };
  fn.__closure = obj;
  fn.__workletHash = 4080439075039;
  fn.__initData = closure_26;
  const items = [guildId, participant];
  const animatedStyle = obj.useAnimatedStyle(fn);
  const callback = importAllResult.useCallback(() => {
    let obj = controlsHidden(outer1_2[30]);
    if (obj.isStableStreamParticipant(controlsHidden)) {
      const streamForUser = outer1_7.getStreamForUser(tmp3.user.id, guildId);
      if (null != streamForUser) {
        let tmpResult = tmp(tmp2[31]);
        tmpResult = tmp(tmp2[32]);
        tmpResult.stopStream(tmpResult.encodeStreamKey(streamForUser));
      }
    }
    if (tmpResult1.isStableActivityParticipant(controlsHidden)) {
      const currentEmbeddedActivity = outer1_6.getCurrentEmbeddedActivity();
      let _location;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      obj = { location: null, applicationId: null };
      obj[0] = _location;
      obj[1] = tmp3.applicationId;
      guildId(tmp2[33]).leaveActivity(obj);
      const obj3 = guildId(tmp2[33]);
    }
  }, items);
  obj = { icon: null, onPress: null, style: null, layout: null, accessibilityLabel: null };
  obj[0] = guildId(16371);
  obj[1] = callback;
  obj[2] = animatedStyle;
  obj[3] = layout;
  const tmp3 = closure_16;
  const tmp4 = guildId(16254);
  const result = controlsHidden(16322).isStableActivityParticipant(participant);
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
let closure_28 = { code: "function VoicePanelCardFloatingControlsTsx3(){const{controlsHidden,mode,VoicePanelModes,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get()||mode.get()===VoicePanelModes.PIP;return{position:'absolute',top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,right:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}" };
let closure_29 = importAllResult.memo((participantId) => {
  let isActivityParticipant;
  let layout;
  participantId = participantId.participantId;
  const controlsHidden = participantId.controlsHidden;
  const targetName = participantId.targetName;
  let setFocused;
  let mode;
  ({ isActivityParticipant, layout } = participantId);
  const context = mode.useContext(controlsHidden(setFocused[17]));
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
      value = mode.get() === outer1_10.PIP;
    }
    if (value) {
      let tmp4 = -outer1_21 + 2 * outer1_12;
    } else {
      tmp4 = outer1_12;
    }
    const obj = { position: "absolute", top: tmp4, right: outer1_12, opacity: null, zIndex: 1 };
    let num2 = 1;
    if (value) {
      num2 = 0;
    }
    obj[3] = participantId(setFocused[29]).withSpring(num2, outer1_9);
    return obj;
  };
  obj = { controlsHidden, mode, VoicePanelModes: closure_10, FLOATING_BAR_HEIGHT: c21, VOICE_PANEL_CARD_INNER_PADDING: closure_12, withSpring: participantId(setFocused[29]).withSpring, MODE_CHANGE_PHYSICS: closure_9 };
  fn.__closure = obj;
  fn.__workletHash = 12421495364262;
  fn.__initData = closure_28;
  const animatedStyle = obj.useAnimatedStyle(fn);
  if (isActivityParticipant) {
    const intl3 = tmp5(tmp2[27]).intl;
    let stringResult = intl3.string(tmp5(tmp2[27]).t["3ejJer"]);
  } else if (null != targetName) {
    const intl2 = tmp5(tmp2[27]).intl;
    obj = { targetName: null };
    obj[0] = targetName;
    stringResult = intl2.formatToPlainString(tmp5(tmp2[27]).t.OervdV, obj);
  } else {
    const intl = tmp5(tmp2[27]).intl;
    stringResult = intl.string(tmp5(tmp2[27]).t["77cRN4"]);
  }
  const obj1 = { icon: null, onPress: null, style: null, layout: null, accessibilityLabel: null };
  obj1[0] = controlsHidden(setFocused[36]);
  obj1[1] = callback;
  obj1[2] = animatedStyle;
  obj1[3] = layout;
  obj1[4] = stringResult;
  return callback(controlsHidden(setFocused[34]), obj1);
});
let closure_30 = { mass: 0.1, stiffness: 400, overshootClamping: true };
let closure_31 = { code: "function VoicePanelCardFloatingControlsTsx4(){const{flip}=this.__closure;return flip.get();}" };
let closure_32 = { code: "function VoicePanelCardFloatingControlsTsx5(flipped){const{angle,withSpring,getRandomNumberInRange,RING_PHYSICS,flip}=this.__closure;if(flipped){angle.set(withSpring(getRandomNumberInRange(45-10,45+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}else{angle.set(withSpring(getRandomNumberInRange(0-10,0+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}}" };
let closure_33 = { code: "function VoicePanelCardFloatingControlsTsx6(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}" };
let closure_34 = { code: "function VoicePanelCardFloatingControlsTsx7(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}" };
let closure_35 = { code: "function VoicePanelCardFloatingControlsTsx8(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{top:controlsHidden.get()?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):0};}" };
let closure_36 = { code: "function VoicePanelCardFloatingControlsTsx9(){const{angle}=this.__closure;return{transform:[{rotate:angle.get()+\"deg\"}]};}" };
let closure_37 = importAllResult.memo((controlsHidden) => {
  controlsHidden = controlsHidden.controlsHidden;
  let sharedValue;
  let sharedValue1;
  let tmp3 = callback2(sharedValue(sharedValue1[16])("VoicePanelCardFloatingControls"));
  let obj = controlsHidden(sharedValue1[12]);
  sharedValue = obj.useSharedValue(true);
  let obj1 = controlsHidden(sharedValue1[12]);
  sharedValue1 = obj1.useSharedValue(0);
  let obj2 = controlsHidden(sharedValue1[37]);
  let items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj3 = controlsHidden(sharedValue1[12]);
  let fn = function o() {
    return sharedValue.get();
  };
  fn.__closure = { flip: sharedValue };
  fn.__workletHash = 7663309832237;
  fn.__initData = closure_31;
  let fn2 = function n(arg0) {
    const tmp2 = controlsHidden(sharedValue1[29]);
    const withSpring = tmp2.withSpring;
    const tmp3 = sharedValue(sharedValue1[38]);
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
      fn2.__initData = outer1_33;
      let result = set(withSpring(tmp3(35, 55), outer1_30, "respect-motion-settings", fn2));
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
      fn.__initData = outer1_34;
      const result1 = set(withSpring(tmp3(-10, 10), outer1_30, "respect-motion-settings", fn));
    }
  };
  obj = { angle: sharedValue1, withSpring: controlsHidden(sharedValue1[29]).withSpring, getRandomNumberInRange: sharedValue(sharedValue1[38]), RING_PHYSICS: closure_30, flip: sharedValue };
  fn2.__closure = obj;
  fn2.__workletHash = 15646860695268;
  fn2.__initData = closure_32;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  const fn3 = function p() {
    let top = 0;
    if (controlsHidden.get()) {
      top = -outer1_21 + 2 * outer1_12;
    }
    return { top };
  };
  obj = { controlsHidden, FLOATING_BAR_HEIGHT: c21, VOICE_PANEL_CARD_INNER_PADDING: closure_12 };
  fn3.__closure = obj;
  fn3.__workletHash = 726627995932;
  fn3.__initData = closure_35;
  const animatedStyle = controlsHidden(sharedValue1[12]).useAnimatedStyle(fn3);
  const obj6 = controlsHidden(sharedValue1[12]);
  const tmp = sharedValue;
  class C {
    constructor() {
      obj = { transform: null };
      obj = { rotate: "" + c2.get() + "deg" };
      items = [];
      items[0] = obj;
      obj[0] = items;
      return obj;
    }
  }
  C.__closure = { angle: sharedValue1 };
  C.__workletHash = 791392364030;
  C.__initData = closure_36;
  const animatedStyle1 = controlsHidden(sharedValue1[12]).useAnimatedStyle(C);
  obj1 = { style: items1, children: null };
  items1 = [animatedStyle, tmp3.ringingIconContainer];
  const obj8 = controlsHidden(sharedValue1[12]);
  let tmp14 = !stateFromStores;
  const tmp12 = sharedValue(sharedValue1[39]);
  if (!stateFromStores) {
    tmp14 = animatedStyle1;
  }
  obj2 = { style: tmp14, pointerEvents: "none", children: null };
  obj3 = { source: null, size: null, style: null };
  obj3[0] = tmp(sharedValue1[40]);
  obj3[1] = controlsHidden(sharedValue1[13]).IconSizes.SMALL_20;
  obj3[2] = tmp3.ringingIcon;
  obj2[2] = closure_16(controlsHidden(sharedValue1[13]).Icon, obj3);
  obj1[1] = closure_16(sharedValue(sharedValue1[39]), obj2);
  return closure_16(tmp12, obj1);
});
let closure_38 = importAllResult.memo((controlsHidden) => {
  const obj = { theme: ThemeTypes.LIGHT, children: null };
  obj[1] = callback(closure_37, { controlsHidden: controlsHidden.controlsHidden });
  return callback(ManaContext.ThemeContextProvider, obj);
});
let closure_39 = { code: "function VoicePanelCardFloatingControlsTsx10(){const{hasHiddenVisibleIcon,focused,connected,mode,VoicePanelModes,controlsHidden}=this.__closure;const showIcon=hasHiddenVisibleIcon&&focused.get()==null;return!connected.get()||mode.get()===VoicePanelModes.PIP||!showIcon&&controlsHidden.get();}" };
let closure_40 = { code: "function VoicePanelCardFloatingControlsTsx11(){const{isPillHidden}=this.__closure;return isPillHidden.get();}" };
let closure_41 = { code: "function VoicePanelCardFloatingControlsTsx12(hidden){const{pillOpacity,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;pillOpacity.set(withSpring(hidden?0:1,MODE_CHANGE_PHYSICS));}" };
let closure_42 = { code: "function VoicePanelCardFloatingControlsTsx13(){const{pillOpacity,isPillHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{opacity:pillOpacity.get(),top:isPillHidden.get()?FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING:0,height:FLOATING_BAR_HEIGHT,pointerEvents:isPillHidden.get()?'none':'auto'};}" };
let closure_43 = { code: "function VoicePanelCardFloatingControlsTsx14(){const{connected,isScreenReaderEnabled,controlsSpecs,VoicePanelControlsModes,hasIcon,GAP}=this.__closure;const hidden=!connected.get()||!isScreenReaderEnabled&&controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&hasIcon;const shouldCollapseWidth=hidden&&hasIcon;return{width:shouldCollapseWidth?0:'auto',marginRight:hidden?-GAP:0};}" };
let closure_44 = importAllResult.memo((controlsHidden) => {
  let channelId;
  let guildId;
  let label;
  let layout;
  let participant;
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
  let c9;
  let c10;
  let derivedValue;
  let sharedValue;
  let obj = focused;
  const context = focused.useContext(channelId(controlsSpecs[17]));
  ({ guildId, channelId } = context);
  controlsSpecs = context.controlsSpecs;
  focused = context.focused;
  connected = context.connected;
  mode = context.mode;
  let obj1 = controlsHidden(controlsSpecs[42]);
  isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  const tmp6 = callback2(channelId(controlsSpecs[16])("VoicePanelCardFloatingControls"));
  let obj2 = controlsHidden(controlsSpecs[30]);
  id = undefined;
  if (obj2.isStableParticipantWithUser(participant)) {
    id = participant.user.id;
  }
  analyticsLocations = tmp(tmp2[43])().analyticsLocations;
  const items = [id, channelId, analyticsLocations];
  const callback = obj.useCallback(() => {
    if (null != id) {
      const obj = { userId: null, channelId: null, isVoiceContext: true, sourceAnalyticsLocations: null };
      obj[0] = tmp;
      obj[1] = channelId;
      obj[3] = analyticsLocations;
      channelId(controlsSpecs[44])(obj);
    }
  }, items);
  let tmp4Result = tmp4(tmp2[45]);
  let isUserSecureFramesVerified = tmp4Result.useIsUserSecureFramesVerified({ userId: id, channelId });
  let tmpResult = tmp(tmp2[22]);
  tmp4Result = tmp4(tmp2[30]);
  let id1;
  if (tmp4Result.isStableParticipantWithUser(participant)) {
    id1 = participant.user.id;
  }
  const tmpResultResult = tmpResult(participant.type, id1, guildId, channelId);
  const tmp12 = channelId(controlsSpecs[46])({ userId: id, guildId });
  const displayNameStylesFont = controlsHidden(controlsSpecs[47]).useDisplayNameStylesFont({ displayNameStyles: tmp12 });
  let num = 1;
  c9 = tmp14;
  const tmp15 = tmpResultResult.filter((type) => type.type !== controlsHidden(controlsSpecs[22]).VoicePanelCardUserStateIconType.STREAM_ICON).length >= 1;
  c10 = tmp15;
  const tmp4Result1 = controlsHidden(controlsSpecs[47]);
  const fn = function c() {
    let tmp = _undefined;
    if (_undefined) {
      tmp = null == focused.get();
    }
    let value = connected.get();
    let tmp5 = !value;
    if (value) {
      tmp5 = mode.get() === _undefined.PIP;
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
  obj = { hasHiddenVisibleIcon: tmp15, focused, connected, mode, VoicePanelModes: c10, controlsHidden };
  fn.__closure = obj;
  fn.__workletHash = 14354852732719;
  fn.__initData = closure_39;
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
  fn2.__initData = closure_40;
  const fn3 = function _(arg0) {
    let num = 1;
    if (arg0) {
      num = 0;
    }
    const result = sharedValue.set(controlsHidden(controlsSpecs[29]).withSpring(num, c9));
  };
  obj = { pillOpacity: sharedValue, withSpring: tmp4(tmp2[29]).withSpring, MODE_CHANGE_PHYSICS: c9 };
  fn3.__closure = obj;
  fn3.__workletHash = 158794425133;
  fn3.__initData = closure_41;
  const animatedReaction = controlsHidden(controlsSpecs[12]).useAnimatedReaction(fn2, fn3);
  const tmp4Result4 = controlsHidden(controlsSpecs[12]);
  class Q {
    constructor() {
      obj = { opacity: mode.get(), top: null, height: null, pointerEvents: null };
      obj2 = controlsHidden;
      num = 0;
      if (controlsHidden.get()) {
        tmp = outer1_21;
        tmp2 = mode;
        num = outer1_21 + mode;
      }
      obj[1] = num;
      obj[2] = outer1_21;
      str = "auto";
      if (obj2.get()) {
        str = "none";
      }
      obj[3] = str;
      return obj;
    }
  }
  obj1 = { pillOpacity: sharedValue, isPillHidden: derivedValue, FLOATING_BAR_HEIGHT: c21, VOICE_PANEL_CARD_INNER_PADDING: sharedValue };
  Q.__closure = obj1;
  Q.__workletHash = 12355778282621;
  Q.__initData = closure_42;
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
        tmp4 = c9;
      }
      tmp2 = tmp4;
    }
    let num = "auto";
    if (tmp2) {
      num = "auto";
      if (c9) {
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
  obj2 = { connected, isScreenReaderEnabled, controlsSpecs, VoicePanelControlsModes: derivedValue, hasIcon: tmp14, GAP: 4 };
  fn4.__closure = obj2;
  fn4.__workletHash = 10013340978870;
  fn4.__initData = closure_43;
  const items1 = [tmp6.labelPositionContainer];
  const animatedStyle1 = controlsHidden(controlsSpecs[12]).useAnimatedStyle(fn4);
  const obj3 = { style: items1, layout, pointerEvents: "box-none", children: null };
  let tmp24;
  tmpResult = tmp(tmp2[39]);
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
    tmp20Result = tmp20(tmp(tmp2[25]), obj5);
    const tmpResult1 = tmp(tmp2[25]);
  }
  const items3 = [tmp20Result, ];
  const obj6 = { style: items4, layout, children: null };
  items4 = [tmp6.floatingContainer, animatedStyle1];
  const tmp23 = closure_20;
  const tmp4Result6 = controlsHidden(controlsSpecs[12]);
  const items5 = [tmp6.floatingText, ];
  let tmp28 = null != displayNameStylesFont;
  if (tmp28) {
    const obj7 = { fontFamily: null };
    obj7[0] = displayNameStylesFont;
    tmp28 = obj7;
  }
  const obj8 = { variant: "heading-sm/semibold", color: "text-overlay-light", lineClamp: 1, style: items5, ellipsizeMode: "tail", accessibilityLabel: null, children: null };
  items5[1] = tmp28;
  if (null != tmpResultResult.find((type) => type.type === controlsHidden(controlsSpecs[22]).VoicePanelCardUserStateIconType.STREAM_ICON)) {
    const intl3 = tmp4(tmp2[27]).intl;
    const obj9 = { username: null };
    obj9[0] = label;
    let formatToPlainStringResult = intl3.formatToPlainString(tmp4(tmp2[27]).t.I0mOAs, obj9);
  } else {
    const found = tmpResultResult.find((type) => type.type === controlsHidden(controlsSpecs[22]).VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON);
    formatToPlainStringResult = label;
    if (null != found) {
      const muteDeafenIconState = found.muteDeafenIconState;
      if (tmp4(tmp2[28]).MuteDeafenIconState.DEAFENED !== muteDeafenIconState) {
        if (tmp4(tmp2[28]).MuteDeafenIconState.DEAFENED_SERVER !== muteDeafenIconState) {
          const intl = tmp4(tmp2[27]).intl;
          const obj10 = { username: null };
          obj10[0] = label;
          formatToPlainStringResult = intl.formatToPlainString(tmp4(tmp2[27]).t.Hd1oVG, obj10);
        }
      }
      const intl2 = tmp4(tmp2[27]).intl;
      const obj11 = { username: null };
      obj11[0] = label;
      formatToPlainStringResult = intl2.formatToPlainString(tmp4(tmp2[27]).t["9hDjai"], obj11);
    }
  }
  obj8[5] = formatToPlainStringResult;
  obj8[6] = label;
  const items6 = [closure_16(controlsHidden(controlsSpecs[48]).Text, obj8), , ];
  tmp20Result = participant.type === constants.USER;
  if (tmp20Result) {
    const obj12 = { userId: null, textColor: "text-overlay-light" };
    obj12[0] = participant.user.id;
    tmp20Result = tmp20(tmp(tmp2[49]), obj12);
  }
  items6[1] = tmp20Result;
  if (isUserSecureFramesVerified) {
    const obj13 = { style: null, size: "xs", accessibilityLabel: null };
    obj13[0] = tmp6.secureFramesIcon;
    const intl4 = tmp4(tmp2[27]).intl;
    obj13[2] = intl4.string(tmp4(tmp2[27]).t.mR9cf3);
    isUserSecureFramesVerified = tmp20(tmp4(tmp2[50]).ShieldLockIcon, obj13);
  }
  items6[2] = isUserSecureFramesVerified;
  obj6[2] = items6;
  items3[1] = closure_17(channelId(controlsSpecs[39]), obj6);
  obj4[3] = items3;
  obj3[3] = closure_17(tmp23, obj4);
  return closure_16(tmpResult, obj3);
});
let closure_45 = { code: "function VoicePanelCardFloatingControlsTsx15(){const{controlsSpecs,VoicePanelControlsModes,focused,mode,VoicePanelModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN||focused.get()!=null||mode.get()===VoicePanelModes.PIP;}" };
const memoResult = importAllResult.memo(function FloatingControls(arg0) {
  let isRinging;
  let label;
  let layout;
  let participant;
  ({ label, participant } = arg0);
  ({ isRinging, layout } = arg0);
  let guildId;
  let controlsSpecs;
  let focused;
  let mode;
  const context = focused.useContext(guildId(controlsSpecs[17]));
  guildId = context.guildId;
  controlsSpecs = context.controlsSpecs;
  focused = context.focused;
  mode = context.mode;
  let obj = participant(controlsSpecs[37]);
  const items = [createRTCConnection];
  let stateFromStores = obj.useStateFromStores(items, () => connected.isConnected());
  let obj1 = participant(controlsSpecs[30]);
  let tmp4Result = tmp4(tmp2[37]);
  const items1 = [participantFromServer, reset];
  const stateFromStores1 = tmp4Result.useStateFromStores(items1, () => {
    if (obj.isStableActivityParticipant(participant)) {
      const currentEmbeddedActivity = outer1_6.getCurrentEmbeddedActivity();
      let applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      return tmp3.applicationId === applicationId;
    } else {
      let result = tmp(tmp2[30]).isStableStreamParticipant(tmp3);
      if (result) {
        result = null != outer1_7.getActiveStreamForUser(tmp3.user.id, guildId);
      }
      return result;
    }
    obj = participant(controlsSpecs[30]);
    tmp = participant;
    tmp2 = controlsSpecs;
  });
  let tmp = guildId;
  const tmp6 = obj1.isStableParticipantWithUser(participant) && participant.isSelf;
  tmp4Result = tmp4(tmp2[12]);
  class I {
    constructor() {
      tmp = controlsSpecs.get().mode === outer1_11.HIDDEN;
      if (!tmp) {
        tmp2 = focused;
        tmp3 = null;
        tmp = null != focused.get();
      }
      if (!tmp) {
        tmp4 = mode;
        tmp5 = outer1_10;
        tmp = mode.get() === outer1_10.PIP;
      }
      return tmp;
    }
  }
  obj = { controlsSpecs, VoicePanelControlsModes, focused, mode, VoicePanelModes: closure_10 };
  I.__closure = obj;
  I.__workletHash = 8765031976276;
  I.__initData = closure_45;
  const derivedValue = tmp4Result.useDerivedValue(I);
  let tmp10 = null != label;
  if (tmp10) {
    obj = { controlsHidden: null, label: null, layout: null, participant: null };
    obj[0] = derivedValue;
    obj[1] = label;
    obj[2] = layout;
    obj[3] = participant;
    tmp10 = callback(closure_44, obj);
  }
  if (isRinging) {
    obj1 = { controlsHidden: null };
    obj1[0] = derivedValue;
    isRinging = callback(closure_38, obj1);
  }
  const children = [isRinging, , , ];
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
    const obj3 = { controlsHidden: null, participantId: null, targetName: null, isActivityParticipant: null, layout: null };
    obj3[0] = derivedValue;
    obj3[1] = participant.id;
    obj3[2] = label;
    obj3[3] = tmp4(tmp2[30]).isStableActivityParticipant(participant);
    obj3[4] = layout;
    stateFromStores = callback(closure_29, obj3);
    const tmp4Result1 = tmp4(tmp2[30]);
  }
  children[2] = stateFromStores;
  children[3] = tmp10;
  return closure_17(closure_18, { children });
});
let result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx");

export default memoResult;