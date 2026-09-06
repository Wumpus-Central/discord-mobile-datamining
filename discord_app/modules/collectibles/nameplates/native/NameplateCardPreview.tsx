// === Module 8824: NameplateCardPreview ===

// Module 8824 (NameplateCardPreview)
import _mod17 from "module_17" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import utils from "utils" /* 1886 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import NameplateDummyUserPreview from "NameplateDummyUserPreview" /* 8817 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { nameplatePreviewContainer: null, nameplateContainer: null, nameplate: null };
let size = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", paddingHorizontal: nativeDefault.space.PX_8 };
obj.nameplatePreviewContainer = size;
obj = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.sm };
obj.nameplateContainer = obj;
obj.nameplate = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateCardPreview.tsx");

export default function NameplateCardPreview(arg0) {
  ({ item, animate } = arg0);
  if (animate === undefined) {
    animate = false;
  }
  const tmp = closure_6();
  _modDef38(item.type === CollectiblesItemType.CollectiblesItemType.NAMEPLATE, "Item must be Nameplate");
  let obj = { style: tmp.nameplatePreviewContainer, children: null };
  const nameplateData = obj.getNameplateData(item);
  obj = { width: 34, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: null };
  const items = [{ opacity: 0.6 }];
  obj.style = items;
  const items1 = [React4(NameplateDummyUserPreview.NameplateDummyUserPreview, obj), , , , ];
  const obj1 = { width: 44, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: null };
  const items2 = [{ opacity: 0.6 }];
  obj1.style = items2;
  items1[1] = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, obj1);
  const obj2 = { style: tmp.nameplateContainer, children: null };
  obj2.children = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, { width: 54, avatarSize: native.AvatarSizes.XSMALL, nameplate: nameplateData, style: tmp.nameplate, animate });
  items1[2] = React4(View, obj2);
  const obj4 = { width: 44, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: null };
  const items3 = [{ opacity: 0.6 }];
  obj4.style = items3;
  items1[3] = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, obj4);
  const obj5 = { width: 34, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: null };
  const items4 = [{ opacity: 0.6 }];
  obj5.style = items4;
  items1[4] = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, obj5);
  obj.children = items1;
  return hasOwnProperty(View, obj);
};