// === Module 17020: Blocked ===

// Module 17020 (Blocked)
import shared from "shared" /* 5147 */;
import FastImageDefault from "FastImage" /* 5842 */;
import _mod8880 from "module_8880" /* 8880 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export function getBlockedSource(theme) {
  return _mod8880.getIllustrationSource(theme, {
    dark() {
      return require("module_17021");
    },
    darker() {
      return require("module_17022");
    },
    light() {
      return require("module_17023");
    }
  });
}
export function useBlockedSource() {
  const obj = shared;
  return _mod8880.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17021");
    },
    darker() {
      return require("module_17022");
    },
    light() {
      return require("module_17023");
    }
  });
}
export function Blocked(arg0) {
  const obj = shared;
  const illustrationSource = _mod8880.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17021");
    },
    darker() {
      return require("module_17022");
    },
    light() {
      return require("module_17023");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_17021");
    },
    darker() {
      return require("module_17022");
    },
    light() {
      return require("module_17023");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}