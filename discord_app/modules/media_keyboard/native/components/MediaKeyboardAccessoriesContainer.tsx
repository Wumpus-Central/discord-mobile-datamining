// === Module 15980: MediaKeyboardAccessoriesContainer ===

// Module 15980 (MediaKeyboardAccessoriesContainer)
import noop from "noop" /* 19 */;
import initialize from "initialize" /* 10046 */;
import { jsx } from "jsxProd" /* 21 */;
import obj132 from "obj132" /* 500 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let closure_6 = obj132.isAndroid();
obj132 = {};
let merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
obj132[1] = obj132;
let closure_7 = createCacheKey.createStyles(obj132);
let closure_8 = { code: "function MediaKeyboardAccessoriesContainerTsx1(){const{animateOnMount,initialLayout,animatedIndex,initialPosition,animatedPosition,interpolate,IS_ANDROID}=this.__closure;const animatedMountDisabledAndNotInitialLayout=!animateOnMount&&!initialLayout.get();const animatedSheetIndexOrDefault=animatedMountDisabledAndNotInitialLayout?0:Math.min(animatedIndex.get(),0);const animatedSheetPositionOrDefault=animatedMountDisabledAndNotInitialLayout?initialPosition:animatedPosition.get();const transform=[{translateY:interpolate(animatedSheetIndexOrDefault,[-1,0],[100,0])}];if(IS_ANDROID){return{marginTop:animatedSheetPositionOrDefault,transform:transform};}return{top:animatedSheetPositionOrDefault,transform:transform};}" };
let result = obj132.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardAccessoriesContainer.tsx");

export default function MediaKeyboardAccessoriesContainer(children) {
  const animatedIndex = children.animatedIndex;
  const animatedPosition = children.animatedPosition;
  const animateOnMount = children.animateOnMount;
  const initialPosition = children.initialPosition;
  let tmp = callback();
  closure_4 = tmp;
  let items = [tmp];
  const memo = initialPosition.useMemo(() => {
    const obj = {};
    const merged = Object.assign(sharedValue ? closure_4.androidContainer : closure_4.iosContainer);
    obj.overflow = "hidden";
    return obj;
  }, items);
  closure_5 = initialPosition.useRef(false);
  let obj = animatedIndex(animateOnMount[6]);
  const sharedValue = obj.useSharedValue(false);
  const items1 = [sharedValue];
  const onLayout = initialPosition.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      const result = sharedValue.set(true);
    }
  }, items1);
  const fn = function _() {
    let tmp = !animateOnMount;
    if (!animateOnMount) {
      tmp = !sharedValue.get();
    }
    let num = 0;
    if (!tmp) {
      const _Math = Math;
      num = Math.min(animatedIndex.get(), 0);
    }
    if (tmp) {
      let value = initialPosition;
    } else {
      value = animatedPosition.get();
    }
    let obj = { translateY: animatedIndex(animateOnMount[6]).interpolate(num, [-1, 0], [100, 0]) };
    const items = [obj];
    if (sharedValue) {
      obj = { marginTop: null, transform: null };
      obj[0] = value;
      obj[1] = items;
    } else {
      obj = { top: null, transform: null };
      obj[0] = value;
      obj[1] = items;
    }
    return obj;
  };
  obj = { animateOnMount, initialLayout: sharedValue, animatedIndex, initialPosition, animatedPosition, interpolate: animatedIndex(animateOnMount[6]).interpolate, IS_ANDROID: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 10575537164844;
  fn.__initData = closure_8;
  const animatedStyle = animatedIndex(animateOnMount[6]).useAnimatedStyle(fn);
  const obj2 = animatedIndex(animateOnMount[6]);
  const items2 = [closure_4];
  const stateFromStores = animatedIndex(animateOnMount[7]).useStateFromStores(items2, () => open.isOpen());
  let importantForAccessibility;
  if (stateFromStores) {
    importantForAccessibility = "no-hide-descendants";
  }
  const style = [memo, animatedStyle];
  return closure_5(animatedPosition(animateOnMount[6]).View, { importantForAccessibility, style, onLayout, pointerEvents: "box-none", children: children.children });
};