// discord_app/modules/application_widget/native/UserProfileApplicationWidgetTopContainedLayout.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import resolvedValuesFromUserApplicationIdentityProfile from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";
import UserProfileApplicationWidgetFieldUtils from "../../user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx";
import UserProfileApplicationWidgetSkeletons from "../../user_profile/native/UserProfileApplicationWidgetSkeletons.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4722);
let obj2 = {
  contentRow: { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" },
  text: null,
  imageContainer: null,
  image: null,
  imageSkeleton: null,
};
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" };
obj2.text = { flex: 1, gap: nativeDefault.space.PX_4 };
let size = {
  width: 96,
  height: 96,
  marginTop: nativeDefault.space.PX_12,
  marginBottom: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.md,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.imageContainer = size;
obj2.image = { width: "100%", height: "100%" };
const size1 = { width: 96, height: 96, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16 };
obj2.imageSkeleton = size1;
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/application_widget/native/UserProfileApplicationWidgetTopContainedLayout.tsx",
);

export default function UserProfileApplicationWidgetTopContainedLayout(header) {
  ({ topConfig, resolveFieldValue, numberFormat } = header);
  const tmp = closure_6();
  const textComponentValues = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(
    topConfig.components.title,
    resolveFieldValue,
    numberFormat,
    true,
  );
  const textComponentValues1 = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(
    topConfig.components.subtitle_1,
    resolveFieldValue,
    numberFormat,
  );
  const textComponentValues2 = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(
    topConfig.components.subtitle_2,
    resolveFieldValue,
    numberFormat,
  );
  const contained_image = topConfig.components.contained_image;
  let image;
  const textComponentValues3 = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(
    topConfig.components.subtitle_3,
    resolveFieldValue,
    numberFormat,
  );
  if (contained_image != null) {
    image = contained_image.fields.image;
  }
  const items = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  const items1 = [header.header];
  const obj5 = { style: tmp.contentRow, children: null };
  const obj6 = { style: tmp.text, children: null };
  const items2 = [
    React4(UserProfileApplicationWidgetFieldUtils.FieldText, {
      field: textComponentValues,
      variant: "text-lg/medium",
      color: "text-default",
    }),
    React4(UserProfileApplicationWidgetFieldUtils.FieldText, {
      field: textComponentValues1,
      variant: "text-sm/normal",
      color: "text-muted",
    }),
    React4(UserProfileApplicationWidgetFieldUtils.FieldText, {
      field: textComponentValues2,
      variant: "text-sm/normal",
      color: "text-muted",
    }),
    React4(UserProfileApplicationWidgetFieldUtils.FieldText, {
      field: textComponentValues3,
      variant: "text-sm/normal",
      color: "text-muted",
    }),
  ];
  obj6.children = items2;
  const items3 = [hasOwnProperty(React3, obj6)];
  if (null != fieldValue) {
    const obj7 = { style: tmp.imageContainer, children: null };
    const obj8 = { source: null, style: null, resizeMode: "contain" };
    const obj9 = { uri: fieldValue.media.url };
    obj8.source = obj9;
    obj8.style = tmp.image;
    obj7.children = React4(React2, obj8);
    let tmp12Result = React4(React3, obj7);
  } else {
    const obj10 = { style: tmp.imageSkeleton };
    tmp12Result = React4(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj10);
  }
  const obj11 = { children: null };
  items3[1] = tmp12Result;
  obj5.children = items3;
  items1[1] = hasOwnProperty(React3, obj5);
  obj11.children = items1;
  return hasOwnProperty(React3, obj11);
}
