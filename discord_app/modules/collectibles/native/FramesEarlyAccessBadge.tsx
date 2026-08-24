// discord_app/modules/collectibles/native/FramesEarlyAccessBadge.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import AccessibilityAnnouncer from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import Layer from "../../../design/components/Layers/native/LayerScope.native.tsx";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import useCanPurchaseFrames from "../hooks/useCanPurchaseFrames.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({ Pressable: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = { top: 14, bottom: 14, left: 14, right: 14 };
createCacheKey = { pillBase: null, pillDark: null, pillLight: null, text: null };
createCacheKey = { flexDirection: "row", alignItems: "center", borderRadius: ThemesDefault.radii.round, paddingVertical: 2, paddingHorizontal: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT };
let obj1 = { backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT };
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BADGE_BACKGROUND_BRAND };
const obj2 = { backgroundColor: ThemesDefault.colors.BADGE_BACKGROUND_BRAND };
createCacheKey[3] = { marginLeft: ThemesDefault.space.PX_8, textTransform: "uppercase" };
let closure_10 = createCacheKey.createStyles(createCacheKey);
function BadgeWithTooltip(tooltipPosition) {
  tooltipPosition = tooltipPosition.tooltipPosition;
  let first;
  dependencyMap = undefined;
  let callback;
  callback = undefined;
  const tmp3 = callback4();
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
  let obj = tooltipPosition(9307);
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
  const tmp2 = first(4314)();
  const isThemeDarkResult = tooltipPosition(1363).isThemeDark(tmp2);
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "control-overlay-primary-text-default";
  }
  const intl2 = tmp7(1236).intl;
  const stringResult1 = intl2.string(tooltipPosition(1236).t["1m6qcO"]);
  obj = { ref, onPress: callback1, hitSlop: closure_9, accessibilityRole: "button", accessibilityLabel: stringResult1, accessibilityHint: stringResult, style: items2, children: null };
  items2 = [tmp3.pillBase, isThemeDarkResult ? tmp3.pillDark : tmp3.pillLight];
  const items3 = [callback2(tooltipPosition(8027).NitroWheelIcon, { size: "xs", color: str }), ];
  obj = { variant: "text-sm/bold", color: str, style: tmp3.text, children: stringResult1 };
  items3[1] = callback2(tooltipPosition(4739).Text, obj);
  obj[7] = items3;
  return callback3(closure_5, obj);
}
function StaticBadge() {
  const tmp3 = callback4();
  let obj = AccessibilityAnnouncer;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "control-overlay-primary-text-default";
  }
  const intl = tmp4(1236).intl;
  const stringResult = intl.string(getSystemLocale.t["1m6qcO"]);
  obj = { accessibilityLabel: stringResult, style: items, children: null };
  items = [tmp3.pillBase, isThemeDarkResult ? tmp3.pillDark : tmp3.pillLight];
  const items1 = [callback2(NitroWheelIcon.NitroWheelIcon, { size: "xs", color: str }), ];
  obj = { variant: "text-sm/bold", color: str, style: tmp3.text, children: stringResult };
  items1[1] = callback2(Text.Text, obj);
  obj[2] = items1;
  return callback3(closure_6, obj);
}
const obj3 = { marginLeft: ThemesDefault.space.PX_8, textTransform: "uppercase" };
const result = require("set").fileFinishedImporting("modules/collectibles/native/FramesEarlyAccessBadge.tsx");

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
  let obj = useCanPurchaseFrames;
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
    obj1 = { tooltipPosition: null };
    obj1[0] = str;
    obj[1] = tmp3(BadgeWithTooltip, obj1);
    tmp3Result = tmp3(Layer.LayerScope, obj);
  }
};