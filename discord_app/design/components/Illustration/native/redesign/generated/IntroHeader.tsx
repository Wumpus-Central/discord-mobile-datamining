// === Module 17773: IntroHeader ===

// Module 17773 (IntroHeader)
import shared from "shared" /* 4488 */;
import _mod8349 from "module_8349" /* 8349 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  const obj = {
    dark() {
      return require("module_17774");
    },
    darker() {
      return require("module_17775");
    },
    light() {
      return require("module_17776");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  const obj = {
    dark() {
      return require("module_17774");
    },
    darker() {
      return require("module_17775");
    },
    light() {
      return require("module_17776");
    }
  };
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const IntroHeader = function IntroHeader(arg0) {
  let obj = {
    dark() {
      return require("module_17774");
    },
    darker() {
      return require("module_17775");
    },
    light() {
      return require("module_17776");
    }
  };
  obj = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};