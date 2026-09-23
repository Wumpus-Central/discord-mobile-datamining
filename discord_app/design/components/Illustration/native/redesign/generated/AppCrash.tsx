// === Module 10191: AppCrash ===

// Module 10191 (AppCrash)
import shared from "shared" /* 4678 */;
import _mod8577 from "module_8577" /* 8577 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  return _mod8577.getIllustrationSource(theme, {
    dark() {
      return require("module_10192");
    },
    darker() {
      return require("module_10193");
    },
    light() {
      return require("module_10194");
    }
  });
};
export const useAppCrashSource = function useAppCrashSource() {
  const obj = shared;
  return _mod8577.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10192");
    },
    darker() {
      return require("module_10193");
    },
    light() {
      return require("module_10194");
    }
  });
};
export const AppCrash = function AppCrash(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8577.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10192");
    },
    darker() {
      return require("module_10193");
    },
    light() {
      return require("module_10194");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};