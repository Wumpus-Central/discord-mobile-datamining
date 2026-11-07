// === Module 10156: SearchEmpty ===

// Module 10156 (SearchEmpty)
import shared from "shared" /* 5147 */;
import FastImageDefault from "FastImage" /* 5842 */;
import _mod8880 from "module_8880" /* 8880 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export function getSearchEmptySource(theme) {
  return _mod8880.getIllustrationSource(theme, {
    dark() {
      return require("module_10157");
    },
    darker() {
      return require("module_10158");
    },
    light() {
      return require("module_10159");
    }
  });
}
export function useSearchEmptySource() {
  const obj = shared;
  return _mod8880.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10157");
    },
    darker() {
      return require("module_10158");
    },
    light() {
      return require("module_10159");
    }
  });
}
export function SearchEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod8880.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10157");
    },
    darker() {
      return require("module_10158");
    },
    light() {
      return require("module_10159");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_10157");
    },
    darker() {
      return require("module_10158");
    },
    light() {
      return require("module_10159");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}