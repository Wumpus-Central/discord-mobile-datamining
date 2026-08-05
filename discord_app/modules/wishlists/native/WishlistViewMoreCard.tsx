// discord_app/modules/wishlists/native/WishlistViewMoreCard.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { WishlistItemCard } from "WishlistItemCard.tsx";

let c3;
let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ Pressable: c3, StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles(() => {
  let obj = { moreOverlay: null };
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.borderRadius = Themes.radii.lg;
  obj.backgroundColor = Themes.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
  obj.justifyContent = "center";
  obj.alignItems = "center";
  obj[0] = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/wishlists/native/WishlistViewMoreCard.tsx");

export default function WishlistViewMoreCard(recipientName) {
  let onPress;
  let overflowCount;
  let size;
  let sku;
  recipientName = recipientName.recipientName;
  ({ sku, size, overflowCount, onPress } = recipientName);
  let obj = { onPress, accessibilityLabel: null, children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl.formatToPlainString(getSystemLocale /* getSystemLocale */.t["8uYD+I"], { username: recipientName });
  const items = [callback(WishlistItemCard, { accessibilityHidden: true, sku, size, recipientName }), ];
  obj = { style: callback3().moreOverlay, children: null };
  obj = { variant: "text-md/semibold", color: "text-overlay-light", children: null };
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[2] = intl2.format(getSystemLocale /* getSystemLocale */.t.F6iMs4, { count: overflowCount });
  obj[1] = callback(Text /* Text */.Text, obj);
  items[1] = callback(closure_5, obj);
  obj[2] = items;
  return callback2(closure_3, obj);
};