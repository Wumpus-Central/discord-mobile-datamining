// discord_app/design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx
import shared from "../../../../../shared.tsx";
import _mod8349 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx",
);

export const getFeedbackModalNeutralDesaturatedSource = function getFeedbackModalNeutralDesaturatedSource(theme) {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/11767__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/11768__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/11769__.js");
    },
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalNeutralDesaturatedSource = function useFeedbackModalNeutralDesaturatedSource() {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/11767__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/11768__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/11769__.js");
    },
  };
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalNeutralDesaturated = function FeedbackModalNeutralDesaturated(arg0) {
  let obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/11767__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/11768__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/11769__.js");
    },
  };
  obj = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
