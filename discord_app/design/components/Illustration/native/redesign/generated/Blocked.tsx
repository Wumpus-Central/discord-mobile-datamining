// === Module 16100: Blocked ===

// Module 16100 (Blocked)
import shared from "shared" /* 4920 */;
import FastImageDefault from "FastImage" /* 5600 */;
import _mod7786 from "module_7786" /* 7786 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export function getBlockedSource(theme) {
  return _mod7786.getIllustrationSource(theme, {
    dark() {
      return require("module_16101");
    },
    darker() {
      return require("module_16102");
    },
    light() {
      return require("module_16103");
    }
  });
}
export function useBlockedSource() {
  const obj = shared;
  return _mod7786.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16101");
    },
    darker() {
      return require("module_16102");
    },
    light() {
      return require("module_16103");
    }
  });
}
export function Blocked(arg0) {
  const obj = shared;
  const illustrationSource = _mod7786.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16101");
    },
    darker() {
      return require("module_16102");
    },
    light() {
      return require("module_16103");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_16101");
    },
    darker() {
      return require("module_16102");
    },
    light() {
      return require("module_16103");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}