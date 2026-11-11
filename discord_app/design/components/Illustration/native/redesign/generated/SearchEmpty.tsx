// === Module 11222: SearchEmpty ===

// Module 11222 (SearchEmpty)
import shared from "shared" /* 5250 */;
import FastImageDefault from "FastImage" /* 5957 */;
import _mod8117 from "module_8117" /* 8117 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export function getSearchEmptySource(theme) {
  return _mod8117.getIllustrationSource(theme, {
    dark() {
      return require("module_11223");
    },
    darker() {
      return require("module_11224");
    },
    light() {
      return require("module_11225");
    }
  });
}
export function useSearchEmptySource() {
  const obj = shared;
  return _mod8117.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11223");
    },
    darker() {
      return require("module_11224");
    },
    light() {
      return require("module_11225");
    }
  });
}
export function SearchEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod8117.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11223");
    },
    darker() {
      return require("module_11224");
    },
    light() {
      return require("module_11225");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_11223");
    },
    darker() {
      return require("module_11224");
    },
    light() {
      return require("module_11225");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}