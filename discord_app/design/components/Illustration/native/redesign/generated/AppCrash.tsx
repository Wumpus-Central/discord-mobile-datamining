// === Module 9471: AppCrash ===

// Module 9471 (AppCrash)
import shared from "shared" /* 4685 */;
import _mod7844 from "module_7844" /* 7844 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  return _mod7844.getIllustrationSource(theme, {
    dark() {
      return require("module_9472");
    },
    darker() {
      return require("module_9473");
    },
    light() {
      return require("module_9474");
    }
  });
};
export const useAppCrashSource = function useAppCrashSource() {
  const obj = shared;
  return _mod7844.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9472");
    },
    darker() {
      return require("module_9473");
    },
    light() {
      return require("module_9474");
    }
  });
};
export const AppCrash = function AppCrash(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7844.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9472");
    },
    darker() {
      return require("module_9473");
    },
    light() {
      return require("module_9474");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};