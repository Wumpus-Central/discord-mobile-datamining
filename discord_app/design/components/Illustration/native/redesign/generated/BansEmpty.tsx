// === Module 19756: BansEmpty ===

// Module 19756 (BansEmpty)
import shared from "shared" /* 4801 */;
import FastImageDefault from "FastImage" /* 5481 */;
import _mod7666 from "module_7666" /* 7666 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export function getBansEmptySource(theme) {
  return _mod7666.getIllustrationSource(theme, {
    dark() {
      return require("module_19757");
    },
    darker() {
      return require("module_19758");
    },
    light() {
      return require("module_19759");
    }
  });
}
export function useBansEmptySource() {
  const obj = shared;
  return _mod7666.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19757");
    },
    darker() {
      return require("module_19758");
    },
    light() {
      return require("module_19759");
    }
  });
}
export function BansEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod7666.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19757");
    },
    darker() {
      return require("module_19758");
    },
    light() {
      return require("module_19759");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_19757");
    },
    darker() {
      return require("module_19758");
    },
    light() {
      return require("module_19759");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}