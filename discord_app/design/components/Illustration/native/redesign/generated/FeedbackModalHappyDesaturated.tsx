// === Module 11673: FeedbackModalHappyDesaturated ===

// Module 11673 (FeedbackModalHappyDesaturated)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx");

export const getFeedbackModalHappyDesaturatedSource = function getFeedbackModalHappyDesaturatedSource(theme) {
  const obj = {
    dark() {
      return require("module_11674");
    },
    darker() {
      return require("module_11675");
    },
    light() {
      return require("module_11676");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalHappyDesaturatedSource = function useFeedbackModalHappyDesaturatedSource() {
  const obj = {
    dark() {
      return require("module_11674");
    },
    darker() {
      return require("module_11675");
    },
    light() {
      return require("module_11676");
    }
  };
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalHappyDesaturated = function FeedbackModalHappyDesaturated(arg0) {
  let obj = {
    dark() {
      return require("module_11674");
    },
    darker() {
      return require("module_11675");
    },
    light() {
      return require("module_11676");
    }
  };
  obj = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};