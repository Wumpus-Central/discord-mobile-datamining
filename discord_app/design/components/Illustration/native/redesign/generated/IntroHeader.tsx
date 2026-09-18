// === Module 18002: IntroHeader ===

// Module 18002 (IntroHeader)
import shared from "shared" /* 4573 */;
import _mod8463 from "module_8463" /* 8463 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  return _mod8463.getIllustrationSource(theme, {
    dark() {
      return require("module_18003");
    },
    darker() {
      return require("module_18004");
    },
    light() {
      return require("module_18005");
    }
  });
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  const obj = shared;
  return _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18003");
    },
    darker() {
      return require("module_18004");
    },
    light() {
      return require("module_18005");
    }
  });
};
export const IntroHeader = function IntroHeader(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18003");
    },
    darker() {
      return require("module_18004");
    },
    light() {
      return require("module_18005");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};