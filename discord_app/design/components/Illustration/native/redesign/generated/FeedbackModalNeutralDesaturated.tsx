// === Module 11132: FeedbackModalNeutralDesaturated ===

// Module 11132 (FeedbackModalNeutralDesaturated)
import shared from "shared" /* 4685 */;
import _mod7679 from "module_7679" /* 7679 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx");

export const getFeedbackModalNeutralDesaturatedSource = function getFeedbackModalNeutralDesaturatedSource(theme) {
  return _mod7679.getIllustrationSource(theme, {
    dark() {
      return require("module_11133");
    },
    darker() {
      return require("module_11134");
    },
    light() {
      return require("module_11135");
    }
  });
};
export const useFeedbackModalNeutralDesaturatedSource = function useFeedbackModalNeutralDesaturatedSource() {
  const obj = shared;
  return _mod7679.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11133");
    },
    darker() {
      return require("module_11134");
    },
    light() {
      return require("module_11135");
    }
  });
};
export const FeedbackModalNeutralDesaturated = function FeedbackModalNeutralDesaturated(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7679.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11133");
    },
    darker() {
      return require("module_11134");
    },
    light() {
      return require("module_11135");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};