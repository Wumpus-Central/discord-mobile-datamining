// === Module 9919: AppCrash ===

// Module 9919 (AppCrash)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  const obj = {
    dark() {
      return require("module_9920");
    },
    darker() {
      return require("module_9921");
    },
    light() {
      return require("module_9922");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useAppCrashSource = function useAppCrashSource() {
  const obj = {
    dark() {
      return require("module_9920");
    },
    darker() {
      return require("module_9921");
    },
    light() {
      return require("module_9922");
    }
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const AppCrash = function AppCrash(arg0) {
  let obj = {
    dark() {
      return require("module_9920");
    },
    darker() {
      return require("module_9921");
    },
    light() {
      return require("module_9922");
    }
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};