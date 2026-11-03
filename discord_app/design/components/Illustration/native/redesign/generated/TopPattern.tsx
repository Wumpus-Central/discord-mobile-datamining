// === Module 15547: TopPattern ===

// Module 15547 (TopPattern)
import shared from "shared" /* 5148 */;
import FastImageDefault from "FastImage" /* 5837 */;
import _mod8930 from "module_8930" /* 8930 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export function getTopPatternSource(theme) {
  return _mod8930.getIllustrationSource(theme, {
    dark() {
      return require("module_15548");
    },
    darker() {
      return require("module_15549");
    },
    light() {
      return require("module_15550");
    }
  });
}
export function useTopPatternSource() {
  const obj = shared;
  return _mod8930.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15548");
    },
    darker() {
      return require("module_15549");
    },
    light() {
      return require("module_15550");
    }
  });
}
export function TopPattern(arg0) {
  const obj = shared;
  const illustrationSource = _mod8930.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15548");
    },
    darker() {
      return require("module_15549");
    },
    light() {
      return require("module_15550");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_15548");
    },
    darker() {
      return require("module_15549");
    },
    light() {
      return require("module_15550");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}