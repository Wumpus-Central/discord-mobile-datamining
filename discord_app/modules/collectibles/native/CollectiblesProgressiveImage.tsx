// discord_app/modules/collectibles/native/CollectiblesProgressiveImage.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const __initData = {
  code: "function CollectiblesProgressiveImageTsx1(){const{backgroundImageOpacity}=this.__closure;return{opacity:backgroundImageOpacity.get()};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesProgressiveImage.tsx");

export function CollectiblesProgressiveImage(arg0) {
  ({ source, style } = arg0);
  let sharedValue;
  const merged = Object.assign(arg0, Object.assign({ source: 0, style: 0 }));
  sharedValue = sharedValue(5095).useSharedValue(0);
  const obj = sharedValue(5095);
  const fn = function u() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { backgroundImageOpacity: sharedValue };
  fn.__workletHash = 14095099553650;
  fn.__initData = __initData;
  const animatedStyle = sharedValue(5095).useAnimatedStyle(fn);
  const obj3 = { style: null, children: null };
  const items = [style, animatedStyle];
  obj3.style = items;
  const obj4 = {};
  let obj2 = sharedValue(5095);
  const merged1 = Object.assign(merged);
  obj4.source = source;
  obj4.style = StyleSheet.absoluteFill;
  obj4.fadeDuration = 0;
  obj4.onLoad = function handleImageLoad() {
    const obj2 = { duration: 500, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj2.easing = Easing.inOut(ReanimatedRexport.Easing.ease);
    const result = sharedValue.set(timing.withTiming(1, obj2));
  };
  obj3.children = jsx(FastImageDefault, {});
  return jsx(ReanimatedRexportDefault.View, { style: null, children: null });
}
