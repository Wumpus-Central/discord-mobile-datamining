// _runtime/15808_ReanimatedNativeStackScreen.js
import _mod1631 from "metro/01631__.js";
import _mod1653 from "metro/01653__.js";
import _modDef15809 from "metro/15809__.js";
import _modDef15810 from "metro/15810__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import noop from "metro/00019__.js";

const module_1653 = _mod1653;

require = fn;
let closure_3 = ["children"];
const Platform = fn(17).Platform;
const jsx = fn(21).jsx;
let closure_7 = module_1653.createAnimatedComponent(fn(5885).InnerScreen);
let closure_8 = {
  code: "(function pnpm_ReanimatedNativeStackScreenTsx1(event){let[progress,closing,goingForward]=this.__closure;progress.value=event.progress;closing.value=event.closing;goingForward.value=event.goingForward;})",
};
let closure_9 = {
  code: "(function pnpm_ReanimatedNativeStackScreenTsx2(event){let[cachedHeaderHeight,headerHeight]=this.__closure;if(event.headerHeight!==cachedHeaderHeight.current){headerHeight.value=event.headerHeight;cachedHeaderHeight.current=event.headerHeight;}})",
};
const forwardRefResult = noop.forwardRef((children, ref) => {
  const tmp = _objectWithoutProperties(children, closure_3);
  ({ stackPresentation, hasLargeHeader } = tmp);
  const safeAreaFrame = _mod1631.useSafeAreaFrame();
  let y = _mod1631.useSafeAreaInsets().top;
  let flag = tmp.statusBarTranslucent;
  if (flag == null) {
    flag = false;
  }
  if (!flag) {
    y = safeAreaFrame.y;
  }
  const sum = 56 + y;
  ref = noop.useRef(sum);
  const sharedValue = _mod1653.useSharedValue(sum);
  const tmp2Result = _mod1653;
  const sharedValue1 = _mod1653.useSharedValue(0);
  const tmp2Result6 = _mod1653;
  const sharedValue2 = _mod1653.useSharedValue(0);
  const tmp2Result7 = _mod1653;
  const sharedValue3 = _mod1653.useSharedValue(0);
  const obj3 = { ref, onTransitionProgressReanimated: null, onHeaderHeightChangeReanimated: null };
  const tmp2Result8 = _mod1653;
  items = [closure_8, sharedValue1, sharedValue2, sharedValue3];
  c2 = undefined;
  [tmp13, tmp14, tmp15, tmp16] = items;
  function pnpm_ReanimatedNativeStackScreenTsx1(progress) {
    c0.value = progress.progress;
    c1.value = progress.closing;
    c2.value = progress.goingForward;
  }
  const items1 = [tmp14, tmp15, tmp16];
  pnpm_ReanimatedNativeStackScreenTsx1.__closure = items1;
  pnpm_ReanimatedNativeStackScreenTsx1.__workletHash = 3756868132238;
  pnpm_ReanimatedNativeStackScreenTsx1.__initData = tmp13;
  obj3.onTransitionProgressReanimated = _mod1653.useEvent(pnpm_ReanimatedNativeStackScreenTsx1, [
    "onTransitionProgress",
  ]);
  const tmp2Result9 = _mod1653;
  const items2 = [closure_9, ref, sharedValue];
  c0 = undefined;
  c1 = undefined;
  [tmp17, tmp18, tmp19] = items2;
  function pnpm_ReanimatedNativeStackScreenTsx2(headerHeight) {
    if (headerHeight.headerHeight !== _undefined.current) {
      ({ headerHeight: c1.value, headerHeight: tmp.current } = headerHeight);
    }
  }
  const items3 = [tmp18, tmp19];
  pnpm_ReanimatedNativeStackScreenTsx2.__closure = items3;
  pnpm_ReanimatedNativeStackScreenTsx2.__workletHash = 7813079638875;
  pnpm_ReanimatedNativeStackScreenTsx2.__initData = tmp17;
  obj3.onHeaderHeightChangeReanimated = _mod1653.useEvent(pnpm_ReanimatedNativeStackScreenTsx2, [
    "onHeaderHeightChange",
  ]);
  const merged = Object.assign(tmp);
  const obj4 = {
    value: sharedValue,
    children: jsx(_modDef15810.Provider, {
      value: { progress: sharedValue1, closing: sharedValue2, goingForward: sharedValue3 },
      children: children.children,
    }),
  };
  obj3.children = jsx(_modDef15809.Provider, {
    value: sharedValue,
    children: jsx(_modDef15810.Provider, {
      value: { progress: sharedValue1, closing: sharedValue2, goingForward: sharedValue3 },
      children: children.children,
    }),
  });
  return <closure_7 ref={ref} onTransitionProgressReanimated={null} onHeaderHeightChangeReanimated={null} />;
});
forwardRefResult.displayName = "ReanimatedNativeStackScreen";

export default forwardRefResult;
