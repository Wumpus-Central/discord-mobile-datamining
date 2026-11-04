// === Module 20104: BansEmpty ===

// Module 20104 (BansEmpty)
import shared from "shared" /* 5148 */;
import FastImageDefault from "FastImage" /* 5851 */;
import _mod8947 from "module_8947" /* 8947 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export function getBansEmptySource(theme) {
  return _mod8947.getIllustrationSource(theme, {
    dark() {
      return require("module_20105");
    },
    darker() {
      return require("module_20106");
    },
    light() {
      return require("module_20107");
    }
  });
}
export function useBansEmptySource() {
  const obj = shared;
  return _mod8947.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20105");
    },
    darker() {
      return require("module_20106");
    },
    light() {
      return require("module_20107");
    }
  });
}
export function BansEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod8947.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20105");
    },
    darker() {
      return require("module_20106");
    },
    light() {
      return require("module_20107");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_20105");
    },
    darker() {
      return require("module_20106");
    },
    light() {
      return require("module_20107");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}