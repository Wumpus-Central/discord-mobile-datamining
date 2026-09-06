// === Module 10317: SearchEmpty ===

// Module 10317 (SearchEmpty)
import shared from "shared" /* 4411 */;
import _mod8233 from "module_8233" /* 8233 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  const obj = {
    dark() {
      return require("module_10318");
    },
    darker() {
      return require("module_10319");
    },
    light() {
      return require("module_10320");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSearchEmptySource = function useSearchEmptySource() {
  const obj = {
    dark() {
      return require("module_10318");
    },
    darker() {
      return require("module_10319");
    },
    light() {
      return require("module_10320");
    }
  };
  return _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SearchEmpty = function SearchEmpty(arg0) {
  let obj = {
    dark() {
      return require("module_10318");
    },
    darker() {
      return require("module_10319");
    },
    light() {
      return require("module_10320");
    }
  };
  obj = {};
  const illustrationSource = _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};