// === Module 12182: FeedbackModalSadDesaturated ===

// Module 12182 (FeedbackModalSadDesaturated)
import shared from "shared" /* 5050 */;
import FastImageDefault from "FastImage" /* 5730 */;
import _mod8567 from "module_8567" /* 8567 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx");

export function getFeedbackModalSadDesaturatedSource(theme) {
  return _mod8567.getIllustrationSource(theme, {
    dark() {
      return require("module_12183");
    },
    darker() {
      return require("module_12184");
    },
    light() {
      return require("module_12185");
    }
  });
}
export function useFeedbackModalSadDesaturatedSource() {
  const obj = shared;
  return _mod8567.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12183");
    },
    darker() {
      return require("module_12184");
    },
    light() {
      return require("module_12185");
    }
  });
}
export function FeedbackModalSadDesaturated(arg0) {
  const obj = shared;
  const illustrationSource = _mod8567.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12183");
    },
    darker() {
      return require("module_12184");
    },
    light() {
      return require("module_12185");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_12183");
    },
    darker() {
      return require("module_12184");
    },
    light() {
      return require("module_12185");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}