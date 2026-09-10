// === Module 16984: Pending ===

// Module 16984 (Pending)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  const obj = {
    dark() {
      return require("module_16985");
    },
    darker() {
      return require("module_16986");
    },
    light() {
      return require("module_16987");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const usePendingSource = function usePendingSource() {
  const obj = {
    dark() {
      return require("module_16985");
    },
    darker() {
      return require("module_16986");
    },
    light() {
      return require("module_16987");
    }
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Pending = function Pending(arg0) {
  let obj = {
    dark() {
      return require("module_16985");
    },
    darker() {
      return require("module_16986");
    },
    light() {
      return require("module_16987");
    }
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};