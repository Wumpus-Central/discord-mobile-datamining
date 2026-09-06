// discord_app/modules/media_keyboard/native/components/MediaKeyboardAccessoriesContainer.tsx
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import NativeMenuStore from "../../../native_menu/native/NativeMenuStore.tsx";

require = fn;
const jsx = fn(21).jsx;
let PlatformUtils = fn(1115);
let closure_6 = PlatformUtils.isAndroid();
const createStyles = fn(4560);
PlatformUtils = { androidContainer: { flex: 1 }, iosContainer: null };
PlatformUtils = {};
let merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
PlatformUtils.iosContainer = PlatformUtils;
let closure_7 = createStyles.createStyles(PlatformUtils);
const __initData = {
  code: "function MediaKeyboardAccessoriesContainerTsx1(){const{animateOnMount,initialLayout,animatedIndex,initialPosition,animatedPosition,interpolate,IS_ANDROID}=this.__closure;const animatedMountDisabledAndNotInitialLayout=!animateOnMount&&!initialLayout.get();const animatedSheetIndexOrDefault=animatedMountDisabledAndNotInitialLayout?0:Math.min(animatedIndex.get(),0);const animatedSheetPositionOrDefault=animatedMountDisabledAndNotInitialLayout?initialPosition:animatedPosition.get();const transform=[{translateY:interpolate(animatedSheetIndexOrDefault,[-1,0],[100,0])}];if(IS_ANDROID){return{marginTop:animatedSheetPositionOrDefault,transform:transform};}return{top:animatedSheetPositionOrDefault,transform:transform};}",
};
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/media_keyboard/native/components/MediaKeyboardAccessoriesContainer.tsx",
);

export default function MediaKeyboardAccessoriesContainer(animatedIndex) {
  animatedIndex = animatedIndex.animatedIndex;
  const animatedPosition = animatedIndex.animatedPosition;
  const animateOnMount = animatedIndex.animateOnMount;
  const initialPosition = animatedIndex.initialPosition;
  let tmp = closure_7();
  const open = tmp;
  let items = [tmp];
  const memo = initialPosition.useMemo(() => {
    const obj = {};
    const merged = Object.assign(closure_6 ? open.androidContainer : open.iosContainer);
    obj.overflow = "hidden";
    return obj;
  }, items);
  const ref = initialPosition.useRef(false);
  let obj = animatedIndex(animateOnMount[6]);
  const sharedValue = obj.useSharedValue(false);
  const items1 = [sharedValue];
  const callback = initialPosition.useCallback(() => {
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
      value = initialPosition;
    } else {
      value = animatedPosition.get();
    }
    let obj = { translateY: ReanimatedRexport.interpolate(num, [-1, 0], [100, 0]) };
    const items = [obj];
    if (closure_6) {
      obj = { marginTop: value, transform: items };
    } else {
      obj = { top: value, transform: items };
    }
    return obj;
  };
  obj = {
    animateOnMount,
    initialLayout: sharedValue,
    animatedIndex,
    initialPosition,
    animatedPosition,
    interpolate: animatedIndex(animateOnMount[6]).interpolate,
    IS_ANDROID: sharedValue,
  };
  fn.__closure = obj;
  fn.__workletHash = 10575537164844;
  fn.__initData = __initData;
  const animatedStyle = animatedIndex(animateOnMount[6]).useAnimatedStyle(fn);
  const obj2 = animatedIndex(animateOnMount[6]);
  const items2 = [open];
  const stateFromStores = animatedIndex(animateOnMount[7]).useStateFromStores(items2, () => open.isOpen());
  let str;
  if (stateFromStores) {
    str = "no-hide-descendants";
  }
  obj = {
    importantForAccessibility: str,
    style: null,
    onLayout: callback,
    pointerEvents: "box-none",
    children: animatedIndex.children,
  };
  const items3 = [memo, animatedStyle];
  obj.style = items3;
  return ref(animatedPosition(animateOnMount[6]).View, obj);
}
