// === Module 8488: ProfileEffectSampleV2 ===

// Module 8488 (ProfileEffectSampleV2)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import FastImageDefault from "FastImage" /* 5981 */;
import CollectiblesPreviewConstants from "CollectiblesPreviewConstants" /* 8487 */;
import _modDef8489 from "module_8489" /* 8489 */;
import ProfileEffectDefault from "ProfileEffect" /* 8490 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
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

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(18);
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
    if (cResult[3] !== tmp4.sampleProfileImage) {
      const items = [tmp4.sampleProfileImage];
      cResult[3] = tmp4.sampleProfileImage;
      cResult[4] = items;
      let tmp6 = items;
    } else {
      tmp6 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { uri: _modDef8489 };
      cResult[5] = obj2;
      let tmp8 = obj2;
    } else {
      tmp8 = cResult[5];
    }
    if (cResult[6] !== tmp6) {
      const obj3 = { style: tmp6, source: tmp8, accessible: false, resizeMode: "cover" };
      const tmp13 = React4(FastImageDefault, obj3);
      cResult[6] = tmp6;
      cResult[7] = tmp13;
      let tmp10 = tmp13;
    } else {
      tmp10 = cResult[7];
    }
    if (cResult[8] === tmp3) {
      if (cResult[9] === tmp4.profileBorder) {
        let tmp14 = cResult[10];
      }
      if (cResult[11] !== item.skuId) {
        const obj4 = { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true };
        const tmp21 = React4(ProfileEffectDefault, obj4);
        cResult[11] = item.skuId;
        cResult[12] = tmp21;
        let tmp18 = tmp21;
      } else {
        tmp18 = cResult[12];
      }
      if (cResult[13] === tmp5) {
        if (cResult[14] === tmp10) {
          if (cResult[15] === tmp14) {
            if (cResult[16] === tmp18) {
              let tmp22 = cResult[17];
            }
            return tmp22;
          }
        }
      }
      const obj5 = { style: tmp5, children: null };
      const items1 = [tmp10, tmp14, tmp18];
      obj5.children = items1;
      const tmp25 = hasOwnProperty(View, obj5);
      cResult[13] = tmp5;
      cResult[14] = tmp10;
      cResult[15] = tmp14;
      cResult[16] = tmp18;
      cResult[17] = tmp25;
      tmp22 = tmp25;
    }
    let tmp15 = !tmp3;
    if (!tmp3) {
      const obj6 = { style: tmp4.profileBorder };
      tmp15 = React4(View, obj6);
    }
    cResult[8] = tmp3;
    cResult[9] = tmp4.profileBorder;
    cResult[10] = tmp15;
    tmp14 = tmp15;
  }
  const items2 = [tmp4.profileContainer, profileBackground];
  cResult[0] = tmp4.profileContainer;
  cResult[1] = profileBackground;
  cResult[2] = items2;
  tmp5 = items2;
}) : ((hideBackground) => {
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
  const obj2 = { style: null, source: null, accessible: false, resizeMode: "cover" };
  const items1 = [tmp.sampleProfileImage];
  obj2.style = items1;
  const obj3 = { uri: _modDef8489 };
  obj2.source = obj3;
  const items2 = [React4(FastImageDefault, obj2), , ];
  let tmp4Result = !flag;
  if (!flag) {
    const obj4 = { style: tmp.profileBorder };
    tmp4Result = React4(View, obj4);
  }
  items2[1] = tmp4Result;
  items2[2] = React4(ProfileEffectDefault, { skuId: hideBackground.item.skuId, bannerAdjustment: 0, useThumbnail: true });
  obj.children = items2;
  return hasOwnProperty(View, obj);
});