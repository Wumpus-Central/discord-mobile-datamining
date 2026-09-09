// === Module 17687: BansEmpty ===

// Module 17687 (BansEmpty)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  const obj = {
    dark() {
      return require("module_17688");
    },
    darker() {
      return require("module_17689");
    },
    light() {
      return require("module_17690");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBansEmptySource = function useBansEmptySource() {
  const obj = {
    dark() {
      return require("module_17688");
    },
    darker() {
      return require("module_17689");
    },
    light() {
      return require("module_17690");
    }
  };
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const BansEmpty = function BansEmpty(arg0) {
  let obj = {
    dark() {
      return require("module_17688");
    },
    darker() {
      return require("module_17689");
    },
    light() {
      return require("module_17690");
    }
  };
  obj = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};