// discord_app/modules/collectibles/nameplates/native/NameplateCardPreview.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { 00038__ } from "../../../../../_runtime/metro/00038__.js";
import { CollectiblesItemType } from "../../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { getNameplateData } from "../utils.tsx";
import { NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG } from "NameplateDummyUserPreview.tsx";

let c4;
let c5;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { nameplatePreviewContainer: null, nameplateContainer: null, nameplate: null };
obj = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", paddingHorizontal: require("Themes").space.PX_8 };
obj[0] = obj;
obj[1] = { width: "100%", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, borderRadius: require("Themes").radii.sm };
let obj1 = { width: "100%", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, borderRadius: require("Themes").radii.sm };
obj[2] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
let closure_6 = createCacheKey.createStyles(obj);
let obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
const result = require("createCacheKey").fileFinishedImporting("modules/collectibles/nameplates/native/NameplateCardPreview.tsx");

export default function NameplateCardPreview(arg0) {
  let animate;
  let item;
  ({ item, animate } = arg0);
  if (animate === undefined) {
    animate = false;
  }
  const tmp = callback3();
  00038__(item.type === CollectiblesItemType.CollectiblesItemType.NAMEPLATE, "Item must be Nameplate");
  let obj = getNameplateData;
  obj = { style: tmp.nameplatePreviewContainer, children: null };
  const nameplateData = obj.getNameplateData(item);
  obj = { width: 34, avatarSize: null, hideAvatar: true, style: null };
  obj[1] = Button.AvatarSizes.XSMALL;
  const items = [{ opacity: 0.6 }];
  obj[3] = items;
  const items1 = [callback(NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG.NameplateDummyUserPreview, obj), , , , ];
  const obj1 = { width: 44, avatarSize: null, hideAvatar: true, style: null };
  obj1[1] = Button.AvatarSizes.XSMALL;
  const items2 = [{ opacity: 0.6 }];
  obj1[3] = items2;
  items1[1] = callback(NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG.NameplateDummyUserPreview, obj1);
  const obj2 = { style: tmp.nameplateContainer, children: null };
  const obj3 = { width: 54, avatarSize: null, nameplate: null, style: null, animate: null };
  obj3[1] = Button.AvatarSizes.XSMALL;
  obj3[2] = nameplateData;
  obj3[3] = tmp.nameplate;
  obj3[4] = animate;
  obj2[1] = callback(NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG.NameplateDummyUserPreview, obj3);
  items1[2] = callback(View, obj2);
  const obj4 = { width: 44, avatarSize: null, hideAvatar: true, style: null };
  obj4[1] = Button.AvatarSizes.XSMALL;
  const items3 = [{ opacity: 0.6 }];
  obj4[3] = items3;
  items1[3] = callback(NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG.NameplateDummyUserPreview, obj4);
  const obj5 = { width: 34, avatarSize: null, hideAvatar: true, style: null };
  obj5[1] = Button.AvatarSizes.XSMALL;
  const items4 = [{ opacity: 0.6 }];
  obj5[3] = items4;
  items1[4] = callback(NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG.NameplateDummyUserPreview, obj5);
  obj[1] = items1;
  return callback2(View, obj);
};