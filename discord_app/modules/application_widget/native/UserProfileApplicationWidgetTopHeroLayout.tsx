// discord_app/modules/application_widget/native/UserProfileApplicationWidgetTopHeroLayout.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LinearGradientDefault from "../../../../_runtime/04987_LinearGradient.js";
import _modDef5664 from "../../../../_runtime/metro/05664__.js";
import UserProfileSharedStyles from "../../user_profile/native/UserProfileSharedStyles.tsx";
import resolvedValuesFromUserApplicationIdentityProfile from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";
import UserProfileApplicationWidgetFieldUtils from "../../user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx";
import UserProfileApplicationWidgetSkeletons from "../../user_profile/native/UserProfileApplicationWidgetSkeletons.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const HorizontalGradient = fn(1074).HorizontalGradient;
const CARD_PADDING = fn(7208).CARD_PADDING;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const colors = ["transparent", "black"];
fn(4560);
let createStyles = {
  root: { position: "relative" },
  contentRow: null,
  heroText: null,
  heroImageColumn: null,
  heroImageSkeleton: null,
  heroImagePositioner: null,
  heroImageMask: null,
  heroImageFadeGradient: null,
  heroImageMaskRemainder: null,
};
createStyles = { flexDirection: "row", gap: nativeDefault.space.PX_12, minHeight: 140 };
createStyles.contentRow = createStyles;
createStyles.heroText = { flex: 1, minWidth: 120, gap: nativeDefault.space.PX_4, justifyContent: "center" };
createStyles.heroImageColumn = { flex: 1, alignItems: "flex-end" };
let size = { width: 86, height: 86, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16 };
createStyles.heroImageSkeleton = size;
createStyles.heroImagePositioner = {
  position: "absolute",
  left: "50%",
  right: -CARD_PADDING,
  top: -CARD_PADDING,
  bottom: 0,
  overflow: "hidden",
};
createStyles.heroImageMask = { flex: 1, flexDirection: "row" };
createStyles.heroImageFadeGradient = { width: 130 };
createStyles.heroImageMaskRemainder = { flex: 1, backgroundColor: "black" };
let closure_11 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/application_widget/native/UserProfileApplicationWidgetTopHeroLayout.tsx",
);

export default function UserProfileApplicationWidgetTopHeroLayout(header) {
  ({ topConfig, resolveFieldValue, numberFormat } = header);
  c0 = undefined;
  const tmp = closure_11();
  [tmp3, c0] = _slicedToArray(noop.useState(null), 2);
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
  const hero_image = topConfig.components.hero_image;
  let image;
  const textComponentValues3 = obj3.resolveTextComponentValues(
    topConfig.components.subtitle_3,
    resolveFieldValue,
    numberFormat,
  );
  if (hero_image != null) {
    image = hero_image.fields.image;
  }
  const items = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  obj = { style: tmp.root, children: null };
  const items1 = [header.header, ,];
  obj = { style: tmp.contentRow, children: null };
  obj1 = { style: tmp.heroText, children: null };
  const userProfileCardRadius = UserProfileSharedStyles.useUserProfileCardRadius();
  const items2 = [
    React6(UserProfileApplicationWidgetFieldUtils.FieldText, {
      field: textComponentValues,
      variant: "text-lg/medium",
      color: "text-default",
    }),
    React6(UserProfileApplicationWidgetFieldUtils.FieldText, {
      field: textComponentValues1,
      variant: "text-sm/normal",
      color: "text-muted",
    }),
    React6(UserProfileApplicationWidgetFieldUtils.FieldText, {
      field: textComponentValues2,
      variant: "text-sm/normal",
      color: "text-muted",
    }),
    React6(UserProfileApplicationWidgetFieldUtils.FieldText, {
      field: textComponentValues3,
      variant: "text-sm/normal",
      color: "text-muted",
    }),
  ];
  obj1.children = items2;
  const items3 = [React7(timestampProducer, obj1)];
  obj2 = { style: tmp.heroImageColumn, children: null };
  let tmp15Result = null == fieldValue || null == tmp3;
  if (tmp15Result) {
    obj3 = { style: tmp.heroImageSkeleton };
    tmp15Result = React6(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj3);
  }
  obj2.children = tmp15Result;
  items3[1] = React6(timestampProducer, obj2);
  obj.children = items3;
  items1[1] = React7(timestampProducer, obj);
  let tmp15Result1 = null != fieldValue;
  if (tmp15Result1) {
    const obj4 = { style: null, pointerEvents: "none", onLayout: null, children: null };
    const items4 = [tmp.heroImagePositioner];
    const obj5 = { borderTopRightRadius: userProfileCardRadius };
    items4[1] = obj5;
    obj4.style = items4;
    obj4.onLayout = function onLayout(nativeEvent) {
      const layout = nativeEvent.nativeEvent.layout;
      const size = { width: layout.width, height: layout.height };
      _undefined(size);
    };
    tmp15Result = null != tmp3;
    if (tmp15Result) {
      const result = fieldValue.media.height * (tmp3.width / fieldValue.media.width);
      const obj6 = { style: null, androidRenderingMode: "software", maskElement: null, children: null };
      let size = { width: tmp3.width, height: result };
      obj6.style = size;
      const obj7 = { style: tmp.heroImageMask, children: null };
      const obj8 = { start: null, end: null, colors: null, style: null };
      ({ START: obj16.start, END: obj16.end } = HorizontalGradient);
      obj8.colors = colors;
      obj8.style = tmp.heroImageFadeGradient;
      const items5 = [React6(LinearGradientDefault, obj8)];
      const obj9 = { style: tmp.heroImageMaskRemainder };
      items5[1] = React6(timestampProducer, obj9);
      obj7.children = items5;
      obj6.maskElement = React7(timestampProducer, obj7);
      const obj10 = { source: null, style: null };
      const obj11 = { uri: fieldValue.media.url };
      obj10.source = obj11;
      obj10.style = { width: "100%", height: "100%" };
      obj6.children = React6(hasOwnProperty, obj10);
      tmp15Result = React6(_modDef5664, obj6);
    }
    obj4.children = tmp15Result;
    tmp15Result1 = React6(timestampProducer, obj4);
  }
  items1[2] = tmp15Result1;
  obj.children = items1;
  return React7(timestampProducer, obj);
}
