// === Module 10349: SearchEmpty ===

// Module 10349 (SearchEmpty)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  const obj = {
    dark() {
      return require("module_10350");
    },
    darker() {
      return require("module_10351");
    },
    light() {
      return require("module_10352");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSearchEmptySource = function useSearchEmptySource() {
  const obj = {
    dark() {
      return require("module_10350");
    },
    darker() {
      return require("module_10351");
    },
    light() {
      return require("module_10352");
    }
  };
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SearchEmpty = function SearchEmpty(arg0) {
  let obj = {
    dark() {
      return require("module_10350");
    },
    darker() {
      return require("module_10351");
    },
    light() {
      return require("module_10352");
    }
  };
  obj = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};