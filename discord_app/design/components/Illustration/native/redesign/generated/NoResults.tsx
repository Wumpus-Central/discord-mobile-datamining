// === Module 8929: generated/NoResults ===

// Module 8929 (generated/NoResults)
import shared from "shared" /* 5148 */;
import FastImageDefault from "FastImage" /* 5837 */;
import _mod8930 from "module_8930" /* 8930 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export function getNoResultsSource(theme) {
  return _mod8930.getIllustrationSource(theme, {
    dark() {
      return require("module_8931");
    },
    darker() {
      return require("module_8932");
    },
    light() {
      return require("module_8933");
    }
  });
}
export function useNoResultsSource() {
  const obj = shared;
  return _mod8930.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_8931");
    },
    darker() {
      return require("module_8932");
    },
    light() {
      return require("module_8933");
    }
  });
}
export function NoResults(arg0) {
  const obj = shared;
  const illustrationSource = _mod8930.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_8931");
    },
    darker() {
      return require("module_8932");
    },
    light() {
      return require("module_8933");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_8931");
    },
    darker() {
      return require("module_8932");
    },
    light() {
      return require("module_8933");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}