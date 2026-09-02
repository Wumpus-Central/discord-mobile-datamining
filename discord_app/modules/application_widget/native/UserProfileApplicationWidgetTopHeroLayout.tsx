// discord_app/modules/application_widget/native/UserProfileApplicationWidgetTopHeroLayout.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LinearGradientDefault from "../../../../_runtime/04940_LinearGradient.js";
import _isNativeReflectConstructDefault from "../../../../_runtime/05543__isNativeReflectConstruct.js";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { HorizontalGradient } from "../../../Constants.tsx";
import { CARD_PADDING } from "../../user_profile/native/Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { resolvedValuesFromUserApplicationIdentityProfile } from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";

const require = arg1;
({ Image: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = ["transparent", "black"];
createCacheKey = {
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
createCacheKey = { flexDirection: "row", gap: ThemesDefault.space.PX_12, minHeight: 140 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flex: 1, minWidth: 120, gap: ThemesDefault.space.PX_4, justifyContent: "center" };
createCacheKey[3] = { flex: 1, alignItems: "flex-end" };
let obj1 = { flex: 1, minWidth: 120, gap: ThemesDefault.space.PX_4, justifyContent: "center" };
createCacheKey[4] = {
  width: 86,
  height: 86,
  marginTop: ThemesDefault.space.PX_12,
  marginBottom: ThemesDefault.space.PX_16,
};
createCacheKey[5] = {
  position: "absolute",
  left: "50%",
  right: -CARD_PADDING,
  top: -CARD_PADDING,
  bottom: 0,
  overflow: "hidden",
};
createCacheKey[6] = { flex: 1, flexDirection: "row" };
createCacheKey[7] = { width: 130 };
createCacheKey[8] = { flex: 1, backgroundColor: "black" };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj2 = { width: 86, height: 86, marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_16 };
let result = require("set").fileFinishedImporting(
  "modules/application_widget/native/UserProfileApplicationWidgetTopHeroLayout.tsx",
);

export default function UserProfileApplicationWidgetTopHeroLayout(header) {
  ({ topConfig, resolveFieldValue, numberFormat } = header);
  let _require;
  const tmp = callback4();
  [tmp3, c0] = callback(React.useState(null), 2);
  let obj = resolvedValuesFromUserApplicationIdentityProfile;
  const textComponentValues = obj.resolveTextComponentValues(
    topConfig.components.title,
    resolveFieldValue,
    numberFormat,
    true,
  );
  obj1 = resolvedValuesFromUserApplicationIdentityProfile;
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
  const items = [
    require("../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx").ResolvedValueType.MEDIA,
  ];
  const fieldValue = resolveFieldValue(image, items);
  const tmp2 = callback(React.useState(null), 2);
  obj = { style: tmp.root, children: null };
  const items1 = [header.header, ,];
  obj = { style: tmp.contentRow, children: null };
  obj1 = { style: tmp.heroText, children: null };
  const userProfileCardRadius =
    require("../../user_profile/native/UserProfileSharedStyles.tsx").useUserProfileCardRadius();
  const items2 = [
    callback2(require("../../user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx").FieldText, {
      field: textComponentValues,
      variant: "text-lg/medium",
      color: "text-default",
    }),
    callback2(require("../../user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx").FieldText, {
      field: textComponentValues1,
      variant: "text-sm/normal",
      color: "text-muted",
    }),
    callback2(require("../../user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx").FieldText, {
      field: textComponentValues2,
      variant: "text-sm/normal",
      color: "text-muted",
    }),
    callback2(require("../../user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx").FieldText, {
      field: textComponentValues3,
      variant: "text-sm/normal",
      color: "text-muted",
    }),
  ];
  obj1[1] = items2;
  const items3 = [callback3(closure_6, obj1)];
  obj2 = { style: tmp.heroImageColumn, children: null };
  let tmp15Result = null == fieldValue || null == tmp3;
  if (tmp15Result) {
    obj3 = { style: null };
    obj3[0] = tmp.heroImageSkeleton;
    tmp15Result = tmp15(tmp4(12978).ImageSkeleton, obj3);
  }
  obj2[1] = tmp15Result;
  items3[1] = callback2(closure_6, obj2);
  obj[1] = items3;
  items1[1] = callback3(closure_6, obj);
  let tmp15Result1 = null != fieldValue;
  if (tmp15Result1) {
    const obj4 = { style: null, pointerEvents: "none", onLayout: null, children: null };
    const items4 = [tmp.heroImagePositioner];
    const obj5 = { borderTopRightRadius: null };
    obj5[0] = userProfileCardRadius;
    items4[1] = obj5;
    obj4[0] = items4;
    obj4[2] = function onLayout(nativeEvent) {
      const layout = nativeEvent.nativeEvent.layout;
      _undefined({ width: layout.width, height: layout.height });
    };
    tmp15Result = null != tmp3;
    if (tmp15Result) {
      const result = fieldValue.media.height * (tmp3.width / fieldValue.media.width);
      const obj6 = { style: null, androidRenderingMode: "software", maskElement: null, children: null };
      const obj7 = { width: null, height: null };
      obj7[0] = tmp3.width;
      obj7[1] = result;
      obj6[0] = obj7;
      const obj8 = { style: null, children: null };
      obj8[0] = tmp.heroImageMask;
      const obj9 = { start: null, end: null, colors: null, style: null };
      ({ START: obj16[0], END: obj16[1] } = HorizontalGradient);
      obj9[2] = closure_10;
      obj9[3] = tmp.heroImageFadeGradient;
      const items5 = [tmp15(LinearGradientDefault, obj9)];
      const obj10 = { style: null };
      obj10[0] = tmp.heroImageMaskRemainder;
      items5[1] = tmp15(tmp14, obj10);
      obj8[1] = items5;
      obj6[2] = tmp13(tmp14, obj8);
      const obj11 = { source: null, style: null };
      const obj12 = { uri: null };
      obj12[0] = fieldValue.media.url;
      obj11[0] = obj12;
      obj11[1] = { width: "100%", height: "100%" };
      obj6[3] = tmp15(closure_5, obj11);
      tmp15Result = tmp15(_isNativeReflectConstructDefault, obj6);
      const tmp21 = _isNativeReflectConstructDefault;
    }
    obj4[3] = tmp15Result;
    tmp15Result1 = tmp15(tmp14, obj4);
  }
  items1[2] = tmp15Result1;
  obj[1] = items1;
  return callback3(closure_6, obj);
}
