// discord_app/modules/collectibles/native/ProfileEffectSampleV2.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import SAMPLE_PROFILE_ASPECT_RATIO from "CollectiblesPreviewConstants.tsx";
import metadataDefault from "../../../../discord_assets/assets/collectibles/previews/sample_profile.png.js";
import StaticEffectDefault from "../profile_effects/native/ProfileEffect.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const View = get_ActivityIndicator.View;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
obj[1] = obj;
obj[2] = { aspectRatio: SAMPLE_PROFILE_ASPECT_RATIO.SAMPLE_PROFILE_ASPECT_RATIO };
obj[3] = { position: "absolute", height: "100%", width: "100%", borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED };
let closure_5 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/collectibles/native/ProfileEffectSampleV2.tsx");

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
  items[1] = profileBackground;
  const items1 = [tmp.sampleProfileImage];
  const obj = { uri: metadataDefault };
  obj[1] = obj;
  const items2 = [callback(preloadDefault, obj), , ];
  let tmp4Result = !flag;
  if (!flag) {
    obj1 = { style: null };
    obj1[0] = tmp.profileBorder;
    tmp4Result = callback(View, obj1);
  }
  items2[1] = tmp4Result;
  items2[2] = callback(StaticEffectDefault, { skuId: hideBackground.item.skuId, bannerAdjustment: 0, useThumbnail: true });
  obj[1] = items2;
  return callback(View, obj);
};