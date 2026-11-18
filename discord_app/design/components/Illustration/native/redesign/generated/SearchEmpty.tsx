// === Module 11267: SearchEmpty ===

// Module 11267 (SearchEmpty)
import shared from "shared" /* 4830 */;
import FastImageDefault from "FastImage" /* 5510 */;
import _mod7697 from "module_7697" /* 7697 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export function getSearchEmptySource(theme) {
  return _mod7697.getIllustrationSource(theme, {
    dark() {
      return require("module_11268");
    },
    darker() {
      return require("module_11269");
    },
    light() {
      return require("module_11270");
    }
  });
}
export function useSearchEmptySource() {
  const obj = shared;
  return _mod7697.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11268");
    },
    darker() {
      return require("module_11269");
    },
    light() {
      return require("module_11270");
    }
  });
}
export function SearchEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod7697.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11268");
    },
    darker() {
      return require("module_11269");
    },
    light() {
      return require("module_11270");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_11268");
    },
    darker() {
      return require("module_11269");
    },
    light() {
      return require("module_11270");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}