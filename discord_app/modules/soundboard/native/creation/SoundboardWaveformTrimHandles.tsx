// discord_app/modules/soundboard/native/creation/SoundboardWaveformTrimHandles.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1654 from "../../../../../_runtime/metro/01654__.js";
import LegacyBaseButton from "../../../../../_runtime/05303_LegacyBaseButton.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const _modDef1654 = _mod1654;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let c8 = 0.05;
let closure_9 = 1 / fn(20036).WAVEFORM_BAR_COUNT;
let items = [{ name: "increment" }, { name: "decrement" }];
const createStyles = fn(5043);
let obj2 = {
  container: { position: "absolute", top: 0, left: 0 },
  touchTarget: { position: "absolute", top: 0, bottom: 0, width: 44, alignItems: "center", justifyContent: "center" },
  handle: null,
  disabled: null,
};
let size = {
  width: 6,
  height: "100%",
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
};
obj2.handle = size;
obj2.disabled = { opacity: 0.5 };
let closure_11 = createStyles.createStyles(obj2);
let closure_12 = {
  code: "(function SoundboardWaveformTrimHandlesTsx1(){let[startGestureBeginRatio,startRatio,lastNotifiedStartRatio]=this.__closure;startGestureBeginRatio.set(startRatio.get());lastNotifiedStartRatio.set(startRatio.get());})",
};
let closure_13 = {
  code: "(function SoundboardWaveformTrimHandlesTsx2(event){let[startGestureBeginRatio,width,endRatio,MIN_RATIO_GAP,startRatio,lastNotifiedStartRatio,NOTIFY_STEP_RATIO,runOnJS,notify]=this.__closure;const next=Math.min(Math.max(startGestureBeginRatio.get()+event.translationX/width,0),endRatio.get()-MIN_RATIO_GAP);startRatio.set(next);if(Math.abs(next-lastNotifiedStartRatio.get())>=NOTIFY_STEP_RATIO){lastNotifiedStartRatio.set(next);runOnJS(notify)();}})",
};
let closure_14 = {
  code: "(function SoundboardWaveformTrimHandlesTsx3(){let[runOnJS,notify]=this.__closure;runOnJS(notify)();})",
};
let closure_15 = {
  code: "(function SoundboardWaveformTrimHandlesTsx4(){let[endGestureBeginRatio,endRatio,lastNotifiedEndRatio]=this.__closure;endGestureBeginRatio.set(endRatio.get());lastNotifiedEndRatio.set(endRatio.get());})",
};
let closure_16 = {
  code: "(function SoundboardWaveformTrimHandlesTsx5(event){let[endGestureBeginRatio,width,startRatio,MIN_RATIO_GAP,endRatio,lastNotifiedEndRatio,NOTIFY_STEP_RATIO,runOnJS,notify]=this.__closure;const next=Math.max(Math.min(endGestureBeginRatio.get()+event.translationX/width,1),startRatio.get()+MIN_RATIO_GAP);endRatio.set(next);if(Math.abs(next-lastNotifiedEndRatio.get())>=NOTIFY_STEP_RATIO){lastNotifiedEndRatio.set(next);runOnJS(notify)();}})",
};
let closure_17 = {
  code: "(function SoundboardWaveformTrimHandlesTsx6(){let[runOnJS,notify]=this.__closure;runOnJS(notify)();})",
};
let closure_18 = {
  code: "(function SoundboardWaveformTrimHandlesTsx7(){let[startRatio,width,HANDLE_TOUCH_WIDTH]=this.__closure;return{left:startRatio.get()*width-HANDLE_TOUCH_WIDTH/2};})",
};
let closure_19 = {
  code: "(function SoundboardWaveformTrimHandlesTsx8(){let[endRatio,width,HANDLE_TOUCH_WIDTH]=this.__closure;return{left:endRatio.get()*width-HANDLE_TOUCH_WIDTH/2};})",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/creation/SoundboardWaveformTrimHandles.tsx");

export default function SoundboardWaveformTrimHandles(height) {
  const width = height.width;
  _require = width;
  const startRatio = height.startRatio;
  importDefault = startRatio;
  const endRatio = height.endRatio;
  dependencyMap = endRatio;
  const onChange = height.onChange;
  let flag = height.disabled;
  if (flag === undefined) {
    flag = false;
  }
  c9 = undefined;
  const tmp = closure_11();
  const sharedValue = require("../../../../../_runtime/metro/01654__.js").useSharedValue(0);
  const obj = require("../../../../../_runtime/metro/01654__.js");
  const sharedValue1 = require("../../../../../_runtime/metro/01654__.js").useSharedValue(0);
  const obj2 = require("../../../../../_runtime/metro/01654__.js");
  const sharedValue2 = require("../../../../../_runtime/metro/01654__.js").useSharedValue(0);
  const obj3 = require("../../../../../_runtime/metro/01654__.js");
  const sharedValue3 = require("../../../../../_runtime/metro/01654__.js").useSharedValue(1);
  const obj4 = require("../../../../../_runtime/metro/01654__.js");
  const obj5 = { start: startRatio.get(), end: endRatio.get() };
  [tmp9, c9] = onChange(flag.useState({ start: startRatio.get(), end: endRatio.get() }), 2);
  items = [onChange, startRatio, endRatio];
  const accessibilityActions = flag.useCallback(() => {
    _undefined4({ start: _undefined2.get(), end: _undefined3.get() });
    value = _undefined2.get();
    onChange(value, _undefined3.get());
  }, items);
  let items1 = [width, flag, startRatio, endRatio, accessibilityActions, sharedValue, sharedValue2];
  let items2 = [width, flag, startRatio, endRatio, accessibilityActions, sharedValue1, sharedValue3];
  const memo = flag.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    items = [closure_12, sharedValue, c1, sharedValue2];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp6, tmp7, tmp8, tmp9] = items;
    class SoundboardWaveformTrimHandlesTsx1 {
      constructor() {
        result = closure_0.set(closure_1.get());
        result1 = closure_2.set(closure_1.get());
        return;
      }
    }
    const items1 = [tmp7, tmp8, tmp9];
    SoundboardWaveformTrimHandlesTsx1.__closure = items1;
    SoundboardWaveformTrimHandlesTsx1.__workletHash = 11006989108153;
    SoundboardWaveformTrimHandlesTsx1.__initData = tmp6;
    const enabledResult = Gesture.Pan().enabled(!flag);
    const tmp4 = c1;
    const items2 = [closure_13, sharedValue, c0, c2, c8, tmp4, sharedValue2, closure_9, _mod1654.runOnJS, callback];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items2;
    class SoundboardWaveformTrimHandlesTsx2 {
      constructor(arg0) {
        bound = Math.max(closure_0.get() + arg0.translationX / closure_1, 0);
        bound1 = Math.min(bound, closure_2.get() - closure_3);
        result = closure_4.set(bound1);
        obj = closure_5;
        if (Math.abs(bound1 - closure_5.get()) >= closure_6) {
          result1 = obj.set(bound1);
          tmp5 = closure_7;
          tmp6 = closure_8;
          tmp7 = closure_7(closure_8)();
        }
        return;
      }
    }
    const items3 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
    SoundboardWaveformTrimHandlesTsx2.__closure = items3;
    SoundboardWaveformTrimHandlesTsx2.__workletHash = 284697789328;
    SoundboardWaveformTrimHandlesTsx2.__initData = tmp11;
    const onBeginResult = Gesture.Pan().enabled(!flag).onBegin(SoundboardWaveformTrimHandlesTsx1);
    const items4 = [closure_14, _mod1654.runOnJS, callback];
    c0 = undefined;
    c1 = undefined;
    [tmp21, tmp22, tmp23] = items4;
    class SoundboardWaveformTrimHandlesTsx3 {
      constructor() {
        tmp = closure_0(closure_1)();
        return;
      }
    }
    const items5 = [tmp22, tmp23];
    SoundboardWaveformTrimHandlesTsx3.__closure = items5;
    SoundboardWaveformTrimHandlesTsx3.__workletHash = 17317174796525;
    SoundboardWaveformTrimHandlesTsx3.__initData = tmp21;
    return Gesture.Pan()
      .enabled(!flag)
      .onBegin(SoundboardWaveformTrimHandlesTsx1)
      .onUpdate(SoundboardWaveformTrimHandlesTsx2)
      .onFinalize(SoundboardWaveformTrimHandlesTsx3);
  }, items1);
  const memo1 = flag.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    items = [closure_15, sharedValue1, c2, sharedValue3];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp6, tmp7, tmp8, tmp9] = items;
    class SoundboardWaveformTrimHandlesTsx4 {
      constructor() {
        result = closure_0.set(closure_1.get());
        result1 = closure_2.set(closure_1.get());
        return;
      }
    }
    const items1 = [tmp7, tmp8, tmp9];
    SoundboardWaveformTrimHandlesTsx4.__closure = items1;
    SoundboardWaveformTrimHandlesTsx4.__workletHash = 6600976471827;
    SoundboardWaveformTrimHandlesTsx4.__initData = tmp6;
    const enabledResult = Gesture.Pan().enabled(!flag);
    const tmp4 = c2;
    const items2 = [closure_16, sharedValue1, c0, c1, c8, tmp4, sharedValue3, closure_9, _mod1654.runOnJS, callback];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items2;
    class SoundboardWaveformTrimHandlesTsx5 {
      constructor(arg0) {
        bound = Math.min(closure_0.get() + arg0.translationX / closure_1, 1);
        bound1 = Math.max(bound, closure_2.get() + closure_3);
        result = closure_4.set(bound1);
        obj = closure_5;
        if (Math.abs(bound1 - closure_5.get()) >= closure_6) {
          result1 = obj.set(bound1);
          tmp5 = closure_7;
          tmp6 = closure_8;
          tmp7 = closure_7(closure_8)();
        }
        return;
      }
    }
    const items3 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
    SoundboardWaveformTrimHandlesTsx5.__closure = items3;
    SoundboardWaveformTrimHandlesTsx5.__workletHash = 16740779483743;
    SoundboardWaveformTrimHandlesTsx5.__initData = tmp11;
    const onBeginResult = Gesture.Pan().enabled(!flag).onBegin(SoundboardWaveformTrimHandlesTsx4);
    const items4 = [closure_17, _mod1654.runOnJS, callback];
    c0 = undefined;
    c1 = undefined;
    [tmp21, tmp22, tmp23] = items4;
    class SoundboardWaveformTrimHandlesTsx6 {
      constructor() {
        tmp = closure_0(closure_1)();
        return;
      }
    }
    const items5 = [tmp22, tmp23];
    SoundboardWaveformTrimHandlesTsx6.__closure = items5;
    SoundboardWaveformTrimHandlesTsx6.__workletHash = 14476732501160;
    SoundboardWaveformTrimHandlesTsx6.__initData = tmp21;
    return Gesture.Pan()
      .enabled(!flag)
      .onBegin(SoundboardWaveformTrimHandlesTsx4)
      .onUpdate(SoundboardWaveformTrimHandlesTsx5)
      .onFinalize(SoundboardWaveformTrimHandlesTsx6);
  }, items2);
  const tmp8 = onChange(flag.useState({ start: startRatio.get(), end: endRatio.get() }), 2);
  let items3 = [closure_18, startRatio, width, 44];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp13, tmp14, tmp15, tmp16] = items3;
  class SoundboardWaveformTrimHandlesTsx7 {
    constructor() {
      obj = { left: closure_0.get() * closure_1 - closure_2 / 2 };
      return obj;
    }
  }
  let items4 = [tmp14, tmp15, tmp16];
  SoundboardWaveformTrimHandlesTsx7.__closure = items4;
  SoundboardWaveformTrimHandlesTsx7.__workletHash = 13043813667435;
  SoundboardWaveformTrimHandlesTsx7.__initData = tmp13;
  const animatedStyle = require("../../../../../_runtime/metro/01654__.js").useAnimatedStyle(
    SoundboardWaveformTrimHandlesTsx7,
  );
  const obj6 = require("../../../../../_runtime/metro/01654__.js");
  let items5 = [closure_19, endRatio, width, 44];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp18, tmp19, tmp20, tmp21] = items5;
  class SoundboardWaveformTrimHandlesTsx8 {
    constructor() {
      obj = { left: closure_0.get() * closure_1 - closure_2 / 2 };
      return obj;
    }
  }
  const items6 = [tmp19, tmp20, tmp21];
  SoundboardWaveformTrimHandlesTsx8.__closure = items6;
  SoundboardWaveformTrimHandlesTsx8.__workletHash = 15443910628516;
  SoundboardWaveformTrimHandlesTsx8.__initData = tmp18;
  const items7 = [tmp.container, { width, height: height.height }];
  let disabled = null;
  const animatedStyle1 = require("../../../../../_runtime/metro/01654__.js").useAnimatedStyle(
    SoundboardWaveformTrimHandlesTsx8,
  );
  if (flag) {
    disabled = tmp.disabled;
  }
  const obj7 = { style: items7, pointerEvents: null, children: null };
  items7[2] = disabled;
  let str = "box-none";
  if (flag) {
    str = "none";
  }
  obj7.pointerEvents = str;
  const obj8 = { gesture: memo, children: null };
  const obj9 = {
    style: null,
    accessible: true,
    accessibilityRole: "adjustable",
    accessibilityLabel: null,
    accessibilityState: null,
    accessibilityValue: null,
    accessibilityActions: null,
    onAccessibilityAction: null,
    children: null,
  };
  const items8 = [tmp.touchTarget, animatedStyle];
  obj9.style = items8;
  const intl = tmp2(1112).intl;
  obj9.accessibilityLabel = intl.string(require("util").t["+BTvw8"]);
  obj9.accessibilityState = { disabled: flag };
  const range = { min: 0, max: 100, now: Math.round(100 * tmp9.start) };
  obj9.accessibilityValue = range;
  obj9.accessibilityActions = accessibilityActions;
  obj9.onAccessibilityAction = function handleStartAccessibilityAction(nativeEvent) {
    if (!flag) {
      if ("increment" === nativeEvent.nativeEvent.actionName) {
        let tmp3 = closure_9;
      } else {
        tmp3 = -closure_9;
      }
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.max(_undefined2.get() + tmp3, 0);
      const result = _undefined2.set(Math.min(bound, _undefined3.get() - c8));
      callback();
    }
  };
  obj9.children = sharedValue1(sharedValue, { style: tmp.handle });
  obj8.children = sharedValue1(_modDef1654.View, obj9);
  const items9 = [sharedValue1(require("LegacyBaseButton").GestureDetector, obj8)];
  const obj11 = { gesture: memo1, children: null };
  const obj12 = {
    style: null,
    accessible: true,
    accessibilityRole: "adjustable",
    accessibilityLabel: null,
    accessibilityState: null,
    accessibilityValue: null,
    accessibilityActions: null,
    onAccessibilityAction: null,
    children: null,
  };
  const items10 = [tmp.touchTarget, animatedStyle1];
  obj12.style = items10;
  const intl2 = tmp2(1112).intl;
  obj12.accessibilityLabel = intl2.string(require("util").t.bBgBYo);
  obj12.accessibilityState = { disabled: flag };
  const range1 = { min: 0, max: 100, now: Math.round(100 * tmp9.end) };
  obj12.accessibilityValue = range1;
  obj12.accessibilityActions = accessibilityActions;
  obj12.onAccessibilityAction = function handleEndAccessibilityAction(nativeEvent) {
    if (!flag) {
      if ("increment" === nativeEvent.nativeEvent.actionName) {
        let tmp3 = closure_9;
      } else {
        tmp3 = -closure_9;
      }
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.min(_undefined3.get() + tmp3, 1);
      const result = _undefined3.set(Math.max(bound, _undefined2.get() + c8));
      callback();
    }
  };
  obj12.children = sharedValue1(sharedValue, { style: tmp.handle });
  obj11.children = sharedValue1(_modDef1654.View, obj12);
  items9[1] = sharedValue1(require("LegacyBaseButton").GestureDetector, obj11);
  obj7.children = items9;
  return sharedValue2(sharedValue, obj7);
}
