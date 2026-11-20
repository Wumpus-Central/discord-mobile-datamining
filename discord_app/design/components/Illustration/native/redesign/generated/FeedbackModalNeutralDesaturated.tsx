// === Module 10444: FeedbackModalNeutralDesaturated ===

// Module 10444 (FeedbackModalNeutralDesaturated)
import shared from "shared" /* 4801 */;
import FastImageDefault from "FastImage" /* 5481 */;
import _mod7666 from "module_7666" /* 7666 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx");

export function getFeedbackModalNeutralDesaturatedSource(theme) {
  return _mod7666.getIllustrationSource(theme, {
    dark() {
      return require("module_10445");
    },
    darker() {
      return require("module_10446");
    },
    light() {
      return require("module_10447");
    }
  });
}
export function useFeedbackModalNeutralDesaturatedSource() {
  const obj = shared;
  return _mod7666.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10445");
    },
    darker() {
      return require("module_10446");
    },
    light() {
      return require("module_10447");
    }
  });
}
export function FeedbackModalNeutralDesaturated(arg0) {
  const obj = shared;
  const illustrationSource = _mod7666.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10445");
    },
    darker() {
      return require("module_10446");
    },
    light() {
      return require("module_10447");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_10445");
    },
    darker() {
      return require("module_10446");
    },
    light() {
      return require("module_10447");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}