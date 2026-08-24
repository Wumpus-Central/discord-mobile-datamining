// === Module 10412: WishlistViewMoreCard ===

// Module 10412 (WishlistViewMoreCard)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4739 */;
import WishlistItemCardDefault from "WishlistItemCard" /* 10407 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
noopAll;
({ Pressable: c3, StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles(() => {
  let obj = { moreOverlay: null };
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.borderRadius = ThemesDefault.radii.lg;
  obj.backgroundColor = ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
  obj.justifyContent = "center";
  obj.alignItems = "center";
  obj[0] = obj;
  return obj;
});
const result = require("set").fileFinishedImporting("modules/wishlists/native/WishlistViewMoreCard.tsx");

export default function WishlistViewMoreCard(recipientName) {
  recipientName = recipientName.recipientName;
  ({ sku, size, overflowCount, onPress } = recipientName);
  let obj = { onPress, accessibilityLabel: null, children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.formatToPlainString(getSystemLocale.t["8uYD+I"], { username: recipientName });
  const items = [callback(WishlistItemCardDefault, { accessibilityHidden: true, sku, size, recipientName }), ];
  obj = { style: callback3().moreOverlay, children: null };
  obj = { variant: "text-md/semibold", color: "text-overlay-light", children: null };
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.format(getSystemLocale.t.F6iMs4, { count: overflowCount });
  obj[1] = callback(Text.Text, obj);
  items[1] = callback(closure_5, obj);
  obj[2] = items;
  return callback2(closure_3, obj);
};