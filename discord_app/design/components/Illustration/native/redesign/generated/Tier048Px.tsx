// === Module 14043: Tier048Px ===

// Module 14043 (Tier048Px)
import shared from "shared" /* 4830 */;
import FastImageDefault from "FastImage" /* 5510 */;
import _mod7697 from "module_7697" /* 7697 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export function getTier048PxSource(theme) {
  return _mod7697.getIllustrationSource(theme, {
    dark() {
      return require("module_14044");
    },
    darker() {
      return require("module_14045");
    },
    light() {
      return require("module_14046");
    }
  });
}
export function useTier048PxSource() {
  const obj = shared;
  return _mod7697.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14044");
    },
    darker() {
      return require("module_14045");
    },
    light() {
      return require("module_14046");
    }
  });
}
export function Tier048Px(arg0) {
  const obj = shared;
  const illustrationSource = _mod7697.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14044");
    },
    darker() {
      return require("module_14045");
    },
    light() {
      return require("module_14046");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_14044");
    },
    darker() {
      return require("module_14045");
    },
    light() {
      return require("module_14046");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}