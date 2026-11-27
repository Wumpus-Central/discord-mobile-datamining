// === Module 18060: InterestGameTray ===

// Module 18060 (InterestGameTray)
import nativeDefault from "native" /* 575 */;
import _modDef2655 from "module_2655" /* 2655 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
function TrayCover(game) {
  game = game.game;
  _require = game;
  ({ index, count, reduceMotion } = game);
  importDefault = reduceMotion;
  ({ firstRun, onExit } = game);
  dependencyMap = onExit;
  _slicedToArray = undefined;
  let sum1;
  let sum2;
  let first;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  closure_11 = undefined;
  const tmp = closure_11();
  let num = 56;
  if (count > 3) {
    num = 156;
    if (count <= 5) {
      num = 93;
    }
  }
  const bound = Math.min(num, Math.max(0, game.width - 66 - 2 * sharedValue2));
  if (count <= 1) {
    _slicedToArray = 0;
    const _Math = Math;
    const sum = tmp2 + Math.min(nativeDefault.space.PX_16, bound);
    PX_12 = nativeDefault.space.PX_12;
    sum2 = PX_12;
    sum1 = sum;
    let num6 = 0;
    let tmp9 = importDefault;
  } else {
    const _Math2 = Math;
    let result = Math.max(0, index) / (count - 1);
    let num5 = 6;
    if (count > 3) {
      num5 = 7 + (count - 5) / 5 * 3;
    }
    const diff = 2 * result - 1;
    num6 = diff * num5;
    _slicedToArray = num6;
    sum1 = tmp2 + bound * result;
    sum2 = nativeDefault.space.PX_12 + (1 - diff * diff) * -nativeDefault.space.PX_4;
    tmp9 = importDefault;
  }
  if (firstRun) {
    firstRun = 1 === count;
  }
  first = _slicedToArray(sum1.useState(firstRun), 1)[0];
  sharedValue = require("module_1654").useSharedValue(sum1);
  let obj = sum1;
  let obj2 = require("module_1654");
  let num7 = 0;
  if (!reduceMotion) {
    num7 = 0;
    if (!first) {
      num7 = sharedValue3;
    }
  }
  sharedValue1 = require("module_1654").useSharedValue(sum2 + num7);
  let obj3 = require("module_1654");
  sharedValue2 = require("module_1654").useSharedValue(num6);
  const tmp14Result = require("module_1654");
  if (reduceMotion) {
    let num8 = 1;
  } else {
    num8 = 0;
  }
  sharedValue3 = require("module_1654").useSharedValue(num8);
  closure_11 = tmp19;
  items = [num6, first, index < 0, game.id, onExit, sharedValue3, reduceMotion, sharedValue2, sum1, sum2, sharedValue, sharedValue1];
  const effect = obj.useEffect(() => {
    if (closure_11) {
      if (!c1) {
        if (first) {
          tmp26(withTimingResult);
          if (closure_11) {
            let num2 = 120;
            if (tmp27) {
              num2 = 0;
            }
            const id = setTimeout(() => _undefined3(id.id), num2);
            return () => clearTimeout(closure_0);
          }
        }
        let num = 1;
        if (closure_11) {
          num = 0;
        }
        withTimingResult = _undefined(_undefined3[10]).withTiming(num, { duration: 120 });
        const obj4 = _undefined(_undefined3[10]);
      }
      const _Number = Number;
      withTimingResult = Number(!closure_11);
    } else {
      if (c1) {
        let withSpringResult = sum1;
      } else {
        withSpringResult = _undefined(_undefined3[8]).withSpring(sum1, _undefined(_undefined3[9]).springStandard);
        const obj = _undefined(_undefined3[8]);
      }
      const result = sharedValue.set(withSpringResult);
      if (c1) {
        let withSpringResult1 = sum2;
      } else {
        withSpringResult1 = _undefined(_undefined3[8]).withSpring(sum2, _undefined(_undefined3[9]).springStandard);
        const obj2 = _undefined(_undefined3[8]);
      }
      const result1 = sharedValue1.set(withSpringResult1);
      if (c1) {
        let withTimingResult1 = c3;
      } else {
        withTimingResult1 = _undefined(_undefined3[10]).withTiming(c3, { duration: 120 });
        const obj3 = _undefined(_undefined3[10]);
      }
      const result2 = sharedValue2.set(withTimingResult1);
    }
  }, items);
  const tmp14Result3 = require("module_1654");
  const items1 = [closure_12, sharedValue3, sharedValue, sharedValue1, sharedValue2];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp21, tmp22, tmp23, tmp24, tmp25] = items1;
  class InterestGameTrayTsx1 {
    constructor() {
      obj = { opacity: closure_0.get(), transform: null };
      obj1 = { translateX: closure_1.get() };
      items = [, , ];
      items[0] = obj1;
      obj5 = { translateY: closure_2.get() };
      items[1] = obj5;
      obj6 = { rotateZ: "" + closure_3.get() + "deg" };
      items[2] = obj6;
      obj.transform = items;
      return obj;
    }
  }
  const items2 = [tmp22, tmp23, tmp24, tmp25];
  InterestGameTrayTsx1.__closure = items2;
  InterestGameTrayTsx1.__workletHash = 3577041238824;
  InterestGameTrayTsx1.__initData = tmp21;
  const animatedStyle = require("module_1654").useAnimatedStyle(InterestGameTrayTsx1);
  let obj4 = { style: null, pointerEvents: null, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const items3 = [tmp.item, { width: 66, height: 86, zIndex: count - index }, animatedStyle];
  obj4.style = items3;
  let str = "auto";
  if (index < 0) {
    str = "none";
  }
  obj4.pointerEvents = str;
  const tmp14Result4 = require("module_1654");
  obj4.children = sharedValue(sum2, { style: tmp.art, children: sharedValue(tmp9(18036), { game, width: 66, imageWidth: 66, compact: true }) });
  return sharedValue(tmp9(1654).View, obj4);
}
const View = fn(17).View;
const MAX_SELECTIONS = fn(18037).MAX_SELECTIONS;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
let PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(5043);
let obj2 = { tray: { height: 86 + nativeDefault.space.PX_24, flex: 1, minWidth: 66 + 2 * PX_8 }, viewport: { flex: 1, overflow: "hidden" }, item: null, art: null, helper: null };
let merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2.item = { position: "absolute" };
let obj3 = { height: 86 + nativeDefault.space.PX_24, flex: 1, minWidth: 66 + 2 * PX_8 };
let obj4 = { position: "absolute" };
obj2.art = { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let obj5 = { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2.helper = { position: "absolute", alignSelf: "center", bottom: 0, maxWidth: "100%", paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let closure_11 = createStyles.createStyles(obj2);
let closure_12 = { code: "(function InterestGameTrayTsx1(){let[opacity,x,y,rotation]=this.__closure;return{opacity:opacity.get(),transform:[{translateX:x.get()},{translateY:y.get()},{rotateZ:rotation.get()+\"deg\"}]};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGameTray.tsx");

export default function InterestGameTray(games) {
  games = games.games;
  ({ reduceMotion: importDefault, firstRun: dependencyMap } = games);
  let width;
  noop = undefined;
  max = undefined;
  let tmp = closure_11();
  const tmp2 = width(noop.useState(0), 2);
  width = tmp2[0];
  noop = tmp2[1];
  [tmp5, tmp6] = width(noop.useState({ games, displayed: games }), 2);
  c5 = tmp6;
  if (tmp5.games !== games) {
    const obj2 = { games, displayed: null };
    let displayed = tmp5.displayed;
    items = [];
    HermesBuiltin.arraySpread(games, HermesBuiltin.arraySpread(displayed.filter((item) => !games.some((id) => id.id === item.id)), 0));
    obj2.displayed = items;
    tmp6(obj2);
  }
  max = noop.useCallback((arg0) => {
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
    style: tmp.tray,
    onLayout(nativeEvent) {
      return closure_4(nativeEvent.nativeEvent.layout.width);
    },
    children: null
  };
  const obj4 = { style: tmp.viewport, accessible: games.length > 0, accessibilityLabel: null, children: null };
  let formatToPlainStringResult;
  if (games.length > 0) {
    const intl = games(1112).intl;
    const obj5 = { games: null };
    const _Intl = Intl;
    const listFormat = new Intl.ListFormat(games(1112).intl.currentLocale, { type: "conjunction" });
    const items1 = [];
    HermesBuiltin.arraySpread(games, 0);
    const reversed = items1.reverse();
    obj5.games = listFormat.format(reversed.map((name) => name.name));
    formatToPlainStringResult = intl.formatToPlainString(_modDef2655["V/fzLc"], obj5);
  }
  obj4.accessibilityLabel = formatToPlainStringResult;
  let mapped = width > 0;
  if (mapped) {
    const displayed1 = tmp5.displayed;
    mapped = displayed1.map((game) => {
      const findIndexResult = games.findIndex((id) => id.id === game.id);
      const obj = { game, index: null, count: null, width: null, reduceMotion: null, firstRun: null, onExit: null };
      let num = -1;
      if (findIndexResult >= 0) {
        num = games.length - 1 - findIndexResult;
      }
      obj.index = num;
      obj.count = games.length;
      obj.width = width;
      obj.reduceMotion = reduceMotion;
      obj.firstRun = firstRun;
      obj.onExit = onExit;
      return metroImportDefault(TrayCover, obj, game.id);
    });
  }
  obj4.children = mapped;
  const items2 = [closure_7(c5, obj4), ];
  let tmp14Result = games.length >= 7;
  if (tmp14Result) {
    const obj6 = { pointerEvents: "none", style: tmp.helper, children: null };
    const obj7 = { variant: "body-xs/medium", color: "text-default", accessibilityLabel: null, children: null };
    const intl2 = games(1112).intl;
    const obj8 = { count: games.length, max };
    obj7.accessibilityLabel = intl2.formatToPlainString(_modDef2655.v9v0uY, obj8);
    const intl3 = games(1112).intl;
    const obj9 = { count: games.length, max };
    obj7.children = intl3.format(_modDef2655["8g6QdR"], obj9);
    obj6.children = closure_7(games(5634).Text, obj7);
    tmp14Result = closure_7(tmp13, obj6);
  }
  items2[1] = tmp14Result;
  obj3.children = items2;
  return closure_8(c5, obj3);
};