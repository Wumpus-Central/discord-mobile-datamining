// === Module 12692: UserProfileApplicationWidgetTopContainedLayout ===

// Module 12692 (UserProfileApplicationWidgetTopContainedLayout)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import resolvedValuesFromUserApplicationIdentityProfile from "resolvedValuesFromUserApplicationIdentityProfile" /* 12601 */;
import formatDurationNarrow from "formatDurationNarrow" /* 12688 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
noopAll;
({ Image: obj1, View: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { contentRow: null, text: null, imageContainer: null, image: null, imageSkeleton: null };
createCacheKey = { flexDirection: "row", gap: ThemesDefault.space.PX_12, alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, gap: ThemesDefault.space.PX_4 };
obj1 = { flex: 1, gap: ThemesDefault.space.PX_4 };
createCacheKey[2] = { width: 96, height: 96, marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_16, borderRadius: ThemesDefault.radii.md, overflow: "hidden", borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[3] = { width: "100%", height: "100%" };
let obj2 = { width: 96, height: 96, marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_16, borderRadius: ThemesDefault.radii.md, overflow: "hidden", borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[4] = { width: 96, height: 96, marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_16 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj3 = { width: 96, height: 96, marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetTopContainedLayout.tsx");

export default function UserProfileApplicationWidgetTopContainedLayout(header) {
  ({ topConfig, resolveFieldValue, numberFormat } = header);
  const tmp = callback3();
  let obj = resolvedValuesFromUserApplicationIdentityProfile;
  const textComponentValues = obj.resolveTextComponentValues(topConfig.components.title, resolveFieldValue, numberFormat, true);
  obj1 = resolvedValuesFromUserApplicationIdentityProfile;
  const textComponentValues1 = obj1.resolveTextComponentValues(topConfig.components.subtitle_1, resolveFieldValue, numberFormat);
  let obj2 = resolvedValuesFromUserApplicationIdentityProfile;
  const textComponentValues2 = obj2.resolveTextComponentValues(topConfig.components.subtitle_2, resolveFieldValue, numberFormat);
  let obj3 = resolvedValuesFromUserApplicationIdentityProfile;
  const contained_image = topConfig.components.contained_image;
  let image;
  const textComponentValues3 = obj3.resolveTextComponentValues(topConfig.components.subtitle_3, resolveFieldValue, numberFormat);
  if (contained_image != null) {
    image = contained_image.fields.image;
  }
  const items = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  const items1 = [header.header, ];
  obj = { style: tmp.contentRow, children: null };
  obj = { style: tmp.text, children: null };
  const items2 = [callback(formatDurationNarrow.FieldText, { field: textComponentValues, variant: "text-lg/medium", color: "text-default" }), callback(formatDurationNarrow.FieldText, { field: textComponentValues1, variant: "text-sm/normal", color: "text-muted" }), callback(formatDurationNarrow.FieldText, { field: textComponentValues2, variant: "text-sm/normal", color: "text-muted" }), callback(formatDurationNarrow.FieldText, { field: textComponentValues3, variant: "text-sm/normal", color: "text-muted" })];
  obj[1] = items2;
  const items3 = [callback2(closure_3, obj), ];
  if (null != fieldValue) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.imageContainer;
    obj2 = { source: null, style: null, resizeMode: "contain" };
    obj3 = { uri: null };
    obj3[0] = fieldValue.media.url;
    obj2[0] = obj3;
    obj2[1] = tmp.image;
    obj1[1] = tmp12(closure_2, obj2);
    let tmp12Result = tmp12(tmp11, obj1);
  } else {
    const obj4 = { style: null };
    obj4[0] = tmp.imageSkeleton;
    tmp12Result = tmp12(tmp2(12689).ImageSkeleton, obj4);
  }
  const obj5 = { children: null };
  items3[1] = tmp12Result;
  obj[1] = items3;
  items1[1] = callback2(closure_3, obj);
  obj5[0] = items1;
  return callback2(closure_3, obj5);
};