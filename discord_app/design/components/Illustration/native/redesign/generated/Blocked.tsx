// === Module 16254: Blocked ===

// Module 16254 (Blocked)
import shared from "shared" /* 5019 */;
import FastImageDefault from "FastImage" /* 5699 */;
import _mod8524 from "module_8524" /* 8524 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export function getBlockedSource(theme) {
  return _mod8524.getIllustrationSource(theme, {
    dark() {
      return require("module_16255");
    },
    darker() {
      return require("module_16256");
    },
    light() {
      return require("module_16257");
    }
  });
}
export function useBlockedSource() {
  const obj = shared;
  return _mod8524.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16255");
    },
    darker() {
      return require("module_16256");
    },
    light() {
      return require("module_16257");
    }
  });
}
export function Blocked(arg0) {
  const obj = shared;
  const illustrationSource = _mod8524.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16255");
    },
    darker() {
      return require("module_16256");
    },
    light() {
      return require("module_16257");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_16255");
    },
    darker() {
      return require("module_16256");
    },
    light() {
      return require("module_16257");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}