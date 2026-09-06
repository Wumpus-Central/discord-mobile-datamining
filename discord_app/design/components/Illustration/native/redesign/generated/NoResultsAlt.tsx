// === Module 9760: NoResultsAlt ===

// Module 9760 (NoResultsAlt)
import shared from "shared" /* 4411 */;
import _mod8233 from "module_8233" /* 8233 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  const obj = {
    dark() {
      return require("module_9761");
    },
    darker() {
      return require("module_9762");
    },
    light() {
      return require("module_7054");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  const obj = {
    dark() {
      return require("module_9761");
    },
    darker() {
      return require("module_9762");
    },
    light() {
      return require("module_7054");
    }
  };
  return _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  let obj = {
    dark() {
      return require("module_9761");
    },
    darker() {
      return require("module_9762");
    },
    light() {
      return require("module_7054");
    }
  };
  obj = {};
  const illustrationSource = _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};