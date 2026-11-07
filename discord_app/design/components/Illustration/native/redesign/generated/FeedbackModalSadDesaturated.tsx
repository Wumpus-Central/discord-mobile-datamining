// === Module 10285: FeedbackModalSadDesaturated ===

// Module 10285 (FeedbackModalSadDesaturated)
import shared from "shared" /* 5147 */;
import FastImageDefault from "FastImage" /* 5842 */;
import _mod8880 from "module_8880" /* 8880 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx");

export function getFeedbackModalSadDesaturatedSource(theme) {
  return _mod8880.getIllustrationSource(theme, {
    dark() {
      return require("module_10286");
    },
    darker() {
      return require("module_10287");
    },
    light() {
      return require("module_10288");
    }
  });
}
export function useFeedbackModalSadDesaturatedSource() {
  const obj = shared;
  return _mod8880.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10286");
    },
    darker() {
      return require("module_10287");
    },
    light() {
      return require("module_10288");
    }
  });
}
export function FeedbackModalSadDesaturated(arg0) {
  const obj = shared;
  const illustrationSource = _mod8880.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10286");
    },
    darker() {
      return require("module_10287");
    },
    light() {
      return require("module_10288");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_10286");
    },
    darker() {
      return require("module_10287");
    },
    light() {
      return require("module_10288");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}