// discord_app/modules/collectibles/native/AvatarDecorationProductPreview.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ fullSizePreview: { flex: 1, alignItems: "center", justifyContent: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/AvatarDecorationProductPreview.tsx");

export default function AvatarDecorationProductPreview(product) {
  let obj = require(8674) /* useCurrentUser */;
  const currentUser = obj.useCurrentUser();
  let obj1 = require(8049) /* firstAvatarDecoration */;
  const firstAvatarDecoration = obj1.useShopProductItems(product.product).firstAvatarDecoration;
  let tmp5 = null;
  if (null != firstAvatarDecoration) {
    obj = { style: null, pointerEvents: "box-none", accessibilityLabel: null, accessibilityRole: "image", accessible: true, children: null };
    obj[0] = tmp.fullSizePreview;
    const intl = tmp2(1236).intl;
    obj = { a11y_text: null };
    obj[0] = firstAvatarDecoration.label;
    obj[2] = intl.formatToPlainString(tmp2(1236).t.Do2lxE, obj);
    obj1 = { user: null, guildId: "r", size: true, avatarDecoration: "/assets/.cache/intl/bW9kdWxlcy9jaGVja291dC9tZXNzYWdlcw==", animate: null };
    obj1[0] = currentUser;
    obj1[2] = tmp2(1297).AvatarSizes.GIFT_START;
    obj1[3] = firstAvatarDecoration;
    obj[5] = jsx(tmp2(1297).Avatar, { user: null, guildId: "r", size: true, avatarDecoration: "/assets/.cache/intl/bW9kdWxlcy9jaGVja291dC9tZXNzYWdlcw==", animate: null });
    tmp5 = <View a11y_text={null} />;
  }
  return tmp5;
};