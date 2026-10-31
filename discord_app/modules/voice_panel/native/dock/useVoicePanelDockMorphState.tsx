// === Module 19185: useVoicePanelDockMorphState ===

// Module 19185 (useVoicePanelDockMorphState)
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import spring from "spring" /* 5637 */;
import VoicePanelSheetMorph from "VoicePanelSheetMorph" /* 11249 */;
import noop from "module_19" /* 19 */;

require = fn;
const VoicePanelModes = fn(11223).VoicePanelModes;
const VoicePanelDockConstants = fn(11241);
({ DOCK_PRESS_PHYSICS: closure_4, getVoicePanelDockHeight: hasOwnProperty } = VoicePanelDockConstants);
let closure_6 = { code: "function useVoicePanelDockMorphStateTsx1(){const{isDockEnabled,getVoicePanelDockHeight,safeArea}=this.__closure;return isDockEnabled?getVoicePanelDockHeight(safeArea.get().bottom):0;}" };
let closure_7 = { code: "function useVoicePanelDockMorphStateTsx2(){const{mode}=this.__closure;return mode.get();}" };
let closure_8 = { code: "function useVoicePanelDockMorphStateTsx3(current,previous){const{committedMode}=this.__closure;if(current!==previous&&committedMode.get()!=null){committedMode.set(null);}}" };
let closure_9 = { code: "function useVoicePanelDockMorphStateTsx4(){const{mode}=this.__closure;return mode.get();}" };
let closure_10 = { code: "function useVoicePanelDockMorphStateTsx5(current,previous){const{VoicePanelModes,dismissedFromDock}=this.__closure;if(current===VoicePanelModes.DISMISSED&&previous!=null){dismissedFromDock.set(previous===VoicePanelModes.PIP);}}" };
let closure_11 = { code: "function useVoicePanelDockMorphStateTsx6(){const{connected,mode}=this.__closure;return{isConnected:connected.get(),currentMode:mode.get()};}" };
let closure_12 = { code: "function useVoicePanelDockMorphStateTsx7({isConnected:isConnected,currentMode:currentMode}){const{VoicePanelModes,wasDockConnected}=this.__closure;if(currentMode!==VoicePanelModes.DISMISSED){wasDockConnected.set(isConnected||currentMode===VoicePanelModes.PIP);}}" };
let closure_13 = { code: "function useVoicePanelDockMorphStateTsx8(){const{isDockEnabled,mode,VoicePanelModes,wasDockConnected,connected}=this.__closure;if(!isDockEnabled)return false;return mode.get()===VoicePanelModes.DISMISSED?wasDockConnected.get():connected.get()||mode.get()===VoicePanelModes.PIP;}" };
let closure_14 = { code: "function useVoicePanelDockMorphStateTsx9(){const{mode,VoicePanelModes,dismissedFromDock,committedMode}=this.__closure;var _committedMode$get;if(mode.get()===VoicePanelModes.DISMISSED){return dismissedFromDock.get()?1:0;}return((_committedMode$get=committedMode.get())!==null&&_committedMode$get!==void 0?_committedMode$get:mode.get())===VoicePanelModes.PIP?1:0;}" };
let closure_15 = { code: "function useVoicePanelDockMorphStateTsx10(){const{dockShapeTarget}=this.__closure;return dockShapeTarget.get()===0;}" };
let closure_16 = { code: "function useVoicePanelDockMorphStateTsx11(){const{dockPressed,wrapperOffset,mode,VoicePanelModes}=this.__closure;return dockPressed.get()||wrapperOffset.get().gestureActive&&mode.get()===VoicePanelModes.PIP;}" };
let closure_17 = { code: "function useVoicePanelDockMorphStateTsx12(){const{withSpring,isDockHeld,DOCK_PRESS_PHYSICS}=this.__closure;return withSpring(isDockHeld.get()?1:0,DOCK_PRESS_PHYSICS);}" };
let closure_18 = { code: "function useVoicePanelDockMorphStateTsx13(){const{withSpring,mode,VoicePanelModes,isDockConnected,DOCK_SPACE_SPRING_CONFIG}=this.__closure;return withSpring(mode.get()===VoicePanelModes.DISMISSED&&isDockConnected.get()?1:0,DOCK_SPACE_SPRING_CONFIG);}" };
const __initData = { code: "function useVoicePanelDockMorphStateTsx14(){const{isDockConnected,wrapperOffset,mode,VoicePanelModes,wrapperDimensions,dockHeight,clamp,dockShapeTarget,morphSkipsEntryAnimation,withSpring,SHEET_MORPH_PHYSICS}=this.__closure;if(!isDockConnected.get())return 0;const offset=wrapperOffset.get();if(offset.gestureActive&&mode.get()!==VoicePanelModes.DISMISSED){const travel=wrapperDimensions.get().drawerHeight-dockHeight.get();if(travel<=0)return 0;return clamp(offset.y/travel,0,1);}const target=dockShapeTarget.get();if(morphSkipsEntryAnimation.get()){return target;}return withSpring(target,SHEET_MORPH_PHYSICS);}" };
const __initData2 = { code: "function useVoicePanelDockMorphStateTsx15(){const{morphSkipsEntryAnimation,dockMinimizeProgress,dockShapeTarget}=this.__closure;return morphSkipsEntryAnimation.get()&&dockMinimizeProgress.get()===dockShapeTarget.get();}" };
const __initData3 = { code: "function useVoicePanelDockMorphStateTsx16(settled){const{morphSkipsEntryAnimation}=this.__closure;if(settled){morphSkipsEntryAnimation.set(false);}}" };
const __initData4 = { code: "function useVoicePanelDockMorphStateTsx17(){const{dockJoinMorphOrigin,connected,dockMinimizeProgress,SHEET_MORPH_PHYSICS,wrapperOffset,mode,VoicePanelModes}=this.__closure;return dockJoinMorphOrigin.get()!=null&&connected.get()&&(dockMinimizeProgress.get()>=1-SHEET_MORPH_PHYSICS.restDisplacementThreshold||wrapperOffset.get().gestureActive||mode.get()===VoicePanelModes.DISMISSED);}" };
const __initData5 = { code: "function useVoicePanelDockMorphStateTsx18(done){const{dockJoinMorphOrigin}=this.__closure;if(done){dockJoinMorphOrigin.set(null);}}" };
const __initData6 = { code: "function useVoicePanelDockMorphStateTsx19(){const{wrapperOffset,mode,VoicePanelModes,isDockExpanding,dockMinimizeProgress,SHEET_MORPH_PHYSICS}=this.__closure;const{gestureActive:gestureActive}=wrapperOffset.get();return mode.get()===VoicePanelModes.DISMISSED||gestureActive&&mode.get()===VoicePanelModes.PANEL||!gestureActive&&(!isDockExpanding.get()||dockMinimizeProgress.get()<=SHEET_MORPH_PHYSICS.restDisplacementThreshold);}" };
const __initData7 = { code: "function useVoicePanelDockMorphStateTsx20(released){const{dockContentSwap,withTiming,DOCK_CONTENT_SWAP_TIMING}=this.__closure;if(released&&dockContentSwap.get()!==0){dockContentSwap.set(withTiming(0,DOCK_CONTENT_SWAP_TIMING));}}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockMorphState.tsx");

export default function useVoicePanelDockMorphState(isDockEnabled) {
  isDockEnabled = isDockEnabled.isDockEnabled;
  const mode = isDockEnabled.mode;
  const connected = isDockEnabled.connected;
  const safeArea = isDockEnabled.safeArea;
  const wrapperDimensions = isDockEnabled.wrapperDimensions;
  let dockHeight;
  let committedMode;
  let sharedValue2;
  let sharedValue3;
  let isDockConnected;
  let derivedValue2;
  let isDockExpanding;
  let dockPressed;
  let derivedValue4;
  let sharedValue6;
  let dockMinimizeProgress;
  let dockJoinMorphOrigin;
  let dockContentSwap;
  ({ mountsMinimized, wrapperOffset } = isDockEnabled);
  let sharedValue = isDockEnabled(mode[3]).useSharedValue({ gestureActive: false, x: 0, y: 0 });
  if (isDockEnabled) {
    sharedValue = wrapperOffset;
  }
  let obj = isDockEnabled(mode[3]);
  class G {
    constructor() {
      num = 0;
      if (isDockEnabled) {
        tmp = getVoicePanelDockHeight;
        tmp2 = safeArea;
        num = getVoicePanelDockHeight(safeArea.get().bottom);
      }
      return num;
    }
  }
  G.__closure = { isDockEnabled, getVoicePanelDockHeight: sharedValue, safeArea };
  G.__workletHash = 11599676161970;
  G.__initData = dockHeight;
  dockHeight = isDockEnabled(mode[3]).useDerivedValue(G);
  let obj2 = { isDockEnabled, getVoicePanelDockHeight: sharedValue, safeArea };
  const tmpResult = isDockEnabled(mode[3]);
  committedMode = isDockEnabled(mode[3]).useSharedValue(null);
  const tmpResult22 = isDockEnabled(mode[3]);
  class K {
    constructor() {
      return mode.get();
    }
  }
  K.__closure = { mode };
  K.__workletHash = 4611544497028;
  K.__initData = committedMode;
  class Y {
    constructor(arg0, arg1) {
      tmp = isDockEnabled !== arg1;
      if (tmp) {
        tmp2 = closure_7;
        tmp3 = null;
        tmp = null != closure_7.get();
      }
      if (tmp) {
        tmp4 = closure_7;
        tmp5 = null;
        result = closure_7.set(null);
      }
      return;
    }
  }
  Y.__closure = { committedMode };
  Y.__workletHash = 17280219380028;
  Y.__initData = sharedValue2;
  const animatedReaction = isDockEnabled(mode[3]).useAnimatedReaction(K, Y);
  const tmpResult23 = isDockEnabled(mode[3]);
  sharedValue2 = isDockEnabled(mode[3]).useSharedValue(false);
  const tmpResult24 = isDockEnabled(mode[3]);
  const fn = function $() {
    return mode.get();
  };
  fn.__closure = { mode };
  fn.__workletHash = 14684098011330;
  fn.__initData = sharedValue3;
  class W {
    constructor(arg0, arg1) {
      tmp2 = isDockEnabled === VoicePanelModes.DISMISSED;
      tmp = VoicePanelModes;
      if (tmp2) {
        tmp3 = null;
        tmp2 = null != arg1;
      }
      if (tmp2) {
        tmp4 = closure_8;
        result = closure_8.set(arg1 === tmp.PIP);
      }
      return;
    }
  }
  W.__closure = { VoicePanelModes: safeArea, dismissedFromDock: sharedValue2 };
  W.__workletHash = 6804996750753;
  W.__initData = isDockConnected;
  const animatedReaction1 = isDockEnabled(mode[3]).useAnimatedReaction(fn, W);
  const obj3 = { VoicePanelModes: safeArea, dismissedFromDock: sharedValue2 };
  const tmpResult25 = isDockEnabled(mode[3]);
  sharedValue3 = isDockEnabled(mode[3]).useSharedValue(false);
  const tmpResult26 = isDockEnabled(mode[3]);
  class B {
    constructor() {
      obj = { isConnected: connected.get(), currentMode: mode.get() };
      return obj;
    }
  }
  B.__closure = { connected, mode };
  B.__workletHash = 13158810064144;
  B.__initData = derivedValue2;
  const fn2 = function q(arg0) {
    ({ isConnected, currentMode } = arg0);
    if (currentMode !== VoicePanelModes.DISMISSED) {
      if (!isConnected) {
        isConnected = currentMode === tmp.PIP;
      }
      const result = sharedValue3.set(isConnected);
    }
  };
  fn2.__closure = { VoicePanelModes: safeArea, wasDockConnected: sharedValue3 };
  fn2.__workletHash = 17408928003338;
  fn2.__initData = isDockExpanding;
  const animatedReaction2 = isDockEnabled(mode[3]).useAnimatedReaction(B, fn2);
  const tmpResult27 = isDockEnabled(mode[3]);
  class U {
    constructor() {
      tmp = isDockEnabled;
      if (!tmp) {
        return tmp;
      } else {
        obj = mode;
        if (mode.get() === VoicePanelModes.DISMISSED) {
          tmp5 = closure_9;
          value = closure_9.get();
        } else {
          tmp3 = connected;
          value = connected.get() || obj.get() === tmp2.PIP;
        }
        tmp6 = value;
      }
      return;
    }
  }
  U.__closure = { isDockEnabled, mode, VoicePanelModes: safeArea, wasDockConnected: sharedValue3, connected };
  U.__workletHash = 10160859525680;
  U.__initData = dockPressed;
  isDockConnected = isDockEnabled(mode[3]).useDerivedValue(U);
  const tmpResult28 = isDockEnabled(mode[3]);
  class X {
    constructor() {
      obj = mode;
      if (mode.get() === VoicePanelModes.DISMISSED) {
        tmp5 = closure_8;
        num2 = 0;
        if (closure_8.get()) {
          num2 = 1;
        }
        num = num2;
      } else {
        tmp2 = closure_7;
        value = closure_7.get();
        tmp4 = null;
        if (value == null) {
          value = obj.get();
        }
        num = 0;
        if (value === tmp.PIP) {
          num = 1;
        }
      }
      return num;
    }
  }
  X.__closure = { mode, VoicePanelModes: safeArea, dismissedFromDock: sharedValue2, committedMode };
  X.__workletHash = 4580477793979;
  X.__initData = derivedValue4;
  derivedValue2 = isDockEnabled(mode[3]).useDerivedValue(X);
  const tmpResult29 = isDockEnabled(mode[3]);
  class Z {
    constructor() {
      return 0 === closure_11.get();
    }
  }
  Z.__closure = { dockShapeTarget: derivedValue2 };
  Z.__workletHash = 16095307145434;
  Z.__initData = sharedValue6;
  isDockExpanding = isDockEnabled(mode[3]).useDerivedValue(Z);
  const tmpResult30 = isDockEnabled(mode[3]);
  const dockEntryProgress = isDockEnabled(mode[3]).useSharedValue(1);
  closure_129_0 = dockEntryProgress;
  closure_129_1 = connected.useRef(false);
  closure_129_2 = connected.useRef(false);
  const items = [dockEntryProgress];
  const items1 = [dockEntryProgress];
  const beginDockEntry = connected.useCallback(() => {
    const result = isDockEnabled.set(0);
    if (mode.current) {
      const result1 = isDockEnabled.set(spring.withSpring(1, VoicePanelSheetMorph.DOCK_SPACE_SPRING_CONFIG));
    } else {
      connected.current = true;
    }
  }, items);
  const handleDockSheetLayout = connected.useCallback(() => {
    mode.current = true;
    if (connected.current) {
      tmp.current = false;
      const result = isDockEnabled.set(spring.withSpring(1, VoicePanelSheetMorph.DOCK_SPACE_SPRING_CONFIG));
    }
  }, items1);
  const tmpResult31 = isDockEnabled(mode[3]);
  dockPressed = isDockEnabled(mode[3]).useSharedValue(false);
  const tmpResult32 = isDockEnabled(mode[3]);
  function ee() {
    value = dockPressed.get();
    if (!value) {
      let gestureActive = sharedValue.get().gestureActive;
      if (gestureActive) {
        gestureActive = mode.get() === VoicePanelModes.PIP;
      }
      value = gestureActive;
    }
    return value;
  }
  ee.__closure = { dockPressed, wrapperOffset: sharedValue, mode, VoicePanelModes: safeArea };
  ee.__workletHash = 4131610632229;
  ee.__initData = dockMinimizeProgress;
  derivedValue4 = isDockEnabled(mode[3]).useDerivedValue(ee);
  const tmpResult33 = isDockEnabled(mode[3]);
  function te() {
    let num = 0;
    if (derivedValue4.get()) {
      num = 1;
    }
    return spring.withSpring(num, React4);
  }
  const tmpResult34 = isDockEnabled(mode[3]);
  te.__closure = { withSpring: isDockEnabled(mode[4]).withSpring, isDockHeld: derivedValue4, DOCK_PRESS_PHYSICS: wrapperDimensions };
  te.__workletHash = 11374894455644;
  te.__initData = dockJoinMorphOrigin;
  const dockPressProgress = tmpResult34.useDerivedValue(te);
  const obj4 = { withSpring: isDockEnabled(mode[4]).withSpring, isDockHeld: derivedValue4, DOCK_PRESS_PHYSICS: wrapperDimensions };
  function oe() {
    let num = 0;
    if (mode.get() === VoicePanelModes.DISMISSED) {
      num = 0;
      if (isDockConnected.get()) {
        num = 1;
      }
    }
    return spring.withSpring(num, VoicePanelSheetMorph.DOCK_SPACE_SPRING_CONFIG);
  }
  const tmpResult35 = isDockEnabled(mode[3]);
  oe.__closure = { withSpring: isDockEnabled(mode[4]).withSpring, mode, VoicePanelModes: safeArea, isDockConnected, DOCK_SPACE_SPRING_CONFIG: isDockEnabled(mode[5]).DOCK_SPACE_SPRING_CONFIG };
  oe.__workletHash = 862139017068;
  oe.__initData = dockContentSwap;
  const sheetExitProgress = tmpResult35.useDerivedValue(oe);
  const obj5 = { withSpring: isDockEnabled(mode[4]).withSpring, mode, VoicePanelModes: safeArea, isDockConnected, DOCK_SPACE_SPRING_CONFIG: isDockEnabled(mode[5]).DOCK_SPACE_SPRING_CONFIG };
  sharedValue6 = isDockEnabled(mode[3]).useSharedValue(mountsMinimized);
  const tmpResult36 = isDockEnabled(mode[3]);
  function ne() {
    if (isDockConnected.get()) {
      value = sharedValue.get();
      if (value.gestureActive) {
        if (mode.get() !== VoicePanelModes.DISMISSED) {
          const diff = wrapperDimensions.get().drawerHeight - dockHeight.get();
          let num3 = 0;
          if (diff > 0) {
            num3 = ReanimatedRexport.clamp(value.y / diff, 0, 1);
          }
          return num3;
        }
      }
      value2 = derivedValue2.get();
      let withSpringResult = value2;
      if (!sharedValue6.get()) {
        withSpringResult = spring.withSpring(value2, VoicePanelSheetMorph.SHEET_MORPH_PHYSICS);
      }
      return withSpringResult;
    } else {
      return 0;
    }
  }
  const tmpResult37 = isDockEnabled(mode[3]);
  ne.__closure = { isDockConnected, wrapperOffset: sharedValue, mode, VoicePanelModes: safeArea, wrapperDimensions, dockHeight, clamp: isDockEnabled(mode[3]).clamp, dockShapeTarget: derivedValue2, morphSkipsEntryAnimation: sharedValue6, withSpring: isDockEnabled(mode[4]).withSpring, SHEET_MORPH_PHYSICS: isDockEnabled(mode[5]).SHEET_MORPH_PHYSICS };
  ne.__workletHash = 9895057299659;
  ne.__initData = __initData;
  dockMinimizeProgress = tmpResult37.useDerivedValue(ne);
  const obj6 = { isDockConnected, wrapperOffset: sharedValue, mode, VoicePanelModes: safeArea, wrapperDimensions, dockHeight, clamp: isDockEnabled(mode[3]).clamp, dockShapeTarget: derivedValue2, morphSkipsEntryAnimation: sharedValue6, withSpring: isDockEnabled(mode[4]).withSpring, SHEET_MORPH_PHYSICS: isDockEnabled(mode[5]).SHEET_MORPH_PHYSICS };
  function ce() {
    value = sharedValue6.get();
    if (value) {
      value2 = dockMinimizeProgress.get();
      value = value2 === derivedValue2.get();
    }
    return value;
  }
  ce.__closure = { morphSkipsEntryAnimation: sharedValue6, dockMinimizeProgress, dockShapeTarget: derivedValue2 };
  ce.__workletHash = 14873809000559;
  ce.__initData = __initData2;
  function ie(arg0) {
    if (arg0) {
      const result = sharedValue6.set(false);
    }
  }
  ie.__closure = { morphSkipsEntryAnimation: sharedValue6 };
  ie.__workletHash = 8612909128122;
  ie.__initData = __initData3;
  const animatedReaction3 = isDockEnabled(mode[3]).useAnimatedReaction(ce, ie);
  const tmpResult38 = isDockEnabled(mode[3]);
  dockJoinMorphOrigin = isDockEnabled(mode[3]).useSharedValue(null);
  const tmpResult39 = isDockEnabled(mode[3]);
  class Me {
    constructor() {
      value = null != closure_17.get();
      if (value) {
        tmp2 = connected;
        value = connected.get();
      }
      if (value) {
        tmp3 = closure_16;
        tmp5 = closure_0;
        tmp6 = closure_1;
        value1 = closure_16.get();
        num = 1;
        gestureActive = value1 >= 1 - closure_0(closure_1[5]).SHEET_MORPH_PHYSICS.restDisplacementThreshold;
        if (!gestureActive) {
          tmp7 = wrapperOffset;
          gestureActive = wrapperOffset.get().gestureActive;
        }
        if (!gestureActive) {
          tmp8 = mode;
          tmp9 = VoicePanelModes;
          gestureActive = mode.get() === VoicePanelModes.DISMISSED;
        }
        value = gestureActive;
      }
      return value;
    }
  }
  const tmpResult40 = isDockEnabled(mode[3]);
  Me.__closure = { dockJoinMorphOrigin, connected, dockMinimizeProgress, SHEET_MORPH_PHYSICS: isDockEnabled(mode[5]).SHEET_MORPH_PHYSICS, wrapperOffset: sharedValue, mode, VoicePanelModes: safeArea };
  Me.__workletHash = 16793844025178;
  Me.__initData = __initData4;
  function pe(arg0) {
    if (arg0) {
      const result = dockJoinMorphOrigin.set(null);
    }
  }
  pe.__closure = { dockJoinMorphOrigin };
  pe.__workletHash = 1489918984530;
  pe.__initData = __initData5;
  const animatedReaction4 = tmpResult40.useAnimatedReaction(Me, pe);
  const obj7 = { dockJoinMorphOrigin, connected, dockMinimizeProgress, SHEET_MORPH_PHYSICS: isDockEnabled(mode[5]).SHEET_MORPH_PHYSICS, wrapperOffset: sharedValue, mode, VoicePanelModes: safeArea };
  dockContentSwap = isDockEnabled(mode[3]).useSharedValue(0);
  const tmpResult41 = isDockEnabled(mode[3]);
  class Ee {
    constructor() {
      gestureActive = wrapperOffset.get().gestureActive;
      obj = mode;
      tmp2 = mode.get() === VoicePanelModes.DISMISSED;
      if (!tmp2) {
        tmp3 = gestureActive;
        if (gestureActive) {
          tmp3 = obj.get() === tmp.PANEL;
        }
        tmp2 = tmp3;
      }
      if (!tmp2) {
        tmp4 = !gestureActive;
        if (!gestureActive) {
          tmp5 = closure_12;
          value = closure_12.get();
          tmp7 = !value;
          if (value) {
            tmp8 = closure_16;
            tmp10 = closure_0;
            tmp11 = closure_1;
            value1 = closure_16.get();
            tmp7 = value1 <= closure_0(closure_1[5]).SHEET_MORPH_PHYSICS.restDisplacementThreshold;
          }
          tmp4 = tmp7;
        }
        tmp2 = tmp4;
      }
      return tmp2;
    }
  }
  const tmpResult42 = isDockEnabled(mode[3]);
  Ee.__closure = { wrapperOffset: sharedValue, mode, VoicePanelModes: safeArea, isDockExpanding, dockMinimizeProgress, SHEET_MORPH_PHYSICS: isDockEnabled(mode[5]).SHEET_MORPH_PHYSICS };
  Ee.__workletHash = 17390712868429;
  Ee.__initData = __initData6;
  function fe(arg0) {
    let tmp = arg0;
    if (arg0) {
      tmp = 0 !== dockContentSwap.get();
    }
    if (tmp) {
      const result = dockContentSwap.set(timing.withTiming(0, VoicePanelSheetMorph.DOCK_CONTENT_SWAP_TIMING));
    }
  }
  const obj8 = { wrapperOffset: sharedValue, mode, VoicePanelModes: safeArea, isDockExpanding, dockMinimizeProgress, SHEET_MORPH_PHYSICS: isDockEnabled(mode[5]).SHEET_MORPH_PHYSICS };
  fe.__closure = { dockContentSwap, withTiming: isDockEnabled(mode[6]).withTiming, DOCK_CONTENT_SWAP_TIMING: isDockEnabled(mode[5]).DOCK_CONTENT_SWAP_TIMING };
  fe.__workletHash = 1315911263720;
  fe.__initData = __initData7;
  const animatedReaction5 = tmpResult42.useAnimatedReaction(Ee, fe);
  return { beginDockEntry, committedMode, dockContentSwap, dockEntryProgress, dockHeight, dockJoinMorphOrigin, dockMinimizeProgress, dockPressProgress, dockPressed, handleDockSheetLayout, isDockConnected, isDockExpanding, sheetExitProgress };
};