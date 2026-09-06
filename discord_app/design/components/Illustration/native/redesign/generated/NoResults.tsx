// === Module 8232: generated/NoResults ===

// Module 8232 (generated/NoResults)
import shared from "shared" /* 4411 */;
import _mod8233 from "module_8233" /* 8233 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  const obj = {
    dark() {
      return require("module_8234");
    },
    darker() {
      return require("module_8235");
    },
    light() {
      return require("module_8236");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsSource = function useNoResultsSource() {
  const obj = {
    dark() {
      return require("module_8234");
    },
    darker() {
      return require("module_8235");
    },
    light() {
      return require("module_8236");
    }
  };
  return _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResults = function NoResults(arg0) {
  let obj = {
    dark() {
      return require("module_8234");
    },
    darker() {
      return require("module_8235");
    },
    light() {
      return require("module_8236");
    }
  };
  obj = {};
  const illustrationSource = _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};