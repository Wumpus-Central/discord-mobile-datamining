// === Module 9153: AppCrash ===

// Module 9153 (AppCrash)
import shared from "shared" /* 5021 */;
import FastImageDefault from "FastImage" /* 5717 */;
import _mod8806 from "module_8806" /* 8806 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export function getAppCrashSource(theme) {
  return _mod8806.getIllustrationSource(theme, {
    dark() {
      return require("module_9154");
    },
    darker() {
      return require("module_9155");
    },
    light() {
      return require("module_9156");
    }
  });
}
export function useAppCrashSource() {
  const obj = shared;
  return _mod8806.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9154");
    },
    darker() {
      return require("module_9155");
    },
    light() {
      return require("module_9156");
    }
  });
}
export function AppCrash(arg0) {
  const obj = shared;
  const illustrationSource = _mod8806.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9154");
    },
    darker() {
      return require("module_9155");
    },
    light() {
      return require("module_9156");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_9154");
    },
    darker() {
      return require("module_9155");
    },
    light() {
      return require("module_9156");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}