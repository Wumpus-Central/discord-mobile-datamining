// === Module 8258: generated/NoResults ===

// Module 8258 (generated/NoResults)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  const obj = {
    dark() {
      return require("module_8260");
    },
    darker() {
      return require("module_8261");
    },
    light() {
      return require("module_8262");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsSource = function useNoResultsSource() {
  const obj = {
    dark() {
      return require("module_8260");
    },
    darker() {
      return require("module_8261");
    },
    light() {
      return require("module_8262");
    }
  };
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResults = function NoResults(arg0) {
  let obj = {
    dark() {
      return require("module_8260");
    },
    darker() {
      return require("module_8261");
    },
    light() {
      return require("module_8262");
    }
  };
  obj = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};