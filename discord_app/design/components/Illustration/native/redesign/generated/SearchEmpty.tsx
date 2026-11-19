// === Module 11245: SearchEmpty ===

// Module 11245 (SearchEmpty)
import shared from "shared" /* 4799 */;
import FastImageDefault from "FastImage" /* 5479 */;
import _mod7667 from "module_7667" /* 7667 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export function getSearchEmptySource(theme) {
  return _mod7667.getIllustrationSource(theme, {
    dark() {
      return require("module_11246");
    },
    darker() {
      return require("module_11247");
    },
    light() {
      return require("module_11248");
    }
  });
}
export function useSearchEmptySource() {
  const obj = shared;
  return _mod7667.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11246");
    },
    darker() {
      return require("module_11247");
    },
    light() {
      return require("module_11248");
    }
  });
}
export function SearchEmpty(arg0) {
  const obj = shared;
  const illustrationSource = _mod7667.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11246");
    },
    darker() {
      return require("module_11247");
    },
    light() {
      return require("module_11248");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_11246");
    },
    darker() {
      return require("module_11247");
    },
    light() {
      return require("module_11248");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}