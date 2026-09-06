// discord_app/modules/application_widget/native/UserProfileApplicationWidgetBottomProgressLayout.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import resolvedValuesFromUserApplicationIdentityProfile from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";
import UserProfileApplicationWidgetSkeletons from "../../user_profile/native/UserProfileApplicationWidgetSkeletons.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = {
  root: null,
  image: null,
  content: null,
  progressContainer: null,
  progress: null,
  textContent: null,
  textLeft: null,
  progressText: null,
};
createStyles = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
createStyles.root = createStyles;
let size = {
  width: 48,
  height: 48,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
createStyles.image = size;
createStyles.content = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
const size1 = {
  width: "100%",
  height: 6,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
createStyles.progressContainer = size1;
let obj1 = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
createStyles.progress = {
  height: 6,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.ICON_STRONG,
};
let obj2 = { height: 6, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.ICON_STRONG };
createStyles.textContent = { flexDirection: "row", justifyContent: "space-between", gap: nativeDefault.space.PX_4 };
createStyles.textLeft = { flex: 1, minWidth: 0 };
createStyles.progressText = { flexShrink: 0 };
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/application_widget/native/UserProfileApplicationWidgetBottomProgressLayout.tsx",
);

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
  let obj = resolvedValuesFromUserApplicationIdentityProfile;
  const singleStringOrSkeleton = obj.resolveSingleStringOrSkeleton(objective, "name", resolveFieldValue);
  let obj1 = resolvedValuesFromUserApplicationIdentityProfile;
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
  let tmp3Result = resolvedValuesFromUserApplicationIdentityProfile;
  obj = { style: tmp.root, children: null };
  const progressPercentage = tmp3Result.resolveProgressPercentage(iter, iter2);
  if (null != fieldValue) {
    obj = { source: null, style: null, resizeMode: "contain" };
    obj1 = { uri: fieldValue.media.url };
    obj.source = obj1;
    obj.style = tmp.image;
    let tmp14 = React4(React2, obj);
    let tmp15 = React4;
  } else {
    const obj2 = { style: tmp.image };
    tmp14 = React4(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj2);
    tmp15 = React4;
  }
  const items3 = [tmp14];
  const obj3 = { style: tmp.content, children: null };
  const obj4 = {
    style: tmp.progressContainer,
    accessibilityRole: "progressbar",
    accessibilityValue: null,
    children: null,
  };
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
  obj4.accessibilityValue = range;
  const obj5 = { style: null };
  const items4 = [tmp.progress];
  let str = globalThis;
  items4[1] = { width: "" + progressPercentage + "%" };
  obj5.style = items4;
  obj4.children = tmp15(React3, obj5);
  const items5 = [tmp15(React3, obj4)];
  const obj7 = { style: tmp.textContent, children: null };
  const obj8 = { style: tmp.textLeft, children: null };
  if ("value" === singleStringOrSkeleton.status) {
    const obj9 = { variant: "heading-sm/medium", lineClamp: 2, children: singleStringOrSkeleton.text };
    let tmp15Result = tmp15(Text_Text.Text, obj9);
  } else {
    tmp15Result = tmp15(UserProfileApplicationWidgetSkeletons.TextSkeleton, { variant: "heading-sm/medium" });
  }
  const items6 = [tmp15Result];
  if ("value" === singleStringOrSkeleton1.status) {
    const obj10 = {
      variant: "text-xs/medium",
      color: "text-subtle",
      lineClamp: 2,
      children: singleStringOrSkeleton1.text,
    };
    tmp15Result = tmp15(Text_Text.Text, obj10);
  } else {
    tmp15Result = tmp15(UserProfileApplicationWidgetSkeletons.TextSkeleton, { variant: "text-xs/medium" });
  }
  items6[1] = tmp15Result;
  obj8.children = items6;
  const items7 = [hasOwnProperty(React3, obj8)];
  if (null != iter) {
    const obj11 = { variant: "text-sm/medium", lineClamp: 1, style: tmp.progressText, children: null };
    if (null != iter2) {
      iter = iter2.value;
      iter2 = str.HermesInternal.concat;
      str = "/";
      let iter2Result = iter2(iter.value, "/", iter);
    } else {
      tmp3Result = resolvedValuesFromUserApplicationIdentityProfile;
      const _HermesInternal = HermesInternal;
      iter2Result = "" + tmp3Result.decimalToClampedPercentage(iter.value) + "%";
    }
    obj11.children = iter2Result;
    tmp15(Text_Text.Text, obj11);
  } else {
    items7[1] = tmp15(UserProfileApplicationWidgetSkeletons.TextSkeleton, { variant: "text-sm/medium", widthChars: 4 });
    obj7.children = items7;
    items5[1] = hasOwnProperty(React3, obj7);
    obj3.children = items5;
    items3[1] = hasOwnProperty(React3, obj3);
    obj.children = items3;
    return hasOwnProperty(React3, obj);
  }
  const obj6 = { width: "" + progressPercentage + "%" };
}
