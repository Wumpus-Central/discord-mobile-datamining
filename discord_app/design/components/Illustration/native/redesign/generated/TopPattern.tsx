// === Module 13605: TopPattern ===

// Module 13605 (TopPattern)
import shared from "shared" /* 4488 */;
import _mod8349 from "module_8349" /* 8349 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  const obj = {
    dark() {
      return require("module_13606");
    },
    darker() {
      return require("module_13607");
    },
    light() {
      return require("module_13608");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTopPatternSource = function useTopPatternSource() {
  const obj = {
    dark() {
      return require("module_13606");
    },
    darker() {
      return require("module_13607");
    },
    light() {
      return require("module_13608");
    }
  };
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const TopPattern = function TopPattern(arg0) {
  let obj = {
    dark() {
      return require("module_13606");
    },
    darker() {
      return require("module_13607");
    },
    light() {
      return require("module_13608");
    }
  };
  obj = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};