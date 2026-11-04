// === Module 19237: Pending ===

// Module 19237 (Pending)
import shared from "shared" /* 5148 */;
import FastImageDefault from "FastImage" /* 5851 */;
import _mod8947 from "module_8947" /* 8947 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export function getPendingSource(theme) {
  return _mod8947.getIllustrationSource(theme, {
    dark() {
      return require("module_19238");
    },
    darker() {
      return require("module_19239");
    },
    light() {
      return require("module_19240");
    }
  });
}
export function usePendingSource() {
  const obj = shared;
  return _mod8947.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19238");
    },
    darker() {
      return require("module_19239");
    },
    light() {
      return require("module_19240");
    }
  });
}
export function Pending(arg0) {
  const obj = shared;
  const illustrationSource = _mod8947.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19238");
    },
    darker() {
      return require("module_19239");
    },
    light() {
      return require("module_19240");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_19238");
    },
    darker() {
      return require("module_19239");
    },
    light() {
      return require("module_19240");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}