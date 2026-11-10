// discord_app/design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx
import shared from "../../../../../shared.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import _mod8886 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx",
);

export function getFeedbackModalSadDesaturatedSource(theme) {
  return _mod8886.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10292__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/10293__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10294__.js");
    },
  });
}
export function useFeedbackModalSadDesaturatedSource() {
  const obj = shared;
  return _mod8886.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10292__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/10293__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10294__.js");
    },
  });
}
export function FeedbackModalSadDesaturated(arg0) {
  const obj = shared;
  const illustrationSource = _mod8886.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/10292__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/10293__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10294__.js");
    },
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("../../../../../../../_runtime/metro/10292__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/10293__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10294__.js");
    },
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}
