// discord_app/modules/premium_marketing/native/components/BuyNitroPerk.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = { x: 0, y: 0 };
let closure_8 = { x: 1, y: 1 };
createCacheKey = { iconTile: null };
createCacheKey = {
  width: ThemesDefault.modules.mobile.TABLE_ROW_ICON_SIZE,
  height: ThemesDefault.modules.mobile.TABLE_ROW_ICON_SIZE,
  borderRadius: ThemesDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};
createCacheKey[0] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPerk.tsx");

export default function BuyNitroPerk(perk) {
  perk = perk.perk;
  const onOpenDetails = perk.onOpenDetails;
  ({ selectedTier, start, end } = perk);
  const disabled = perk.disabled;
  let tmp2 = !disabled;
  if (!disabled) {
    tmp2 = null != perk.detail;
  }
  let obj = {
    label: perk.label,
    subLabel: perk.subLabel,
    disabled: perk.disabled,
    icon: null,
    arrow: null,
    onPress: null,
    start: null,
    end: null,
  };
  obj = { style: callback3().iconTile, children: null };
  obj = {
    selectedTier,
    nitroColors: perk.iconGradient,
    basicColors: perk.iconGradientBasic,
    start: closure_7,
    end: closure_8,
    style: absoluteFill.absoluteFill,
  };
  const items = [callback(onOpenDetails(13055), obj)];
  const tmp = callback3();
  const tmp4 = callback;
  items[1] = callback(perk.IconComponent, { size: "sm", color: onOpenDetails(712).colors.WHITE });
  obj[1] = items;
  obj[3] = callback2(closure_4, obj);
  obj[4] = tmp2;
  let fn;
  if (tmp2) {
    fn = () => onOpenDetails(perk);
  }
  obj[5] = fn;
  obj[6] = start;
  obj[7] = end;
  return tmp4(perk(5599).TableRow, obj);
}
