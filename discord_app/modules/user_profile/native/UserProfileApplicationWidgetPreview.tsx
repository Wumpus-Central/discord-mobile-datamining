// discord_app/modules/user_profile/native/UserProfileApplicationWidgetPreview.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ApplicationWidgetLayoutName from "../../../../discord_common/js/shared/shared-constants/ApplicationWidgetLayoutName.tsx";
import resolvedValuesFromUserApplicationIdentityProfile from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";
import ApplicationWidgetConfigSurface from "../../../../discord_common/js/shared/shared-constants/ApplicationWidgetConfigSurface.tsx";
import UserProfileApplicationWidgetSkeletons from "UserProfileApplicationWidgetSkeletons.tsx";
import useApplicationWidgetLayoutRendererPropsDefault from "../../application_widget/hooks/useApplicationWidgetLayoutRendererProps.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

const FastImageDefault = tmp4(6020);
const UserProfileApplicationWidgetHeroImageDefault = tmp4(12259);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const sum = nativeDefault.space.PX_128 + nativeDefault.space.PX_24;
const createStyles = fn(5306);
let obj2 = {
  preview: { flexDirection: "row", gap: nativeDefault.space.PX_16, minHeight: sum },
  contentColumn: { flex: 3 },
  content: null,
  divider: null,
  stats: null,
  statRow: null,
  stat: null,
  image: null,
  containedImageContainer: null,
  heroImage: null,
  containedImage: null,
  containedImageSkeleton: null,
  imageSkeleton: null,
};
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_16, minHeight: sum };
obj2.content = {
  padding: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_12,
  justifyContent: "center",
  minHeight: sum,
};
let obj4 = {
  padding: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_12,
  justifyContent: "center",
  minHeight: sum,
};
obj2.divider = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let obj5 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.stats = { gap: nativeDefault.space.PX_8 };
let obj6 = { gap: nativeDefault.space.PX_8 };
obj2.statRow = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let obj7 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.stat = {
  flex: 1,
  height: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.image = { flex: 2, overflow: "hidden" };
let obj8 = {
  flex: 1,
  height: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.containedImageContainer = { padding: nativeDefault.space.PX_16 };
obj2.heroImage = { position: "absolute", top: 0, right: 0, bottom: 0, left: 0, opacity: 0.2 };
let obj9 = { padding: nativeDefault.space.PX_16 };
obj2.containedImage = {
  width: "100%",
  aspectRatio: 1,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  opacity: 0.2,
};
obj2.containedImageSkeleton = { width: "100%", aspectRatio: 1 };
obj2.imageSkeleton = { flex: 1 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetPreview.tsx");

export default function UserProfileApplicationWidgetPreview(applicationId) {
  let heroImage = closure_7();
  let tmp15Result = dependencyMap;
  items = [AuthenticationStore];
  let tmp4 = importDefault;
  const stateFromStores = initialize.useStateFromStores(items, () => id.getId());
  ({ surfaceConfigs, resolutionContext } = useApplicationWidgetLayoutRendererPropsDefault(
    stateFromStores,
    applicationId.applicationId,
  ));
  const tmp6 = surfaceConfigs[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.ADD_WIDGET_PREVIEW];
  let layout;
  if (tmp6 != null) {
    layout = tmp6.layout;
  }
  const tmp8 = layout === ApplicationWidgetLayoutName.ApplicationWidgetLayoutName.ADD_WIDGET_PREVIEW_HERO;
  const tmp5 = useApplicationWidgetLayoutRendererPropsDefault(stateFromStores, applicationId.applicationId);
  const result = resolvedValuesFromUserApplicationIdentityProfile.bindResolveFieldValue(resolutionContext);
  if (tmp8) {
    let hero_image;
    if (!tmp10) {
      hero_image = tmp6.components.hero_image;
    }
    let contained_image = hero_image;
  } else if (!tmp10) {
    contained_image = tmp6.components.contained_image;
  }
  let image;
  if (contained_image != null) {
    image = contained_image.fields.image;
  }
  const items1 = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.MEDIA];
  let media = result(image, items1);
  const obj2 = {
    style: heroImage.preview,
    importantForAccessibility: "no-hide-descendants",
    accessibilityElementsHidden: true,
    children: null,
  };
  const obj3 = { style: heroImage.contentColumn, children: null };
  const obj4 = { style: heroImage.content, children: null };
  const items2 = [
    hasOwnProperty(UserProfileApplicationWidgetSkeletons.TextSkeleton, { variant: "body-lg/medium", widthChars: 8 }),
    hasOwnProperty(View, { style: heroImage.divider }),
  ];
  const obj6 = { style: heroImage.stats, children: null };
  const obj7 = { style: heroImage.statRow, children: null };
  const items3 = [
    hasOwnProperty(View, { style: heroImage.stat }),
    hasOwnProperty(View, { style: heroImage.stat }),
    hasOwnProperty(View, { style: heroImage.stat }),
  ];
  obj7.children = items3;
  const items4 = [timestampProducer(View, obj7)];
  const obj11 = { style: heroImage.statRow, children: null };
  const items5 = [
    hasOwnProperty(View, { style: heroImage.stat }),
    hasOwnProperty(View, { style: heroImage.stat }),
    hasOwnProperty(View, { style: heroImage.stat }),
  ];
  obj11.children = items5;
  items4[1] = timestampProducer(View, obj11);
  obj6.children = items4;
  items2[2] = timestampProducer(View, obj6);
  obj4.children = items2;
  obj3.children = timestampProducer(View, obj4);
  const items6 = [hasOwnProperty(View, obj3)];
  const obj15 = { style: heroImage.image, children: null };
  if (tmp8) {
    if (null != media) {
      const obj16 = { style: null, children: null };
      heroImage = heroImage.heroImage;
      obj16.style = heroImage;
      tmp4 = UserProfileApplicationWidgetHeroImageDefault;
      const obj17 = { media: null };
      media = media.media;
      obj17.media = media;
      tmp15Result = hasOwnProperty(tmp4, obj17);
      obj16.children = tmp15Result;
      let tmp15Result3 = hasOwnProperty(View, obj16);
    } else {
      const obj18 = { style: heroImage.imageSkeleton };
      tmp15Result3 = hasOwnProperty(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj18);
    }
  } else {
    const obj19 = { style: heroImage.containedImageContainer, children: null };
    if (null != media) {
      const obj20 = { source: null, style: null, resizeMode: "contain" };
      const obj21 = { uri: media.media.url };
      obj20.source = obj21;
      obj20.style = heroImage.containedImage;
      let tmp15Result4 = hasOwnProperty(FastImageDefault, obj20);
    } else {
      const obj22 = { style: heroImage.containedImageSkeleton };
      tmp15Result4 = hasOwnProperty(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj22);
    }
    obj19.children = tmp15Result4;
    obj15.children = hasOwnProperty(View, obj19);
    items6[1] = hasOwnProperty(View, obj15);
    obj2.children = items6;
    return timestampProducer(View, obj2);
  }
  const obj10 = { style: heroImage.stat };
  const obj12 = { style: heroImage.stat };
  const obj13 = { style: heroImage.stat };
  const obj14 = { style: heroImage.stat };
  const obj5 = { style: heroImage.divider };
  const obj8 = { style: heroImage.stat };
  const obj9 = { style: heroImage.stat };
  const tmpResult = resolvedValuesFromUserApplicationIdentityProfile;
}
