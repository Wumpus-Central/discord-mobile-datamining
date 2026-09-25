// === Module 8277: ProfileFrameSamplePreview ===

// Module 8277 (ProfileFrameSamplePreview)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4528 */;
import FastImageDefault from "FastImage" /* 5894 */;
import _modDef5971 from "module_5971" /* 5971 */;
import ProfileFrameLayerOrder from "ProfileFrameLayerOrder" /* 7645 */;
import ProfileFrameDefault from "ProfileFrame" /* 7659 */;
import scaleProfileFrameDefault from "scaleProfileFrame" /* 7662 */;
import _modDef8278 from "module_8278" /* 8278 */;
import noop from "module_19" /* 19 */;

require = fn;
function filterLayer(responsive) {
  return true !== responsive.responsive;
}
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const UserProfileThemeTypes = fn(6624).UserProfileThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { profileFrameContainer: { flex: 1 }, profileContainer: { flex: 1, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_NORMAL, borderRadius: nativeDefault.radii.xs }, sampleProfile: { width: "100%", aspectRatio: fn(8253).SAMPLE_PROFILE_ASPECT_RATIO } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/previews/ProfileFrameSamplePreview.tsx");

export default function ProfileFrameSamplePreview(previewWidth) {
  ({ profileFrame, previewHeight, profileBackgroundColor } = previewWidth);
  const tmp = closure_9();
  const innerWidth = profileFrame.innerWidth;
  const result = previewWidth.previewWidth * innerWidth / (innerWidth + 2 * profileFrame.overflowHorizontal);
  ({ overflowTop, overflowBottom, overflowHorizontal } = scaleProfileFrameDefault(profileFrame, result));
  const tmp5 = scaleProfileFrameDefault(profileFrame, result);
  const token = useToken.useToken(profileBackgroundColor);
  const obj2 = { frame: profileFrame, filterLayer, profileThemeType: UserProfileThemeTypes.PREVIEW, frameOrder: null, containerWidth: null, containerHeight: null };
  obj2.frameOrder = ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK;
  obj2.containerWidth = result;
  obj2.containerHeight = previewHeight;
  let tmp12 = timestampProducer(ProfileFrameDefault, obj2);
  const xs = nativeDefault.radii.xs;
  const obj3 = { style: { position: "absolute", top: -overflowTop, bottom: -overflowBottom, left: -overflowHorizontal, right: -overflowHorizontal }, maskElement: null, children: null };
  const obj4 = { style: absoluteFill.absoluteFill, children: null };
  const obj5 = { style: { position: "absolute", top: 0, left: 0, right: 0, height: overflowTop, backgroundColor: "black" } };
  const items = [timestampProducer(React4, obj5), timestampProducer(React4, { style: { position: "absolute", bottom: 0, left: 0, right: 0, height: overflowBottom, backgroundColor: "black" } }), timestampProducer(React4, { style: { position: "absolute", top: overflowTop, bottom: overflowBottom, left: 0, width: overflowHorizontal, backgroundColor: "black" } }), timestampProducer(React4, { style: { position: "absolute", top: overflowTop, bottom: overflowBottom, right: 0, width: overflowHorizontal, backgroundColor: "black" } }), timestampProducer(React4, { style: { position: "absolute", top: overflowTop - xs, left: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } }), timestampProducer(React4, { style: { position: "absolute", top: overflowTop - xs, right: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } }), timestampProducer(React4, { style: { position: "absolute", bottom: overflowBottom - xs, left: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } }), timestampProducer(React4, { style: { position: "absolute", bottom: overflowBottom - xs, right: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } })];
  obj4.children = items;
  obj3.maskElement = React5(React4, obj4);
  obj3.children = timestampProducer(React4, { style: { marginTop: overflowTop, marginBottom: overflowBottom, marginHorizontal: overflowHorizontal, flex: 1 }, children: tmp12 });
  const obj14 = { style: null, children: null };
  const items1 = [tmp.profileFrameContainer, { width: result, marginTop: overflowTop, marginBottom: overflowBottom, marginHorizontal: overflowHorizontal }];
  obj14.style = items1;
  if (null == profileBackgroundColor) {
    tmp12 = timestampProducer(tmp13, obj3);
  }
  const items2 = [tmp12, , ];
  const items3 = [tmp.profileContainer, ];
  let tmp16 = null != token;
  if (tmp16) {
    const obj15 = { backgroundColor: token };
    tmp16 = obj15;
  }
  const obj16 = { style: items3, children: null };
  items3[1] = tmp16;
  const obj17 = { source: null, style: null, resizeMode: "cover" };
  const obj18 = { uri: null };
  const obj10 = { style: { position: "absolute", top: overflowTop - xs, right: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } };
  const obj11 = { style: { position: "absolute", bottom: overflowBottom - xs, left: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } };
  const obj12 = { style: { position: "absolute", bottom: overflowBottom - xs, right: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } };
  const obj13 = { style: { marginTop: overflowTop, marginBottom: overflowBottom, marginHorizontal: overflowHorizontal, flex: 1 }, children: tmp12 };
  const obj6 = { style: { position: "absolute", bottom: 0, left: 0, right: 0, height: overflowBottom, backgroundColor: "black" } };
  const obj7 = { style: { position: "absolute", top: overflowTop, bottom: overflowBottom, left: 0, width: overflowHorizontal, backgroundColor: "black" } };
  const obj8 = { style: { position: "absolute", top: overflowTop, bottom: overflowBottom, right: 0, width: overflowHorizontal, backgroundColor: "black" } };
  const obj9 = { style: { position: "absolute", top: overflowTop - xs, left: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } };
  tmp13 = _modDef5971;
  obj18.uri = _modDef8278;
  obj17.source = obj18;
  obj17.style = tmp.sampleProfile;
  obj16.children = timestampProducer(FastImageDefault, obj17);
  items2[1] = timestampProducer(React4, obj16);
  const obj19 = { frame: profileFrame, filterLayer, profileThemeType: UserProfileThemeTypes.PREVIEW, frameOrder: null, containerWidth: null, containerHeight: null };
  const tmp3Result = FastImageDefault;
  obj19.frameOrder = ProfileFrameLayerOrder.ProfileFrameLayerOrder.FRONT;
  obj19.containerWidth = result;
  obj19.containerHeight = previewHeight - overflowTop - overflowBottom;
  items2[2] = timestampProducer(ProfileFrameDefault, obj19);
  obj14.children = items2;
  return React5(React4, obj14);
};