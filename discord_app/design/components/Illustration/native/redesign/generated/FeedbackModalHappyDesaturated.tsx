// === Module 11792: FeedbackModalHappyDesaturated ===

// Module 11792 (FeedbackModalHappyDesaturated)
import shared from "shared" /* 4491 */;
import _mod8380 from "module_8380" /* 8380 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx");

export const getFeedbackModalHappyDesaturatedSource = function getFeedbackModalHappyDesaturatedSource(theme) {
  return _mod8380.getIllustrationSource(theme, {
    dark() {
      return require("module_11793");
    },
    darker() {
      return require("module_11794");
    },
    light() {
      return require("module_11795");
    }
  });
};
export const useFeedbackModalHappyDesaturatedSource = function useFeedbackModalHappyDesaturatedSource() {
  const obj = shared;
  return _mod8380.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11793");
    },
    darker() {
      return require("module_11794");
    },
    light() {
      return require("module_11795");
    }
  });
};
export const FeedbackModalHappyDesaturated = function FeedbackModalHappyDesaturated(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8380.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11793");
    },
    darker() {
      return require("module_11794");
    },
    light() {
      return require("module_11795");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};