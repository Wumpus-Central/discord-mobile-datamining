// === Module 11796: InvalidLink ===

// Module 11796 (InvalidLink)
import shared from "shared" /* 4411 */;
import _mod8233 from "module_8233" /* 8233 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  const obj = {
    dark() {
      return require("module_11454");
    },
    darker() {
      return require("module_11797");
    },
    light() {
      return require("module_11455");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  const obj = {
    dark() {
      return require("module_11454");
    },
    darker() {
      return require("module_11797");
    },
    light() {
      return require("module_11455");
    }
  };
  return _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InvalidLink = function InvalidLink(arg0) {
  let obj = {
    dark() {
      return require("module_11454");
    },
    darker() {
      return require("module_11797");
    },
    light() {
      return require("module_11455");
    }
  };
  obj = {};
  const illustrationSource = _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};