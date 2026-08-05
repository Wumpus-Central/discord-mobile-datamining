// discord_app/modules/collectibles/native/FramesEarlyAccessBadge.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ Pressable: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = { top: 14, bottom: 14, left: 14, right: 14 };
createCacheKey = { pillBase: null, pillDark: null, pillLight: null, text: null };
createCacheKey = { flexDirection: "row", alignItems: "center", borderRadius: require("Themes").radii.round, paddingVertical: 2, paddingHorizontal: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: require("Themes").colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT };
let obj1 = { backgroundColor: require("Themes").colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT };
createCacheKey[2] = { backgroundColor: require("Themes").colors.BADGE_BACKGROUND_BRAND };
const obj2 = { backgroundColor: require("Themes").colors.BADGE_BACKGROUND_BRAND };
createCacheKey[3] = { marginLeft: require("Themes").space.PX_8, textTransform: "uppercase" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
function BadgeWithTooltip(tooltipPosition) {
  tooltipPosition = tooltipPosition.tooltipPosition;
  let first;
  let dependencyMap;
  let callback;
  callback = undefined;
  const tmp3 = createCacheKey();
  const ref = callback.useRef(null);
  const tmp5 = callback(callback.useState(false), 2);
  first = tmp5[0];
  dependencyMap = tmp5[1];
  const intl = tooltipPosition(1236).intl;
  const stringResult = intl.string(tooltipPosition(1236).t["L9B+ZZ"]);
  callback = stringResult;
  callback = callback.useCallback(() => {
    callback(false);
  }, []);
  const items = [tooltipPosition, stringResult, first, callback];
  const memo = callback.useMemo(() => ({ position: tooltipPosition, label: c3, visible: first, onPress: callback }), items);
  let obj = tooltipPosition(8576);
  const tooltip = obj.useTooltip(ref, memo);
  const items1 = [first];
  const effect = callback.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        callback(false);
      }, 3000);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const callback1 = callback.useCallback(() => {
    callback((arg0) => !arg0);
  }, []);
  const tmp2 = first(4221)();
  const isThemeDarkResult = tooltipPosition(4131).isThemeDark(tmp2);
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "control-overlay-primary-text-default";
  }
  const intl2 = tmp7(1236).intl;
  const stringResult1 = intl2.string(tooltipPosition(1236).t["1m6qcO"]);
  obj = { ref, onPress: callback1, hitSlop: closure_9, accessibilityRole: "button", accessibilityLabel: stringResult1, accessibilityHint: stringResult, style: items2, children: null };
  items2 = [tmp3.pillBase, isThemeDarkResult ? tmp3.pillDark : tmp3.pillLight];
  const items3 = [callback2(tooltipPosition(7625).NitroWheelIcon, { size: "xs", color: str }), ];
  obj = { variant: "text-sm/bold", color: str, style: tmp3.text, children: stringResult1 };
  items3[1] = callback2(tooltipPosition(4281).Text, obj);
  obj[7] = items3;
  return callback3(closure_5, obj);
}
function StaticBadge() {
  const tmp3 = createCacheKey();
  let obj = require("../../../design/shared.tsx") /* AccessibilityAnnouncer */;
  const isThemeDarkResult = obj.isThemeDark(require("../../../hooks/useTheme.tsx")());
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "control-overlay-primary-text-default";
  }
  const intl = tmp4(1236).intl;
  const stringResult = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["1m6qcO"]);
  obj = { accessibilityLabel: stringResult, style: items, children: null };
  items = [tmp3.pillBase, isThemeDarkResult ? tmp3.pillDark : tmp3.pillLight];
  const items1 = [callback2(require("../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx") /* NitroWheelIcon */.NitroWheelIcon, { size: "xs", color: str }), ];
  obj = { variant: "text-sm/bold", color: str, style: tmp3.text, children: stringResult };
  items1[1] = callback2(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj);
  obj[2] = items1;
  return callback3(closure_6, obj);
}
const obj3 = { marginLeft: require("Themes").space.PX_8, textTransform: "uppercase" };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/native/FramesEarlyAccessBadge.tsx");

export default function _default(tooltipPosition) {
  let str = tooltipPosition.tooltipPosition;
  if (str === undefined) {
    str = "top";
  }
  let flag = tooltipPosition.inheritLayerScope;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = tooltipPosition.disablePressable;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = require("../hooks/useCanPurchaseFrames.tsx") /* useCanPurchaseFrames */;
  if (!obj.useIsProfileFramesEarlyAccessPhase(tooltipPosition.location)) {
    return null;
  } else if (flag2) {
    let tmp3Result = tmp3(StaticBadge, {});
  } else if (flag) {
    obj = { tooltipPosition: null };
    obj[0] = str;
    tmp3Result = tmp3(BadgeWithTooltip, obj);
  } else {
    obj = { zIndex: 3, children: null };
    const obj1 = { tooltipPosition: null };
    obj1[0] = str;
    obj[1] = tmp3(BadgeWithTooltip, obj1);
    tmp3Result = tmp3(require("../../../design/components/Layers/native/LayerScope.native.tsx") /* Layer */.LayerScope, obj);
  }
};