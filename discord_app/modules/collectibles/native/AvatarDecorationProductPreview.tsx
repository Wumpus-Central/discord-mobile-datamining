// discord_app/modules/collectibles/native/AvatarDecorationProductPreview.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import firstAvatarDecoration2 from "../hooks/useShopProductItems.tsx";
import useCurrentUser from "../hooks/useCurrentUser.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
let closure_4 = createCacheKey.createStyles({
  fullSizePreview: { flex: 1, alignItems: "center", justifyContent: "center" },
});
const result = require("set").fileFinishedImporting("modules/collectibles/native/AvatarDecorationProductPreview.tsx");

export default function AvatarDecorationProductPreview(product) {
  let obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  obj1 = firstAvatarDecoration2;
  const firstAvatarDecoration = obj1.useShopProductItems(product.product).firstAvatarDecoration;
  let tmp5 = null;
  if (null != firstAvatarDecoration) {
    obj = {
      style: null,
      pointerEvents: "box-none",
      accessibilityLabel: null,
      accessibilityRole: "image",
      accessible: true,
      children: null,
    };
    obj[0] = tmp.fullSizePreview;
    const intl = tmp2(1114).intl;
    obj = { a11y_text: null };
    obj[0] = firstAvatarDecoration.label;
    obj[2] = intl.formatToPlainString(tmp2(1114).t.Do2lxE, obj);
    obj1 = {
      user: null,
      guildId: "r",
      size: true,
      avatarDecoration: "/assets/.cache/intl/bW9kdWxlcy92aXJ0dWFsX2N1cnJlbmN5L3dlYi9vcmJfd2FsbGV0L21lc3NhZ2Vz",
      animate: null,
    };
    obj1[0] = currentUser;
    obj1[2] = tmp2(1178).AvatarSizes.GIFT_START;
    obj1[3] = firstAvatarDecoration;
    obj[5] = jsx(tmp2(1178).Avatar, {
      user: null,
      guildId: "r",
      size: true,
      avatarDecoration: "/assets/.cache/intl/bW9kdWxlcy92aXJ0dWFsX2N1cnJlbmN5L3dlYi9vcmJfd2FsbGV0L21lc3NhZ2Vz",
      animate: null,
    });
    tmp5 = <View a11y_text={null} />;
  }
  return tmp5;
}
