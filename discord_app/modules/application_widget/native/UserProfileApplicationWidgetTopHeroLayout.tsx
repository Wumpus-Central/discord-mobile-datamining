// discord_app/modules/application_widget/native/UserProfileApplicationWidgetTopHeroLayout.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import UserProfileSharedStyles from "../../user_profile/native/UserProfileSharedStyles.tsx";
import resolvedValuesFromUserApplicationIdentityProfile from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";
import UserProfileApplicationWidgetFieldUtils from "../../user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx";
import UserProfileApplicationWidgetSkeletons from "../../user_profile/native/UserProfileApplicationWidgetSkeletons.tsx";
import UserProfileApplicationWidgetHeroImageDefault from "UserProfileApplicationWidgetHeroImage.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const CARD_PADDING = fn(7962).CARD_PADDING;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5306);
let obj2 = {
  root: { position: "relative" },
  contentRow: { flexDirection: "row", gap: nativeDefault.space.PX_12, minHeight: 140 },
  heroText: null,
  heroImageColumn: null,
  heroImageSkeleton: null,
  heroImagePositioner: null,
};
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12, minHeight: 140 };
obj2.heroText = { flex: 1, minWidth: 120, gap: nativeDefault.space.PX_4, justifyContent: "center" };
obj2.heroImageColumn = { flex: 1, alignItems: "flex-end" };
let size = { width: 86, height: 86, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16 };
obj2.heroImageSkeleton = size;
obj2.heroImagePositioner = {
  position: "absolute",
  left: "50%",
  right: -CARD_PADDING,
  top: -CARD_PADDING,
  bottom: 0,
  overflow: "hidden",
};
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/application_widget/native/UserProfileApplicationWidgetTopHeroLayout.tsx",
);

export default function UserProfileApplicationWidgetTopHeroLayout(header) {
  ({ topConfig, resolveFieldValue, numberFormat } = header);
  c0 = undefined;
  c1 = undefined;
  const tmp = closure_8();
  [tmp3, c0] = noop.useState();
  const tmp2 = _slicedToArray(noop.useState(), 2);
  [tmp5, c1] = noop.useState();
  let tmp19Result3 = null != tmp3;
  const callback = noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    _undefined(layout.width);
    _undefined2(layout.height);
  }, []);
  if (tmp19Result3) {
    tmp19Result3 = null != tmp5;
  }
  const tmp4 = _slicedToArray(noop.useState(), 2);
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
  const hero_image = topConfig.components.hero_image;
  let image;
  const textComponentValues3 = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(
    topConfig.components.subtitle_3,
    resolveFieldValue,
    numberFormat,
  );
  if (hero_image != null) {
    image = hero_image.fields.image;
  }
  items = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  const obj5 = { style: tmp.root, children: null };
  const items1 = [header.header, ,];
  const obj6 = { style: tmp.contentRow, children: null };
  const obj7 = { style: tmp.heroText, children: null };
  const userProfileCardRadius = UserProfileSharedStyles.useUserProfileCardRadius();
  const items2 = [
    timestampProducer(UserProfileApplicationWidgetFieldUtils.FieldText, {
      field: textComponentValues,
      variant: "body-lg/medium",
      color: "text-default",
    }),
    timestampProducer(UserProfileApplicationWidgetFieldUtils.FieldText, {
      field: textComponentValues1,
      variant: "body-sm/normal",
      color: "text-muted",
    }),
    timestampProducer(UserProfileApplicationWidgetFieldUtils.FieldText, {
      field: textComponentValues2,
      variant: "body-sm/normal",
      color: "text-muted",
    }),
    timestampProducer(UserProfileApplicationWidgetFieldUtils.FieldText, {
      field: textComponentValues3,
      variant: "body-sm/normal",
      color: "text-muted",
    }),
  ];
  obj7.children = items2;
  const items3 = [metroImportDefault(View, obj7)];
  const obj8 = { style: tmp.heroImageColumn, children: null };
  let tmp19Result = null == fieldValue || !tmp19Result3;
  if (tmp19Result) {
    const obj9 = { style: tmp.heroImageSkeleton };
    tmp19Result = timestampProducer(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj9);
  }
  obj8.children = tmp19Result;
  items3[1] = timestampProducer(View, obj8);
  obj6.children = items3;
  items1[1] = metroImportDefault(View, obj6);
  let tmp19Result4 = null != fieldValue;
  if (tmp19Result4) {
    const obj10 = { style: null, pointerEvents: "none", onLayout: null, children: null };
    const items4 = [tmp.heroImagePositioner];
    const obj11 = { borderTopRightRadius: userProfileCardRadius };
    items4[1] = obj11;
    obj10.style = items4;
    obj10.onLayout = callback;
    if (tmp19Result3) {
      const size = { media: fieldValue.media, width: tmp3, height: tmp5 };
      tmp19Result3 = timestampProducer(UserProfileApplicationWidgetHeroImageDefault, size);
    }
    obj10.children = tmp19Result3;
    tmp19Result4 = timestampProducer(View, obj10);
  }
  items1[2] = tmp19Result4;
  obj5.children = items1;
  return metroImportDefault(View, obj5);
}
