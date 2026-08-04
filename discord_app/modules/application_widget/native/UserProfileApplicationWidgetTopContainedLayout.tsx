// discord_app/modules/application_widget/native/UserProfileApplicationWidgetTopContainedLayout.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let obj1;
const require = arg1;
({ Image: obj1, View: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { contentRow: null, text: null, imageContainer: null, image: null, imageSkeleton: null };
createCacheKey = { flexDirection: "row", gap: require("Themes").space.PX_12, alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, gap: require("Themes").space.PX_4 };
obj1 = { flex: 1, gap: require("Themes").space.PX_4 };
createCacheKey[2] = { width: 96, height: 96, marginTop: require("Themes").space.PX_12, marginBottom: require("Themes").space.PX_16, borderRadius: require("Themes").radii.md, overflow: "hidden", borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[3] = { width: "100%", height: "100%" };
let obj2 = { width: 96, height: 96, marginTop: require("Themes").space.PX_12, marginBottom: require("Themes").space.PX_16, borderRadius: require("Themes").radii.md, overflow: "hidden", borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[4] = { width: 96, height: 96, marginTop: require("Themes").space.PX_12, marginBottom: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { width: 96, height: 96, marginTop: require("Themes").space.PX_12, marginBottom: require("Themes").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetTopContainedLayout.tsx");

export default function UserProfileApplicationWidgetTopContainedLayout(header) {
  let numberFormat;
  let resolveFieldValue;
  let topConfig;
  ({ topConfig, resolveFieldValue, numberFormat } = header);
  const tmp = createCacheKey();
  let obj = require(12082) /* resolvedValuesFromUserApplicationIdentityProfile */;
  const textComponentValues = obj.resolveTextComponentValues(topConfig.components.title, resolveFieldValue, numberFormat, true);
  let obj1 = require(12082) /* resolvedValuesFromUserApplicationIdentityProfile */;
  const textComponentValues1 = obj1.resolveTextComponentValues(topConfig.components.subtitle_1, resolveFieldValue, numberFormat);
  let obj2 = require(12082) /* resolvedValuesFromUserApplicationIdentityProfile */;
  const textComponentValues2 = obj2.resolveTextComponentValues(topConfig.components.subtitle_2, resolveFieldValue, numberFormat);
  let obj3 = require(12082) /* resolvedValuesFromUserApplicationIdentityProfile */;
  const contained_image = topConfig.components.contained_image;
  let image;
  const textComponentValues3 = obj3.resolveTextComponentValues(topConfig.components.subtitle_3, resolveFieldValue, numberFormat);
  if (contained_image != null) {
    image = contained_image.fields.image;
  }
  const items = [require(12082) /* resolvedValuesFromUserApplicationIdentityProfile */.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  const items1 = [header.header, ];
  obj = { style: tmp.contentRow, children: null };
  obj = { style: tmp.text, children: null };
  const items2 = [callback(require(12169) /* formatDurationNarrow */.FieldText, { field: textComponentValues, variant: "text-lg/medium", color: "text-default" }), callback(require(12169) /* formatDurationNarrow */.FieldText, { field: textComponentValues1, variant: "text-sm/normal", color: "text-muted" }), callback(require(12169) /* formatDurationNarrow */.FieldText, { field: textComponentValues2, variant: "text-sm/normal", color: "text-muted" }), callback(require(12169) /* formatDurationNarrow */.FieldText, { field: textComponentValues3, variant: "text-sm/normal", color: "text-muted" })];
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
    tmp12Result = tmp12(tmp2(12170).ImageSkeleton, obj4);
  }
  const obj5 = { children: null };
  items3[1] = tmp12Result;
  obj[1] = items3;
  items1[1] = callback2(closure_3, obj);
  obj5[0] = items1;
  return callback2(closure_3, obj5);
};