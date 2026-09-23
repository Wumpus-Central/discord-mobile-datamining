// === Module 9373: UserProfileApplicationWidgetBottomProgressLayout ===

// Module 9373 (UserProfileApplicationWidgetBottomProgressLayout)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4823 */;
import resolvedValuesFromUserApplicationIdentityProfile from "resolvedValuesFromUserApplicationIdentityProfile" /* 9280 */;
import UserProfileApplicationWidgetSkeletons from "UserProfileApplicationWidgetSkeletons" /* 9368 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4827);
let obj2 = { root: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 }, image: null, content: null, progressContainer: null, progress: null, textContent: null, textLeft: null, progressText: null };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.image = size;
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.content = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
const size1 = { width: "100%", height: 6, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.progressContainer = size1;
let obj4 = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
obj2.progress = { height: 6, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.ICON_STRONG };
let obj5 = { height: 6, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.ICON_STRONG };
obj2.textContent = { flexDirection: "row", justifyContent: "space-between", gap: nativeDefault.space.PX_4 };
obj2.textLeft = { flex: 1, minWidth: 0 };
obj2.progressText = { flexShrink: 0 };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetBottomProgressLayout.tsx");

export default function UserProfileApplicationWidgetBottomProgressLayout(arg0) {
  ({ bottomConfig, resolveFieldValue } = arg0);
  const tmp = closure_6();
  const objective = bottomConfig.components.objective;
  let image;
  if (objective != null) {
    image = objective.fields.image;
  }
  const items = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  const singleStringOrSkeleton = resolvedValuesFromUserApplicationIdentityProfile.resolveSingleStringOrSkeleton(objective, "name", resolveFieldValue);
  const singleStringOrSkeleton1 = resolvedValuesFromUserApplicationIdentityProfile.resolveSingleStringOrSkeleton(objective, "description", resolveFieldValue);
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
  const obj3 = { style: tmp.root, children: null };
  const progressPercentage = resolvedValuesFromUserApplicationIdentityProfile.resolveProgressPercentage(iter, iter2);
  if (null != fieldValue) {
    const obj4 = { source: null, style: null, resizeMode: "contain" };
    const obj5 = { uri: fieldValue.media.url };
    obj4.source = obj5;
    obj4.style = tmp.image;
    let tmp14 = React4(React2, obj4);
    let tmp15 = React4;
  } else {
    const obj6 = { style: tmp.image };
    tmp14 = React4(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj6);
    tmp15 = React4;
  }
  const items3 = [tmp14, ];
  const obj7 = { style: tmp.content, children: null };
  const obj8 = { style: tmp.progressContainer, accessibilityRole: "progressbar", accessibilityValue: null, children: null };
  let num;
  if (iter2 != null) {
    num = iter2.value;
  }
  if (num == null) {
    num = 1;
  }
  const range = { min: 0, max: num, now: null };
  let num2;
  if (iter != null) {
    num2 = iter.value;
  }
  if (num2 == null) {
    num2 = 0;
  }
  range.now = num2;
  obj8.accessibilityValue = range;
  const obj9 = { style: null };
  const items4 = [tmp.progress, ];
  const tmp3Result = resolvedValuesFromUserApplicationIdentityProfile;
  let str = globalThis;
  items4[1] = { width: "" + progressPercentage + "%" };
  obj9.style = items4;
  obj8.children = tmp15(React3, obj9);
  const items5 = [tmp15(React3, obj8), ];
  const obj11 = { style: tmp.textContent, children: null };
  const obj12 = { style: tmp.textLeft, children: null };
  if ("value" === singleStringOrSkeleton.status) {
    const obj13 = { variant: "heading-sm/medium", lineClamp: 2, children: singleStringOrSkeleton.text };
    let tmp15Result = tmp15(Text_Text.Text, obj13);
  } else {
    tmp15Result = tmp15(UserProfileApplicationWidgetSkeletons.TextSkeleton, { variant: "heading-sm/medium" });
  }
  const items6 = [tmp15Result, ];
  if ("value" === singleStringOrSkeleton1.status) {
    const obj14 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 2, children: singleStringOrSkeleton1.text };
    let tmp15Result3 = tmp15(Text_Text.Text, obj14);
  } else {
    tmp15Result3 = tmp15(UserProfileApplicationWidgetSkeletons.TextSkeleton, { variant: "text-xs/medium" });
  }
  items6[1] = tmp15Result3;
  obj12.children = items6;
  const items7 = [hasOwnProperty(React3, obj12), ];
  if (null != iter) {
    const obj15 = { variant: "text-sm/medium", lineClamp: 1, style: tmp.progressText, children: null };
    if (null != iter2) {
      iter = iter2.value;
      iter2 = str.HermesInternal.concat;
      str = "/";
      let iter2Result = iter2(iter.value, "/", iter);
    } else {
      const _HermesInternal = HermesInternal;
      iter2Result = "" + resolvedValuesFromUserApplicationIdentityProfile.decimalToClampedPercentage(iter.value) + "%";
      const tmp3Result2 = resolvedValuesFromUserApplicationIdentityProfile;
    }
    obj15.children = iter2Result;
    tmp15(Text_Text.Text, obj15);
  } else {
    items7[1] = tmp15(UserProfileApplicationWidgetSkeletons.TextSkeleton, { variant: "text-sm/medium", widthChars: 4 });
    obj11.children = items7;
    items5[1] = hasOwnProperty(React3, obj11);
    obj7.children = items5;
    items3[1] = hasOwnProperty(React3, obj7);
    obj3.children = items3;
    return hasOwnProperty(React3, obj3);
  }
  const obj10 = { width: "" + progressPercentage + "%" };
};