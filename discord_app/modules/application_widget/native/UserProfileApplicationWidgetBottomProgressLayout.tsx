// === Module 12694: UserProfileApplicationWidgetBottomProgressLayout ===

// Module 12694 (UserProfileApplicationWidgetBottomProgressLayout)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import resolvedValuesFromUserApplicationIdentityProfile from "resolvedValuesFromUserApplicationIdentityProfile" /* 12601 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
noopAll;
({ Image: obj1, View: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { root: null, image: null, content: null, progressContainer: null, progress: null, textContent: null, textLeft: null, progressText: null };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 48, height: 48, borderRadius: ThemesDefault.radii.sm, overflow: "hidden", borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
obj1 = { width: 48, height: 48, borderRadius: ThemesDefault.radii.sm, overflow: "hidden", borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[2] = { flex: 1, gap: ThemesDefault.space.PX_4, minWidth: 0 };
let obj2 = { flex: 1, gap: ThemesDefault.space.PX_4, minWidth: 0 };
createCacheKey[3] = { width: "100%", height: 6, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj3 = { width: "100%", height: 6, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[4] = { height: 6, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.ICON_STRONG };
let obj4 = { height: 6, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.ICON_STRONG };
createCacheKey[5] = { flexDirection: "row", justifyContent: "space-between", gap: ThemesDefault.space.PX_4 };
createCacheKey[6] = { flex: 1, minWidth: 0 };
createCacheKey[7] = { flexShrink: 0 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj5 = { flexDirection: "row", justifyContent: "space-between", gap: ThemesDefault.space.PX_4 };
const result = require("set").fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetBottomProgressLayout.tsx");

export default function UserProfileApplicationWidgetBottomProgressLayout(arg0) {
  ({ bottomConfig, resolveFieldValue } = arg0);
  const tmp = callback2();
  const objective = bottomConfig.components.objective;
  let image;
  if (objective != null) {
    image = objective.fields.image;
  }
  const items = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  let obj = resolvedValuesFromUserApplicationIdentityProfile;
  const singleStringOrSkeleton = obj.resolveSingleStringOrSkeleton(objective, "name", resolveFieldValue);
  obj1 = resolvedValuesFromUserApplicationIdentityProfile;
  const singleStringOrSkeleton1 = obj1.resolveSingleStringOrSkeleton(objective, "description", resolveFieldValue);
  const progress = bottomConfig.components.progress;
  let current;
  if (progress != null) {
    current = progress.fields.current;
  }
  const items1 = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.NUMBER];
  let iter = resolveFieldValue(current, items1);
  let max;
  if (progress != null) {
    max = progress.fields.max;
  }
  const items2 = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.NUMBER];
  let iter2 = resolveFieldValue(max, items2);
  let tmp3Result = tmp3(12601);
  obj = { style: tmp.root, children: null };
  const progressPercentage = tmp3Result.resolveProgressPercentage(iter, iter2);
  if (null != fieldValue) {
    obj = { source: null, style: null, resizeMode: "contain" };
    obj1 = { uri: null };
    obj1[0] = fieldValue.media.url;
    obj[0] = obj1;
    obj[1] = tmp.image;
    let tmp14 = callback(closure_2, obj);
    let tmp15 = callback;
  } else {
    const obj2 = { style: null };
    obj2[0] = tmp.image;
    tmp14 = callback(tmp3(12689).ImageSkeleton, obj2);
    tmp15 = callback;
  }
  const items3 = [tmp14, ];
  const obj3 = { style: tmp.content, children: null };
  const obj4 = { style: tmp.progressContainer, accessibilityRole: "progressbar", accessibilityValue: null, children: null };
  let num;
  if (iter2 != null) {
    num = iter2.value;
  }
  if (num == null) {
    num = 1;
  }
  const obj5 = { min: 0, max: num, now: null };
  let num2;
  if (iter != null) {
    num2 = iter.value;
  }
  if (num2 == null) {
    num2 = 0;
  }
  obj5[2] = num2;
  obj4[2] = obj5;
  const obj6 = { style: null };
  const items4 = [tmp.progress, ];
  let str = globalThis;
  items4[1] = { width: "" + progressPercentage + "%" };
  obj6[0] = items4;
  obj4[3] = tmp15(closure_3, obj6);
  const items5 = [tmp15(closure_3, obj4), ];
  const obj8 = { style: tmp.textContent, children: null };
  const obj9 = { style: tmp.textLeft, children: null };
  if ("value" === singleStringOrSkeleton.status) {
    const obj10 = { variant: "heading-sm/medium", lineClamp: 2, children: null };
    obj10[2] = singleStringOrSkeleton.text;
    let tmp15Result = tmp15(tmp3(4442).Text, obj10);
  } else {
    tmp15Result = tmp15(tmp3(12689).TextSkeleton, { variant: "heading-sm/medium" });
  }
  const items6 = [tmp15Result, ];
  if ("value" === singleStringOrSkeleton1.status) {
    const obj11 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 2, children: null };
    obj11[3] = singleStringOrSkeleton1.text;
    tmp15Result = tmp15(tmp3(4442).Text, obj11);
  } else {
    tmp15Result = tmp15(tmp3(12689).TextSkeleton, { variant: "text-xs/medium" });
  }
  items6[1] = tmp15Result;
  obj9[1] = items6;
  const items7 = [closure_5(closure_3, obj9), ];
  if (null != iter) {
    const obj12 = { variant: "text-sm/medium", lineClamp: 1, style: null, children: null };
    obj12[2] = tmp.progressText;
    if (null != iter2) {
      iter = iter2.value;
      iter2 = str.HermesInternal.concat;
      str = "/";
      let iter2Result = iter2(iter.value, "/", iter);
    } else {
      tmp3Result = tmp3(12601);
      const _HermesInternal = HermesInternal;
      iter2Result = "" + tmp3Result.decimalToClampedPercentage(iter.value) + "%";
    }
    obj12[3] = iter2Result;
    tmp15(tmp3(4442).Text, obj12);
  } else {
    items7[1] = tmp15(tmp3(12689).TextSkeleton, { variant: "text-sm/medium", widthChars: 4 });
    obj8[1] = items7;
    items5[1] = tmp11(tmp12, obj8);
    obj3[1] = items5;
    items3[1] = tmp11(tmp12, obj3);
    obj[1] = items3;
    return tmp11(tmp12, obj);
  }
};