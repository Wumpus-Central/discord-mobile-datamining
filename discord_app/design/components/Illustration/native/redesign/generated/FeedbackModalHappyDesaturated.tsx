// === Module 11882: FeedbackModalHappyDesaturated ===

// Module 11882 (FeedbackModalHappyDesaturated)
import shared from "shared" /* 4573 */;
import _mod8463 from "module_8463" /* 8463 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx");

export const getFeedbackModalHappyDesaturatedSource = function getFeedbackModalHappyDesaturatedSource(theme) {
  return _mod8463.getIllustrationSource(theme, {
    dark() {
      return require("module_11883");
    },
    darker() {
      return require("module_11884");
    },
    light() {
      return require("module_11885");
    }
  });
};
export const useFeedbackModalHappyDesaturatedSource = function useFeedbackModalHappyDesaturatedSource() {
  const obj = shared;
  return _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11883");
    },
    darker() {
      return require("module_11884");
    },
    light() {
      return require("module_11885");
    }
  });
};
export const FeedbackModalHappyDesaturated = function FeedbackModalHappyDesaturated(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11883");
    },
    darker() {
      return require("module_11884");
    },
    light() {
      return require("module_11885");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};