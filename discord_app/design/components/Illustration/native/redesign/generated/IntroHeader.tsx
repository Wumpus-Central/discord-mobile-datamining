// === Module 20453: IntroHeader ===

// Module 20453 (IntroHeader)
import shared from "shared" /* 5250 */;
import FastImageDefault from "FastImage" /* 5957 */;
import _mod8117 from "module_8117" /* 8117 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export function getIntroHeaderSource(theme) {
  return _mod8117.getIllustrationSource(theme, {
    dark() {
      return require("module_20454");
    },
    darker() {
      return require("module_20455");
    },
    light() {
      return require("module_20456");
    }
  });
}
export function useIntroHeaderSource() {
  const obj = shared;
  return _mod8117.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20454");
    },
    darker() {
      return require("module_20455");
    },
    light() {
      return require("module_20456");
    }
  });
}
export function IntroHeader(arg0) {
  const obj = shared;
  const illustrationSource = _mod8117.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_20454");
    },
    darker() {
      return require("module_20455");
    },
    light() {
      return require("module_20456");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_20454");
    },
    darker() {
      return require("module_20455");
    },
    light() {
      return require("module_20456");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}