// === Module 16898: Pending ===

// Module 16898 (Pending)
import shared from "shared" /* 4685 */;
import _mod7844 from "module_7844" /* 7844 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  return _mod7844.getIllustrationSource(theme, {
    dark() {
      return require("module_16899");
    },
    darker() {
      return require("module_16900");
    },
    light() {
      return require("module_16901");
    }
  });
};
export const usePendingSource = function usePendingSource() {
  const obj = shared;
  return _mod7844.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16899");
    },
    darker() {
      return require("module_16900");
    },
    light() {
      return require("module_16901");
    }
  });
};
export const Pending = function Pending(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7844.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16899");
    },
    darker() {
      return require("module_16900");
    },
    light() {
      return require("module_16901");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};