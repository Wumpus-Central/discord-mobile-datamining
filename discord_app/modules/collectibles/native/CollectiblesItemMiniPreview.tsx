// discord_app/modules/collectibles/native/CollectiblesItemMiniPreview.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getNameplateData from "../nameplates/utils.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import StaticEffectDefault from "../profile_effects/native/ProfileEffect.tsx";
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2.tsx";
import NameplateInnerDefault from "../nameplates/native/Nameplate.tsx";
import filterLayerDefault from "../profile_frames/native/previews/ProfileFrameSamplePreview.tsx";
import metadataDefault from "../../../../discord_assets/assets/collectibles/previews/sample_profile_small-2x.png.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { isAvatarDecorationRecord, isNameplateRecord, isProfileEffectRecord, isProfileFrameRecord } from "../records/AvatarDecorationRecord.tsx";
import { PROFILE_FRAME_ASPECT_RATIO as closure_8 } from "../profile_frames/native/ProfileFrameConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";

require = arg1;
({ jsx: c9, jsxs: c10 } = jsxProd);
const PX_8 = ThemesDefault.space.PX_8;
let obj = { tile: { overflow: "hidden", alignItems: "center", justifyContent: "center" }, framePreview: { width: "100%", height: "100%", paddingVertical: PX_8, overflow: "hidden", alignItems: "center", justifyContent: "center" }, profileEffect: null, sampleProfile: null, nameplate: null, nameplateTile: null, nameplateStrip: null };
obj = { overflow: "hidden", width: "100%", height: "100%", borderRadius: ThemesDefault.radii.sm };
obj[2] = obj;
obj[3] = { aspectRatio: require("SAMPLE_PROFILE_ASPECT_RATIO").SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" };
createCacheKey = { overflow: "hidden", borderTopRightRadius: ThemesDefault.radii.xs, borderBottomRightRadius: ThemesDefault.radii.xs };
obj[4] = createCacheKey;
obj[5] = { alignItems: "flex-start" };
obj[6] = { width: "90%", aspectRatio: 1.6, position: "relative" };
let closure_12 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function CollectiblesItemMiniPreview(arg0) {
  ({ item, size } = arg0);
  const tmp = callback3();
  const items = [tmp.tile, { width: size, height: size }];
  if (isAvatarDecorationRecord(item)) {
    let obj = { style: null, children: null };
    obj[0] = items;
    obj = { item: null, size: null };
    obj[0] = item;
    obj[1] = 0.75 * size;
    obj[1] = callback(AvatarDecorationSampleV2Default, obj);
    return callback(View, obj);
  } else if (isProfileFrameRecord(item)) {
    obj1 = { style: null, children: null };
    obj1[0] = items;
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.framePreview;
    const obj3 = { profileFrame: null, previewWidth: null, previewHeight: null, profileBackgroundColor: null };
    obj3[0] = item;
    obj3[1] = size * closure_8;
    obj3[2] = size - 2 * PX_8;
    obj3[3] = ThemesDefault.colors.BACKGROUND_BASE_LOW;
    obj2[1] = callback(filterLayerDefault, obj3);
    obj1[1] = callback(View, obj2);
    return callback(View, obj1);
  } else if (isProfileEffectRecord(item)) {
    const obj4 = { style: null, children: null };
    obj4[0] = items;
    const obj5 = { style: null, accessible: false, importantForAccessibility: "no", children: null };
    obj5[0] = tmp.profileEffect;
    const obj6 = { source: null, style: null, resizeMode: "cover" };
    const obj7 = { uri: null };
    obj7[0] = metadataDefault;
    obj6[0] = obj7;
    obj6[1] = tmp.sampleProfile;
    const items1 = [callback(preloadDefault, obj6), ];
    const obj8 = { skuId: null, bannerAdjustment: 0, useThumbnail: true };
    obj8[0] = item.skuId;
    items1[1] = callback(StaticEffectDefault, obj8);
    obj5[3] = items1;
    obj4[1] = callback2(View, obj5);
    return callback(View, obj4);
  } else if (isNameplateRecord(item)) {
    obj = getNameplateData;
    const obj9 = { style: null, children: null };
    const items2 = [items, tmp.nameplateTile];
    obj9[0] = items2;
    const obj10 = { style: null, children: null };
    obj10[0] = tmp.nameplateStrip;
    const nameplateData = obj.getNameplateData(item);
    const obj11 = { nameplate: null, fullOpacity: true, style: null };
    obj11[0] = nameplateData;
    obj11[2] = tmp.nameplate;
    obj10[1] = callback(NameplateInnerDefault, obj11);
    obj9[1] = callback(View, obj10);
    return callback(View, obj9);
  } else {
    return null;
  }
});
const result = require("set").fileFinishedImporting("modules/collectibles/native/CollectiblesItemMiniPreview.tsx");

export default memoResult;