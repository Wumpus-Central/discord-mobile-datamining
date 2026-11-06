// === Module 19274: Pending ===

// Module 19274 (Pending)
import shared from "shared" /* 5177 */;
import FastImageDefault from "FastImage" /* 5872 */;
import _mod8898 from "module_8898" /* 8898 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export function getPendingSource(theme) {
  return _mod8898.getIllustrationSource(theme, {
    dark() {
      return require("module_19275");
    },
    darker() {
      return require("module_19276");
    },
    light() {
      return require("module_19277");
    }
  });
}
export function usePendingSource() {
  const obj = shared;
  return _mod8898.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19275");
    },
    darker() {
      return require("module_19276");
    },
    light() {
      return require("module_19277");
    }
  });
}
export function Pending(arg0) {
  const obj = shared;
  const illustrationSource = _mod8898.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19275");
    },
    darker() {
      return require("module_19276");
    },
    light() {
      return require("module_19277");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_19275");
    },
    darker() {
      return require("module_19276");
    },
    light() {
      return require("module_19277");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}