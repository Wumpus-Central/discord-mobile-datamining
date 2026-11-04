// discord_app/modules/waterwheels/interest/native/InterestGameTray.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef1652 from "../../../../../_runtime/metro/01652__.js";
import InterestGameCoverDefault from "InterestGameCover.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  const tmp = closure_12();
  let result = Math.max(0, index) * (closure_9 + sharedValue1);
  if (reduceMotion) {
    let num = 0;
  } else {
    num = 12;
  }
  sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(result + num);
  first = _slicedToArray(onExit.useState(0 === index), 1)[0];
  let obj = require("../../../../../_runtime/metro/01652__.js");
  if (reduceMotion) {
    let num2 = 1;
  } else {
    num2 = 0;
  }
  sharedValue1 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(num2);
  const tmp2Result = require("../../../../../_runtime/metro/01652__.js");
  sharedValue2 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(1);
  closure_9 = tmp9;
  items = [index < 0, first, game.id, index, onExit, sharedValue1, reduceMotion, sharedValue2, sharedValue];
  const effect = onExit.useEffect(() => {
    if (!closure_9) {
      const result = c1 * (closure_9 + sharedValue1);
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
  const tmp2Result3 = require("../../../../../_runtime/metro/01652__.js");
  const items1 = [closure_13, sharedValue1, sharedValue, sharedValue2];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp11, tmp12, tmp13, tmp14] = items1;
  class InterestGameTrayTsx1 {
    constructor() {
      obj = { opacity: closure_0.get(), transform: null };
      obj1 = { translateX: closure_1.get() };
      items = [,];
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
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(InterestGameTrayTsx1);
  let obj3 = {
    style: null,
    pointerEvents: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    children: null,
  };
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
  const obj4 = {
    accessibilityHint: null,
    accessibilityLabel: null,
    accessibilityRole: "button",
    hitSlop: null,
    onPress: null,
    style: null,
    children: null,
  };
  const intl = tmp2(1113).intl;
  obj4.accessibilityHint = intl.string(require("util").t.N86XcP);
  obj4.accessibilityLabel = game.name;
  obj4.hitSlop = sharedValue2;
  obj4.onPress = function onPress() {
    return _slicedToArray(_undefined.id);
  };
  obj4.style = tmp.target;
  const tmp2Result4 = require("../../../../../_runtime/metro/01652__.js");
  const items4 = [
    closure_10(first, {
      style: tmp.art,
      children: closure_10(InterestGameCoverDefault, { game, width: width.coverWidth, compact: true }),
    }),
    closure_10(first, { pointerEvents: "none", style: tmp.stroke }),
  ];
  obj4.children = items4;
  obj3.children = closure_11(sharedValue, obj4);
  return closure_10(_modDef1652.View, obj3);
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const InterestGamePickerConstants = fn(18671);
({
  FOOTER_THUMBNAIL_GAP: metroImportDefault,
  SELECTED_BORDER_WIDTH,
  THUMBNAIL_HIT_SLOP: closure_8,
  THUMBNAIL_WIDTH,
} = InterestGamePickerConstants);
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let result = THUMBNAIL_WIDTH / InterestGamePickerConstants.THUMBNAIL_ASPECT_RATIO;
const createStyles = fn(5141);
let obj2 = {
  tray: { height: result, flex: 1 },
  item: { position: "absolute", width: THUMBNAIL_WIDTH, height: result },
  target: { flex: 1 },
  art: {
    flex: 1,
    overflow: "hidden",
    borderRadius: nativeDefault.radii.xs,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  },
  stroke: null,
};
let obj3 = {
  flex: 1,
  overflow: "hidden",
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj2.stroke = {
  position: "absolute",
  inset: -SELECTED_BORDER_WIDTH,
  borderRadius: nativeDefault.radii.xs + SELECTED_BORDER_WIDTH,
  borderWidth: SELECTED_BORDER_WIDTH,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
let closure_12 = createStyles.createStyles(obj2);
let closure_13 = {
  code: "(function InterestGameTrayTsx1(){let[opacity,x,scale]=this.__closure;return{opacity:opacity.get(),transform:[{translateX:x.get()},{scale:scale.get()}]};})",
};
const size = fn(2);
let result1 = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGameTray.tsx");

export default function InterestGameTray(games) {
  games = games.games;
  ({ coverWidth: importDefault, reduceMotion: dependencyMap, onRemove: _slicedToArray } = games);
  noop = undefined;
  let onExit;
  let obj = noop;
  let tmp = closure_12();
  [tmp3, tmp4] = noop.useState({ games, displayed: games });
  noop = tmp4;
  if (tmp3.games !== games) {
    const obj2 = { games, displayed: null };
    let displayed = tmp3.displayed;
    items = [];
    HermesBuiltin.arraySpread(
      games,
      HermesBuiltin.arraySpread(
        displayed.filter((item) => !games.some((id) => id.id === item.id)),
        0,
      ),
    );
    obj2.displayed = items;
    tmp4(obj2);
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
  const obj3 = { style: tmp.tray, children: null };
  const displayed1 = tmp3.displayed;
  obj3.children = displayed1.map((game) =>
    closure_2_10(
      TrayCover,
      { game, index: games.findIndex((id) => id.id === game.id), coverWidth, reduceMotion, onRemove, onExit },
      game.id,
    ),
  );
  return closure_10(closure_6, obj3);
}
