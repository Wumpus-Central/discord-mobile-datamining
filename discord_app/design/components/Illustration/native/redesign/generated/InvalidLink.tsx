// === Module 11890: InvalidLink ===

// Module 11890 (InvalidLink)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  const obj = {
    dark() {
      return require("module_11548");
    },
    darker() {
      return require("module_11891");
    },
    light() {
      return require("module_11549");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  const obj = {
    dark() {
      return require("module_11548");
    },
    darker() {
      return require("module_11891");
    },
    light() {
      return require("module_11549");
    }
  };
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InvalidLink = function InvalidLink(arg0) {
  let obj = {
    dark() {
      return require("module_11548");
    },
    darker() {
      return require("module_11891");
    },
    light() {
      return require("module_11549");
    }
  };
  obj = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};