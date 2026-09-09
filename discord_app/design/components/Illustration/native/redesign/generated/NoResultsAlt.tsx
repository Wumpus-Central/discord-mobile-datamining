// === Module 9792: NoResultsAlt ===

// Module 9792 (NoResultsAlt)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  const obj = {
    dark() {
      return require("module_9793");
    },
    darker() {
      return require("module_9794");
    },
    light() {
      return require("module_7068");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  const obj = {
    dark() {
      return require("module_9793");
    },
    darker() {
      return require("module_9794");
    },
    light() {
      return require("module_7068");
    }
  };
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  let obj = {
    dark() {
      return require("module_9793");
    },
    darker() {
      return require("module_9794");
    },
    light() {
      return require("module_7068");
    }
  };
  obj = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};