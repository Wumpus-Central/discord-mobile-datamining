// === Module 20216: BansEmpty ===

// Module 20216 (BansEmpty)
import shared from "shared" /* 5147 */;
import FastImageDefault from "FastImage" /* 5842 */;
import _mod8880 from "module_8880" /* 8880 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export function getBansEmptySource(theme) {
  return _mod8880.getIllustrationSource(theme, {
    dark() {
      return require("module_20217");
    },
    darker() {
      return require("module_20218");
    },
    light() {
      return require("module_20219");
    }
  });
}
export function useBansEmptySource() {
  const obj = shared;
  return _mod8880.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20217");
    },
    darker() {
      return require("module_20218");
    },
    light() {
      return require("module_20219");
    }
  });
}
export function BansEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod8880.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20217");
    },
    darker() {
      return require("module_20218");
    },
    light() {
      return require("module_20219");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_20217");
    },
    darker() {
      return require("module_20218");
    },
    light() {
      return require("module_20219");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}