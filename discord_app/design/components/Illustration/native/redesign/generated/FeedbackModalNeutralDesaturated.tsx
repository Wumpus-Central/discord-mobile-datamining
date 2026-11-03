// === Module 10299: FeedbackModalNeutralDesaturated ===

// Module 10299 (FeedbackModalNeutralDesaturated)
import shared from "shared" /* 5148 */;
import FastImageDefault from "FastImage" /* 5837 */;
import _mod8930 from "module_8930" /* 8930 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx");

export function getFeedbackModalNeutralDesaturatedSource(theme) {
  return _mod8930.getIllustrationSource(theme, {
    dark() {
      return require("module_10300");
    },
    darker() {
      return require("module_10301");
    },
    light() {
      return require("module_10302");
    }
  });
}
export function useFeedbackModalNeutralDesaturatedSource() {
  const obj = shared;
  return _mod8930.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10300");
    },
    darker() {
      return require("module_10301");
    },
    light() {
      return require("module_10302");
    }
  });
}
export function FeedbackModalNeutralDesaturated(arg0) {
  const obj = shared;
  const illustrationSource = _mod8930.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10300");
    },
    darker() {
      return require("module_10301");
    },
    light() {
      return require("module_10302");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_10300");
    },
    darker() {
      return require("module_10301");
    },
    light() {
      return require("module_10302");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}