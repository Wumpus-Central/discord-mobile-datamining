// discord_app/modules/collectibles/profile_frames/native/previews/ProfileFrameSamplePreview.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import ProfileFrameLayerOrder from "../../../../../../discord_common/js/shared/shared-constants/ProfileFrameLayerOrder.tsx";
import ProfileFrameDefault from "../ProfileFrame.tsx";
import scaleProfileFrameDefault from "../../scaleProfileFrame.tsx";
import _modDef8823 from "../../../../../../discord_assets/assets/collectibles/previews/sample_profile_small-2x.png.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function filterLayer(responsive) {
  return true !== responsive.responsive;
}
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const UserProfileThemeTypes = fn(7208).UserProfileThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { profileFrameContainer: { flex: 1 }, profileContainer: null, sampleProfile: null };
createStyles = {
  flex: 1,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_NORMAL,
  borderRadius: nativeDefault.radii.xs,
};
createStyles.profileContainer = createStyles;
createStyles.sampleProfile = { width: "100%", aspectRatio: fn(8798).SAMPLE_PROFILE_ASPECT_RATIO };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/collectibles/profile_frames/native/previews/ProfileFrameSamplePreview.tsx",
);

export default function ProfileFrameSamplePreview(previewWidth) {
  ({ profileFrame, previewHeight, profileBackgroundColor } = previewWidth);
  const tmp = closure_9();
  const innerWidth = profileFrame.innerWidth;
  const result = (previewWidth.previewWidth * innerWidth) / (innerWidth + 2 * profileFrame.overflowHorizontal);
  ({ overflowTop, overflowBottom, overflowHorizontal } = scaleProfileFrameDefault(profileFrame, result));
  let obj = useToken;
  const token = obj.useToken(profileBackgroundColor);
  obj = {
    frame: profileFrame,
    filterLayer,
    profileThemeType: UserProfileThemeTypes.PREVIEW,
    frameOrder: null,
    containerWidth: null,
    containerHeight: null,
  };
  const tmp5 = scaleProfileFrameDefault(profileFrame, result);
  obj.frameOrder = ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK;
  obj.containerWidth = result;
  obj.containerHeight = previewHeight;
  let tmp12 = timestampProducer(ProfileFrameDefault, obj);
  const xs = nativeDefault.radii.xs;
  obj = {
    style: {
      position: "absolute",
      top: -overflowTop,
      bottom: -overflowBottom,
      left: -overflowHorizontal,
      right: -overflowHorizontal,
    },
    maskElement: null,
    children: null,
  };
  const obj1 = { style: absoluteFill.absoluteFill, children: null };
  const obj2 = {
    style: { position: "absolute", top: 0, left: 0, right: 0, height: overflowTop, backgroundColor: "black" },
  };
  const tmp10 = filterLayer;
  const tmp11 = UserProfileThemeTypes;
  const items = [
    timestampProducer(React4, obj2),
    timestampProducer(React4, {
      style: { position: "absolute", bottom: 0, left: 0, right: 0, height: overflowBottom, backgroundColor: "black" },
    }),
    timestampProducer(React4, {
      style: {
        position: "absolute",
        top: overflowTop,
        bottom: overflowBottom,
        left: 0,
        width: overflowHorizontal,
        backgroundColor: "black",
      },
    }),
    timestampProducer(React4, {
      style: {
        position: "absolute",
        top: overflowTop,
        bottom: overflowBottom,
        right: 0,
        width: overflowHorizontal,
        backgroundColor: "black",
      },
    }),
    timestampProducer(React4, {
      style: {
        position: "absolute",
        top: overflowTop - xs,
        left: overflowHorizontal - xs,
        width: 2 * xs,
        height: 2 * xs,
        borderRadius: xs,
        backgroundColor: "black",
      },
    }),
    timestampProducer(React4, {
      style: {
        position: "absolute",
        top: overflowTop - xs,
        right: overflowHorizontal - xs,
        width: 2 * xs,
        height: 2 * xs,
        borderRadius: xs,
        backgroundColor: "black",
      },
    }),
    timestampProducer(React4, {
      style: {
        position: "absolute",
        bottom: overflowBottom - xs,
        left: overflowHorizontal - xs,
        width: 2 * xs,
        height: 2 * xs,
        borderRadius: xs,
        backgroundColor: "black",
      },
    }),
    timestampProducer(React4, {
      style: {
        position: "absolute",
        bottom: overflowBottom - xs,
        right: overflowHorizontal - xs,
        width: 2 * xs,
        height: 2 * xs,
        borderRadius: xs,
        backgroundColor: "black",
      },
    }),
  ];
  obj1.children = items;
  obj.maskElement = React5(React4, obj1);
  obj.children = timestampProducer(React4, {
    style: { marginTop: overflowTop, marginBottom: overflowBottom, marginHorizontal: overflowHorizontal, flex: 1 },
    children: tmp12,
  });
  const obj11 = { style: null, children: null };
  const items1 = [
    tmp.profileFrameContainer,
    { width: result, marginTop: overflowTop, marginBottom: overflowBottom, marginHorizontal: overflowHorizontal },
  ];
  obj11.style = items1;
  if (null == profileBackgroundColor) {
    tmp12 = timestampProducer(tmp13, obj);
  }
  const items2 = [tmp12, ,];
  const items3 = [tmp.profileContainer];
  let tmp16 = null != token;
  if (tmp16) {
    const obj12 = { backgroundColor: token };
    tmp16 = obj12;
  }
  const obj13 = { style: items3, children: null };
  items3[1] = tmp16;
  const obj14 = { source: null, style: null, resizeMode: "cover" };
  const obj15 = { uri: null };
  let tmp3Result = tmp3(5587);
  obj15.uri = _modDef8823;
  obj14.source = obj15;
  obj14.style = tmp.sampleProfile;
  obj13.children = timestampProducer(tmp3Result, obj14);
  items2[1] = timestampProducer(React4, obj13);
  const obj16 = {
    frame: profileFrame,
    filterLayer: tmp10,
    profileThemeType: tmp11.PREVIEW,
    frameOrder: null,
    containerWidth: null,
    containerHeight: null,
  };
  tmp3Result = tmp3(8221);
  obj16.frameOrder = ProfileFrameLayerOrder.ProfileFrameLayerOrder.FRONT;
  obj16.containerWidth = result;
  obj16.containerHeight = previewHeight - overflowTop - overflowBottom;
  items2[2] = timestampProducer(tmp3Result, obj16);
  obj11.children = items2;
  return React5(React4, obj11);
}
