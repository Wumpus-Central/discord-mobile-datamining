// === Module 19010: Pending ===

// Module 19010 (Pending)
import shared from "shared" /* 4920 */;
import FastImageDefault from "FastImage" /* 5600 */;
import _mod7786 from "module_7786" /* 7786 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export function getPendingSource(theme) {
  return _mod7786.getIllustrationSource(theme, {
    dark() {
      return require("module_19011");
    },
    darker() {
      return require("module_19012");
    },
    light() {
      return require("module_19013");
    }
  });
}
export function usePendingSource() {
  const obj = shared;
  return _mod7786.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19011");
    },
    darker() {
      return require("module_19012");
    },
    light() {
      return require("module_19013");
    }
  });
}
export function Pending(arg0) {
  const obj = shared;
  const illustrationSource = _mod7786.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19011");
    },
    darker() {
      return require("module_19012");
    },
    light() {
      return require("module_19013");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_19011");
    },
    darker() {
      return require("module_19012");
    },
    light() {
      return require("module_19013");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}