// === Module 16846: Blocked ===

// Module 16846 (Blocked)
import shared from "shared" /* 5148 */;
import FastImageDefault from "FastImage" /* 5837 */;
import _mod8930 from "module_8930" /* 8930 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export function getBlockedSource(theme) {
  return _mod8930.getIllustrationSource(theme, {
    dark() {
      return require("module_16847");
    },
    darker() {
      return require("module_16848");
    },
    light() {
      return require("module_16849");
    }
  });
}
export function useBlockedSource() {
  const obj = shared;
  return _mod8930.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16847");
    },
    darker() {
      return require("module_16848");
    },
    light() {
      return require("module_16849");
    }
  });
}
export function Blocked(arg0) {
  const obj = shared;
  const illustrationSource = _mod8930.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16847");
    },
    darker() {
      return require("module_16848");
    },
    light() {
      return require("module_16849");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_16847");
    },
    darker() {
      return require("module_16848");
    },
    light() {
      return require("module_16849");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}