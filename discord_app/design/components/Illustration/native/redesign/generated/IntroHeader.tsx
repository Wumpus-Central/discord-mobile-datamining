// === Module 17657: IntroHeader ===

// Module 17657 (IntroHeader)
import shared from "shared" /* 4411 */;
import _mod8233 from "module_8233" /* 8233 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  const obj = {
    dark() {
      return require("module_17658");
    },
    darker() {
      return require("module_17659");
    },
    light() {
      return require("module_17660");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  const obj = {
    dark() {
      return require("module_17658");
    },
    darker() {
      return require("module_17659");
    },
    light() {
      return require("module_17660");
    }
  };
  return _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const IntroHeader = function IntroHeader(arg0) {
  let obj = {
    dark() {
      return require("module_17658");
    },
    darker() {
      return require("module_17659");
    },
    light() {
      return require("module_17660");
    }
  };
  obj = {};
  const illustrationSource = _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};