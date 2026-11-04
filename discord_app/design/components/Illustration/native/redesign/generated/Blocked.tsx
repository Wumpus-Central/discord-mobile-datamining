// === Module 16938: Blocked ===

// Module 16938 (Blocked)
import shared from "shared" /* 5148 */;
import FastImageDefault from "FastImage" /* 5851 */;
import _mod8947 from "module_8947" /* 8947 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export function getBlockedSource(theme) {
  return _mod8947.getIllustrationSource(theme, {
    dark() {
      return require("module_16939");
    },
    darker() {
      return require("module_16940");
    },
    light() {
      return require("module_16941");
    }
  });
}
export function useBlockedSource() {
  const obj = shared;
  return _mod8947.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16939");
    },
    darker() {
      return require("module_16940");
    },
    light() {
      return require("module_16941");
    }
  });
}
export function Blocked(arg0) {
  const obj = shared;
  const illustrationSource = _mod8947.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16939");
    },
    darker() {
      return require("module_16940");
    },
    light() {
      return require("module_16941");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_16939");
    },
    darker() {
      return require("module_16940");
    },
    light() {
      return require("module_16941");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}