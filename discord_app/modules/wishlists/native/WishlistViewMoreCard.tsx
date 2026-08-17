// discord_app/modules/wishlists/native/WishlistViewMoreCard.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import WishlistItemCardDefault from "WishlistItemCard.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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