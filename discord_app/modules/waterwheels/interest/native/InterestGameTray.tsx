// === Module 18712: InterestGameTray ===

// Module 18712 (InterestGameTray)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import InterestGameCoverDefault from "InterestGameCover" /* 18706 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
function TrayCover(width) {
  const game = width.game;
  _require = game;
  const index = width.index;
  importDefault = index;
  const step = width.step;
  dependencyMap = step;
  const reduceMotion = width.reduceMotion;
  ({ onRemove: noop, onExit } = width);
  let sharedValue;
  let first;
  let sharedValue1;
  let sharedValue2;
  closure_10 = undefined;
  const tmp = closure_14();
  let num = 0;
  let result = Math.max(0, index) * step;
  if (!reduceMotion) {
    num = 0;
    if (0 !== index) {
      num = PX_12;
    }
  }
  sharedValue = require("module_1652").useSharedValue(result + num);
  first = reduceMotion(noop.useState(0 === index), 1)[0];
  let obj = require("module_1652");
  if (reduceMotion) {
    let num2 = 1;
  } else {
    num2 = 0;
  }
  sharedValue1 = require("module_1652").useSharedValue(num2);
  const tmp2Result = require("module_1652");
  sharedValue2 = require("module_1652").useSharedValue(1);
  closure_10 = tmp9;
  items = [index < 0, first, game.id, index, onExit, sharedValue1, reduceMotion, sharedValue2, step, sharedValue];
  const effect = noop.useEffect(() => {
    if (!closure_10) {
      const result = c1 * _undefined3;
      let withSpringResult = result;
      if (!reduceMotion) {
        withSpringResult = _undefined(_undefined3[8]).withSpring(result, _undefined(_undefined3[9]).springStandard);
        const obj = _undefined(_undefined3[8]);
      }
      const result1 = sharedValue.set(withSpringResult);
    }
    if (reduceMotion) {
      let num3 = 1;
      if (closure_10) {
        num3 = 0;
      }
      let num = num3;
    } else if (closure_10) {
      let num2 = 1;
      if (closure_10) {
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
    if (!reduceMotion) {
      if (closure_10) {
        num4 = 0.96;
      }
      num5 = _undefined(_undefined3[10]).withTiming(num4, { duration: 120 });
      const obj3 = _undefined(_undefined3[10]);
    }
    const result3 = sharedValue2.set(num5);
    if (closure_10) {
      let num6 = 120;
      if (reduceMotion) {
        num6 = 0;
      }
      const id = setTimeout(() => onExit(id.id), num6);
      return () => clearTimeout(closure_0);
    }
  }, items);
  const tmp2Result3 = require("module_1652");
  const items1 = [closure_15, sharedValue1, sharedValue, sharedValue2];
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
  obj4.hitSlop = sharedValue1;
  obj4.onPress = function onPress() {
    return noop(_undefined.id);
  };
  obj4.style = tmp.target;
  const tmp2Result4 = require("module_1652");
  const items4 = [closure_10(sharedValue, { style: tmp.art, children: closure_10(InterestGameCoverDefault, { game, width: width.coverWidth, compact: true }) }), closure_10(sharedValue, { pointerEvents: "none", style: tmp.stroke })];
  obj4.children = items4;
  obj3.children = closure_11(onExit, obj4);
  return closure_10(_modDef1652.View, obj3);
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const InterestGamePickerConstants = fn(18705);
const SELECTED_BORDER_WIDTH = InterestGamePickerConstants.SELECTED_BORDER_WIDTH;
({ THUMBNAIL_HIT_SLOP: closure_8, THUMBNAIL_WIDTH } = InterestGamePickerConstants);
({ FOOTER_THUMBNAIL_GAP, THUMBNAIL_ASPECT_RATIO } = InterestGamePickerConstants);
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let result = THUMBNAIL_WIDTH / THUMBNAIL_ASPECT_RATIO;
let closure_12 = THUMBNAIL_WIDTH + FOOTER_THUMBNAIL_GAP;
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(5170);
let obj2 = { tray: { height: result, flex: 1 }, viewport: { position: "absolute", inset: -SELECTED_BORDER_WIDTH, right: 0, overflow: "hidden" }, content: { position: "absolute", inset: SELECTED_BORDER_WIDTH, right: 0 }, item: { position: "absolute", width: THUMBNAIL_WIDTH, height: result }, target: { flex: 1 }, art: { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, stroke: null };
let obj3 = { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.stroke = { position: "absolute", inset: -SELECTED_BORDER_WIDTH, borderRadius: nativeDefault.radii.xs + SELECTED_BORDER_WIDTH, borderWidth: SELECTED_BORDER_WIDTH, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_14 = createStyles.createStyles(obj2);
let closure_15 = { code: "(function InterestGameTrayTsx1(){let[opacity,x,scale]=this.__closure;return{opacity:opacity.get(),transform:[{translateX:x.get()},{scale:scale.get()}]};})" };
const size = fn(2);
let result1 = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGameTray.tsx");

export default function InterestGameTray(games) {
  games = games.games;
  ({ coverWidth: importDefault, reduceMotion } = games);
  const onRemove = games.onRemove;
  noop = undefined;
  let step;
  c6 = undefined;
  let onExit;
  const tmp2 = onRemove(noop.useState(0), 2);
  noop = tmp2[1];
  let num = 0;
  const diff = tmp2[0] - onExit;
  if (!reduceMotion) {
    num = PX_12;
  }
  const diff1 = Math.min(require("native").space.PX_128, Math.max(THUMBNAIL_WIDTH, diff - num)) - THUMBNAIL_WIDTH;
  step = Math.min(closure_12, diff1 / Math.max(1, games.length - 1));
  const tmp6 = closure_14();
  [tmp8, tmp9] = onRemove(noop.useState({ games, displayed: games }), 2);
  c6 = tmp9;
  if (tmp8.games !== games) {
    const obj2 = { games, displayed: null };
    let displayed = tmp8.displayed;
    items = [];
    HermesBuiltin.arraySpread(games, HermesBuiltin.arraySpread(displayed.filter((item) => !games.some((id) => id.id === item.id)), 0));
    obj2.displayed = items;
    tmp9(obj2);
  }
  onExit = obj.useCallback((arg0) => {
    closure_0 = arg0;
    return _undefined((games) => {
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
    style: tmp6.tray,
    onLayout(nativeEvent) {
      return closure_4(nativeEvent.nativeEvent.layout.width);
    },
    children: null
  };
  const obj4 = { style: tmp6.viewport, children: null };
  const obj5 = { style: tmp6.content, children: null };
  const displayed1 = tmp8.displayed;
  obj5.children = displayed1.map((game) => closure_2_10(TrayCover, { game, index: games.findIndex((id) => id.id === game.id), step, coverWidth, reduceMotion, onRemove, onExit }, game.id));
  obj4.children = closure_10(c6, obj5);
  obj3.children = closure_10(c6, obj4);
  return closure_10(c6, obj3);
};