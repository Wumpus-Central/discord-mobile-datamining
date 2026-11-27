// === Module 19460: useVoicePanelDockMorphState ===

// Module 19460 (useVoicePanelDockMorphState)
import spring_spring from "spring/spring" /* 5644 */;
import VoicePanelSheetMorph from "VoicePanelSheetMorph" /* 11820 */;
import useIsDockCoveredByActivityDefault from "useIsDockCoveredByActivity" /* 19461 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const VoicePanelModes = fn(11790).VoicePanelModes;
const VoicePanelDockConstants = fn(11813);
({ DOCK_PRESS_PHYSICS: hasOwnProperty, getVoicePanelDockHeight: closure_6 } = VoicePanelDockConstants);
let closure_7 = { code: "(function useVoicePanelDockMorphStateTsx1(){let[isDockEnabled,getVoicePanelDockHeight,safeArea]=this.__closure;return isDockEnabled?getVoicePanelDockHeight(safeArea.get().bottom):0;})" };
let closure_8 = { code: "(function useVoicePanelDockMorphStateTsx2(){let[mode]=this.__closure;return mode.get();})" };
let closure_9 = { code: "(function useVoicePanelDockMorphStateTsx3(current,previous){let[committedMode]=this.__closure;if(current!==previous&&committedMode.get()!=null){committedMode.set(null);}})" };
let closure_10 = { code: "(function useVoicePanelDockMorphStateTsx4(){let[mode]=this.__closure;return mode.get();})" };
let closure_11 = { code: "(function useVoicePanelDockMorphStateTsx5(current,previous){let[VoicePanelModes,dismissedFromDock]=this.__closure;if(current===VoicePanelModes.DISMISSED&&previous!=null){dismissedFromDock.set(previous===VoicePanelModes.PIP);}})" };
let closure_12 = { code: "(function useVoicePanelDockMorphStateTsx6(){let[connected,mode]=this.__closure;return{isConnected:connected.get(),currentMode:mode.get()};})" };
let closure_13 = { code: "(function useVoicePanelDockMorphStateTsx7({isConnected:isConnected,currentMode:currentMode}){let[VoicePanelModes,wasDockConnected]=this.__closure;if(currentMode!==VoicePanelModes.DISMISSED){wasDockConnected.set(isConnected||currentMode===VoicePanelModes.PIP);}})" };
let closure_14 = { code: "(function useVoicePanelDockMorphStateTsx8(){let[isDockEnabled,mode,VoicePanelModes,wasDockConnected,connected]=this.__closure;if(!isDockEnabled)return false;return mode.get()===VoicePanelModes.DISMISSED?wasDockConnected.get():connected.get()||mode.get()===VoicePanelModes.PIP;})" };
let closure_15 = { code: "(function useVoicePanelDockMorphStateTsx9(){let[mode,VoicePanelModes,dismissedFromDock,committedMode]=this.__closure;var _committedMode$get;if(mode.get()===VoicePanelModes.DISMISSED){return dismissedFromDock.get()?1:0;}return((_committedMode$get=committedMode.get())!==null&&_committedMode$get!==void 0?_committedMode$get:mode.get())===VoicePanelModes.PIP?1:0;})" };
let closure_16 = { code: "(function useVoicePanelDockMorphStateTsx10(){let[dockShapeTarget]=this.__closure;return dockShapeTarget.get()===0;})" };
let closure_17 = { code: "(function useVoicePanelDockMorphStateTsx11(){let[dockPressed,wrapperOffset,mode,VoicePanelModes]=this.__closure;return dockPressed.get()||wrapperOffset.get().gestureActive&&mode.get()===VoicePanelModes.PIP;})" };
let closure_18 = { code: "(function useVoicePanelDockMorphStateTsx12(){let[withSpring,isDockHeld,DOCK_PRESS_PHYSICS]=this.__closure;return withSpring(isDockHeld.get()?1:0,DOCK_PRESS_PHYSICS);})" };
let closure_19 = { code: "(function useVoicePanelDockMorphStateTsx13(){let[withSpring,mode,VoicePanelModes,isDockConnected,DOCK_SPACE_SPRING_CONFIG]=this.__closure;return withSpring(mode.get()===VoicePanelModes.DISMISSED&&isDockConnected.get()?1:0,DOCK_SPACE_SPRING_CONFIG);})" };
let closure_20 = { code: "(function useVoicePanelDockMorphStateTsx14(){let[withSpring,isCoveredByActivity,dockShapeTarget,DOCK_SPACE_SPRING_CONFIG]=this.__closure;return withSpring(isCoveredByActivity&&dockShapeTarget.get()===1?1:0,DOCK_SPACE_SPRING_CONFIG);})" };
let closure_21 = { code: "(function useVoicePanelDockMorphStateTsx15(){let[isDockConnected,wrapperOffset,mode,VoicePanelModes,wrapperDimensions,dockHeight,clamp,dockShapeTarget,morphSkipsEntryAnimation,withSpring,SHEET_MORPH_PHYSICS]=this.__closure;if(!isDockConnected.get())return 0;const offset=wrapperOffset.get();if(offset.gestureActive&&mode.get()!==VoicePanelModes.DISMISSED){const travel=wrapperDimensions.get().drawerHeight-dockHeight.get();if(travel<=0)return 0;return clamp(offset.y/travel,0,1);}const target=dockShapeTarget.get();if(morphSkipsEntryAnimation.get()){return target;}return withSpring(target,SHEET_MORPH_PHYSICS);})" };
let closure_22 = { code: "(function useVoicePanelDockMorphStateTsx16(){let[morphSkipsEntryAnimation,dockMinimizeProgress,dockShapeTarget]=this.__closure;return morphSkipsEntryAnimation.get()&&dockMinimizeProgress.get()===dockShapeTarget.get();})" };
let closure_23 = { code: "(function useVoicePanelDockMorphStateTsx17(settled){let[morphSkipsEntryAnimation]=this.__closure;if(settled){morphSkipsEntryAnimation.set(false);}})" };
let closure_24 = { code: "(function useVoicePanelDockMorphStateTsx18(){let[dockJoinMorphOrigin,connected,dockMinimizeProgress,SHEET_MORPH_PHYSICS,wrapperOffset,mode,VoicePanelModes]=this.__closure;return dockJoinMorphOrigin.get()!=null&&connected.get()&&(dockMinimizeProgress.get()>=1-SHEET_MORPH_PHYSICS.restDisplacementThreshold||wrapperOffset.get().gestureActive||mode.get()===VoicePanelModes.DISMISSED);})" };
let closure_25 = { code: "(function useVoicePanelDockMorphStateTsx19(done){let[dockJoinMorphOrigin]=this.__closure;if(done){dockJoinMorphOrigin.set(null);}})" };
let closure_26 = { code: "(function useVoicePanelDockMorphStateTsx20(){let[wrapperOffset,mode,VoicePanelModes,isDockExpanding,dockMinimizeProgress,SHEET_MORPH_PHYSICS]=this.__closure;const{gestureActive:gestureActive}=wrapperOffset.get();return mode.get()===VoicePanelModes.DISMISSED||gestureActive&&mode.get()===VoicePanelModes.PANEL||!gestureActive&&(!isDockExpanding.get()||dockMinimizeProgress.get()<=SHEET_MORPH_PHYSICS.restDisplacementThreshold);})" };
let closure_27 = { code: "(function useVoicePanelDockMorphStateTsx21(released){let[dockContentSwap,withTiming,DOCK_CONTENT_SWAP_TIMING]=this.__closure;if(released&&dockContentSwap.get()!==0){dockContentSwap.set(withTiming(0,DOCK_CONTENT_SWAP_TIMING));}})" };
let closure_28 = { code: "(function useVoicePanelDockMorphStateTsx22(){let[isDockConnected,dockTouched,wrapperOffset,isDockSlotEmpty,dockShapeTarget,SHEET_MORPH_PHYSICS,dockMinimizeProgress,dockPressProgress,dockContentSwap,dockJoinMorphOrigin]=this.__closure;if(!isDockConnected.get()||dockTouched.get()||wrapperOffset.get().gestureActive)return false;if(isDockSlotEmpty.get())return false;if(dockShapeTarget.get()!==1)return false;const restThreshold=SHEET_MORPH_PHYSICS.restDisplacementThreshold;return dockMinimizeProgress.get()>=1-restThreshold&&dockPressProgress.get()<=restThreshold&&dockContentSwap.get()===0&&dockJoinMorphOrigin.get()==null;})" };
let closure_29 = { code: "(function useVoicePanelDockMorphStateTsx23(){let[safeArea]=this.__closure;return safeArea.get().left;})" };
let closure_30 = { code: "(function useVoicePanelDockMorphStateTsx24(){let[dockSlotWidth,dockRestLeft,wrapperDimensions]=this.__closure;const slotWidth=dockSlotWidth.get();return slotWidth>0?Math.min(dockRestLeft.get()+slotWidth,wrapperDimensions.get().drawerWidth):0;})" };
let closure_31 = { code: "(function useVoicePanelDockMorphStateTsx25(){let[isDockEnabled,wrapperDimensions,dockRestWidth,dockJoinMorphOrigin,dockMinimizeProgress,dockShapeTarget,dockContentSwap]=this.__closure;if(!isDockEnabled)return null;const fullWidth=wrapperDimensions.get().drawerWidth;const restWidth=dockRestWidth.get();const isMeasured=restWidth>0;const isBesideChat=isMeasured&&restWidth<fullWidth;if(dockJoinMorphOrigin.get()!=null){const progress=dockMinimizeProgress.get();const width=isBesideChat?fullWidth+(restWidth-fullWidth)*progress:fullWidth;return{width:width,isWide:!isBesideChat,isMeasured:isMeasured,follows:true};}const isWide=!isBesideChat||dockShapeTarget.get()===0||dockContentSwap.get()>0;return{width:isWide?fullWidth:restWidth,isWide:isWide,isMeasured:isMeasured,follows:false};})" };
let closure_32 = { code: "(function useVoicePanelDockMorphStateTsx26(current,previous){let[dockSheetWidth,withSpring,SHEET_MORPH_PHYSICS]=this.__closure;if(current==null)return;if(previous!=null&&current.width===previous.width&&current.isWide===previous.isWide)return;const animates=!current.follows&&previous!=null&&previous.isMeasured&&current.isWide!==previous.isWide;dockSheetWidth.set(animates?withSpring(current.width,SHEET_MORPH_PHYSICS):current.width);})" };
let closure_33 = { code: "(function useVoicePanelDockMorphStateTsx27(){let[wrapperDimensions,dockRestLeft,dockRestWidth,clamp,dockSheetWidth]=this.__closure;const fullWidth=wrapperDimensions.get().drawerWidth;const restLeft=dockRestLeft.get();const restWidth=dockRestWidth.get();const narrowing=fullWidth-restWidth;if(restLeft<=0||restWidth<=0||narrowing<=0)return 0;return restLeft*clamp((fullWidth-dockSheetWidth.get())/narrowing,0,1);})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockMorphState.tsx");

export default function useVoicePanelDockMorphState(arg0) {
  ({ isDockEnabled, mode, connected, safeArea, wrapperDimensions } = arg0);
  ({ mountsMinimized, wrapperOffset } = arg0);
  let sharedValue = require("module_1654").useSharedValue({ gestureActive: false, x: 0, y: 0 });
  if (isDockEnabled) {
    sharedValue = wrapperOffset;
  }
  let obj = require("module_1654");
  items = [c7, isDockEnabled, c6, safeArea];
  _require = undefined;
  [tmp4, tmp5, tmp6, tmp7] = items;
  function useVoicePanelDockMorphStateTsx1() {
    let num = 0;
    if (c0) {
      num = _undefined2(_undefined3.get().bottom);
    }
    return num;
  }
  const items1 = [tmp5, tmp6, tmp7];
  useVoicePanelDockMorphStateTsx1.__closure = items1;
  useVoicePanelDockMorphStateTsx1.__workletHash = 16574063931371;
  useVoicePanelDockMorphStateTsx1.__initData = tmp4;
  const derivedValue = require("module_1654").useDerivedValue(useVoicePanelDockMorphStateTsx1);
  const tmpResult = require("module_1654");
  const sharedValue1 = require("module_1654").useSharedValue(null);
  const tmpResult32 = require("module_1654");
  const items2 = [c8, mode];
  [tmp10, tmp11] = items2;
  function useVoicePanelDockMorphStateTsx2() {
    return _undefined.get();
  }
  const items3 = [tmp11];
  useVoicePanelDockMorphStateTsx2.__closure = items3;
  useVoicePanelDockMorphStateTsx2.__workletHash = 1130154786589;
  useVoicePanelDockMorphStateTsx2.__initData = tmp10;
  const items4 = [c9, sharedValue1];
  _require = undefined;
  [tmp12, tmp13] = items4;
  function useVoicePanelDockMorphStateTsx3(arg0, arg1) {
    let tmp = arg0 !== arg1;
    if (tmp) {
      tmp = null != _undefined.get();
    }
    if (tmp) {
      const result = _undefined.set(null);
    }
  }
  const items5 = [tmp13];
  useVoicePanelDockMorphStateTsx3.__closure = items5;
  useVoicePanelDockMorphStateTsx3.__workletHash = 11294143921957;
  useVoicePanelDockMorphStateTsx3.__initData = tmp12;
  const animatedReaction = require("module_1654").useAnimatedReaction(useVoicePanelDockMorphStateTsx2, useVoicePanelDockMorphStateTsx3);
  const tmpResult33 = require("module_1654");
  const sharedValue2 = require("module_1654").useSharedValue(false);
  const tmpResult34 = require("module_1654");
  const items6 = [c10, mode];
  [tmp16, tmp17] = items6;
  function useVoicePanelDockMorphStateTsx4() {
    return _undefined.get();
  }
  const items7 = [tmp17];
  useVoicePanelDockMorphStateTsx4.__closure = items7;
  useVoicePanelDockMorphStateTsx4.__workletHash = 6511286054171;
  useVoicePanelDockMorphStateTsx4.__initData = tmp16;
  const items8 = [closure_11, c4, sharedValue2];
  _require = undefined;
  [tmp19, tmp20, tmp21] = items8;
  function useVoicePanelDockMorphStateTsx5(arg0, arg1) {
    let tmp2 = arg0 === _undefined.DISMISSED;
    if (tmp2) {
      tmp2 = null != arg1;
    }
    if (tmp2) {
      const result = _undefined2.set(arg1 === _undefined.PIP);
    }
  }
  const items9 = [tmp20, tmp21];
  useVoicePanelDockMorphStateTsx5.__closure = items9;
  useVoicePanelDockMorphStateTsx5.__workletHash = 16449264979544;
  useVoicePanelDockMorphStateTsx5.__initData = tmp19;
  const animatedReaction1 = require("module_1654").useAnimatedReaction(useVoicePanelDockMorphStateTsx4, useVoicePanelDockMorphStateTsx5);
  const tmpResult35 = require("module_1654");
  const sharedValue3 = require("module_1654").useSharedValue(false);
  const tmpResult36 = require("module_1654");
  const items10 = [closure_12, connected, mode];
  [tmp24, tmp25, tmp26] = items10;
  function useVoicePanelDockMorphStateTsx6() {
    return { isConnected: _undefined.get(), currentMode: _undefined2.get() };
  }
  const items11 = [tmp25, tmp26];
  useVoicePanelDockMorphStateTsx6.__closure = items11;
  useVoicePanelDockMorphStateTsx6.__workletHash = 9395341436969;
  useVoicePanelDockMorphStateTsx6.__initData = tmp24;
  const items12 = [closure_13, c4, sharedValue3];
  _require = undefined;
  [tmp27, tmp28, tmp29] = items12;
  function useVoicePanelDockMorphStateTsx7(arg0) {
    ({ isConnected, currentMode } = arg0);
    if (currentMode !== _undefined.DISMISSED) {
      if (!isConnected) {
        isConnected = currentMode === tmp.PIP;
      }
      const result = _undefined2.set(isConnected);
    }
  }
  const items13 = [tmp28, tmp29];
  useVoicePanelDockMorphStateTsx7.__closure = items13;
  useVoicePanelDockMorphStateTsx7.__workletHash = 10331916200307;
  useVoicePanelDockMorphStateTsx7.__initData = tmp27;
  const animatedReaction2 = require("module_1654").useAnimatedReaction(useVoicePanelDockMorphStateTsx6, useVoicePanelDockMorphStateTsx7);
  const tmpResult37 = require("module_1654");
  const items14 = [closure_14, isDockEnabled, mode, c4, sharedValue3, connected];
  _require = undefined;
  c4 = undefined;
  [tmp31, tmp32, tmp33, tmp34, tmp35, tmp36] = items14;
  function useVoicePanelDockMorphStateTsx8() {
    if (!c0) {
      return c0;
    } else if (_undefined2.get() === _undefined3.DISMISSED) {
      value = _undefined4.get();
    } else {
      value = _undefined5.get() || _undefined2.get() === tmp2.PIP;
    }
  }
  const items15 = [tmp32, tmp33, tmp34, tmp35, tmp36];
  useVoicePanelDockMorphStateTsx8.__closure = items15;
  useVoicePanelDockMorphStateTsx8.__workletHash = 484957089417;
  useVoicePanelDockMorphStateTsx8.__initData = tmp31;
  const derivedValue1 = require("module_1654").useDerivedValue(useVoicePanelDockMorphStateTsx8);
  const tmpResult38 = require("module_1654");
  const items16 = [closure_15, mode, c4, sharedValue2, sharedValue1];
  _require = undefined;
  noop = undefined;
  [tmp38, tmp39, tmp40, tmp41, tmp42] = items16;
  function useVoicePanelDockMorphStateTsx9() {
    if (_undefined.get() === _undefined2.DISMISSED) {
      let num2 = 0;
      if (_undefined3.get()) {
        num2 = 1;
      }
      let num = num2;
    } else {
      value = _undefined4.get();
      if (value == null) {
        value = _undefined.get();
      }
      num = 0;
      if (value === tmp.PIP) {
        num = 1;
      }
    }
    return num;
  }
  const items17 = [tmp39, tmp40, tmp41, tmp42];
  useVoicePanelDockMorphStateTsx9.__closure = items17;
  useVoicePanelDockMorphStateTsx9.__workletHash = 11998655504610;
  useVoicePanelDockMorphStateTsx9.__initData = tmp38;
  const derivedValue2 = require("module_1654").useDerivedValue(useVoicePanelDockMorphStateTsx9);
  const tmpResult39 = require("module_1654");
  const items18 = [closure_16, derivedValue2];
  _require = undefined;
  [tmp44, tmp45] = items18;
  function useVoicePanelDockMorphStateTsx10() {
    return 0 === _undefined.get();
  }
  const items19 = [tmp45];
  useVoicePanelDockMorphStateTsx10.__closure = items19;
  useVoicePanelDockMorphStateTsx10.__workletHash = 9313360300259;
  useVoicePanelDockMorphStateTsx10.__initData = tmp44;
  const derivedValue3 = require("module_1654").useDerivedValue(useVoicePanelDockMorphStateTsx10);
  _require = undefined;
  const tmpResult40 = require("module_1654");
  const sharedValue4 = require("module_1654").useSharedValue(1);
  _require = sharedValue4;
  noop.useRef(false);
  noop.useRef(false);
  const items20 = [sharedValue4];
  const items21 = [sharedValue4];
  const callback = noop.useCallback(() => {
    const result = _undefined.set(0);
    if (_undefined2.current) {
      const result1 = _undefined.set(spring_spring.withSpring(1, VoicePanelSheetMorph.DOCK_SPACE_SPRING_CONFIG));
    } else {
      c2.current = true;
    }
  }, items20);
  const callback1 = noop.useCallback(() => {
    c1.current = true;
    if (_undefined3.current) {
      tmp.current = false;
      const result = _undefined.set(spring_spring.withSpring(1, VoicePanelSheetMorph.DOCK_SPACE_SPRING_CONFIG));
    }
  }, items21);
  const tmpResult41 = require("module_1654");
  const sharedValue5 = require("module_1654").useSharedValue(false);
  const tmpResult42 = require("module_1654");
  const items22 = [closure_17, sharedValue5, sharedValue, mode, c4];
  _require = undefined;
  [tmp51, tmp52, tmp53, tmp54, tmp55] = items22;
  function useVoicePanelDockMorphStateTsx11() {
    value = _undefined.get();
    if (!value) {
      let gestureActive = _undefined2.get().gestureActive;
      if (gestureActive) {
        gestureActive = _undefined3.get() === _undefined4.PIP;
      }
      value = gestureActive;
    }
    return value;
  }
  const items23 = [tmp52, tmp53, tmp54, tmp55];
  useVoicePanelDockMorphStateTsx11.__closure = items23;
  useVoicePanelDockMorphStateTsx11.__workletHash = 2842369107004;
  useVoicePanelDockMorphStateTsx11.__initData = tmp51;
  const derivedValue4 = require("module_1654").useDerivedValue(useVoicePanelDockMorphStateTsx11);
  const tmpResult43 = require("module_1654");
  const items24 = [closure_18, require("spring/spring").withSpring, derivedValue4, c5];
  _require = undefined;
  [tmp57, tmp58, tmp59, tmp60] = items24;
  function useVoicePanelDockMorphStateTsx12() {
    let num = 0;
    if (_undefined2.get()) {
      num = 1;
    }
    return _undefined(num, c2);
  }
  const items25 = [tmp58, tmp59, tmp60];
  useVoicePanelDockMorphStateTsx12.__closure = items25;
  useVoicePanelDockMorphStateTsx12.__workletHash = 4055713938309;
  useVoicePanelDockMorphStateTsx12.__initData = tmp57;
  const derivedValue5 = require("module_1654").useDerivedValue(useVoicePanelDockMorphStateTsx12);
  const tmpResult44 = require("module_1654");
  const items26 = [closure_19, require("spring/spring").withSpring, mode, c4, derivedValue1, require("VoicePanelSheetMorph").DOCK_SPACE_SPRING_CONFIG];
  _require = undefined;
  c4 = undefined;
  [tmp62, tmp63, tmp64, tmp65, tmp66, tmp67] = items26;
  function useVoicePanelDockMorphStateTsx13() {
    let num = 0;
    if (_undefined2.get() === _undefined3.DISMISSED) {
      num = 0;
      if (_undefined4.get()) {
        num = 1;
      }
    }
    return _undefined(num, c4);
  }
  const items27 = [tmp63, tmp64, tmp65, tmp66, tmp67];
  useVoicePanelDockMorphStateTsx13.__closure = items27;
  useVoicePanelDockMorphStateTsx13.__workletHash = 11884228837973;
  useVoicePanelDockMorphStateTsx13.__initData = tmp62;
  const derivedValue6 = require("module_1654").useDerivedValue(useVoicePanelDockMorphStateTsx13);
  const tmpResult45 = require("module_1654");
  const tmp69 = useIsDockCoveredByActivityDefault();
  const items28 = [closure_20, require("spring/spring").withSpring, tmp69, derivedValue2, require("VoicePanelSheetMorph").DOCK_SPACE_SPRING_CONFIG];
  _require = undefined;
  [tmp70, tmp71, tmp72, tmp73, tmp74] = items28;
  function useVoicePanelDockMorphStateTsx14() {
    let num = 0;
    if (c1) {
      num = 0;
      if (1 === _undefined3.get()) {
        num = 1;
      }
    }
    return _undefined(num, c3);
  }
  const items29 = [tmp71, tmp72, tmp73, tmp74];
  useVoicePanelDockMorphStateTsx14.__closure = items29;
  useVoicePanelDockMorphStateTsx14.__workletHash = 15444941422787;
  useVoicePanelDockMorphStateTsx14.__initData = tmp70;
  const derivedValue7 = require("module_1654").useDerivedValue(useVoicePanelDockMorphStateTsx14);
  const tmpResult46 = require("module_1654");
  const sharedValue6 = require("module_1654").useSharedValue(mountsMinimized);
  const tmpResult47 = require("module_1654");
  const items30 = [closure_21, derivedValue1, sharedValue, mode, c4, wrapperDimensions, derivedValue, require("module_1654").clamp, derivedValue2, sharedValue6, require("spring/spring").withSpring, require("VoicePanelSheetMorph").SHEET_MORPH_PHYSICS];
  _require = undefined;
  c4 = undefined;
  c10 = undefined;
  [tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88] = items30;
  function useVoicePanelDockMorphStateTsx15() {
    if (_undefined.get()) {
      value = _undefined2.get();
      if (value.gestureActive) {
        if (_undefined3.get() !== _undefined4.DISMISSED) {
          const diff = _undefined5.get().drawerHeight - _undefined6.get();
          let num3 = 0;
          if (diff > 0) {
            num3 = _undefined7(value.y / diff, 0, 1);
          }
          return num3;
        }
      }
      const value2 = _undefined8.get();
      let tmp8 = value2;
      if (!_undefined9.get()) {
        tmp8 = _undefined10(value2, c10);
      }
      return tmp8;
    } else {
      return 0;
    }
  }
  const items31 = [tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88];
  useVoicePanelDockMorphStateTsx15.__closure = items31;
  useVoicePanelDockMorphStateTsx15.__workletHash = 16670830062611;
  useVoicePanelDockMorphStateTsx15.__initData = tmp77;
  const derivedValue8 = require("module_1654").useDerivedValue(useVoicePanelDockMorphStateTsx15);
  const tmpResult48 = require("module_1654");
  const items32 = [closure_22, sharedValue6, derivedValue8, derivedValue2];
  [tmp90, tmp91, tmp92, tmp93] = items32;
  function useVoicePanelDockMorphStateTsx16() {
    value = _undefined.get();
    if (value) {
      const value2 = _undefined2.get();
      value = value2 === _undefined3.get();
    }
    return value;
  }
  const items33 = [tmp91, tmp92, tmp93];
  useVoicePanelDockMorphStateTsx16.__closure = items33;
  useVoicePanelDockMorphStateTsx16.__workletHash = 14318216426357;
  useVoicePanelDockMorphStateTsx16.__initData = tmp90;
  const items34 = [closure_23, sharedValue6];
  _require = undefined;
  [tmp94, tmp95] = items34;
  function useVoicePanelDockMorphStateTsx17(arg0) {
    if (arg0) {
      const result = _undefined.set(false);
    }
  }
  const items35 = [tmp95];
  useVoicePanelDockMorphStateTsx17.__closure = items35;
  useVoicePanelDockMorphStateTsx17.__workletHash = 14577082908322;
  useVoicePanelDockMorphStateTsx17.__initData = tmp94;
  const animatedReaction3 = require("module_1654").useAnimatedReaction(useVoicePanelDockMorphStateTsx16, useVoicePanelDockMorphStateTsx17);
  const tmpResult49 = require("module_1654");
  const sharedValue7 = require("module_1654").useSharedValue(null);
  const tmpResult50 = require("module_1654");
  const items36 = [closure_24, sharedValue7, connected, derivedValue8, require("VoicePanelSheetMorph").SHEET_MORPH_PHYSICS, sharedValue, mode, c4];
  c4 = undefined;
  [tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105] = items36;
  function useVoicePanelDockMorphStateTsx18() {
    value = null != _undefined.get();
    if (value) {
      value = _undefined2.get();
    }
    if (value) {
      let gestureActive = _undefined3.get() >= 1 - _undefined4.restDisplacementThreshold;
      if (!gestureActive) {
        gestureActive = _undefined5.get().gestureActive;
      }
      if (!gestureActive) {
        gestureActive = _undefined6.get() === _undefined7.DISMISSED;
      }
      value = gestureActive;
    }
    return value;
  }
  const items37 = [tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105];
  useVoicePanelDockMorphStateTsx18.__closure = items37;
  useVoicePanelDockMorphStateTsx18.__workletHash = 7049638413356;
  useVoicePanelDockMorphStateTsx18.__initData = tmp98;
  const items38 = [closure_25, sharedValue7];
  _require = undefined;
  [tmp106, tmp107] = items38;
  function useVoicePanelDockMorphStateTsx19(arg0) {
    if (arg0) {
      const result = _undefined.set(null);
    }
  }
  const items39 = [tmp107];
  useVoicePanelDockMorphStateTsx19.__closure = items39;
  useVoicePanelDockMorphStateTsx19.__workletHash = 11308110243690;
  useVoicePanelDockMorphStateTsx19.__initData = tmp106;
  const animatedReaction4 = require("module_1654").useAnimatedReaction(useVoicePanelDockMorphStateTsx18, useVoicePanelDockMorphStateTsx19);
  const tmpResult51 = require("module_1654");
  const sharedValue8 = require("module_1654").useSharedValue(0);
  const tmpResult52 = require("module_1654");
  const items40 = [closure_26, sharedValue, mode, c4, derivedValue3, derivedValue8, require("VoicePanelSheetMorph").SHEET_MORPH_PHYSICS];
  _require = undefined;
  [tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116] = items40;
  function useVoicePanelDockMorphStateTsx20() {
    const gestureActive = _undefined.get().gestureActive;
    let tmp2 = _undefined2.get() === _undefined3.DISMISSED;
    if (!tmp2) {
      let tmp3 = gestureActive;
      if (gestureActive) {
        tmp3 = _undefined2.get() === tmp.PANEL;
      }
      tmp2 = tmp3;
    }
    if (!tmp2) {
      let tmp4 = !gestureActive;
      if (!gestureActive) {
        value = _undefined4.get();
        let tmp7 = !value;
        if (value) {
          tmp7 = _undefined5.get() <= _undefined6.restDisplacementThreshold;
        }
        tmp4 = tmp7;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  }
  const items41 = [tmp111, tmp112, tmp113, tmp114, tmp115, tmp116];
  useVoicePanelDockMorphStateTsx20.__closure = items41;
  useVoicePanelDockMorphStateTsx20.__workletHash = 9267373332542;
  useVoicePanelDockMorphStateTsx20.__initData = tmp110;
  const items42 = [closure_27, sharedValue8, require("timing/timing").withTiming, require("VoicePanelSheetMorph").DOCK_CONTENT_SWAP_TIMING];
  _require = undefined;
  [tmp117, tmp118, tmp119, tmp120] = items42;
  function useVoicePanelDockMorphStateTsx21(arg0) {
    let tmp = arg0;
    if (arg0) {
      tmp = 0 !== _undefined.get();
    }
    if (tmp) {
      const result = _undefined.set(_undefined2(0, c2));
    }
  }
  const items43 = [tmp118, tmp119, tmp120];
  useVoicePanelDockMorphStateTsx21.__closure = items43;
  useVoicePanelDockMorphStateTsx21.__workletHash = 9767573494832;
  useVoicePanelDockMorphStateTsx21.__initData = tmp117;
  const animatedReaction5 = require("module_1654").useAnimatedReaction(useVoicePanelDockMorphStateTsx20, useVoicePanelDockMorphStateTsx21);
  const tmpResult53 = require("module_1654");
  const sharedValue9 = require("module_1654").useSharedValue(false);
  const tmpResult54 = require("module_1654");
  const sharedValue10 = require("module_1654").useSharedValue(false);
  const tmpResult55 = require("module_1654");
  const items44 = [closure_28, derivedValue1, sharedValue9, sharedValue, sharedValue10, derivedValue2, require("VoicePanelSheetMorph").SHEET_MORPH_PHYSICS, derivedValue8, derivedValue5, sharedValue8, sharedValue7];
  _require = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  [tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, tmp132, tmp133, tmp134] = items44;
  function useVoicePanelDockMorphStateTsx22() {
    if (_undefined.get()) {
      if (!_undefined2.get()) {
        if (!_undefined3.get().gestureActive) {
          if (_undefined4.get()) {
            return false;
          } else if (1 !== _undefined5.get()) {
            return false;
          } else {
            const restDisplacementThreshold = _undefined6.restDisplacementThreshold;
            let tmp7 = _undefined7.get() >= 1 - restDisplacementThreshold;
            if (tmp7) {
              tmp7 = _undefined8.get() <= restDisplacementThreshold;
            }
            if (tmp7) {
              tmp7 = 0 === _undefined9.get();
            }
            if (tmp7) {
              tmp7 = null == _undefined10.get();
            }
            return tmp7;
          }
        }
      }
    }
    return false;
  }
  const items45 = [tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, tmp132, tmp133, tmp134];
  useVoicePanelDockMorphStateTsx22.__closure = items45;
  useVoicePanelDockMorphStateTsx22.__workletHash = 14048220308711;
  useVoicePanelDockMorphStateTsx22.__initData = tmp124;
  const derivedValue9 = require("module_1654").useDerivedValue(useVoicePanelDockMorphStateTsx22);
  const tmpResult56 = require("module_1654");
  const sharedValue11 = require("module_1654").useSharedValue(0);
  const tmpResult57 = require("module_1654");
  const items46 = [closure_29, safeArea];
  _require = undefined;
  [tmp137, tmp138] = items46;
  function useVoicePanelDockMorphStateTsx23() {
    return _undefined.get().left;
  }
  const items47 = [tmp138];
  useVoicePanelDockMorphStateTsx23.__closure = items47;
  useVoicePanelDockMorphStateTsx23.__workletHash = 6282712608507;
  useVoicePanelDockMorphStateTsx23.__initData = tmp137;
  const derivedValue10 = require("module_1654").useDerivedValue(useVoicePanelDockMorphStateTsx23);
  const tmpResult58 = require("module_1654");
  const items48 = [closure_30, sharedValue11, derivedValue10, wrapperDimensions];
  _require = undefined;
  [tmp140, tmp141, tmp142, tmp143] = items48;
  function useVoicePanelDockMorphStateTsx24() {
    value = _undefined.get();
    let num = 0;
    if (value > 0) {
      const _Math = Math;
      const sum = _undefined2.get() + value;
      num = Math.min(sum, _undefined3.get().drawerWidth);
    }
    return num;
  }
  const items49 = [tmp141, tmp142, tmp143];
  useVoicePanelDockMorphStateTsx24.__closure = items49;
  useVoicePanelDockMorphStateTsx24.__workletHash = 11175662872542;
  useVoicePanelDockMorphStateTsx24.__initData = tmp140;
  const derivedValue11 = require("module_1654").useDerivedValue(useVoicePanelDockMorphStateTsx24);
  const tmpResult59 = require("module_1654");
  const sharedValue12 = require("module_1654").useSharedValue(wrapperDimensions.get().drawerWidth);
  const tmpResult60 = require("module_1654");
  const items50 = [closure_31, isDockEnabled, wrapperDimensions, derivedValue11, sharedValue7, derivedValue8, derivedValue2, sharedValue8];
  _require = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp146, tmp147, tmp148, tmp149, tmp150, tmp151, tmp152, tmp153] = items50;
  function useVoicePanelDockMorphStateTsx25() {
    if (c0) {
      const drawerWidth = _undefined2.get().drawerWidth;
      value = _undefined3.get();
      let tmp6 = tmp5;
      if (value > 0) {
        tmp6 = value < drawerWidth;
      }
      if (null != _undefined4.get()) {
        let sum = drawerWidth;
        if (tmp6) {
          sum = drawerWidth + (value - drawerWidth) * tmp14;
        }
        const obj2 = { width: sum, isWide: !tmp6, isMeasured: tmp5, follows: true };
        return obj2;
      } else {
        let tmp9 = !tmp6;
        if (tmp6) {
          tmp9 = 0 === _undefined6.get();
        }
        if (!tmp9) {
          tmp9 = _undefined7.get() > 0;
        }
        let tmp12 = value;
        if (tmp9) {
          tmp12 = drawerWidth;
        }
        const obj = { width: tmp12, isWide: tmp9, isMeasured: tmp5, follows: false };
        return obj;
      }
    } else {
      return null;
    }
  }
  const items51 = [tmp147, tmp148, tmp149, tmp150, tmp151, tmp152, tmp153];
  useVoicePanelDockMorphStateTsx25.__closure = items51;
  useVoicePanelDockMorphStateTsx25.__workletHash = 4754367317170;
  useVoicePanelDockMorphStateTsx25.__initData = tmp146;
  const items52 = [closure_32, sharedValue12, require("spring/spring").withSpring, require("VoicePanelSheetMorph").SHEET_MORPH_PHYSICS];
  _require = undefined;
  [tmp154, tmp155, tmp156, tmp157] = items52;
  function useVoicePanelDockMorphStateTsx26(arg0, width) {
    width = arg0;
    if (null != arg0) {
      const follows = width.follows;
      let isMeasured = !follows;
      if (!follows) {
        isMeasured = null != width;
      }
      if (isMeasured) {
        isMeasured = width.isMeasured;
      }
      if (isMeasured) {
        isMeasured = width.isWide !== width.isWide;
      }
      if (isMeasured) {
        width = width.width;
        let width2 = _undefined2(width, c2);
      } else {
        width2 = width.width;
      }
      const result = _undefined.set(width2);
    }
  }
  const items53 = [tmp155, tmp156, tmp157];
  useVoicePanelDockMorphStateTsx26.__closure = items53;
  useVoicePanelDockMorphStateTsx26.__workletHash = 5086911464732;
  useVoicePanelDockMorphStateTsx26.__initData = tmp154;
  const animatedReaction6 = require("module_1654").useAnimatedReaction(useVoicePanelDockMorphStateTsx25, useVoicePanelDockMorphStateTsx26);
  const tmpResult61 = require("module_1654");
  const items54 = [closure_33, wrapperDimensions, derivedValue10, derivedValue11, require("module_1654").clamp, sharedValue12];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp159, tmp160, tmp161, tmp162, tmp163, tmp164] = items54;
  function useVoicePanelDockMorphStateTsx27() {
    const drawerWidth = _undefined.get().drawerWidth;
    value = _undefined2.get();
    const value2 = _undefined3.get();
    const diff = drawerWidth - value2;
    let num = 0;
    if (value > 0) {
      num = 0;
      if (value2 > 0) {
        num = 0;
        if (diff > 0) {
          num = value * _undefined4((drawerWidth - _undefined5.get()) / diff, 0, 1);
        }
      }
    }
    return num;
  }
  const items55 = [tmp160, tmp161, tmp162, tmp163, tmp164];
  useVoicePanelDockMorphStateTsx27.__closure = items55;
  useVoicePanelDockMorphStateTsx27.__workletHash = 1534026483273;
  useVoicePanelDockMorphStateTsx27.__initData = tmp159;
  const tmpResult62 = require("module_1654");
  return { beginDockEntry: callback, committedMode: sharedValue1, dockContentSwap: sharedValue8, dockEntryProgress: sharedValue4, dockHeight: derivedValue, dockJoinMorphOrigin: sharedValue7, dockMinimizeProgress: derivedValue8, dockPressProgress: derivedValue5, dockPressed: sharedValue5, dockRestLeft: derivedValue10, dockRestWidth: derivedValue11, dockSlotWidth: sharedValue11, dockSheetLeft: require("module_1654").useDerivedValue(useVoicePanelDockMorphStateTsx27), dockSheetWidth: sharedValue12, dockTouched: sharedValue9, isDockInLayout: derivedValue9, isDockSlotEmpty: sharedValue10, handleDockSheetLayout: callback1, dockActivityHideProgress: derivedValue7, isDockConnected: derivedValue1, isDockExpanding: derivedValue3, sheetExitProgress: derivedValue6 };
};