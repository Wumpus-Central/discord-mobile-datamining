// === Module 10524: FeedbackModalNeutralDesaturated ===

// Module 10524 (FeedbackModalNeutralDesaturated)
import shared from "shared" /* 4830 */;
import FastImageDefault from "FastImage" /* 5510 */;
import _mod7697 from "module_7697" /* 7697 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx");

export function getFeedbackModalNeutralDesaturatedSource(theme) {
  return _mod7697.getIllustrationSource(theme, {
    dark() {
      return require("module_10525");
    },
    darker() {
      return require("module_10526");
    },
    light() {
      return require("module_10527");
    }
  });
}
export function useFeedbackModalNeutralDesaturatedSource() {
  const obj = shared;
  return _mod7697.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10525");
    },
    darker() {
      return require("module_10526");
    },
    light() {
      return require("module_10527");
    }
  });
}
export function FeedbackModalNeutralDesaturated(arg0) {
  const obj = shared;
  const illustrationSource = _mod7697.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10525");
    },
    darker() {
      return require("module_10526");
    },
    light() {
      return require("module_10527");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_10525");
    },
    darker() {
      return require("module_10526");
    },
    light() {
      return require("module_10527");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}