// discord_app/modules/collectibles/native/CollectiblesItemMiniPreview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils from "../nameplates/utils.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import ProfileEffectDefault from "../profile_effects/native/ProfileEffect.tsx";
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2.tsx";
import NameplateDefault from "../nameplates/native/Nameplate.tsx";
import ProfileFrameSamplePreviewDefault from "../profile_frames/native/previews/ProfileFrameSamplePreview.tsx";
import _modDef8823 from "../../../../discord_assets/assets/collectibles/previews/sample_profile_small-2x.png.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const isAvatarDecorationRecord = fn(7547).isAvatarDecorationRecord;
const isNameplateRecord = fn(1887).isNameplateRecord;
const isProfileEffectRecord = fn(7548).isProfileEffectRecord;
const isProfileFrameRecord = fn(7549).isProfileFrameRecord;
let closure_8 = fn(8222).PROFILE_FRAME_ASPECT_RATIO;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(4560);
let obj = {
  tile: { overflow: "hidden", alignItems: "center", justifyContent: "center" },
  framePreview: {
    width: "100%",
    height: "100%",
    paddingVertical: PX_8,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  profileEffect: null,
  sampleProfile: null,
  nameplate: null,
  nameplateTile: null,
  nameplateStrip: null,
};
let size = { overflow: "hidden", width: "100%", height: "100%", borderRadius: nativeDefault.radii.sm };
obj.profileEffect = size;
obj.sampleProfile = { aspectRatio: fn(8798).SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" };
obj = {
  overflow: "hidden",
  borderTopRightRadius: nativeDefault.radii.xs,
  borderBottomRightRadius: nativeDefault.radii.xs,
};
obj.nameplate = obj;
obj.nameplateTile = { alignItems: "flex-start" };
obj.nameplateStrip = { width: "90%", aspectRatio: 1.6, position: "relative" };
let closure_12 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesItemMiniPreview.tsx");

export default noop.memo(function CollectiblesItemMiniPreview(arg0) {
  ({ item, size } = arg0);
  const tmp = closure_12();
  const items = [tmp.tile, { width: size, height: size }];
  if (isAvatarDecorationRecord(item)) {
    let obj = { style: items, children: null };
    obj = { item, size: 0.75 * size };
    obj.children = React7(AvatarDecorationSampleV2Default, obj);
    return React7(View, obj);
  } else if (isProfileFrameRecord(item)) {
    const obj1 = { style: items, children: null };
    const obj2 = { style: tmp.framePreview, children: null };
    const obj3 = {
      profileFrame: item,
      previewWidth: size * closure_8,
      previewHeight: size - 2 * PX_8,
      profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    };
    obj2.children = React7(ProfileFrameSamplePreviewDefault, obj3);
    obj1.children = React7(View, obj2);
    return React7(View, obj1);
  } else if (isProfileEffectRecord(item)) {
    const obj4 = { style: items, children: null };
    const obj5 = { style: tmp.profileEffect, accessible: false, importantForAccessibility: "no", children: null };
    const obj6 = { source: null, style: null, resizeMode: "cover" };
    const obj7 = { uri: _modDef8823 };
    obj6.source = obj7;
    obj6.style = tmp.sampleProfile;
    const items1 = [React7(FastImageDefault, obj6)];
    const obj8 = { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true };
    items1[1] = React7(ProfileEffectDefault, obj8);
    obj5.children = items1;
    obj4.children = closure_1_10(View, obj5);
    return React7(View, obj4);
  } else if (isNameplateRecord(item)) {
    obj = utils;
    const obj9 = { style: null, children: null };
    const items2 = [items, tmp.nameplateTile];
    obj9.style = items2;
    const obj10 = { style: tmp.nameplateStrip, children: null };
    const nameplateData = obj.getNameplateData(item);
    const obj11 = { nameplate: nameplateData, fullOpacity: true, style: tmp.nameplate };
    obj10.children = React7(NameplateDefault, obj11);
    obj9.children = React7(View, obj10);
    return React7(View, obj9);
  } else {
    return null;
  }
});
