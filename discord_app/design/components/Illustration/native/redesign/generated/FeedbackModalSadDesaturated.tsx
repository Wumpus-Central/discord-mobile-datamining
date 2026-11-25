// discord_app/design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx
import shared from "../../../../../shared.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import _mod8524 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx",
);

export function getFeedbackModalSadDesaturatedSource(theme) {
  return _mod8524.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/12125__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/12126__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/12127__.js");
    },
  });
}
export function useFeedbackModalSadDesaturatedSource() {
  const obj = shared;
  return _mod8524.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/12125__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/12126__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/12127__.js");
    },
  });
}
export function FeedbackModalSadDesaturated(arg0) {
  const obj = shared;
  const illustrationSource = _mod8524.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/12125__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/12126__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/12127__.js");
    },
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("../../../../../../../_runtime/metro/12125__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/12126__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/12127__.js");
    },
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}
