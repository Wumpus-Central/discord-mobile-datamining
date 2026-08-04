import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
function BouncingArrow(children) {
  let sharedValue;
  sharedValue = sharedValue(4146).useSharedValue(0);
  let items = [sharedValue];
  const effect = React.useEffect(() => {
    let obj = sharedValue(outer1_2[3]);
    const obj2 = sharedValue(outer1_2[3]);
    obj = { duration: 500, easing: null };
    const Easing = sharedValue(outer1_2[3]).Easing;
    obj[1] = Easing.inOut(sharedValue(outer1_2[3]).Easing.quad);
    const obj3 = sharedValue(outer1_2[4]);
    const withTimingResult = sharedValue(outer1_2[4]).withTiming(-6, obj);
    obj = { duration: 500, easing: null };
    const Easing2 = sharedValue(outer1_2[3]).Easing;
    obj[1] = Easing2.inOut(sharedValue(outer1_2[3]).Easing.quad);
    const result = sharedValue.set(obj.withRepeat(obj2.withSequence(withTimingResult, sharedValue(outer1_2[4]).withTiming(0, obj)), -1));
    return () => outer1_0(outer1_2[3]).cancelAnimation(closure_0);
  }, items);
  let obj = sharedValue(4146);
  const fn = function l() {
    let obj = { transform: null };
    obj = { translateY: sharedValue.get() };
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  fn.__closure = { translateY: sharedValue };
  fn.__workletHash = 10126349088819;
  fn.__initData = closure_7;
  const style = sharedValue(4146).useAnimatedStyle(fn);
  return callback(importDefault(4146).View, { style, children: children.children });
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = { code: "function BountiesAutoScrollIndicatorTsx1(){const{translateY}=this.__closure;return{transform:[{translateY:translateY.get()}]};}" };
createCacheKey = { root: null, ringContainer: null };
createCacheKey = { alignItems: "center", gap: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", justifyContent: "center", width: 40, height: 40 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("jsxProd").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesAutoScrollIndicator.tsx");

export default function BountiesAutoScrollIndicator(showProgressRing) {
  let flag = showProgressRing.showProgressRing;
  if (flag === undefined) {
    flag = true;
  }
  let _require;
  const tmp = createCacheKey();
  let obj = _require(3989);
  const token = obj.useToken(importDefault(712).colors.WHITE);
  obj = { size: "md", color: null };
  obj[1] = importDefault(712).colors.WHITE;
  const tmp6 = callback(_require(14203).ArrowSmallUpIcon, obj);
  _require = tmp6;
  obj = { style: tmp.root, children: null };
  const obj1 = { variant: "text-md/semibold", color: "text-default", children: null };
  const intl = _require(1236).intl;
  obj1[2] = intl.string(_require(1236).t.eafsh4);
  const items = [callback(_require(4281).Text, obj1), ];
  const obj2 = { style: tmp.ringContainer, children: null };
  if (flag) {
    const obj3 = { size: 40, width: 3, fill: null, duration: 0, rotation: 0, lineCap: "round", tintColor: null, backgroundColor: "rgba(255, 255, 255, 0.35)", children: null };
    obj3[2] = 100 * showProgressRing.progress;
    obj3[6] = token;
    obj3[8] = function children() {
      return c0;
    };
    let tmp5Result = tmp5(_require(14205).AnimatedCircularProgress, obj3);
  } else {
    const obj4 = { children: null };
    obj4[0] = tmp6;
    tmp5Result = tmp5(BouncingArrow, obj4);
  }
  obj2[1] = tmp5Result;
  items[1] = callback(View, obj2);
  obj[1] = items;
  return closure_6(View, obj);
};