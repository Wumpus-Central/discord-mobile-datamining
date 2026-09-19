// === Module 18082: IntroHeader ===

// Module 18082 (IntroHeader)
import shared from "shared" /* 4607 */;
import _mod8501 from "module_8501" /* 8501 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  return _mod8501.getIllustrationSource(theme, {
    dark() {
      return require("module_18083");
    },
    darker() {
      return require("module_18084");
    },
    light() {
      return require("module_18085");
    }
  });
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  const obj = shared;
  return _mod8501.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18083");
    },
    darker() {
      return require("module_18084");
    },
    light() {
      return require("module_18085");
    }
  });
};
export const IntroHeader = function IntroHeader(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8501.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18083");
    },
    darker() {
      return require("module_18084");
    },
    light() {
      return require("module_18085");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};