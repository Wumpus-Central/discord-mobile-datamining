// === Module 11642: FeedbackModalHappyDesaturated ===

// Module 11642 (FeedbackModalHappyDesaturated)
import shared from "shared" /* 4411 */;
import _mod8233 from "module_8233" /* 8233 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx");

export const getFeedbackModalHappyDesaturatedSource = function getFeedbackModalHappyDesaturatedSource(theme) {
  const obj = {
    dark() {
      return require("module_11643");
    },
    darker() {
      return require("module_11644");
    },
    light() {
      return require("module_11645");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalHappyDesaturatedSource = function useFeedbackModalHappyDesaturatedSource() {
  const obj = {
    dark() {
      return require("module_11643");
    },
    darker() {
      return require("module_11644");
    },
    light() {
      return require("module_11645");
    }
  };
  return _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalHappyDesaturated = function FeedbackModalHappyDesaturated(arg0) {
  let obj = {
    dark() {
      return require("module_11643");
    },
    darker() {
      return require("module_11644");
    },
    light() {
      return require("module_11645");
    }
  };
  obj = {};
  const illustrationSource = _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};