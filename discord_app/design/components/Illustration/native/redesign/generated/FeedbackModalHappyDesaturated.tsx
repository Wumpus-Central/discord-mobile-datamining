// === Module 10449: FeedbackModalHappyDesaturated ===

// Module 10449 (FeedbackModalHappyDesaturated)
import shared from "shared" /* 4801 */;
import FastImageDefault from "FastImage" /* 5481 */;
import _mod7666 from "module_7666" /* 7666 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx");

export function getFeedbackModalHappyDesaturatedSource(theme) {
  return _mod7666.getIllustrationSource(theme, {
    dark() {
      return require("module_10450");
    },
    darker() {
      return require("module_10451");
    },
    light() {
      return require("module_10452");
    }
  });
}
export function useFeedbackModalHappyDesaturatedSource() {
  const obj = shared;
  return _mod7666.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10450");
    },
    darker() {
      return require("module_10451");
    },
    light() {
      return require("module_10452");
    }
  });
}
export function FeedbackModalHappyDesaturated(arg0) {
  const obj = shared;
  const illustrationSource = _mod7666.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10450");
    },
    darker() {
      return require("module_10451");
    },
    light() {
      return require("module_10452");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_10450");
    },
    darker() {
      return require("module_10451");
    },
    light() {
      return require("module_10452");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}