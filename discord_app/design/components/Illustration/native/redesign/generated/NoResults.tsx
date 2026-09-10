// === Module 8295: generated/NoResults ===

// Module 8295 (generated/NoResults)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  const obj = {
    dark() {
      return require("module_8297");
    },
    darker() {
      return require("module_8298");
    },
    light() {
      return require("module_8299");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsSource = function useNoResultsSource() {
  const obj = {
    dark() {
      return require("module_8297");
    },
    darker() {
      return require("module_8298");
    },
    light() {
      return require("module_8299");
    }
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResults = function NoResults(arg0) {
  let obj = {
    dark() {
      return require("module_8297");
    },
    darker() {
      return require("module_8298");
    },
    light() {
      return require("module_8299");
    }
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};