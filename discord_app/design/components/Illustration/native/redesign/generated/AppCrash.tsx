// === Module 14554: AppCrash ===

// Module 14554 (AppCrash)
import shared from "shared" /* 4799 */;
import FastImageDefault from "FastImage" /* 5479 */;
import _mod7667 from "module_7667" /* 7667 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export function getAppCrashSource(theme) {
  return _mod7667.getIllustrationSource(theme, {
    dark() {
      return require("module_14555");
    },
    darker() {
      return require("module_14556");
    },
    light() {
      return require("module_14557");
    }
  });
}
export function useAppCrashSource() {
  const obj = shared;
  return _mod7667.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14555");
    },
    darker() {
      return require("module_14556");
    },
    light() {
      return require("module_14557");
    }
  });
}
export function AppCrash(arg0) {
  const obj = shared;
  const illustrationSource = _mod7667.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14555");
    },
    darker() {
      return require("module_14556");
    },
    light() {
      return require("module_14557");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_14555");
    },
    darker() {
      return require("module_14556");
    },
    light() {
      return require("module_14557");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}