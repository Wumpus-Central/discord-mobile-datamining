// discord_app/design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx
import shared from "../../../../../shared.tsx";
import _mod8502 from "../../index.tsx";
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
  return _mod8502.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/11889__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/11890__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/11891__.js");
    },
  });
};
export const useFeedbackModalNeutralDesaturatedSource = function useFeedbackModalNeutralDesaturatedSource() {
  const obj = shared;
  return _mod8502.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/11889__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/11890__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/11891__.js");
    },
  });
};
export const FeedbackModalNeutralDesaturated = function FeedbackModalNeutralDesaturated(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8502.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/11889__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/11890__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/11891__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
