// === Module 19375: Pending ===

// Module 19375 (Pending)
import shared from "shared" /* 5149 */;
import FastImageDefault from "FastImage" /* 5844 */;
import _mod8886 from "module_8886" /* 8886 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export function getPendingSource(theme) {
  return _mod8886.getIllustrationSource(theme, {
    dark() {
      return require("module_19376");
    },
    darker() {
      return require("module_19377");
    },
    light() {
      return require("module_19378");
    }
  });
}
export function usePendingSource() {
  const obj = shared;
  return _mod8886.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19376");
    },
    darker() {
      return require("module_19377");
    },
    light() {
      return require("module_19378");
    }
  });
}
export function Pending(arg0) {
  const obj = shared;
  const illustrationSource = _mod8886.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19376");
    },
    darker() {
      return require("module_19377");
    },
    light() {
      return require("module_19378");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_19376");
    },
    darker() {
      return require("module_19377");
    },
    light() {
      return require("module_19378");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}