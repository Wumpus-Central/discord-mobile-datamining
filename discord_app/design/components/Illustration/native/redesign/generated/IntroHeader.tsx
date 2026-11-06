// === Module 20153: IntroHeader ===

// Module 20153 (IntroHeader)
import shared from "shared" /* 5177 */;
import FastImageDefault from "FastImage" /* 5872 */;
import _mod8898 from "module_8898" /* 8898 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export function getIntroHeaderSource(theme) {
  return _mod8898.getIllustrationSource(theme, {
    dark() {
      return require("module_20154");
    },
    darker() {
      return require("module_20155");
    },
    light() {
      return require("module_20156");
    }
  });
}
export function useIntroHeaderSource() {
  const obj = shared;
  return _mod8898.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20154");
    },
    darker() {
      return require("module_20155");
    },
    light() {
      return require("module_20156");
    }
  });
}
export function IntroHeader(arg0) {
  const obj = shared;
  const illustrationSource = _mod8898.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20154");
    },
    darker() {
      return require("module_20155");
    },
    light() {
      return require("module_20156");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_20154");
    },
    darker() {
      return require("module_20155");
    },
    light() {
      return require("module_20156");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}