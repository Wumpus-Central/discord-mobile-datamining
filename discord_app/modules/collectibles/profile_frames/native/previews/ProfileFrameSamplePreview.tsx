// discord_app/modules/collectibles/profile_frames/native/previews/ProfileFrameSamplePreview.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { UserProfileThemeTypes } from "ARBITRARY_LARGE_OFFSET";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { metadata } from "../../../../../../discord_assets/assets/collectibles/previews/sample_profile_small-2x.png.js";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { ProfileFrameLayerOrder } from "../../../../../../discord_common/js/shared/shared-constants/ProfileFrameLayerOrder.tsx";
import { map } from "../../../../../design/tokens/native/useToken.tsx";
import { scaleProfileFrame } from "../../scaleProfileFrame.tsx";
import { ProfileFrameLayer } from "../ProfileFrame.tsx";

let c3;
let c4;
let closure_6;
let error;
const require = arg1;
function filterLayer(responsive) {
  return true !== responsive.responsive;
}
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { profileFrameContainer: { flex: 1 }, profileContainer: null, sampleProfile: null };
createCacheKey = { flex: 1, overflow: "hidden", borderWidth: 1, borderColor: require("Themes").colors.BORDER_NORMAL, borderRadius: require("Themes").radii.xs };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: "100%", aspectRatio: require("SAMPLE_PROFILE_ASPECT_RATIO").SAMPLE_PROFILE_ASPECT_RATIO };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("SAMPLE_PROFILE_ASPECT_RATIO").fileFinishedImporting("modules/collectibles/profile_frames/native/previews/ProfileFrameSamplePreview.tsx");

export default function ProfileFrameSamplePreview(previewWidth) {
  let overflowBottom;
  let overflowHorizontal;
  let overflowTop;
  let previewHeight;
  let profileBackgroundColor;
  let profileFrame;
  ({ profileFrame, previewHeight, profileBackgroundColor } = previewWidth);
  const tmp = createCacheKey();
  const innerWidth = profileFrame.innerWidth;
  const result = previewWidth.previewWidth * innerWidth / (innerWidth + 2 * profileFrame.overflowHorizontal);
  ({ overflowTop, overflowBottom, overflowHorizontal } = scaleProfileFrame(profileFrame, result));
  let obj = map;
  const token = obj.useToken(profileBackgroundColor);
  obj = { frame: profileFrame, filterLayer, profileThemeType: UserProfileThemeTypes.PREVIEW, frameOrder: null, containerWidth: null, containerHeight: null };
  const tmp5 = scaleProfileFrame(profileFrame, result);
  const tmp6 = require;
  obj[3] = ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK;
  obj[4] = result;
  obj[5] = previewHeight;
  let tmp12 = callback(ProfileFrameLayer, obj);
  const xs = Themes.radii.xs;
  obj = { style: obj1, maskElement: null, children: null };
  const obj2 = { style: absoluteFill.absoluteFill, children: null };
  obj1 = { position: "absolute", top: -overflowTop, bottom: -overflowBottom, left: -overflowHorizontal, right: -overflowHorizontal };
  const tmp10 = filterLayer;
  const tmp11 = UserProfileThemeTypes;
  const tmp9 = ProfileFrameLayer;
  const items = [callback(closure_4, { style: { position: "absolute", top: 0, left: 0, right: 0, height: overflowTop, backgroundColor: "black" } }), callback(closure_4, { style: { position: "absolute", bottom: 0, left: 0, right: 0, height: overflowBottom, backgroundColor: "black" } }), callback(closure_4, { style: { position: "absolute", top: overflowTop, bottom: overflowBottom, left: 0, width: overflowHorizontal, backgroundColor: "black" } }), callback(closure_4, { style: { position: "absolute", top: overflowTop, bottom: overflowBottom, right: 0, width: overflowHorizontal, backgroundColor: "black" } }), callback(closure_4, { style: { position: "absolute", top: overflowTop - xs, left: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } }), callback(closure_4, { style: { position: "absolute", top: overflowTop - xs, right: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } }), callback(closure_4, { style: { position: "absolute", bottom: overflowBottom - xs, left: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } }), callback(closure_4, { style: { position: "absolute", bottom: overflowBottom - xs, right: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } })];
  obj2[1] = items;
  obj[1] = callback2(closure_4, obj2);
  obj[2] = callback(closure_4, { style: { marginTop: overflowTop, marginBottom: overflowBottom, marginHorizontal: overflowHorizontal, flex: 1 }, children: tmp12 });
  const obj7 = { style: items1, children: null };
  items1 = [tmp.profileFrameContainer, { width: result, marginTop: overflowTop, marginBottom: overflowBottom, marginHorizontal: overflowHorizontal }];
  if (null == profileBackgroundColor) {
    tmp12 = callback(tmp13, obj);
  }
  const items2 = [tmp12, , ];
  const items3 = [tmp.profileContainer, ];
  let tmp16 = null != token;
  if (tmp16) {
    const obj8 = { backgroundColor: null };
    obj8[0] = token;
    tmp16 = obj8;
  }
  const obj9 = { style: items3, children: null };
  items3[1] = tmp16;
  const obj10 = { source: null, style: null, resizeMode: "cover" };
  const obj11 = { uri: null };
  let tmp3Result = tmp3(5449);
  obj11[0] = metadata;
  obj10[0] = obj11;
  obj10[1] = tmp.sampleProfile;
  obj9[1] = callback(tmp3Result, obj10);
  items2[1] = callback(closure_4, obj9);
  const obj12 = { frame: profileFrame, filterLayer: tmp10, profileThemeType: tmp11.PREVIEW, frameOrder: null, containerWidth: null, containerHeight: null };
  tmp3Result = tmp3(8964);
  obj12[3] = tmp6(8951).ProfileFrameLayerOrder.FRONT;
  obj12[4] = result;
  obj12[5] = previewHeight - overflowTop - overflowBottom;
  items2[2] = callback(tmp3Result, obj12);
  obj7[1] = items2;
  return callback2(closure_4, obj7);
};