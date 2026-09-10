// === Module 14880: Blocked ===

// Module 14880 (Blocked)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  const obj = {
    dark() {
      return require("module_14881");
    },
    darker() {
      return require("module_14882");
    },
    light() {
      return require("module_14883");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBlockedSource = function useBlockedSource() {
  const obj = {
    dark() {
      return require("module_14881");
    },
    darker() {
      return require("module_14882");
    },
    light() {
      return require("module_14883");
    }
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Blocked = function Blocked(arg0) {
  let obj = {
    dark() {
      return require("module_14881");
    },
    darker() {
      return require("module_14882");
    },
    light() {
      return require("module_14883");
    }
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};