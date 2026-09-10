// === Module 17746: BansEmpty ===

// Module 17746 (BansEmpty)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  const obj = {
    dark() {
      return require("module_17747");
    },
    darker() {
      return require("module_17748");
    },
    light() {
      return require("module_17749");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBansEmptySource = function useBansEmptySource() {
  const obj = {
    dark() {
      return require("module_17747");
    },
    darker() {
      return require("module_17748");
    },
    light() {
      return require("module_17749");
    }
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const BansEmpty = function BansEmpty(arg0) {
  let obj = {
    dark() {
      return require("module_17747");
    },
    darker() {
      return require("module_17748");
    },
    light() {
      return require("module_17749");
    }
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};