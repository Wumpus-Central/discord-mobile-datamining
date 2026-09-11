// === Module 10406: SearchEmpty ===

// Module 10406 (SearchEmpty)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  const obj = {
    dark() {
      return require("module_10407");
    },
    darker() {
      return require("module_10408");
    },
    light() {
      return require("module_10409");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSearchEmptySource = function useSearchEmptySource() {
  const obj = {
    dark() {
      return require("module_10407");
    },
    darker() {
      return require("module_10408");
    },
    light() {
      return require("module_10409");
    }
  };
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SearchEmpty = function SearchEmpty(arg0) {
  let obj = {
    dark() {
      return require("module_10407");
    },
    darker() {
      return require("module_10408");
    },
    light() {
      return require("module_10409");
    }
  };
  obj = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};