// === Module 10221: SearchEmpty ===

// Module 10221 (SearchEmpty)
import shared from "shared" /* 5150 */;
import FastImageDefault from "FastImage" /* 5854 */;
import _mod8952 from "module_8952" /* 8952 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export function getSearchEmptySource(theme) {
  return _mod8952.getIllustrationSource(theme, {
    dark() {
      return require("module_10222");
    },
    darker() {
      return require("module_10223");
    },
    light() {
      return require("module_10224");
    }
  });
}
export function useSearchEmptySource() {
  const obj = shared;
  return _mod8952.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10222");
    },
    darker() {
      return require("module_10223");
    },
    light() {
      return require("module_10224");
    }
  });
}
export function SearchEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod8952.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10222");
    },
    darker() {
      return require("module_10223");
    },
    light() {
      return require("module_10224");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_10222");
    },
    darker() {
      return require("module_10223");
    },
    light() {
      return require("module_10224");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}