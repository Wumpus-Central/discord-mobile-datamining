// _runtime/13892_ReanimatedNativeStackScreen.js
import _objectWithoutProperties from "_objectWithoutProperties";
import importDefaultResult from "noop";
import { Platform } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["children"];
let c5 = importDefaultResult;
let closure_7 = require("cancelAnimation").createAnimatedComponent(require("Animated").InnerScreen);
let closure_8 = { code: "function pnpm_ReanimatedNativeStackScreenTsx1(event){const{progress,closing,goingForward}=this.__closure;progress.value=event.progress;closing.value=event.closing;goingForward.value=event.goingForward;}" };
let closure_9 = { code: "function pnpm_ReanimatedNativeStackScreenTsx2(event){const{cachedHeaderHeight,headerHeight}=this.__closure;if(event.headerHeight!==cachedHeaderHeight.current){headerHeight.value=event.headerHeight;cachedHeaderHeight.current=event.headerHeight;}}" };
const forwardRefResult = importDefaultResult.forwardRef((children, ref) => {
  let hasLargeHeader;
  let stackPresentation;
  const tmp = sharedValue3(children, sharedValue2);
  ({ stackPresentation, hasLargeHeader } = tmp);
  let obj = ref(sharedValue1[6]);
  const safeAreaFrame = obj.useSafeAreaFrame();
  let y = ref(sharedValue1[6]).useSafeAreaInsets().top;
  let flag = tmp.statusBarTranslucent;
  if (flag == null) {
    flag = false;
  }
  if (!flag) {
    y = safeAreaFrame.y;
  }
  const sum = 56 + y;
  ref = importDefaultResult.useRef(sum);
  let tmp2Result = tmp2(tmp3[4]);
  const sharedValue = tmp2Result.useSharedValue(sum);
  tmp2Result = tmp2(tmp3[4]);
  sharedValue1 = tmp2Result.useSharedValue(0);
  const obj2 = ref(sharedValue1[6]);
  sharedValue2 = ref(sharedValue1[4]).useSharedValue(0);
  const tmp2Result1 = ref(sharedValue1[4]);
  sharedValue3 = ref(sharedValue1[4]).useSharedValue(0);
  obj = { ref, onTransitionProgressReanimated: null, onHeaderHeightChangeReanimated: null };
  const tmp2Result2 = ref(sharedValue1[4]);
  const fn = function _(progress) {
    sharedValue1.value = progress.progress;
    sharedValue2.value = progress.closing;
    sharedValue3.value = progress.goingForward;
  };
  fn.__closure = { progress: sharedValue1, closing: sharedValue2, goingForward: sharedValue3 };
  fn.__workletHash = 10731156107287;
  fn.__initData = closure_8;
  obj[1] = ref(sharedValue1[4]).useEvent(fn, ["onTransitionProgress"]);
  const tmp2Result3 = ref(sharedValue1[4]);
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
  H.__initData = closure_9;
  obj[2] = ref(sharedValue1[4]).useEvent(H, ["onHeaderHeightChange"]);
  const merged = Object.assign(tmp);
  obj = { value: sharedValue, children: null };
  obj[1] = jsx(sharedValue(sharedValue1[8]).Provider, { value: { progress: sharedValue1, closing: sharedValue2, goingForward: sharedValue3 }, children: children.children });
  obj.children = jsx(sharedValue(sharedValue1[7]).Provider, { value: sharedValue, children: null });
  return <closure_7 value={sharedValue}>{null}</closure_7>;
});
forwardRefResult.displayName = "ReanimatedNativeStackScreen";

export default forwardRefResult;