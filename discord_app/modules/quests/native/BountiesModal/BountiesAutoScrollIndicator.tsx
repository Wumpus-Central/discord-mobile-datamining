// discord_app/modules/quests/native/BountiesModal/BountiesAutoScrollIndicator.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import ArrowSmallUpIcon from "../../../../design/components/Icon/native/redesign/generated/ArrowSmallUpIcon.tsx";
import CircularProgress from "../../../../../_runtime/15058_CircularProgress.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function BouncingArrow(children) {
  let sharedValue;
  sharedValue = sharedValue(4296).useSharedValue(0);
  let items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj2 = ReanimatedRexport;
    let obj = { duration: 500, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj.easing = Easing.inOut(ReanimatedRexport.Easing.quad);
    const withTimingResult = timing.withTiming(-6, obj);
    obj = { duration: 500, easing: null };
    const Easing2 = ReanimatedRexport.Easing;
    obj.easing = Easing2.inOut(ReanimatedRexport.Easing.quad);
    const result = sharedValue.set(obj.withRepeat(obj2.withSequence(withTimingResult, timing.withTiming(0, obj)), -1));
    return () => sharedValue(dependencyMap[3]).cancelAnimation(closure_1_0);
  }, items);
  let obj = sharedValue(4296);
  const fn = function l() {
    let obj = { transform: null };
    obj = { translateY: sharedValue.get() };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { translateY: sharedValue };
  fn.__workletHash = 10126349088819;
  fn.__initData = __initData;
  const style = sharedValue(4296).useAnimatedStyle(fn);
  return closure_5(ReanimatedRexportDefault.View, { style, children: children.children });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const __initData = {
  code: "function BountiesAutoScrollIndicatorTsx1(){const{translateY}=this.__closure;return{transform:[{translateY:translateY.get()}]};}",
};
fn(4560);
let createStyles = { root: null, ringContainer: null };
createStyles = { alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles.root = createStyles;
createStyles.ringContainer = { alignItems: "center", justifyContent: "center", width: 40, height: 40 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesAutoScrollIndicator.tsx");

export default function BountiesAutoScrollIndicator(showProgressRing) {
  let flag = showProgressRing.showProgressRing;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = closure_9();
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.WHITE);
  obj = { size: "md", color: nativeDefault.colors.WHITE };
  const tmp6 = hasOwnProperty(ArrowSmallUpIcon.ArrowSmallUpIcon, obj);
  closure_0 = tmp6;
  obj = { style: tmp.root, children: null };
  const obj1 = { variant: "text-md/semibold", color: "text-default", children: null };
  const intl = util.intl;
  obj1.children = intl.string(util.t.eafsh4);
  const items = [hasOwnProperty(Text_Text.Text, obj1)];
  const obj2 = { style: tmp.ringContainer, children: null };
  if (flag) {
    const obj3 = {
      size: 40,
      width: 3,
      fill: 100 * showProgressRing.progress,
      duration: 0,
      rotation: 0,
      lineCap: "round",
      tintColor: token,
      backgroundColor: "rgba(255, 255, 255, 0.35)",
      children() {
        return closure_0;
      },
    };
    let tmp5Result = hasOwnProperty(CircularProgress.AnimatedCircularProgress, obj3);
  } else {
    const obj4 = { children: tmp6 };
    tmp5Result = hasOwnProperty(BouncingArrow, obj4);
  }
  obj2.children = tmp5Result;
  items[1] = hasOwnProperty(View, obj2);
  obj.children = items;
  return timestampProducer(View, obj);
}
