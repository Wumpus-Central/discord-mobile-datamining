// === Module 20096: IntroHeader ===

// Module 20096 (IntroHeader)
import shared from "shared" /* 5148 */;
import FastImageDefault from "FastImage" /* 5851 */;
import _mod8947 from "module_8947" /* 8947 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export function getIntroHeaderSource(theme) {
  return _mod8947.getIllustrationSource(theme, {
    dark() {
      return require("module_20097");
    },
    darker() {
      return require("module_20098");
    },
    light() {
      return require("module_20099");
    }
  });
}
export function useIntroHeaderSource() {
  const obj = shared;
  return _mod8947.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20097");
    },
    darker() {
      return require("module_20098");
    },
    light() {
      return require("module_20099");
    }
  });
}
export function IntroHeader(arg0) {
  const obj = shared;
  const illustrationSource = _mod8947.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20097");
    },
    darker() {
      return require("module_20098");
    },
    light() {
      return require("module_20099");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_20097");
    },
    darker() {
      return require("module_20098");
    },
    light() {
      return require("module_20099");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}