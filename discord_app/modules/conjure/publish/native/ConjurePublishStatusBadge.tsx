// discord_app/modules/conjure/publish/native/ConjurePublishStatusBadge.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import ConjureHeaderIconButton from "../../shared/native/ConjureHeaderIconButton.tsx";
import ProgressCircleDefault from "../../../premium/native/components/ProgressCircle.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function ConjurePublishSpinner() {
  const tmp = closure_6();
  const token = sharedValue(5596).useToken(nativeDefault.colors.BACKGROUND_BRAND);
  let obj = sharedValue(5596);
  sharedValue = sharedValue(5095).useSharedValue(0);
  let items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = ReanimatedRexport;
    const obj2 = timing;
    const result = sharedValue.set(
      obj.withRepeat(obj2.withTiming(360, { duration: 800, easing: ReanimatedRexport.Easing.linear }), -1, false),
    );
    return () => sharedValue(dependencyMap[7]).cancelAnimation(closure_1_0);
  }, items);
  let obj2 = sharedValue(5095);
  const fn = function _() {
    const obj = { transform: null };
    const items = [{ rotate: "" + sharedValue.get() + "deg" }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { rotation: sharedValue };
  fn.__workletHash = 16804123436708;
  fn.__initData = __initData;
  const animatedStyle = sharedValue(5095).useAnimatedStyle(fn);
  const obj4 = {
    style: null,
    children: jsx(ProgressCircleDefault, { percent: 70, size: 12, strokeWidth: 2, color: token, style: tmp.spinner }),
  };
  const items1 = [tmp.spinner, animatedStyle];
  obj4.style = items1;
  return jsx(ReanimatedRexportDefault.View, {
    style: null,
    children: jsx(ProgressCircleDefault, { percent: 70, size: 12, strokeWidth: 2, color: token, style: tmp.spinner }),
  });
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj2 = { dot: null, spinner: null };
let size = {
  width: fn(12568).CONJURE_HEADER_BADGE_SIZE,
  height: fn(12568).CONJURE_HEADER_BADGE_SIZE,
  borderRadius: fn(12568).CONJURE_HEADER_BADGE_SIZE / 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
obj2.dot = size;
obj2.spinner = { width: 12, height: 12 };
let closure_6 = createStyles.createStyles(obj2);
const __initData = {
  code: 'function ConjurePublishStatusBadgeTsx1(){const{rotation}=this.__closure;return{transform:[{rotate:rotation.get()+"deg"}]};}',
};
size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishStatusBadge.tsx");

export default function ConjurePublishStatusBadge(indicator) {
  if ("publishing" === indicator.indicator) {
    let tmp4 = <ConjurePublishSpinner />;
  } else {
    const obj = { style: tmp.dot };
    tmp4 = <View style={tmp.dot} />;
  }
  return tmp4;
}
export function conjurePublishBadgeSize(indicator) {
  let num = 12;
  if ("publishing" !== indicator) {
    num = ConjureHeaderIconButton.CONJURE_HEADER_BADGE_SIZE;
  }
  return num;
}
