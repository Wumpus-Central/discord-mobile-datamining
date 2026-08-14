// discord_app/modules/premium_marketing/native/components/BuyNitroPerk.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = { x: 0, y: 0 };
let closure_8 = { x: 1, y: 1 };
createCacheKey = { iconTile: null };
createCacheKey = { width: require("Themes").modules.mobile.TABLE_ROW_ICON_SIZE, height: require("Themes").modules.mobile.TABLE_ROW_ICON_SIZE, borderRadius: require("Themes").radii.round, alignItems: "center", justifyContent: "center", overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPerk.tsx");

export default function BuyNitroPerk(perk) {
  let end;
  let selectedTier;
  let start;
  perk = perk.perk;
  const onOpenDetails = perk.onOpenDetails;
  ({ selectedTier, start, end } = perk);
  const disabled = perk.disabled;
  let tmp2 = !disabled;
  if (!disabled) {
    tmp2 = null != perk.detail;
  }
  let obj = { label: perk.label, subLabel: perk.subLabel, disabled: perk.disabled, icon: null, arrow: null, onPress: null, start: null, end: null };
  obj = { style: createCacheKey().iconTile, children: null };
  obj = { selectedTier, nitroColors: perk.iconGradient, basicColors: perk.iconGradientBasic, start: closure_7, end: closure_8, style: absoluteFill.absoluteFill };
  const items = [callback(onOpenDetails(7810), obj), ];
  const tmp = createCacheKey();
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
  return tmp4(perk(5435).TableRow, obj);
};