// === Module 20257: BansEmpty ===

// Module 20257 (BansEmpty)
import shared from "shared" /* 5149 */;
import FastImageDefault from "FastImage" /* 5844 */;
import _mod8886 from "module_8886" /* 8886 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export function getBansEmptySource(theme) {
  return _mod8886.getIllustrationSource(theme, {
    dark() {
      return require("module_20258");
    },
    darker() {
      return require("module_20259");
    },
    light() {
      return require("module_20260");
    }
  });
}
export function useBansEmptySource() {
  const obj = shared;
  return _mod8886.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20258");
    },
    darker() {
      return require("module_20259");
    },
    light() {
      return require("module_20260");
    }
  });
}
export function BansEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod8886.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20258");
    },
    darker() {
      return require("module_20259");
    },
    light() {
      return require("module_20260");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_20258");
    },
    darker() {
      return require("module_20259");
    },
    light() {
      return require("module_20260");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}