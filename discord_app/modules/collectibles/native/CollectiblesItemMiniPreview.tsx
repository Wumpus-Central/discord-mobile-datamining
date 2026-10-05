// === Module 12970: CollectiblesItemMiniPreview ===

// Module 12970 (CollectiblesItemMiniPreview)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils from "utils" /* 1977 */;
import NameplateRecord from "NameplateRecord" /* 1978 */;
import FastImageDefault from "FastImage" /* 5974 */;
import AvatarDecorationRecord from "AvatarDecorationRecord" /* 7058 */;
import ProfileEffectRecord from "ProfileEffectRecord" /* 7059 */;
import ProfileFrameRecord from "ProfileFrameRecord" /* 7060 */;
import ProfileFrameConstants from "ProfileFrameConstants" /* 7893 */;
import CollectiblesPreviewConstants from "CollectiblesPreviewConstants" /* 8454 */;
import ProfileEffectDefault from "ProfileEffect" /* 8457 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 8466 */;
import NameplateDefault from "Nameplate" /* 8474 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 8478 */;
import _modDef8479 from "module_8479" /* 8479 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let obj2;
let size;
const View = react_native.View;
const isAvatarDecorationRecord = AvatarDecorationRecord.isAvatarDecorationRecord;
const isNameplateRecord = NameplateRecord.isNameplateRecord;
const isProfileEffectRecord = ProfileEffectRecord.isProfileEffectRecord;
const isProfileFrameRecord = ProfileFrameRecord.isProfileFrameRecord;
let closure_8 = ProfileFrameConstants.PROFILE_FRAME_ASPECT_RATIO;
const SAMPLE_PROFILE_ASPECT_RATIO = CollectiblesPreviewConstants.SAMPLE_PROFILE_ASPECT_RATIO;
({ jsx: c9, jsxs: c10 } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { tile: { overflow: "hidden", alignItems: "center", justifyContent: "center" }, framePreview: { width: "100%", height: "100%", paddingVertical: PX_8, overflow: "hidden", alignItems: "center", justifyContent: "center" }, profileEffect: size, sampleProfile: { aspectRatio: SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" }, nameplate: obj2, nameplateTile: { alignItems: "flex-start" }, nameplateStrip: { width: "90%", aspectRatio: 1.6, position: "relative" } };
size = { overflow: "hidden", width: "100%", height: "100%", borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj2 = { overflow: "hidden", borderTopRightRadius: nativeDefault.radii.xs, borderBottomRightRadius: nativeDefault.radii.xs };
let closure_12 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let item;
  let items;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(47);
  ({ item, size } = arg0);
  const tmp4 = closure_12();
  if (cResult[0] !== size) {
    const size1 = { width: size, height: size };
    cResult[0] = size;
    cResult[1] = size1;
    tmp5 = size1;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.tile) {
    let tmp6;
    if (cResult[3] === tmp5) {
      tmp6 = cResult[4];
    }
    if (isAvatarDecorationRecord(item)) {
      const result = 0.75 * size;
      if (cResult[5] === item) {
        let tmp64;
        if (cResult[6] === result) {
          tmp64 = cResult[7];
        }
        if (cResult[8] === tmp64) {
          let tmp68;
          if (cResult[9] === tmp6) {
            tmp68 = cResult[10];
          }
          return tmp68;
        }
        const obj2 = { style: tmp6, children: tmp64 };
        const tmp71 = React4(View, obj2);
        cResult[8] = tmp64;
        cResult[9] = tmp6;
        cResult[10] = tmp71;
        tmp68 = tmp71;
      }
      const obj3 = { item, size: result };
      const tmp67 = React4(AvatarDecorationSampleV2Default, obj3);
      cResult[5] = item;
      cResult[6] = result;
      cResult[7] = tmp67;
      tmp64 = tmp67;
    } else if (isProfileFrameRecord(item)) {
      const result1 = size * closure_8;
      const diff = size - 2 * PX_8;
      if (cResult[11] === item) {
        if (cResult[12] === result1) {
          let tmp50;
          if (cResult[13] === diff) {
            tmp50 = cResult[14];
          }
          if (cResult[15] === tmp4.framePreview) {
            let tmp55;
            if (cResult[16] === tmp50) {
              tmp55 = cResult[17];
            }
            if (cResult[18] === tmp55) {
              let tmp59;
              if (cResult[19] === tmp6) {
                tmp59 = cResult[20];
              }
              return tmp59;
            }
            const obj4 = { style: tmp6, children: tmp55 };
            const tmp62 = React4(View, obj4);
            cResult[18] = tmp55;
            cResult[19] = tmp6;
            cResult[20] = tmp62;
            tmp59 = tmp62;
          }
          const obj5 = { style: tmp4.framePreview, children: tmp50 };
          const tmp58 = React4(View, obj5);
          cResult[15] = tmp4.framePreview;
          cResult[16] = tmp50;
          cResult[17] = tmp58;
          tmp55 = tmp58;
        }
      }
      const obj6 = { profileFrame: item, previewWidth: result1, previewHeight: diff, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
      const tmp53 = ProfileFrameSamplePreviewDefault;
      const tmp54 = React4(tmp53, obj6);
      cResult[11] = item;
      cResult[12] = result1;
      cResult[13] = diff;
      cResult[14] = tmp54;
      tmp50 = tmp54;
    } else if (isProfileEffectRecord(item)) {
      let tmp28;
      let tmp30;
      let tmp34;
      const _Symbol = Symbol;
      if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { uri: _modDef8479 };
        cResult[21] = obj7;
        tmp28 = obj7;
      } else {
        tmp28 = cResult[21];
      }
      if (cResult[22] !== tmp4.sampleProfile) {
        const obj8 = { source: tmp28, style: tmp4.sampleProfile, resizeMode: "cover" };
        const tmp33 = React4(FastImageDefault, obj8);
        cResult[22] = tmp4.sampleProfile;
        cResult[23] = tmp33;
        tmp30 = tmp33;
      } else {
        tmp30 = cResult[23];
      }
      if (cResult[24] !== item.skuId) {
        const obj9 = { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true };
        const tmp37 = React4(ProfileEffectDefault, obj9);
        cResult[24] = item.skuId;
        cResult[25] = tmp37;
        tmp34 = tmp37;
      } else {
        tmp34 = cResult[25];
      }
      if (cResult[26] === tmp4.profileEffect) {
        if (cResult[27] === tmp30) {
          let tmp38;
          if (cResult[28] === tmp34) {
            tmp38 = cResult[29];
          }
          if (cResult[30] === tmp38) {
            let tmp42;
            if (cResult[31] === tmp6) {
              tmp42 = cResult[32];
            }
            return tmp42;
          }
          const obj10 = { style: tmp6, children: tmp38 };
          const tmp45 = React4(View, obj10);
          cResult[30] = tmp38;
          cResult[31] = tmp6;
          cResult[32] = tmp45;
          tmp42 = tmp45;
        }
      }
      const obj11 = { style: tmp4.profileEffect, accessible: false, importantForAccessibility: "no", children: items };
      items = [tmp30, tmp34];
      const tmp41 = authStore(View, obj11);
      cResult[26] = tmp4.profileEffect;
      cResult[27] = tmp30;
      cResult[28] = tmp34;
      cResult[29] = tmp41;
      tmp38 = tmp41;
    } else if (isNameplateRecord(item)) {
      let tmp12;
      if (cResult[33] !== item) {
        const tmpResult = utils;
        const nameplateData = tmpResult.getNameplateData(item);
        cResult[33] = item;
        cResult[34] = nameplateData;
        tmp12 = nameplateData;
      } else {
        tmp12 = cResult[34];
      }
      if (cResult[35] === tmp4.nameplateTile) {
        let tmp14;
        if (cResult[36] === tmp6) {
          tmp14 = cResult[37];
        }
        if (cResult[38] === tmp12) {
          let tmp15;
          if (cResult[39] === tmp4.nameplate) {
            tmp15 = cResult[40];
          }
          if (cResult[41] === tmp4.nameplateStrip) {
            let tmp19;
            if (cResult[42] === tmp15) {
              tmp19 = cResult[43];
            }
            if (cResult[44] === tmp14) {
              let tmp23;
              if (cResult[45] === tmp19) {
                tmp23 = cResult[46];
              }
              return tmp23;
            }
            const obj12 = { style: tmp14, children: tmp19 };
            const tmp26 = React4(View, obj12);
            cResult[44] = tmp14;
            cResult[45] = tmp19;
            cResult[46] = tmp26;
            tmp23 = tmp26;
          }
          const obj13 = { style: tmp4.nameplateStrip, children: tmp15 };
          const tmp22 = React4(View, obj13);
          cResult[41] = tmp4.nameplateStrip;
          cResult[42] = tmp15;
          cResult[43] = tmp22;
          tmp19 = tmp22;
        }
        const obj14 = { nameplate: tmp12, fullOpacity: true, style: tmp4.nameplate };
        const tmp18 = React4(NameplateDefault, obj14);
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
  let item;
  let items1;
  let items2;
  let obj10;
  let obj13;
  let obj14;
  let obj3;
  let obj5;
  let obj6;
  let obj8;
  let tmp22;
  ({ item, size } = arg0);
  const tmp = closure_12();
  const items = [tmp.tile, { width: size, height: size }];
  if (isAvatarDecorationRecord(item)) {
    const obj2 = { style: items, children: React4(AvatarDecorationSampleV2Default, obj3) };
    obj3 = { item, size: 0.75 * size };
    return React4(View, obj2);
  } else if (isProfileFrameRecord(item)) {
    const obj4 = { style: items, children: React4(View, obj5) };
    obj5 = { style: tmp.framePreview, children: React4(tmp22, obj6) };
    obj6 = { profileFrame: item, previewWidth: size * closure_8, previewHeight: size - 2 * PX_8, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
    tmp22 = ProfileFrameSamplePreviewDefault;
    return React4(View, obj4);
  } else if (isProfileEffectRecord(item)) {
    const obj7 = { style: items, children: authStore(View, obj8) };
    obj8 = { style: tmp.profileEffect, accessible: false, importantForAccessibility: "no", children: items1 };
    const obj9 = { source: obj10, style: tmp.sampleProfile, resizeMode: "cover" };
    obj10 = { uri: _modDef8479 };
    const tmp17 = FastImageDefault;
    items1 = [React4(tmp17, obj9), ];
    const obj11 = { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true };
    items1[1] = React4(ProfileEffectDefault, obj11);
    return React4(View, obj7);
  } else if (isNameplateRecord(item)) {
    const obj12 = { style: items2, children: React4(View, obj13) };
    items2 = [items, tmp.nameplateTile];
    obj13 = { style: tmp.nameplateStrip, children: React4(NameplateDefault, obj14) };
    const obj = utils;
    const nameplateData = obj.getNameplateData(item);
    obj14 = { nameplate: nameplateData, fullOpacity: true, style: tmp.nameplate };
    return React4(View, obj12);
  } else {
    return null;
  }
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesItemMiniPreview.tsx");

export default memoResult;