// === Module 10111: AppCrash ===

// Module 10111 (AppCrash)
import shared from "shared" /* 4608 */;
import _mod8506 from "module_8506" /* 8506 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  return _mod8506.getIllustrationSource(theme, {
    dark() {
      return require("module_10112");
    },
    darker() {
      return require("module_10113");
    },
    light() {
      return require("module_10114");
    }
  });
};
export const useAppCrashSource = function useAppCrashSource() {
  const obj = shared;
  return _mod8506.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10112");
    },
    darker() {
      return require("module_10113");
    },
    light() {
      return require("module_10114");
    }
  });
};
export const AppCrash = function AppCrash(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8506.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10112");
    },
    darker() {
      return require("module_10113");
    },
    light() {
      return require("module_10114");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};