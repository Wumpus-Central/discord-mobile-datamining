// discord_app/design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx
import shared from "../../../../../shared.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import _mod8798 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx",
);

export function getFeedbackModalNeutralDesaturatedSource(theme) {
  return _mod8798.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10150__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/10151__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10152__.js");
    },
  });
}
export function useFeedbackModalNeutralDesaturatedSource() {
  const obj = shared;
  return _mod8798.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10150__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/10151__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10152__.js");
    },
  });
}
export function FeedbackModalNeutralDesaturated(arg0) {
  const obj = shared;
  const illustrationSource = _mod8798.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10150__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/10151__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10152__.js");
    },
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("../../../../../../../_runtime/metro/10150__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/10151__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10152__.js");
    },
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}
