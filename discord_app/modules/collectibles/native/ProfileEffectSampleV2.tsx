// discord_app/modules/collectibles/native/ProfileEffectSampleV2.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import CollectiblesPreviewConstants from "CollectiblesPreviewConstants.tsx";
import _modDef8800 from "../../../../discord_assets/assets/collectibles/previews/sample_profile.png.js";
import ProfileEffectDefault from "../profile_effects/native/ProfileEffect.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = {
  profileContainer: { position: "absolute", display: "flex", height: "100%", width: "100%" },
  profileBackground: null,
  sampleProfileImage: null,
  profileBorder: null,
};
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj.profileBackground = obj;
obj.sampleProfileImage = { aspectRatio: CollectiblesPreviewConstants.SAMPLE_PROFILE_ASPECT_RATIO };
let size = {
  position: "absolute",
  height: "100%",
  width: "100%",
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_MUTED,
};
obj.profileBorder = size;
let closure_5 = createStyles.createStyles(obj);
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
  let obj = { style: items, children: null };
  items[1] = profileBackground;
  obj = { style: null, source: null, accessible: false, resizeMode: "cover" };
  const items1 = [tmp.sampleProfileImage];
  obj.style = items1;
  obj = { uri: _modDef8800 };
  obj.source = obj;
  const items2 = [React3(FastImageDefault, obj), ,];
  let tmp4Result = !flag;
  if (!flag) {
    const obj1 = { style: tmp.profileBorder };
    tmp4Result = React3(View, obj1);
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
