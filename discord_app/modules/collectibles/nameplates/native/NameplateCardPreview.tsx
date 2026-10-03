// === Module 8480: NameplateCardPreview ===

// Module 8480 (NameplateCardPreview)
import _mod17 from "module_17" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import utils from "utils" /* 1977 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import NameplateDummyUserPreview from "NameplateDummyUserPreview" /* 8473 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateCardPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(16);
  ({ item, animate } = arg0);
  const tmp5 = closure_6();
  _modDef38(item.type === CollectiblesItemType.CollectiblesItemType.NAMEPLATE, "Item must be Nameplate");
  if (cResult[0] !== item) {
    const nameplateData = utils.getNameplateData(item);
    cResult[0] = item;
    cResult[1] = nameplateData;
    let tmp8 = nameplateData;
    const tmpResult = utils;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { width: 34, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: null };
    const items = [{ opacity: 0.6 }];
    obj2.style = items;
    const tmp12 = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, obj2);
    cResult[2] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { width: 44, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: null };
    const items1 = [{ opacity: 0.6 }];
    obj3.style = items1;
    const tmp15 = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, obj3);
    cResult[3] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] === (undefined !== animate && animate)) {
    if (cResult[5] === tmp8) {
      if (cResult[6] === tmp5.nameplate) {
        let tmp16 = cResult[7];
      }
      if (cResult[8] === tmp5.nameplateContainer) {
        if (cResult[9] === tmp16) {
          let tmp18 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { width: 44, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: null };
          const items2 = [{ opacity: 0.6 }];
          obj4.style = items2;
          const tmp24 = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, obj4);
          cResult[11] = tmp24;
          let tmp22 = tmp24;
        } else {
          tmp22 = cResult[11];
        }
        const _Symbol2 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { width: 34, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: null };
          const items3 = [{ opacity: 0.6 }];
          obj5.style = items3;
          const tmp27 = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, obj5);
          cResult[12] = tmp27;
          let tmp25 = tmp27;
        } else {
          tmp25 = cResult[12];
        }
        if (cResult[13] === tmp5.nameplatePreviewContainer) {
          if (cResult[14] === tmp18) {
            let tmp28 = cResult[15];
          }
          return tmp28;
        }
        const obj6 = { style: tmp5.nameplatePreviewContainer, children: null };
        const items4 = [tmp10, tmp13, tmp18, tmp22, tmp25];
        obj6.children = items4;
        const tmp31 = hasOwnProperty(View, obj6);
        cResult[13] = tmp5.nameplatePreviewContainer;
        cResult[14] = tmp18;
        cResult[15] = tmp31;
        tmp28 = tmp31;
      }
      const obj7 = { style: tmp5.nameplateContainer, children: tmp16 };
      const tmp21 = React4(View, obj7);
      cResult[8] = tmp5.nameplateContainer;
      cResult[9] = tmp16;
      cResult[10] = tmp21;
      tmp18 = tmp21;
    }
  }
  const tmp17 = React4(NameplateDummyUserPreview.NameplateDummyUserPreview, { width: 54, avatarSize: native.AvatarSizes.XSMALL, nameplate: tmp8, style: tmp5.nameplate, animate: undefined !== animate && animate });
  cResult[4] = undefined !== animate && animate;
  cResult[5] = tmp8;
  cResult[6] = tmp5.nameplate;
  cResult[7] = tmp17;
  tmp16 = tmp17;
  const obj8 = { width: 54, avatarSize: native.AvatarSizes.XSMALL, nameplate: tmp8, style: tmp5.nameplate, animate: undefined !== animate && animate };
}) : ((arg0) => {
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
});