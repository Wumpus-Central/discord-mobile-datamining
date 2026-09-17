// discord_app/modules/collectibles/native/ProfileEffectSampleV2.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import CollectiblesPreviewConstants from "CollectiblesPreviewConstants.tsx";
import _modDef8957 from "../../../../discord_assets/assets/collectibles/previews/sample_profile.png.js";
import ProfileEffectDefault from "../profile_effects/native/ProfileEffect.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = {
  profileContainer: { position: "absolute", display: "flex", height: "100%", width: "100%" },
  profileBackground: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE },
  sampleProfileImage: { aspectRatio: CollectiblesPreviewConstants.SAMPLE_PROFILE_ASPECT_RATIO },
  profileBorder: null,
};
let size = {
  position: "absolute",
  height: "100%",
  width: "100%",
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_MUTED,
};
obj.profileBorder = size;
let closure_5 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/ProfileEffectSampleV2.tsx");

export default function ProfileEffectSample(hideBackground) {
  let flag = hideBackground.hideBackground;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_5();
  const items = [tmp.profileContainer];
  let profileBackground = !flag;
  if (!flag) {
    profileBackground = tmp.profileBackground;
  }
  const obj = { style: items, children: null };
  items[1] = profileBackground;
  const obj2 = { style: null, source: null, accessible: false, resizeMode: "cover" };
  const items1 = [tmp.sampleProfileImage];
  obj2.style = items1;
  const obj3 = { uri: _modDef8957 };
  obj2.source = obj3;
  const items2 = [React3(FastImageDefault, obj2), ,];
  let tmp4Result = !flag;
  if (!flag) {
    const obj4 = { style: tmp.profileBorder };
    tmp4Result = React3(View, obj4);
  }
  items2[1] = tmp4Result;
  items2[2] = React3(ProfileEffectDefault, {
    skuId: hideBackground.item.skuId,
    bannerAdjustment: 0,
    useThumbnail: true,
  });
  obj.children = items2;
  return React4(View, obj);
}
