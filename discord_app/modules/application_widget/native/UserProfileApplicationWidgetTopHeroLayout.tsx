// === Module 8381: UserProfileApplicationWidgetTopHeroLayout ===

// Module 8381 (UserProfileApplicationWidgetTopHeroLayout)
import nativeDefault from "native" /* 576 */;
import LinearGradientDefault from "LinearGradient" /* 5286 */;
import _modDef5971 from "module_5971" /* 5971 */;
import UserProfileSharedStyles from "UserProfileSharedStyles" /* 7679 */;
import resolvedValuesFromUserApplicationIdentityProfile from "resolvedValuesFromUserApplicationIdentityProfile" /* 8382 */;
import UserProfileApplicationWidgetFieldUtils from "UserProfileApplicationWidgetFieldUtils" /* 8469 */;
import UserProfileApplicationWidgetSkeletons from "UserProfileApplicationWidgetSkeletons" /* 8470 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const HorizontalGradient = fn(1074).HorizontalGradient;
const CARD_PADDING = fn(6624).CARD_PADDING;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const colors = ["transparent", "black"];
const createStyles = fn(4829);
let obj2 = { root: { position: "relative" }, contentRow: { flexDirection: "row", gap: nativeDefault.space.PX_12, minHeight: 140 }, heroText: null, heroImageColumn: null, heroImageSkeleton: null, heroImagePositioner: null, heroImageMask: null, heroImageFadeGradient: null, heroImageMaskRemainder: null };
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12, minHeight: 140 };
obj2.heroText = { flex: 1, minWidth: 120, gap: nativeDefault.space.PX_4, justifyContent: "center" };
obj2.heroImageColumn = { flex: 1, alignItems: "flex-end" };
let size = { width: 86, height: 86, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16 };
obj2.heroImageSkeleton = size;
obj2.heroImagePositioner = { position: "absolute", left: "50%", right: -CARD_PADDING, top: -CARD_PADDING, bottom: 0, overflow: "hidden" };
obj2.heroImageMask = { flex: 1, flexDirection: "row" };
obj2.heroImageFadeGradient = { width: 130 };
obj2.heroImageMaskRemainder = { flex: 1, backgroundColor: "black" };
let closure_11 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetTopHeroLayout.tsx");

export default function UserProfileApplicationWidgetTopHeroLayout(header) {
  ({ topConfig, resolveFieldValue, numberFormat } = header);
  c0 = undefined;
  const tmp = closure_11();
  [tmp3, c0] = noop.useState(null);
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  const textComponentValues = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(topConfig.components.title, resolveFieldValue, numberFormat, true);
  const textComponentValues1 = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(topConfig.components.subtitle_1, resolveFieldValue, numberFormat);
  const textComponentValues2 = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(topConfig.components.subtitle_2, resolveFieldValue, numberFormat);
  const hero_image = topConfig.components.hero_image;
  let image;
  const textComponentValues3 = resolvedValuesFromUserApplicationIdentityProfile.resolveTextComponentValues(topConfig.components.subtitle_3, resolveFieldValue, numberFormat);
  if (hero_image != null) {
    image = hero_image.fields.image;
  }
  const items = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  const obj5 = { style: tmp.root, children: null };
  const items1 = [header.header, , ];
  const obj6 = { style: tmp.contentRow, children: null };
  const obj7 = { style: tmp.heroText, children: null };
  const userProfileCardRadius = UserProfileSharedStyles.useUserProfileCardRadius();
  const items2 = [React6(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues, variant: "text-lg/medium", color: "text-default" }), React6(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues1, variant: "text-sm/normal", color: "text-muted" }), React6(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues2, variant: "text-sm/normal", color: "text-muted" }), React6(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues3, variant: "text-sm/normal", color: "text-muted" })];
  obj7.children = items2;
  const items3 = [React7(timestampProducer, obj7), ];
  const obj8 = { style: tmp.heroImageColumn, children: null };
  let tmp15Result = null == fieldValue || null == tmp3;
  if (tmp15Result) {
    const obj9 = { style: tmp.heroImageSkeleton };
    tmp15Result = React6(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj9);
  }
  obj8.children = tmp15Result;
  items3[1] = React6(timestampProducer, obj8);
  obj6.children = items3;
  items1[1] = React7(timestampProducer, obj6);
  let tmp15Result4 = null != fieldValue;
  if (tmp15Result4) {
    const obj10 = { style: null, pointerEvents: "none", onLayout: null, children: null };
    const items4 = [tmp.heroImagePositioner, ];
    const obj11 = { borderTopRightRadius: userProfileCardRadius };
    items4[1] = obj11;
    obj10.style = items4;
    obj10.onLayout = function onLayout(nativeEvent) {
      const layout = nativeEvent.nativeEvent.layout;
      const size = { width: layout.width, height: layout.height };
      _undefined(size);
    };
    let tmp15Result3 = null != tmp3;
    if (tmp15Result3) {
      const result = fieldValue.media.height * (tmp3.width / fieldValue.media.width);
      const obj12 = { style: null, androidRenderingMode: "software", maskElement: null, children: null };
      let size = { width: tmp3.width, height: result };
      obj12.style = size;
      const obj13 = { style: tmp.heroImageMask, children: null };
      const obj14 = { start: null, end: null, colors: null, style: null };
      ({ START: obj16.start, END: obj16.end } = HorizontalGradient);
      obj14.colors = colors;
      obj14.style = tmp.heroImageFadeGradient;
      const items5 = [React6(LinearGradientDefault, obj14), ];
      const obj15 = { style: tmp.heroImageMaskRemainder };
      items5[1] = React6(timestampProducer, obj15);
      obj13.children = items5;
      obj12.maskElement = React7(timestampProducer, obj13);
      const obj17 = { source: null, style: null };
      const obj18 = { uri: fieldValue.media.url };
      obj17.source = obj18;
      obj17.style = { width: "100%", height: "100%" };
      obj12.children = React6(hasOwnProperty, obj17);
      tmp15Result3 = React6(_modDef5971, obj12);
    }
    obj10.children = tmp15Result3;
    tmp15Result4 = React6(timestampProducer, obj10);
  }
  items1[2] = tmp15Result4;
  obj5.children = items1;
  return React7(timestampProducer, obj5);
};