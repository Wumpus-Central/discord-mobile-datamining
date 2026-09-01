// discord_app/modules/screen_recording/native/ScreenRecordingActionSheet.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import get_defaultRulesDefault from "../../markup/MarkupUtils.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { useScreenRecordingStore } from "ScreenRecordingStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, closeButton: null, buttonContainer: null };
createCacheKey = {
  justifyContent: "center",
  alignItems: "center",
  gap: ThemesDefault.space.PX_16,
  paddingVertical: ThemesDefault.space.PX_16,
  paddingHorizontal: ThemesDefault.space.PX_8,
  borderRadius: ThemesDefault.radii.xl,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", top: ThemesDefault.space.PX_8, right: ThemesDefault.space.PX_8 };
let obj1 = { position: "absolute", top: ThemesDefault.space.PX_8, right: ThemesDefault.space.PX_8 };
createCacheKey[2] = { display: "flex", flexDirection: "row", gap: ThemesDefault.space.PX_8 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj2 = { display: "flex", flexDirection: "row", gap: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/screen_recording/native/ScreenRecordingActionSheet.tsx");

export default function ScreenRecordingActionSheet() {
  const tmp = callback3();
  const tmp2 = useScreenRecordingStore((isUploading) => isUploading.isUploading);
  const tmp3 = useScreenRecordingStore((isCompleted) => isCompleted.isCompleted);
  const tmp4 = useScreenRecordingStore((currentStep) => currentStep.currentStep);
  let obj = useScreenRecordingStore((currentSurveyConfig) => currentSurveyConfig.currentSurveyConfig);
  const _require = useScreenRecordingStore((nextStep) => nextStep.nextStep);
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
  obj = { style: tmp.container, children: null };
  const items = [
    callback(require("../../../design/components/Text/native/Text.tsx").Text, {
      variant: "heading-xl/bold",
      children: str,
    }),
    callback(require("../../../design/components/Text/native/Text.tsx").Text, {
      variant: "text-md/normal",
      children: str2,
    }),
  ];
  obj = {
    disabled: tmp2,
    text: "Done",
    loading: tmp2,
    onPress() {
      callback2();
      callback2(closure_1_2[8]).hideActionSheet();
    },
  };
  items[2] = callback(require("../../../design/components/Button/native/Button.native.tsx").Button, obj);
  obj[1] = items;
  obj1 = { style: tmp.container, children: null };
  const tmp11 = callback2(View, obj);
  const tmp6 = callback2;
  const tmp9 = _require;
  const items1 = [
    callback(require("../../../design/void/Pressables/native/Pressables.tsx").PressableOpacity, {
      style: tmp.closeButton,
      onPress() {
        return callback2(table[8]).hideActionSheet();
      },
      accessibilityLabel: "close",
      children: callback(
        require("../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx").XSmallIcon,
        { size: "md", color: "text-default" },
      ),
    }),
    callback(require("../../../design/components/Text/native/Text.tsx").Text, {
      variant: "heading-xl/bold",
      children: tmp5.title,
    }),
    ,
  ];
  const obj4 = { variant: "text-md/normal", children: null };
  const obj2 = {
    style: tmp.closeButton,
    onPress() {
      return callback2(table[8]).hideActionSheet();
    },
    accessibilityLabel: "close",
    children: callback(require("../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx").XSmallIcon, {
      size: "md",
      color: "text-default",
    }),
  };
  const obj3 = { variant: "heading-xl/bold", children: tmp5.title };
  obj4[1] = get_defaultRulesDefault.parse(tmp5.instructions);
  items1[2] = callback(require("../../../design/components/Text/native/Text.tsx").Text, obj4);
  const obj5 = { style: tmp.buttonContainer, children: null };
  let tmp12 = !flag;
  if (flag) {
    tmp12 = tmp2;
  }
  obj5[1] = callback(require("../../../design/components/Button/native/Button.native.tsx").Button, {
    disabled: tmp12,
    text: "Next",
    loading: tmp2,
    onPress() {
      callback();
    },
  });
  items1[3] = callback(View, obj5);
  obj1[1] = items1;
  let children = tmp6(tmp7, obj1);
  if (tmp3) {
    children = tmp11;
  }
  return callback(tmp9(5989).ActionSheet, { children });
}
