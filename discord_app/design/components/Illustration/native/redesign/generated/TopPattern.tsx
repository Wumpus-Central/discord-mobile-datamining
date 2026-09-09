// === Module 13546: TopPattern ===

// Module 13546 (TopPattern)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  const obj = {
    dark() {
      return require("module_13547");
    },
    darker() {
      return require("module_13548");
    },
    light() {
      return require("module_13549");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTopPatternSource = function useTopPatternSource() {
  const obj = {
    dark() {
      return require("module_13547");
    },
    darker() {
      return require("module_13548");
    },
    light() {
      return require("module_13549");
    }
  };
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const TopPattern = function TopPattern(arg0) {
  let obj = {
    dark() {
      return require("module_13547");
    },
    darker() {
      return require("module_13548");
    },
    light() {
      return require("module_13549");
    }
  };
  obj = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};