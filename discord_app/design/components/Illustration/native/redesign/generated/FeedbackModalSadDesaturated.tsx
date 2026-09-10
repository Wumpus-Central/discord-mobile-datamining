// === Module 11703: FeedbackModalSadDesaturated ===

// Module 11703 (FeedbackModalSadDesaturated)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx");

export const getFeedbackModalSadDesaturatedSource = function getFeedbackModalSadDesaturatedSource(theme) {
  const obj = {
    dark() {
      return require("module_11704");
    },
    darker() {
      return require("module_11705");
    },
    light() {
      return require("module_11706");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalSadDesaturatedSource = function useFeedbackModalSadDesaturatedSource() {
  const obj = {
    dark() {
      return require("module_11704");
    },
    darker() {
      return require("module_11705");
    },
    light() {
      return require("module_11706");
    }
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalSadDesaturated = function FeedbackModalSadDesaturated(arg0) {
  let obj = {
    dark() {
      return require("module_11704");
    },
    darker() {
      return require("module_11705");
    },
    light() {
      return require("module_11706");
    }
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};