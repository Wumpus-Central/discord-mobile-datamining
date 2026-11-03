// === Module 12706: MediaKeyboardAccessoriesContainer ===

// Module 12706 (MediaKeyboardAccessoriesContainer)
import _modDef1652 from "module_1652" /* 1652 */;
import noop from "module_19" /* 19 */;
import NativeMenuStore from "NativeMenuStore" /* 10334 */;

const require = globalThis.__r;

const require = fn;
let jsx = fn(21).jsx;
const PlatformUtils = fn(1377);
let closure_6 = PlatformUtils.isAndroid();
const createStyles = fn(5141);
let obj3 = { androidContainer: { flex: 1 }, iosContainer: null };
let merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj3.iosContainer = {};
let closure_7 = createStyles.createStyles(obj3);
let closure_8 = { code: "(function MediaKeyboardAccessoriesContainerTsx1(){let[animateOnMount,initialLayout,animatedIndex,initialPosition,animatedPosition,interpolate,IS_ANDROID]=this.__closure;const animatedMountDisabledAndNotInitialLayout=!animateOnMount&&!initialLayout.get();const animatedSheetIndexOrDefault=animatedMountDisabledAndNotInitialLayout?0:Math.min(animatedIndex.get(),0);const animatedSheetPositionOrDefault=animatedMountDisabledAndNotInitialLayout?initialPosition:animatedPosition.get();const transform=[{translateY:interpolate(animatedSheetIndexOrDefault,[-1,0],[100,0])}];if(IS_ANDROID){return{marginTop:animatedSheetPositionOrDefault,transform:transform};}return{top:animatedSheetPositionOrDefault,transform:transform};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardAccessoriesContainer.tsx");

export default function MediaKeyboardAccessoriesContainer(arg0) {
  ({ animatedIndex, animatedPosition, animateOnMount, children, initialPosition } = arg0);
  let tmp = closure_7();
  _require = tmp;
  items = [tmp];
  const memo = noop.useMemo(() => {
    const obj = {};
    const merged = Object.assign(closure_6 ? _undefined.androidContainer : _undefined.iosContainer);
    obj.overflow = "hidden";
    return obj;
  }, items);
  noop.useRef(false);
  const sharedValue = require("module_1652").useSharedValue(false);
  const items1 = [sharedValue];
  const callback = noop.useCallback(() => {
    if (!_undefined.current) {
      tmp.current = true;
      const result = _undefined2.set(true);
    }
  }, items1);
  let obj = require("module_1652");
  const tmp3 = _require;
  const items2 = [closure_8, animateOnMount, sharedValue, animatedIndex, initialPosition, animatedPosition, require("module_1652").interpolate, c6];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  jsx = undefined;
  c6 = undefined;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items2;
  class MediaKeyboardAccessoriesContainerTsx1 {
    constructor() {
      tmp = !closure_0;
      if (!closure_0) {
        tmp2 = closure_1;
        tmp = !closure_1.get();
      }
      num = 0;
      if (!tmp) {
        tmp3 = globalThis;
        _Math = Math;
        tmp4 = closure_2;
        num = Math.min(closure_2.get(), 0);
      }
      if (tmp) {
        value = closure_3;
      } else {
        tmp5 = closure_4;
        value = closure_4.get();
      }
      obj = { translateY: closure_5(num, [-1, 0], [100, 0]) };
      items = [];
      items[0] = obj;
      if (closure_6) {
        obj1 = { marginTop: null, transform: null };
        obj1.marginTop = value;
        obj1.transform = items;
        obj4 = obj1;
      } else {
        obj4 = { top: null, transform: null };
        obj4.top = value;
        obj4.transform = items;
      }
      return obj4;
    }
  }
  const items3 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
  MediaKeyboardAccessoriesContainerTsx1.__closure = items3;
  MediaKeyboardAccessoriesContainerTsx1.__workletHash = 1441834817653;
  MediaKeyboardAccessoriesContainerTsx1.__initData = tmp7;
  const animatedStyle = require("module_1652").useAnimatedStyle(MediaKeyboardAccessoriesContainerTsx1);
  let obj2 = require("module_1652");
  const items4 = [c4];
  const stateFromStores = tmp3(504).useStateFromStores(items4, () => _undefined3.isOpen());
  let str;
  if (stateFromStores) {
    str = "no-hide-descendants";
  }
  let obj3 = { importantForAccessibility: str, style: null, onLayout: callback, pointerEvents: "box-none", children };
  const items5 = [memo, animatedStyle];
  obj3.style = items5;
  return jsx(_modDef1652.View, obj3);
};