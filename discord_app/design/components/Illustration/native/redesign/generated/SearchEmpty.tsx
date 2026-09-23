// === Module 10658: SearchEmpty ===

// Module 10658 (SearchEmpty)
import shared from "shared" /* 4678 */;
import _mod8577 from "module_8577" /* 8577 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  return _mod8577.getIllustrationSource(theme, {
    dark() {
      return require("module_10659");
    },
    darker() {
      return require("module_10660");
    },
    light() {
      return require("module_10661");
    }
  });
};
export const useSearchEmptySource = function useSearchEmptySource() {
  const obj = shared;
  return _mod8577.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10659");
    },
    darker() {
      return require("module_10660");
    },
    light() {
      return require("module_10661");
    }
  });
};
export const SearchEmpty = function SearchEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8577.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10659");
    },
    darker() {
      return require("module_10660");
    },
    light() {
      return require("module_10661");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};