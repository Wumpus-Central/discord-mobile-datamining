// discord_app/modules/wishlists/native/WishlistViewMoreCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import WishlistItemCardDefault from "WishlistItemCard.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4827);
let closure_8 = createStyles.createStyles(() => {
  const obj = { moreOverlay: null };
  const obj2 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj2.borderRadius = nativeDefault.radii.lg;
  obj2.backgroundColor = nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
  obj2.justifyContent = "center";
  obj2.alignItems = "center";
  obj.moreOverlay = obj2;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/WishlistViewMoreCard.tsx");

export default function WishlistViewMoreCard(recipientName) {
  recipientName = recipientName.recipientName;
  ({ sku, size, overflowCount, onPress } = recipientName);
  const obj = { onPress, accessibilityLabel: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.formatToPlainString(util.t["8uYD+I"], { username: recipientName });
  const items = [timestampProducer(WishlistItemCardDefault, { accessibilityHidden: true, sku, size, recipientName })];
  const obj2 = { style: closure_8().moreOverlay, children: null };
  const obj3 = { variant: "text-md/semibold", color: "text-overlay-light", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.format(util.t.F6iMs4, { count: overflowCount });
  obj2.children = timestampProducer(Text_Text.Text, obj3);
  items[1] = timestampProducer(hasOwnProperty, obj2);
  obj.children = items;
  return React5(React3, obj);
}
