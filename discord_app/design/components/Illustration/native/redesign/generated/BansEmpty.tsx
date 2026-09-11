// === Module 17737: BansEmpty ===

// Module 17737 (BansEmpty)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  const obj = {
    dark() {
      return require("module_17738");
    },
    darker() {
      return require("module_17739");
    },
    light() {
      return require("module_17740");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBansEmptySource = function useBansEmptySource() {
  const obj = {
    dark() {
      return require("module_17738");
    },
    darker() {
      return require("module_17739");
    },
    light() {
      return require("module_17740");
    }
  };
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const BansEmpty = function BansEmpty(arg0) {
  let obj = {
    dark() {
      return require("module_17738");
    },
    darker() {
      return require("module_17739");
    },
    light() {
      return require("module_17740");
    }
  };
  obj = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};