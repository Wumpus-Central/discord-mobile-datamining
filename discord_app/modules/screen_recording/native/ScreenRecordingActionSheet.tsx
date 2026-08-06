// discord_app/modules/screen_recording/native/ScreenRecordingActionSheet.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { useScreenRecordingStore } from "useScreenRecordingStore";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Button } from "../../../design/components/Button/native/Button.native.tsx";
import { XSmallIcon } from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { PressableBase } from "../../../design/void/Pressables/native/Pressables.tsx";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, closeButton: null, buttonContainer: null };
createCacheKey = { justifyContent: "center", alignItems: "center", gap: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_8, borderRadius: require("Themes").radii.xl };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", top: require("Themes").space.PX_8, right: require("Themes").space.PX_8 };
let obj1 = { position: "absolute", top: require("Themes").space.PX_8, right: require("Themes").space.PX_8 };
createCacheKey[2] = { display: "flex", flexDirection: "row", gap: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { display: "flex", flexDirection: "row", gap: require("Themes").space.PX_8 };
const result = require("useScreenRecordingStore").fileFinishedImporting("modules/screen_recording/native/ScreenRecordingActionSheet.tsx");

export default function ScreenRecordingActionSheet() {
  const tmp = createCacheKey();
  const tmp2 = useScreenRecordingStore((isUploading) => isUploading.isUploading);
  const tmp3 = useScreenRecordingStore((isCompleted) => isCompleted.isCompleted);
  const tmp4 = useScreenRecordingStore((currentStep) => currentStep.currentStep);
  let obj = useScreenRecordingStore((currentSurveyConfig) => currentSurveyConfig.currentSurveyConfig);
  const _require = useScreenRecordingStore((nextStep) => nextStep.nextStep);
  const importDefault = useScreenRecordingStore((completeActionSheet) => completeActionSheet.completeActionSheet);
  let steps;
  if (obj != null) {
    steps = obj.steps;
  }
  if (steps == null) {
    steps = [];
  }
  let tmp5 = null;
  if (steps.length > tmp4) {
    tmp5 = steps[tmp4];
  }
  let flag;
  if (obj != null) {
    flag = obj.useIsStepCompleted(tmp4);
  }
  if (flag == null) {
    flag = false;
  }
  let str;
  if (obj != null) {
    str = obj.completedTitle;
  }
  if (str == null) {
    str = "Complete";
  }
  let str2;
  if (obj != null) {
    str2 = obj.completedInstructions;
  }
  if (str2 == null) {
    str2 = "Thanks for your feedback!";
  }
  if (null == tmp5) {
    if (null == tmp3) {
      return null;
    }
  }
  obj = { style: tmp.container, children: null };
  const items = [callback(_Text.Text, { variant: "heading-xl/bold", children: str }), callback(_Text.Text, { variant: "text-md/normal", children: str2 }), ];
  obj = {
    disabled: tmp2,
    text: "Done",
    loading: tmp2,
    onPress() {
      callback2();
      callback2(outer1_2[8]).hideActionSheet();
    }
  };
  items[2] = callback(_Button.Button, obj);
  obj[1] = items;
  const obj1 = { style: tmp.container, children: null };
  const obj2 = {
    style: tmp.closeButton,
    onPress() {
      return callback2(table[8]).hideActionSheet();
    },
    accessibilityLabel: "close",
    children: null
  };
  obj2[3] = callback(_XSmallIcon.XSmallIcon, { size: "md", color: "text-default" });
  const items1 = [callback(_PressableBase.PressableOpacity, obj2), callback(_Text.Text, { variant: "heading-xl/bold", children: tmp5.title }), , ];
  const obj4 = { variant: "text-md/normal", children: null };
  const obj3 = { variant: "heading-xl/bold", children: tmp5.title };
  const tmp11 = callback2(View, obj);
  const tmp6 = callback2;
  const tmp9 = _require;
  obj4[1] = require("../../markup/MarkupUtils.tsx") /* get defaultRules */.parse(tmp5.instructions);
  items1[2] = callback(_Text.Text, obj4);
  const obj5 = { style: tmp.buttonContainer, children: null };
  let tmp12 = !flag;
  if (flag) {
    tmp12 = tmp2;
  }
  obj5[1] = callback(_Button.Button, {
    disabled: tmp12,
    text: "Next",
    loading: tmp2,
    onPress() {
      callback();
    }
  });
  items1[3] = callback(View, obj5);
  obj1[1] = items1;
  let children = tmp6(tmp7, obj1);
  if (tmp3) {
    children = tmp11;
  }
  return callback(tmp9(5685).ActionSheet, { children });
};