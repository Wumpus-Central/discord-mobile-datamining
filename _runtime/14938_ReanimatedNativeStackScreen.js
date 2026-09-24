// === Module 14938: ReanimatedNativeStackScreen ===

// Module 14938 (ReanimatedNativeStackScreen)
import _mod1615 from "module_1615" /* 1615 */;
import cancelAnimation2 from "cancelAnimation" /* 1637 */;
import _modDef14939 from "module_14939" /* 14939 */;
import _modDef14940 from "module_14940" /* 14940 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const cancelAnimation = cancelAnimation2;

require = fn;
let closure_3 = ["children"];
const Platform = fn(17).Platform;
const jsx = fn(21).jsx;
let closure_7 = cancelAnimation.createAnimatedComponent(fn(5220).InnerScreen);
const __initData = { code: "function pnpm_ReanimatedNativeStackScreenTsx1(event){const{progress,closing,goingForward}=this.__closure;progress.value=event.progress;closing.value=event.closing;goingForward.value=event.goingForward;}" };
const __initData2 = { code: "function pnpm_ReanimatedNativeStackScreenTsx2(event){const{cachedHeaderHeight,headerHeight}=this.__closure;if(event.headerHeight!==cachedHeaderHeight.current){headerHeight.value=event.headerHeight;cachedHeaderHeight.current=event.headerHeight;}}" };
const forwardRefResult = noop.forwardRef((children, ref) => {
  const tmp = _objectWithoutProperties(children, closure_3);
  ({ stackPresentation, hasLargeHeader } = tmp);
  const safeAreaFrame = _mod1615.useSafeAreaFrame();
  let y = _mod1615.useSafeAreaInsets().top;
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
  const obj4 = { value: sharedValue, children: jsx(_modDef14940.Provider, { value: { progress: sharedValue1, closing: sharedValue2, goingForward: sharedValue3 }, children: children.children }) };
  obj3.children = jsx(_modDef14939.Provider, { value: sharedValue, children: jsx(_modDef14940.Provider, { value: { progress: sharedValue1, closing: sharedValue2, goingForward: sharedValue3 }, children: children.children }) });
  return <closure_7 ref={ref} onTransitionProgressReanimated={null} onHeaderHeightChangeReanimated={null} />;
});
forwardRefResult.displayName = "ReanimatedNativeStackScreen";

export default forwardRefResult;