// === Module 11038: WishlistViewMoreCard ===

// Module 11038 (WishlistViewMoreCard)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import WishlistItemCardDefault from "WishlistItemCard" /* 11033 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles(() => {
  let obj = { moreOverlay: null };
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.borderRadius = nativeDefault.radii.lg;
  obj.backgroundColor = nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
  obj.justifyContent = "center";
  obj.alignItems = "center";
  obj.moreOverlay = obj;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/WishlistViewMoreCard.tsx");

export default function WishlistViewMoreCard(recipientName) {
  recipientName = recipientName.recipientName;
  ({ sku, size, overflowCount, onPress } = recipientName);
  let obj = { onPress, accessibilityLabel: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.formatToPlainString(util.t["8uYD+I"], { username: recipientName });
  const items = [timestampProducer(WishlistItemCardDefault, { accessibilityHidden: true, sku, size, recipientName }), ];
  obj = { style: closure_8().moreOverlay, children: null };
  obj = { variant: "text-md/semibold", color: "text-overlay-light", children: null };
  const intl2 = util.intl;
  obj.children = intl2.format(util.t.F6iMs4, { count: overflowCount });
  obj.children = timestampProducer(Text_Text.Text, obj);
  items[1] = timestampProducer(hasOwnProperty, obj);
  obj.children = items;
  return React5(React3, obj);
};