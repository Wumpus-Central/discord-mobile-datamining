// === Module 11663: FeedbackModalSadDesaturated ===

// Module 11663 (FeedbackModalSadDesaturated)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx");

export const getFeedbackModalSadDesaturatedSource = function getFeedbackModalSadDesaturatedSource(theme) {
  const obj = {
    dark() {
      return require("module_11664");
    },
    darker() {
      return require("module_11665");
    },
    light() {
      return require("module_11666");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalSadDesaturatedSource = function useFeedbackModalSadDesaturatedSource() {
  const obj = {
    dark() {
      return require("module_11664");
    },
    darker() {
      return require("module_11665");
    },
    light() {
      return require("module_11666");
    }
  };
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalSadDesaturated = function FeedbackModalSadDesaturated(arg0) {
  let obj = {
    dark() {
      return require("module_11664");
    },
    darker() {
      return require("module_11665");
    },
    light() {
      return require("module_11666");
    }
  };
  obj = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};