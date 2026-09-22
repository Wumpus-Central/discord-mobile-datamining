// === Module 9110: NameplateCardPreview ===

// Module 9110 (NameplateCardPreview)
import _mod17 from "module_17" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import utils from "utils" /* 1970 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1973 */;
import NameplateDummyUserPreview from "NameplateDummyUserPreview" /* 9103 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4757 */;
import size_mod from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { nameplatePreviewContainer: null, nameplateContainer: null, nameplate: null };
let size = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", paddingHorizontal: nativeDefault.space.PX_8 };
obj.nameplatePreviewContainer = size;
obj.nameplateContainer = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.sm };
let obj2 = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.sm };
obj.nameplate = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_6 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateCardPreview.tsx");

export default function NameplateCardPreview(arg0) {
  ({ item, animate } = arg0);
  if (animate === undefined) {
    animate = false;
  }
  const tmp = closure_6();
  _modDef38(item.type === CollectiblesItemType.CollectiblesItemType.NAMEPLATE, "Item must be Nameplate");
  const obj2 = { style: tmp.nameplatePreviewContainer, children: null };
  const nameplateData = utils.getNameplateData(item);
  const obj3 = { width: 34, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: null };
  const items = [{ opacity: 0.6 }];
  obj3.style = items;
  const items1 = [React4(NameplateDummyUserPreview.NameplateDummyUserPreview, obj3), , , , ];
  const obj4 = { width: 44, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: null };
  const items2 = [{ opacity: 0.6 }];
  obj4.style = items2;
  items1[1] = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, obj4);
  const obj5 = { style: tmp.nameplateContainer, children: null };
  obj5.children = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, { width: 54, avatarSize: native.AvatarSizes.XSMALL, nameplate: nameplateData, style: tmp.nameplate, animate });
  items1[2] = React4(View, obj5);
  const obj7 = { width: 44, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: null };
  const items3 = [{ opacity: 0.6 }];
  obj7.style = items3;
  items1[3] = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, obj7);
  const obj8 = { width: 34, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: null };
  const items4 = [{ opacity: 0.6 }];
  obj8.style = items4;
  items1[4] = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, obj8);
  obj2.children = items1;
  return hasOwnProperty(View, obj2);
};