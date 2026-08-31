// === Module 8476: ProfileEffectSample ===

// Module 8476 (ProfileEffectSample)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ThemesDefault from "Themes" /* 712 */;
import preloadDefault from "preload" /* 5461 */;
import SAMPLE_PROFILE_ASPECT_RATIO from "SAMPLE_PROFILE_ASPECT_RATIO" /* 8475 */;
import metadataDefault from "metadata" /* 8477 */;
import StaticEffectDefault from "StaticEffect" /* 8478 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const View = get_ActivityIndicator.View;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { profileContainer: { position: "absolute", display: "flex", height: "100%", width: "100%" }, profileBackground: null, sampleProfileImage: null, profileBorder: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
obj[1] = obj;
obj[2] = { aspectRatio: SAMPLE_PROFILE_ASPECT_RATIO.SAMPLE_PROFILE_ASPECT_RATIO };
obj[3] = { position: "absolute", height: "100%", width: "100%", borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED };
let closure_5 = createCacheKey.createStyles(obj);
let obj1 = { position: "absolute", height: "100%", width: "100%", borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED };
const result = set.fileFinishedImporting("modules/collectibles/native/ProfileEffectSampleV2.tsx");

export default function ProfileEffectSample(hideBackground) {
  let flag = hideBackground.hideBackground;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback2();
  const items = [tmp.profileContainer, ];
  let profileBackground = !flag;
  if (!flag) {
    profileBackground = tmp.profileBackground;
  }
  let obj = { style: items, children: null };
  items[1] = profileBackground;
  obj = { style: items1, source: null, accessible: false, resizeMode: "cover" };
  items1 = [tmp.sampleProfileImage];
  obj = { uri: metadataDefault };
  obj[1] = obj;
  const items2 = [callback(preloadDefault, obj), , ];
  let tmp4Result = !flag;
  if (!flag) {
    obj1 = { style: null };
    obj1[0] = tmp.profileBorder;
    tmp4Result = tmp4(tmp3, obj1);
  }
  items2[1] = tmp4Result;
  items2[2] = callback(StaticEffectDefault, { skuId: hideBackground.item.skuId, bannerAdjustment: 0, useThumbnail: true });
  obj[1] = items2;
  return closure_4(View, obj);
};