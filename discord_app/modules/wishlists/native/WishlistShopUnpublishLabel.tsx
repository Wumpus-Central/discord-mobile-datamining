// discord_app/modules/wishlists/native/WishlistShopUnpublishLabel.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Badge from "../../../design/components/Badge/native/Badge.native.tsx";
import WishlistShopUnpublishUtils from "../WishlistShopUnpublishUtils.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const jsx = jsxProd.jsx;
const obj = { label: null };
const rect = {
  position: "absolute",
  top: nativeDefault.space.PX_8,
  left: nativeDefault.space.PX_8,
  width: "75%",
  zIndex: 1,
  alignItems: "flex-start",
};
obj.label = rect;
let closure_4 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/wishlists/native/WishlistShopUnpublishLabel.tsx");

export default function WishlistShopUnpublishLabel(countdown) {
  const tmp = closure_4();
  const obj2 = {
    style: tmp.label,
    pointerEvents: "none",
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const result = WishlistShopUnpublishUtils.formatWishlistShopUnpublishLabel(countdown.countdown, "compact");
  obj2.children = jsx(Badge.Badge, { type: { text: result }, variant: "inverted" });
  return (
    <View
      style={tmp.label}
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
    >
      {null}
    </View>
  );
}
