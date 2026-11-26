// === Module 11168: WishlistShopUnpublishLabel ===

// Module 11168 (WishlistShopUnpublishLabel)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Badge from "Badge" /* 6159 */;
import WishlistShopUnpublishUtils from "WishlistShopUnpublishUtils" /* 11167 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
const obj = { label: null };
const rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8, width: "75%", zIndex: 1, alignItems: "flex-start" };
obj.label = rect;
let closure_4 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/wishlists/native/WishlistShopUnpublishLabel.tsx");

export default function WishlistShopUnpublishLabel(countdown) {
  const tmp = closure_4();
  const obj2 = { style: tmp.label, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const result = WishlistShopUnpublishUtils.formatWishlistShopUnpublishLabel(countdown.countdown, "compact");
  obj2.children = jsx(Badge.Badge, { type: { text: result }, variant: "inverted" });
  return <View style={tmp.label} pointerEvents="none" accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{null}</View>;
};