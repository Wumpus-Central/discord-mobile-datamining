// === Module 8513: NameplateCardPreview ===

// Module 8513 (NameplateCardPreview)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import utils from "utils" /* 1977 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import NameplateDummyUserPreview6 from "NameplateDummyUserPreview" /* 8506 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { nameplatePreviewContainer: size, nameplateContainer: obj2, nameplate: obj3 };
size = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", paddingHorizontal: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj2 = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.sm };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_6 = createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let animate;
  let item;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let tmp10;
  let tmp13;
  let tmp8;
  const obj = react;
  const cResult = obj.c(16);
  ({ item, animate } = arg0);
  const tmp5 = closure_6();
  const tmp6 = _modDef38;
  tmp6(item.type === CollectiblesItemType.CollectiblesItemType.NAMEPLATE, "Item must be Nameplate");
  if (cResult[0] !== item) {
    const tmpResult = utils;
    const nameplateData = tmpResult.getNameplateData(item);
    cResult[0] = item;
    cResult[1] = nameplateData;
    tmp8 = nameplateData;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { width: 34, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: items };
    const NameplateDummyUserPreview = NameplateDummyUserPreview6.NameplateDummyUserPreview;
    items = [{ opacity: 0.6 }];
    const tmp12 = React3(NameplateDummyUserPreview, obj2);
    cResult[2] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { width: 44, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: items1 };
    const NameplateDummyUserPreview2 = NameplateDummyUserPreview6.NameplateDummyUserPreview;
    items1 = [{ opacity: 0.6 }];
    const tmp15 = React3(NameplateDummyUserPreview2, obj3);
    cResult[3] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] === (undefined !== animate && animate)) {
    if (cResult[5] === tmp8) {
      let tmp16;
      if (cResult[6] === tmp5.nameplate) {
        tmp16 = cResult[7];
      }
      if (cResult[8] === tmp5.nameplateContainer) {
        let tmp18;
        let tmp22;
        let tmp25;
        if (cResult[9] === tmp16) {
          tmp18 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { width: 44, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: items2 };
          const NameplateDummyUserPreview4 = NameplateDummyUserPreview6.NameplateDummyUserPreview;
          items2 = [{ opacity: 0.6 }];
          const tmp24 = React3(NameplateDummyUserPreview4, obj4);
          cResult[11] = tmp24;
          tmp22 = tmp24;
        } else {
          tmp22 = cResult[11];
        }
        const _Symbol2 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { width: 34, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: items3 };
          const NameplateDummyUserPreview5 = NameplateDummyUserPreview6.NameplateDummyUserPreview;
          items3 = [{ opacity: 0.6 }];
          const tmp27 = React3(NameplateDummyUserPreview5, obj5);
          cResult[12] = tmp27;
          tmp25 = tmp27;
        } else {
          tmp25 = cResult[12];
        }
        if (cResult[13] === tmp5.nameplatePreviewContainer) {
          let tmp28;
          if (cResult[14] === tmp18) {
            tmp28 = cResult[15];
          }
          return tmp28;
        }
        const obj6 = { style: tmp5.nameplatePreviewContainer, children: items4 };
        items4 = [tmp10, tmp13, tmp18, tmp22, tmp25];
        const tmp31 = hasOwnProperty(View, obj6);
        cResult[13] = tmp5.nameplatePreviewContainer;
        cResult[14] = tmp18;
        cResult[15] = tmp31;
        tmp28 = tmp31;
      }
      const obj7 = { style: tmp5.nameplateContainer, children: tmp16 };
      const tmp21 = React3(View, obj7);
      cResult[8] = tmp5.nameplateContainer;
      cResult[9] = tmp16;
      cResult[10] = tmp21;
      tmp18 = tmp21;
    }
  }
  const obj8 = { width: 54, avatarSize: native.AvatarSizes.XSMALL, nameplate: tmp8, style: tmp5.nameplate, animate: undefined !== animate && animate };
  const NameplateDummyUserPreview3 = NameplateDummyUserPreview6.NameplateDummyUserPreview;
  const tmp17 = React3(NameplateDummyUserPreview3, obj8);
  cResult[4] = undefined !== animate && animate;
  cResult[5] = tmp8;
  cResult[6] = tmp5.nameplate;
  cResult[7] = tmp17;
  tmp16 = tmp17;
}) : ((arg0) => {
  let NameplateDummyUserPreview3;
  let animate;
  let item;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj6;
  ({ item, animate } = arg0);
  if (animate === undefined) {
    animate = false;
  }
  const tmp = closure_6();
  const tmp2 = _modDef38;
  tmp2(item.type === CollectiblesItemType.CollectiblesItemType.NAMEPLATE, "Item must be Nameplate");
  const obj2 = { style: tmp.nameplatePreviewContainer, children: items1 };
  const obj = utils;
  const nameplateData = obj.getNameplateData(item);
  const obj3 = { width: 34, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: items };
  const NameplateDummyUserPreview = NameplateDummyUserPreview6.NameplateDummyUserPreview;
  items = [{ opacity: 0.6 }];
  items1 = [React3(NameplateDummyUserPreview, obj3), , , , ];
  const obj4 = { width: 44, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: items2 };
  const NameplateDummyUserPreview2 = NameplateDummyUserPreview6.NameplateDummyUserPreview;
  items2 = [{ opacity: 0.6 }];
  items1[1] = React3(NameplateDummyUserPreview2, obj4);
  const obj5 = { style: tmp.nameplateContainer, children: React3(NameplateDummyUserPreview3, obj6) };
  obj6 = { width: 54, avatarSize: native.AvatarSizes.XSMALL, nameplate: nameplateData, style: tmp.nameplate, animate };
  NameplateDummyUserPreview3 = NameplateDummyUserPreview6.NameplateDummyUserPreview;
  items1[2] = React3(View, obj5);
  const obj7 = { width: 44, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: items3 };
  const NameplateDummyUserPreview4 = NameplateDummyUserPreview6.NameplateDummyUserPreview;
  items3 = [{ opacity: 0.6 }];
  items1[3] = React3(NameplateDummyUserPreview4, obj7);
  const obj8 = { width: 34, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: items4 };
  const NameplateDummyUserPreview5 = NameplateDummyUserPreview6.NameplateDummyUserPreview;
  items4 = [{ opacity: 0.6 }];
  items1[4] = React3(NameplateDummyUserPreview5, obj8);
  return hasOwnProperty(View, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateCardPreview.tsx");

export default tmp4;