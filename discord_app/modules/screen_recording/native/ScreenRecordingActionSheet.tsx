// === Module 15533: ScreenRecordingActionSheet ===

// Module 15533 (ScreenRecordingActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4819 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const useScreenRecordingStore = fn(15529).useScreenRecordingStore;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xl }, closeButton: null, buttonContainer: null };
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
obj2.closeButton = rect;
let obj3 = { justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xl };
obj2.buttonContainer = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/screen_recording/native/ScreenRecordingActionSheet.tsx");

export default function ScreenRecordingActionSheet() {
  const tmp = closure_7();
  const tmp2 = useScreenRecordingStore((isUploading) => isUploading.isUploading);
  const tmp3 = useScreenRecordingStore((isCompleted) => isCompleted.isCompleted);
  const tmp4 = useScreenRecordingStore((currentStep) => currentStep.currentStep);
  const obj = useScreenRecordingStore((currentSurveyConfig) => currentSurveyConfig.currentSurveyConfig);
  _require = useScreenRecordingStore((nextStep) => nextStep.nextStep);
  importDefault = useScreenRecordingStore((completeActionSheet) => completeActionSheet.completeActionSheet);
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
  const obj2 = { style: tmp.container, children: null };
  const items = [
    closure_5(require("Text/Text").Text, { variant: "heading-xl/bold", children: str }),
    closure_5(require("Text/Text").Text, { variant: "text-md/normal", children: str2 }),
    closure_5(require("components/Button/Button").Button, {
      disabled: tmp2,
      text: "Done",
      loading: tmp2,
      onPress() {
        closure_1();
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }
    })
  ];
  obj2.children = items;
  const obj4 = { style: tmp.container, children: null };
  const obj3 = {
    disabled: tmp2,
    text: "Done",
    loading: tmp2,
    onPress() {
      closure_1();
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  };
  const tmp11 = closure_6(View, obj2);
  const tmp9 = _require;
  const items1 = [
    closure_5(require("Pressables").PressableOpacity, {
      style: tmp.closeButton,
      onPress() {
        return closure_1(dependencyMap[8]).hideActionSheet();
      },
      accessibilityLabel: "close",
      children: closure_5(require("XSmallIcon").XSmallIcon, { size: "md", color: "text-default" })
    }),
    closure_5(require("Text/Text").Text, { variant: "heading-xl/bold", children: tmp5.title }),
  ,

  ];
  const obj7 = { variant: "text-md/normal", children: null };
  const obj5 = {
    style: tmp.closeButton,
    onPress() {
      return closure_1(dependencyMap[8]).hideActionSheet();
    },
    accessibilityLabel: "close",
    children: closure_5(require("XSmallIcon").XSmallIcon, { size: "md", color: "text-default" })
  };
  const obj6 = { variant: "heading-xl/bold", children: tmp5.title };
  obj7.children = MarkupUtilsDefault.parse(tmp5.instructions);
  items1[2] = closure_5(require("Text/Text").Text, obj7);
  const obj9 = { style: tmp.buttonContainer, children: null };
  let tmp12 = !flag;
  if (flag) {
    tmp12 = tmp2;
  }
  obj9.children = closure_5(require("components/Button/Button").Button, {
    disabled: tmp12,
    text: "Next",
    loading: tmp2,
    onPress() {
      closure_0();
    }
  });
  items1[3] = closure_5(View, obj9);
  obj4.children = items1;
  let children = closure_6(View, obj4);
  if (tmp3) {
    children = tmp11;
  }
  return closure_5(tmp9(6613).ActionSheet, { children });
};