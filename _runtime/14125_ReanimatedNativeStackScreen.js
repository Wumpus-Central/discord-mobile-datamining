// _runtime/14125_ReanimatedNativeStackScreen.js
import _mod1616 from "metro/01616__.js";
import cancelAnimation2 from "01638_cancelAnimation.js";
import _modDef14126 from "metro/14126__.js";
import _modDef14127 from "metro/14127__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import noop from "metro/00019__.js";

const cancelAnimation = cancelAnimation2;

require = fn;
let closure_3 = ["children"];
const Platform = fn(17).Platform;
const jsx = fn(21).jsx;
let closure_7 = cancelAnimation.createAnimatedComponent(fn(5228).InnerScreen);
const __initData = {
  code: "function pnpm_ReanimatedNativeStackScreenTsx1(event){const{progress,closing,goingForward}=this.__closure;progress.value=event.progress;closing.value=event.closing;goingForward.value=event.goingForward;}",
};
const __initData2 = {
  code: "function pnpm_ReanimatedNativeStackScreenTsx2(event){const{cachedHeaderHeight,headerHeight}=this.__closure;if(event.headerHeight!==cachedHeaderHeight.current){headerHeight.value=event.headerHeight;cachedHeaderHeight.current=event.headerHeight;}}",
};
const forwardRefResult = noop.forwardRef((children, ref) => {
  const tmp = _objectWithoutProperties(children, closure_3);
  ({ stackPresentation, hasLargeHeader } = tmp);
  const safeAreaFrame = _mod1616.useSafeAreaFrame();
  let y = _mod1616.useSafeAreaInsets().top;
  let flag = tmp.statusBarTranslucent;
  if (flag == null) {
    flag = false;
  }
  if (!flag) {
    y = safeAreaFrame.y;
  }
  const sum = 56 + y;
  ref = noop.useRef(sum);
  const sharedValue = cancelAnimation2.useSharedValue(sum);
  const tmp2Result = cancelAnimation2;
  const sharedValue1 = cancelAnimation2.useSharedValue(0);
  const tmp2Result6 = cancelAnimation2;
  const sharedValue2 = cancelAnimation2.useSharedValue(0);
  const tmp2Result7 = cancelAnimation2;
  const sharedValue3 = cancelAnimation2.useSharedValue(0);
  const obj3 = { ref, onTransitionProgressReanimated: null, onHeaderHeightChangeReanimated: null };
  const tmp2Result8 = cancelAnimation2;
  const fn = function _(progress) {
    sharedValue1.value = progress.progress;
    sharedValue2.value = progress.closing;
    sharedValue3.value = progress.goingForward;
  };
  fn.__closure = { progress: sharedValue1, closing: sharedValue2, goingForward: sharedValue3 };
  fn.__workletHash = 10731156107287;
  fn.__initData = __initData;
  obj3.onTransitionProgressReanimated = cancelAnimation2.useEvent(fn, ["onTransitionProgress"]);
  const tmp2Result9 = cancelAnimation2;
  class H {
    constructor(arg0) {
      if (children.headerHeight !== closure_0.current) {
        tmp2 = closure_1;
        ({ headerHeight: closure_1.value, headerHeight: tmp.current } = children);
      }
      return;
    }
  }
  H.__closure = { cachedHeaderHeight: ref, headerHeight: sharedValue };
  H.__workletHash = 4489643073666;
  H.__initData = __initData2;
  obj3.onHeaderHeightChangeReanimated = cancelAnimation2.useEvent(H, ["onHeaderHeightChange"]);
  const merged = Object.assign(tmp);
  const obj4 = {
    value: sharedValue,
    children: jsx(_modDef14127.Provider, {
      value: { progress: sharedValue1, closing: sharedValue2, goingForward: sharedValue3 },
      children: children.children,
    }),
  };
  obj3.children = jsx(_modDef14126.Provider, {
    value: sharedValue,
    children: jsx(_modDef14127.Provider, {
      value: { progress: sharedValue1, closing: sharedValue2, goingForward: sharedValue3 },
      children: children.children,
    }),
  });
  return <closure_7 ref={ref} onTransitionProgressReanimated={null} onHeaderHeightChangeReanimated={null} />;
});
forwardRefResult.displayName = "ReanimatedNativeStackScreen";

export default forwardRefResult;
