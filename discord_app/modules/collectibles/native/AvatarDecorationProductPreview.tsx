// === Module 9571: AvatarDecorationProductPreview ===

// Module 9571 (AvatarDecorationProductPreview)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import useCurrentUser from "useCurrentUser" /* 9176 */;
import firstAvatarDecoration2 from "firstAvatarDecoration" /* 9205 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
let closure_4 = createCacheKey.createStyles({ fullSizePreview: { flex: 1, alignItems: "center", justifyContent: "center" } });
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/AvatarDecorationProductPreview.tsx");

export default function AvatarDecorationProductPreview(product) {
  let obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  obj1 = firstAvatarDecoration2;
  const firstAvatarDecoration = obj1.useShopProductItems(product.product).firstAvatarDecoration;
  let tmp5 = null;
  if (null != firstAvatarDecoration) {
    obj = { style: null, pointerEvents: "box-none", accessibilityLabel: null, accessibilityRole: "image", accessible: true, children: null };
    obj[0] = tmp.fullSizePreview;
    const intl = getSystemLocale.intl;
    obj = { a11y_text: null };
    obj[0] = firstAvatarDecoration.label;
    obj[2] = intl.formatToPlainString(getSystemLocale.t.Do2lxE, obj);
    obj1 = { user: null, guildId: "r", size: true, avatarDecoration: "/assets/.cache/intl/bW9kdWxlcy9hZHM=", animate: null };
    obj1[0] = currentUser;
    obj1[2] = Button.AvatarSizes.GIFT_START;
    obj1[3] = firstAvatarDecoration;
    obj[5] = jsx(Button.Avatar, { user: null, guildId: "r", size: true, avatarDecoration: "/assets/.cache/intl/bW9kdWxlcy9hZHM=", animate: null });
    tmp5 = <View a11y_text={null} />;
  }
  return tmp5;
};