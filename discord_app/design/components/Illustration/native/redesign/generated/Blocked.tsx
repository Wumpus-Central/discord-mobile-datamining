// === Module 17205: Blocked ===

// Module 17205 (Blocked)
import shared from "shared" /* 5250 */;
import FastImageDefault from "FastImage" /* 5957 */;
import _mod8117 from "module_8117" /* 8117 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export function getBlockedSource(theme) {
  return _mod8117.getIllustrationSource(theme, {
    dark() {
      return require("module_17206");
    },
    darker() {
      return require("module_17207");
    },
    light() {
      return require("module_17208");
    }
  });
}
export function useBlockedSource() {
  const obj = shared;
  return _mod8117.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17206");
    },
    darker() {
      return require("module_17207");
    },
    light() {
      return require("module_17208");
    }
  });
}
export function Blocked(arg0) {
  const obj = shared;
  const illustrationSource = _mod8117.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17206");
    },
    darker() {
      return require("module_17207");
    },
    light() {
      return require("module_17208");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_17206");
    },
    darker() {
      return require("module_17207");
    },
    light() {
      return require("module_17208");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}