// === Module 16973: Pending ===

// Module 16973 (Pending)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  const obj = {
    dark() {
      return require("module_16974");
    },
    darker() {
      return require("module_16975");
    },
    light() {
      return require("module_16976");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const usePendingSource = function usePendingSource() {
  const obj = {
    dark() {
      return require("module_16974");
    },
    darker() {
      return require("module_16975");
    },
    light() {
      return require("module_16976");
    }
  };
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Pending = function Pending(arg0) {
  let obj = {
    dark() {
      return require("module_16974");
    },
    darker() {
      return require("module_16975");
    },
    light() {
      return require("module_16976");
    }
  };
  obj = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};