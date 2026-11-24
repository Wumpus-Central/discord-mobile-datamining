// === Module 19931: IntroHeader ===

// Module 19931 (IntroHeader)
import shared from "shared" /* 4924 */;
import FastImageDefault from "FastImage" /* 5604 */;
import _mod8425 from "module_8425" /* 8425 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export function getIntroHeaderSource(theme) {
  return _mod8425.getIllustrationSource(theme, {
    dark() {
      return require("module_19932");
    },
    darker() {
      return require("module_19933");
    },
    light() {
      return require("module_19934");
    }
  });
}
export function useIntroHeaderSource() {
  const obj = shared;
  return _mod8425.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19932");
    },
    darker() {
      return require("module_19933");
    },
    light() {
      return require("module_19934");
    }
  });
}
export function IntroHeader(arg0) {
  const obj = shared;
  const illustrationSource = _mod8425.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19932");
    },
    darker() {
      return require("module_19933");
    },
    light() {
      return require("module_19934");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_19932");
    },
    darker() {
      return require("module_19933");
    },
    light() {
      return require("module_19934");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}