// === Module 8972: ProfileEffectSampleV2 ===

// Module 8972 (ProfileEffectSampleV2)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import FastImageDefault from "FastImage" /* 6164 */;
import CollectiblesPreviewConstants from "CollectiblesPreviewConstants" /* 8971 */;
import _modDef8973 from "module_8973" /* 8973 */;
import ProfileEffectDefault from "ProfileEffect" /* 8974 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { profileContainer: { position: "absolute", display: "flex", height: "100%", width: "100%" }, profileBackground: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, sampleProfileImage: { aspectRatio: CollectiblesPreviewConstants.SAMPLE_PROFILE_ASPECT_RATIO }, profileBorder: null };
let size = { position: "absolute", height: "100%", width: "100%", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
obj.profileBorder = size;
let closure_6 = createStyles.createStyles(obj);
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/ProfileEffectSampleV2.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileEffectSample(arg0) {
  const cResult = c.c(16);
  ({ item, hideBackground } = arg0);
  const tmp4 = closure_6();
  let profileBackground = !tmp3;
  if (!(undefined !== hideBackground && hideBackground)) {
    profileBackground = tmp4.profileBackground;
  }
  if (cResult[0] === tmp4.profileContainer) {
    if (cResult[1] === profileBackground) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { uri: _modDef8973 };
      cResult[3] = obj2;
      let tmp7 = obj2;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp4.sampleProfileImage) {
      const obj3 = { style: tmp4.sampleProfileImage, source: tmp7, accessible: false, resizeMode: "cover" };
      const tmp12 = React4(FastImageDefault, obj3);
      cResult[4] = tmp4.sampleProfileImage;
      cResult[5] = tmp12;
      let tmp9 = tmp12;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === tmp3) {
      if (cResult[7] === tmp4.profileBorder) {
        let tmp13 = cResult[8];
      }
      if (cResult[9] !== item.skuId) {
        const obj4 = { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true };
        const tmp20 = React4(ProfileEffectDefault, obj4);
        cResult[9] = item.skuId;
        cResult[10] = tmp20;
        let tmp17 = tmp20;
      } else {
        tmp17 = cResult[10];
      }
      if (cResult[11] === tmp5) {
        if (cResult[12] === tmp9) {
          if (cResult[13] === tmp13) {
            if (cResult[14] === tmp17) {
              let tmp21 = cResult[15];
            }
            return tmp21;
          }
        }
      }
      const obj5 = { style: tmp5, children: null };
      const items = [tmp9, tmp13, tmp17];
      obj5.children = items;
      const tmp24 = hasOwnProperty(View, obj5);
      cResult[11] = tmp5;
      cResult[12] = tmp9;
      cResult[13] = tmp13;
      cResult[14] = tmp17;
      cResult[15] = tmp24;
      tmp21 = tmp24;
    }
    let tmp14 = !tmp3;
    if (!tmp3) {
      const obj6 = { style: tmp4.profileBorder };
      tmp14 = React4(View, obj6);
    }
    cResult[6] = tmp3;
    cResult[7] = tmp4.profileBorder;
    cResult[8] = tmp14;
    tmp13 = tmp14;
  }
  const items1 = [tmp4.profileContainer, profileBackground];
  cResult[0] = tmp4.profileContainer;
  cResult[1] = profileBackground;
  cResult[2] = items1;
  tmp5 = items1;
}) : (function ProfileEffectSample(hideBackground) {
  let flag = hideBackground.hideBackground;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  const items = [tmp.profileContainer, ];
  let profileBackground = !flag;
  if (!flag) {
    profileBackground = tmp.profileBackground;
  }
  const obj = { style: items, children: null };
  items[1] = profileBackground;
  const obj2 = { style: tmp.sampleProfileImage, source: null, accessible: false, resizeMode: "cover" };
  const obj3 = { uri: _modDef8973 };
  obj2.source = obj3;
  const items1 = [React4(FastImageDefault, obj2), , ];
  let tmp4Result = !flag;
  if (!flag) {
    const obj4 = { style: tmp.profileBorder };
    tmp4Result = React4(View, obj4);
  }
  items1[1] = tmp4Result;
  items1[2] = React4(ProfileEffectDefault, { skuId: hideBackground.item.skuId, bannerAdjustment: 0, useThumbnail: true });
  obj.children = items1;
  return hasOwnProperty(View, obj);
});