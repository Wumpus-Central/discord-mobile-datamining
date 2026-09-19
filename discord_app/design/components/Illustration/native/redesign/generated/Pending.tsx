// === Module 17345: Pending ===

// Module 17345 (Pending)
import shared from "shared" /* 4607 */;
import _mod8501 from "module_8501" /* 8501 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  return _mod8501.getIllustrationSource(theme, {
    dark() {
      return require("module_17346");
    },
    darker() {
      return require("module_17347");
    },
    light() {
      return require("module_17348");
    }
  });
};
export const usePendingSource = function usePendingSource() {
  const obj = shared;
  return _mod8501.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17346");
    },
    darker() {
      return require("module_17347");
    },
    light() {
      return require("module_17348");
    }
  });
};
export const Pending = function Pending(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8501.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17346");
    },
    darker() {
      return require("module_17347");
    },
    light() {
      return require("module_17348");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};