// === Module 11766: FeedbackModalSadDesaturated ===

// Module 11766 (FeedbackModalSadDesaturated)
import shared from "shared" /* 4491 */;
import _mod8352 from "module_8352" /* 8352 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx");

export const getFeedbackModalSadDesaturatedSource = function getFeedbackModalSadDesaturatedSource(theme) {
  return _mod8352.getIllustrationSource(theme, {
    dark() {
      return require("module_11767");
    },
    darker() {
      return require("module_11768");
    },
    light() {
      return require("module_11769");
    }
  });
};
export const useFeedbackModalSadDesaturatedSource = function useFeedbackModalSadDesaturatedSource() {
  const obj = shared;
  return _mod8352.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11767");
    },
    darker() {
      return require("module_11768");
    },
    light() {
      return require("module_11769");
    }
  });
};
export const FeedbackModalSadDesaturated = function FeedbackModalSadDesaturated(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8352.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11767");
    },
    darker() {
      return require("module_11768");
    },
    light() {
      return require("module_11769");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};