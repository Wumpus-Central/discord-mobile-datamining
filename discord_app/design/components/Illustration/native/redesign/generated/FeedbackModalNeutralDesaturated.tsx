// discord_app/design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx
import shared from "../../../../../shared.tsx";
import _mod7874 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx",
);

export const getFeedbackModalNeutralDesaturatedSource = function getFeedbackModalNeutralDesaturatedSource(theme) {
  return _mod7874.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/11338__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/11339__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/11340__.js");
    },
  });
};
export const useFeedbackModalNeutralDesaturatedSource = function useFeedbackModalNeutralDesaturatedSource() {
  const obj = shared;
  return _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/11338__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/11339__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/11340__.js");
    },
  });
};
export const FeedbackModalNeutralDesaturated = function FeedbackModalNeutralDesaturated(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/11338__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/11339__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/11340__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
