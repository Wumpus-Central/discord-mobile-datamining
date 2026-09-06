// === Module 15055: BouncingArrow ===

// Module 15055 (BouncingArrow)
import ThemesDefault from "Themes" /* 576 */;
import _modDef4296 from "module_4296" /* 4296 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
function BouncingArrow(children) {
  let sharedValue;
  sharedValue = sharedValue(4296).useSharedValue(0);
  let items = [sharedValue];
  const effect = React.useEffect(() => {
    let obj = sharedValue(closure_1_2[3]);
    const obj2 = sharedValue(closure_1_2[3]);
    obj = { duration: 500, easing: null };
    const Easing = sharedValue(closure_1_2[3]).Easing;
    obj[1] = Easing.inOut(sharedValue(closure_1_2[3]).Easing.quad);
    const obj3 = sharedValue(closure_1_2[4]);
    const withTimingResult = sharedValue(closure_1_2[4]).withTiming(-6, obj);
    obj = { duration: 500, easing: null };
    const Easing2 = sharedValue(closure_1_2[3]).Easing;
    obj[1] = Easing2.inOut(sharedValue(closure_1_2[3]).Easing.quad);
    const result = sharedValue.set(obj.withRepeat(obj2.withSequence(withTimingResult, sharedValue(closure_1_2[4]).withTiming(0, obj)), -1));
    return () => closure_1_0(closure_1_2[3]).cancelAnimation(closure_0);
  }, items);
  let obj = sharedValue(4296);
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
  const style = sharedValue(4296).useAnimatedStyle(fn);
  return callback(_modDef4296.View, { style, children: children.children });
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = { code: "function BountiesAutoScrollIndicatorTsx1(){const{translateY}=this.__closure;return{transform:[{translateY:translateY.get()}]};}" };
createCacheKey = { root: null, ringContainer: null };
createCacheKey = { alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", justifyContent: "center", width: 40, height: 40 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesAutoScrollIndicator.tsx");

export default function BountiesAutoScrollIndicator(showProgressRing) {
  let flag = showProgressRing.showProgressRing;
  if (flag === undefined) {
    flag = true;
  }
  let _require;
  const tmp = callback2();
  let obj = _require(4262);
  const token = obj.useToken(ThemesDefault.colors.WHITE);
  obj = { size: "md", color: ThemesDefault.colors.WHITE };
  const tmp6 = callback(_require(15056).ArrowSmallUpIcon, obj);
  _require = tmp6;
  obj = { style: tmp.root, children: null };
  obj1 = { variant: "text-md/semibold", color: "text-default", children: null };
  const intl = _require(1114).intl;
  obj1[2] = intl.string(_require(1114).t.eafsh4);
  const items = [callback(_require(4556).Text, obj1), ];
  const obj2 = { style: tmp.ringContainer, children: null };
  if (flag) {
    const obj3 = { size: 40, width: 3, fill: null, duration: 0, rotation: 0, lineCap: "round", tintColor: null, backgroundColor: "rgba(255, 255, 255, 0.35)", children: null };
    obj3[2] = 100 * showProgressRing.progress;
    obj3[6] = token;
    obj3[8] = function children() {
      return closure_0;
    };
    let tmp5Result = tmp5(_require(15058).AnimatedCircularProgress, obj3);
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