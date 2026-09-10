// === Module 11867: InvalidLink ===

// Module 11867 (InvalidLink)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  const obj = {
    dark() {
      return require("module_11526");
    },
    darker() {
      return require("module_11868");
    },
    light() {
      return require("module_11527");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  const obj = {
    dark() {
      return require("module_11526");
    },
    darker() {
      return require("module_11868");
    },
    light() {
      return require("module_11527");
    }
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InvalidLink = function InvalidLink(arg0) {
  let obj = {
    dark() {
      return require("module_11526");
    },
    darker() {
      return require("module_11868");
    },
    light() {
      return require("module_11527");
    }
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};