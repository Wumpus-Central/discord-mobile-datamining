// === Module 9740: SearchEmpty ===

// Module 9740 (SearchEmpty)
import shared from "shared" /* 5050 */;
import FastImageDefault from "FastImage" /* 5730 */;
import _mod8566 from "module_8566" /* 8566 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export function getSearchEmptySource(theme) {
  return _mod8566.getIllustrationSource(theme, {
    dark() {
      return require("module_9741");
    },
    darker() {
      return require("module_9742");
    },
    light() {
      return require("module_9743");
    }
  });
}
export function useSearchEmptySource() {
  const obj = shared;
  return _mod8566.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9741");
    },
    darker() {
      return require("module_9742");
    },
    light() {
      return require("module_9743");
    }
  });
}
export function SearchEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod8566.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9741");
    },
    darker() {
      return require("module_9742");
    },
    light() {
      return require("module_9743");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_9741");
    },
    darker() {
      return require("module_9742");
    },
    light() {
      return require("module_9743");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}