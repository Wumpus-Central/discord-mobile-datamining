// === Module 18722: InterestGameTray ===

// Module 18722 (InterestGameTray)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import InterestGameCoverDefault from "InterestGameCover" /* 18716 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
function TrayCover(width) {
  const game = width.game;
  _require = game;
  const index = width.index;
  importDefault = index;
  const reduceMotion = width.reduceMotion;
  dependencyMap = reduceMotion;
  ({ onRemove: _slicedToArray, onExit } = width);
  let sharedValue;
  let first;
  let sharedValue1;
  let sharedValue2;
  closure_9 = undefined;
  const tmp = closure_15(0);
  let num = 0;
  let result = Math.max(0, index) * closure_13;
  if (!reduceMotion) {
    num = 0;
    if (0 !== index) {
      num = PX_12;
    }
  }
  sharedValue = require("module_1652").useSharedValue(result + num);
  first = _slicedToArray(onExit.useState(0 === index), 1)[0];
  let obj = require("module_1652");
  if (reduceMotion) {
    let num2 = 1;
  } else {
    num2 = 0;
  }
  sharedValue1 = require("module_1652").useSharedValue(num2);
  const tmp2Result = require("module_1652");
  sharedValue2 = require("module_1652").useSharedValue(1);
  closure_9 = tmp9;
  items = [index < 0, first, game.id, index, onExit, sharedValue1, reduceMotion, sharedValue2, sharedValue];
  const effect = onExit.useEffect(() => {
    if (!closure_9) {
      const result = c1 * closure_1_13;
      let withSpringResult = result;
      if (!_undefined3) {
        withSpringResult = _undefined(_undefined3[8]).withSpring(result, _undefined(_undefined3[9]).springStandard);
        const obj = _undefined(_undefined3[8]);
      }
      const result1 = sharedValue.set(withSpringResult);
    }
    if (_undefined3) {
      let num3 = 1;
      if (closure_9) {
        num3 = 0;
      }
      let num = num3;
    } else if (closure_9) {
      let num2 = 1;
      if (closure_9) {
        num2 = 0;
      }
      num = _undefined(_undefined3[10]).withTiming(num2, { duration: 120 });
      const obj2 = _undefined(_undefined3[10]);
    } else {
      num = 1;
    }
    const result2 = sharedValue1.set(num);
    let num4 = 1;
    let num5 = 1;
    if (!_undefined3) {
      if (closure_9) {
        num4 = 0.96;
      }
      num5 = _undefined(_undefined3[10]).withTiming(num4, { duration: 120 });
      const obj3 = _undefined(_undefined3[10]);
    }
    const result3 = sharedValue2.set(num5);
    if (closure_9) {
      let num6 = 120;
      if (_undefined3) {
        num6 = 0;
      }
      const id = setTimeout(() => onExit(id.id), num6);
      return () => clearTimeout(closure_0);
    }
  }, items);
  const tmp2Result3 = require("module_1652");
  const items1 = [closure_16, sharedValue1, sharedValue, sharedValue2];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp11, tmp12, tmp13, tmp14] = items1;
  class InterestGameTrayTsx1 {
    constructor() {
      obj = { opacity: closure_0.get(), transform: null };
      obj1 = { translateX: closure_1.get() };
      items = [, ];
      items[0] = obj1;
      obj4 = { scale: closure_2.get() };
      items[1] = obj4;
      obj.transform = items;
      return obj;
    }
  }
  const items2 = [tmp12, tmp13, tmp14];
  InterestGameTrayTsx1.__closure = items2;
  InterestGameTrayTsx1.__workletHash = 7147928113380;
  InterestGameTrayTsx1.__initData = tmp11;
  const animatedStyle = require("module_1652").useAnimatedStyle(InterestGameTrayTsx1);
  let obj3 = { style: null, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  const items3 = [tmp.item, animatedStyle];
  obj3.style = items3;
  let str = "auto";
  let str2 = "auto";
  if (index < 0) {
    str2 = "none";
  }
  obj3.pointerEvents = str2;
  obj3.accessibilityElementsHidden = index < 0;
  if (index < 0) {
    str = "no-hide-descendants";
  }
  obj3.importantForAccessibility = str;
  const obj4 = { accessibilityHint: null, accessibilityLabel: null, accessibilityRole: "button", hitSlop: null, onPress: null, style: null, children: null };
  const intl = tmp2(1113).intl;
  obj4.accessibilityHint = intl.string(require("util").t.N86XcP);
  obj4.accessibilityLabel = game.name;
  obj4.hitSlop = sharedValue2;
  obj4.onPress = function onPress() {
    return _slicedToArray(_undefined.id);
  };
  obj4.style = tmp.target;
  const tmp2Result4 = require("module_1652");
  const items4 = [closure_10(first, { style: tmp.art, children: closure_10(InterestGameCoverDefault, { game, width: width.coverWidth, compact: true }) }), closure_10(first, { pointerEvents: "none", style: tmp.stroke })];
  obj4.children = items4;
  obj3.children = closure_11(sharedValue, obj4);
  return closure_10(_modDef1652.View, obj3);
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const InterestGamePickerConstants = fn(18715);
({ SELECTED_BORDER_WIDTH: metroImportDefault, THUMBNAIL_HIT_SLOP: closure_8, THUMBNAIL_WIDTH } = InterestGamePickerConstants);
({ FOOTER_THUMBNAIL_GAP, THUMBNAIL_ASPECT_RATIO } = InterestGamePickerConstants);
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const height = THUMBNAIL_WIDTH / THUMBNAIL_ASPECT_RATIO;
let closure_13 = THUMBNAIL_WIDTH + FOOTER_THUMBNAIL_GAP;
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(5143);
let closure_15 = createStyles.createStyles((arg0) => {
  const obj = { tray: { height, flex: 1 }, viewport: { position: "absolute", inset: -borderWidth, right: 0, overflow: "hidden" }, content: { position: "absolute", inset: borderWidth, right: 0 }, item: null, badge: null, target: null, art: null, stroke: null };
  const size = { position: "absolute", width: THUMBNAIL_WIDTH, height };
  obj.item = size;
  const obj4 = { transform: null, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  items = [{ translateX: arg0 * closure_13 }];
  obj4.transform = items;
  obj.badge = obj4;
  obj.target = { flex: 1 };
  obj.art = { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  const obj2 = { height, flex: 1 };
  const obj3 = { position: "absolute", inset: -borderWidth, right: 0, overflow: "hidden" };
  const obj5 = { translateX: arg0 * closure_13 };
  const obj6 = { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.stroke = { position: "absolute", inset: -borderWidth, borderRadius: nativeDefault.radii.xs + borderWidth, borderWidth, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  return obj;
});
let closure_16 = { code: "(function InterestGameTrayTsx1(){let[opacity,x,scale]=this.__closure;return{opacity:opacity.get(),transform:[{translateX:x.get()},{scale:scale.get()}]};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGameTray.tsx");

export default function InterestGameTray(games) {
  games = games.games;
  ({ coverWidth: importDefault, reduceMotion } = games);
  const onRemove = games.onRemove;
  noop = undefined;
  let length;
  let memo;
  c7 = undefined;
  let onExit;
  [tmp3, c4] = onRemove(noop.useState(0), 2);
  let num = 0;
  const diff = tmp3 - c7;
  if (!reduceMotion) {
    num = PX_12;
  }
  const bound = Math.max(0, Math.floor((diff - num - THUMBNAIL_WIDTH) / closure_13) + 1);
  if (games.length <= bound) {
    length = games.length;
  } else {
    const _Math = Math;
    length = Math.max(0, bound - 1);
  }
  items = [games, length];
  memo = obj.useMemo(() => games.slice(0, length), items);
  const diff1 = games.length - length;
  const tmp8 = closure_15(length);
  const tmp2 = onRemove(noop.useState(0), 2);
  [tmp10, tmp11] = onRemove(noop.useState({ games: memo, displayed: memo }), 2);
  c7 = tmp11;
  if (tmp10.games !== memo) {
    const obj2 = { games: memo, displayed: null };
    let displayed = tmp10.displayed;
    const items1 = [];
    HermesBuiltin.arraySpread(memo, HermesBuiltin.arraySpread(displayed.filter((item) => !games.some((id) => id.id === item.id)), 0));
    obj2.displayed = items1;
    tmp11(obj2);
  }
  onExit = obj.useCallback((arg0) => {
    closure_0 = arg0;
    return _undefined2((games) => {
      games = games.games;
      let tmp = games;
      if (!games.some((id) => id.id === closure_1_0)) {
        const obj = {};
        const merged = Object.assign(games);
        const displayed = games.displayed;
        obj.displayed = displayed.filter((id) => id.id !== closure_1_0);
        tmp = obj;
      }
      return tmp;
    });
  }, []);
  const obj3 = {
    style: tmp8.tray,
    onLayout(nativeEvent) {
      return _undefined(nativeEvent.nativeEvent.layout.width);
    },
    children: null
  };
  const obj4 = { style: tmp8.viewport, children: null };
  const obj5 = { style: tmp8.content, children: null };
  const displayed1 = tmp10.displayed;
  const items2 = [displayed1.map((game) => closure_2_10(TrayCover, { game, index: memo.findIndex((id) => id.id === game.id), coverWidth, reduceMotion, onRemove, onExit }, game.id)), ];
  let tmp19Result = tmp3 > 0 && diff1 > 0;
  if (tmp19Result) {
    const obj6 = { accessible: true, accessibilityRole: "text", accessibilityLabel: null, style: null, children: null };
    const intl = games(reduceMotion[11]).intl;
    const obj7 = { games: null };
    const substr = games.slice(length);
    const mapped = substr.map((name) => name.name);
    obj7.games = mapped.join(", ");
    obj6.accessibilityLabel = intl.formatToPlainString(require("module_2537").z5uqej, obj7);
    const items3 = [, ];
    ({ item: arr8[0], badge: arr8[1] } = tmp8);
    obj6.style = items3;
    const obj8 = { accessible: false, variant: "body-sm/medium", color: "text-default", lineClamp: 1, children: null };
    const items4 = ["+", diff1];
    obj8.children = items4;
    const items5 = [closure_11(games(reduceMotion[14]).Text, obj8), ];
    const obj9 = { pointerEvents: "none", style: tmp8.stroke };
    items5[1] = closure_10(tmp18, obj9);
    obj6.children = items5;
    tmp19Result = closure_11(tmp18, obj6);
  }
  items2[1] = tmp19Result;
  obj5.children = items2;
  obj4.children = closure_11(memo, obj5);
  obj3.children = closure_10(memo, obj4);
  return closure_10(memo, obj3);
};