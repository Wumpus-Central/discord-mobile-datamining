// === Module 10301: FeedbackModalHappyDesaturated ===

// Module 10301 (FeedbackModalHappyDesaturated)
import shared from "shared" /* 5149 */;
import FastImageDefault from "FastImage" /* 5844 */;
import _mod8886 from "module_8886" /* 8886 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx");

export function getFeedbackModalHappyDesaturatedSource(theme) {
  return _mod8886.getIllustrationSource(theme, {
    dark() {
      return require("module_10302");
    },
    darker() {
      return require("module_10303");
    },
    light() {
      return require("module_10304");
    }
  });
}
export function useFeedbackModalHappyDesaturatedSource() {
  const obj = shared;
  return _mod8886.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10302");
    },
    darker() {
      return require("module_10303");
    },
    light() {
      return require("module_10304");
    }
  });
}
export function FeedbackModalHappyDesaturated(arg0) {
  const obj = shared;
  const illustrationSource = _mod8886.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10302");
    },
    darker() {
      return require("module_10303");
    },
    light() {
      return require("module_10304");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_10302");
    },
    darker() {
      return require("module_10303");
    },
    light() {
      return require("module_10304");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}