// discord_app/modules/premium_marketing/native/components/BuyNitroPerk.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import BuyNitroGradientDefault from "BuyNitroGradient.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const start = { x: 0, y: 0 };
const end = { x: 1, y: 1 };
fn(4560);
const createStyles = { iconTile: null };
let size = {
  width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE,
  height: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};
createStyles.iconTile = size;
let closure_9 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPerk.tsx");

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
  obj = { style: closure_9().iconTile, children: null };
  obj = {
    selectedTier,
    nitroColors: perk.iconGradient,
    basicColors: perk.iconGradientBasic,
    start,
    end,
    style: absoluteFill.absoluteFill,
  };
  const items = [hasOwnProperty(BuyNitroGradientDefault, obj)];
  const tmp = closure_9();
  items[1] = hasOwnProperty(perk.IconComponent, { size: "sm", color: nativeDefault.colors.WHITE });
  obj.children = items;
  obj.icon = timestampProducer(React4, obj);
  obj.arrow = tmp2;
  let fn;
  if (tmp2) {
    fn = () => onOpenDetails(perk);
  }
  obj.onPress = fn;
  obj.start = start;
  obj.end = end;
  return hasOwnProperty(TableRow.TableRow, obj);
}
