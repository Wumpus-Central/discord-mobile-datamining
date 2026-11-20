// === Module 18883: Pending ===

// Module 18883 (Pending)
import shared from "shared" /* 4801 */;
import FastImageDefault from "FastImage" /* 5481 */;
import _mod7666 from "module_7666" /* 7666 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export function getPendingSource(theme) {
  return _mod7666.getIllustrationSource(theme, {
    dark() {
      return require("module_18884");
    },
    darker() {
      return require("module_18885");
    },
    light() {
      return require("module_18886");
    }
  });
}
export function usePendingSource() {
  const obj = shared;
  return _mod7666.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18884");
    },
    darker() {
      return require("module_18885");
    },
    light() {
      return require("module_18886");
    }
  });
}
export function Pending(arg0) {
  const obj = shared;
  const illustrationSource = _mod7666.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18884");
    },
    darker() {
      return require("module_18885");
    },
    light() {
      return require("module_18886");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_18884");
    },
    darker() {
      return require("module_18885");
    },
    light() {
      return require("module_18886");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}