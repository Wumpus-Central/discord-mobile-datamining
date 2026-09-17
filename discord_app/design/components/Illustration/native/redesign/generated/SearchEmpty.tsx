// === Module 10465: SearchEmpty ===

// Module 10465 (SearchEmpty)
import shared from "shared" /* 4491 */;
import _mod8380 from "module_8380" /* 8380 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  return _mod8380.getIllustrationSource(theme, {
    dark() {
      return require("module_10466");
    },
    darker() {
      return require("module_10467");
    },
    light() {
      return require("module_10468");
    }
  });
};
export const useSearchEmptySource = function useSearchEmptySource() {
  const obj = shared;
  return _mod8380.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10466");
    },
    darker() {
      return require("module_10467");
    },
    light() {
      return require("module_10468");
    }
  });
};
export const SearchEmpty = function SearchEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8380.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10466");
    },
    darker() {
      return require("module_10467");
    },
    light() {
      return require("module_10468");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};