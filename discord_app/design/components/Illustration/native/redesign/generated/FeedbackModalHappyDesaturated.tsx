// discord_app/design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx
import shared from "../../../../../shared.tsx";
import _mod7671 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx",
);

export const getFeedbackModalHappyDesaturatedSource = function getFeedbackModalHappyDesaturatedSource(theme) {
  return _mod7671.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/11124__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/11125__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/11126__.js");
    },
  });
};
export const useFeedbackModalHappyDesaturatedSource = function useFeedbackModalHappyDesaturatedSource() {
  const obj = shared;
  return _mod7671.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/11124__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/11125__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/11126__.js");
    },
  });
};
export const FeedbackModalHappyDesaturated = function FeedbackModalHappyDesaturated(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7671.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/11124__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/11125__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/11126__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
