// === Module 13595: TopPattern ===

// Module 13595 (TopPattern)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  const obj = {
    dark() {
      return require("module_13596");
    },
    darker() {
      return require("module_13597");
    },
    light() {
      return require("module_13598");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTopPatternSource = function useTopPatternSource() {
  const obj = {
    dark() {
      return require("module_13596");
    },
    darker() {
      return require("module_13597");
    },
    light() {
      return require("module_13598");
    }
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const TopPattern = function TopPattern(arg0) {
  let obj = {
    dark() {
      return require("module_13596");
    },
    darker() {
      return require("module_13597");
    },
    light() {
      return require("module_13598");
    }
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};