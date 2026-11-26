// === Module 18219: VoicePanelDockStatusDisplay ===

// Module 18219 (VoicePanelDockStatusDisplay)
import _mod1654 from "module_1654" /* 1654 */;
import _modDef3431 from "module_3431" /* 3431 */;
import timing_timing from "timing/timing" /* 5253 */;
import spring_spring from "spring/spring" /* 5644 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CallStore from "CallStore" /* 6940 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import VoiceStateStore from "VoiceStateStore" /* 5691 */;

const _modDef1654 = _mod1654;

require = fn;
function StatusText(status) {
  status = status.status;
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const kind = status.kind;
  let stringResult = null;
  if ("channel" !== kind) {
    stringResult = null;
    if ("speaker" !== kind) {
      if ("joined" === kind) {
        const intl3 = require("util").intl;
        stringResult = intl3.string(_modDef3431.f9Cdb5);
      } else if ("left" === kind) {
        const intl2 = require("util").intl;
        stringResult = intl2.string(_modDef3431.aZoM2c);
      } else if ("streaming" === kind) {
        const intl = require("util").intl;
        stringResult = intl.string(_modDef3431.syN59i);
      }
    }
  }
  _require = tmp12;
  const tmp13 = _slicedToArray(noop.useState(status.kind), 2);
  let kind2 = tmp13[0];
  let tmp14 = tmp12;
  if (null != stringResult) {
    tmp14 = status.kind !== kind2;
  }
  if (tmp14) {
    tmp13[1](status.kind);
  }
  if (null != stringResult) {
    kind2 = status.kind;
  }
  let stringResult1 = null;
  if ("channel" !== kind2) {
    stringResult1 = null;
    if ("speaker" !== kind2) {
      if ("joined" === kind2) {
        const intl6 = require("util").intl;
        stringResult1 = intl6.string(_modDef3431.f9Cdb5);
      } else if ("left" === kind2) {
        const intl5 = require("util").intl;
        stringResult1 = intl5.string(_modDef3431.aZoM2c);
      } else if ("streaming" === kind2) {
        const intl4 = require("util").intl;
        stringResult1 = intl4.string(_modDef3431.syN59i);
      }
    }
  }
  const tmp = closure_16();
  let num = 0;
  if (null != stringResult) {
    num = 1;
  }
  const sharedValue = require("module_1654").useSharedValue(num);
  items = [sharedValue, null != stringResult];
  const effect = obj.useEffect(() => {
    if (c0) {
      const tmp2Result = _mod1654;
      let withDelayResult = tmp2Result.withDelay(70, timing_timing.withTiming(1, { duration: 175 }));
    } else {
      withDelayResult = spring_spring.withSpring(0, closure_13);
      const tmp2Result2 = spring_spring;
    }
    const result = _undefined2.set(withDelayResult);
  }, items);
  let obj2 = require("module_1654");
  const sharedValue1 = require("module_1654").useSharedValue(lineHeight);
  const tmp26Result = require("module_1654");
  const sharedValue2 = require("module_1654").useSharedValue(lineHeight);
  const items1 = [sharedValue1];
  const items2 = [sharedValue2];
  const callback = obj.useCallback((nativeEvent) => _undefined3.set(nativeEvent.nativeEvent.layout.height), items1);
  const callback1 = obj.useCallback((nativeEvent) => _undefined4.set(nativeEvent.nativeEvent.layout.height), items2);
  const tmp26Result4 = require("module_1654");
  const items3 = [closure_18, 1, sharedValue1, lineHeight, sharedValue, sharedValue2];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  [tmp35, tmp36, tmp37, tmp38, tmp39, tmp40] = items3;
  class VoicePanelDockStatusDisplayTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: null };
      result = closure_0 * closure_1.get() / closure_2;
      tmp2 = -closure_3.get();
      obj1.translateY = tmp2 * (closure_4.get() + result) / 2;
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items4 = [tmp36, tmp37, tmp38, tmp39, tmp40];
  VoicePanelDockStatusDisplayTsx1.__closure = items4;
  VoicePanelDockStatusDisplayTsx1.__workletHash = 4330268106479;
  VoicePanelDockStatusDisplayTsx1.__initData = tmp35;
  const animatedStyle = require("module_1654").useAnimatedStyle(VoicePanelDockStatusDisplayTsx1);
  const tmp26Result5 = require("module_1654");
  const items5 = [closure_19, sharedValue1, 1, lineHeight, require("module_1654").interpolate, sharedValue, 0.5, require("module_1654").Extrapolation];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49] = items5;
  class VoicePanelDockStatusDisplayTsx2 {
    constructor() {
      obj = { top: closure_0.get() * (1 + closure_1 / closure_2), opacity: null };
      items = [, ];
      items[0] = closure_5;
      items[1] = 1;
      obj.opacity = closure_3(closure_4.get(), items, [0, 1], closure_6.CLAMP);
      return obj;
    }
  }
  const items6 = [tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49];
  VoicePanelDockStatusDisplayTsx2.__closure = items6;
  VoicePanelDockStatusDisplayTsx2.__workletHash = 5280168993712;
  VoicePanelDockStatusDisplayTsx2.__initData = tmp42;
  const animatedStyle1 = require("module_1654").useAnimatedStyle(VoicePanelDockStatusDisplayTsx2);
  let obj3 = { style: animatedStyle, children: null };
  const obj4 = { onLayout: callback, children: null };
  if (null != status.userId) {
    const obj5 = { userId: status.userId, dimmed: null, ringing: null };
    let tmp56 = "left" === status.kind;
    if (!tmp56) {
      const dm = status.dm;
      let alone;
      if (dm != null) {
        alone = dm.alone;
      }
      tmp56 = true === alone;
    }
    obj5.dimmed = tmp56;
    const dm2 = status.dm;
    let ringing;
    if (dm2 != null) {
      ringing = dm2.ringing;
    }
    obj5.ringing = ringing;
    let tmp53Result = closure_11(tmp26(18221).DockUserTitle, obj5);
  } else {
    tmp53Result = closure_11(tmp26(18221).DockChannelTitle, {});
  }
  obj4.children = tmp53Result;
  const items7 = [closure_11(c5, obj4), ];
  let tmp53Result2 = null != stringResult1;
  if (tmp53Result2) {
    const obj6 = { style: null, onLayout: null, children: null };
    const items8 = [tmp.subtext, animatedStyle1];
    obj6.style = items8;
    obj6.onLayout = callback1;
    let str4 = "text-voice-connected";
    if ("left" === kind2) {
      str4 = "text-muted";
    }
    const obj7 = { variant: "body-xs/medium", color: str4, lineClamp: 1, children: stringResult1 };
    obj6.children = closure_11(tmp26(5634).Text, obj7);
    tmp53Result2 = closure_11(_modDef1654.View, obj6);
  }
  items7[1] = tmp53Result2;
  obj3.children = items7;
  return closure_12(_modDef1654.View, obj3);
}
function StatusLayer(exit) {
  ({ status, enter } = exit);
  _require = enter;
  exit = exit.exit;
  importDefault = exit;
  state = exit.state;
  dependencyMap = state;
  const cleanUp = exit.cleanUp;
  _slicedToArray = cleanUp;
  const onExited = exit.onExited;
  noop = onExited;
  c5 = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let sharedValue5;
  let sharedValue6;
  closure_13 = undefined;
  const tmp = closure_16();
  let str = status.userId;
  if (str == null) {
    str = "channel";
  }
  c5 = str;
  let num;
  if (enter != null) {
    num = enter.x;
  }
  if (num == null) {
    num = 0;
  }
  sharedValue = require("module_1654").useSharedValue(num);
  let obj = require("module_1654");
  let num2;
  if (enter != null) {
    num2 = enter.x;
  }
  if (num2 == null) {
    num2 = 0;
  }
  sharedValue1 = require("module_1654").useSharedValue(num2);
  const tmp2Result = require("module_1654");
  let num3;
  if (enter != null) {
    num3 = enter.y;
  }
  if (num3 == null) {
    num3 = 0;
  }
  sharedValue2 = require("module_1654").useSharedValue(num3);
  const tmp2Result8 = require("module_1654");
  let num4;
  if (enter != null) {
    num4 = enter.y;
  }
  if (num4 == null) {
    num4 = 0;
  }
  sharedValue3 = require("module_1654").useSharedValue(num4);
  const tmp2Result9 = require("module_1654");
  let num5 = 1;
  let num6 = 1;
  if (null != enter) {
    num6 = 0;
  }
  sharedValue4 = require("module_1654").useSharedValue(num6);
  const tmp2Result10 = require("module_1654");
  if (null != enter) {
    num5 = 0;
  }
  sharedValue5 = require("module_1654").useSharedValue(num5);
  const tmp2Result11 = require("module_1654");
  let tmp10 = enter;
  if (enter == null) {
    tmp10 = point;
  }
  sharedValue6 = require("module_1654").useSharedValue(tmp10.fadeStartProgress);
  let tmp12 = _slicedToArray(noop.useState(null == enter), 2);
  closure_13 = tmp12[1];
  items = [cleanUp, enter, exit, sharedValue4, sharedValue, sharedValue2, sharedValue6, onExited, state, str, sharedValue5, sharedValue1, sharedValue3];
  const effect = noop.useEffect(() => {
    const tmp3 = closure_2 === _undefined(_undefined3[17]).TransitionStates.YEETED;
    if (tmp3) {
      let tmp4 = c1;
    } else {
      tmp4 = _undefined;
      if (_undefined == null) {
        tmp4 = closure_1_17;
      }
    }
    _undefined = tmp4;
    if (tmp3) {
      const point1 = { x: null, y: null, fade: 0 };
      ({ x: obj2.x, y: obj2.y } = c1);
      let point2 = point1;
    } else {
      point2 = { x: 0, y: 0, fade: 1 };
    }
    c1 = point2;
    point = _undefined;
    let num;
    value = sharedValue.get();
    if (_undefined != null) {
      num = point.x;
    }
    if (num == null) {
      num = 0;
    }
    let tmp9 = value === num;
    if (tmp9) {
      let num2;
      const value2 = sharedValue2.get();
      if (point != null) {
        num2 = point.y;
      }
      if (num2 == null) {
        num2 = 0;
      }
      tmp9 = value2 === num2;
    }
    let tmp12 = tmp3;
    if (!tmp3) {
      tmp12 = tmp9;
    }
    function animateView(sharedValue, sharedValue2, sharedValue4, faceLagMs, VoicePanelDockStatusDisplayTsx3) {
      let num = 0;
      if (closure_2) {
        num = _undefined.delayMs + faceLagMs;
      }
      let num2 = 0;
      if (closure_2) {
        num2 = num + _undefined.fadeDelayMs;
      }
      const obj = _mod1654;
      const result = sharedValue.set(obj.withDelay(num, spring_spring.withSpring(_undefined2.x, _undefined.spring)));
      const obj3 = _mod1654;
      const result1 = sharedValue2.set(obj3.withDelay(num, spring_spring.withSpring(_undefined2.y, _undefined.spring)));
      const obj5 = _mod1654;
      const result2 = sharedValue4.set(obj5.withDelay(num2, timing_timing.withTiming(_undefined2.fade, closure_3, "respect-motion-settings", VoicePanelDockStatusDisplayTsx3)));
    }
    closure_2 = tmp12;
    closure_3 = { duration: tmp4.fadeMs, easing: tmp4.fadeEasing };
    let result = sharedValue6.set(tmp4.fadeStartProgress);
    if (tmp3) {
      items = [
        closure_1_21,
        tmp(_undefined3[18]).scheduleOnRN,
        function finishExit() {
            closure_3();
            _undefined5(_undefined6);
          }
      ];
      _undefined = undefined;
      c1 = undefined;
      [tmp31, tmp32, tmp33] = items;
      class VoicePanelDockStatusDisplayTsx3 {
        constructor(arg0) {
          if (true === arg0) {
            tmp = closure_0;
            tmp2 = closure_1;
            tmp3 = closure_0(closure_1);
          }
          return;
        }
      }
      const items1 = [tmp32, tmp33];
      VoicePanelDockStatusDisplayTsx3.__closure = items1;
      VoicePanelDockStatusDisplayTsx3.__workletHash = 4840412944787;
      VoicePanelDockStatusDisplayTsx3.__initData = tmp31;
      const faceLagMs = tmp4.faceLagMs;
      let tmp37;
      if (tmp4.textLagMs < tmp4.faceLagMs) {
        tmp37 = VoicePanelDockStatusDisplayTsx3;
      }
      animateView(sharedValue, sharedValue2, sharedValue4, faceLagMs, tmp37);
      const textLagMs = tmp4.textLagMs;
      let tmp47;
      if (tmp4.textLagMs >= tmp4.faceLagMs) {
        tmp47 = VoicePanelDockStatusDisplayTsx3;
      }
      animateView(sharedValue1, sharedValue3, sharedValue5, textLagMs, tmp47);
    } else {
      const items2 = [closure_1_22, tmp(_undefined3[18]).scheduleOnRN, closure_13];
      _undefined = undefined;
      c1 = undefined;
      class VoicePanelDockStatusDisplayTsx3 {
        constructor(arg0) {
          if (true === arg0) {
            tmp = closure_0;
            tmp2 = closure_1;
            tmp3 = closure_0(closure_1);
          }
          return;
        }
      }
      class VoicePanelDockStatusDisplayTsx4 {
        constructor(arg0) {
          if (true === arg0) {
            tmp = closure_0;
            tmp2 = closure_1;
            tmp3 = closure_0(closure_1, true);
          }
          return;
        }
      }
      const items3 = [tmp18, tmp19];
      VoicePanelDockStatusDisplayTsx4.__closure = items3;
      VoicePanelDockStatusDisplayTsx4.__workletHash = 16935496833998;
      VoicePanelDockStatusDisplayTsx4.__initData = tmp17;
      animateView(sharedValue, sharedValue2, sharedValue4, tmp4.faceLagMs, VoicePanelDockStatusDisplayTsx4);
      animateView(sharedValue1, sharedValue3, sharedValue5, tmp4.textLagMs);
    }
  }, items);
  const tmp2Result12 = require("module_1654");
  let items1 = [closure_23, require("module_1654").interpolate, sharedValue4, sharedValue6, require("module_1654").Extrapolation, sharedValue, sharedValue2];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items1;
  class VoicePanelDockStatusDisplayTsx5 {
    constructor() {
      obj = { opacity: null, transform: null };
      value = closure_1.get();
      items = [, ];
      items[0] = closure_2.get();
      items[1] = 1;
      obj.opacity = closure_0(value, items, [0, 1], closure_3.CLAMP);
      obj1 = { translateX: closure_4.get() };
      items1 = [, ];
      items1[0] = obj1;
      obj4 = { translateY: closure_5.get() };
      items1[1] = obj4;
      obj.transform = items1;
      return obj;
    }
  }
  let items2 = [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
  VoicePanelDockStatusDisplayTsx5.__closure = items2;
  VoicePanelDockStatusDisplayTsx5.__workletHash = 7517298836265;
  VoicePanelDockStatusDisplayTsx5.__initData = tmp14;
  const animatedStyle = require("module_1654").useAnimatedStyle(VoicePanelDockStatusDisplayTsx5);
  const tmp2Result13 = require("module_1654");
  let items3 = [closure_24, require("module_1654").interpolate, sharedValue5, sharedValue6, require("module_1654").Extrapolation, sharedValue1, sharedValue3];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items3;
  class VoicePanelDockStatusDisplayTsx6 {
    constructor() {
      obj = { opacity: null, transform: null };
      value = closure_1.get();
      items = [, ];
      items[0] = closure_2.get();
      items[1] = 1;
      obj.opacity = closure_0(value, items, [0, 1], closure_3.CLAMP);
      obj1 = { translateX: closure_4.get() };
      items1 = [, ];
      items1[0] = obj1;
      obj4 = { translateY: closure_5.get() };
      items1[1] = obj4;
      obj.transform = items1;
      return obj;
    }
  }
  const items4 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
  VoicePanelDockStatusDisplayTsx6.__closure = items4;
  VoicePanelDockStatusDisplayTsx6.__workletHash = 17078561971370;
  VoicePanelDockStatusDisplayTsx6.__initData = tmp22;
  let obj2 = { style: tmp.layer, pointerEvents: "none", children: null };
  const animatedStyle1 = require("module_1654").useAnimatedStyle(VoicePanelDockStatusDisplayTsx6);
  let obj3 = { style: null, children: null };
  const items5 = [tmp.tile, animatedStyle];
  obj3.style = items5;
  if (null != status.userId) {
    let obj4 = { userId: status.userId, dimmed: null, entered: null };
    let tmp35 = "left" === status.kind;
    if (tmp35) {
      tmp35 = null == status.dm;
    }
    obj4.dimmed = tmp35;
    obj4.entered = tmp12[0];
    let tmp32Result = tmp32(tmp2(18221).DockFace, obj4);
  } else {
    let obj5 = { streaming: status.streaming };
    tmp32Result = tmp32(tmp2(18221).DockChannelIcon, obj5);
  }
  obj3.children = tmp32Result;
  const items6 = [sharedValue5(_modDef1654.View, obj3), ];
  let obj6 = { style: null, children: sharedValue5(StatusText, { status }) };
  const items7 = [tmp.textSlot, animatedStyle1];
  obj6.style = items7;
  items6[1] = sharedValue5(_modDef1654.View, obj6);
  obj2.children = items6;
  return sharedValue6(c5, obj2);
}
function getStatusItemKey(status) {
  let str = status.status.userId;
  if (str == null) {
    str = "channel";
  }
  return str;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const VoicePanelDockStatusStore = fn(18220);
({ useDockHasStreamers: closure_9, useDockSubject: closure_10 } = VoicePanelDockStatusStore);
const VoicePanelDockConstants = fn(11805);
({ DOCK_TILE_SIZE, DOCK_GAP } = VoicePanelDockConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const spring = { mass: 0.6, stiffness: 560, damping: 24 };
fn(5634).TextStyleSheet["body-md/medium"].lineHeight;
const lineHeight = fn(5634).TextStyleSheet["body-xs/medium"].lineHeight;
const createStyles = fn(5043);
let obj = { display: { flexGrow: 1, flexShrink: 1, height: DOCK_TILE_SIZE }, layer: null, tile: null, textSlot: null, subtext: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.flexDirection = "row";
obj3.alignItems = "center";
obj3.gap = DOCK_GAP;
obj.layer = obj3;
obj.tile = { width: DOCK_TILE_SIZE, height: DOCK_TILE_SIZE, alignItems: "center", justifyContent: "center" };
obj.textSlot = { flexGrow: 1, flexShrink: 1, alignSelf: "stretch", justifyContent: "center" };
obj.subtext = { position: "absolute", left: 0, right: 0, justifyContent: "center" };
let closure_16 = createStyles.createStyles(obj);
let point = { x: 0, y: 0, delayMs: 0, faceLagMs: 0, textLagMs: 0, fadeStartProgress: 0.5, fadeMs: 120, fadeDelayMs: 0, fadeEasing: null, spring: null };
let Easing = fn(1654).Easing;
point.fadeEasing = Easing.inOut(fn(1654).Easing.quad);
point.spring = { mass: 0.5, stiffness: 300, damping: 15 };
let closure_18 = { code: "(function VoicePanelDockStatusDisplayTsx1(){let[SUBTEXT_GAP,nameHeight,NAME_LINE_HEIGHT,progress,subtextHeight]=this.__closure;const gap=SUBTEXT_GAP*nameHeight.get()/NAME_LINE_HEIGHT;return{transform:[{translateY:-progress.get()*(subtextHeight.get()+gap)/2}]};})" };
let closure_19 = { code: "(function VoicePanelDockStatusDisplayTsx2(){let[nameHeight,SUBTEXT_GAP,NAME_LINE_HEIGHT,interpolate,progress,SUBTEXT_FADE_START,Extrapolation]=this.__closure;return{top:nameHeight.get()*(1+SUBTEXT_GAP/NAME_LINE_HEIGHT),opacity:interpolate(progress.get(),[SUBTEXT_FADE_START,1],[0,1],Extrapolation.CLAMP)};})" };
let closure_21 = { code: "(function VoicePanelDockStatusDisplayTsx3(finished){let[scheduleOnRN,finishExit]=this.__closure;if(finished===true){scheduleOnRN(finishExit);}})" };
let closure_22 = { code: "(function VoicePanelDockStatusDisplayTsx4(finished){let[scheduleOnRN,setFaceEntered]=this.__closure;if(finished===true){scheduleOnRN(setFaceEntered,true);}})" };
let closure_23 = { code: "(function VoicePanelDockStatusDisplayTsx5(){let[interpolate,faceFade,fadeStartProgress,Extrapolation,faceX,faceY]=this.__closure;return{opacity:interpolate(faceFade.get(),[fadeStartProgress.get(),1],[0,1],Extrapolation.CLAMP),transform:[{translateX:faceX.get()},{translateY:faceY.get()}]};})" };
let closure_24 = { code: "(function VoicePanelDockStatusDisplayTsx6(){let[interpolate,textFade,fadeStartProgress,Extrapolation,textX,textY]=this.__closure;return{opacity:interpolate(textFade.get(),[fadeStartProgress.get(),1],[0,1],Extrapolation.CLAMP),transform:[{translateX:textX.get()},{translateY:textY.get()}]};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockStatusDisplay.tsx");

export default noop.memo(function VoicePanelDockStatusDisplay() {
  const channelId = first1.useContext(stateFromStores(obj5[19])).channelId;
  obj5 = channelId;
  const tmp3 = closure_10(channelId);
  const tmp = closure_16();
  const tmp4 = closure_9(channelId);
  items = [ChannelStore];
  const items1 = [channelId];
  stateFromStores = obj5(obj5[20]).useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(obj5);
    let isDMResult;
    if (channel != null) {
      isDMResult = channel.isDM();
    }
    let recipientId = null;
    if (true === isDMResult) {
      recipientId = channel.getRecipientId();
    }
    return recipientId;
  }, items1);
  const obj2 = obj5(obj5[20]);
  const items2 = [onExited];
  const items3 = [channelId, stateFromStores];
  const stateFromStores1 = obj5(obj5[20]).useStateFromStores(items2, () => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      const call = CallStore.getCall(obj5);
      let hasItem;
      if (call != null) {
        const ringing = call.ringing;
        hasItem = ringing.includes(tmp);
      }
      tmp2 = true === hasItem;
    }
    return tmp2;
  }, items3);
  const obj3 = obj5(obj5[20]);
  const items4 = [VoiceStateStore];
  const items5 = [channelId, stateFromStores];
  const stateFromStores2 = obj5(obj5[20]).useStateFromStores(items4, () => {
    let isInChannelResult = null != stateFromStores;
    if (isInChannelResult) {
      isInChannelResult = VoiceStateStore.isInChannel(obj5, tmp);
    }
    return isInChannelResult;
  }, items5);
  let str;
  if (tmp3 != null) {
    str = tmp3.kind;
  }
  if (str == null) {
    str = "channel";
  }
  obj5 = { kind: str, userId: null, streaming: null, dm: null };
  let userId;
  if (tmp3 != null) {
    userId = tmp3.userId;
  }
  if (userId == null) {
    userId = stateFromStores;
  }
  obj5.userId = userId;
  obj5.streaming = tmp4;
  let tmp10 = null;
  if (null != stateFromStores) {
    let tmp11 = stateFromStores1;
    if (stateFromStores1) {
      tmp11 = !stateFromStores2;
    }
    const obj6 = { ringing: tmp11, alone: null };
    let tmp12 = !stateFromStores1;
    if (!stateFromStores1) {
      tmp12 = !stateFromStores2;
    }
    obj6.alone = tmp12;
    tmp10 = obj6;
  }
  obj5.dm = tmp10;
  const tmp13 = first(first1.useState(() => ({ status: obj5, enter: null })), 2);
  first = tmp13[0];
  const obj4 = obj5(obj5[20]);
  [arr7, tmp17] = first(first1.useState(() => {
    if ("channel" === obj5.kind) {
      items = [];
    } else {
      let str = tmp.userId;
      if (str == null) {
        str = "channel";
      }
      items = [str];
    }
    return items;
  }), 2);
  const tmp18 = first(first1.useState(() => new Map()), 2);
  first1 = tmp18[0];
  closure_5 = tmp20;
  onExited = obj.useCallback((arg0) => {
    closure_0 = arg0;
    closure_5((arg0) => {
      const map = new Map(arg0);
      map.delete(closure_0);
      return map;
    });
  }, []);
  const status = first.status;
  let tmp22 = status.kind === obj5.kind && status.userId === obj5.userId && status.streaming === obj5.streaming;
  if (tmp22) {
    const dm = status.dm;
    let ringing;
    if (dm != null) {
      ringing = dm.ringing;
    }
    const dm2 = obj5.dm;
    let ringing1;
    if (dm2 != null) {
      ringing1 = dm2.ringing;
    }
    tmp22 = ringing === ringing1;
  }
  if (tmp22) {
    const dm3 = status.dm;
    let alone;
    if (dm3 != null) {
      alone = dm3.alone;
    }
    const dm4 = obj5.dm;
    let alone1;
    if (dm4 != null) {
      alone1 = dm4.alone;
    }
    tmp22 = alone === alone1;
  }
  if (!tmp22) {
    let str2 = first.status.userId;
    if (str2 == null) {
      str2 = "channel";
    }
    let str3 = obj5.userId;
    if (str3 == null) {
      str3 = "channel";
    }
    if (str2 === str3) {
      const obj7 = {};
      const merged = Object.assign(first);
      obj7.status = obj5;
      tmp15(obj7);
    } else {
      let kind = first.status;
      if ("channel" === obj5.kind) {
        const obj8 = { recent: [], down: false };
        let obj12 = obj8;
      } else if ("joined" === obj5.kind) {
        const items6 = [];
        let str8 = obj5.userId;
        if (str8 == null) {
          str8 = "channel";
        }
        const obj9 = { recent: null, down: true };
        items6[HermesBuiltin.arraySpread(arr7.filter((item) => {
          let str = obj5.userId;
          if (str == null) {
            str = "channel";
          }
          return item !== str;
        }), 0)] = str8;
        obj9.recent = items6;
        obj12 = obj9;
        const arraySpreadResult = HermesBuiltin.arraySpread(arr7.filter((item) => {
          let str = obj5.userId;
          if (str == null) {
            str = "channel";
          }
          return item !== str;
        }), 0);
      } else {
        let num = -1;
        if ("channel" !== kind.kind) {
          let str4 = kind.userId;
          if (str4 == null) {
            str4 = "channel";
          }
          num = arr7.indexOf(str4);
        }
        let str5 = obj5.userId;
        if (str5 == null) {
          str5 = "channel";
        }
        const index = arr7.indexOf(str5);
        if (-1 === index) {
          if ("left" === obj5.kind) {
            const obj10 = { recent: arr7, down: null };
            kind = kind.kind;
            obj10.down = "channel" === kind;
            let obj11 = obj10;
          } else {
            const items7 = [];
            let str7 = obj5.userId;
            if (str7 == null) {
              str7 = "channel";
            }
            obj11 = { recent: null, down: true };
            items7[HermesBuiltin.arraySpread(arr7, 0)] = str7;
            obj11.recent = items7;
            const arraySpreadResult2 = HermesBuiltin.arraySpread(arr7, 0);
          }
        } else {
          obj12 = { recent: arr7, down: index > num };
        }
      }
      let num4 = -12;
      if (obj12.down) {
        num4 = 12;
      }
      if ("joined" === obj5.kind) {
        const obj13 = { enter: null, exit: null };
        const obj14 = {};
        const merged1 = Object.assign(point);
        obj14.x = -24;
        obj14.delayMs = 100;
        obj14.faceLagMs = 80;
        obj14.fadeStartProgress = 0.3333333333333333;
        obj14.spring = spring;
        obj13.enter = obj14;
        const obj15 = {};
        const merged2 = Object.assign(point);
        obj15.y = -num4;
        obj13.exit = obj15;
        let obj19 = obj13;
      } else if ("left" !== first.status.kind) {
        const obj16 = { enter: null, exit: null };
        const obj17 = {};
        const merged3 = Object.assign(point);
        obj17.y = num4;
        obj17.textLagMs = 40;
        obj17.fadeStartProgress = 0;
        obj17.fadeMs = 89.99999999999999;
        obj17.fadeDelayMs = 110.00000000000001;
        obj16.enter = obj17;
        const obj18 = {};
        const merged4 = Object.assign(point);
        obj18.y = -num4;
        obj18.textLagMs = 40;
        obj18.fadeStartProgress = 0;
        obj18.fadeMs = 90;
        const Easing = tmp5(tmp2[11]).Easing;
        obj18.fadeEasing = Easing.out(tmp5(tmp2[11]).Easing.quad);
        obj16.exit = obj18;
        obj19 = obj16;
      } else {
        obj19 = { enter: null, exit: null };
        const obj20 = {};
        const merged5 = Object.assign(point);
        obj20.y = num4;
        obj20.delayMs = 400;
        obj19.enter = obj20;
        const obj21 = {};
        const merged6 = Object.assign(point);
        obj21.x = -24;
        obj21.textLagMs = 100;
        obj21.spring = { mass: 0.5, damping: 16, stiffness: 200 };
        obj19.exit = obj21;
      }
      ({ enter, exit } = obj19);
      tmp17(obj12.recent);
      const _Map = Map;
      let map = new Map(first1);
      let str11 = first.status.userId;
      if (str11 == null) {
        str11 = "channel";
      }
      tmp20(map.set(str11, exit));
      const obj22 = { status: obj5, enter };
      tmp15(obj22);
    }
  }
  const items8 = [first];
  const items9 = [first1, onExited];
  const memo = obj.useMemo(() => {
    items = [first];
    return items;
  }, items8);
  const obj23 = { style: tmp.display, children: null };
  const callback1 = obj.useCallback((arg0, status, state, cleanUp) => {
    const obj = { status: status.status, enter: status.enter, exit: null, state: null, cleanUp: null, onExited: null };
    value = first1.get(arg0);
    if (value == null) {
      value = point;
    }
    obj.exit = value;
    obj.state = state;
    obj.cleanUp = cleanUp;
    obj.onExited = onExited;
    return closure_2_11(StatusLayer, obj, arg0);
  }, items9);
  obj23.children = closure_11(obj5(obj5[17]).TransitionGroup, { items: memo, renderItem: callback1, getItemKey: getStatusItemKey });
  return closure_11(closure_5, obj23);
});