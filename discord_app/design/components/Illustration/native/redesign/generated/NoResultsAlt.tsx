// === Module 9851: NoResultsAlt ===

// Module 9851 (NoResultsAlt)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  const obj = {
    dark() {
      return require("module_9852");
    },
    darker() {
      return require("module_9853");
    },
    light() {
      return require("module_7127");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  const obj = {
    dark() {
      return require("module_9852");
    },
    darker() {
      return require("module_9853");
    },
    light() {
      return require("module_7127");
    }
  };
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  let obj = {
    dark() {
      return require("module_9852");
    },
    darker() {
      return require("module_9853");
    },
    light() {
      return require("module_7127");
    }
  };
  obj = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};