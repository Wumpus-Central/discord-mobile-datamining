// discord_app/modules/waterwheels/interest/native/InterestGhostShimmer.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1654 from "../../../../../_runtime/metro/01654__.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ PixelRatio: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const InterestGamePickerConstants = fn(18030);
({ GRID_COLUMNS: closure_8, GRID_COVER_HAIRLINE_WIDTH } = InterestGamePickerConstants);
const GRID_GAP = InterestGamePickerConstants.GRID_GAP;
({ TILE_ASPECT_RATIO: closure_11, SCREEN_HORIZONTAL_PADDING } = InterestGamePickerConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5043);
let obj2 = {
  overlay: { position: "absolute", top: 0, left: SCREEN_HORIZONTAL_PADDING },
  maskGrid: { gap: GRID_GAP },
  row: { flexDirection: "row" },
  maskTile: { flex: 1, margin: GRID_COVER_HAIRLINE_WIDTH, backgroundColor: nativeDefault.colors.TEXT_STRONG },
  base: null,
  band: null,
  gradient: null,
};
let obj3 = { flex: 1, margin: GRID_COVER_HAIRLINE_WIDTH, backgroundColor: nativeDefault.colors.TEXT_STRONG };
obj2.base = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.band = { height: "100%" };
obj2.gradient = { flex: 1 };
let closure_13 = createStyles.createStyles(obj2);
let closure_14 = {
  code: "(function InterestGhostShimmerTsx1(){let[width,progress]=this.__closure;return{transform:[{translateX:-2*width*(1-progress.get())}]};})",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGhostShimmer.tsx");

export default function InterestGhostShimmer(count) {
  count = count.count;
  _require = count;
  const tileWidth = count.tileWidth;
  importDefault = tileWidth;
  const columnGap = count.columnGap;
  const radius = count.radius;
  let first;
  const tmp = closure_13();
  noop = tmp;
  items = [first];
  const stateFromStores = require("initialize").useStateFromStores(items, () => first.useReducedMotion);
  let obj = require("initialize");
  const token = require("useToken").useToken(require("native").colors.BACKGROUND_MOD_MUTED);
  let obj2 = require("useToken");
  const token1 = require("useToken").useToken(require("native").colors.BACKGROUND_MOD_SUBTLE);
  let obj3 = require("useToken");
  const sharedValue = require("../../../../../_runtime/metro/01654__.js").useSharedValue(0);
  const tmp8 = radius(noop.useState(false), 2);
  first = tmp8[0];
  closure_8 = tmp8[1];
  const sum = tileWidth * closure_8 + columnGap * (closure_8 - 1);
  const roundToNearestPixelResult = stateFromStores.roundToNearestPixel(tileWidth / closure_11);
  c9 = roundToNearestPixelResult;
  const bound = Math.min(4, Math.ceil(count / closure_8));
  let result = bound * roundToNearestPixelResult;
  const sum1 = result + Math.max(0, bound - 1) * GRID_GAP;
  const effect = noop.useEffect(() => {
    const timeout = setTimeout(() => closure_1_8(true), 80);
    return () => clearTimeout(closure_0);
  }, []);
  const items1 = [sharedValue, stateFromStores, first];
  const effect1 = noop.useEffect(() => {
    if (first) {
      if (!stateFromStores) {
        const result = sharedValue.set(0);
        const obj = _mod1654;
        const obj2 = _mod1654;
        const obj4 = { duration: 1400, easing: _mod1654.Easing.linear };
        const withTimingResult = timing_timing.withTiming(1, obj4);
        const obj5 = _mod1654;
        const result1 = sharedValue.set(
          obj.withRepeat(
            obj2.withSequence(withTimingResult, obj5.withDelay(350, timing_timing.withTiming(0, { duration: 0 }))),
            -1,
            false,
          ),
        );
        return () => c0(columnGap[10]).cancelAnimation(sharedValue);
      }
    }
  }, items1);
  require("../../../../../_runtime/metro/01654__.js");
  const items2 = [closure_14, sum, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp18, tmp19, tmp20] = items2;
  class InterestGhostShimmerTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateX: null };
      result = -2 * closure_0;
      obj1.translateX = result * (1 - closure_1.get());
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items3 = [tmp19, tmp20];
  InterestGhostShimmerTsx1.__closure = items3;
  InterestGhostShimmerTsx1.__workletHash = 3309217839551;
  InterestGhostShimmerTsx1.__initData = tmp18;
  let tmp22 = null;
  if (!stateFromStores) {
    tmp22 = null;
    if (first) {
      tmp22 = null;
      if (tileWidth > 0) {
        let obj5 = {
          pointerEvents: "none",
          accessible: false,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          style: null,
          maskElement: null,
          children: null,
        };
        const items4 = [tmp.overlay];
        let size = { width: sum, height: sum1 };
        items4[1] = size;
        obj5.style = items4;
        const obj6 = { style: tmp.maskGrid, children: null };
        const _Array = Array;
        const obj7 = { length: bound };
        obj6.children = Array.from(obj7, (arg0, key) => {
          let obj = {
            style: null,
            children: Array.from({ length: Math.min(React5, c0 - key * React5) }, (arg0, key) => {
              const obj = { style: null, children: null };
              const size = { width, height };
              obj.style = size;
              const obj2 = { style: null };
              items = [maskTile.maskTile];
              const obj3 = { borderRadius: Math.max(0, radius - c9) };
              items[1] = obj3;
              obj2.style = items;
              obj.children = jsx(width(columnGap[13]), { style: null });
              return (
                <sharedValue key={key} style={null}>
                  {null}
                </sharedValue>
              );
            }),
          };
          items = [row.row, { columnGap }];
          obj.style = items;
          return (
            <timestampProducer key={key} style={null}>
              {Array.from({ length: Math.min(React5, c0 - key * React5) }, (arg0, key) => {
                const obj = { style: null, children: null };
                const size = { width, height };
                obj.style = size;
                const obj2 = { style: null };
                items = [maskTile.maskTile];
                const obj3 = { borderRadius: Math.max(0, radius - c9) };
                items[1] = obj3;
                obj2.style = items;
                obj.children = jsx(width(columnGap[13]), { style: null });
                return (
                  <sharedValue key={key} style={null}>
                    {null}
                  </sharedValue>
                );
              })}
            </timestampProducer>
          );
        });
        obj5.maskElement = <sharedValue style={tmp.maskGrid}>{null}</sharedValue>;
        const obj8 = { style: tmp.base, children: null };
        const obj9 = { style: null, children: null };
        const items5 = [tmp.band, ,];
        const obj10 = { width: 3 * sum };
        items5[1] = obj10;
        items5[2] = tmp21;
        obj9.style = items5;
        const obj11 = { colors: null, start: null, end: null, style: null };
        const items6 = [token, token1, token];
        obj11.colors = items6;
        obj11.start = { x: 0, y: 0 };
        obj11.end = { x: 1, y: 0 };
        obj11.style = tmp.gradient;
        obj9.children = jsx(tmp4(tmp2[14]), { colors: null, start: null, end: null, style: null });
        obj8.children = jsx(tmp4(tmp2[10]).View, { style: null, children: null });
        obj5.children = <sharedValue style={tmp.base}>{null}</sharedValue>;
        tmp22 = jsx(tmp4(tmp2[12]), {
          pointerEvents: "none",
          accessible: false,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          style: null,
          maskElement: null,
          children: null,
        });
        const tmp4Result = tmp4(tmp2[12]);
      }
    }
  }
  return tmp22;
}
