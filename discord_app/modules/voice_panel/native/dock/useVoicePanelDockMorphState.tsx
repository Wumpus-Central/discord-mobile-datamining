// === Module 19350: useVoicePanelDockMorphState ===

// Module 19350 (useVoicePanelDockMorphState)
import spring_spring from "spring/spring" /* 5757 */;
import VoicePanelSheetMorph from "VoicePanelSheetMorph" /* 11386 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const VoicePanelModes = fn(11360).VoicePanelModes;
const VoicePanelDockConstants = fn(11378);
({ DOCK_PRESS_PHYSICS: closure_4, getVoicePanelDockHeight: hasOwnProperty } = VoicePanelDockConstants);
let closure_6 = { code: "(function useVoicePanelDockMorphStateTsx1(){let[isDockEnabled,getVoicePanelDockHeight,safeArea]=this.__closure;return isDockEnabled?getVoicePanelDockHeight(safeArea.get().bottom):0;})" };
let closure_7 = { code: "(function useVoicePanelDockMorphStateTsx2(){let[mode]=this.__closure;return mode.get();})" };
let closure_8 = { code: "(function useVoicePanelDockMorphStateTsx3(current,previous){let[committedMode]=this.__closure;if(current!==previous&&committedMode.get()!=null){committedMode.set(null);}})" };
let closure_9 = { code: "(function useVoicePanelDockMorphStateTsx4(){let[mode]=this.__closure;return mode.get();})" };
let closure_10 = { code: "(function useVoicePanelDockMorphStateTsx5(current,previous){let[VoicePanelModes,dismissedFromDock]=this.__closure;if(current===VoicePanelModes.DISMISSED&&previous!=null){dismissedFromDock.set(previous===VoicePanelModes.PIP);}})" };
let closure_11 = { code: "(function useVoicePanelDockMorphStateTsx6(){let[connected,mode]=this.__closure;return{isConnected:connected.get(),currentMode:mode.get()};})" };
let closure_12 = { code: "(function useVoicePanelDockMorphStateTsx7({isConnected:isConnected,currentMode:currentMode}){let[VoicePanelModes,wasDockConnected]=this.__closure;if(currentMode!==VoicePanelModes.DISMISSED){wasDockConnected.set(isConnected||currentMode===VoicePanelModes.PIP);}})" };
let closure_13 = { code: "(function useVoicePanelDockMorphStateTsx8(){let[isDockEnabled,mode,VoicePanelModes,wasDockConnected,connected]=this.__closure;if(!isDockEnabled)return false;return mode.get()===VoicePanelModes.DISMISSED?wasDockConnected.get():connected.get()||mode.get()===VoicePanelModes.PIP;})" };
let closure_14 = { code: "(function useVoicePanelDockMorphStateTsx9(){let[mode,VoicePanelModes,dismissedFromDock,committedMode]=this.__closure;var _committedMode$get;if(mode.get()===VoicePanelModes.DISMISSED){return dismissedFromDock.get()?1:0;}return((_committedMode$get=committedMode.get())!==null&&_committedMode$get!==void 0?_committedMode$get:mode.get())===VoicePanelModes.PIP?1:0;})" };
let closure_15 = { code: "(function useVoicePanelDockMorphStateTsx10(){let[dockShapeTarget]=this.__closure;return dockShapeTarget.get()===0;})" };
let closure_16 = { code: "(function useVoicePanelDockMorphStateTsx11(){let[dockPressed,wrapperOffset,mode,VoicePanelModes]=this.__closure;return dockPressed.get()||wrapperOffset.get().gestureActive&&mode.get()===VoicePanelModes.PIP;})" };
let closure_17 = { code: "(function useVoicePanelDockMorphStateTsx12(){let[withSpring,isDockHeld,DOCK_PRESS_PHYSICS]=this.__closure;return withSpring(isDockHeld.get()?1:0,DOCK_PRESS_PHYSICS);})" };
let closure_18 = { code: "(function useVoicePanelDockMorphStateTsx13(){let[withSpring,mode,VoicePanelModes,isDockConnected,DOCK_SPACE_SPRING_CONFIG]=this.__closure;return withSpring(mode.get()===VoicePanelModes.DISMISSED&&isDockConnected.get()?1:0,DOCK_SPACE_SPRING_CONFIG);})" };
let closure_19 = { code: "(function useVoicePanelDockMorphStateTsx14(){let[isDockConnected,wrapperOffset,mode,VoicePanelModes,wrapperDimensions,dockHeight,clamp,dockShapeTarget,morphSkipsEntryAnimation,withSpring,SHEET_MORPH_PHYSICS]=this.__closure;if(!isDockConnected.get())return 0;const offset=wrapperOffset.get();if(offset.gestureActive&&mode.get()!==VoicePanelModes.DISMISSED){const travel=wrapperDimensions.get().drawerHeight-dockHeight.get();if(travel<=0)return 0;return clamp(offset.y/travel,0,1);}const target=dockShapeTarget.get();if(morphSkipsEntryAnimation.get()){return target;}return withSpring(target,SHEET_MORPH_PHYSICS);})" };
let closure_20 = { code: "(function useVoicePanelDockMorphStateTsx15(){let[morphSkipsEntryAnimation,dockMinimizeProgress,dockShapeTarget]=this.__closure;return morphSkipsEntryAnimation.get()&&dockMinimizeProgress.get()===dockShapeTarget.get();})" };
let closure_21 = { code: "(function useVoicePanelDockMorphStateTsx16(settled){let[morphSkipsEntryAnimation]=this.__closure;if(settled){morphSkipsEntryAnimation.set(false);}})" };
let closure_22 = { code: "(function useVoicePanelDockMorphStateTsx17(){let[dockJoinMorphOrigin,connected,dockMinimizeProgress,SHEET_MORPH_PHYSICS,wrapperOffset,mode,VoicePanelModes]=this.__closure;return dockJoinMorphOrigin.get()!=null&&connected.get()&&(dockMinimizeProgress.get()>=1-SHEET_MORPH_PHYSICS.restDisplacementThreshold||wrapperOffset.get().gestureActive||mode.get()===VoicePanelModes.DISMISSED);})" };
let closure_23 = { code: "(function useVoicePanelDockMorphStateTsx18(done){let[dockJoinMorphOrigin]=this.__closure;if(done){dockJoinMorphOrigin.set(null);}})" };
let closure_24 = { code: "(function useVoicePanelDockMorphStateTsx19(){let[wrapperOffset,mode,VoicePanelModes,isDockExpanding,dockMinimizeProgress,SHEET_MORPH_PHYSICS]=this.__closure;const{gestureActive:gestureActive}=wrapperOffset.get();return mode.get()===VoicePanelModes.DISMISSED||gestureActive&&mode.get()===VoicePanelModes.PANEL||!gestureActive&&(!isDockExpanding.get()||dockMinimizeProgress.get()<=SHEET_MORPH_PHYSICS.restDisplacementThreshold);})" };
let closure_25 = { code: "(function useVoicePanelDockMorphStateTsx20(released){let[dockContentSwap,withTiming,DOCK_CONTENT_SWAP_TIMING]=this.__closure;if(released&&dockContentSwap.get()!==0){dockContentSwap.set(withTiming(0,DOCK_CONTENT_SWAP_TIMING));}})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockMorphState.tsx");

export default function useVoicePanelDockMorphState(arg0) {
  ({ isDockEnabled, mode, connected } = arg0);
  ({ mountsMinimized, safeArea, wrapperOffset, wrapperDimensions } = arg0);
  let sharedValue = require("module_1652").useSharedValue({ gestureActive: false, x: 0, y: 0 });
  if (isDockEnabled) {
    sharedValue = wrapperOffset;
  }
  let obj = require("module_1652");
  items = [c6, isDockEnabled, c5, safeArea];
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
  const dockHeight = require("module_1652").useDerivedValue(useVoicePanelDockMorphStateTsx1);
  const tmpResult = require("module_1652");
  const committedMode = require("module_1652").useSharedValue(null);
  const tmpResult22 = require("module_1652");
  const items2 = [c7, mode];
  [tmp10, tmp11] = items2;
  function useVoicePanelDockMorphStateTsx2() {
    return _undefined.get();
  }
  const items3 = [tmp11];
  useVoicePanelDockMorphStateTsx2.__closure = items3;
  useVoicePanelDockMorphStateTsx2.__workletHash = 1130154786589;
  useVoicePanelDockMorphStateTsx2.__initData = tmp10;
  const items4 = [c8, committedMode];
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
  const animatedReaction = require("module_1652").useAnimatedReaction(useVoicePanelDockMorphStateTsx2, useVoicePanelDockMorphStateTsx3);
  const tmpResult23 = require("module_1652");
  const sharedValue2 = require("module_1652").useSharedValue(false);
  const tmpResult24 = require("module_1652");
  const items6 = [c9, mode];
  [tmp16, tmp17] = items6;
  function useVoicePanelDockMorphStateTsx4() {
    return _undefined.get();
  }
  const items7 = [tmp17];
  useVoicePanelDockMorphStateTsx4.__closure = items7;
  useVoicePanelDockMorphStateTsx4.__workletHash = 6511286054171;
  useVoicePanelDockMorphStateTsx4.__initData = tmp16;
  const items8 = [c10, c3, sharedValue2];
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
  const animatedReaction1 = require("module_1652").useAnimatedReaction(useVoicePanelDockMorphStateTsx4, useVoicePanelDockMorphStateTsx5);
  const tmpResult25 = require("module_1652");
  const sharedValue3 = require("module_1652").useSharedValue(false);
  const tmpResult26 = require("module_1652");
  const items10 = [closure_11, connected, mode];
  [tmp24, tmp25, tmp26] = items10;
  function useVoicePanelDockMorphStateTsx6() {
    return { isConnected: _undefined.get(), currentMode: _undefined2.get() };
  }
  const items11 = [tmp25, tmp26];
  useVoicePanelDockMorphStateTsx6.__closure = items11;
  useVoicePanelDockMorphStateTsx6.__workletHash = 9395341436969;
  useVoicePanelDockMorphStateTsx6.__initData = tmp24;
  const items12 = [closure_12, c3, sharedValue3];
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
  const animatedReaction2 = require("module_1652").useAnimatedReaction(useVoicePanelDockMorphStateTsx6, useVoicePanelDockMorphStateTsx7);
  const tmpResult27 = require("module_1652");
  const items14 = [closure_13, isDockEnabled, mode, c3, sharedValue3, connected];
  _require = undefined;
  c3 = undefined;
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
  const isDockConnected = require("module_1652").useDerivedValue(useVoicePanelDockMorphStateTsx8);
  const tmpResult28 = require("module_1652");
  const items16 = [closure_14, mode, c3, sharedValue2, committedMode];
  _require = undefined;
  c3 = undefined;
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
  const derivedValue2 = require("module_1652").useDerivedValue(useVoicePanelDockMorphStateTsx9);
  const tmpResult29 = require("module_1652");
  const items18 = [closure_15, derivedValue2];
  _require = undefined;
  [tmp44, tmp45] = items18;
  function useVoicePanelDockMorphStateTsx10() {
    return 0 === _undefined.get();
  }
  const items19 = [tmp45];
  useVoicePanelDockMorphStateTsx10.__closure = items19;
  useVoicePanelDockMorphStateTsx10.__workletHash = 9313360300259;
  useVoicePanelDockMorphStateTsx10.__initData = tmp44;
  const isDockExpanding = require("module_1652").useDerivedValue(useVoicePanelDockMorphStateTsx10);
  _require = undefined;
  noop = undefined;
  const tmpResult30 = require("module_1652");
  const dockEntryProgress = require("module_1652").useSharedValue(1);
  _require = dockEntryProgress;
  noop.useRef(false);
  noop = noop.useRef(false);
  const items20 = [dockEntryProgress];
  const items21 = [dockEntryProgress];
  const beginDockEntry = noop.useCallback(() => {
    const result = _undefined.set(0);
    if (_undefined2.current) {
      const result1 = _undefined.set(spring_spring.withSpring(1, VoicePanelSheetMorph.DOCK_SPACE_SPRING_CONFIG));
    } else {
      c2.current = true;
    }
  }, items20);
  const handleDockSheetLayout = noop.useCallback(() => {
    c1.current = true;
    if (_undefined3.current) {
      tmp.current = false;
      const result = _undefined.set(spring_spring.withSpring(1, VoicePanelSheetMorph.DOCK_SPACE_SPRING_CONFIG));
    }
  }, items21);
  const tmpResult31 = require("module_1652");
  const dockPressed = require("module_1652").useSharedValue(false);
  const tmpResult32 = require("module_1652");
  const items22 = [closure_16, dockPressed, sharedValue, mode, c3];
  _require = undefined;
  c3 = undefined;
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
  const derivedValue4 = require("module_1652").useDerivedValue(useVoicePanelDockMorphStateTsx11);
  const tmpResult33 = require("module_1652");
  const items24 = [closure_17, require("spring/spring").withSpring, derivedValue4, c4];
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
  const dockPressProgress = require("module_1652").useDerivedValue(useVoicePanelDockMorphStateTsx12);
  const tmpResult34 = require("module_1652");
  const items26 = [closure_18, require("spring/spring").withSpring, mode, c3, isDockConnected, require("VoicePanelSheetMorph").DOCK_SPACE_SPRING_CONFIG];
  _require = undefined;
  c3 = undefined;
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
  const sheetExitProgress = require("module_1652").useDerivedValue(useVoicePanelDockMorphStateTsx13);
  const tmpResult35 = require("module_1652");
  const sharedValue6 = require("module_1652").useSharedValue(mountsMinimized);
  const tmpResult36 = require("module_1652");
  const items28 = [closure_19, isDockConnected, sharedValue, mode, c3, wrapperDimensions, dockHeight, require("module_1652").clamp, derivedValue2, sharedValue6, require("spring/spring").withSpring, require("VoicePanelSheetMorph").SHEET_MORPH_PHYSICS];
  _require = undefined;
  c3 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  [tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81] = items28;
  function useVoicePanelDockMorphStateTsx14() {
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
      value2 = _undefined8.get();
      let tmp8 = value2;
      if (!_undefined9.get()) {
        tmp8 = _undefined10(value2, c10);
      }
      return tmp8;
    } else {
      return 0;
    }
  }
  const items29 = [tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81];
  useVoicePanelDockMorphStateTsx14.__closure = items29;
  useVoicePanelDockMorphStateTsx14.__workletHash = 1103316875634;
  useVoicePanelDockMorphStateTsx14.__initData = tmp70;
  const dockMinimizeProgress = require("module_1652").useDerivedValue(useVoicePanelDockMorphStateTsx14);
  const tmpResult37 = require("module_1652");
  const items30 = [closure_20, sharedValue6, dockMinimizeProgress, derivedValue2];
  [tmp83, tmp84, tmp85, tmp86] = items30;
  function useVoicePanelDockMorphStateTsx15() {
    value = _undefined.get();
    if (value) {
      value2 = _undefined2.get();
      value = value2 === _undefined3.get();
    }
    return value;
  }
  const items31 = [tmp84, tmp85, tmp86];
  useVoicePanelDockMorphStateTsx15.__closure = items31;
  useVoicePanelDockMorphStateTsx15.__workletHash = 11635000337302;
  useVoicePanelDockMorphStateTsx15.__initData = tmp83;
  const items32 = [closure_21, sharedValue6];
  _require = undefined;
  [tmp87, tmp88] = items32;
  function useVoicePanelDockMorphStateTsx16(arg0) {
    if (arg0) {
      const result = _undefined.set(false);
    }
  }
  const items33 = [tmp88];
  useVoicePanelDockMorphStateTsx16.__closure = items33;
  useVoicePanelDockMorphStateTsx16.__workletHash = 12553679383107;
  useVoicePanelDockMorphStateTsx16.__initData = tmp87;
  const animatedReaction3 = require("module_1652").useAnimatedReaction(useVoicePanelDockMorphStateTsx15, useVoicePanelDockMorphStateTsx16);
  const tmpResult38 = require("module_1652");
  const dockJoinMorphOrigin = require("module_1652").useSharedValue(null);
  const tmpResult39 = require("module_1652");
  const items34 = [closure_22, dockJoinMorphOrigin, connected, dockMinimizeProgress, require("VoicePanelSheetMorph").SHEET_MORPH_PHYSICS, sharedValue, mode, c3];
  c3 = undefined;
  c6 = undefined;
  [tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98] = items34;
  function useVoicePanelDockMorphStateTsx17() {
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
  const items35 = [tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98];
  useVoicePanelDockMorphStateTsx17.__closure = items35;
  useVoicePanelDockMorphStateTsx17.__workletHash = 13906375791619;
  useVoicePanelDockMorphStateTsx17.__initData = tmp91;
  const items36 = [closure_23, dockJoinMorphOrigin];
  _require = undefined;
  [tmp99, tmp100] = items36;
  function useVoicePanelDockMorphStateTsx18(arg0) {
    if (arg0) {
      const result = _undefined.set(null);
    }
  }
  const items37 = [tmp100];
  useVoicePanelDockMorphStateTsx18.__closure = items37;
  useVoicePanelDockMorphStateTsx18.__workletHash = 13549147314699;
  useVoicePanelDockMorphStateTsx18.__initData = tmp99;
  const animatedReaction4 = require("module_1652").useAnimatedReaction(useVoicePanelDockMorphStateTsx17, useVoicePanelDockMorphStateTsx18);
  const tmpResult40 = require("module_1652");
  const dockContentSwap = require("module_1652").useSharedValue(0);
  const tmpResult41 = require("module_1652");
  const items38 = [closure_24, sharedValue, mode, c3, isDockExpanding, dockMinimizeProgress, require("VoicePanelSheetMorph").SHEET_MORPH_PHYSICS];
  _require = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109] = items38;
  function useVoicePanelDockMorphStateTsx19() {
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
  const items39 = [tmp104, tmp105, tmp106, tmp107, tmp108, tmp109];
  useVoicePanelDockMorphStateTsx19.__closure = items39;
  useVoicePanelDockMorphStateTsx19.__workletHash = 6416964197268;
  useVoicePanelDockMorphStateTsx19.__initData = tmp103;
  const items40 = [closure_25, dockContentSwap, require("timing/timing").withTiming, require("VoicePanelSheetMorph").DOCK_CONTENT_SWAP_TIMING];
  _require = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp110, tmp111, tmp112, tmp113] = items40;
  function useVoicePanelDockMorphStateTsx20(arg0) {
    let tmp = arg0;
    if (arg0) {
      tmp = 0 !== _undefined.get();
    }
    if (tmp) {
      const result = _undefined.set(_undefined2(0, c2));
    }
  }
  const items41 = [tmp111, tmp112, tmp113];
  useVoicePanelDockMorphStateTsx20.__closure = items41;
  useVoicePanelDockMorphStateTsx20.__workletHash = 2464334707217;
  useVoicePanelDockMorphStateTsx20.__initData = tmp110;
  const animatedReaction5 = require("module_1652").useAnimatedReaction(useVoicePanelDockMorphStateTsx19, useVoicePanelDockMorphStateTsx20);
  return { beginDockEntry, committedMode, dockContentSwap, dockEntryProgress, dockHeight, dockJoinMorphOrigin, dockMinimizeProgress, dockPressProgress, dockPressed, handleDockSheetLayout, isDockConnected, isDockExpanding, sheetExitProgress };
};