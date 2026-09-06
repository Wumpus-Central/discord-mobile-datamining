// === Module 11632: FeedbackModalSadDesaturated ===

// Module 11632 (FeedbackModalSadDesaturated)
import shared from "shared" /* 4411 */;
import _mod8233 from "module_8233" /* 8233 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx");

export const getFeedbackModalSadDesaturatedSource = function getFeedbackModalSadDesaturatedSource(theme) {
  const obj = {
    dark() {
      return require("module_11633");
    },
    darker() {
      return require("module_11634");
    },
    light() {
      return require("module_11635");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalSadDesaturatedSource = function useFeedbackModalSadDesaturatedSource() {
  const obj = {
    dark() {
      return require("module_11633");
    },
    darker() {
      return require("module_11634");
    },
    light() {
      return require("module_11635");
    }
  };
  return _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalSadDesaturated = function FeedbackModalSadDesaturated(arg0) {
  let obj = {
    dark() {
      return require("module_11633");
    },
    darker() {
      return require("module_11634");
    },
    light() {
      return require("module_11635");
    }
  };
  obj = {};
  const illustrationSource = _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};