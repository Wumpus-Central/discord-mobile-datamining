// === Module 12968: CollectiblesItemMiniPreview ===

// Module 12968 (CollectiblesItemMiniPreview)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils from "utils" /* 1977 */;
import FastImageDefault from "FastImage" /* 5974 */;
import ProfileEffectDefault from "ProfileEffect" /* 8457 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 8466 */;
import NameplateDefault from "Nameplate" /* 8474 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 8478 */;
import _modDef8479 from "module_8479" /* 8479 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const isAvatarDecorationRecord = fn(7058).isAvatarDecorationRecord;
const isNameplateRecord = fn(1978).isNameplateRecord;
const isProfileEffectRecord = fn(7059).isProfileEffectRecord;
const isProfileFrameRecord = fn(7060).isProfileFrameRecord;
let closure_8 = fn(7893).PROFILE_FRAME_ASPECT_RATIO;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(4890);
let obj = { tile: { overflow: "hidden", alignItems: "center", justifyContent: "center" }, framePreview: { width: "100%", height: "100%", paddingVertical: PX_8, overflow: "hidden", alignItems: "center", justifyContent: "center" }, profileEffect: null, sampleProfile: null, nameplate: null, nameplateTile: null, nameplateStrip: null };
let size = { overflow: "hidden", width: "100%", height: "100%", borderRadius: nativeDefault.radii.sm };
obj.profileEffect = size;
obj.sampleProfile = { aspectRatio: fn(8454).SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" };
obj.nameplate = { overflow: "hidden", borderTopRightRadius: nativeDefault.radii.xs, borderBottomRightRadius: nativeDefault.radii.xs };
obj.nameplateTile = { alignItems: "flex-start" };
obj.nameplateStrip = { width: "90%", aspectRatio: 1.6, position: "relative" };
let closure_12 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { overflow: "hidden", borderTopRightRadius: nativeDefault.radii.xs, borderBottomRightRadius: nativeDefault.radii.xs };
size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesItemMiniPreview.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(47);
  ({ item, size } = arg0);
  const tmp4 = closure_12();
  if (cResult[0] !== size) {
    const size1 = { width: size, height: size };
    cResult[0] = size;
    cResult[1] = size1;
    let tmp5 = size1;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.tile) {
    if (cResult[3] === tmp5) {
      let tmp6 = cResult[4];
    }
    if (isAvatarDecorationRecord(item)) {
      const result = 0.75 * size;
      if (cResult[5] === item) {
        if (cResult[6] === result) {
          let tmp64 = cResult[7];
        }
        if (cResult[8] === tmp64) {
          if (cResult[9] === tmp6) {
            let tmp68 = cResult[10];
          }
          return tmp68;
        }
        const obj2 = { style: tmp6, children: tmp64 };
        const tmp71 = options(View, obj2);
        cResult[8] = tmp64;
        cResult[9] = tmp6;
        cResult[10] = tmp71;
        tmp68 = tmp71;
      }
      const obj3 = { item, size: result };
      const tmp67 = options(AvatarDecorationSampleV2Default, obj3);
      cResult[5] = item;
      cResult[6] = result;
      cResult[7] = tmp67;
      tmp64 = tmp67;
    } else if (isProfileFrameRecord(item)) {
      const result1 = size * closure_8;
      const diff = size - 2 * PX_8;
      if (cResult[11] === item) {
        if (cResult[12] === result1) {
          if (cResult[13] === diff) {
            let tmp50 = cResult[14];
          }
          if (cResult[15] === tmp4.framePreview) {
            if (cResult[16] === tmp50) {
              let tmp55 = cResult[17];
            }
            if (cResult[18] === tmp55) {
              if (cResult[19] === tmp6) {
                let tmp59 = cResult[20];
              }
              return tmp59;
            }
            const obj4 = { style: tmp6, children: tmp55 };
            const tmp62 = options(View, obj4);
            cResult[18] = tmp55;
            cResult[19] = tmp6;
            cResult[20] = tmp62;
            tmp59 = tmp62;
          }
          const obj5 = { style: tmp4.framePreview, children: tmp50 };
          const tmp58 = options(View, obj5);
          cResult[15] = tmp4.framePreview;
          cResult[16] = tmp50;
          cResult[17] = tmp58;
          tmp55 = tmp58;
        }
      }
      const obj6 = { profileFrame: item, previewWidth: result1, previewHeight: diff, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
      const tmp54 = options(ProfileFrameSamplePreviewDefault, obj6);
      cResult[11] = item;
      cResult[12] = result1;
      cResult[13] = diff;
      cResult[14] = tmp54;
      tmp50 = tmp54;
    } else if (isProfileEffectRecord(item)) {
      const _Symbol = Symbol;
      if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { uri: _modDef8479 };
        cResult[21] = obj7;
        let tmp28 = obj7;
      } else {
        tmp28 = cResult[21];
      }
      if (cResult[22] !== tmp4.sampleProfile) {
        const obj8 = { source: tmp28, style: tmp4.sampleProfile, resizeMode: "cover" };
        const tmp33 = options(FastImageDefault, obj8);
        cResult[22] = tmp4.sampleProfile;
        cResult[23] = tmp33;
        let tmp30 = tmp33;
      } else {
        tmp30 = cResult[23];
      }
      if (cResult[24] !== item.skuId) {
        const obj9 = { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true };
        const tmp37 = options(ProfileEffectDefault, obj9);
        cResult[24] = item.skuId;
        cResult[25] = tmp37;
        let tmp34 = tmp37;
      } else {
        tmp34 = cResult[25];
      }
      if (cResult[26] === tmp4.profileEffect) {
        if (cResult[27] === tmp30) {
          if (cResult[28] === tmp34) {
            let tmp38 = cResult[29];
          }
          if (cResult[30] === tmp38) {
            if (cResult[31] === tmp6) {
              let tmp42 = cResult[32];
            }
            return tmp42;
          }
          const obj10 = { style: tmp6, children: tmp38 };
          const tmp45 = options(View, obj10);
          cResult[30] = tmp38;
          cResult[31] = tmp6;
          cResult[32] = tmp45;
          tmp42 = tmp45;
        }
      }
      const obj11 = { style: tmp4.profileEffect, accessible: false, importantForAccessibility: "no", children: null };
      const items = [tmp30, tmp34];
      obj11.children = items;
      const tmp41 = v65535(View, obj11);
      cResult[26] = tmp4.profileEffect;
      cResult[27] = tmp30;
      cResult[28] = tmp34;
      cResult[29] = tmp41;
      tmp38 = tmp41;
    } else if (isNameplateRecord(item)) {
      if (cResult[33] !== item) {
        const nameplateData = utils.getNameplateData(item);
        cResult[33] = item;
        cResult[34] = nameplateData;
        let tmp12 = nameplateData;
        const tmpResult = utils;
      } else {
        tmp12 = cResult[34];
      }
      if (cResult[35] === tmp4.nameplateTile) {
        if (cResult[36] === tmp6) {
          let tmp14 = cResult[37];
        }
        if (cResult[38] === tmp12) {
          if (cResult[39] === tmp4.nameplate) {
            let tmp15 = cResult[40];
          }
          if (cResult[41] === tmp4.nameplateStrip) {
            if (cResult[42] === tmp15) {
              let tmp19 = cResult[43];
            }
            if (cResult[44] === tmp14) {
              if (cResult[45] === tmp19) {
                let tmp23 = cResult[46];
              }
              return tmp23;
            }
            const obj12 = { style: tmp14, children: tmp19 };
            const tmp26 = options(View, obj12);
            cResult[44] = tmp14;
            cResult[45] = tmp19;
            cResult[46] = tmp26;
            tmp23 = tmp26;
          }
          const obj13 = { style: tmp4.nameplateStrip, children: tmp15 };
          const tmp22 = options(View, obj13);
          cResult[41] = tmp4.nameplateStrip;
          cResult[42] = tmp15;
          cResult[43] = tmp22;
          tmp19 = tmp22;
        }
        const obj14 = { nameplate: tmp12, fullOpacity: true, style: tmp4.nameplate };
        const tmp18 = options(NameplateDefault, obj14);
        cResult[38] = tmp12;
        cResult[39] = tmp4.nameplate;
        cResult[40] = tmp18;
        tmp15 = tmp18;
      }
      const items1 = [tmp6, tmp4.nameplateTile];
      cResult[35] = tmp4.nameplateTile;
      cResult[36] = tmp6;
      cResult[37] = items1;
      tmp14 = items1;
    } else {
      return null;
    }
  }
  const items2 = [tmp4.tile, tmp5];
  cResult[2] = tmp4.tile;
  cResult[3] = tmp5;
  cResult[4] = items2;
  tmp6 = items2;
}) : ((arg0) => {
  ({ item, size } = arg0);
  const tmp = closure_12();
  const items = [tmp.tile, { width: size, height: size }];
  if (isAvatarDecorationRecord(item)) {
    const obj2 = { style: items, children: null };
    const obj3 = { item, size: 0.75 * size };
    obj2.children = options(AvatarDecorationSampleV2Default, obj3);
    return options(View, obj2);
  } else if (isProfileFrameRecord(item)) {
    const obj4 = { style: items, children: null };
    const obj5 = { style: tmp.framePreview, children: null };
    const obj6 = { profileFrame: item, previewWidth: size * closure_8, previewHeight: size - 2 * PX_8, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
    obj5.children = options(ProfileFrameSamplePreviewDefault, obj6);
    obj4.children = options(View, obj5);
    return options(View, obj4);
  } else if (isProfileEffectRecord(item)) {
    const obj7 = { style: items, children: null };
    const obj8 = { style: tmp.profileEffect, accessible: false, importantForAccessibility: "no", children: null };
    const obj9 = { source: null, style: null, resizeMode: "cover" };
    const obj10 = { uri: _modDef8479 };
    obj9.source = obj10;
    obj9.style = tmp.sampleProfile;
    const items1 = [options(FastImageDefault, obj9), ];
    const obj11 = { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true };
    items1[1] = options(ProfileEffectDefault, obj11);
    obj8.children = items1;
    obj7.children = v65535(View, obj8);
    return options(View, obj7);
  } else if (isNameplateRecord(item)) {
    const obj12 = { style: null, children: null };
    const items2 = [items, tmp.nameplateTile];
    obj12.style = items2;
    const obj13 = { style: tmp.nameplateStrip, children: null };
    const nameplateData = utils.getNameplateData(item);
    const obj14 = { nameplate: nameplateData, fullOpacity: true, style: tmp.nameplate };
    obj13.children = options(NameplateDefault, obj14);
    obj12.children = options(View, obj13);
    return options(View, obj12);
  } else {
    return null;
  }
}));