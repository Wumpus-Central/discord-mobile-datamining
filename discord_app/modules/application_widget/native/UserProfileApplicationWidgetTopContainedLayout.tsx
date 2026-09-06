// discord_app/modules/application_widget/native/UserProfileApplicationWidgetTopContainedLayout.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import resolvedValuesFromUserApplicationIdentityProfile from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";
import UserProfileApplicationWidgetFieldUtils from "../../user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { contentRow: null, text: null, imageContainer: null, image: null, imageSkeleton: null };
createStyles = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" };
createStyles.contentRow = createStyles;
createStyles.text = { flex: 1, gap: nativeDefault.space.PX_4 };
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
createStyles.imageContainer = size;
createStyles.image = { width: "100%", height: "100%" };
const size1 = { width: 96, height: 96, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16 };
createStyles.imageSkeleton = size1;
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/application_widget/native/UserProfileApplicationWidgetTopContainedLayout.tsx",
);

export default function UserProfileApplicationWidgetTopContainedLayout(header) {
  ({ topConfig, resolveFieldValue, numberFormat } = header);
  const tmp = closure_6();
  let obj = resolvedValuesFromUserApplicationIdentityProfile;
  const textComponentValues = obj.resolveTextComponentValues(
    topConfig.components.title,
    resolveFieldValue,
    numberFormat,
    true,
  );
  let obj1 = resolvedValuesFromUserApplicationIdentityProfile;
  const textComponentValues1 = obj1.resolveTextComponentValues(
    topConfig.components.subtitle_1,
    resolveFieldValue,
    numberFormat,
  );
  let obj2 = resolvedValuesFromUserApplicationIdentityProfile;
  const textComponentValues2 = obj2.resolveTextComponentValues(
    topConfig.components.subtitle_2,
    resolveFieldValue,
    numberFormat,
  );
  let obj3 = resolvedValuesFromUserApplicationIdentityProfile;
  const contained_image = topConfig.components.contained_image;
  let image;
  const textComponentValues3 = obj3.resolveTextComponentValues(
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
  obj = { style: tmp.contentRow, children: null };
  obj = { style: tmp.text, children: null };
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
  obj.children = items2;
  const items3 = [hasOwnProperty(React3, obj)];
  if (null != fieldValue) {
    obj1 = { style: tmp.imageContainer, children: null };
    obj2 = { source: null, style: null, resizeMode: "contain" };
    obj3 = { uri: fieldValue.media.url };
    obj2.source = obj3;
    obj2.style = tmp.image;
    obj1.children = tmp12(React2, obj2);
    let tmp12Result = tmp12(tmp11, obj1);
  } else {
    const obj4 = { style: tmp.imageSkeleton };
    tmp12Result = tmp12(tmp2(9014).ImageSkeleton, obj4);
  }
  const obj5 = { children: null };
  items3[1] = tmp12Result;
  obj.children = items3;
  items1[1] = hasOwnProperty(React3, obj);
  obj5.children = items1;
  return hasOwnProperty(React3, obj5);
}
