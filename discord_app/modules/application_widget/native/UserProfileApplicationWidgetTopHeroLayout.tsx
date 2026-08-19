// discord_app/modules/application_widget/native/UserProfileApplicationWidgetTopHeroLayout.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LinearGradientDefault from "../../../../_runtime/04756_LinearGradient.js";
import _isNativeReflectConstructDefault from "../../../../_runtime/06352__isNativeReflectConstruct.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { HorizontalGradient } from "../../../Constants.tsx";
import { CARD_PADDING } from "../../user_profile/native/Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import { resolvedValuesFromUserApplicationIdentityProfile } from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";

const require = fn;
({ Image: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const sum = CARD_PADDING + 8;
let closure_10 = ["transparent", "black"];
const createCacheKey = { flexDirection: "row", gap: ThemesDefault.space.PX_12, minHeight: 140 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flex: 1, minWidth: 120, gap: ThemesDefault.space.PX_4, justifyContent: "center" };
createCacheKey[3] = { flex: 1, alignItems: "flex-end" };
createCacheKey[4] = { width: 86, height: 86, marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[5] = { position: "absolute", left: "50%", right: -CARD_PADDING, top: -sum, bottom: 0, overflow: "hidden" };
createCacheKey[6] = { flex: 1, flexDirection: "row" };
createCacheKey[7] = { width: 130 };
createCacheKey[8] = { flex: 1, backgroundColor: "black" };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetTopHeroLayout.tsx");

export default function UserProfileApplicationWidgetTopHeroLayout(header) {
  ({ topConfig, resolveFieldValue, numberFormat } = header);
  let _require;
  const tmp = callback4();
  [tmp3, c0] = callback(React.useState(null), 2);
  let obj = resolvedValuesFromUserApplicationIdentityProfile;
  const textComponentValues = obj.resolveTextComponentValues(topConfig.components.title, resolveFieldValue, numberFormat, true);
  obj1 = resolvedValuesFromUserApplicationIdentityProfile;
  const textComponentValues1 = obj1.resolveTextComponentValues(topConfig.components.subtitle_1, resolveFieldValue, numberFormat);
  let obj2 = resolvedValuesFromUserApplicationIdentityProfile;
  const textComponentValues2 = obj2.resolveTextComponentValues(topConfig.components.subtitle_2, resolveFieldValue, numberFormat);
  let obj3 = resolvedValuesFromUserApplicationIdentityProfile;
  const hero_image = topConfig.components.hero_image;
  let image;
  const textComponentValues3 = obj3.resolveTextComponentValues(topConfig.components.subtitle_3, resolveFieldValue, numberFormat);
  if (hero_image != null) {
    image = hero_image.fields.image;
  }
  const items = [require("../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx").ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  const items1 = [header.header, , ];
  obj = { style: tmp.contentRow, children: null };
  obj1 = { style: tmp.heroText, children: null };
  const items2 = [callback2(require("../../user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx").FieldText, { field: textComponentValues, variant: "text-lg/medium", color: "text-default" }), callback2(require("../../user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx").FieldText, { field: textComponentValues1, variant: "text-sm/normal", color: "text-muted" }), callback2(require("../../user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx").FieldText, { field: textComponentValues2, variant: "text-sm/normal", color: "text-muted" }), callback2(require("../../user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx").FieldText, { field: textComponentValues3, variant: "text-sm/normal", color: "text-muted" })];
  obj1[1] = items2;
  const items3 = [callback3(closure_6, obj1), ];
  obj2 = { style: tmp.heroImageColumn, children: null };
  let tmp14Result = null == fieldValue || null == tmp3;
  if (tmp14Result) {
    obj3 = { style: null };
    obj3[0] = tmp.heroImageSkeleton;
    tmp14Result = callback2(tmp4(12278).ImageSkeleton, obj3);
  }
  obj2[1] = tmp14Result;
  items3[1] = callback2(closure_6, obj2);
  obj[1] = items3;
  items1[1] = callback3(closure_6, obj);
  let tmp14Result1 = null != fieldValue;
  if (tmp14Result1) {
    const obj4 = { style: null, pointerEvents: "none", onLayout: null, children: null };
    obj4[0] = tmp.heroImagePositioner;
    obj4[2] = function onLayout(nativeEvent) {
      const layout = nativeEvent.nativeEvent.layout;
      _undefined({ width: layout.width, height: layout.height });
    };
    tmp14Result = null != tmp3;
    if (tmp14Result) {
      const result = fieldValue.media.height * (tmp3.width / fieldValue.media.width);
      const obj5 = { style: null, androidRenderingMode: "software", maskElement: null, children: null };
      const obj6 = { width: null, height: null };
      obj6[0] = tmp3.width;
      obj6[1] = result;
      obj5[0] = obj6;
      const obj7 = { style: null, children: null };
      obj7[0] = tmp.heroImageMask;
      const obj8 = { start: null, end: null, colors: null, style: null };
      ({ START: obj14[0], END: obj14[1] } = HorizontalGradient);
      obj8[2] = closure_10;
      obj8[3] = tmp.heroImageFadeGradient;
      const items4 = [callback2(LinearGradientDefault, obj8), ];
      const obj9 = { style: null };
      obj9[0] = tmp.heroImageMaskRemainder;
      items4[1] = callback2(closure_6, obj9);
      obj7[1] = items4;
      obj5[2] = callback3(closure_6, obj7);
      const obj10 = { source: null, style: null };
      const obj11 = { uri: null };
      obj11[0] = fieldValue.media.url;
      obj10[0] = obj11;
      obj10[1] = { width: "100%", height: "100%" };
      obj5[3] = callback2(closure_5, obj10);
      tmp14Result = callback2(_isNativeReflectConstructDefault, obj5);
    }
    obj4[3] = tmp14Result;
    tmp14Result1 = callback2(closure_6, obj4);
  }
  items1[2] = tmp14Result1;
  obj[1] = items1;
  return callback3(closure_6, obj);
};
export const HERO_IMAGE_UNCLIPPED_TOP_BLEED = 8;
export const HERO_IMAGE_TOP_BLEED = sum;