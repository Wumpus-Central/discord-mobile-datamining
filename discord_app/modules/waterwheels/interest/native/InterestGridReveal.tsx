// === Module 18045: InterestGridReveal ===

// Module 18045 (InterestGridReveal)
import _mod1654 from "module_1654" /* 1654 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function GridReveal(games) {
  games = games.games;
  _require = games;
  const tileWidth = games.tileWidth;
  const columnGap = games.columnGap;
  const radius = games.radius;
  ({ gridStyle, onRevealedChange } = games);
  let sharedValue;
  const tmp = sharedValue();
  const row = tmp;
  let num = 0;
  const tmp2 = radius(onRevealedChange.useState(0 === games.length), 2);
  const accessibilityElementsHidden = tmp2[0];
  closure_7 = tmp2[1];
  items = [onRevealedChange, accessibilityElementsHidden];
  const layoutEffect = onRevealedChange.useLayoutEffect(() => {
    if (onRevealedChange != null) {
      tmp(first);
    }
  }, items);
  const tmp5 = radius(onRevealedChange.useState(!accessibilityElementsHidden), 2);
  let first1 = tmp5[0];
  closure_9 = tmp5[1];
  let substr = games.slice(0, 9);
  const ref = onRevealedChange.useRef(new Set(substr.map((id) => id.id)));
  redux = onRevealedChange.useRef(null);
  const effect = onRevealedChange.useEffect(() => {
    const abortController = new AbortController();
    closure_11.current = abortController;
    return () => abortController.abort();
  }, []);
  let items1 = [accessibilityElementsHidden];
  const callback = onRevealedChange.useCallback((arg0) => {
    const current = ref2.current;
    let aborted;
    if (current != null) {
      aborted = current.signal.aborted;
    }
    let deleteResult = true !== aborted;
    if (deleteResult) {
      const current2 = ref.current;
      deleteResult = current2.delete(arg0);
    }
    if (deleteResult) {
      deleteResult = 0 === ref.current.size;
    }
    if (deleteResult) {
      closure_7(true);
    }
  }, []);
  const effect1 = onRevealedChange.useEffect(() => {
    if (!first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_7(true), 2400);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  let obj = onRevealedChange;
  set = new Set(substr.map((id) => id.id));
  if (accessibilityElementsHidden) {
    num = 1;
  }
  sharedValue = require("module_1654").useSharedValue(num);
  const items2 = [sharedValue, accessibilityElementsHidden, first1];
  const effect2 = obj.useEffect(() => {
    if (first) {
      if (first1) {
        const _AbortController = AbortController;
        const abortController = new AbortController();
        _undefined = abortController;
        const obj = _undefined(columnGap[7]);
        const timingFast = _undefined(columnGap[8]).timingFast;
        items = [
          closure_1_13,
          _undefined(columnGap[9]).scheduleOnRN,
          () => {
                if (!_undefined.signal.aborted) {
                  closure_9(false);
                }
              }
        ];
        _undefined = undefined;
        c1 = undefined;
        [tmp12, tmp13, tmp14] = items;
        class InterestGridRevealTsx1 {
          constructor(arg0) {
            if (arg0) {
              tmp = closure_0;
              tmp2 = closure_1;
              tmp3 = closure_0(closure_1);
            }
            return;
          }
        }
        const items1 = [tmp13, tmp14];
        InterestGridRevealTsx1.__closure = items1;
        InterestGridRevealTsx1.__workletHash = 4095816174048;
        InterestGridRevealTsx1.__initData = tmp12;
        const result = sharedValue.set(obj.withTiming(1, timingFast, "respect-motion-settings", InterestGridRevealTsx1));
        return () => {
          _undefined.abort();
          _mod1654.cancelAnimation(sharedValue);
        };
      }
    }
  }, items2);
  let obj2 = require("module_1654");
  const items3 = [closure_14, sharedValue];
  _require = undefined;
  [tmp15, tmp16] = items3;
  class InterestGridRevealTsx2 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items4 = [tmp16];
  InterestGridRevealTsx2.__closure = items4;
  InterestGridRevealTsx2.__workletHash = 15865553337744;
  InterestGridRevealTsx2.__initData = tmp15;
  const animatedStyle = require("module_1654").useAnimatedStyle(InterestGridRevealTsx2);
  const tmp11Result = require("module_1654");
  const items5 = [closure_15, sharedValue];
  _require = undefined;
  [tmp18, tmp19] = items5;
  class InterestGridRevealTsx3 {
    constructor() {
      obj = { opacity: 1 - closure_0.get() };
      return obj;
    }
  }
  const items6 = [tmp19];
  InterestGridRevealTsx3.__closure = items6;
  InterestGridRevealTsx3.__workletHash = 10211137797453;
  InterestGridRevealTsx3.__initData = tmp18;
  const obj3 = { value: callback, children: null };
  const obj4 = { style: tmp.container, children: null };
  const animatedStyle1 = require("module_1654").useAnimatedStyle(InterestGridRevealTsx3);
  const obj5 = { style: null, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  const items7 = [gridStyle, animatedStyle];
  obj5.style = items7;
  let str = "none";
  if (accessibilityElementsHidden) {
    str = "auto";
  }
  obj5.pointerEvents = str;
  obj5.accessibilityElementsHidden = !accessibilityElementsHidden;
  let str2 = "no-hide-descendants";
  if (accessibilityElementsHidden) {
    str2 = "auto";
  }
  obj5.importantForAccessibility = str2;
  obj5.children = games.children;
  const items8 = [closure_9(tileWidth(columnGap[6]).View, obj5), ];
  if (first1) {
    const obj6 = { pointerEvents: "none", accessible: !accessibilityElementsHidden, accessibilityLabel: null, accessibilityState: null, accessibilityElementsHidden: null, importantForAccessibility: null, style: null, children: null };
    const intl = tmp11(tmp12[10]).intl;
    obj6.accessibilityLabel = intl.string(tmp11(tmp12[10]).t.ZTNur7);
    const obj7 = { busy: !accessibilityElementsHidden };
    obj6.accessibilityState = obj7;
    obj6.accessibilityElementsHidden = accessibilityElementsHidden;
    let str3 = "auto";
    if (accessibilityElementsHidden) {
      str3 = "no-hide-descendants";
    }
    obj6.importantForAccessibility = str3;
    const items9 = [gridStyle, tmp.ghosts, animatedStyle1];
    obj6.style = items9;
    const _Array = Array;
    const obj8 = { length: null };
    const _Math = Math;
    obj8.length = Math.ceil(games.length / closure_7);
    const items10 = [
      Array.from(obj8, (arg0, arg1) => {
          let obj = { style: null, children: null };
          items = [row.row, { columnGap }];
          obj.style = items;
          const substr = _undefined.slice(arg1 * metroImportDefault, (arg1 + 1) * metroImportDefault);
          obj.children = substr.map((id) => {
            const obj = { style: null, children: null };
            const size = { width, height: closure_5.roundToNearestPixel(width / first1) };
            obj.style = size;
            const obj2 = { style: null };
            items = [row.fill, { borderRadius: radius }];
            obj2.style = items;
            const items1 = [closure_9(tileWidth(columnGap[11]), obj2), closure_9(tileWidth(columnGap[12]), { radius })];
            obj.children = items1;
            return closure_10(first, obj, id.id);
          });
          return React6(timestampProducer, obj, arg1);
        }),

    ];
    const obj9 = { count: games.length, tileWidth, columnGap, radius };
    items10[1] = tmp21(tmp24(tmp12[13]), obj9);
    obj6.children = items10;
    first1 = tmp22(tmp24(tmp12[6]).View, obj6);
  }
  items8[1] = first1;
  obj4.children = items8;
  obj3.children = ref(accessibilityElementsHidden, obj4);
  return closure_9(redux.Provider, obj3);
}
get_ActivityIndicator = fn(17);
({ PixelRatio: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const InterestGamePickerConstants = fn(18030);
({ GRID_COLUMNS: metroImportDefault, TILE_ASPECT_RATIO: closure_8 } = InterestGamePickerConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const context = noop.createContext(() => {

});
const createStyles = fn(5043);
let closure_12 = createStyles.createStyles({ container: { position: "relative" }, ghosts: { position: "absolute", top: 0, left: 0, right: 0 }, fill: { flex: 1 }, row: { flexDirection: "row" } });
let closure_13 = { code: "(function InterestGridRevealTsx1(finished){let[scheduleOnRN,removeGhosts]=this.__closure;if(finished){scheduleOnRN(removeGhosts);}})" };
let closure_14 = { code: "(function InterestGridRevealTsx2(){let[progress]=this.__closure;return{opacity:progress.get()};})" };
let closure_15 = { code: "(function InterestGridRevealTsx3(){let[progress]=this.__closure;return{opacity:1-progress.get()};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGridReveal.tsx");

export default function InterestGridReveal(games) {
  games = games.games;
  const substr = games.slice(0, 9);
  const json = JSON.stringify(substr.map((id) => id.id));
  const merged = Object.assign(games);
  return React6(GridReveal, {}, json);
};
export const InterestGridReadyContext = context;