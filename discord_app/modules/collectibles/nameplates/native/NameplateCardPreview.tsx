// discord_app/modules/collectibles/nameplates/native/NameplateCardPreview.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import getNameplateData from "../utils.tsx";
import CollectiblesItemType from "../../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG from "NameplateDummyUserPreview.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const View = get_ActivityIndicator.View;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { nameplatePreviewContainer: null, nameplateContainer: null, nameplate: null };
obj = {
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  paddingHorizontal: ThemesDefault.space.PX_8,
};
obj[0] = obj;
obj[1] = {
  width: "100%",
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER,
  borderRadius: ThemesDefault.radii.sm,
};
let obj1 = {
  width: "100%",
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER,
  borderRadius: ThemesDefault.radii.sm,
};
obj[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
let closure_6 = createCacheKey.createStyles(obj);
let obj2 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
const result = set.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateCardPreview.tsx");

export default function NameplateCardPreview(arg0) {
  ({ item, animate } = arg0);
  if (animate === undefined) {
    animate = false;
  }
  const tmp = callback3();
  _modDef38(item.type === CollectiblesItemType.CollectiblesItemType.NAMEPLATE, "Item must be Nameplate");
  let obj = getNameplateData;
  obj = { style: tmp.nameplatePreviewContainer, children: null };
  const nameplateData = obj.getNameplateData(item);
  obj = { width: 34, avatarSize: Button.AvatarSizes.XSMALL, hideAvatar: true, style: items };
  items = [{ opacity: 0.6 }];
  const items1 = [callback(NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG.NameplateDummyUserPreview, obj), , , ,];
  const tmp2 = _modDef38;
  const items2 = [{ opacity: 0.6 }];
  items1[1] = callback(NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG.NameplateDummyUserPreview, {
    width: 44,
    avatarSize: Button.AvatarSizes.XSMALL,
    hideAvatar: true,
    style: items2,
  });
  const obj2 = { style: tmp.nameplateContainer, children: null };
  obj1 = { width: 44, avatarSize: Button.AvatarSizes.XSMALL, hideAvatar: true, style: items2 };
  obj2[1] = callback(NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG.NameplateDummyUserPreview, {
    width: 54,
    avatarSize: Button.AvatarSizes.XSMALL,
    nameplate: nameplateData,
    style: tmp.nameplate,
    animate,
  });
  items1[2] = callback(View, obj2);
  const obj3 = {
    width: 54,
    avatarSize: Button.AvatarSizes.XSMALL,
    nameplate: nameplateData,
    style: tmp.nameplate,
    animate,
  };
  const items3 = [{ opacity: 0.6 }];
  items1[3] = callback(NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG.NameplateDummyUserPreview, {
    width: 44,
    avatarSize: Button.AvatarSizes.XSMALL,
    hideAvatar: true,
    style: items3,
  });
  const obj4 = { width: 44, avatarSize: Button.AvatarSizes.XSMALL, hideAvatar: true, style: items3 };
  const items4 = [{ opacity: 0.6 }];
  items1[4] = callback(NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG.NameplateDummyUserPreview, {
    width: 34,
    avatarSize: Button.AvatarSizes.XSMALL,
    hideAvatar: true,
    style: items4,
  });
  obj[1] = items1;
  return callback2(View, obj);
}
