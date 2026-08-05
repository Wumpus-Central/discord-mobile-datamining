// discord_app/modules/collectibles/native/ProfileEffectSampleV2.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { profileContainer: { position: "absolute", display: "flex", height: "100%", width: "100%" }, profileBackground: null, sampleProfileImage: null, profileBorder: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
obj[1] = obj;
obj[2] = { aspectRatio: require("SAMPLE_PROFILE_ASPECT_RATIO").SAMPLE_PROFILE_ASPECT_RATIO };
obj[3] = { position: "absolute", height: "100%", width: "100%", borderWidth: 1, borderColor: require("Themes").colors.BORDER_MUTED };
let closure_5 = createCacheKey.createStyles(obj);
let obj1 = { position: "absolute", height: "100%", width: "100%", borderWidth: 1, borderColor: require("Themes").colors.BORDER_MUTED };
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/ProfileEffectSampleV2.tsx");

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
  obj = { uri: null };
  obj[0] = importDefault(9296);
  obj[1] = obj;
  const items2 = [callback(importDefault(5236), obj), , ];
  let tmp4Result = !flag;
  if (!flag) {
    const obj1 = { style: null };
    obj1[0] = tmp.profileBorder;
    tmp4Result = tmp4(tmp3, obj1);
  }
  items2[1] = tmp4Result;
  items2[2] = callback(importDefault(9297), { skuId: hideBackground.item.skuId, bannerAdjustment: 0, useThumbnail: true });
  obj[1] = items2;
  return closure_4(View, obj);
};