// discord_app/design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx
import shared from "../../../../../shared.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import _mod8425 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx",
);

export function getFeedbackModalHappyDesaturatedSource(theme) {
  return _mod8425.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/12036__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/12037__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/12038__.js");
    },
  });
}
export function useFeedbackModalHappyDesaturatedSource() {
  const obj = shared;
  return _mod8425.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/12036__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/12037__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/12038__.js");
    },
  });
}
export function FeedbackModalHappyDesaturated(arg0) {
  const obj = shared;
  const illustrationSource = _mod8425.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/12036__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/12037__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/12038__.js");
    },
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("../../../../../../../_runtime/metro/12036__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/12037__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/12038__.js");
    },
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}
