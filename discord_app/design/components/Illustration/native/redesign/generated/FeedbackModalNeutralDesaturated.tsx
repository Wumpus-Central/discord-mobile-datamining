// === Module 10296: FeedbackModalNeutralDesaturated ===

// Module 10296 (FeedbackModalNeutralDesaturated)
import shared from "shared" /* 5149 */;
import FastImageDefault from "FastImage" /* 5844 */;
import _mod8886 from "module_8886" /* 8886 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx");

export function getFeedbackModalNeutralDesaturatedSource(theme) {
  return _mod8886.getIllustrationSource(theme, {
    dark() {
      return require("module_10297");
    },
    darker() {
      return require("module_10298");
    },
    light() {
      return require("module_10299");
    }
  });
}
export function useFeedbackModalNeutralDesaturatedSource() {
  const obj = shared;
  return _mod8886.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10297");
    },
    darker() {
      return require("module_10298");
    },
    light() {
      return require("module_10299");
    }
  });
}
export function FeedbackModalNeutralDesaturated(arg0) {
  const obj = shared;
  const illustrationSource = _mod8886.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10297");
    },
    darker() {
      return require("module_10298");
    },
    light() {
      return require("module_10299");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_10297");
    },
    darker() {
      return require("module_10298");
    },
    light() {
      return require("module_10299");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}