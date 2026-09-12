// === Module 9890: NoResultsAlt ===

// Module 9890 (NoResultsAlt)
import shared from "shared" /* 4488 */;
import _mod8349 from "module_8349" /* 8349 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  const obj = {
    dark() {
      return require("module_9891");
    },
    darker() {
      return require("module_9892");
    },
    light() {
      return require("module_7157");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  const obj = {
    dark() {
      return require("module_9891");
    },
    darker() {
      return require("module_9892");
    },
    light() {
      return require("module_7157");
    }
  };
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  let obj = {
    dark() {
      return require("module_9891");
    },
    darker() {
      return require("module_9892");
    },
    light() {
      return require("module_7157");
    }
  };
  obj = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};