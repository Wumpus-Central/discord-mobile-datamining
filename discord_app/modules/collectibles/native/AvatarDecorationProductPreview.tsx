// discord_app/modules/collectibles/native/AvatarDecorationProductPreview.tsx
import useShopProductItems from "../hooks/useShopProductItems.tsx";
import useCurrentUser from "../hooks/useCurrentUser.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles({
  fullSizePreview: { flex: 1, alignItems: "center", justifyContent: "center" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/AvatarDecorationProductPreview.tsx");

export default function AvatarDecorationProductPreview(product) {
  let obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  let obj1 = useShopProductItems;
  const firstAvatarDecoration = obj1.useShopProductItems(product.product).firstAvatarDecoration;
  let tmp5 = null;
  if (null != firstAvatarDecoration) {
    obj = {
      style: tmp.fullSizePreview,
      pointerEvents: "box-none",
      accessibilityLabel: null,
      accessibilityRole: "image",
      accessible: true,
      children: null,
    };
    const intl = tmp2(1114).intl;
    obj = { a11y_text: firstAvatarDecoration.label };
    obj.accessibilityLabel = intl.formatToPlainString(tmp2(1114).t.Do2lxE, obj);
    obj1 = {
      user: currentUser,
      guildId: "r",
      size: tmp2(1178).AvatarSizes.GIFT_START,
      avatarDecoration: firstAvatarDecoration,
      animate: null,
    };
    obj.children = jsx(tmp2(1178).Avatar, {
      user: currentUser,
      guildId: "r",
      size: tmp2(1178).AvatarSizes.GIFT_START,
      avatarDecoration: firstAvatarDecoration,
      animate: null,
    });
    tmp5 = <View a11y_text={firstAvatarDecoration.label} />;
  }
  return tmp5;
}
