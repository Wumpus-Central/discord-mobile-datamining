// === Module 19054: Pending ===

// Module 19054 (Pending)
import shared from "shared" /* 4924 */;
import FastImageDefault from "FastImage" /* 5604 */;
import _mod8425 from "module_8425" /* 8425 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export function getPendingSource(theme) {
  return _mod8425.getIllustrationSource(theme, {
    dark() {
      return require("module_19055");
    },
    darker() {
      return require("module_19056");
    },
    light() {
      return require("module_19057");
    }
  });
}
export function usePendingSource() {
  const obj = shared;
  return _mod8425.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19055");
    },
    darker() {
      return require("module_19056");
    },
    light() {
      return require("module_19057");
    }
  });
}
export function Pending(arg0) {
  const obj = shared;
  const illustrationSource = _mod8425.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19055");
    },
    darker() {
      return require("module_19056");
    },
    light() {
      return require("module_19057");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_19055");
    },
    darker() {
      return require("module_19056");
    },
    light() {
      return require("module_19057");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}