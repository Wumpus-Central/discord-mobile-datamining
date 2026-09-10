// === Module 11713: FeedbackModalHappyDesaturated ===

// Module 11713 (FeedbackModalHappyDesaturated)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx");

export const getFeedbackModalHappyDesaturatedSource = function getFeedbackModalHappyDesaturatedSource(theme) {
  const obj = {
    dark() {
      return require("module_11714");
    },
    darker() {
      return require("module_11715");
    },
    light() {
      return require("module_11716");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalHappyDesaturatedSource = function useFeedbackModalHappyDesaturatedSource() {
  const obj = {
    dark() {
      return require("module_11714");
    },
    darker() {
      return require("module_11715");
    },
    light() {
      return require("module_11716");
    }
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalHappyDesaturated = function FeedbackModalHappyDesaturated(arg0) {
  let obj = {
    dark() {
      return require("module_11714");
    },
    darker() {
      return require("module_11715");
    },
    light() {
      return require("module_11716");
    }
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};