// === Module 17752: IntroHeader ===

// Module 17752 (IntroHeader)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  const obj = {
    dark() {
      return require("module_17753");
    },
    darker() {
      return require("module_17754");
    },
    light() {
      return require("module_17755");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  const obj = {
    dark() {
      return require("module_17753");
    },
    darker() {
      return require("module_17754");
    },
    light() {
      return require("module_17755");
    }
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const IntroHeader = function IntroHeader(arg0) {
  let obj = {
    dark() {
      return require("module_17753");
    },
    darker() {
      return require("module_17754");
    },
    light() {
      return require("module_17755");
    }
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};