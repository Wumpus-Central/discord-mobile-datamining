// === Module 8027: BuyNitroPerk ===

// Module 8027 (BuyNitroPerk)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
noopAll;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = { x: 0, y: 0 };
let closure_8 = { x: 1, y: 1 };
const createCacheKey = { width: ThemesDefault.modules.mobile.TABLE_ROW_ICON_SIZE, height: ThemesDefault.modules.mobile.TABLE_ROW_ICON_SIZE, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center", overflow: "hidden" };
createCacheKey[0] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPerk.tsx");

export default function BuyNitroPerk(perk) {
  perk = perk.perk;
  const onOpenDetails = perk.onOpenDetails;
  ({ selectedTier, start, end } = perk);
  const disabled = perk.disabled;
  let tmp2 = !disabled;
  if (!disabled) {
    tmp2 = null != perk.detail;
  }
  { style: callback3().iconTile, children: null };
  const obj = { selectedTier, nitroColors: perk.iconGradient, basicColors: perk.iconGradientBasic, start: closure_7, end: closure_8, style: absoluteFill.absoluteFill };
  const items = [callback(onOpenDetails(8028), obj), ];
  const tmp = callback3();
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
  return callback(perk(6291).TableRow, obj);
};