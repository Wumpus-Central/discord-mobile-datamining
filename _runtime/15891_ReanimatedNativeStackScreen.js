// _runtime/15891_ReanimatedNativeStackScreen.js
import react_native from "00017_react-native.js";
import Fragment from "react/00021_Fragment.js";
import _mod1621 from "metro/01621__.js";
import _mod1643 from "metro/01643__.js";
import InnerScreen from "05739_InnerScreen.js";
import reactDefault from "15892_react.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import react from "00019_react.js";

const cancelAnimation = _mod1643;
let children;

let closure_3 = ["children"];
const Platform = react_native.Platform;
const jsx = Fragment.jsx;
let closure_7 = cancelAnimation.createAnimatedComponent(InnerScreen.InnerScreen);
const __initData = {
  code: "function pnpm_ReanimatedNativeStackScreenTsx1(event){const{progress,closing,goingForward}=this.__closure;progress.value=event.progress;closing.value=event.closing;goingForward.value=event.goingForward;}",
};
const __initData2 = {
  code: "function pnpm_ReanimatedNativeStackScreenTsx2(event){const{cachedHeaderHeight,headerHeight}=this.__closure;if(event.headerHeight!==cachedHeaderHeight.current){headerHeight.value=event.headerHeight;cachedHeaderHeight.current=event.headerHeight;}}",
};
const forwardRefResult = react.forwardRef((children, ref) => {
  let hasLargeHeader;
  let stackPresentation;
  children = children.children;
  const tmp = _objectWithoutProperties(children, closure_3);
  ({ stackPresentation, hasLargeHeader } = tmp);
  const obj = _mod1621;
  const safeAreaFrame = obj.useSafeAreaFrame();
  const obj2 = _mod1621;
  let y = obj2.useSafeAreaInsets().top;
  let flag = tmp.statusBarTranslucent;
  if (flag == null) {
    flag = false;
  }
  if (!flag) {
    y = safeAreaFrame.y;
  }
  const sum = 56 + y;
  ref = react.useRef(sum);
  const tmp2Result = _mod1643;
  const sharedValue = tmp2Result.useSharedValue(sum);
  const tmp2Result6 = _mod1643;
  const sharedValue1 = tmp2Result6.useSharedValue(0);
  const tmp2Result7 = _mod1643;
  const sharedValue2 = tmp2Result7.useSharedValue(0);
  const tmp2Result8 = _mod1643;
  const sharedValue3 = tmp2Result8.useSharedValue(0);
  const fn = function _(progress) {
    sharedValue1.value = progress.progress;
    sharedValue2.value = progress.closing;
    sharedValue3.value = progress.goingForward;
  };
  fn.__closure = { progress: sharedValue1, closing: sharedValue2, goingForward: sharedValue3 };
  fn.__workletHash = 10731156107287;
  fn.__initData = __initData;
  const tmp2Result9 = _mod1643;
  const tmp2Result10 = _mod1643;
  class H {
    constructor(headerHeight) {
      if (headerHeight.headerHeight !== ref.current) {
        ({ headerHeight: sharedValue.value, headerHeight: tmp.current } = headerHeight);
      }
    }
  }
  H.__closure = { cachedHeaderHeight: ref, headerHeight: sharedValue };
  H.__workletHash = 4489643073666;
  H.__initData = __initData2;
  const merged = Object.assign(tmp);
  const Provider = reactDefault.Provider;
  return (
    <closure_7
      ref={ref}
      onTransitionProgressReanimated={tmp2Result9.useEvent(fn, ["onTransitionProgress"])}
      onHeaderHeightChangeReanimated={tmp2Result10.useEvent(H, ["onHeaderHeightChange"])}
    >
      <Provider value={sharedValue}>{null}</Provider>
    </closure_7>
  );
});
forwardRefResult.displayName = "ReanimatedNativeStackScreen";

export default forwardRefResult;
