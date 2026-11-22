// === Module 19880: BansEmpty ===

// Module 19880 (BansEmpty)
import shared from "shared" /* 4920 */;
import FastImageDefault from "FastImage" /* 5600 */;
import _mod7786 from "module_7786" /* 7786 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export function getBansEmptySource(theme) {
  return _mod7786.getIllustrationSource(theme, {
    dark() {
      return require("module_19881");
    },
    darker() {
      return require("module_19882");
    },
    light() {
      return require("module_19883");
    }
  });
}
export function useBansEmptySource() {
  const obj = shared;
  return _mod7786.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19881");
    },
    darker() {
      return require("module_19882");
    },
    light() {
      return require("module_19883");
    }
  });
}
export function BansEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod7786.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19881");
    },
    darker() {
      return require("module_19882");
    },
    light() {
      return require("module_19883");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_19881");
    },
    darker() {
      return require("module_19882");
    },
    light() {
      return require("module_19883");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}