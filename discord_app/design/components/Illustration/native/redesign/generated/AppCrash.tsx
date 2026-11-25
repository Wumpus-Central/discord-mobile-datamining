// === Module 10403: AppCrash ===

// Module 10403 (AppCrash)
import shared from "shared" /* 5019 */;
import FastImageDefault from "FastImage" /* 5699 */;
import _mod8524 from "module_8524" /* 8524 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export function getAppCrashSource(theme) {
  return _mod8524.getIllustrationSource(theme, {
    dark() {
      return require("module_10404");
    },
    darker() {
      return require("module_10405");
    },
    light() {
      return require("module_10406");
    }
  });
}
export function useAppCrashSource() {
  const obj = shared;
  return _mod8524.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10404");
    },
    darker() {
      return require("module_10405");
    },
    light() {
      return require("module_10406");
    }
  });
}
export function AppCrash(arg0) {
  const obj = shared;
  const illustrationSource = _mod8524.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10404");
    },
    darker() {
      return require("module_10405");
    },
    light() {
      return require("module_10406");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_10404");
    },
    darker() {
      return require("module_10405");
    },
    light() {
      return require("module_10406");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}