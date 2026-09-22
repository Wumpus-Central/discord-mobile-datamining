// === Module 13449: CollectiblesItemMiniPreview ===

// Module 13449 (CollectiblesItemMiniPreview)
import nativeDefault from "native" /* 576 */;
import utils from "utils" /* 1970 */;
import FastImageDefault from "FastImage" /* 5806 */;
import ProfileEffectDefault from "ProfileEffect" /* 9087 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 9096 */;
import NameplateDefault from "Nameplate" /* 9104 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 9108 */;
import _modDef9109 from "module_9109" /* 9109 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const isAvatarDecorationRecord = fn(7792).isAvatarDecorationRecord;
const isNameplateRecord = fn(1971).isNameplateRecord;
const isProfileEffectRecord = fn(7793).isProfileEffectRecord;
const isProfileFrameRecord = fn(7794).isProfileFrameRecord;
let closure_8 = fn(8495).PROFILE_FRAME_ASPECT_RATIO;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(4757);
const obj = { tile: { overflow: "hidden", alignItems: "center", justifyContent: "center" }, framePreview: { width: "100%", height: "100%", paddingVertical: PX_8, overflow: "hidden", alignItems: "center", justifyContent: "center" }, profileEffect: null, sampleProfile: null, nameplate: null, nameplateTile: null, nameplateStrip: null };
let size = { overflow: "hidden", width: "100%", height: "100%", borderRadius: nativeDefault.radii.sm };
obj.profileEffect = size;
obj.sampleProfile = { aspectRatio: fn(9084).SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" };
obj.nameplate = { overflow: "hidden", borderTopRightRadius: nativeDefault.radii.xs, borderBottomRightRadius: nativeDefault.radii.xs };
obj.nameplateTile = { alignItems: "flex-start" };
obj.nameplateStrip = { width: "90%", aspectRatio: 1.6, position: "relative" };
let closure_12 = createStyles.createStyles(obj);
let obj3 = { overflow: "hidden", borderTopRightRadius: nativeDefault.radii.xs, borderBottomRightRadius: nativeDefault.radii.xs };
size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesItemMiniPreview.tsx");

export default noop.memo(function CollectiblesItemMiniPreview(arg0) {
  ({ item, size } = arg0);
  const tmp = closure_12();
  const items = [tmp.tile, { width: size, height: size }];
  if (isAvatarDecorationRecord(item)) {
    const obj2 = { style: items, children: null };
    const obj3 = { item, size: 0.75 * size };
    obj2.children = React7(AvatarDecorationSampleV2Default, obj3);
    return React7(View, obj2);
  } else if (isProfileFrameRecord(item)) {
    const obj4 = { style: items, children: null };
    const obj5 = { style: tmp.framePreview, children: null };
    const obj6 = { profileFrame: item, previewWidth: size * closure_8, previewHeight: size - 2 * PX_8, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
    obj5.children = React7(ProfileFrameSamplePreviewDefault, obj6);
    obj4.children = React7(View, obj5);
    return React7(View, obj4);
  } else if (isProfileEffectRecord(item)) {
    const obj7 = { style: items, children: null };
    const obj8 = { style: tmp.profileEffect, accessible: false, importantForAccessibility: "no", children: null };
    const obj9 = { source: null, style: null, resizeMode: "cover" };
    const obj10 = { uri: _modDef9109 };
    obj9.source = obj10;
    obj9.style = tmp.sampleProfile;
    const items1 = [React7(FastImageDefault, obj9), ];
    const obj11 = { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true };
    items1[1] = React7(ProfileEffectDefault, obj11);
    obj8.children = items1;
    obj7.children = closure_1_10(View, obj8);
    return React7(View, obj7);
  } else if (isNameplateRecord(item)) {
    const obj12 = { style: null, children: null };
    const items2 = [items, tmp.nameplateTile];
    obj12.style = items2;
    const obj13 = { style: tmp.nameplateStrip, children: null };
    const nameplateData = utils.getNameplateData(item);
    const obj14 = { nameplate: nameplateData, fullOpacity: true, style: tmp.nameplate };
    obj13.children = React7(NameplateDefault, obj14);
    obj12.children = React7(View, obj13);
    return React7(View, obj12);
  } else {
    return null;
  }
});