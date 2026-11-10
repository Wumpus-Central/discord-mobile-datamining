// === Module 17047: Blocked ===

// Module 17047 (Blocked)
import shared from "shared" /* 5149 */;
import FastImageDefault from "FastImage" /* 5844 */;
import _mod8886 from "module_8886" /* 8886 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export function getBlockedSource(theme) {
  return _mod8886.getIllustrationSource(theme, {
    dark() {
      return require("module_17048");
    },
    darker() {
      return require("module_17049");
    },
    light() {
      return require("module_17050");
    }
  });
}
export function useBlockedSource() {
  const obj = shared;
  return _mod8886.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17048");
    },
    darker() {
      return require("module_17049");
    },
    light() {
      return require("module_17050");
    }
  });
}
export function Blocked(arg0) {
  const obj = shared;
  const illustrationSource = _mod8886.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17048");
    },
    darker() {
      return require("module_17049");
    },
    light() {
      return require("module_17050");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_17048");
    },
    darker() {
      return require("module_17049");
    },
    light() {
      return require("module_17050");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}