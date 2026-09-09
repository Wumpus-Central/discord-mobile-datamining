// === Module 11668: FeedbackModalNeutralDesaturated ===

// Module 11668 (FeedbackModalNeutralDesaturated)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx");

export const getFeedbackModalNeutralDesaturatedSource = function getFeedbackModalNeutralDesaturatedSource(theme) {
  const obj = {
    dark() {
      return require("module_11669");
    },
    darker() {
      return require("module_11670");
    },
    light() {
      return require("module_11671");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalNeutralDesaturatedSource = function useFeedbackModalNeutralDesaturatedSource() {
  const obj = {
    dark() {
      return require("module_11669");
    },
    darker() {
      return require("module_11670");
    },
    light() {
      return require("module_11671");
    }
  };
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalNeutralDesaturated = function FeedbackModalNeutralDesaturated(arg0) {
  let obj = {
    dark() {
      return require("module_11669");
    },
    darker() {
      return require("module_11670");
    },
    light() {
      return require("module_11671");
    }
  };
  obj = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};